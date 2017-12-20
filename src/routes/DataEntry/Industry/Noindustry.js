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
        width: 70,


        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'name', text),
          props: {},

        };

          return obj}

      }, {
        title: '排放量（万吨CO2e）', dataIndex: 'p1', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'p1', text),
          props: {},

        };



          return obj},
      },{
        title: '排放因子不确定性（%）', dataIndex: 'uncertainty', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'uncertainty', text),
          props: {},

        };

          return obj},
      },
      {
        title: '活动水平不确定性（%）', dataIndex: 'uncertainty1', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'uncertainty1', text),
          props: {},

        };

          return obj},
      },
      {
        title: '不确定性（%）', dataIndex: 'uncertainty2', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'uncertainty2', text),
          props: {},

        };

          return obj},
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 50,

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
      years:'2014',
        Xdata:[],
        Xdata1:[]
    };

    this.XqueryGut('2014');

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


    // 清单结果数据
    XqueryGut(years){


        post('/report/industrialProductionProcess/list', {
            year:years,

        })
            .then((res) => {

                if (res.code==0) {




                    var Alldata =res.data;


                    var _data = []

                    _data.push((Alldata.CO2.cementProductionProcess))
                    _data.push((Alldata.CO2.limeProductionProcess))
                    _data.push((Alldata.CO2.steelProductionProcess))
                    _data.push((Alldata.CO2.calciumCarbideProductionProcess))
                    _data.push((Alldata.N2O.adipicAcidProductionProcess*310/10000))
                    _data.push((Alldata.N2O.nitricAcidProductionProcess*310/10000))
                    _data.push(((Alldata.CF4.aluminumProductionProcess*6500+Alldata.C2F6.aluminumProductionProcess*9200)/10000))
                    _data.push((Alldata.SF6.electricPowerEquipmentProductionProcess*23900/10000))
                    _data.push((Alldata.SF6.magnesiumProductionProcess*23900/10000))
                    _data.push(((Alldata.HFC_23.semiconductorProductionProcess*11700+Alldata.CF4.semiconductorProductionProcess*6500+Alldata.C2F6.semiconductorProductionProcess*9200+Alldata.SF6.semiconductorProductionProcess*23900)/10000))
                    _data.push((Alldata.HFC_23.chlorodifluoromethaneProductionProcess*11700/10000))
                    _data.push(((Alldata.HFC_32*650+Alldata.HFC_125*2800+Alldata.HFC_134a*1300+Alldata.HFC_143a*3800+Alldata.HFC_152a*140+Alldata.HFC_227ea*2900+Alldata.HFC_236fa*6300+Alldata.HFC_245fa*1030)/10000))
                    _data.push(((Alldata.CO2.cementProductionProcess)+(Alldata.CO2.limeProductionProcess)+(Alldata.CO2.steelProductionProcess)
                    +(Alldata.CO2.calciumCarbideProductionProcess)+(Alldata.N2O.adipicAcidProductionProcess*310/10000)+(Alldata.N2O.nitricAcidProductionProcess*310/10000)
                    +((Alldata.CF4.aluminumProductionProcess*6500+Alldata.C2F6.aluminumProductionProcess*9200)/10000)+(Alldata.SF6.electricPowerEquipmentProductionProcess*23900/10000)
                    +((Alldata.HFC_23.semiconductorProductionProcess*11700+Alldata.CF4.semiconductorProductionProcess*6500+Alldata.C2F6.semiconductorProductionProcess*9200+Alldata.SF6.semiconductorProductionProcess*23900)/10000)
                    +(Alldata.HFC_23.chlorodifluoromethaneProductionProcess*11700/10000)+((Alldata.HFC_32*650+Alldata.HFC_125*2800+Alldata.HFC_134a*1300+Alldata.HFC_143a*3800+Alldata.HFC_152a*140+Alldata.HFC_227ea*2900+Alldata.HFC_236fa*6300+Alldata.HFC_245fa*1030)/10000)))

                    this.setState({ Xdata: _data});

                    this.XqueryGut1(years);

                    this.setState({ loading: false});


                } else {
                    message.error('数据错误！');
                }
            });

    }


    // 半导体过程
    XqueryGut1(years){


        post('/activityLevelDataEntry/industrialProductionProcess/list', {
            year:years,

        })
            .then((res) => {

                if (res.code==0) {




                    var Alldata =res.data;


                    var _data3 = []

                    //半导体
                    _data3.push(Alldata.semiconductorProductionProcess.CF4Dosage);
                    _data3.push(Alldata.semiconductorProductionProcess.CHF3Dosage);
                    _data3.push(Alldata.semiconductorProductionProcess.C2F6Dosage);
                    _data3.push(Alldata.semiconductorProductionProcess.SF6Dosage);


                    //半导体
                    const _a3 = [];

                    for (var i = 0; i < 4; i++) {


                        _a3.push({
                            key: i,

                            activityLevelValueEtching: _data3[i].activityLevelValueEtching,
                            activityLevelValueCVD: _data3[i].activityLevelValueCVD,
                            emissionFactorEtching: _data3[i].emissionFactorEtching,
                            emissionFactorCVD: _data3[i].emissionFactorCVD,

                        });

                    }

                    var _totala3 = []

                    for (var i = 0; i < _a3.length; i++) {
                        _totala3.push(((_a3[i].activityLevelValueEtching*_a3[i].emissionFactorEtching+_a3[i].activityLevelValueCVD*_a3[i].emissionFactorCVD)*6500/10000))

                    }
                    this.setState({Xdata1: _totala3});



                    this.queryGut(years);

                    this.setState({ loading: false});


                } else {
                    message.error('数据错误！');
                }
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


            var xdata = this.state.Xdata;
            var xdata1 = this.state.Xdata1;

            var xdata1 = []
            for(var i = 0 ; i<xdata.length;i++){
                xdata1.push(xdata[i].toFixed(2))
            }






            var Total = (Math.sqrt(((Math.pow(Math.sqrt((Alldata.cementProductionProcess.emissionFactorUncertainty*Alldata.cementProductionProcess.emissionFactorUncertainty
                    +Alldata.cementProductionProcess.activityLevelUncertainty*Alldata.cementProductionProcess.activityLevelUncertainty))*xdata[0],2))
            +(Math.pow(Math.sqrt((Alldata.limeProductionProcess.emissionFactorUncertainty*Alldata.limeProductionProcess.emissionFactorUncertainty
                    +Alldata.limeProductionProcess.activityLevelUncertainty*Alldata.limeProductionProcess.activityLevelUncertainty))*xdata[1],2))
            +(Math.pow(Math.sqrt((Alldata.calciumCarbideProductionProcess.emissionFactorUncertainty*Alldata.calciumCarbideProductionProcess.emissionFactorUncertainty
                +Alldata.calciumCarbideProductionProcess.activityLevelUncertainty*Alldata.calciumCarbideProductionProcess.activityLevelUncertainty))*xdata[3],2))
            +(Math.pow(Math.sqrt((Alldata.adipicAcidProductionProcess.emissionFactorUncertainty*Alldata.adipicAcidProductionProcess.emissionFactorUncertainty
                +Alldata.adipicAcidProductionProcess.activityLevelUncertainty*Alldata.adipicAcidProductionProcess.activityLevelUncertainty))*xdata[4],2))
            +(Math.pow(Math.sqrt((Alldata.nitricAcidProductionProcess.emissionFactorUncertainty*Alldata.nitricAcidProductionProcess.emissionFactorUncertainty
                    +Alldata.nitricAcidProductionProcess.activityLevelUncertainty*Alldata.nitricAcidProductionProcess.activityLevelUncertainty))*xdata[5],2))
            +(Math.pow(Math.sqrt((Alldata.magnesiumProductionProcess.emissionFactorUncertainty*Alldata.magnesiumProductionProcess.emissionFactorUncertainty
                    +Alldata.magnesiumProductionProcess.activityLevelUncertainty*Alldata.magnesiumProductionProcess.activityLevelUncertainty))*xdata[7],2))
            +(Math.pow(Math.sqrt((Alldata.magnesiumProductionProcess.emissionFactorUncertainty*Alldata.magnesiumProductionProcess.emissionFactorUncertainty
                    +Alldata.magnesiumProductionProcess.activityLevelUncertainty*Alldata.magnesiumProductionProcess.activityLevelUncertainty))*xdata[8],2))
            +(Math.pow( xdata[9]==0 ? 0:(Math.sqrt((Math.pow(0.0283*xdata1[0],2)+Math.pow(0.0233*xdata1[1],2)+Math.pow(0.0256*xdata1[2],2)+Math.pow(0.0224*xdata1[3],2)))/xdata[9]),2))
            +(Math.pow(Math.sqrt((Alldata.chlorodifluoromethaneProductionProcess.activityLevelUncertainty*Alldata.chlorodifluoromethaneProductionProcess.activityLevelUncertainty
                    +Alldata.chlorodifluoromethaneProductionProcess.activityLevelUncertainty*Alldata.chlorodifluoromethaneProductionProcess.activityLevelUncertainty))*xdata[10],2))
            +(Math.pow(Math.sqrt((Alldata.hydrofluorocarbonProductionProcess.emissionFactorUncertainty*Alldata.hydrofluorocarbonProductionProcess.emissionFactorUncertainty
                    +Alldata.hydrofluorocarbonProductionProcess.activityLevelUncertainty*Alldata.hydrofluorocarbonProductionProcess.activityLevelUncertainty))*xdata[11],2))

            ))/xdata[12]*100).toFixed(2)



            const _Data = [
            Alldata.cementProductionProcess.emissionFactorUncertainty*100,//水泥生产过程
            Alldata.limeProductionProcess.emissionFactorUncertainty*100,
            '—', //钢铁生产过程
            Alldata.calciumCarbideProductionProcess.emissionFactorUncertainty*100,//电石生产过程
            Alldata.adipicAcidProductionProcess.emissionFactorUncertainty*100,
            Alldata.nitricAcidProductionProcess.emissionFactorUncertainty*100,
            '—', //铝生产过程
            Alldata.magnesiumProductionProcess.emissionFactorUncertainty*100,
            Alldata.electricPowerEquipmentProductionProcess.emissionFactorUncertainty*100,
            '—',//半导体生产过程
            Alldata.chlorodifluoromethaneProductionProcess.emissionFactorUncertainty*100,
            Alldata.hydrofluorocarbonProductionProcess.emissionFactorUncertainty*100,//氢氟烃生产过程
            ''
          ]  //co2

          const _Data1 = [
            Alldata.cementProductionProcess.activityLevelUncertainty*100,//水泥生产过程
            Alldata.limeProductionProcess.activityLevelUncertainty*100,
            '—', //钢铁生产过程
            Alldata.calciumCarbideProductionProcess.activityLevelUncertainty*100,//电石生产过程
            Alldata.adipicAcidProductionProcess.activityLevelUncertainty*100,
            Alldata.nitricAcidProductionProcess.activityLevelUncertainty*100,
            '—', //铝生产过程
            Alldata.magnesiumProductionProcess.activityLevelUncertainty*100,
            Alldata.electricPowerEquipmentProductionProcess.activityLevelUncertainty*100,
            '—',//半导体生产过程
            Alldata.chlorodifluoromethaneProductionProcess.activityLevelUncertainty*100,
            Alldata.hydrofluorocarbonProductionProcess.activityLevelUncertainty*100,//氢氟烃生产过程
            ''
          ]

          const _Data2 = [
              (Math.sqrt((Alldata.cementProductionProcess.emissionFactorUncertainty*Alldata.cementProductionProcess.emissionFactorUncertainty
            +Alldata.cementProductionProcess.activityLevelUncertainty*Alldata.cementProductionProcess.activityLevelUncertainty))*100).toFixed(2),//水泥生产过程

              (Math.sqrt((Alldata.limeProductionProcess.emissionFactorUncertainty*Alldata.limeProductionProcess.emissionFactorUncertainty
            +Alldata.limeProductionProcess.activityLevelUncertainty*Alldata.limeProductionProcess.activityLevelUncertainty))*100).toFixed(2),

              '', //钢铁生产过程

              (Math.sqrt((Alldata.calciumCarbideProductionProcess.emissionFactorUncertainty*Alldata.calciumCarbideProductionProcess.emissionFactorUncertainty
            +Alldata.calciumCarbideProductionProcess.activityLevelUncertainty*Alldata.calciumCarbideProductionProcess.activityLevelUncertainty))*100).toFixed(2),//电石生产过程

              (Math.sqrt((Alldata.adipicAcidProductionProcess.emissionFactorUncertainty*Alldata.adipicAcidProductionProcess.emissionFactorUncertainty
            +Alldata.adipicAcidProductionProcess.activityLevelUncertainty*Alldata.adipicAcidProductionProcess.activityLevelUncertainty))*100).toFixed(2),

              (Math.sqrt((Alldata.nitricAcidProductionProcess.emissionFactorUncertainty*Alldata.nitricAcidProductionProcess.emissionFactorUncertainty
            +Alldata.nitricAcidProductionProcess.activityLevelUncertainty*Alldata.nitricAcidProductionProcess.activityLevelUncertainty))*100).toFixed(2),

              '', //铝生产过程

              (Math.sqrt((Alldata.magnesiumProductionProcess.emissionFactorUncertainty*Alldata.magnesiumProductionProcess.emissionFactorUncertainty
            +Alldata.magnesiumProductionProcess.activityLevelUncertainty*Alldata.magnesiumProductionProcess.activityLevelUncertainty))*100).toFixed(2),

              (Math.sqrt((Alldata.electricPowerEquipmentProductionProcess.emissionFactorUncertainty*Alldata.electricPowerEquipmentProductionProcess.emissionFactorUncertainty
            +Alldata.electricPowerEquipmentProductionProcess.activityLevelUncertainty*Alldata.electricPowerEquipmentProductionProcess.activityLevelUncertainty))*100).toFixed(2),

              xdata[9]==0 ? 0:(Math.sqrt((Math.pow(0.0283*xdata1[0],2)+Math.pow(0.0233*xdata1[1],2)+Math.pow(0.0256*xdata1[2],2)+Math.pow(0.0224*xdata1[3],2)))/xdata[9]).toFixed(2),//半导体生产过程

              (Math.sqrt((Alldata.chlorodifluoromethaneProductionProcess.activityLevelUncertainty*Alldata.chlorodifluoromethaneProductionProcess.activityLevelUncertainty
            +Alldata.chlorodifluoromethaneProductionProcess.activityLevelUncertainty*Alldata.chlorodifluoromethaneProductionProcess.activityLevelUncertainty))*100).toFixed(2),

              (Math.sqrt((Alldata.hydrofluorocarbonProductionProcess.emissionFactorUncertainty*Alldata.hydrofluorocarbonProductionProcess.emissionFactorUncertainty
            +Alldata.hydrofluorocarbonProductionProcess.activityLevelUncertainty*Alldata.hydrofluorocarbonProductionProcess.activityLevelUncertainty))*100).toFixed(2),//氢氟烃生产过程
              Total
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

                      value:xdata1[i] ,
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

                      value:xdata1[i] ,
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
          this.XqueryGut(this.state.years)

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
            <p>工业生产过程不确定性</p>

            <Table size="small" pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>
        </Spin>









      </div>
    );

  }
}


export default Form.create()(ElectricTable);

