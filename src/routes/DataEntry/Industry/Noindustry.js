/**
 * 工业活动不确定性Created by dixu on 2017/10/31.
 */


import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch ,Radio } from 'antd';

import ReactDOM from 'react-dom'
import styles from './GreenhouseGas.less';
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

        colSpan:1,
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
        title: '排放因子不确定性（%）', dataIndex: 'uncertainty', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'uncertainty', text),
          props: {},

        };

          return obj},
      },
      {
        title: '活动水平不确定性（%）', dataIndex: 'uncertainty1', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'uncertainty1', text),
          props: {},

        };

          return obj},
      },
      {
        title: '不确定性（%）', dataIndex: 'uncertainty2', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'uncertainty2', text),
          props: {},

        };

          return obj},
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

        
                const { editable } = this.state.data[index].uncertainty;
     
   
          return (
            <div className={styles.editableOperations} >

              {
                index==12 || index == 9 ||index == 2 || index == 6 ? <span></span>:

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
      years:'2014'
    };

    this.queryGut('2014');

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


    if(index==2 ||index==6){
        if(key  == 'uncertainty2'){
                  this.updateGut(index,data);
                }
    }else{

    if(key  == 'uncertainty1'){

      this.updateGut(index,data);
    }
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
  queryGut(years){


    post('/uncertainty/industrialProductionProcess/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {




          var Alldata =res.data;

          const _Data = [
            Alldata.cementProductionProcess.emissionFactorUncertainty,//水泥生产过程
            Alldata.limeProductionProcess.emissionFactorUncertainty, 
            '——————', //钢铁生产过程
            Alldata.calciumCarbideProductionProcess.emissionFactorUncertainty,//电石生产过程
            Alldata.adipicAcidProductionProcess.emissionFactorUncertainty,
            Alldata.nitricAcidProductionProcess.emissionFactorUncertainty,
            '——————', //铝生产过程
            Alldata.magnesiumProductionProcess.emissionFactorUncertainty,
            Alldata.electricPowerEquipmentProductionProcess.emissionFactorUncertainty,
            '——————',//半导体生产过程
            Alldata.chlorodifluoromethaneProductionProcess.emissionFactorUncertainty,
            Alldata.hydrofluorocarbonProductionProcess.emissionFactorUncertainty,//氢氟烃生产过程
            0
          ]  //co2
         
          const _Data1 = [
            Alldata.cementProductionProcess.activityLevelUncertainty,//水泥生产过程
            Alldata.limeProductionProcess.activityLevelUncertainty, 
            '——————', //钢铁生产过程
            Alldata.calciumCarbideProductionProcess.activityLevelUncertainty,//电石生产过程
            Alldata.adipicAcidProductionProcess.activityLevelUncertainty,
            Alldata.nitricAcidProductionProcess.activityLevelUncertainty,
            '——————', //铝生产过程
            Alldata.magnesiumProductionProcess.activityLevelUncertainty,
            Alldata.electricPowerEquipmentProductionProcess.activityLevelUncertainty,
            '——————',//半导体生产过程
            Alldata.chlorodifluoromethaneProductionProcess.activityLevelUncertainty,
            Alldata.hydrofluorocarbonProductionProcess.activityLevelUncertainty,//氢氟烃生产过程
            0
          ]

          const _Data2 = [
            Alldata.cementProductionProcess.emissionFactorUncertainty*Alldata.cementProductionProcess.emissionFactorUncertainty
            +Alldata.cementProductionProcess.activityLevelUncertainty*Alldata.cementProductionProcess.activityLevelUncertainty,//水泥生产过程

            Alldata.limeProductionProcess.emissionFactorUncertainty*Alldata.limeProductionProcess.emissionFactorUncertainty
            +Alldata.limeProductionProcess.activityLevelUncertainty*Alldata.limeProductionProcess.activityLevelUncertainty, 

            Alldata.steelProductionProcess.emissionFactorUncertainty, //钢铁生产过程
            
            Alldata.calciumCarbideProductionProcess.emissionFactorUncertainty*Alldata.calciumCarbideProductionProcess.emissionFactorUncertainty
            +Alldata.calciumCarbideProductionProcess.activityLevelUncertainty*Alldata.calciumCarbideProductionProcess.activityLevelUncertainty,//电石生产过程

            Alldata.adipicAcidProductionProcess.emissionFactorUncertainty*Alldata.adipicAcidProductionProcess.emissionFactorUncertainty
            +Alldata.adipicAcidProductionProcess.activityLevelUncertainty*Alldata.adipicAcidProductionProcess.activityLevelUncertainty,

            Alldata.nitricAcidProductionProcess.emissionFactorUncertainty*Alldata.nitricAcidProductionProcess.emissionFactorUncertainty
            +Alldata.nitricAcidProductionProcess.activityLevelUncertainty*Alldata.nitricAcidProductionProcess.activityLevelUncertainty,

            Alldata.aluminumProductionProcess.emissionFactorUncertainty, //铝生产过程

            Alldata.magnesiumProductionProcess.emissionFactorUncertainty*Alldata.magnesiumProductionProcess.emissionFactorUncertainty
            +Alldata.magnesiumProductionProcess.activityLevelUncertainty*Alldata.magnesiumProductionProcess.activityLevelUncertainty,

            Alldata.electricPowerEquipmentProductionProcess.emissionFactorUncertainty*Alldata.electricPowerEquipmentProductionProcess.emissionFactorUncertainty
            +Alldata.electricPowerEquipmentProductionProcess.activityLevelUncertainty*Alldata.electricPowerEquipmentProductionProcess.activityLevelUncertainty,

            Alldata.semiconductorProductionProcess,//半导体生产过程

            Alldata.chlorodifluoromethaneProductionProcess.activityLevelUncertainty*Alldata.chlorodifluoromethaneProductionProcess.activityLevelUncertainty
            +Alldata.chlorodifluoromethaneProductionProcess.activityLevelUncertainty*Alldata.chlorodifluoromethaneProductionProcess.activityLevelUncertainty,

            Alldata.hydrofluorocarbonProductionProcess.emissionFactorUncertainty*Alldata.hydrofluorocarbonProductionProcess.emissionFactorUncertainty
            +Alldata.hydrofluorocarbonProductionProcess.activityLevelUncertainty*Alldata.hydrofluorocarbonProductionProcess.activityLevelUncertainty,//氢氟烃生产过程
            0
          ]


          const fossilTitle = [

            '水泥生产过程',
            '石灰生产过程',
            '钢铁生产过程',
            '电石生产过程',
            '己二酸生产过程',
            '硝酸生产过程',
            '铝生产过程',
            '镁生产过程',
            '电力设备生产过程',
            '半导体生产过程',
            '一氯二氟甲烷生产过程',
            '氢氟烃生产过程',
            '总计',
    

          ]
       


          const _b1= []

      
          for(var i = 0 ; i<_Data.length;i++){
            
            if(i==2 || i == 6 ){
                _b1.push({
                    key:i,
                    name:{
    
                      value:fossilTitle[i] ,
                    },
                  p1:{
                  
                      value:0 ,
                    },
                 uncertainty: {
                      
                      value:_Data[i] ,
                    },
                    uncertainty1: {
                       
                        value:_Data1[i] ,
                      },
                         uncertainty2: {
                            editable: false,
                            value:_Data2[i] ,
                      },
                  }
                )
            }else{
                _b1.push({
                    key:i,
                    name:{
    
                      value:fossilTitle[i] ,
                    },
                  p1:{
                  
                      value:0 ,
                    },
                 uncertainty: {
                      editable:  false,
                      value:_Data[i] ,
                    },
                    uncertainty1: {
                        editable: false,
                        value:_Data1[i] ,
                      },
                         uncertainty2: {
                       
                        value:_Data2[i],
                      },
                  }
                )
            }
                        
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
      'cementProductionProcess',
      'limeProductionProcess',
      'steelProductionProcess',
      'calciumCarbideProductionProcess',
      'adipicAcidProductionProcess',
      'nitricAcidProductionProcess',
      'aluminumProductionProcess',
      'magnesiumProductionProcess',
      'electricPowerEquipmentProductionProcess',
      'semiconductorProductionProcess',
      'chlorodifluoromethaneProductionProcess',
      'hydrofluorocarbonProductionProcess',
    

    ]



    var DirectoryIndex = Directory[index];

    var url = '/uncertainty/industrialProductionProcess/update'
    var bodyName = 'industrialProductionProcess';
   






    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}
  
    if(index == 2||index == 6){
        obj[bodyName][DirectoryIndex]= {
            "emissionFactorUncertainty": data[index].uncertainty2.value,
            "activityLevelUncertainty": 0,
          }
    }else{
    obj[bodyName][DirectoryIndex]= {
      "emissionFactorUncertainty": data[index].uncertainty.value,
      "activityLevelUncertainty": data[index].uncertainty1.value,
    }
}
    post(url, obj)
      .then((res) => {

        if (res.code==0) {

          message.success(res.message);
          this.queryGut(this.state.years)

        } else {
          message.error(res.message);
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
            <p>废弃物活动温室气体清单报告不确定性</p>


            <Table  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>
        </Spin>









      </div>
    );

  }
}


export default Form.create()(ElectricTable);

