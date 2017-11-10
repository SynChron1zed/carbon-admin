/**
 * 能源活动清单结果Created by dixu on 2017/10/31.
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
        title: '数据项',
        dataIndex: 'name',
        width: 280,

        colSpan:1,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),},

      {
        title: '无烟煤(万吨)', dataIndex: 'anthracite', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'anthracite', text),
      }, {
        title: '烟煤(万吨)', dataIndex: 'bituminouscoal', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'bituminouscoal', text),
      }, {
        title: '褐煤(万吨)', dataIndex: 'lignite', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'lignite', text),
      }, {
        title: '洗精煤(万吨)', dataIndex: 'washthecleancoal', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'washthecleancoal', text),
      }, {
        title: '其他洗煤(万吨)', dataIndex: 'othercoalwashing', width: 120,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'othercoalwashing', text),
      },{
        title: '型煤(万吨)', dataIndex: 'briquette', width:100 ,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'briquette', text),
      },{
        title: '煤矸石(万吨)', dataIndex: 'coalgangue', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'coalgangue', text),
      },{
        title: '焦炭(万吨)', dataIndex: 'coke', width: 100 ,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'coke', text),
      },{
        title: '焦炉煤气(亿立方米)', dataIndex: 'cokeovengas' ,width: 160,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'cokeovengas', text),
      },{
        title: '高炉煤气(亿立方米)', dataIndex: 'blastfurnacegas' ,width: 150,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'blastfurnacegas', text),
      },{
        title: '转炉煤气(亿立方米)', dataIndex: 'onvertergas' ,width: 150,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'onvertergas', text),
      },{
        title: '其它煤气(亿立方米)', dataIndex: 'othergas' ,width: 150,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'othergas', text),
      },{
        title: '其它焦化作品(万吨)', dataIndex: 'othercokingproducts',width: 150,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'othercokingproducts', text),
      },{
        title: '原油(万吨)', dataIndex: 'crudeoil',width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'crudeoil', text),
      },{
        title: '汽油(万吨)', dataIndex: 'gasoline' ,width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'gasoline', text),
      },{
        title: '煤油(万吨)', dataIndex: 'kerosene' ,width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'kerosene', text),
      },{
        title: '柴油(万吨)', dataIndex: 'diesel' ,width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'diesel', text),
      },{
        title: '燃料油(万吨)', dataIndex: 'fueloil',width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'fueloil', text),
      },{
        title: '石脑油(万吨)', dataIndex: 'naphtha',width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'naphtha', text),
      },{
        title: '润滑油(万吨)', dataIndex: 'lubricatingoil' ,width:100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'lubricatingoil', text),
      },{
        title: '石蜡(万吨)', dataIndex: 'paraffin',width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'paraffin', text),
      },{
        title: '溶剂油(万吨)', dataIndex: 'solventoil' ,width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'solventoil', text),
      },{
        title: '石油沥青(万吨)', dataIndex: 'asphalt' ,width: 150,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'asphalt', text),
      },{
        title: '石油焦(万吨)', dataIndex: 'oilcoke' ,width: 150,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'oilcoke', text),
      },{
        title: '液化石油气(万吨)', dataIndex: 'liquefiedpetroleumgas' ,width: 150,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'liquefiedpetroleumgas', text),
      },{
        title: '炼厂干气(万吨)', dataIndex: 'refinerydrygas' ,width: 150,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'refinerydrygas', text),
      },{
        title: '其他石油制品(万吨)', dataIndex: 'otherpetroleumproducts',width: 150,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'otherpetroleumproducts', text),
      },{
        title: '天然气(亿立方米)', dataIndex: 'naturalgas' ,width: 130,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'naturalgas', text),
      },{
        title: '液化天然气(万吨)', dataIndex: 'liquifiednaturalgas' ,width: 130,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'liquifiednaturalgas', text),
      },{
        title: '其他(亿立方米)', dataIndex: 'other' ,width: 130,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'other', text),
      },{
        title: '合计', dataIndex: 'total' ,width: 130,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'total', text),
      }];

    this.columns1 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 280,

        colSpan:1,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'name', text),},

      {
        title: '二氧化碳(万吨)', dataIndex: 'CO2', width: 100,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'CO2', text),
      }, {
        title: '甲烷(万吨)', dataIndex: 'CH4', width: 100,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'CH4', text),
      }, {
        title: '氧化亚氮(万吨)', dataIndex: 'N2O', width: 100,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'N2O', text),
      }, {
        title: '二氧化碳当量(万吨)', dataIndex: 'bCO2', width: 100,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'bCO2', text),
      }, ];

    this.state = {

      data: [],
      data1: [],
      loading: true ,

      collapsed: false,
      select:1,
      trigger:true,
      user:[],




      AllData:[]
    };

    this.queryGut();

    //$("#bodyTable1").hide();

  }



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

  //
  queryGut(){


    post('/report/energyActivity/list', {
      year:'2017',

    })
      .then((res) => {

        if (res.code==0) {


          var Alldata =res.data;

          const _Data = []  //co2
          const  _Data1 = []  //ch4
          const  _Data2 = []  //n20
          const  _Data3= []  //bco2


          const fossilTitle = [

            '能源活动总计',
            '1.化石燃料合计',
            '　　1.1能源生产与加工转换',
            '　　　　1.1.1公用电力与热力部门',
            '　　　　　　1.1.1.1发电锅炉',
            '　　　　　　1.1.1.2工业锅炉',
            '　　　　　　1.1.1.3其他设备',
            '　　　　1.1.2石油天然气开采与加工业',
            '　　　　　　1.1.2.1发电锅炉',
            '　　　　　　1.1.2.2工业锅炉',
            '　　　　　　1.1.2.3其他设备',
            '　　　　1.1.3固体燃料和其他能源工业',
            '　　　　　　1.1.3.1发电锅炉',
            '　　　　　　1.1.3.2工业锅炉',
            '　　　　　　1.1.3.3其他设备',
            '　　1.2工业和建筑业',
            '　　　　1.2.1钢铁',
            '　　　　　　1.2.1.1发电锅炉',
            '　　　　　　1.2.1.2工业锅炉',
            '　　　　　　1.2.1.3高炉',
            '　　　　　　1.2.1.4其他设备',
            '　　　　1.2.2有色金属',
            '　　　　　　1.2.2.1发电锅炉',
            '　　　　　　1.2.2.2工业锅炉',
            '　　　　　　1.2.2.3氧化铝回转窑',
            '　　　　　　1.2.2.4其他设备',
            '　　　　1.2.3化工',
            '　　　　　　1.2.3.1发电锅炉',
            '　　　　　　1.2.3.2工业锅炉',
            '　　　　　　1.2.3.3合成氨造气炉',
            '　　　　　　1.2.3.4其他设备',
            '　　　　1.2.4建材',
            '　　　　　　1.2.4.1发电锅炉',
            '　　　　　　1.2.4.2工业锅炉',
            '　　　　　　1.2.4.3水泥回转窑',
            '　　　　　　1.2.4.4水泥立窑',
            '　　　　　　1.2.4.5其他设备',
            '　　　　1.2.5其他工业部门',
            '　　　　　　1.2.5.1其他工业部门',
            '　　　　　　　　1.2.5.1.1设备1',
            '　　　　　　　　1.2.5.1.2设备2',
            '　　　　　　　　1.2.5.1.3设备3',
            '　　　　　　1.2.5.2其他工业部门',
            '　　　　　　　　1.2.5.2.1设备1',
            '　　　　　　　　1.2.5.2.2设备2',
            '　　　　　　　　1.2.5.2.3设备3',
            '　　　　　　1.2.5.3其他工业部门',
            '　　　　　　　　1.2.5.3.1设备1',
            '　　　　　　　　1.2.5.3.2设备2',
            '　　　　　　　　1.2.5.3.3设备3',
            '　　　　 1.2.6建筑业',
            '　　　　　　1.2.6.1发电锅炉',
            '　　　　　　1.2.6.2工业锅炉',
            '　　　　　　1.2.6.3其他设备',
            '　　1.3交通运输',
            '　　　　1.3.1航空',
            '　　　　　　1.3.1.1国内航班',
            '　　　　　　1.3.1.2港澳地区航班',
            '　　　　　　1.3.1.3国际航班',
            '　　　　1.3.2公路',
            '　　　　1.3.3铁路',
            '　　　　1.3.4水运',
            '　　　　　　1.3.4.1内河近海内燃机',
            '　　　　　　1.3.4.2国际远洋内燃机',
            '　　1.4服务业及其他',
            '　　1.5居民生活',
            '　　1.6农、林、牧、渔业',
            '2.生物质燃烧（以能源利用为目的）',
            '3.煤炭开采和矿后活动逃逸',
            '4.油气系统逃逸',
            '5.非能源利用',
            '国际燃料舱',
            '　　国际航空',
            '　　国际航海',
            '调入（出）电力间接排放',

          ]


          var alldata = Alldata.CO2.energyActivity

          _Data.push('-')
          _Data.push('-')
          _Data.push('-')
          _Data.push('-')
          _Data.push(alldata.energyProductionAndProcessingConversion.cEPowerGenerationBoilers);//1.1.1.1发电锅炉
          _Data.push(alldata.energyProductionAndProcessingConversion.cEIndustrialBoilers); //1.1.1.2工业锅炉
          _Data.push(alldata.energyProductionAndProcessingConversion.cEOtherEquipment);//1.1.1.3其他设备
          _Data.push('-')
          _Data.push(alldata.energyProductionAndProcessingConversion.oAPowerGenerationBoilers);//1.1.2.1发电锅炉
          _Data.push(alldata.energyProductionAndProcessingConversion.oAIndustrialBoilers);//1.1.2.2工业锅炉
          _Data.push(alldata.energyProductionAndProcessingConversion.oAOtherEquipment);//1.1.2.3其他设备
          _Data.push('-')
          _Data.push(alldata.energyProductionAndProcessingConversion.sFPowerGenerationBoilers);//1.1.3.1发电锅炉
          _Data.push(alldata.energyProductionAndProcessingConversion.sFIndustrialBoilers);//1.1.3.2工业锅炉
          _Data.push(alldata.energyProductionAndProcessingConversion.sFOtherEquipment);//1.1.3.3其他设备
          _Data.push('-')
          _Data.push('-')
          _Data.push(alldata.industryAndConstruction.sPowerGenerationBoilers);//1.2.1.1发电锅炉
          _Data.push(alldata.industryAndConstruction.sIndustrialBoilers);//1.2.1.2工业锅炉
          _Data.push(alldata.industryAndConstruction.sBlastFurnace);//1.2.1.3高炉
          _Data.push(alldata.industryAndConstruction.sotherEquipment);//1.2.1.4其他设备
          _Data.push('-')
          _Data.push(alldata.industryAndConstruction.nMPowerGenerationBoilers);//1.2.2.1发电锅炉
          _Data.push(alldata.industryAndConstruction.nMIndustrialBoilers);//1.2.2.2工业锅炉
          _Data.push(alldata.industryAndConstruction.nMAluminaRotaryKiln);//1.2.2.3氧化铝回转窑
          _Data.push(alldata.industryAndConstruction.nMOtherEquipment);//1.2.2.4其他设备
          _Data.push('-')
          _Data.push(alldata.industryAndConstruction.cMPowerGenerationBoilers);//1.2.3.1发电锅炉
          _Data.push(alldata.industryAndConstruction.cMIndustrialBoilers);//1.2.3.2工业锅炉
          _Data.push(alldata.industryAndConstruction.cMSyntheticAmmoniaGasFurnace);//1.2.3.3合成氨造气炉
          _Data.push(alldata.industryAndConstruction.cMotherEquipment);//1.2.3.4其他设备
          _Data.push('-')
          _Data.push(alldata.industryAndConstruction.bMPowerGenerationBoilers);//1.2.4.1发电锅炉
          _Data.push(alldata.industryAndConstruction.bMIndustrialBoilers);//1.2.4.2工业锅炉
          _Data.push(alldata.industryAndConstruction.bMCementRotaryKiln);//1.2.4.3水泥回转窑
          _Data.push(alldata.industryAndConstruction.bMCementShaftKiln);//1.2.4.4水泥立窑
          _Data.push(alldata.industryAndConstruction.bMOtherEquipment);//1.2.4.5其他设备
          _Data.push('-')
          _Data.push('-')
          _Data.push(alldata.industryAndConstruction.aEquipment1);//1.2.5.1.1设备1
          _Data.push(alldata.industryAndConstruction.aEquipment2);//1.2.5.1.1设备2
          _Data.push(alldata.industryAndConstruction.aEquipment3);//1.2.5.1.1设备3
          _Data.push('-')
          _Data.push(alldata.industryAndConstruction.bEquipment1);//1.2.5.2.1设备1
          _Data.push(alldata.industryAndConstruction.bEquipment2);//1.2.5.2.2设备2
          _Data.push(alldata.industryAndConstruction.bEquipment3);//1.2.5.2.3设备3
          _Data.push('-')
          _Data.push(alldata.industryAndConstruction.cEquipment1);//1.2.5.3.1设备1
          _Data.push(alldata.industryAndConstruction.cEquipment2);//1.2.5.3.2设备2
          _Data.push(alldata.industryAndConstruction.cEquipment3);//1.2.5.3.3设备3
          _Data.push('-')
          _Data.push(alldata.industryAndConstruction.cIPowerGenerationBoilers);//1.2.6.1发电锅炉
          _Data.push(alldata.industryAndConstruction.cIIndustrialBoilers);//1.2.6.2工业锅炉
          _Data.push(alldata.industryAndConstruction.cIOtherEquipment);//1.2.6.3其他设备
          _Data.push('-')
          _Data.push('-')
          _Data.push(alldata.transportation.tDomesticFlights);//1.3.1.1国内航班
          _Data.push(alldata.transportation.tHongKongAndMacaoFlights);//1.3.1.2港澳地区航班
          _Data.push(alldata.transportation.tInternationalFlights);//1.3.1.3国际航班

          _Data.push(alldata.transportation.highway);//1.3.2公路
          _Data.push(alldata.transportation.railway);//1.3.3铁路
          _Data.push('-')
          _Data.push(alldata.transportation.inlandRiverInternalCombustionEngine);//1.3.4.1内河近海内燃机
          _Data.push(alldata.transportation.internationalOceanInternalCombustionEngine);//1.3.4.2国际远洋内燃机
          _Data.push(alldata.servicesAndOthers.servicesAndOthers);
          _Data.push(alldata.residentsLiving.residentsLiving);

          _Data.push(alldata.agricultureForestryAnimalHusbandryAndFishery.agricultureForestryAnimalHusbandryAndFishery);
          _Data.push('-');
          _Data.push('-');
          _Data.push('-');
          _Data.push(Alldata.CO2.nonEnergyUse);
          _Data.push('-');
          _Data.push('-');
          _Data.push('-');
          _Data.push(Alldata.CO2.electricityTransferCallsForIndirectCO2Discharge);

          const _a = [];

          _Data1.push('-')
          _Data1.push('-')
          for(var i  = 0 ; i<52;i++){
            _Data1.push('-0')
          }
          _Data1.push('-')
          _Data1.push('-')

          _Data1.push(Alldata.CH4.mobileSourceCH4AndN2OEmissions.tDomesticFlights);//1.3.1.1国内航班
          _Data1.push(Alldata.CH4.mobileSourceCH4AndN2OEmissions.tHongKongAndMacaoFlights);//1.3.1.2港澳地区航班
          _Data1.push(Alldata.CH4.mobileSourceCH4AndN2OEmissions.tInternationalFlights);//1.3.1.3国际航班

          _Data1.push(Alldata.CH4.mobileSourceCH4AndN2OEmissions.highway);//1.3.2公路
          _Data1.push(Alldata.CH4.mobileSourceCH4AndN2OEmissions.railway);//1.3.3铁路
          _Data1.push('-')
          _Data1.push(Alldata.CH4.mobileSourceCH4AndN2OEmissions.riverInternalCombustionEngine);//1.3.4.1内河近海内燃机
          _Data1.push(Alldata.CH4.mobileSourceCH4AndN2OEmissions.internationalOceanInternalCombustionEngine);//1.3.4.2国际远洋内燃机

          _Data1.push('-0')
          _Data1.push('-0')
          _Data1.push('-0')

          _Data1.push(Alldata.CH4.biomassBurning);
          _Data1.push(Alldata.CH4.coalMiningAndMineActivitiesToEscape);
          _Data1.push(Alldata.CH4.oilAndGasSystemsEscape);
          _Data1.push('-0')
          _Data1.push('-')
          _Data1.push('-')
          _Data1.push('-')
          _Data1.push('-0')


          _Data2.push('-')
          _Data2.push('-')
          _Data2.push('-')
          _Data2.push('-')
          _Data2.push('-')
          for(var i  = 0 ; i<49;i++){
            _Data2.push('-0')
          }

          _Data2.push('-')
          _Data2.push('-')

          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.tDomesticFlights);//1.3.1.1国内航班
          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.tHongKongAndMacaoFlights);//1.3.1.2港澳地区航班
          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.tInternationalFlights);//1.3.1.3国际航班

          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.highway);//1.3.2公路
          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.railway);//1.3.3铁路
          _Data2.push('-')
          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.riverInternalCombustionEngine);//1.3.4.1内河近海内燃机
          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.internationalOceanInternalCombustionEngine);//1.3.4.2国际远洋内燃机

          _Data2.push('-0')
          _Data2.push('-0')
          _Data2.push('-0')

          _Data2.push(Alldata.N2O.biomassBurning);
          _Data2.push('-0')
          _Data2.push('-0')
          _Data2.push('-0')
          _Data2.push('-')
          _Data2.push('-')
          _Data2.push('-')
          _Data2.push('-0')


          for(var i  = 0 ; i<75;i++){
            _Data3.push('-')
          }



          const _b1= []

          for(var i  = 0 ;i <_Data1.length;i++){
            _b1.push({
              key:i,
              name:{

                value:fossilTitle[i] ,
              },
              CO2:{

                value:_Data[i] ,
              },
              CH4:{

                value:_Data1[i],
              },
              N2O:{

                value:_Data2[i] ,
              },
              bCO2:{

                value:_Data3[i] ,
              },
            })
          }


          console.log(_Data)
          console.log(_Data1)
          console.log(_Data2)
          console.log(_Data3)


          const _data = Alldata.statisticalByRef

          const _b = [
            {
              key:1,
              name:{

                value:'CO2排放量（万吨）' ,
              },
              anthracite:{

                value:_data.anthracite ,
              },
              asphalt: {

                value:_data.asphalt ,
              },
              bituminouscoal: {

                value:_data.bituminouscoal ,
              },
              blastfurnacegas: {

                value:_data.blastfurnacegas ,
              },
              briquette: {

                value:_data.briquette ,
              },
              catelogId: {

                value:'' ,
              },
              coalgangue: {

                value:_data.coalgangue ,
              },
              coke: {

                value:_data.coke ,
              },
              cokeovengas: {

                value:_data.cokeovengas,
              },
              crudeoil: {

                value:_data.crudeoil ,
              },
              diesel: {

                value:_data.diesel,
              },
              fueloil: {

                value:_data.fueloil ,
              },
              gasoline: {

                value:_data.gasoline ,
              },
              kerosene: {

                value:_data.kerosene,
              },
              lignite: {

                value:_data.lignite ,
              },
              liquefiedpetroleumgas: {

                value:_data.liquefiedpetroleumgas ,
              },
              liquifiednaturalgas: {

                value:_data.liquifiednaturalgas ,
              },
              lubricatingoil: {

                value:_data.lubricatingoil ,
              },
              naphtha: {

                value:_data.naphtha ,
              },
              naturalgas: {

                value:_data.naturalgas ,
              },
              oilcoke: {

                value:_data.oilcoke ,
              },
              onvertergas: {

                value:_data.onvertergas ,
              },
              other: {

                value:_data.other,
              },
              othercoalwashing: {

                value:_data.othercoalwashing ,
              },
              othercokingproducts: {

                value:_data.othercokingproducts ,
              },
              othergas: {

                value:_data.othergas ,
              },
              otherpetroleumproducts: {

                value:_data.otherpetroleumproducts ,
              },
              paraffin: {

                value:_data.paraffin ,
              },
              refinerydrygas: {

                value:_data.refinerydrygas ,
              },
              solventoil: {

                value:_data.solventoil ,
              },
              tffId: {

                value:'' ,
              },
              washthecleancoal: {

                value:_data.washthecleancoal ,
              },
              total: {

                value:'' ,
              },
            }
          ];





          console.log(_b);


          this.setState({data:_b});
          this.setState({data1:_b1});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //秸秆update
  updateGut(index,data,a){

    var data  = data

    const Directory = [
      'cows',
      'nonCow',
      'buffalo',
      'sheep',
      'goat',
      'pig',
      'horse',
      'jennet',
      'camel',


    ]



    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/agricultureActivity/update'
    var bodyName = 'agricultureActivity';
    var bodyName1 = 'animalIntestinalFermentationOfMethaneEmissions';






    var obj={
      "year":"2017"
    };

    obj[bodyName]={}
    obj[bodyName][bodyName1]={}
    obj[bodyName][bodyName1][DirectoryIndex]= {
      "sVscaleFeeding": data[index].sVscaleFeeding.value,
      "sVfarmerKeeping": data[index].sVfarmerKeeping.value,
      "sVgrazing": data[index].sVgrazing.value,
      "scaleFeeding": data[index].scaleFeeding.value,
      "farmerKeeping": data[index].farmerKeeping.value,
      "grazing": data[index].grazing.value,
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
          <span className={styles.title_span}>能源活动温室气体清单结果</span>
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

        <Spin spinning={this.state.loading} delay={500}>

        <div className={styles.entryBody} id="bodyTable1"  >
          <p>参考方法</p>


          <Table  pagination={false} bordered={true}  columns={columns1} dataSource={dataSource1} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>


        <div className={styles.entryBody} id="bodyTable1"  >
          <p>参考方法</p>


          <Table  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 4000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>
        </Spin>









      </div>
    );

  }
}


export default Form.create()(ElectricTable);
