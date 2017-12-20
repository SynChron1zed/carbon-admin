/**
 * 工业活动清单结果Created by dixu on 2017/10/31.
 *
 * 部分数据需要后台提供
 */


import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch ,Radio } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Igwp.less';
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
        width: 110,


        render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),},

      {
        title: 'CO2(万吨)', dataIndex: 'CO2', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'CO2', text),
      }, {
        title: 'N2O(吨)', dataIndex: 'N2O', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'N2O', text),
      },  {
        title: 'HFC',
        children: [
          {
          title: 'HFC-23(吨)', dataIndex: 'HFC1', width: 100,
          render: (text, record, index) => this.renderColumns(this.state.data, index, 'HFC1', text),
        },{
          title: 'HFC-32(吨)', dataIndex: 'HFC2', width: 100,
          render: (text, record, index) => this.renderColumns(this.state.data, index, 'HFC2', text),
        },
          {
            title: 'HFC-125(吨)', dataIndex: 'HFC3', width: 100,
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'HFC3', text),
          },
          {
            title: 'HFC-134a(吨)', dataIndex: 'HFC4', width: 100,
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'HFC4', text),
          },
          {
            title: 'HFC-143a(吨)', dataIndex: 'HFC5', width: 100,
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'HFC5', text),
          },
          {
            title: 'HFC-152a(吨)', dataIndex: 'HFC6', width: 100,
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'HFC6', text),
          },
          {
            title: 'HFC-227ea(吨)', dataIndex: 'HFC7', width: 100,
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'HFC7', text),
          },
          {
            title: 'HFC-236fa(吨)', dataIndex: 'HFC8', width: 100,
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'HFC8', text),
          },
          {
            title: 'HFC-245fa(吨)', dataIndex: 'HFC9', width: 100,
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'HFC9', text),
          },
        ],
      }, {
        title: 'PFC',
        children: [
          {
            title: 'CF4(吨)', dataIndex: 'PFC1', width: 100,
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'PFC1', text),
          },{
            title: 'C2F6(吨)', dataIndex: 'PFC2', width: 100,
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'PFC2', text),
          },


        ],
      }, {
        title: 'SF6(吨)', dataIndex: 'SF1', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'SF1', text),
      }, {
        title: 'CO2当量(万吨)', dataIndex: 'SF2', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'SF2', text),
      }];



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
  queryGut(years){


    post('/report/industrialProductionProcess/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {



          var Alldata =res.data;


          const _Data1 = []  //co2
          const  _Data2 = []  //n20
          const  _Data3= []  //HFC-23
          const  _Data4= []  //HFC-32
          const  _Data5= []  //HFC-125
          const  _Data6= []  //HFC-134a
          const  _Data7= []  //HFC-143a
          const  _Data8= []  //HFC-152a
          const  _Data9= []  //HFC-227ea
          const  _Data10= []  //HFC-236fa
          const  _Data11= []  //HFC-245fa
          const  _Data12= []  //CF4
          const  _Data13= []  //C2F6
          const  _Data14= []  //SF6
          const  _Data15= []  //CO2当量


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
            'HCFC-22生产过程',
            'HFC生产过程',
            '合计（实物量）',
            '合计（万吨当量）',

          ]


          _Data1.push(Alldata.CO2.cementProductionProcess)
          _Data1.push(Alldata.CO2.limeProductionProcess)
          _Data1.push(Alldata.CO2.steelProductionProcess)
          _Data1.push(Alldata.CO2.calciumCarbideProductionProcess)
          _Data1.push('-')
          _Data1.push('-')
          _Data1.push('-')
          _Data1.push('-')
          _Data1.push('-')
          _Data1.push('-')
          _Data1.push('-')
          _Data1.push('-')
          _Data1.push((Alldata.CO2.cementProductionProcess+Alldata.CO2.limeProductionProcess+Alldata.CO2.steelProductionProcess+Alldata.CO2.calciumCarbideProductionProcess).toFixed(2))
          _Data1.push((Alldata.CO2.cementProductionProcess+Alldata.CO2.limeProductionProcess+Alldata.CO2.steelProductionProcess+Alldata.CO2.calciumCarbideProductionProcess).toFixed(2))



          _Data2.push('-')
          _Data2.push('-')
          _Data2.push('-')
          _Data2.push('-')
          _Data2.push(Alldata.N2O.adipicAcidProductionProcess)
          _Data2.push(Alldata.N2O.nitricAcidProductionProcess)
          _Data2.push('-')
          _Data2.push('-')
          _Data2.push('-')
          _Data2.push('-')
          _Data2.push('-')
          _Data2.push('-')
          _Data2.push((Alldata.N2O.adipicAcidProductionProcess+Alldata.N2O.nitricAcidProductionProcess).toFixed(2))
          _Data2.push(((Alldata.N2O.adipicAcidProductionProcess+Alldata.N2O.nitricAcidProductionProcess)*310/10000).toFixed(2))



          _Data3.push('-')
          _Data3.push('-')
          _Data3.push('-')
          _Data3.push('-')
          _Data3.push('-')
          _Data3.push('-')
          _Data3.push('-')
          _Data3.push('-')
          _Data3.push('-')
          _Data3.push(Alldata.HFC_23.semiconductorProductionProcess)
          _Data3.push(Alldata.HFC_23.chlorodifluoromethaneProductionProcess)
          _Data3.push('-')
          _Data3.push((Alldata.HFC_23.semiconductorProductionProcess+Alldata.HFC_23.chlorodifluoromethaneProductionProcess).toFixed(2))
          _Data3.push(((Alldata.HFC_23.semiconductorProductionProcess+Alldata.HFC_23.chlorodifluoromethaneProductionProcess)*11700/10000).toFixed(2))

          _Data4.push('-')
          _Data4.push('-')
          _Data4.push('-')
          _Data4.push('-')
          _Data4.push('-')
          _Data4.push('-')
          _Data4.push('-')
          _Data4.push('-')
          _Data4.push('-')
          _Data4.push('-')
          _Data4.push('-')
          _Data4.push(Alldata.HFC_32)
          _Data4.push(Alldata.HFC_32)
          _Data4.push((Alldata.HFC_32*650/1000).toFixed(2))



          _Data5.push('-')
          _Data5.push('-')
          _Data5.push('-')
          _Data5.push('-')
          _Data5.push('-')
          _Data5.push('-')
          _Data5.push('-')
          _Data5.push('-')
          _Data5.push('-')
          _Data5.push('-')
          _Data5.push('-')
          _Data5.push(Alldata.HFC_125)
          _Data5.push(Alldata.HFC_125)
          _Data5.push((Alldata.HFC_125*2800/10000).toFixed(2))

          _Data6.push('-')
          _Data6.push('-')
          _Data6.push('-')
          _Data6.push('-')
          _Data6.push('-')
          _Data6.push('-')
          _Data6.push('-')
          _Data6.push('-')
          _Data6.push('-')
          _Data6.push('-')
          _Data6.push('-')
          _Data6.push(Alldata.HFC_134a)
          _Data6.push(Alldata.HFC_134a)
          _Data6.push((Alldata.HFC_134a*1300/10000).toFixed(2))

          _Data7.push('-')
          _Data7.push('-')
          _Data7.push('-')
          _Data7.push('-')
          _Data7.push('-')
          _Data7.push('-')
          _Data7.push('-')
          _Data7.push('-')
          _Data7.push('-')
          _Data7.push('-')
          _Data7.push('-')
          _Data7.push(Alldata.HFC_143a)
          _Data7.push(Alldata.HFC_143a)
          _Data7.push((Alldata.HFC_143a*3800/10000).toFixed(2))

          _Data8.push('-')
          _Data8.push('-')
          _Data8.push('-')
          _Data8.push('-')
          _Data8.push('-')
          _Data8.push('-')
          _Data8.push('-')
          _Data8.push('-')
          _Data8.push('-')
          _Data8.push('-')
          _Data8.push('-')
          _Data8.push(Alldata.HFC_152a)
          _Data8.push(Alldata.HFC_152a)
          _Data8.push((Alldata.HFC_152a*140/10000).toFixed(2))

          _Data9.push('-')
          _Data9.push('-')
          _Data9.push('-')
          _Data9.push('-')
          _Data9.push('-')
          _Data9.push('-')
          _Data9.push('-')
          _Data9.push('-')
          _Data9.push('-')
          _Data9.push('-')
          _Data9.push('-')
          _Data9.push(Alldata.HFC_227ea)
          _Data9.push(Alldata.HFC_227ea)
          _Data9.push((Alldata.HFC_227ea*2900/10000).toFixed(2))

          _Data10.push('-')
          _Data10.push('-')
          _Data10.push('-')
          _Data10.push('-')
          _Data10.push('-')
          _Data10.push('-')
          _Data10.push('-')
          _Data10.push('-')
          _Data10.push('-')
          _Data10.push('-')
          _Data10.push('-')
          _Data10.push(Alldata.HFC_236fa)
          _Data10.push(Alldata.HFC_236fa)
          _Data10.push((Alldata.HFC_236fa*6300/10000).toFixed(2))

          _Data11.push('-')
          _Data11.push('-')
          _Data11.push('-')
          _Data11.push('-')
          _Data11.push('-')
          _Data11.push('-')
          _Data11.push('-')
          _Data11.push('-')
          _Data11.push('-')
          _Data11.push('-')
          _Data11.push('-')
          _Data11.push(Alldata.HFC_245fa)
          _Data11.push(Alldata.HFC_245fa)
          _Data11.push((Alldata.HFC_245fa*1030/10000).toFixed(2))

          _Data12.push('-')
          _Data12.push('-')
          _Data12.push('-')
          _Data12.push('-')
          _Data12.push('-')
          _Data12.push('-')
          _Data12.push(Alldata.CF4.aluminumProductionProcess)
          _Data12.push('-')
          _Data12.push('-')
          _Data12.push(Alldata.CF4.semiconductorProductionProcess)
          _Data12.push('-')
          _Data12.push('-')
          _Data12.push((Alldata.CF4.aluminumProductionProcess+Alldata.CF4.semiconductorProductionProcess).toFixed(2))
          _Data12.push(((Alldata.CF4.aluminumProductionProcess+Alldata.CF4.semiconductorProductionProcess)*6500/10000).toFixed(2))


          _Data13.push('-')
          _Data13.push('-')
          _Data13.push('-')
          _Data13.push('-')
          _Data13.push('-')
          _Data13.push('-')
          _Data13.push(Alldata.C2F6.aluminumProductionProcess)
          _Data13.push('-')
          _Data13.push('-')
          _Data13.push(Alldata.C2F6.semiconductorProductionProcess)
          _Data13.push('-')
          _Data13.push('-')
          _Data13.push((Alldata.C2F6.aluminumProductionProcess+Alldata.C2F6.semiconductorProductionProcess).toFixed(2))
          _Data13.push(((Alldata.C2F6.aluminumProductionProcess+Alldata.C2F6.semiconductorProductionProcess)*9200/10000).toFixed(2))

          _Data14.push('-')
          _Data14.push('-')
          _Data14.push('-')
          _Data14.push('-')
          _Data14.push('-')
          _Data14.push('-')
          _Data14.push('-')
          _Data14.push(Alldata.SF6.magnesiumProductionProcess)
          _Data14.push(Alldata.SF6.electricPowerEquipmentProductionProcess)
          _Data14.push(Alldata.SF6.semiconductorProductionProcess)
          _Data14.push('-')
          _Data14.push('-')
          _Data14.push((Alldata.SF6.magnesiumProductionProcess+Alldata.SF6.electricPowerEquipmentProductionProcess+Alldata.SF6.semiconductorProductionProcess).toFixed(2))
          _Data14.push(((Alldata.SF6.magnesiumProductionProcess+Alldata.SF6.electricPowerEquipmentProductionProcess+Alldata.SF6.semiconductorProductionProcess)*23900/10000).toFixed(2))

          _Data15.push((Alldata.CO2.cementProductionProcess).toFixed(2))
          _Data15.push((Alldata.CO2.limeProductionProcess).toFixed(2))
          _Data15.push((Alldata.CO2.steelProductionProcess).toFixed(2))
          _Data15.push((Alldata.CO2.calciumCarbideProductionProcess).toFixed(2))
          _Data15.push((Alldata.N2O.adipicAcidProductionProcess*310/10000).toFixed(2))
          _Data15.push((Alldata.N2O.nitricAcidProductionProcess*310/10000).toFixed(2))
          _Data15.push(((Alldata.CF4.aluminumProductionProcess*6500+Alldata.C2F6.aluminumProductionProcess*9200)/10000).toFixed(2))
          _Data15.push((Alldata.SF6.magnesiumProductionProcess*23900/10000).toFixed(2))
          _Data15.push((Alldata.SF6.electricPowerEquipmentProductionProcess*23900/10000).toFixed(2))
          _Data15.push(((Alldata.HFC_23.semiconductorProductionProcess*11700+Alldata.CF4.semiconductorProductionProcess*6500+Alldata.C2F6.semiconductorProductionProcess*9200+Alldata.SF6.semiconductorProductionProcess*23900)/10000).toFixed(2))
          _Data15.push((Alldata.HFC_23.chlorodifluoromethaneProductionProcess*11700/10000).toFixed(2))
          _Data15.push(((Alldata.HFC_32*650+Alldata.HFC_125*2800+Alldata.HFC_134a*1300+Alldata.HFC_143a*3800+Alldata.HFC_152a*140+Alldata.HFC_227ea*2900+Alldata.HFC_236fa*6300+Alldata.HFC_245fa*1030)/10000).toFixed(2))
          _Data15.push('0')
          _Data15.push(
            ((Alldata.CO2.cementProductionProcess)+(Alldata.CO2.limeProductionProcess)+(Alldata.CO2.steelProductionProcess)
          +(Alldata.CO2.calciumCarbideProductionProcess)+(Alldata.N2O.adipicAcidProductionProcess*310/10000)+(Alldata.N2O.nitricAcidProductionProcess*310/10000)
          +((Alldata.CF4.aluminumProductionProcess*6500+Alldata.C2F6.aluminumProductionProcess*9200)/10000)+(Alldata.SF6.electricPowerEquipmentProductionProcess*23900/10000)
        +((Alldata.HFC_23.semiconductorProductionProcess*11700+Alldata.CF4.semiconductorProductionProcess*6500+Alldata.C2F6.semiconductorProductionProcess*9200+Alldata.SF6.semiconductorProductionProcess*23900)/10000)
          +(Alldata.HFC_23.chlorodifluoromethaneProductionProcess*11700/10000)+((Alldata.HFC_32*650+Alldata.HFC_125*2800+Alldata.HFC_134a*1300+Alldata.HFC_143a*3800+Alldata.HFC_152a*140+Alldata.HFC_227ea*2900+Alldata.HFC_236fa*6300+Alldata.HFC_245fa*1030)/10000)).toFixed(2))






          const _b1= []

          for(var i  = 0 ;i <fossilTitle.length;i++){
            _b1.push({
              key:i,
              name:{

                value:fossilTitle[i] ,
              },
              CO2:{

                value:_Data1[i] ,
              },
              N2O:{

                value:_Data2[i] ,
              },
              HFC1:{

                value:_Data3[i],
              },
              HFC2:{

                value:_Data4[i] ,
              },
              HFC3:{

                value:_Data5[i] ,
              },
              HFC4:{

                value:_Data6[i] ,
              },
              HFC5:{

                value:_Data7[i] ,
              },
              HFC6:{

                value:_Data8[i] ,
              },
              HFC7:{

                value:_Data9[i] ,
              },
              HFC8:{

                value:_Data10[i] ,
              },
              HFC9:{

                value:_Data11[i] ,
              },
              PFC1:{

                value:_Data12[i] ,
              },
              PFC2:{

                value:_Data13[i] ,
              },
              SF1:{

                value:_Data14[i] ,
              },
              SF2:{

                value:_Data15[i] ,
              },
            })
          }












          console.log(_b1);


          this.setState({data:_b1});

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
          <span className={styles.title_span}> 工业生产过程温室气体排放量计算</span>
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
            <p>工业生产过程清单结果</p>


            <Table size="small"  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1800, y: 1020 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>
        </Spin>









      </div>
    );

  }
}


export default Form.create()(ElectricTable);

