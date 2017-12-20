/**
 * 能源活动gwpCreated by dixu on 2017/10/31.
 */

import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch ,Radio } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Egwp.less';
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
        title: '温室气体种类',
        dataIndex: 'name',
        width: 60,


        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'name', text),
          props: {},

        };

          return obj}

      },{
        title: 'CO2', dataIndex: 'CO', width: 60,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'CO', text),
          props: {},

        };



          return obj},
      },{
        title: 'CH4', dataIndex: 'CH', width: 60,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'CH', text),
          props: {},

        };



          return obj},
      },{
        title: 'N2O', dataIndex: 'N2O', width: 60,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'N2O', text),
          props: {},

        };



          return obj},
      },{
        title: 'HFC-23(CHF3)', dataIndex: 'HFC', width:60,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'HFC', text),
          props: {},

        };



          return obj},
      },{
        title: 'HFC-32', dataIndex: 'HFC1', width: 60,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'HFC1', text),
          props: {},

        };



          return obj},
      },{
        title: 'HFC-125', dataIndex: 'HFC2', width:60,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'HFC2', text),
          props: {},

        };



          return obj},
      },
      {
        title: 'HFC-134a', dataIndex: 'HFC3', width: 60,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns(this.state.data, index, 'HFC3', text),
          props: {},

        };

          return obj},
      },{
        title: 'HFC-143a', dataIndex: 'HFC4', width:60,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns(this.state.data, index, 'HFC4', text),
          props: {},

        };

          return obj},
      },
    ];


    this.columns1 = [
      {
        title: '温室气体种类',
        dataIndex: 'name',
        width: 100,

        colSpan:1,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'name', text),
          props: {},

        };

          return obj}

      },{
        title: '能源活动GHG总量', dataIndex: 'p1', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p1', text),
          props: {},

        };



          return obj},
      },{
        title: '居民生活化石燃料燃烧CO2排放量', dataIndex: 'p2', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p2', text),
          props: {},

        };



          return obj},
      },{
        title: '工业部门化石燃料燃烧CO2排放量', dataIndex: 'p3', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p3', text),
          props: {},

        };



          return obj},
      },{
        title: '建筑业化石燃料燃烧CO2排放量', dataIndex: 'p4', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p4', text),
          props: {},

        };



          return obj},
      },{
        title: '服务业及其它化石燃料燃烧CO2排放量', dataIndex: 'p5', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p5', text),
          props: {},

        };



          return obj},
      },{
        title: '煤炭开采和矿后活动逃逸CH4排放', dataIndex: 'p6', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p6', text),
          props: {},

        };



          return obj},
      },
      {
        title: '石油和天然气系统逃逸CH4排放', dataIndex: 'p7', width: 200,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p7', text),
          props: {},

        };

          return obj},
      },{
        title: '公用电力GHG排放量', dataIndex: 'p8', width: 200,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p8', text),
          props: {},

        };

          return obj},
      },{
        title: '公路交通GHG排放量', dataIndex: 'p9', width: 200,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p9', text),
          props: {},

        };

          return obj},
      },{
        title: '生物质燃烧GHG排放量', dataIndex: 'p10', width: 200,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p10', text),
          props: {},

        };

          return obj},
      },{
        title: '生物质燃烧量', dataIndex: 'p11', width: 200,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p11', text),
          props: {},

        };

          return obj},
      },{
        title: '钢铁行业化石燃料燃烧CO2排放量', dataIndex: 'p12', width: 200,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p12', text),
          props: {},

        };

          return obj},
      },{
        title: '能源活动化石燃料燃烧CO2排放量', dataIndex: 'p13', width: 200,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p13', text),
          props: {},

        };

          return obj},
      },{
        title: '电力调入调出CO2排放量/能源活动GHG总量', dataIndex: 'p14', width: 200,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p14', text),
          props: {},

        };

          return obj},
      },{
        title: '参考法CO2排放量/部门法化石燃料燃烧CO2排放量-1', dataIndex: 'p15', width: 200,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p15', text),
          props: {},

        };

          return obj},
      },
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
        xxTotal:0,
    };

    this.queryBiomass('2014');

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

  // 部门方法 1.1
  renderColumns1(data1, index, key, text) {



    const { editable, status } = data1[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (

      <EditableCell1
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

    if(key  == 'grazing'){

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


    //生物质燃烧 活动水平数据
    queryBiomass(years){

        post('/activityLevelDataEntry/energyActivity/totalFossilFuels/biomassBurning/activityLevelData/list', {
            year:years,

        })
            .then((res) => {

                if (res.code==0) {


                    var Alldata =res.data;

                    const _Data = []

                    _Data.push(Alldata.straw);//秸秆
                    _Data.push(Alldata.firewood);//薪柴
                    _Data.push(Alldata.charcoal); //木炭
                    _Data.push(Alldata.animalFaeces);//动物粪便
                    _Data.push(Alldata.refuseBurning);//垃圾焚烧
                    _Data.push('');//总量




                    const fossilTitle = [


                        '秸秆',
                        '薪柴',
                        '木炭',
                        '动物粪便',
                        '垃圾焚烧',
                        '合计',


                    ]

                    const _a = [];

                    var _Total = 0;


                    for(var i = 0 ;i<5;i++){



                        _a.push({
                            key: i,
                            name:fossilTitle[i],
                            provinceCoalStove: _Data[i].provinceCoalStove,
                            traditionalStove: _Data[i].traditionalStove,
                            brazierPotAndSoOn: _Data[i].brazierPotAndSoOn,
                            pastoralStove: _Data[i].pastoralStove,
                            friedTeaStove: _Data[i].friedTeaStove,
                            flueCuredTobaccoRoom: _Data[i].flueCuredTobaccoRoom,
                            brickKiln: _Data[i].brickKiln,
                            totalAmount: (_Data[i].provinceCoalStove+_Data[i].traditionalStove+_Data[i].brazierPotAndSoOn+_Data[i].pastoralStove+_Data[i].friedTeaStove+_Data[i].flueCuredTobaccoRoom+_Data[i].brickKiln).toFixed(2),
                            lowCalorificValue: _Data[i].lowCalorificValue,
                            biomassBurns: ((_Data[i].provinceCoalStove+_Data[i].traditionalStove+_Data[i].brazierPotAndSoOn+_Data[i].pastoralStove+_Data[i].friedTeaStove+_Data[i].flueCuredTobaccoRoom+_Data[i].brickKiln
                            )*_Data[i].lowCalorificValue/100).toFixed(2),

                        });

                        _Total +=(_Data[i].provinceCoalStove+_Data[i].traditionalStove+_Data[i].brazierPotAndSoOn+_Data[i].pastoralStove+_Data[i].friedTeaStove+_Data[i].flueCuredTobaccoRoom+_Data[i].brickKiln
                            )*_Data[i].lowCalorificValue/100

                    }
                    _a.push({
                        key: 5,
                        name:fossilTitle[i],
                        provinceCoalStove:_Total.toFixed(2),
                        traditionalStove: '',
                        brazierPotAndSoOn: '',
                        pastoralStove: '',
                        friedTeaStove: '',
                        flueCuredTobaccoRoom: '',
                        brickKiln: '',
                        totalAmount: '',
                        lowCalorificValue: '',
                        biomassBurns: _Total.toFixed(2),

                    });







                    this.setState({ loading: false});
                    this.setState({ xxTotal: _Total.toFixed(2)});

                    this.queryGut(years);

                } else {
                    message.error('数据错误！');
                }
            });

    }

  //秸秆
  queryGut(years){


    post('/report/energyActivity/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data.statisticalByDept;

          var alldata =  Alldata.CO2.energyActivity


          const fossilTitle = [


            '　　奶牛',
            '　　非奶牛',
            '　　水牛',
            '　　绵羊',
            '　　山羊',
            '　　猪',
            '　　马',
            '　　驴/骡',
            '　　骆驼',
            '　　动物肠道甲烷排放总计',


          ]







          var _b = [
            {
              key:1,
              name:{
                value:'100年增温潜势' ,
              },
              CO:{
                value:1 ,
              },
              CH:{
                value:21 ,
              },
              N2O:{
                value:310 ,
              },
              HFC:{
                value:11700,
              },
              HFC1:{
                value:650,
              },
              HFC2:{
                value:2800,
              },
              HFC3:{
                value:1300,
              },
              HFC4:{
                value:3800,
              },
            },{
              key:2,
              name:{
                value:'温室气体种类',
              },
              CO:{
                value:'HFC-152a',
              },
              CH:{
                value:'HFC-227ea',
              },
              N2O:{
                value:'HFC-236fa',
              },
              HFC:{
                value:'HFC-245fa',
              },
              HFC1:{
                value:'PFC-14(CF4)',
              },
              HFC2:{
                value:'PFC-116(C2F6)',
              },
              HFC3:{
                value:'SF6',
              },
              HFC4:{
                value:'NF3',
              },
            },
            {
              key:3,
              name:{
                value:'100年增温潜势',
              },
              CO:{
                value:140,
              },
              CH:{
                value:2900,
              },
              N2O:{
                value:6300,
              },
              HFC:{
                value:1030,
              },
              HFC1:{
                value:6500,
              },
              HFC2:{
                value:9200,
              },
              HFC3:{
                value:23900,
              },
              HFC4:{
                value:17200,
              },
            }

          ]

          var Da1 =((
          ((alldata.energyProductionAndProcessingConversion.cEPowerGenerationBoilers
          +alldata.energyProductionAndProcessingConversion.cEIndustrialBoilers
          +alldata.energyProductionAndProcessingConversion.cEOtherEquipment)
          +(alldata.energyProductionAndProcessingConversion.oAPowerGenerationBoilers
          +alldata.energyProductionAndProcessingConversion.oAIndustrialBoilers
          +alldata.energyProductionAndProcessingConversion.oAOtherEquipment)
          +(alldata.energyProductionAndProcessingConversion.sFPowerGenerationBoilers
          +alldata.energyProductionAndProcessingConversion.sFIndustrialBoilers
          +alldata.energyProductionAndProcessingConversion.sFOtherEquipment))
          +((alldata.industryAndConstruction.sPowerGenerationBoilers+alldata.industryAndConstruction.sIndustrialBoilers
          +alldata.industryAndConstruction.sBlastFurnace+alldata.industryAndConstruction.sotherEquipment)
          +(alldata.industryAndConstruction.nMPowerGenerationBoilers+alldata.industryAndConstruction.nMIndustrialBoilers
          +alldata.industryAndConstruction.nMAluminaRotaryKiln+alldata.industryAndConstruction.nMOtherEquipment)
          +(alldata.industryAndConstruction.cMPowerGenerationBoilers+alldata.industryAndConstruction.cMIndustrialBoilers
          +alldata.industryAndConstruction.cMSyntheticAmmoniaGasFurnace+alldata.industryAndConstruction.cMotherEquipment)
          +(alldata.industryAndConstruction.bMPowerGenerationBoilers+alldata.industryAndConstruction.bMIndustrialBoilers
          +alldata.industryAndConstruction.bMCementRotaryKiln+alldata.industryAndConstruction.bMCementShaftKiln+alldata.industryAndConstruction.bMOtherEquipment)
          +(alldata.industryAndConstruction.aEquipment1+alldata.industryAndConstruction.aEquipment2+alldata.industryAndConstruction.aEquipment3)
          +(alldata.industryAndConstruction.bEquipment1+alldata.industryAndConstruction.bEquipment2+alldata.industryAndConstruction.bEquipment3)
          +(alldata.industryAndConstruction.cEquipment1+alldata.industryAndConstruction.cEquipment2+alldata.industryAndConstruction.cEquipment3)
          +(alldata.industryAndConstruction.cIPowerGenerationBoilers+alldata.industryAndConstruction.cIIndustrialBoilers+alldata.industryAndConstruction.cIOtherEquipment))
          +((alldata.transportation.tDomesticFlights+alldata.transportation.tHongKongAndMacaoFlights)
          +alldata.transportation.highway+alldata.transportation.railway+alldata.transportation.inlandRiverInternalCombustionEngine)
          +alldata.servicesAndOthers.servicesAndOthers+alldata.residentsLiving.residentsLiving+alldata.agricultureForestryAnimalHusbandryAndFishery.agricultureForestryAnimalHusbandryAndFishery)
          +Alldata.CO2.nonEnergyUse)



          var Db1 = (((Alldata.CH4.mobileSourceCH4AndN2OEmissions.tDomesticFlights+Alldata.CH4.mobileSourceCH4AndN2OEmissions.tHongKongAndMacaoFlights)+
          +Alldata.CH4.mobileSourceCH4AndN2OEmissions.highway+Alldata.CH4.mobileSourceCH4AndN2OEmissions.railway+Alldata.CH4.mobileSourceCH4AndN2OEmissions.inlandRiverInternalCombustionEngine)
          +(Alldata.CH4.biomassBurning)+Alldata.CH4.coalMiningAndMineActivitiesToEscape+Alldata.CH4.oilAndGasSystemsEscape)


          var Dc1 =(Alldata.N2O.cEPowerGenerationBoilers+Alldata.N2O.mobileSourceCH4AndN2OEmissions.tDomesticFlights+Alldata.N2O.mobileSourceCH4AndN2OEmissions.tHongKongAndMacaoFlights
          +Alldata.N2O.mobileSourceCH4AndN2OEmissions.highway+Alldata.N2O.mobileSourceCH4AndN2OEmissions.railway+Alldata.N2O.mobileSourceCH4AndN2OEmissions.inlandRiverInternalCombustionEngine
          +Alldata.N2O.biomassBurning)


          var Da4 = (alldata.energyProductionAndProcessingConversion.cEPowerGenerationBoilers
          +alldata.energyProductionAndProcessingConversion.cEIndustrialBoilers
          +alldata.energyProductionAndProcessingConversion.cEOtherEquipment)

          var Dc3 =  Alldata.N2O.cEPowerGenerationBoilers


          var _data = res.data.statisticalByRef


          var _TotalD = (_data.anthracite +_data.asphalt+_data.bituminouscoal+_data.blastfurnacegas+_data.briquette
          +_data.coalgangue+_data.coke+_data.cokeovengas+_data.crudeoil+_data.diesel+_data.fueloil+_data.gasoline
          +_data.kerosene+_data.lignite+_data.liquefiedpetroleumgas+_data.liquifiednaturalgas+_data.lubricatingoil+_data.naphtha
          +_data.naturalgas+_data.oilcoke+_data.onvertergas+_data.other+_data.othercoalwashing+_data.othercokingproducts+_data.othergas
          +_data.otherpetroleumproducts+_data.paraffin+_data.refinerydrygas+_data.solventoil+_data.washthecleancoal).toFixed(2)



          var _b1 = [
            {
              key:1,
              name:{
                value:'单位' ,
              },
              p1:{
                value:'万tCO2e' ,
              },
              p2:{
                value:'万tCO2',
              },
              p3:{
                value:'万tCO2' ,
              },
              p4:{
                value:'万tCO2',
              },
              p5:{
                value:'万tCO2',
              },
              p6:{
                value:'tCH4',
              },
              p7:{
                value:'tCH4',
              },
              p8:{
                value:'万tCO2e',
              },
              p9:{
                value:'万tCO2e',
              },
              p10:{
                value:'tCO2e',
              },
              p11:{
                value:'TJ',
              },
              p12:{
                value:'tCO2',
              },
              p13:{
                value:'万tCO2',
              },
              p14:{
                value:'%',
              },
              p15:{
                value:'%',
              },
            },{
              key:2,
              name:{
                value:'结果',
              },
              p1:{
                value:res.data.detail.CO2EW.totalEnergyActivities.toFixed(2),
              },
              p2:{
                value:res.data.statisticalByDept.CO2.energyActivity.residentsLiving.residentsLiving.toFixed(2) ,
              },
              p3:{
                value:((alldata.industryAndConstruction.sPowerGenerationBoilers+alldata.industryAndConstruction.sIndustrialBoilers
                +alldata.industryAndConstruction.sBlastFurnace+alldata.industryAndConstruction.sotherEquipment)
                +(alldata.industryAndConstruction.nMPowerGenerationBoilers+alldata.industryAndConstruction.nMIndustrialBoilers
                +alldata.industryAndConstruction.nMAluminaRotaryKiln+alldata.industryAndConstruction.nMOtherEquipment)
                +(alldata.industryAndConstruction.cMPowerGenerationBoilers+alldata.industryAndConstruction.cMIndustrialBoilers
                +alldata.industryAndConstruction.cMSyntheticAmmoniaGasFurnace+alldata.industryAndConstruction.cMotherEquipment)
                +(alldata.industryAndConstruction.bMPowerGenerationBoilers+alldata.industryAndConstruction.bMIndustrialBoilers
                +alldata.industryAndConstruction.bMCementRotaryKiln+alldata.industryAndConstruction.bMCementShaftKiln+alldata.industryAndConstruction.bMOtherEquipment)
                +(alldata.industryAndConstruction.aEquipment1+alldata.industryAndConstruction.aEquipment2+alldata.industryAndConstruction.aEquipment3)
                +(alldata.industryAndConstruction.bEquipment1+alldata.industryAndConstruction.bEquipment2+alldata.industryAndConstruction.bEquipment3)
                +(alldata.industryAndConstruction.cEquipment1+alldata.industryAndConstruction.cEquipment2+alldata.industryAndConstruction.cEquipment3)
               ).toFixed(2) ,
              },
              p4:{
                value:((alldata.industryAndConstruction.cIPowerGenerationBoilers+alldata.industryAndConstruction.cIIndustrialBoilers+alldata.industryAndConstruction.cIOtherEquipment)).toFixed(2),
              },
              p5:{
                value:(alldata.servicesAndOthers.servicesAndOthers).toFixed(2),
              },
              p6:{
                value:(res.data.statisticalByDept.CH4.coalMiningAndMineActivitiesToEscape*10000).toFixed(2),
              },
              p7:{
                value:(res.data.statisticalByDept.CH4.oilAndGasSystemsEscape*10000).toFixed(2),
              },
              p8:{
                value:(Da4+Dc3*310).toFixed(2),
              },
              p9:{
                value:(alldata.transportation.highway+res.data.statisticalByDept.CH4.mobileSourceCH4AndN2OEmissions.highway*21+res.data.statisticalByDept.N2O.mobileSourceCH4AndN2OEmissions.highway*310).toFixed(2)
                ,
              },
              p10:{
                value:((res.data.statisticalByDept.CO2.biomassBurning+res.data.statisticalByDept.CH4.biomassBurning*21+res.data.statisticalByDept.N2O.biomassBurning*310)*10000).toFixed(2),
              },
              p11:{
                value:this.state.xxTotal,//需后端提供
              },
              p12:{
                value:((alldata.industryAndConstruction.sPowerGenerationBoilers+alldata.industryAndConstruction.sIndustrialBoilers
                +alldata.industryAndConstruction.sBlastFurnace+alldata.industryAndConstruction.sotherEquipment)*10000).toFixed(2),
              },
              p13:{
                value:(((alldata.energyProductionAndProcessingConversion.cEPowerGenerationBoilers
                +alldata.energyProductionAndProcessingConversion.cEIndustrialBoilers
                +alldata.energyProductionAndProcessingConversion.cEOtherEquipment)
                +(alldata.energyProductionAndProcessingConversion.oAPowerGenerationBoilers
                +alldata.energyProductionAndProcessingConversion.oAIndustrialBoilers
                +alldata.energyProductionAndProcessingConversion.oAOtherEquipment)
                +(alldata.energyProductionAndProcessingConversion.sFPowerGenerationBoilers
                +alldata.energyProductionAndProcessingConversion.sFIndustrialBoilers
                +alldata.energyProductionAndProcessingConversion.sFOtherEquipment))
                +((alldata.industryAndConstruction.sPowerGenerationBoilers+alldata.industryAndConstruction.sIndustrialBoilers
                +alldata.industryAndConstruction.sBlastFurnace+alldata.industryAndConstruction.sotherEquipment)
                +(alldata.industryAndConstruction.nMPowerGenerationBoilers+alldata.industryAndConstruction.nMIndustrialBoilers
                +alldata.industryAndConstruction.nMAluminaRotaryKiln+alldata.industryAndConstruction.nMOtherEquipment)
                +(alldata.industryAndConstruction.cMPowerGenerationBoilers+alldata.industryAndConstruction.cMIndustrialBoilers
                +alldata.industryAndConstruction.cMSyntheticAmmoniaGasFurnace+alldata.industryAndConstruction.cMotherEquipment)
                +(alldata.industryAndConstruction.bMPowerGenerationBoilers+alldata.industryAndConstruction.bMIndustrialBoilers
                +alldata.industryAndConstruction.bMCementRotaryKiln+alldata.industryAndConstruction.bMCementShaftKiln+alldata.industryAndConstruction.bMOtherEquipment)
                +(alldata.industryAndConstruction.aEquipment1+alldata.industryAndConstruction.aEquipment2+alldata.industryAndConstruction.aEquipment3)
                +(alldata.industryAndConstruction.bEquipment1+alldata.industryAndConstruction.bEquipment2+alldata.industryAndConstruction.bEquipment3)
                +(alldata.industryAndConstruction.cEquipment1+alldata.industryAndConstruction.cEquipment2+alldata.industryAndConstruction.cEquipment3)
                +(alldata.industryAndConstruction.cIPowerGenerationBoilers+alldata.industryAndConstruction.cIIndustrialBoilers+alldata.industryAndConstruction.cIOtherEquipment))
                +((alldata.transportation.tDomesticFlights+alldata.transportation.tHongKongAndMacaoFlights)
                +alldata.transportation.highway+alldata.transportation.railway+alldata.transportation.inlandRiverInternalCombustionEngine)
                +alldata.servicesAndOthers.servicesAndOthers+alldata.residentsLiving.residentsLiving+alldata.agricultureForestryAnimalHusbandryAndFishery.agricultureForestryAnimalHusbandryAndFishery).toFixed(2),
              },
              p14:{
                value:(res.data.statisticalByDept.CO2.electricityTransferCallsForIndirectCO2Discharge/(Da1+Db1*21+Dc1*310)*100).toFixed(2),
              },
              p15:{
                value:((_TotalD/(((alldata.energyProductionAndProcessingConversion.cEPowerGenerationBoilers
                +alldata.energyProductionAndProcessingConversion.cEIndustrialBoilers
                +alldata.energyProductionAndProcessingConversion.cEOtherEquipment)
                +(alldata.energyProductionAndProcessingConversion.oAPowerGenerationBoilers
                +alldata.energyProductionAndProcessingConversion.oAIndustrialBoilers
                +alldata.energyProductionAndProcessingConversion.oAOtherEquipment)
                +(alldata.energyProductionAndProcessingConversion.sFPowerGenerationBoilers
                +alldata.energyProductionAndProcessingConversion.sFIndustrialBoilers
                +alldata.energyProductionAndProcessingConversion.sFOtherEquipment))
                +((alldata.industryAndConstruction.sPowerGenerationBoilers+alldata.industryAndConstruction.sIndustrialBoilers
                +alldata.industryAndConstruction.sBlastFurnace+alldata.industryAndConstruction.sotherEquipment)
                +(alldata.industryAndConstruction.nMPowerGenerationBoilers+alldata.industryAndConstruction.nMIndustrialBoilers
                +alldata.industryAndConstruction.nMAluminaRotaryKiln+alldata.industryAndConstruction.nMOtherEquipment)
                +(alldata.industryAndConstruction.cMPowerGenerationBoilers+alldata.industryAndConstruction.cMIndustrialBoilers
                +alldata.industryAndConstruction.cMSyntheticAmmoniaGasFurnace+alldata.industryAndConstruction.cMotherEquipment)
                +(alldata.industryAndConstruction.bMPowerGenerationBoilers+alldata.industryAndConstruction.bMIndustrialBoilers
                +alldata.industryAndConstruction.bMCementRotaryKiln+alldata.industryAndConstruction.bMCementShaftKiln+alldata.industryAndConstruction.bMOtherEquipment)
                +(alldata.industryAndConstruction.aEquipment1+alldata.industryAndConstruction.aEquipment2+alldata.industryAndConstruction.aEquipment3)
                +(alldata.industryAndConstruction.bEquipment1+alldata.industryAndConstruction.bEquipment2+alldata.industryAndConstruction.bEquipment3)
                +(alldata.industryAndConstruction.cEquipment1+alldata.industryAndConstruction.cEquipment2+alldata.industryAndConstruction.cEquipment3)
                +(alldata.industryAndConstruction.cIPowerGenerationBoilers+alldata.industryAndConstruction.cIIndustrialBoilers+alldata.industryAndConstruction.cIOtherEquipment))
                +((alldata.transportation.tDomesticFlights+alldata.transportation.tHongKongAndMacaoFlights)
                +alldata.transportation.highway+alldata.transportation.railway+alldata.transportation.inlandRiverInternalCombustionEngine)
                +alldata.servicesAndOthers.servicesAndOthers+alldata.residentsLiving.residentsLiving+alldata.agricultureForestryAnimalHusbandryAndFishery.agricultureForestryAnimalHusbandryAndFishery)
                -1)*100).toFixed(2),
              },
            }


          ]

          console.log(_b);


          this.setState({data:_b});
          this.setState({data1:_b1});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });



  }

  //年份选择
  selesctYears(years){

    this.setState({ loading: true});
    this.setState({years:years})
    this.queryBiomass(years)
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

    const { data1 } = this.state;
    const dataSource1 = data1.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });


    const columns = this.columns;
    const columns1 = this.columns1;


    return (
      <div className={styles.normal}>
        <div className={styles.title}>
          <span className={styles.title_span}>温室气体增温潜值及关键排放指标</span>
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
          <p>温室气体增温潜值</p>


          <Table size="small"  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC1 }/>

        </div>




        <div className={styles.entryBody} id="bodyTable1"  >
          <p>关键排放指标信息</p>


          <Table size="small" pagination={false} bordered={true}  columns={columns1} dataSource={dataSource1} scroll={{ x: 3000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>

        </Spin>



      </div>
    );

  }
}


export default Form.create()(ElectricTable);
