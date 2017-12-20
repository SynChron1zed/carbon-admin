/**
 * 动物粪便Created by dixu on 2017/10/17.
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
        width: 100,


        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'name', text),
          props: {},

        };
          if (index === 10) {
            obj.props.colSpan = 3;
          }

          return obj}
      },

      {
        title: '存栏量(头、只)', dataIndex: 'stockVolume', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'stockVolume', text),
          props: {},

        };
          if (index === 10) {
            obj.props.colSpan = 0;
          }

          return obj}
      }, {
        title: '甲烷排放因子(kg／头／年)', dataIndex: 'methaneEmissionFactor', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'methaneEmissionFactor', text),
          props: {},

        };
          if (index === 10) {
            obj.props.colSpan = 0;
          }

          return obj}
      }, {
        title: '甲烷排放量(吨)', dataIndex: 'methaneEmissions', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'methaneEmissions', text),
          props: {},

        };

          return obj}
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 60,

        render: (text, record, index) => {

          const { editable } = this.state.data[index].stockVolume;
          return (
            <div className={styles.editableOperations} >

              {index ==10 ? <span></span> :

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

    this.columns1 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 100,

        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'name', text),
          props: {},

        };
          if (index === 10) {
            obj.props.colSpan = 3;
          }

          return obj}},

      {
        title: '饲养量(头、只)', dataIndex: 'stockVolume', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'stockVolume', text),
          props: {},

        };
          if (index === 10) {
            obj.props.colSpan = 0;
          }

          return obj}
      }, {
        title: '氧化亚氮排放因子(不包括放牧/放养／kg／头／年)', dataIndex: 'nitrousOxideEmissionFactor', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'nitrousOxideEmissionFactor', text),
          props: {},

        };
          if (index === 10) {
            obj.props.colSpan = 0;
          }

          return obj}
      }, {
        title: '氧化亚氮排放量(不包括放牧/放养／吨)', dataIndex: 'nitrousOxideEmissions', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'nitrousOxideEmissions', text),
          props: {},

        };


          return obj}
      }, {
        title: '放牧/放养动物饲养量(头／只)', dataIndex: 'grazingStocking', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'grazingStocking', text),
          props: {},

        };

          if (index === 10) {
            obj.props.colSpan = 3;
          }
          return obj}
      }, {
        title: '年排泄氮量(kg-N／头)', dataIndex: 'annualExcretionOfNitrogen', width: 200,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'annualExcretionOfNitrogen', text),
          props: {},

        };if (index === 10) {
          obj.props.colSpan = 0;
        }

          return obj}
      }, {
        title: '排放因子', dataIndex: 'emissionFactor', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'emissionFactor', text),
          props: {},

        };
          if (index === 10) {
            obj.props.colSpan = 0;
          }

          return obj}
      }, {
        title: '氧化亚氮排放量(放牧/放养)(吨)', dataIndex: 'nitrousOxideEmissions1', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'nitrousOxideEmissions1', text),
          props: {},

        };


          return obj}
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data1[index].stockVolume;
          return (
            <div className={styles.editableOperations} >

              {index ==10 ? <span></span> :

                editable ?
                  <span>
                  <a onClick={() => this.editDone1(index, 'save')}>确认</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone1(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                  :
                  <span>
                  <a onClick={() => this.edit1(index)}>编辑</a>
                </span>
              }

            </div>
          );
        },
      }];

    this.columns2 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 100,


        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'name', text),
          props: {},

        };
          if (index === 2) {
            obj.props.colSpan = 2;
          }

          return obj}
      },

      {
        title: '排放量(吨)', dataIndex: 'pf', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'pf', text),
          props: {},

        };
          if (index === 2) {
            obj.props.colSpan = 0;
          }

          return obj}
      }, {
        title: '折合CO2当量(吨)', dataIndex: 'zco2', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'zco2', text),
          props: {},

        };


          return obj}
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
      years:'2014'
    };

    this.queryWaste('2014');

    //$("#bodyTable1").hide();

  }



  //
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

    if(key  == 'emissionFactor'){

      //this.updateAgricultural2(index,data2);
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

  //
  renderColumns1(data1, index, key, text) {


    const { editable, status } = data1[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (

      <EditableCell1
        editable={editable}
        value={text}
        onChange={value => this.handleChange1(key, index, value)}
        status={status}
      />);
  }


  handleChange1(key, index, value) {


    const data1 = [...this.state.data1];
    data1[index][key].value = value;
    this.setState({ data1 });

    if(key  == 'emissionFactor'){

      this.updateWaste1(index,data1);
    }





  }

  edit1(index) {

    const { data1 } = this.state;
    Object.keys(data1[index]).forEach((item) => {
      if (data1[index][item] && typeof data1[index][item].editable !== 'undefined') {
        data1[index][item].editable = true;
      }
    });
    this.setState({ data1 });
  }

  editDone1(index, type) {

    const { data1 } = this.state;
    Object.keys(data1[index]).forEach((item) => {
      if (data1[index][item] && typeof data1[index][item].editable !== 'undefined') {
        data1[index][item].editable = false;
        data1[index][item].status = type;
      }
    });
    this.setState({ data1 }, () => {
      Object.keys(data1[index]).forEach((item) => {
        if (data1[index][item] && typeof data1[index][item].editable !== 'undefined') {
          delete data1[index][item].status;
        }
      });
    });
  }



  //
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

    if(key  == 'methaneEmissionFactor'){

      this.updateWaste(index,data);
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

  //查询
  queryWaste(years){


    post('/activityLevelDataEntry/agricultureActivity/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data;


          const _Data = []
          const _Data1 = []

          _Data.push(Alldata.animalManureManagementMethaneEmissions.cows);
          _Data.push(Alldata.animalManureManagementMethaneEmissions.nonCow);
          _Data.push(Alldata.animalManureManagementMethaneEmissions.buffalo);
          _Data.push(Alldata.animalManureManagementMethaneEmissions.sheep);
          _Data.push(Alldata.animalManureManagementMethaneEmissions.goat);
          _Data.push(Alldata.animalManureManagementMethaneEmissions.pig);
          _Data.push(Alldata.animalManureManagementMethaneEmissions.poultry);
          _Data.push(Alldata.animalManureManagementMethaneEmissions.horse);
          _Data.push(Alldata.animalManureManagementMethaneEmissions.jennet);
          _Data.push(Alldata.animalManureManagementMethaneEmissions.camel);
          _Data.push('');


          _Data1.push(Alldata.animalManureManagementOfNitrousOxideEmissions.cows);
          _Data1.push(Alldata.animalManureManagementOfNitrousOxideEmissions.nonCow);
          _Data1.push(Alldata.animalManureManagementOfNitrousOxideEmissions.buffalo);
          _Data1.push(Alldata.animalManureManagementOfNitrousOxideEmissions.sheep);
          _Data1.push(Alldata.animalManureManagementOfNitrousOxideEmissions.goat);
          _Data1.push(Alldata.animalManureManagementOfNitrousOxideEmissions.pig);
          _Data1.push(Alldata.animalManureManagementOfNitrousOxideEmissions.poultry);
          _Data1.push(Alldata.animalManureManagementOfNitrousOxideEmissions.horse);
          _Data1.push(Alldata.animalManureManagementOfNitrousOxideEmissions.jennet);
          _Data1.push(Alldata.animalManureManagementOfNitrousOxideEmissions.camel);
          _Data1.push('');



          const fossilTitle = [


            '奶牛',
            '非奶牛',
            '水牛',
            '绵羊',
            '山羊',
            '猪',
            '家禽',
            '马',
            '驴/骡',
            '骆驼',
            '总计',


          ]




          const _a1 = [];//动物粪便管理氧化亚氮排放
          var _Total = 0;
          var _Total1 = 0;


          for(var i = 0 ;i<10;i++){


              _a1.push({
                key: i,
                name:fossilTitle[i],
                stockVolume: _Data1[i].stockVolume,
                nitrousOxideEmissionFactor: _Data1[i].nitrousOxideEmissionFactor,
                nitrousOxideEmissions:_Data1[i].stockVolume*_Data1[i].nitrousOxideEmissionFactor/1000,
                grazingStocking: _Data1[i].grazingStocking,
                annualExcretionOfNitrogen: _Data1[i].annualExcretionOfNitrogen,
                emissionFactor: _Data1[i].emissionFactor,
                nitrousOxideEmissions1: _Data1[i].grazingStocking*_Data1[i].annualExcretionOfNitrogen*_Data1[i].emissionFactor/1000,


              });

            _Total  +=_Data1[i].stockVolume*_Data1[i].nitrousOxideEmissionFactor/1000;
            _Total1  +=_Data1[i].grazingStocking*_Data1[i].annualExcretionOfNitrogen*_Data1[i].emissionFactor/1000;

          }

          _a1.push({
            key: i,
            name:fossilTitle[i],
            stockVolume: _Total,
            nitrousOxideEmissionFactor: _Total,
            nitrousOxideEmissions: _Total,
            grazingStocking: '',
            annualExcretionOfNitrogen: '',
            emissionFactor: '',
            nitrousOxideEmissions1: _Total1,

          });



          const _a = [];//动物粪便管理甲烷排放
          var _stockVolume = 0;
          var _methaneEmissionFactor = 0;
          var _methaneEmissions = 0;


          for(var i = 0 ;i<10;i++){



              _a.push({
                key: i,
                name:fossilTitle[i],
                stockVolume: _Data[i].stockVolume,
                methaneEmissionFactor: _Data[i].methaneEmissionFactor,
                methaneEmissions:  _Data[i].stockVolume*_Data[i].methaneEmissionFactor/1000,


              });

            _stockVolume +=_Data[i].stockVolume;
            _methaneEmissionFactor +=_Data[i].methaneEmissionFactor;
            _methaneEmissions += _Data[i].stockVolume*_Data[i].methaneEmissionFactor/1000;

          }


          _a.push({
            key: 11,
            name:fossilTitle[i],
            stockVolume: _methaneEmissions,
            methaneEmissionFactor: _methaneEmissions,
            methaneEmissions:  _methaneEmissions,


          });


          const _b1 = [];


          for(var i = 0 ; i<_a1.length;i++){


            _b1.push({
                key:_a1[i].key,
                name:{

                  value:_a1[i].name ,
                },
                stockVolume:{
                  editable: false,
                  value:_a1[i].stockVolume ,
                },
              nitrousOxideEmissionFactor: {
                  editable: false,
                  value:_a1[i].nitrousOxideEmissionFactor ,
                },
              nitrousOxideEmissions: {

                  value:_a1[i].nitrousOxideEmissions.toFixed(2),
                },
              grazingStocking: {
                editable: false,
                value:_a1[i].grazingStocking ,
              },
              annualExcretionOfNitrogen: {
                editable: false,
                value:_a1[i].annualExcretionOfNitrogen ,
              },
              emissionFactor: {
                editable: false,
                value:_a1[i].emissionFactor ,
              },
              nitrousOxideEmissions1: {

                value:_a1[i].nitrousOxideEmissions1.toFixed(2) ,
              },

              }
            )
          }




          const _b = [];


          for(var i = 0 ; i<_a.length;i++){


            _b.push({
                key:_a[i].key,
                name:{

                  value:_a[i].name ,
                },
              stockVolume:{
                  editable: false,
                  value:_a[i].stockVolume ,
                },
              methaneEmissionFactor: {
                  editable: false,
                  value:_a[i].methaneEmissionFactor ,
                },
              methaneEmissions: {

                  value:_a[i].methaneEmissions.toFixed(2),
                }


              }
            )
          }


          var _ch4 = [
            _methaneEmissions.toFixed(2),
            _Total.toFixed(2),
            ((_methaneEmissions*21)+(_Total*310)).toFixed(2),
          ]

          var _no2 =[
            (_methaneEmissions*21).toFixed(2),
            (_Total*310).toFixed(2),
            ((_methaneEmissions*21)+(_Total*310)).toFixed(2),
          ]

          var pfName = [
            '粪便管理甲烷排放',
            '粪便管理氧化亚氮排放',
            '小计'
          ]

          const  _b2 = []


          for(var i = 0 ; i<3;i++){


            _b2.push({
                key:_a[i].key,
                name:{

                  value:pfName[i] ,
                },
                pf:{

                  value:_ch4[i] ,
                },
                zco2: {

                  value:_no2[i] ,
                },




              }
            )
          }



          this.setState({data:_b});
          this.setState({data1:_b1});
          this.setState({data2:_b2});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //
  updateWaste(index,data,a){

    var data  = data

    const Directory = [
      'cows',
      'nonCow',
      'buffalo',
      'sheep',
      'goat',
      'pig',
      'poultry',
      'horse',
      'jennet',
      'camel',


    ]



    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/agricultureActivity/update'
    var bodyName = 'agricultureActivity';
    var bodyName1 = 'animalManureManagementMethaneEmissions';






    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}
    obj[bodyName][bodyName1]={}
    obj[bodyName][bodyName1][DirectoryIndex]= {
      "stockVolume": data[index].stockVolume.value,
      "methaneEmissionFactor": data[index].methaneEmissionFactor.value,

    }

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);
          this.queryWaste(this.state.years);

        } else {
          message.error('数据录入有误，请重新录入！');
        }
      });
  }


  //
  updateWaste1(index,data1,a){

    var data  = data1

    const Directory = [
      'cows',
      'nonCow',
      'buffalo',
      'sheep',
      'goat',
      'pig',
      'poultry',
      'horse',
      'jennet',
      'camel',


    ]



    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/agricultureActivity/update'
    var bodyName = 'agricultureActivity';
    var bodyName1 = 'animalManureManagementOfNitrousOxideEmissions';






    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}
    obj[bodyName][bodyName1]={}
    obj[bodyName][bodyName1][DirectoryIndex]= {
      "stockVolume": data[index].stockVolume.value,
      "nitrousOxideEmissionFactor": data[index].nitrousOxideEmissionFactor.value,
      "grazingStocking": data[index].grazingStocking.value,
      "annualExcretionOfNitrogen": data[index].annualExcretionOfNitrogen.value,
      "emissionFactor": data[index].emissionFactor.value,

    }

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);
          this.queryWaste(this.state.years);
        } else {
          message.error('数据录入有误，请重新录入！');
        }
      });
  }

  //年份选择
  selesctYears(years){

    this.setState({ loading: true});
    this.setState({years:years})
    this.queryWaste(years)
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
          <span className={styles.title_span}>动物粪便管理甲烷和氧化亚氮排放</span>
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
          <p>动物粪便管理甲烷排放</p>
          <div className={styles.greenSelect}>
            <span>是否采用本地化排放因子：</span>
            <RadioGroup defaultValue={1}>
              <Radio value={1}>否</Radio>
              <Radio value={2}>是</Radio>
            </RadioGroup>
          </div>

          <Table size="small" pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>

        <div className={styles.entryBody} id="bodyTable2"  >
          <p>动物粪便管理氧化亚氮排放 <span style={{fontSize:6}}>(不包括放牧放养的氧化亚氮排放放在动物粪便管理系统清单中，放牧放养的氧化亚氮排放放在农用地直接排放清单中)</span></p>
          <div className={styles.greenSelect}>
            <span>是否采用本地化排放因子：</span>
            <RadioGroup defaultValue={1}>
              <Radio value={1}>否</Radio>
              <Radio value={2}>是</Radio>
            </RadioGroup>
          </div>

          <Table size="small" pagination={false} bordered={true}  columns={columns1} dataSource={dataSource1} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>


          <div className={styles.entryBody} id="bodyTable3"  >
            <p>动物粪便管理甲烷和氧化亚氮排放小计</p>
            <div className={styles.greenSelect}>
              <span>是否采用本地化排放因子：</span>
              <RadioGroup defaultValue={1}>
                <Radio value={1}>否</Radio>
                <Radio value={2}>是</Radio>
              </RadioGroup>
            </div>

            <Table size="small"  pagination={false} bordered={true}  columns={columns2} dataSource={dataSource2} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>



        </Spin>





      </div>
    );

  }
}


export default Form.create()(ElectricTable);
