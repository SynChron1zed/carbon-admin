/**
 * Created by dixu on 2017/10/10.
 */
import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch  } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Biological.less';
import createReactClass from 'create-react-class';
import { post } from '../utils/carbonRequest';

class EditableCell extends React.Component {

  state = {
    value: this.props.value,
    editable: this.props.editable || false,
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.editable !== this.state.editable || nextProps.value !== this.state.value) {
      this.setState({ editable: nextProps.editable, value: nextProps.value });

    /* if (nextProps.editable !== this.state.editable ) {
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
    this.setState({ value:value });
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

class EditableTable extends React.Component {


  constructor(props) {
    super(props);
    this.columns = [{
      title: '部门',
      dataIndex: 'name',
      width: 280,
      fixed: 'left',
      colSpan:1,
      render: (
        text, record, index) => this.renderColumns(this.state.data, index, 'name', text),
    }, {
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
      ttitle: '石脑油(万吨)', dataIndex: 'naphtha',width: 100,
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
    },
      {
        title: '编辑',
        dataIndex: 'operation',
        fixed: 'right',
        width: 100,

      render: (text, record, index) => {

        const { editable } = this.state.data[index].anthracite;
        return (
          <div className={styles.editableOperations} >

            {
              index ==0 || index ==1 || index ==2 || index ==6 || index ==10 || index ==14 || index ==15 || index ==20 ||
              index ==25 || index ==30 || index ==36 || index ==37 || index ==41 || index ==45 || index ==49 || index ==53|| index ==54|| index ==60? <span></span> :
              editable ?
                <span>
                  <a onClick={() => this.editDone(index, 'save')}>save</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone(index, 'cancel')}>
                    <a>cancel</a>
                  </Popconfirm>
                </span>
                :
                <span>
                  <a onClick={() => this.edit(index)}>edit</a>
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


      Data1:[],
      Data2:[],
      Data3:[],
      Data4:[],
      Data5:[],
      Data6:[],

      gas:'a1',
      statistics:'b1',
      breed:'0',
      dataSource:[],

      AllData:[]
    };

    this.query('0');


  }

  //1.1
  query(para){

    post('/activityLevelDataEntry/energyActivity//totalFossilFuels/co2/statisticalByDept/energyProductionAndProcessingConversion/list', {
      year:'2017',
      para:para

    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data;

          const _Data = []

          _Data.push(Alldata.cEPowerGenerationBoilers);//1.1.1.1发电锅炉
          _Data.push(Alldata.cEIndustrialBoilers); //1.1.1.2工业锅炉
          _Data.push(Alldata.cEOtherEquipment);//1.1.1.3其他设备

          _Data.push(Alldata.oAPowerGenerationBoilers);//1.1.2.1发电锅炉
          _Data.push(Alldata.oAIndustrialBoilers);//1.1.2.2工业锅炉
          _Data.push(Alldata.oAOtherEquipment);//1.1.2.3其他设备

          _Data.push(Alldata.sFPowerGenerationBoilers);//1.1.3.1发电锅炉
          _Data.push(Alldata.sFIndustrialBoilers);//1.1.3.2工业锅炉
          _Data.push(Alldata.sFOtherEquipment);//1.1.3.3其他设备


          this.setState({Data1:Alldata});

          console.log(this.state.Data1);

          const fossilTitle = [

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

          ]

          const data = [];

          for(var i = 0 ;i<14;i++){

            if(i==0 || i==1 || i==2 || i==6 || i==10){
              data.push({
                key: i,
                name:fossilTitle[i],
                anthracite: '0',
                asphalt: '0',
                bituminouscoal: '0',
                blastfurnacegas: '0',
                briquette: '0',
                catelogId: '0',
                coalgangue: '0',
                coke: '0',
                cokeovengas: '0',
                crudeoil: '0',
                diesel: '0',
                fueloil: '0',
                gasoline: '0',
                kerosene: '0',
                lignite: '0',
                liquefiedpetroleumgas: '0',
                liquifiednaturalgas: '0',
                lubricatingoil: '0',
                naphtha: '0',
                naturalgas: '0',
                oilcoke: '0',
                onvertergas: '0',
                other: '0',
                othercoalwashing: '0',
                othercokingproducts: '0',
                othergas: '0',
                otherpetroleumproducts: '0',
                paraffin: '0',
                refinerydrygas: '0',
                solventoil: '0',
                tffId: '0',
                washthecleancoal: '0',

              });
            }else if(i>6 && i<10) {

              var j = 4
              data.push({
                key: i,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            } else if(i>10){
              var j = 5;

              data.push({
                key: i,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            }else{


              var j = 3
              data.push({
                key: i,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            }



          }

          //console.log(data);





          this.query2(data,para);

        } else {
          message.error('数据错误！');
        }
      });
  }


  //1.2
  query2(data,para){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/industryAndConstruction/list', {
      year:'2017',
      para:para

    })
      .then((res) => {


        if (res.code==0) {

          var Alldata =res.data;

          const _a = data;

          const _Data = [];

          _Data.push(Alldata.sPowerGenerationBoilers);//1.2.1.1发电锅炉
          _Data.push(Alldata.sIndustrialBoilers);//1.2.1.2工业锅炉
          _Data.push(Alldata.sBlastFurnace);//1.2.1.3高炉
          _Data.push(Alldata.sotherEquipment);//1.2.1.4其他设备

          _Data.push(Alldata.nMPowerGenerationBoilers);//1.2.2.1发电锅炉
          _Data.push(Alldata.nMIndustrialBoilers);//1.2.2.2工业锅炉
          _Data.push(Alldata.nMAluminaRotaryKiln);//1.2.2.3氧化铝回转窑
          _Data.push(Alldata.nMOtherEquipment);//1.2.2.4其他设备

          _Data.push(Alldata.cMPowerGenerationBoilers);//1.2.3.1发电锅炉
          _Data.push(Alldata.cMIndustrialBoilers);//1.2.3.2工业锅炉
          _Data.push(Alldata.cMSyntheticAmmoniaGasFurnace);//1.2.3.3合成氨造气炉
          _Data.push(Alldata.cMotherEquipment);//1.2.3.4其他设备

          _Data.push(Alldata.bMPowerGenerationBoilers);//1.2.4.1发电锅炉
          _Data.push(Alldata.bMIndustrialBoilers);//1.2.4.2工业锅炉
          _Data.push(Alldata.bMCementRotaryKiln);//1.2.4.3水泥回转窑
          _Data.push(Alldata.bMCementShaftKiln);//1.2.4.4水泥立窑
          _Data.push(Alldata.bMOtherEquipment);//1.2.4.5其他设备


          _Data.push(Alldata.aEquipment1);//1.2.5.1.1设备1
          _Data.push(Alldata.aEquipment2);//1.2.5.1.1设备2
          _Data.push(Alldata.aEquipment3);//1.2.5.1.1设备3

          _Data.push(Alldata.bEquipment1);//1.2.5.2.1设备1
          _Data.push(Alldata.bEquipment2);//1.2.5.2.2设备2
          _Data.push(Alldata.bEquipment3);//1.2.5.2.3设备3

          _Data.push(Alldata.cEquipment1);//1.2.5.3.1设备1
          _Data.push(Alldata.cEquipment2);//1.2.5.3.2设备2
          _Data.push(Alldata.cEquipment3);//1.2.5.3.3设备3

          _Data.push(Alldata.cIPowerGenerationBoilers);//1.2.6.1发电锅炉
          _Data.push(Alldata.cIIndustrialBoilers);//1.2.6.2工业锅炉
          _Data.push(Alldata.cIOtherEquipment);//1.2.6.3其他设备


          const fossilTitle = [

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

          ]



          for(var i = 0 ;i<39;i++){

            if(i==0 || i==1 || i==6 || i==11 || i==16  || i==22 || i==23 || i==27 || i==31 || i==35 || i==39 ){
              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: '0',
                asphalt: '0',
                bituminouscoal: '0',
                blastfurnacegas: '0',
                briquette: '0',
                catelogId: '0',
                coalgangue: '0',
                coke: '0',
                cokeovengas: '0',
                crudeoil: '0',
                diesel: '0',
                fueloil: '0',
                gasoline: '0',
                kerosene: '0',
                lignite: '0',
                liquefiedpetroleumgas: '0',
                liquifiednaturalgas: '0',
                lubricatingoil: '0',
                naphtha: '0',
                naturalgas: '0',
                oilcoke: '0',
                onvertergas: '0',
                other: '0',
                othercoalwashing: '0',
                othercokingproducts: '0',
                othergas: '0',
                otherpetroleumproducts: '0',
                paraffin: '0',
                refinerydrygas: '0',
                solventoil: '0',
                tffId: '0',
                washthecleancoal: '0',

              });
            }else if(i>6 && i<11) {
              var j = 3
              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            } else if(i>11 && i<16){
              var j = 4

              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            } else if(i>16 && i<22){
              var j = 5

              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            } else if(i>23 && i<27){
              var j =7

              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            } else if(i>27 && i<31){
              var j = 8

              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            } else if(i>31 && i<35){
              var j = 9

              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            } else if(i>35 && i<39){
              var j = 10

              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });



            }else{

              var j =2

              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            }


          }

          //console.log(_a)

          this.setState({Data2:Alldata});



          this.query3(_a,para);

        } else {
          message.error('数据错误！');
        }
      });
  }

  //1.3
  query3(data,para){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/transportation/list', {
      year:'2017',
      para:para

    })
      .then((res) => {


        if (res.code==0) {

          var Alldata =res.data;


          const _a = data;

          const _Data = [];


          _Data.push(Alldata.tDomesticFlights);//1.3.1.1国内航班
          _Data.push(Alldata.tHongKongAndMacaoFlights);//1.3.1.2港澳地区航班
          _Data.push(Alldata.tInternationalFlights);//1.3.1.3国际航班

          _Data.push(Alldata.highway);//1.3.2公路
          _Data.push(Alldata.railway);//1.3.3铁路

          _Data.push(Alldata.inlandRiverInternalCombustionEngine);//1.3.4.1内河近海内燃机
          _Data.push(Alldata.internationalOceanInternalCombustionEngine);//1.3.4.2国际远洋内燃机




          const fossilTitle = [

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

          ]



          for(var i = 0 ;i<10;i++){

            if(i==0 || i==1 || i==7 ){
              _a.push({
                key: i+53,
                name:fossilTitle[i],
                anthracite: '0',
                asphalt: '0',
                bituminouscoal: '0',
                blastfurnacegas: '0',
                briquette: '0',
                catelogId: '0',
                coalgangue: '0',
                coke: '0',
                cokeovengas: '0',
                crudeoil: '0',
                diesel: '0',
                fueloil: '0',
                gasoline: '0',
                kerosene: '0',
                lignite: '0',
                liquefiedpetroleumgas: '0',
                liquifiednaturalgas: '0',
                lubricatingoil: '0',
                naphtha: '0',
                naturalgas: '0',
                oilcoke: '0',
                onvertergas: '0',
                other: '0',
                othercoalwashing: '0',
                othercokingproducts: '0',
                othergas: '0',
                otherpetroleumproducts: '0',
                paraffin: '0',
                refinerydrygas: '0',
                solventoil: '0',
                tffId: '0',
                washthecleancoal: '0',

              });
            }else if(i>7) {
              var j = 3
              _a.push({
                key: i+53,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            }else{

              var j =2

              _a.push({
                key: i+53,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            }


          }

          //console.log(_a);


          this.setState({Data3:Alldata});



          this.query4(_a,para);

        } else {
          message.error('数据错误！');
        }
      });
  }

  //1.4
  query4(data,para){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/servicesAndOthers/list', {
      year:'2017',
      para:para

    })
      .then((res) => {


        if (res.code==0) {

          var Alldata =res.data;

          const _a = data;

          const _Data = [];

          _Data.push(Alldata.servicesAndOthers);//1.4服务业及其他




          const fossilTitle = [


            '　　1.4服务业及其他',
            '　　1.5居民生活',
            '　　1.6农、林、牧、渔业',

          ]



          for(var i = 0 ;i<1;i++){



            var j =0

            _a.push({
              key: i+63,
              name:fossilTitle[i],
              anthracite: _Data[i-j].anthracite,
              asphalt: _Data[i-j].asphalt,
              bituminouscoal: _Data[i-j].bituminouscoal,
              blastfurnacegas: _Data[i-j].blastfurnacegas,
              briquette: _Data[i-j].briquette,
              catelogId: _Data[i-j].catelogId,
              coalgangue: _Data[i-j].coalgangue,
              coke: _Data[i-j].coke,
              cokeovengas: _Data[i-j].cokeovengas,
              crudeoil: _Data[i-j].crudeoil,
              diesel: _Data[i-j].diesel,
              fueloil: _Data[i-j].fueloil,
              gasoline: _Data[i-j].gasoline,
              kerosene: _Data[i-j].kerosene,
              lignite: _Data[i-j].lignite,
              liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
              liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
              lubricatingoil: _Data[i-j].lubricatingoil,
              naphtha: _Data[i-j].naphtha,
              naturalgas: _Data[i-j].naturalgas,
              oilcoke: _Data[i-j].oilcoke,
              onvertergas: _Data[i-j].onvertergas,
              other: _Data[i-j].other,
              othercoalwashing: _Data[i-j].othercoalwashing,
              othercokingproducts: _Data[i-j].othercokingproducts,
              othergas: _Data[i-j].othergas,
              otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
              paraffin: _Data[i-j].paraffin,
              refinerydrygas: _Data[i-j].refinerydrygas,
              solventoil: _Data[i-j].solventoil,
              tffId: _Data[i-j].tffId,
              washthecleancoal: _Data[i-j].washthecleancoal,

            });


          }

          //console.log(_a);

          this.setState({AllData:_a});

          this.setState({Data4:Alldata})

          this.query5(_a,para);

        } else {
          message.error('数据错误！');
        }
      });
  }

  //1.5
  query5(data,para){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/residentsLiving/list', {
      year:'2017',
      para:para

    })
      .then((res) => {


        if (res.code==0) {

          var Alldata =res.data;


          const _a = data;

          const _Data = [];

          _Data.push(Alldata.residentsLiving);//1.5居民生活




          const fossilTitle = [


            '　　1.5居民生活',
            '　　1.6农、林、牧、渔业',

          ]



          for(var i = 0 ;i<1;i++){



            var j =0

            _a.push({
              key: i+64,
              name:fossilTitle[i],
              anthracite: _Data[i-j].anthracite,
              asphalt: _Data[i-j].asphalt,
              bituminouscoal: _Data[i-j].bituminouscoal,
              blastfurnacegas: _Data[i-j].blastfurnacegas,
              briquette: _Data[i-j].briquette,
              catelogId: _Data[i-j].catelogId,
              coalgangue: _Data[i-j].coalgangue,
              coke: _Data[i-j].coke,
              cokeovengas: _Data[i-j].cokeovengas,
              crudeoil: _Data[i-j].crudeoil,
              diesel: _Data[i-j].diesel,
              fueloil: _Data[i-j].fueloil,
              gasoline: _Data[i-j].gasoline,
              kerosene: _Data[i-j].kerosene,
              lignite: _Data[i-j].lignite,
              liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
              liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
              lubricatingoil: _Data[i-j].lubricatingoil,
              naphtha: _Data[i-j].naphtha,
              naturalgas: _Data[i-j].naturalgas,
              oilcoke: _Data[i-j].oilcoke,
              onvertergas: _Data[i-j].onvertergas,
              other: _Data[i-j].other,
              othercoalwashing: _Data[i-j].othercoalwashing,
              othercokingproducts: _Data[i-j].othercokingproducts,
              othergas: _Data[i-j].othergas,
              otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
              paraffin: _Data[i-j].paraffin,
              refinerydrygas: _Data[i-j].refinerydrygas,
              solventoil: _Data[i-j].solventoil,
              tffId: _Data[i-j].tffId,
              washthecleancoal: _Data[i-j].washthecleancoal,

            });


          }

          //console.log(_a);

          this.setState({AllData:_a});

          this.setState({Data5:Alldata})

          this.query6(_a,para);

        } else {
          message.error('数据错误！');
        }
      });
  }

  //1.6
  query6(data,para){


    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/agricultureForestryAnimalHusbandryAndFishery/list', {
      year:'2017',
      para:para

    })
      .then((res) => {


        if (res.code==0) {

          var Alldata =res.data;

          const _a = data;

          const _Data = [];

          _Data.push(Alldata.agricultureForestryAnimalHusbandryAndFishery);//1.6农、林、牧、渔业




          const fossilTitle = [


            '　　1.6农、林、牧、渔业',

          ]



          for(var i = 0 ;i<1;i++){



            var j =0

            _a.push({
              key: i+65,
              name:fossilTitle[i],
              anthracite: _Data[i-j].anthracite,
              asphalt: _Data[i-j].asphalt,
              bituminouscoal: _Data[i-j].bituminouscoal,
              blastfurnacegas: _Data[i-j].blastfurnacegas,
              briquette: _Data[i-j].briquette,
              catelogId: _Data[i-j].catelogId,
              coalgangue: _Data[i-j].coalgangue,
              coke: _Data[i-j].coke,
              cokeovengas: _Data[i-j].cokeovengas,
              crudeoil: _Data[i-j].crudeoil,
              diesel: _Data[i-j].diesel,
              fueloil: _Data[i-j].fueloil,
              gasoline: _Data[i-j].gasoline,
              kerosene: _Data[i-j].kerosene,
              lignite: _Data[i-j].lignite,
              liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
              liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
              lubricatingoil: _Data[i-j].lubricatingoil,
              naphtha: _Data[i-j].naphtha,
              naturalgas: _Data[i-j].naturalgas,
              oilcoke: _Data[i-j].oilcoke,
              onvertergas: _Data[i-j].onvertergas,
              other: _Data[i-j].other,
              othercoalwashing: _Data[i-j].othercoalwashing,
              othercokingproducts: _Data[i-j].othercokingproducts,
              othergas: _Data[i-j].othergas,
              otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
              paraffin: _Data[i-j].paraffin,
              refinerydrygas: _Data[i-j].refinerydrygas,
              solventoil: _Data[i-j].solventoil,
              tffId: _Data[i-j].tffId,
              washthecleancoal: _Data[i-j].washthecleancoal,

            });


          }

          const _b = [];


          for(var i = 0 ; i<_a.length;i++){
            _b.push({
                key:_a[i].key,
                name:{

                  value:_a[i].name ,
                },
                anthracite:{
                  editable: false,
                  value:_a[i].anthracite ,
                },
                asphalt: {
                  editable: false,
                  value:_a[i].asphalt ,
                },
                bituminouscoal: {
                  editable: false,
                  value:_a[i].bituminouscoal ,
                },
                blastfurnacegas: {
                  editable: false,
                  value:_a[i].blastfurnacegas ,
                },
                briquette: {
                  editable: false,
                  value:_a[i].briquette ,
                },
                catelogId: {
                  editable: false,
                  value:_a[i].catelogId ,
                },
                coalgangue: {
                  editable: false,
                  value:_a[i].coalgangue ,
                },
                coke: {
                  editable: false,
                  value:_a[i].coke ,
                },
                cokeovengas: {
                  editable: false,
                  value:_a[i].cokeovengas,
                },
                crudeoil: {
                  editable: false,
                  value:_a[i].crudeoil ,
                },
                diesel: {
                  editable: false,
                  value:_a[i].diesel,
                },
                fueloil: {
                  editable: false,
                  value:_a[i].fueloil ,
                },
                gasoline: {
                  editable: false,
                  value:_a[i].gasoline ,
                },
                kerosene: {
                  editable: false,
                  value:_a[i].kerosene,
                },
                lignite: {
                  editable: false,
                  value:_a[i].lignite ,
                },
                liquefiedpetroleumgas: {
                  editable: false,
                  value:_a[i].liquefiedpetroleumgas ,
                },
                liquifiednaturalgas: {
                  editable: false,
                  value:_a[i].liquifiednaturalgas ,
                },
                lubricatingoil: {
                  editable: false,
                  value:_a[i].lubricatingoil ,
                },
                naphtha: {
                  editable: false,
                  value:_a[i].naphtha ,
                },
                naturalgas: {
                  editable: false,
                  value:_a[i].naturalgas ,
                },
                oilcoke: {
                  editable: false,
                  value:_a[i].oilcoke ,
                },
                onvertergas: {
                  editable: false,
                  value:_a[i].onvertergas ,
                },
                other: {
                  editable: false,
                  value:_a[i].other,
                },
                othercoalwashing: {
                  editable: false,
                  value:_a[i].othercoalwashing ,
                },
                othercokingproducts: {
                  editable: false,
                  value:_a[i].othercokingproducts ,
                },
                othergas: {
                  editable: false,
                  value:_a[i].othergas ,
                },
                otherpetroleumproducts: {
                  editable: false,
                  value:_a[i].otherpetroleumproducts ,
                },
                paraffin: {
                  editable: false,
                  value:_a[i].paraffin ,
                },
                refinerydrygas: {
                  editable: false,
                  value:_a[i].refinerydrygas ,
                },
                solventoil: {
                  editable: false,
                  value:_a[i].solventoil ,
                },
                tffId: {
                  editable: false,
                  value:_a[i].tffId ,
                },
                washthecleancoal: {
                  editable: false,
                  value:_a[i].washthecleancoal ,
                },

              }
            )
          }


          this.setState({data:_b});

      /*    const dataSource = _b.map((item) => {
            const obj = {};
            Object.keys(item).forEach((key) => {
              obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
          });

          this.setState({dataSource:dataSource});*/


          //this.setState({AllData:_a});


          //this.setState({Data6:Alldata})
          this.setState({ loading: false});

        } else {
          message.error('数据错误！');
        }
      });
  }



  renderColumns(data, index, key, text) {


    const { editable, status } = data[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (

      <EditableCell
      editable={editable}
      value={text}
      onChange={value => this.handleChange(key, index, value,0)}
      status={status}
    />);
  }


  //1.1 更新
  update(index,data,j){
    debugger


    const Directory = [
      '',
      '',
      '',
      'cEPowerGenerationBoilers',
      'cEIndustrialBoilers',
      'cEOtherEquipment',
      '',
      'oAPowerGenerationBoilers',
      'oAIndustrialBoilers',
      'oAOtherEquipment',
      '',
      'sFPowerGenerationBoilers',
      'sFIndustrialBoilers',
      'sFOtherEquipment',
      '',
      '',
      'sPowerGenerationBoilers',
      'sIndustrialBoilers',
      'sBlastFurnace',
      'sotherEquipment',
      '',
      'nMPowerGenerationBoilers',
      'nMIndustrialBoilers',
      'nMAluminaRotaryKiln',
      'nMOtherEquipment',
      '',
      'cMPowerGenerationBoilers',
      'cMIndustrialBoilers',
      'cMSyntheticAmmoniaGasFurnace',
      'cMotherEquipment',
      '',
      'bMPowerGenerationBoilers',
      'bMIndustrialBoilers',
      'bMCementRotaryKiln',
      'bMCementShaftKiln',
      'bMOtherEquipment',
      '',
      '',
      'aEquipment1',
      'aEquipment2',
      'aEquipment3',
      '',
      'bEquipment1',
      'bEquipment2',
      'bEquipment3',
      '',
      'cEquipment1',
      'cEquipment2',
      'cEquipment3',
      '',
      'cIPowerGenerationBoilers',
      'cIIndustrialBoilers',
      'cIOtherEquipment',
      '',
      '',
      'tDomesticFlights',
      'tHongKongAndMacaoFlights',
      'tInternationalFlights',
      'highway',
      'railway',
      '',
      'inlandRiverInternalCombustionEngine',
      'internationalOceanInternalCombustionEngine',
      'servicesAndOthers',
      'residentsLiving',
      'agricultureForestryAnimalHusbandryAndFishery',


    ]
     var url = [],bodyName = [];
     var DirectoryIndex = Directory[index];

     if(j==1){
       url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/energyProductionAndProcessingConversion/update'
       bodyName = 'energyProductionAndProcessingConversion'
     }else  if(j==2){
       url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/industryAndConstruction/update'
       bodyName = 'industryAndConstruction'
     }else  if(j==3){
       url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/transportation/update'
       bodyName = 'transportation'
     }else  if(j==4){
       url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/servicesAndOthers/update'
       bodyName = 'servicesAndOthers'
     }else  if(j==5){
       url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/residentsLiving/update'
       bodyName = 'residentsLiving'
     }else  if(j==6){
       url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/agricultureForestryAnimalHusbandryAndFishery/update'
       bodyName = 'agricultureForestryAnimalHusbandryAndFishery'
     }





    var obj={
        "para":this.state.breed,
        "year":"2017"
     };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]={
          "naturalgas":data[index].naturalgas.value,
          "diesel":data[index].diesel.value,
          "other":data[index].other.value,
          "othercoalwashing":data[index].othercoalwashing.value,
          "briquette":data[index].briquette.value,
          "paraffin":data[index].paraffin.value,
          "catelogId":data[index].catelogId.value,
          "gasoline":data[index].gasoline.value,
          "solventoil":data[index].solventoil.value,
          "washthecleancoal":data[index].washthecleancoal.value,
          "othercokingproducts":data[index].othercokingproducts.value,
          "refinerydrygas":data[index].refinerydrygas.value,
          "lignite":data[index].lignite.value,
          "liquefiedpetroleumgas":data[index].liquefiedpetroleumgas.value,
          "otherpetroleumproducts":data[index].otherpetroleumproducts.value,
          "lubricatingoil":data[index].lubricatingoil.value,
          "bituminouscoal":data[index].bituminouscoal.value,
          "coke":data[index].coke.value,
          "coalgangue":data[index].coalgangue.value,
          "liquifiednaturalgas":data[index].liquifiednaturalgas.value,
          "onvertergas":data[index].onvertergas.value,
          "asphalt":data[index].asphalt.value,
          "naphtha":data[index].naphtha.value,
          "kerosene":data[index].kerosene.value,
          "cokeovengas":data[index].cokeovengas.value,
          "blastfurnacegas":data[index].blastfurnacegas.value,
          "othergas":data[index].othergas.value,
          "fueloil":data[index].fueloil.value,
          "crudeoil":data[index].crudeoil.value,
          "oilcoke":data[index].oilcoke.value,
          "tffId":data[index].tffId.value,
          "anthracite":data[index].anthracite.value}

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);

        } else {
          message.error(res.message);
        }
      });

  }


  //参数选择
  selesctYears(index){


    this.setState({ loading: true});
    this.setState({breed:index});
    this.query(index)


  }




  handleChange(key, index, value) {


    const { data } = this.state;
    data[index][key].value = value;
    this.setState({ data });





    if(key  == 'other'){

      if(index<14 && index>2){
        this.update(index,data,1);
      }else if(index<52 && index>14){
        this.update(index,data,2);
      }else if(index<62 && index>52){
        this.update(index,data,3);
      }else if(index==63){
        this.update(index,data,4);
      }else if(index==64){
        this.update(index,data,5);
      }else if(index==65){
        this.update(index,data,6);
      }
      console.log(data)
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
          <span className={styles.title_span}>化石燃料燃烧</span>
        </div>

        <div className={styles.select}>
          <div className={styles.targetChoose}>
            <span className={styles.selectH1}>数据年份:</span>
            <ul>
              <li id="li1" >2005</li>
              <li id="li2" >2010</li>
              <li id="li3" >2012</li>
              <li id="li4" className={styles.li_focus} onClick={()=>{this.selesctYears(4)}}>2017</li>
            </ul>
          </div>

          <div className={styles.targetChoose}>
            <span className={styles.selectH1}>气体分类:</span>
            <ul>
              <li id="li5" onClick={()=>{this.selesctYears(1)}}>CO2排放量</li>
              <li id="li6" onClick={()=>{this.selesctYears(2)}}>非CO2排放量</li>
            </ul>
          </div>

          <div className={styles.targetChoose}>
            <span className={styles.selectH1}>统计方法:</span>
            <ul>
              <li id="li7" onClick={()=>{this.selesctYears(1)}}>部门方法</li>
              <li id="li8" onClick={()=>{this.selesctYears(2)}}>参考方法</li>
            </ul>
          </div>

          <div className={styles.targetChoose}>
            <span className={styles.selectH1}>参&#x3000;&#x3000;数:</span>
            <ul>
              <li id="li9" className={'0'==this.state.breed?styles.li_focus:styles.eee}  onClick={()=>{this.selesctYears('0')}}>活动水平数据</li>
              <li id="li10" className={'1'==this.state.breed?styles.li_focus:styles.eee}  onClick={()=>{this.selesctYears('1')}}>平均地位热值</li>
              <li id="li11" className={'2'==this.state.breed?styles.li_focus:styles.eee}  onClick={()=>{this.selesctYears('2')}}>单位热值含碳量</li>
              <li id="li12" className={'3'==this.state.breed?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('3')}}>碳氧化率</li>
            </ul>
            <span className={styles.selectH2}>(分部门分能源品种)</span>
          </div>


        </div>

        <div className={styles.entryBody}>
          <p>活动水平数据</p>
          <Spin spinning={this.state.loading} delay={500}>
          <Table  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 4000, y: 620 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
          </Spin>
        </div>

      </div>
    );

  }
}


export default Form.create()(EditableTable);

