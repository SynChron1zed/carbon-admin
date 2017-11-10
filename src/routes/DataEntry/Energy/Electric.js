/**
 * 电力Created by dixu on 2017/10/17.
 */
import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch  } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Electric.less';
import createReactClass from 'create-react-class';
import { post } from '../../../utils/carbonRequest';
import $ from 'jquery';

class EditableCell extends React.Component {

  state = {
    value: this.props.value,
    editable: this.props.editable || false,
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.editable !== this.state.editable || nextProps.value !== this.state.value) {
      this.setState({ editable: nextProps.editable, value: nextProps.value });
      /*if (nextProps.editable !== this.state.editable ) {
       this.setState({ editable: nextProps.editable});*/
      if (nextProps.editable) {
        this.cacheValue = this.state.value;
      }
    }
    if (nextProps.status && nextProps.status !== this.props.status) {
      if (nextProps.status === 'save') {
        this.props.onChange(this.state.value);
      } else if (nextProps.status === 'cancel') {
        this.setState({ value: this.cacheValue });
        this.props.onChange(this.cacheValue);
      }
    }
  }
  shouldComponentUpdate(nextProps, nextState) {

    return nextProps.editable !== this.state.editable ||
      nextState.value !== this.state.value;
  }
  handleChange(e) {

    const value = e.target.value;
    this.setState({ value });
  }
  render() {

    const { value, editable } = this.state;
    return (
      <div>
        {
          editable ?
            <div>
              <Input
                value={value}
                onChange={e => this.handleChange(e)}
              />
            </div>
            :
            <div className={styles.editableText}>
              {value.toString() || ' '}
            </div>
        }
      </div>
    );
  }
}

class ElectricTable extends React.Component {


  constructor(props) {

    super(props);


    this.columns = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 280,

        colSpan:1,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),},

      {
        title: '电网名称', dataIndex: 'gridName', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'gridName', text),
      }, {
        title: '电量（亿kWh）', dataIndex: 'electricity', width: 150,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'electricity', text),
      }, {
        title: '间接排放因子（kgCO2/kWh)', dataIndex: 'indirectEmissionFactor', width: 200,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'indirectEmissionFactor', text),
      }, {
        title: '排放量（万吨CO2)', dataIndex: 'emissions', width: 150,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'emissions', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data[index].gridName;
          return (
            <div className={styles.editableOperations} >

              { index ==7 ? <span></span> :

                editable ?
                    <span>
                  <a onClick={() => this.editDone(index, 'save')}>确认</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                    :
                    <span>
                  <a onClick={() => this.edit(index)}>编辑</a>
                </span>
              }

            </div>
          );
        },
      }];


    this.state = {

      data: [],
      loading: true ,

      collapsed: false,
      select:1,
      trigger:true,
      user:[],




      AllData:[]
    };

    this.queryElectric();

    //$("#bodyTable1").hide();

  }


  // 部门方法 1.1
  renderColumns(data, index, key, text) {


    const { editable, status } = data[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (

      <EditableCell
        editable={editable}
        value={text}
        onChange={value => this.handleChange(key, index, value)}
        status={status}
      />);
  }


  handleChange(key, index, value) {

    debugger;


    const data = [...this.state.data];
    data[index][key].value = value;
    this.setState({ data });

    if(key  == 'indirectEmissionFactor'){

        this.updateElectric(index,data);
      }
      console.log(data)
    }




  edit(index) {

    const { data } = this.state;
    Object.keys(data[index]).forEach((item) => {
      if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
        data[index][item].editable = true;
      }
    });
    this.setState({ data });
  }

  editDone(index, type) {

    const { data } = this.state;
    Object.keys(data[index]).forEach((item) => {
      if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
        data[index][item].editable = false;
        data[index][item].status = type;
      }
    });
    this.setState({ data }, () => {
      Object.keys(data[index]).forEach((item) => {
        if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
          delete data[index][item].status;
        }
      });
    });
  }

  //co2排放量-非能源利用
  queryElectric(){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/electricityTransferCallsForIndirectCO2Discharge/list', {
      year:'2017',

    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data;

          const _Data = []

          _Data.push(Alldata.recallOfElectricity);//调出电力
          _Data.push(Alldata.transferredToElectricity);//调入电力
          _Data.push(Alldata.fromGrid1); //来自电网1
          _Data.push(Alldata.fromGrid2);//来自电网1
          _Data.push(Alldata.fromGrid3);//来自电网1
          _Data.push(Alldata.fromGrid4);//来自电网1
          _Data.push(Alldata.fromGrid5);//来自电网1
          _Data.push('');//总计




          const fossilTitle = [


            '　　调出电力',
            '　　调入电力',
            '　　　　来自电网1',
            '　　　　来自电网2',
            '　　　　来自电网3',
            '　　　　来自电网4',
            '　　　　来自电网5',
            '　　合计',

          ]

          const _a = [];


          for(var i = 0 ;i<8;i++){


            if(i==7){
              _a.push({
                key: i,
                name:fossilTitle[i],
                gridName: '',
                electricity: '',
                indirectEmissionFactor: '',
                emissions: '0',

              });
            }else {
              _a.push({
                key: i,
                name:fossilTitle[i],
                gridName: _Data[i].gridName,
                electricity: _Data[i].electricity,
                indirectEmissionFactor: _Data[i].indirectEmissionFactor,
                emissions: '0',

              });
            }






          }



          console.log(_a);

          const _b = [];


          for(var i = 0 ; i<_a.length;i++){


            _b.push({
                key:_a[i].key,
                name:{

                  value:_a[i].name ,
                },
              gridName:{
                  editable: false,
                  value:_a[i].gridName ,
                },
              electricity: {
                  editable: false,
                  value:_a[i].electricity ,
                },
              indirectEmissionFactor: {
                  editable: false,
                  value:_a[i].indirectEmissionFactor ,
                },
              emissions: {

                  value:'0' ,
                },

              }
            )
          }

          console.log(_b);


          this.setState({data:_b});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //co2排放量-非能源利用update
  updateElectric(index,data,a){

    var data  = data

    const Directory = [
      'recallOfElectricity',
      'transferredToElectricity',
      'fromGrid1',
      'fromGrid2',
      'fromGrid3',
      'fromGrid4',
      'fromGrid5',



    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/electricityTransferCallsForIndirectCO2Discharge/update'
    var bodyName = 'electricityTransferCallsForIndirectCO2Discharge'






    var obj={
      "year":"2017"
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "gridName": data[index].gridName.value,
      "electricity": data[index].electricity.value,
      "indirectEmissionFactor": data[index].indirectEmissionFactor.value,

    }

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);

        } else {
          message.error(res.message);
        }
      });
  }



  render() {

    const { data } = this.state;
    const dataSource = data.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });



    const columns = this.columns;


    return (
      <div className={styles.normal}>
        <div className={styles.title}>
          <span className={styles.title_span}>电力调入调出CO2间接排放</span>
        </div>

        <div className={styles.select}>
          <div className={styles.targetChoose}>
            <span className={styles.selectH1}>数据年份:</span>
            <ul>
              <li id="li1" >2005</li>
              <li id="li2" >2010</li>
              <li id="li3" >2012</li>
              <li id="li4" className={styles.li_focus}>2017</li>
            </ul>
          </div>



        </div>




        <div className={styles.entryBody} id="bodyTable1" >
          <p>电力调入调出间接排放</p>
          <Spin spinning={this.state.loading} >
            <Table  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 820 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
          </Spin>
        </div>








      </div>
    );

  }
}


export default Form.create()(ElectricTable);
