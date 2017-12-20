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

class EditableCell2 extends React.Component {

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
        width: 180,

        colSpan:1,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),},

      {
        title: '无烟煤(万吨)', dataIndex: 'anthracite', width: 120,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'anthracite', text),
      }, {
        title: '烟煤(万吨)', dataIndex: 'bituminouscoal', width: 120,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'bituminouscoal', text),
      }, {
        title: '褐煤(万吨)', dataIndex: 'lignite', width: 120,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'lignite', text),
      }, {
        title: '洗精煤(万吨)', dataIndex: 'washthecleancoal', width: 120,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'washthecleancoal', text),
      }, {
        title: '其他洗煤(万吨)', dataIndex: 'othercoalwashing', width: 120,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'othercoalwashing', text),
      },{
        title: '型煤(万吨)', dataIndex: 'briquette', width:120 ,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'briquette', text),
      },{
        title: '煤矸石(万吨)', dataIndex: 'coalgangue', width: 120,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'coalgangue', text),
      },{
        title: '焦炭(万吨)', dataIndex: 'coke', width:120 ,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'coke', text),
      },{
        title: '焦炉煤气(亿立方米)', dataIndex: 'cokeovengas' ,width: 150,
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
        title: '原油(万吨)', dataIndex: 'crudeoil',width: 120,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'crudeoil', text),
      },{
        title: '汽油(万吨)', dataIndex: 'gasoline' ,width: 120,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'gasoline', text),
      },{
        title: '煤油(万吨)', dataIndex: 'kerosene' ,width: 120,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'kerosene', text),
      },{
        title: '柴油(万吨)', dataIndex: 'diesel' ,width: 120,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'diesel', text),
      },{
        title: '燃料油(万吨)', dataIndex: 'fueloil',width: 120,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'fueloil', text),
      },{
        title: '石脑油(万吨)', dataIndex: 'naphtha',width: 120,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'naphtha', text),
      },{
        title: '润滑油(万吨)', dataIndex: 'lubricatingoil' ,width:120,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'lubricatingoil', text),
      },{
        title: '石蜡(万吨)', dataIndex: 'paraffin',width: 120,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'paraffin', text),
      },{
        title: '溶剂油(万吨)', dataIndex: 'solventoil' ,width: 120,
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
        width: 180,

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

    this.columns2 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 180,

        colSpan:1,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'name', text),},

      {
        title: '二氧化碳(万吨)', dataIndex: 'CO2', width: 100,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'CO2', text),
      }, {
        title: '甲烷(万吨)', dataIndex: 'CH4', width: 100,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'CH4', text),
      }, {
        title: '氧化亚氮(万吨)', dataIndex: 'N2O', width: 100,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'N2O', text),
      }, {
        title: '甲烷(万吨当量)', dataIndex: 'bCH4', width: 100,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'bCH4', text),
      }, {
        title: '氧化亚氮(万吨当量)', dataIndex: 'bN2O', width: 100,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'bN2O', text),
      }, {
        title: '二氧化碳当量(万吨)', dataIndex: 'bCO2', width: 100,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'bCO2', text),
      }, ];

    this.state = {

      data: [],
      data1: [],
      data2: [],
      loading: true ,

      collapsed: false,
      select:1,
      trigger:true,
      user:[],




      AllData:[],
      years:'2014',
      cs:'a'
    };

    this.queryGut('a','2014');

    //$("#bodyTable1").hide();

  }


  renderColumns2(data2, index, key, text) {


    const { editable, status } = data2[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (

      <EditableCell2
        editable={editable}
        value={text}
        onChange={value => this.handleChange2(key, index, value)}
        status={status}
      />);
  }


  handleChange2(key, index, value) {



    const data2 = [...this.state.data2];
    data2[index][key].value = value;
    this.setState({ data2 });

    if(key  == 'combustionEfficiency'){

      //this.updateWaste2(index,data2);
    }





  }

  edit2(index) {

    const { data2 } = this.state;
    Object.keys(data2[index]).forEach((item) => {
      if (data2[index][item] && typeof data2[index][item].editable !== 'undefined') {
        data2[index][item].editable = true;
      }
    });
    this.setState({ data2 });
  }

  editDone2(index, type) {

    const { data2 } = this.state;
    Object.keys(data2[index]).forEach((item) => {
      if (data2[index][item] && typeof data2[index][item].editable !== 'undefined') {
        data2[index][item].editable = false;
        data2[index][item].status = type;
      }
    });
    this.setState({ data2 }, () => {
      Object.keys(data2[index]).forEach((item) => {
        if (data2[index][item] && typeof data2[index][item].editable !== 'undefined') {
          delete data2[index][item].status;
        }
      });
    });
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
  queryGut(i,years){


    post('/report/energyActivity/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {



          var Alldata =res.data.statisticalByDept;



          const _Data = []  //co2
          const  _Data1 = []  //ch4
          const  _Data2 = []  //n20
          const  _Data3= []  //bco2


          const  _Data4= []  //清单结果co2
          const  _Data5= []  //清单结果ch4
          const  _Data6= []  //清单结果n2o
          const  _Data7= []  //清单结果co2
          const  _Data8= []  //清单结果co2
          const  _Data9= []  //清单结果co2




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

          const fossilTitle1 = [

            '能源活动总计',
            '1. 化石燃料燃烧',
            '　　能源工业',
            '　　　　电力生产',
            '　　　　油气开采',
            '　　　　固体燃料',
            '　　农业',
            '　　工业和建筑业',
            '　　　　钢铁',
            '　　　　有色金属',
            '　　　　化工',
            '　　　　建材',
            '　　　　其他',
            '　　　　建筑业',
            '　　交通运输',
            '　　服务业',
            '　　居民生活',
            '2. 生物质燃烧(以能源利用为目的)',
            '3. 煤炭开采逃逸',
            '4. 油气系统逃逸',
            '5. 非能源利用',
            '　　国际燃料舱',
            '　　　　国际航空',
            '　　　　国际航海',
            '　　调入（出）电力间接排放',


          ]



          var alldata = Alldata.CO2.energyActivity


          var  qdData = res.data.detail


          _Data4.push(qdData.CO2.totalEnergyActivities);//能源活动总计
          _Data4.push(qdData.CO2.fossilFuel);//1. 化石燃料燃烧
          _Data4.push(qdData.CO2.energyIndustry);//能源工业
          _Data4.push(qdData.CO2.electricityProduction);//电力生产
          _Data4.push(qdData.CO2.oilAndGasExploration);//油气开采
          _Data4.push(qdData.CO2.solidFuel);//固体燃料
          _Data4.push(qdData.CO2.agriculture);//农业
          _Data4.push(qdData.CO2.industryAndConstruction);//工业和建筑业
          _Data4.push(qdData.CO2.steel);//钢铁
          _Data4.push(qdData.CO2.nonferrousMetals);//有色金属
          _Data4.push(qdData.CO2.chemicalIndustry);//化工
          _Data4.push(qdData.CO2.buildingMaterials);//建材
          _Data4.push(qdData.CO2.other);//其他
          _Data4.push(qdData.CO2.constructionIndustry);//建筑业
          _Data4.push(qdData.CO2.transportation);//交通运输
          _Data4.push(qdData.CO2.serviceIndustry);//服务业
          _Data4.push(qdData.CO2.residentsLiving);//居民生活
          _Data4.push(qdData.CO2.biomassBurning);//2. 生物质燃烧(以能源利用为目的)
          _Data4.push('-');//3. 煤炭开采逃逸
          _Data4.push('-');//4. 油气系统逃逸
          _Data4.push(qdData.CO2.nonEnergyUse);//5. 非能源利用
          _Data4.push(qdData.CO2.internationalFuel);//国际燃料舱
          _Data4.push(qdData.CO2.internationalAviation);//国际航空
          _Data4.push(qdData.CO2.internationalSailing);//国际航海
          _Data4.push(qdData.CO2.chargeOutIndirectDischargeOfElectricity);//调入（出）电力间接排放


          _Data5.push(qdData.CH4.totalEnergyActivities);//能源活动总计
          _Data5.push(qdData.CH4.fossilFuel);//1. 化石燃料燃烧
          _Data5.push('-');//能源工业
          _Data5.push('-');//电力生产
          _Data5.push('-');//油气开采
          _Data5.push('-');//固体燃料
          _Data5.push('-');//农业
          _Data5.push('-');//工业和建筑业
          _Data5.push('-');//钢铁
          _Data5.push('-');//有色金属
          _Data5.push('-');//化工
          _Data5.push('-');//建材
          _Data5.push('-');//其他
          _Data5.push('-');//建筑业
          _Data5.push(qdData.CH4.transportation);//交通运输
          _Data5.push('-');//服务业
          _Data5.push('-');//居民生活
          _Data5.push(qdData.CH4.biomassBurning);//2. 生物质燃烧(以能源利用为目的)
          _Data5.push(qdData.CH4.coalMiningEscape);//3. 煤炭开采逃逸
          _Data5.push(qdData.CH4.oilAndGasSystemsEscape);//4. 油气系统逃逸
          _Data5.push('-');//5. 非能源利用
          _Data5.push(qdData.CH4.internationalFuel);//国际燃料舱
          _Data5.push(qdData.CH4.internationalAviation);//国际航空
          _Data5.push(qdData.CH4.internationalSailing);//国际航海
          _Data5.push('-');//调入（出）电力间接排放




          _Data6.push(qdData.N2O.totalEnergyActivities);//能源活动总计
          _Data6.push(qdData.N2O.fossilFuel);//1. 化石燃料燃烧
          _Data6.push(qdData.N2O.energyIndustry);//能源工业
          _Data6.push(qdData.N2O.electricityProduction);//电力生产
          _Data6.push('-');//油气开采
          _Data6.push('-');//固体燃料
          _Data6.push('-');//农业
          _Data6.push('-');//工业和建筑业
          _Data6.push('-');//钢铁
          _Data6.push('-');//有色金属
          _Data6.push('-');//化工
          _Data6.push('-');//建材
          _Data6.push('-');//其他
          _Data6.push('-');//建筑业
          _Data6.push(qdData.N2O.transportation);//交通运输
          _Data6.push('-');//服务业
          _Data6.push('-');//居民生活
          _Data6.push(qdData.N2O.biomassBurning);//2. 生物质燃烧(以能源利用为目的)
          _Data6.push('-');//3. 煤炭开采逃逸
          _Data6.push('-');//4. 油气系统逃逸
          _Data6.push('-');//5. 非能源利用
          _Data6.push(qdData.N2O.internationalFuel);//国际燃料舱
          _Data6.push(qdData.N2O.internationalAviation);//国际航空
          _Data6.push(qdData.N2O.internationalSailing);//国际航海
          _Data6.push('-');//调入（出）电力间接排放



          _Data7.push(qdData.CH4EW.totalEnergyActivities);//能源活动总计
          _Data7.push(qdData.CH4EW.fossilFuel);//1. 化石燃料燃烧
          _Data7.push('-');//能源工业
          _Data7.push('-');//电力生产
          _Data7.push('-');//油气开采
          _Data7.push('-');//固体燃料
          _Data7.push('-');//农业
          _Data7.push('-');//工业和建筑业
          _Data7.push('-');//钢铁
          _Data7.push('-');//有色金属
          _Data7.push('-');//化工
          _Data7.push('-');//建材
          _Data7.push('-');//其他
          _Data7.push('-');//建筑业
          _Data7.push(qdData.CH4EW.transportation);//交通运输
          _Data7.push('-');//服务业
          _Data7.push('-');//居民生活
          _Data7.push(qdData.CH4EW.biomassBurning);//2. 生物质燃烧(以能源利用为目的)
          _Data7.push(qdData.CH4EW.coalMiningEscape);//3. 煤炭开采逃逸
          _Data7.push(qdData.CH4EW.oilAndGasSystemsEscape);//4. 油气系统逃逸
          _Data7.push('-');//5. 非能源利用
          _Data7.push(qdData.CH4EW.internationalFuel);//国际燃料舱
          _Data7.push(qdData.CH4EW.internationalAviation);//国际航空
          _Data7.push(qdData.CH4EW.internationalSailing);//国际航海
          _Data7.push('-');//调入（出）电力间接排放



          _Data8.push(qdData.N2OEW.totalEnergyActivities);//能源活动总计
          _Data8.push(qdData.N2OEW.fossilFuel);//1. 化石燃料燃烧
          _Data8.push(qdData.N2OEW.energyIndustry);//能源工业
          _Data8.push(qdData.N2OEW.electricityProduction);//电力生产
          _Data8.push('-');//油气开采
          _Data8.push('-');//固体燃料
          _Data8.push('-');//农业
          _Data8.push('-');//工业和建筑业
          _Data8.push('-');//钢铁
          _Data8.push('-');//有色金属
          _Data8.push('-');//化工
          _Data8.push('-');//建材
          _Data8.push('-');//其他
          _Data8.push('-');//建筑业
          _Data8.push(qdData.N2OEW.transportation);//交通运输
          _Data8.push('-');//服务业
          _Data8.push('-');//居民生活
          _Data8.push(qdData.N2OEW.biomassBurning);//2. 生物质燃烧(以能源利用为目的)
          _Data8.push('-');//3. 煤炭开采逃逸
          _Data8.push('-');//4. 油气系统逃逸
          _Data8.push('-');//5. 非能源利用
          _Data8.push(qdData.N2OEW.internationalFuel);//国际燃料舱
          _Data8.push(qdData.N2OEW.internationalAviation);//国际航空
          _Data8.push(qdData.N2OEW.internationalSailing);//国际航海
          _Data8.push('-');//调入（出）电力间接排放



          _Data9.push(qdData.CO2EW.totalEnergyActivities);//能源活动总计
          _Data9.push(qdData.CO2EW.fossilFuel);//1. 化石燃料燃烧
          _Data9.push(qdData.CO2EW.energyIndustry);//能源工业
          _Data9.push(qdData.CO2EW.electricityProduction);//电力生产
          _Data9.push(qdData.CO2EW.oilAndGasExploration);//油气开采
          _Data9.push(qdData.CO2EW.solidFuel);//固体燃料
          _Data9.push(qdData.CO2EW.agriculture);//农业
          _Data9.push(qdData.CO2EW.industryAndConstruction);//工业和建筑业
          _Data9.push(qdData.CO2EW.steel);//钢铁
          _Data9.push(qdData.CO2EW.nonferrousMetals);//有色金属
          _Data9.push(qdData.CO2EW.chemicalIndustry);//化工
          _Data9.push(qdData.CO2EW.buildingMaterials);//建材
          _Data9.push(qdData.CO2EW.other);//其他
          _Data9.push(qdData.CO2EW.constructionIndustry);//建筑业
          _Data9.push(qdData.CO2EW.transportation);//交通运输
          _Data9.push(qdData.CO2EW.serviceIndustry);//服务业
          _Data9.push(qdData.CO2EW.residentsLiving);//居民生活
          _Data9.push(qdData.CO2EW.biomassBurning);//2. 生物质燃烧(以能源利用为目的)
          _Data9.push((qdData.CH4.coalMiningEscape*21).toFixed(2));//3. 煤炭开采逃逸
          _Data9.push((qdData.CH4.oilAndGasSystemsEscape*21).toFixed(2));//4. 油气系统逃逸
          _Data9.push(qdData.CO2EW.nonEnergyUse);//5. 非能源利用
          _Data9.push(qdData.CO2EW.internationalFuel);//国际燃料舱
          _Data9.push(qdData.CO2EW.internationalAviation);//国际航空
          _Data9.push(qdData.CO2EW.internationalSailing);//国际航海
          _Data9.push(qdData.CO2EW.chargeOutIndirectDischargeOfElectricity);//调入（出）电力间接排放


          const _b2= []

          for(var i  = 0 ;i <fossilTitle1.length;i++){
            _b2.push({
              key:i,
              name:{

                value:fossilTitle1[i] ,
              },
              CO2:{

                value:_Data4[i] ,
              },
              CH4:{

                value:_Data5[i],
              },
              N2O:{

                value:_Data6[i] ,
              },
              bCH4:{

                value:_Data7[i] ,
              },
              bN2O:{

                value:_Data8[i] ,
              },
              bCO2:{

                value:_Data9[i] ,
              },
            })
          }


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


          var Da2 = (((alldata.energyProductionAndProcessingConversion.cEPowerGenerationBoilers
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

          var Da3 = ((alldata.energyProductionAndProcessingConversion.cEPowerGenerationBoilers
          +alldata.energyProductionAndProcessingConversion.cEIndustrialBoilers
          +alldata.energyProductionAndProcessingConversion.cEOtherEquipment)
          +(alldata.energyProductionAndProcessingConversion.oAPowerGenerationBoilers
          +alldata.energyProductionAndProcessingConversion.oAIndustrialBoilers
          +alldata.energyProductionAndProcessingConversion.oAOtherEquipment)
          +(alldata.energyProductionAndProcessingConversion.sFPowerGenerationBoilers
          +alldata.energyProductionAndProcessingConversion.sFIndustrialBoilers
          +alldata.energyProductionAndProcessingConversion.sFOtherEquipment))

          var Da4 = (alldata.energyProductionAndProcessingConversion.cEPowerGenerationBoilers
            +alldata.energyProductionAndProcessingConversion.cEIndustrialBoilers
            +alldata.energyProductionAndProcessingConversion.cEOtherEquipment)

          var Da5 = alldata.energyProductionAndProcessingConversion.cEPowerGenerationBoilers

          var Da6 =(alldata.transportation.tDomesticFlights+alldata.transportation.tHongKongAndMacaoFlights)
            +alldata.transportation.highway+alldata.transportation.railway+alldata.transportation.inlandRiverInternalCombustionEngine
          //部门方法
          _Data.push(Da1.toFixed(2))

          _Data.push(Da2.toFixed(2))

          // 1.1能源生产与加工转换
          _Data.push(Da3.toFixed(2))

          _Data.push(Da4.toFixed(2))

          _Data.push(Da5.toFixed(2))


          _Data.push(alldata.energyProductionAndProcessingConversion.cEIndustrialBoilers); //1.1.1.2工业锅炉
          _Data.push(alldata.energyProductionAndProcessingConversion.cEOtherEquipment);//1.1.1.3其他设备

          _Data.push((alldata.energyProductionAndProcessingConversion.oAPowerGenerationBoilers
          +alldata.energyProductionAndProcessingConversion.oAIndustrialBoilers
          +alldata.energyProductionAndProcessingConversion.oAOtherEquipment).toFixed(2))

          _Data.push(alldata.energyProductionAndProcessingConversion.oAPowerGenerationBoilers);//1.1.2.1发电锅炉
          _Data.push(alldata.energyProductionAndProcessingConversion.oAIndustrialBoilers);//1.1.2.2工业锅炉
          _Data.push(alldata.energyProductionAndProcessingConversion.oAOtherEquipment);//1.1.2.3其他设备

          _Data.push((alldata.energyProductionAndProcessingConversion.sFPowerGenerationBoilers
          +alldata.energyProductionAndProcessingConversion.sFIndustrialBoilers
          +alldata.energyProductionAndProcessingConversion.sFOtherEquipment).toFixed(2))

          _Data.push(alldata.energyProductionAndProcessingConversion.sFPowerGenerationBoilers);//1.1.3.1发电锅炉
          _Data.push(alldata.energyProductionAndProcessingConversion.sFIndustrialBoilers);//1.1.3.2工业锅炉
          _Data.push(alldata.energyProductionAndProcessingConversion.sFOtherEquipment);//1.1.3.3其他设备


          //    1.2工业和建筑业
          _Data.push((alldata.industryAndConstruction.sPowerGenerationBoilers+alldata.industryAndConstruction.sIndustrialBoilers
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

          _Data.push((alldata.industryAndConstruction.sPowerGenerationBoilers+alldata.industryAndConstruction.sIndustrialBoilers
          +alldata.industryAndConstruction.sBlastFurnace+alldata.industryAndConstruction.sotherEquipment))

          _Data.push(alldata.industryAndConstruction.sPowerGenerationBoilers);//1.2.1.1发电锅炉
          _Data.push(alldata.industryAndConstruction.sIndustrialBoilers);//1.2.1.2工业锅炉
          _Data.push(alldata.industryAndConstruction.sBlastFurnace);//1.2.1.3高炉
          _Data.push(alldata.industryAndConstruction.sotherEquipment);//1.2.1.4其他设备

          _Data.push((alldata.industryAndConstruction.nMPowerGenerationBoilers+alldata.industryAndConstruction.nMIndustrialBoilers
          +alldata.industryAndConstruction.nMAluminaRotaryKiln+alldata.industryAndConstruction.nMOtherEquipment))
          _Data.push(alldata.industryAndConstruction.nMPowerGenerationBoilers);//1.2.2.1发电锅炉
          _Data.push(alldata.industryAndConstruction.nMIndustrialBoilers);//1.2.2.2工业锅炉
          _Data.push(alldata.industryAndConstruction.nMAluminaRotaryKiln);//1.2.2.3氧化铝回转窑
          _Data.push(alldata.industryAndConstruction.nMOtherEquipment);//1.2.2.4其他设备

          _Data.push((alldata.industryAndConstruction.cMPowerGenerationBoilers+alldata.industryAndConstruction.cMIndustrialBoilers
          +alldata.industryAndConstruction.cMSyntheticAmmoniaGasFurnace+alldata.industryAndConstruction.cMotherEquipment))
          _Data.push(alldata.industryAndConstruction.cMPowerGenerationBoilers);//1.2.3.1发电锅炉
          _Data.push(alldata.industryAndConstruction.cMIndustrialBoilers);//1.2.3.2工业锅炉
          _Data.push(alldata.industryAndConstruction.cMSyntheticAmmoniaGasFurnace);//1.2.3.3合成氨造气炉
          _Data.push(alldata.industryAndConstruction.cMotherEquipment);//1.2.3.4其他设备

          _Data.push((alldata.industryAndConstruction.bMPowerGenerationBoilers+alldata.industryAndConstruction.bMIndustrialBoilers
          +alldata.industryAndConstruction.bMCementRotaryKiln+alldata.industryAndConstruction.bMCementShaftKiln+alldata.industryAndConstruction.bMOtherEquipment))
          _Data.push(alldata.industryAndConstruction.bMPowerGenerationBoilers);//1.2.4.1发电锅炉
          _Data.push(alldata.industryAndConstruction.bMIndustrialBoilers);//1.2.4.2工业锅炉
          _Data.push(alldata.industryAndConstruction.bMCementRotaryKiln);//1.2.4.3水泥回转窑
          _Data.push(alldata.industryAndConstruction.bMCementShaftKiln);//1.2.4.4水泥立窑
          _Data.push(alldata.industryAndConstruction.bMOtherEquipment);//1.2.4.5其他设备


          _Data.push((alldata.industryAndConstruction.aEquipment1+alldata.industryAndConstruction.aEquipment2+alldata.industryAndConstruction.aEquipment3)
        +(alldata.industryAndConstruction.bEquipment1+alldata.industryAndConstruction.bEquipment2+alldata.industryAndConstruction.bEquipment3)
      +(alldata.industryAndConstruction.cEquipment1+alldata.industryAndConstruction.cEquipment2+alldata.industryAndConstruction.cEquipment3)) // 1.2.5其他工业部门

          _Data.push((alldata.industryAndConstruction.aEquipment1+alldata.industryAndConstruction.aEquipment2+alldata.industryAndConstruction.aEquipment3))
          _Data.push(alldata.industryAndConstruction.aEquipment1);//1.2.5.1.1设备1
          _Data.push(alldata.industryAndConstruction.aEquipment2);//1.2.5.1.1设备2
          _Data.push(alldata.industryAndConstruction.aEquipment3);//1.2.5.1.1设备3

          _Data.push((alldata.industryAndConstruction.bEquipment1+alldata.industryAndConstruction.bEquipment2+alldata.industryAndConstruction.bEquipment3))
          _Data.push(alldata.industryAndConstruction.bEquipment1);//1.2.5.2.1设备1
          _Data.push(alldata.industryAndConstruction.bEquipment2);//1.2.5.2.2设备2
          _Data.push(alldata.industryAndConstruction.bEquipment3);//1.2.5.2.3设备3

          _Data.push((alldata.industryAndConstruction.cEquipment1+alldata.industryAndConstruction.cEquipment2+alldata.industryAndConstruction.cEquipment3))
          _Data.push(alldata.industryAndConstruction.cEquipment1);//1.2.5.3.1设备1
          _Data.push(alldata.industryAndConstruction.cEquipment2);//1.2.5.3.2设备2
          _Data.push(alldata.industryAndConstruction.cEquipment3);//1.2.5.3.3设备3

          _Data.push((alldata.industryAndConstruction.cIPowerGenerationBoilers+alldata.industryAndConstruction.cIIndustrialBoilers+alldata.industryAndConstruction.cIOtherEquipment))//   1.2.6建筑业
          _Data.push(alldata.industryAndConstruction.cIPowerGenerationBoilers);//1.2.6.1发电锅炉
          _Data.push(alldata.industryAndConstruction.cIIndustrialBoilers);//1.2.6.2工业锅炉
          _Data.push(alldata.industryAndConstruction.cIOtherEquipment);//1.2.6.3其他设备


          var Da7 = (alldata.transportation.tDomesticFlights+alldata.transportation.tHongKongAndMacaoFlights)

          _Data.push(Da6.toFixed(2)) //   1.3交通运输

          _Data.push(Da7.toFixed(2)) //   1.3.1航空

          _Data.push(alldata.transportation.tDomesticFlights);//1.3.1.1国内航班
          _Data.push(alldata.transportation.tHongKongAndMacaoFlights);//1.3.1.2港澳地区航班
          _Data.push(alldata.transportation.tInternationalFlights);//1.3.1.3国际航班

          _Data.push(alldata.transportation.highway);//1.3.2公路
          _Data.push(alldata.transportation.railway);//1.3.3铁路

          _Data.push(alldata.transportation.inlandRiverInternalCombustionEngine)//     1.3.4水运
          _Data.push(alldata.transportation.inlandRiverInternalCombustionEngine);//1.3.4.1内河近海内燃机
          _Data.push(alldata.transportation.internationalOceanInternalCombustionEngine);//1.3.4.2国际远洋内燃机

          _Data.push(alldata.servicesAndOthers.servicesAndOthers);// 1.4服务业及其他
          _Data.push(alldata.residentsLiving.residentsLiving);//1.5居民生活
          _Data.push(alldata.agricultureForestryAnimalHusbandryAndFishery.agricultureForestryAnimalHusbandryAndFishery);//    1.6农、林、牧、渔业

          _Data.push(Alldata.CO2.biomassBurning);//生物质燃烧
          _Data.push('-');
          _Data.push('-');
          _Data.push(Alldata.CO2.nonEnergyUse);//5. 非能源利用


          _Data.push(alldata.transportation.tInternationalFlights+alldata.transportation.internationalOceanInternalCombustionEngine);//国际燃料舱
          _Data.push(alldata.transportation.tInternationalFlights);// 国际航空
          _Data.push(alldata.transportation.internationalOceanInternalCombustionEngine);//国际航海

          _Data.push(Alldata.CO2.electricityTransferCallsForIndirectCO2Discharge);//调入（出）电力间接排放




          const _a = [];

          var Db1 = (((Alldata.CH4.mobileSourceCH4AndN2OEmissions.tDomesticFlights+Alldata.CH4.mobileSourceCH4AndN2OEmissions.tHongKongAndMacaoFlights)+
          +Alldata.CH4.mobileSourceCH4AndN2OEmissions.highway+Alldata.CH4.mobileSourceCH4AndN2OEmissions.railway+Alldata.CH4.mobileSourceCH4AndN2OEmissions.inlandRiverInternalCombustionEngine)
          +(Alldata.CH4.biomassBurning)+Alldata.CH4.coalMiningAndMineActivitiesToEscape+Alldata.CH4.oilAndGasSystemsEscape)

          var Db2 = ((Alldata.CH4.mobileSourceCH4AndN2OEmissions.tDomesticFlights+Alldata.CH4.mobileSourceCH4AndN2OEmissions.tHongKongAndMacaoFlights)+
          +Alldata.CH4.mobileSourceCH4AndN2OEmissions.highway+Alldata.CH4.mobileSourceCH4AndN2OEmissions.railway+Alldata.CH4.mobileSourceCH4AndN2OEmissions.inlandRiverInternalCombustionEngine)

          var Db6 =((Alldata.CH4.mobileSourceCH4AndN2OEmissions.tDomesticFlights+Alldata.CH4.mobileSourceCH4AndN2OEmissions.tHongKongAndMacaoFlights)+
          +Alldata.CH4.mobileSourceCH4AndN2OEmissions.highway+Alldata.CH4.mobileSourceCH4AndN2OEmissions.railway+Alldata.CH4.mobileSourceCH4AndN2OEmissions.inlandRiverInternalCombustionEngine)

          _Data1.push(Db1.toFixed(2))

          _Data1.push(Db2.toFixed(2))



          for(var i  = 0 ; i<52;i++){
            _Data1.push('-')
          }
          var Db7 = (Alldata.CH4.mobileSourceCH4AndN2OEmissions.tDomesticFlights+Alldata.CH4.mobileSourceCH4AndN2OEmissions.tHongKongAndMacaoFlights)

          _Data1.push(Db6.toFixed(2))

          _Data1.push(Db7)// 1.3.1航空


          _Data1.push(Alldata.CH4.mobileSourceCH4AndN2OEmissions.tDomesticFlights);//1.3.1.1国内航班
          _Data1.push(Alldata.CH4.mobileSourceCH4AndN2OEmissions.tHongKongAndMacaoFlights);//1.3.1.2港澳地区航班
          _Data1.push(Alldata.CH4.mobileSourceCH4AndN2OEmissions.tInternationalFlights);//1.3.1.3国际航班

          _Data1.push(Alldata.CH4.mobileSourceCH4AndN2OEmissions.highway);//1.3.2公路
          _Data1.push(Alldata.CH4.mobileSourceCH4AndN2OEmissions.railway);//1.3.3铁路

          _Data1.push(Alldata.CH4.mobileSourceCH4AndN2OEmissions.inlandRiverInternalCombustionEngine)

          _Data1.push(Alldata.CH4.mobileSourceCH4AndN2OEmissions.inlandRiverInternalCombustionEngine);//1.3.4.1内河近海内燃机
          _Data1.push(Alldata.CH4.mobileSourceCH4AndN2OEmissions.internationalOceanInternalCombustionEngine);//1.3.4.2国际远洋内燃机

          _Data1.push('-')
          _Data1.push('-')
          _Data1.push('-')

          _Data1.push(Alldata.CH4.biomassBurning);
          _Data1.push(Alldata.CH4.coalMiningAndMineActivitiesToEscape);
          _Data1.push(Alldata.CH4.oilAndGasSystemsEscape);

          _Data1.push('-')
          _Data1.push((Alldata.CH4.mobileSourceCH4AndN2OEmissions.tInternationalFlights)+(Alldata.CH4.mobileSourceCH4AndN2OEmissions.internationalOceanInternalCombustionEngine))//国际燃料舱
          _Data1.push((Alldata.CH4.mobileSourceCH4AndN2OEmissions.tInternationalFlights))//国际航空
          _Data1.push((Alldata.CH4.mobileSourceCH4AndN2OEmissions.internationalOceanInternalCombustionEngine))//  国际航海
          _Data1.push('-')





          var Dc1 =(Alldata.N2O.cEPowerGenerationBoilers+Alldata.N2O.mobileSourceCH4AndN2OEmissions.tDomesticFlights+Alldata.N2O.mobileSourceCH4AndN2OEmissions.tHongKongAndMacaoFlights
          +Alldata.N2O.mobileSourceCH4AndN2OEmissions.highway+Alldata.N2O.mobileSourceCH4AndN2OEmissions.railway+Alldata.N2O.mobileSourceCH4AndN2OEmissions.inlandRiverInternalCombustionEngine
          +Alldata.N2O.biomassBurning)

          var Dc2 = (Alldata.N2O.cEPowerGenerationBoilers+Alldata.N2O.mobileSourceCH4AndN2OEmissions.tDomesticFlights+Alldata.N2O.mobileSourceCH4AndN2OEmissions.tHongKongAndMacaoFlights
          +Alldata.N2O.mobileSourceCH4AndN2OEmissions.highway+Alldata.N2O.mobileSourceCH4AndN2OEmissions.railway+Alldata.N2O.mobileSourceCH4AndN2OEmissions.inlandRiverInternalCombustionEngine)

          var Dc3 =  Alldata.N2O.cEPowerGenerationBoilers

          var Dc6=  Alldata.N2O.mobileSourceCH4AndN2OEmissions.tDomesticFlights+Alldata.N2O.mobileSourceCH4AndN2OEmissions.tHongKongAndMacaoFlights
            +Alldata.N2O.mobileSourceCH4AndN2OEmissions.highway+Alldata.N2O.mobileSourceCH4AndN2OEmissions.railway+Alldata.N2O.mobileSourceCH4AndN2OEmissions.inlandRiverInternalCombustionEngine

          var Dc7 = (Alldata.N2O.mobileSourceCH4AndN2OEmissions.tDomesticFlights+Alldata.N2O.mobileSourceCH4AndN2OEmissions.tHongKongAndMacaoFlights)
          _Data2.push(Dc1.toFixed(2))
          _Data2.push(Dc2.toFixed(2))
          _Data2.push(Dc3.toFixed(2))
          _Data2.push(Dc3.toFixed(2))
          _Data2.push(Dc3.toFixed(2))
          for(var i  = 0 ; i<49;i++){
            _Data2.push('-')
          }

          _Data2.push(Dc6.toFixed(2))

          _Data2.push(Dc7)

          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.tDomesticFlights);//1.3.1.1国内航班
          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.tHongKongAndMacaoFlights);//1.3.1.2港澳地区航班
          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.tInternationalFlights);//1.3.1.3国际航班

          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.highway);//1.3.2公路
          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.railway);//1.3.3铁路
          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.inlandRiverInternalCombustionEngine)
          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.inlandRiverInternalCombustionEngine);//1.3.4.1内河近海内燃机
          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.internationalOceanInternalCombustionEngine);//1.3.4.2国际远洋内燃机

          _Data2.push('-')
          _Data2.push('-')
          _Data2.push('-')

          _Data2.push(Alldata.N2O.biomassBurning);
          _Data2.push('-')
          _Data2.push('-')
          _Data2.push('-')
          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.tInternationalFlights+Alldata.N2O.mobileSourceCH4AndN2OEmissions.internationalOceanInternalCombustionEngine)
          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.tInternationalFlights)
          _Data2.push(Alldata.N2O.mobileSourceCH4AndN2OEmissions.internationalOceanInternalCombustionEngine)
          _Data2.push('-')



          _Data3.push((Da1+Db1*21+Dc1*310).toFixed(2))
          _Data3.push((Da2+Db2*21+Dc2*310).toFixed(2))
          _Data3.push((Da3+Dc3*310).toFixed(2))
          _Data3.push((Da4+Dc3*310).toFixed(2))
          _Data3.push((Da5+Dc3*310).toFixed(2))


          _Data3.push(alldata.energyProductionAndProcessingConversion.cEIndustrialBoilers); //1.1.1.2工业锅炉
          _Data3.push(alldata.energyProductionAndProcessingConversion.cEOtherEquipment);//1.1.1.3其他设备

          _Data3.push((alldata.energyProductionAndProcessingConversion.oAPowerGenerationBoilers
          +alldata.energyProductionAndProcessingConversion.oAIndustrialBoilers
          +alldata.energyProductionAndProcessingConversion.oAOtherEquipment).toFixed(2))

          _Data3.push(alldata.energyProductionAndProcessingConversion.oAPowerGenerationBoilers);//1.1.2.1发电锅炉
          _Data3.push(alldata.energyProductionAndProcessingConversion.oAIndustrialBoilers);//1.1.2.2工业锅炉
          _Data3.push(alldata.energyProductionAndProcessingConversion.oAOtherEquipment);//1.1.2.3其他设备

          _Data3.push((alldata.energyProductionAndProcessingConversion.sFPowerGenerationBoilers
          +alldata.energyProductionAndProcessingConversion.sFIndustrialBoilers
          +alldata.energyProductionAndProcessingConversion.sFOtherEquipment).toFixed(2))

          _Data3.push(alldata.energyProductionAndProcessingConversion.sFPowerGenerationBoilers);//1.1.3.1发电锅炉
          _Data3.push(alldata.energyProductionAndProcessingConversion.sFIndustrialBoilers);//1.1.3.2工业锅炉
          _Data3.push(alldata.energyProductionAndProcessingConversion.sFOtherEquipment);//1.1.3.3其他设备


          //    1.2工业和建筑业
          _Data3.push((alldata.industryAndConstruction.sPowerGenerationBoilers+alldata.industryAndConstruction.sIndustrialBoilers
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

          _Data3.push((alldata.industryAndConstruction.sPowerGenerationBoilers+alldata.industryAndConstruction.sIndustrialBoilers
          +alldata.industryAndConstruction.sBlastFurnace+alldata.industryAndConstruction.sotherEquipment))

          _Data3.push(alldata.industryAndConstruction.sPowerGenerationBoilers);//1.2.1.1发电锅炉
          _Data3.push(alldata.industryAndConstruction.sIndustrialBoilers);//1.2.1.2工业锅炉
          _Data3.push(alldata.industryAndConstruction.sBlastFurnace);//1.2.1.3高炉
          _Data3.push(alldata.industryAndConstruction.sotherEquipment);//1.2.1.4其他设备

          _Data3.push((alldata.industryAndConstruction.nMPowerGenerationBoilers+alldata.industryAndConstruction.nMIndustrialBoilers
          +alldata.industryAndConstruction.nMAluminaRotaryKiln+alldata.industryAndConstruction.nMOtherEquipment))
          _Data3.push(alldata.industryAndConstruction.nMPowerGenerationBoilers);//1.2.2.1发电锅炉
          _Data3.push(alldata.industryAndConstruction.nMIndustrialBoilers);//1.2.2.2工业锅炉
          _Data3.push(alldata.industryAndConstruction.nMAluminaRotaryKiln);//1.2.2.3氧化铝回转窑
          _Data3.push(alldata.industryAndConstruction.nMOtherEquipment);//1.2.2.4其他设备

          _Data3.push((alldata.industryAndConstruction.cMPowerGenerationBoilers+alldata.industryAndConstruction.cMIndustrialBoilers
          +alldata.industryAndConstruction.cMSyntheticAmmoniaGasFurnace+alldata.industryAndConstruction.cMotherEquipment))
          _Data3.push(alldata.industryAndConstruction.cMPowerGenerationBoilers);//1.2.3.1发电锅炉
          _Data3.push(alldata.industryAndConstruction.cMIndustrialBoilers);//1.2.3.2工业锅炉
          _Data3.push(alldata.industryAndConstruction.cMSyntheticAmmoniaGasFurnace);//1.2.3.3合成氨造气炉
          _Data3.push(alldata.industryAndConstruction.cMotherEquipment);//1.2.3.4其他设备

          _Data3.push((alldata.industryAndConstruction.bMPowerGenerationBoilers+alldata.industryAndConstruction.bMIndustrialBoilers
          +alldata.industryAndConstruction.bMCementRotaryKiln+alldata.industryAndConstruction.bMCementShaftKiln+alldata.industryAndConstruction.bMOtherEquipment))
          _Data3.push(alldata.industryAndConstruction.bMPowerGenerationBoilers);//1.2.4.1发电锅炉
          _Data3.push(alldata.industryAndConstruction.bMIndustrialBoilers);//1.2.4.2工业锅炉
          _Data3.push(alldata.industryAndConstruction.bMCementRotaryKiln);//1.2.4.3水泥回转窑
          _Data3.push(alldata.industryAndConstruction.bMCementShaftKiln);//1.2.4.4水泥立窑
          _Data3.push(alldata.industryAndConstruction.bMOtherEquipment);//1.2.4.5其他设备


          _Data3.push((alldata.industryAndConstruction.aEquipment1+alldata.industryAndConstruction.aEquipment2+alldata.industryAndConstruction.aEquipment3)
            +(alldata.industryAndConstruction.bEquipment1+alldata.industryAndConstruction.bEquipment2+alldata.industryAndConstruction.bEquipment3)
            +(alldata.industryAndConstruction.cEquipment1+alldata.industryAndConstruction.cEquipment2+alldata.industryAndConstruction.cEquipment3)) // 1.2.5其他工业部门

          _Data3.push((alldata.industryAndConstruction.aEquipment1+alldata.industryAndConstruction.aEquipment2+alldata.industryAndConstruction.aEquipment3))
          _Data3.push(alldata.industryAndConstruction.aEquipment1);//1.2.5.1.1设备1
          _Data3.push(alldata.industryAndConstruction.aEquipment2);//1.2.5.1.1设备2
          _Data3.push(alldata.industryAndConstruction.aEquipment3);//1.2.5.1.1设备3

          _Data3.push((alldata.industryAndConstruction.bEquipment1+alldata.industryAndConstruction.bEquipment2+alldata.industryAndConstruction.bEquipment3))
          _Data3.push(alldata.industryAndConstruction.bEquipment1);//1.2.5.2.1设备1
          _Data3.push(alldata.industryAndConstruction.bEquipment2);//1.2.5.2.2设备2
          _Data3.push(alldata.industryAndConstruction.bEquipment3);//1.2.5.2.3设备3

          _Data3.push((alldata.industryAndConstruction.cEquipment1+alldata.industryAndConstruction.cEquipment2+alldata.industryAndConstruction.cEquipment3))
          _Data3.push(alldata.industryAndConstruction.cEquipment1);//1.2.5.3.1设备1
          _Data3.push(alldata.industryAndConstruction.cEquipment2);//1.2.5.3.2设备2
          _Data3.push(alldata.industryAndConstruction.cEquipment3);//1.2.5.3.3设备3

          _Data3.push((alldata.industryAndConstruction.cIPowerGenerationBoilers+alldata.industryAndConstruction.cIIndustrialBoilers+alldata.industryAndConstruction.cIOtherEquipment))//   1.2.6建筑业
          _Data3.push(alldata.industryAndConstruction.cIPowerGenerationBoilers);//1.2.6.1发电锅炉
          _Data3.push(alldata.industryAndConstruction.cIIndustrialBoilers);//1.2.6.2工业锅炉
          _Data3.push(alldata.industryAndConstruction.cIOtherEquipment);//1.2.6.3其他设备

          _Data3.push((Da6+Db6*21+Dc6*310).toFixed(2))
          _Data3.push((Da7+Db7*21+Dc7*310).toFixed(2))
          _Data3.push((alldata.transportation.tDomesticFlights+Alldata.CH4.mobileSourceCH4AndN2OEmissions.tDomesticFlights*21+Alldata.N2O.mobileSourceCH4AndN2OEmissions.tDomesticFlights*310).toFixed(2))
          _Data3.push((alldata.transportation.tHongKongAndMacaoFlights+Alldata.CH4.mobileSourceCH4AndN2OEmissions.tHongKongAndMacaoFlights*21+Alldata.N2O.mobileSourceCH4AndN2OEmissions.tHongKongAndMacaoFlights*310).toFixed(2))
          _Data3.push((alldata.transportation.tInternationalFlights+Alldata.CH4.mobileSourceCH4AndN2OEmissions.tInternationalFlights*21+Alldata.N2O.mobileSourceCH4AndN2OEmissions.tInternationalFlights*310).toFixed(2))
          _Data3.push((alldata.transportation.highway+Alldata.CH4.mobileSourceCH4AndN2OEmissions.highway*21+Alldata.N2O.mobileSourceCH4AndN2OEmissions.highway*310).toFixed(2))
          _Data3.push((alldata.transportation.railway+Alldata.CH4.mobileSourceCH4AndN2OEmissions.railway*21+Alldata.N2O.mobileSourceCH4AndN2OEmissions.railway*310).toFixed(2))
          _Data3.push((alldata.transportation.inlandRiverInternalCombustionEngine+Alldata.CH4.mobileSourceCH4AndN2OEmissions.inlandRiverInternalCombustionEngine*21+Alldata.N2O.mobileSourceCH4AndN2OEmissions.inlandRiverInternalCombustionEngine*310).toFixed(2))
          _Data3.push((alldata.transportation.inlandRiverInternalCombustionEngine+Alldata.CH4.mobileSourceCH4AndN2OEmissions.inlandRiverInternalCombustionEngine*21+Alldata.N2O.mobileSourceCH4AndN2OEmissions.inlandRiverInternalCombustionEngine*310).toFixed(2))
          _Data3.push((alldata.transportation.internationalOceanInternalCombustionEngine+Alldata.CH4.mobileSourceCH4AndN2OEmissions.internationalOceanInternalCombustionEngine*21+Alldata.N2O.mobileSourceCH4AndN2OEmissions.internationalOceanInternalCombustionEngine*310).toFixed(2))
          _Data3.push(alldata.servicesAndOthers.servicesAndOthers)
          _Data3.push(alldata.residentsLiving.residentsLiving);//1.5居民生活
          _Data3.push(alldata.agricultureForestryAnimalHusbandryAndFishery.agricultureForestryAnimalHusbandryAndFishery);//    1.6农、林、牧、渔业
          _Data3.push((Alldata.CO2.biomassBurning+Alldata.CH4.biomassBurning*21+Alldata.N2O.biomassBurning*310).toFixed(2))
          _Data3.push((Alldata.CH4.coalMiningAndMineActivitiesToEscape*21).toFixed(2))
          _Data3.push((Alldata.CH4.oilAndGasSystemsEscape*21).toFixed(2))
          _Data3.push(Alldata.CO2.nonEnergyUse);//5. 非能源利用
          _Data3.push((alldata.transportation.tInternationalFlights+alldata.transportation.internationalOceanInternalCombustionEngine+((Alldata.CH4.mobileSourceCH4AndN2OEmissions.tInternationalFlights)+(Alldata.CH4.mobileSourceCH4AndN2OEmissions.internationalOceanInternalCombustionEngine))*21+(Alldata.N2O.mobileSourceCH4AndN2OEmissions.tInternationalFlights+Alldata.N2O.mobileSourceCH4AndN2OEmissions.internationalOceanInternalCombustionEngine)*310).toFixed(2))
           _Data3.push((alldata.transportation.tInternationalFlights+Alldata.CH4.mobileSourceCH4AndN2OEmissions.tInternationalFlights*21+Alldata.N2O.mobileSourceCH4AndN2OEmissions.tInternationalFlights*310).toFixed(2))
          _Data3.push((alldata.transportation.internationalOceanInternalCombustionEngine+Alldata.CH4.mobileSourceCH4AndN2OEmissions.internationalOceanInternalCombustionEngine*21+Alldata.N2O.mobileSourceCH4AndN2OEmissions.internationalOceanInternalCombustionEngine*310).toFixed(2))
          _Data3.push(Alldata.CO2.electricityTransferCallsForIndirectCO2Discharge);//调入（出）电力间接排放

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



          var _data = res.data.statisticalByRef


          var _TotalD = (_data.anthracite +_data.asphalt+_data.bituminouscoal+_data.blastfurnacegas+_data.briquette
                    +_data.coalgangue+_data.coke+_data.cokeovengas+_data.crudeoil+_data.diesel+_data.fueloil+_data.gasoline
          +_data.kerosene+_data.lignite+_data.liquefiedpetroleumgas+_data.liquifiednaturalgas+_data.lubricatingoil+_data.naphtha
          +_data.naturalgas+_data.oilcoke+_data.onvertergas+_data.other+_data.othercoalwashing+_data.othercokingproducts+_data.othergas
          +_data.otherpetroleumproducts+_data.paraffin+_data.refinerydrygas+_data.solventoil+_data.washthecleancoal).toFixed(2)



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

                value:_TotalD ,
              },
            }
          ];





          console.log(_b);


          this.setState({data:_b});
          this.setState({data1:_b1});
          this.setState({data2:_b2});
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
          message.error('数据录入有误，请重新录入！');
        }
      });
  }

  //年份选择
  selesctYears(i,years){

    if(i=='a'){
      $('#bodyTable1').show();
      $('#bodyTable2').hide();
      $('#bodyTable3').hide();


    }else if (i=='b'){
      $('#bodyTable1').hide();
      $('#bodyTable2').show();
      $('#bodyTable3').hide();

    }else{
      $('#bodyTable1').hide();
      $('#bodyTable2').hide();
      $('#bodyTable3').show();

    }
    this.setState({cs:i})
    this.setState({ loading: true});
    this.setState({years:years})
    this.queryGut(i,years)
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


    const { data2 } = this.state;
    const dataSource2 = data2.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    const columns = this.columns;
    const columns1 = this.columns1;
    const columns2 = this.columns2;


    return (
      <div className={styles.normal}>
        <div className={styles.title}>
          <span className={styles.title_span}>能源活动温室气体清单结果</span>
        </div>


        <div className={styles.newSelect}>

          <div className={styles.targetChoose}>
            <span className={styles.selectH1}>数据年份:</span>
            <ul>
              <li id="li1" className={'2005'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('a','2005')}}>2005</li>
              <li id="li2" className={'2010'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('a','2010')}}>2010</li>
              <li id="li3" className={'2012'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('a','2012')}}>2012</li>
              <li id="li4" className={'2014'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('a','2014')}}>2014</li>
            </ul>
          </div>

          <div className={styles.targetChoose}>
            <span className={styles.selectH1}>参数:　　</span>
            <ul>
              <li id="li5" className={'a'==this.state.cs?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('a',this.state.years)}}>清单结果</li>
              <li id="li6" className={'b'==this.state.cs?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('b',this.state.years)}}>部门方法</li>
              <li id="li7" className={'c'==this.state.cs?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('c',this.state.years)}}>参考方法</li>
             </ul>
          </div>

        </div>

        <Spin spinning={this.state.loading} delay={500}>


        <div className={styles.entryBody} id="bodyTable1"  >
          <p>清单结果</p>


          <Table  size="small"  pagination={false} bordered={true}  columns={columns2} dataSource={dataSource2} scroll={{ x: 1000, y: 2520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>

        <div className={styles.entryBody} id="bodyTable2" style={{display:'none'}}  >
          <p>部门方法</p>


          <Table   size="small" pagination={false} bordered={true}  columns={columns1} dataSource={dataSource1} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>


        <div className={styles.entryBody} id="bodyTable3" style={{display:'none'}} >
          <p>参考方法</p>


          <Table   size="small" pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 4500, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>



        </Spin>









      </div>
    );

  }
}


export default Form.create()(ElectricTable);
