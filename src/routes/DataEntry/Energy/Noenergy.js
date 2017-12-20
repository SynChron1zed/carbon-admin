/**
 * 能源活动不确定性Created by dixu on 2017/10/31.
 */


import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch ,Radio } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Oilgas.less';
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

class EditableCell1 extends React.Component {

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

        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'name', text),
          props: {},

        };

          return obj}

      }, {
        title: '排放量（万吨CO2e）', dataIndex: 'p1', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'p1', text),
          props: {},

        };



          return obj},
      },{
        title: '不确定性（%）', dataIndex: 'uncertainty', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'uncertainty', text),
          props: {},

        };



          return obj},
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 80,

        render: (text, record, index) => {

          const { editable } = this.state.data[index].uncertainty;
          return (
            <div className={styles.editableOperations} >

              {
                  index==5 ? <span></span>:

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
      }
    ];



    this.state = {

      data: [],
      data1: [],
      loading: true ,

      collapsed: false,
      select:1,
      trigger:true,
      user:[],




      AllData:[],
      OtherAllData:[],
      years:'2014'
    };


    this.OtherqueryGut('2014');

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

    if(key  == 'uncertainty'){

      this.updateGut(index,data);
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

  //

  OtherqueryGut(years){


    post('/report/energyActivity/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {




          var Alldata =res.data;




          const _Data = [
            Alldata.detail.CO2EW.fossilFuel,
            Alldata.detail.CO2EW.biomassBurning,//2. 生物质燃烧(以能源利用为目的)
            (Alldata.detail.CH4.coalMiningEscape*21+Alldata.detail.CH4EW.coalMiningEscape*310),//3. 煤炭开采逃逸
            Alldata.detail.CH4.oilAndGasSystemsEscape*21+Alldata.detail.CH4EW.oilAndGasSystemsEscape*310,//4. 油气系统逃逸
            Alldata.detail.CO2EW.nonEnergyUse,//5. 非能源利用
            Alldata.detail.CO2EW.totalEnergyActivities,//能源活动总计

          ]  //co2

          this.setState({ OtherAllData: _Data});

          this.queryGut(years);

          this.setState({ loading: false});



        } else {
          message.error('数据错误！');
        }
      });

  }

  queryGut(years){


    post('/uncertainty/energyActivity/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {



          var Alldata =res.data;
          var otherData = this.state.OtherAllData;




          var total = (Math.pow(otherData[0]*Alldata.totalFossilFuels.uncertainty,2)
          +Math.pow(otherData[1]*Alldata.biomassBurning.uncertainty,2)
          +Math.pow(otherData[2]*Alldata.coalMiningAndMineActivitiesToEscape.uncertainty,2)
          +Math.pow(otherData[3]*Alldata.nonEnergyUseEmissions.uncertainty,2)
          +Math.pow(otherData[4]*Alldata.oilAndGasSystemsEscape.uncertainty,2))/otherData[5]

          const _Data = [
            Alldata.totalFossilFuels.uncertainty,
            Alldata.biomassBurning.uncertainty,
            Alldata.coalMiningAndMineActivitiesToEscape.uncertainty,
            Alldata.nonEnergyUseEmissions.uncertainty,
            Alldata.oilAndGasSystemsEscape.uncertainty,
            total.toFixed(2)
          ]  //co2




          const fossilTitle = [

            '化石燃料燃烧',
            '生物质燃料燃烧',
            '煤矿开采和矿后活动逃逸排放',
            '石油和天然气系统逃逸排放',
            '非能源利用',
            '总计',


          ]



          const _b1= []


          for(var i = 0 ; i<_Data.length;i++){


                        _b1.push({
                            key:i,
                            name:{

                              value:fossilTitle[i] ,
                            },
                          p1:{

                              value:otherData[i].toFixed(2) ,
                            },
                         uncertainty: {
                              editable: false,
                              value:_Data[i] ,
                            },

                          }
                        )
                      }


          console.log(_b1);


          this.setState({data:_b1});

          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //update不确定性
  updateGut(index,data,a){

    var data  = data

    const Directory = [
      'totalFossilFuels',
      'biomassBurning',
      'coalMiningAndMineActivitiesToEscape',
      'nonEnergyUseEmissions',
      'oilAndGasSystemsEscape',


    ]



    var DirectoryIndex = Directory[index];

    var url = '/uncertainty/energyActivity/update'
    var bodyName = 'energyActivity';







    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "uncertainty": data[index].uncertainty.value,

    }

    post(url, obj)
      .then((res) => {

        if (res.code==0) {

          message.success(res.message);
          this.OtherqueryGut(this.state.years)

        } else {
          message.error('数据录入有误，请重新录入！');
        }
      });
  }

  //年份选择
  selesctYears(years){

    this.setState({ loading: true});
    this.setState({years:years})
    this.queryGut(years)
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
          <span className={styles.title_span}> 不确定性计算</span>
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

        <Spin spinning={this.state.loading} delay={500}>




          <div className={styles.entryBody} id="bodyTable1"  >
            <p>能源活动不确定性</p>


            <Table size="small" pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>
        </Spin>









      </div>
    );

  }
}


export default Form.create()(ElectricTable);

