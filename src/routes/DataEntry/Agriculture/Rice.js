/**
 * 稻田Created by dixu on 2017/10/17.
 */
import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch ,Radio } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Rice.less';
import createReactClass from 'create-react-class';
import { post } from '../../../utils/carbonRequest';
import $ from 'jquery';
const RadioGroup = Radio.Group;

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
        width: 100,

        render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),},

      {
        title: '水稻播种面积(ha)', dataIndex: 'riceSownArea', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'riceSownArea', text),
      }, {
        title: '排放因子(kgCH4/ha)', dataIndex: 'emissionFactor', width: 150,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'emissionFactor', text),
      }, {
        title: 'CH4排放量(吨)', dataIndex: 'CH4Emissions', width: 200,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'CH4Emissions', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 60,

        render: (text, record, index) => {

          const { editable } = this.state.data[index].riceSownArea;
          return (
            <div className={styles.editableOperations} >

              {
                index == 4
                  ? <span></span> :
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



      years:'2014',
      AllData:[]
    };

    this.queryRice('2014');

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




    const data = [...this.state.data];
    data[index][key].value = value;
    this.setState({ data });

    if(key  == 'emissionFactor'){

     this.updateRice(index,data);
    }

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

  //水稻
  queryRice(years){


    post('/activityLevelDataEntry/agricultureActivity/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data;


          const _Data = []

          _Data.push(Alldata.calculationOfMethaneEmissionsFromPaddyFields.singleCroppingOfRice);//水稻
          _Data.push(Alldata.calculationOfMethaneEmissionsFromPaddyFields.doubleSeasonEarlyRice);//水稻
          _Data.push(Alldata.calculationOfMethaneEmissionsFromPaddyFields.doubleSeasonLateRice);//水稻
          _Data.push(Alldata.calculationOfMethaneEmissionsFromPaddyFields.winterPaddyField);//水稻




          const fossilTitle = [


            '单季稻',
            '双季早稻',
            '双季晚稻',
            '冬水田',



          ]




          const _a = [];

          var _riceSownArea = 0;
          var _emissionFactor = 0;
          var _CH4Emissions = 0;

          for(var i = 0 ;i<4;i++){


              _a.push({
                key: i,
                name:fossilTitle[i],
                riceSownArea: _Data[i].riceSownArea,
                emissionFactor: _Data[i].emissionFactor,
                CH4Emissions: (_Data[i].riceSownArea*_Data[i].emissionFactor/1000),

              });

            _riceSownArea += _Data[i].riceSownArea;
            _emissionFactor += _Data[i].emissionFactor;
            _CH4Emissions += (_Data[i].riceSownArea*_Data[i].emissionFactor/1000);

          }





          const _b = [];


          for(var i = 0 ; i<_a.length;i++){


            _b.push({
                key:_a[i].key,
                name:{

                  value:_a[i].name ,
                },
                riceSownArea:{
                  editable: false,
                  value:_a[i].riceSownArea ,
                },
                emissionFactor: {
                  editable: false,
                  value:_a[i].emissionFactor ,
                },
                CH4Emissions: {

                  value:_a[i].CH4Emissions ,
                },

              }
            )

          }


          _b.push({
              key:_a.length,
              name:{

                value:'小计' ,
              },
              riceSownArea:{

                value:_riceSownArea.toFixed(2) ,
              },
              emissionFactor: {

                value:_emissionFactor.toFixed(2) ,
              },
              CH4Emissions: {

                value:_CH4Emissions.toFixed(2) ,
              },

            }
          )




          this.setState({data:_b});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //水稻update
  updateRice(index,data,a){

    var data  = data

    const Directory = [
      'singleCroppingOfRice',
      'doubleSeasonEarlyRice',
      'doubleSeasonLateRice',
      'winterPaddyField',



    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/agricultureActivity/update'
    var bodyName = 'agricultureActivity';
    var bodyName1 = 'calculationOfMethaneEmissionsFromPaddyFields';






    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}
    obj[bodyName][bodyName1]={}
    obj[bodyName][bodyName1][DirectoryIndex]= {
      "riceSownArea": data[index].riceSownArea.value,
      "emissionFactor": data[index].emissionFactor.value,


    }

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          this.queryRice(this.state.years)
          message.success(res.message);

        } else {
          message.error('数据录入有误，请重新录入！');
        }
      });
  }

  //年份选择
  selesctYears(years){

    this.setState({ loading: true});
    this.setState({years:years})
    this.queryRice(years)
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
          <span className={styles.title_span}>稻田</span>
        </div>

        <div className={styles.select}>
          <div className={styles.targetChoose}>
            <span className={styles.selectH1}>数据年份:</span>
            <ul>
              <li id="li1" className={'2005'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('2005')}}>2005</li>
              <li id="li2" className={'2010'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('2010')}}>2010</li>
              <li id="li3" className={'2012'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('2012')}}>2012</li>
              <li id="li4" className={'2014'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('2014')}}>2014</li>
            </ul>
          </div>



        </div>

        <Spin spinning={this.state.loading} >
        <div className={styles.entryBody} id="bodyTable1"  >
          <p>稻田甲烷排放</p>
          <div className={styles.greenSelect}>
            <span>是否采用本地化排放因子：</span>
            <RadioGroup defaultValue={1}>
              <Radio value={1}>否</Radio>
              <Radio value={2}>是</Radio>
            </RadioGroup>
          </div>

          <Table size="small" pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>

        </Spin>








      </div>
    );

  }
}


export default Form.create()(ElectricTable);
