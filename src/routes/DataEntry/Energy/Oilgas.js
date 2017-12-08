/**
 * 油气逃逸Created by dixu on 2017/10/17.
 */
import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch  } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Oilgas.less';
import createReactClass from 'create-react-class';
import { post } from '../../../utils/carbonRequest';
import $ from 'jquery';

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

class CoalmineTable extends React.Component {



  constructor(props) {

    super(props);


    this.columns = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 200,

        colSpan:1,
        render: (text, record, index) =>
        {  const obj = {
          children:this.renderColumns(this.state.data, index, 'name', text),
          props: {},

        };
          if (index === 0) {
            obj.props.rowSpan = 4;
          }
          if (index === 1) {
            obj.props.rowSpan = 0;
          }
          if (index === 2) {
            obj.props.rowSpan = 0;
          }
          if (index === 3) {
            obj.props.rowSpan = 0;
          }
          if (index === 4) {
            obj.props.colSpan = 2;
          }
          if (index === 5) {
            obj.props.rowSpan = 3;
          }
          if (index === 6) {
            obj.props.rowSpan = 0;
          }
          if (index === 7) {
            obj.props.rowSpan = 0;
          }
          if (index === 8) {
            obj.props.colSpan = 2;
          }
          if (index === 9) {
            obj.props.rowSpan = 4;
          }
          if (index === 10) {
            obj.props.rowSpan = 0;
          }
          if (index === 11) {
            obj.props.rowSpan = 0;
          }
          if (index === 12) {
            obj.props.rowSpan = 0;
          }
          if (index === 13) {
            obj.props.colSpan = 2;
          }
          if (index === 14) {
            obj.props.colSpan = 2;
          }
          if (index === 15) {
            obj.props.colSpan = 2;
          }
          return obj},



      },  {
        title: '逃逸排放源的设施类型', dataIndex: 'oilgas', width: 200,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'oilgas', text),
          props: {},

        };
          if (index === 4) {
            obj.props.colSpan = 0;
          }
          if (index === 8) {
            obj.props.colSpan = 0;
          }
          if (index === 13) {
            obj.props.colSpan = 0;
          }
          if (index === 14) {
            obj.props.colSpan = 0;
          }
          if (index === 15) {
            obj.props.colSpan = 0;
          }
          return obj},
      },{
        title: '设备数量／天然气加工处理量／原油运输量',
        children: [{
          title: '', dataIndex: 'oilgas1', width: 120,
          render: (text, record, index) =>   {  const obj = {
            children: this.renderColumns(this.state.data, index, 'oilgas1', text),
            props: {},
          };
            return obj
          }

        }, {
          title: '', dataIndex: 'oilgas2', width: 70,
          render: (text, record, index) =>
          {  const obj = {
            children:  this.renderColumns(this.state.data, index, 'oilgas2', text),
            props: {},
          };
            return obj},
        }, {
          title: '', dataIndex: 'oilgas3', width: 120,
          render: (text, record, index) => {  const obj = {
            children: this.renderColumns(this.state.data, index, 'oilgas3', text),
            props: {},
          };

            return obj},
        }],
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 70,

        render: (text, record, index) => {

          const { editable } = this.state.data[index].oilgas3;
          return (
            <div className={styles.editableOperations} >

              {

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
        width: 200,

        colSpan:1,
        render: (text, record, index) =>
        {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'name', text),
          props: {},

        };
          if (index === 0) {
            obj.props.rowSpan = 4;
          }
          if (index === 1) {
            obj.props.rowSpan = 0;
          }
          if (index === 2) {
            obj.props.rowSpan = 0;
          }
          if (index === 3) {
            obj.props.rowSpan = 0;
          }
          if (index === 4) {
            obj.props.colSpan = 2;
          }
          if (index === 5) {
            obj.props.rowSpan = 3;
          }
          if (index === 6) {
            obj.props.rowSpan = 0;
          }
          if (index === 7) {
            obj.props.rowSpan = 0;
          }
          if (index === 8) {
            obj.props.colSpan = 2;
          }
          if (index === 9) {
            obj.props.rowSpan = 4;
          }
          if (index === 10) {
            obj.props.rowSpan = 0;
          }
          if (index === 11) {
            obj.props.rowSpan = 0;
          }
          if (index === 12) {
            obj.props.rowSpan = 0;
          }
          if (index === 13) {
            obj.props.colSpan = 2;
          }
          if (index === 14) {
            obj.props.colSpan = 2;
          }
          if (index === 15) {
            obj.props.colSpan = 2;
          }
          return obj},



      },  {
        title: '逃逸排放源的设施类型', dataIndex: 'oilgas', width: 200,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'oilgas', text),
          props: {},

        };
          if (index === 4) {
            obj.props.colSpan = 0;
          }
          if (index === 8) {
            obj.props.colSpan = 0;
          }
          if (index === 13) {
            obj.props.colSpan = 0;
          }
          if (index === 14) {
            obj.props.colSpan = 0;
          }
          if (index === 15) {
            obj.props.colSpan = 0;
          }
          return obj},
      }, {
        title: '', dataIndex: 'oilgas1', width: 90,
        render: (text, record, index) =>
        {  const obj = {
          children:  this.renderColumns1(this.state.data1, index, 'oilgas1', text),
          props: {},
        };
          return obj},
      },
      {
        title: '甲烷排放因子', dataIndex: 'oilgas2', width: 180,
        render: (text, record, index) =>
        {  const obj = {
          children:  this.renderColumns1(this.state.data1, index, 'oilgas2', text),
          props: {},
        };
          return obj},
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 70,

        render: (text, record, index) => {

          const { editable } = this.state.data1[index].oilgas2;
          return (
            <div className={styles.editableOperations} >

              {

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

    this.state = {

      data: [],
      data1: [],
      loading: true ,

      collapsed: false,
      select:1,
      trigger:true,
      user:[],


      statistics:'b1',


      AllData:[],
      years:'2014'
    };


    this.queryOilgas('2014');
    this.queryOilgas1('2014')


    //$("#bodyTable1").hide();

  }




  // 石油和天然气 排放因子
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

    if(key  == 'oilgas2'){

      this.updateOilgas1(index,data1);
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


  // 石油和天然气 活动水平数据
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

    if(key  == 'oilgas3'){

      this.updateOilgas(index,data);
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




  //石油和天然气 活动水平数据
  queryOilgas(years){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/oilAndGasSystemsEscape/activityLevelData/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {


          var Alldata =res.data;

          const _Data = []

          _Data.push(Alldata.gasWellheadDevice);//井口装置
          _Data.push(Alldata.conventionalGasCollectionSystem);//常规集气系统
          _Data.push(Alldata.meteringDispensingStation); //计量/配气站
          _Data.push(Alldata.storageStation);//储气总站
          _Data.push(Alldata.naturalGasProcessing);//天然气加工处理
          _Data.push(Alldata.pressurizedStation);//增压站
          _Data.push(Alldata.meteringStation);//计量站
          _Data.push(Alldata.pipeline);//管线（逆止阀
          _Data.push(Alldata.naturalGasConsumption);//天然气消费
          _Data.push(Alldata.oilWellheadDevice);//井口装置
          _Data.push(Alldata.singleWellOilStorageDevice);//单井储油装置
          _Data.push(Alldata.pickUpStation);//接转站
          _Data.push(Alldata.jointStation);//联合站
          _Data.push(Alldata.heavyOilExtraction);//稠油开采
          _Data.push(Alldata.crudeOilStorageAndTransportation);//原油储运
          _Data.push(Alldata.crudeOilRefining);//原油炼制





          const fossilTitle = [


            '　　天然气开采',
            '　　天然气开采',
            '　　天然气开采',
            '　　天然气开采',
            '　　天然气加工处理',
            '　　天然气输送',
            '　　天然气输送',
            '　　天然气输送',
            '　　天然气消费',
            '　　常规油开采',
            '　　常规油开采',
            '　　常规油开采',
            '　　常规油开采',
            '　　稠油开采',
            '　　原油储运',
            '　　原油炼制',

          ];

          const fossilTitle1 = [


            '　　井口装置',
            '　　常规集气系统',
            '　　计量/配气站',
            '　　储气总站',
            '　　天然气加工处理',
            '　　增压站',
            '　　计量站',
            '　　管线（逆止阀）',
            '　　天然气消费',
            '　　井口装置',
            '　　单井储油装置',
            '　　接转站',
            '　　联合站',
            '　　稠油开采',
            '　　原油储运',
            '　　原油炼制',

          ];

          const fossilTitle2 = [


            '　　设备数量',
            '　　设备数量',
            '　　设备数量',
            '　　设备数量',
            '　　天然气加工处理量',
            '　　设备数量',
            '　　设备数量',
            '　　设备数量',
            '　　天然气加工处理量',
            '　　设备数量',
            '　　设备数量',
            '　　设备数量',
            '　　设备数量',
            '　　原油运输量',
            '　　原油运输量',
            '　　原油运输量',

          ];

          const fossilTitle3 = [


            '(个.年)',
            '(个.年)',
            '(个.年)',
            '(个.年)',
            '(万立方米)',
            '(个.年)',
            '(个.年)',
            '(个.年)',
            '(万立方米)',
            '(个.年)',
            '(个.年)',
            '(个.年)',
            '(个.年)',
            '（万吨）',
            '（万吨）',
            '（万吨）',

          ]

          const _a = [];


          for(var i = 0 ;i<16;i++){



              _a.push({
                key: i,
                name:fossilTitle[i],
                oilgas:fossilTitle1[i],
                oilgas1: fossilTitle2[i],
                oilgas2: fossilTitle3[i],
                oilgas3: _Data[i],


              });



          }



          console.log(_a);

          const _b = [];


          for(var i = 0 ; i<_a.length;i++){


            _b.push({
                key:_a[i].key,
                name:{

                  value:_a[i].name ,
                },
              oilgas:{

                  value:_a[i].oilgas ,
                },
              oilgas1: {

                  value:_a[i].oilgas1 ,
                },
              oilgas2: {

                  value:_a[i].oilgas2 ,
                },
              oilgas3: {
                  editable: false,
                  value:_a[i].oilgas3 ,
                },

              }
            )
          }

          console.log(_b);


          this.setState({data:_b});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //石油和天然气 活动水平数据update
  updateOilgas(index,data,a){


    var data  = data



    const Directory = [
      'gasWellheadDevice',
      'conventionalGasCollectionSystem',
      'meteringDispensingStation',
      'storageStation',
      'naturalGasProcessing',
      'pressurizedStation',
      'meteringStation',
      'pipeline',
      'naturalGasConsumption',
      'oilWellheadDevice',
      'singleWellOilStorageDevice',
      'pickUpStation',
      'jointStation',
      'heavyOilExtraction',
      'crudeOilStorageAndTransportation',
      'crudeOilRefining',




    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/oilAndGasSystemsEscape/activityLevelData/update'
    var bodyName = 'activityLevelData'






    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]=  data[index].oilgas3.value,




    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);

        } else {
          message.error(res.message);
        }
      });
  }


  //石油和天然气 排放因子
  queryOilgas1(years){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/oilAndGasSystemsEscape/emissionFactor/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {


          var Alldata =res.data;

          const _Data = []


          _Data.push(Alldata.gasWellheadDevice);//井口装置
          _Data.push(Alldata.conventionalGasCollectionSystem);//常规集气系统
          _Data.push(Alldata.meteringDispensingStation); //计量/配气站
          _Data.push(Alldata.storageStation);//储气总站
          _Data.push(Alldata.naturalGasProcessing);//天然气加工处理
          _Data.push(Alldata.pressurizedStation);//增压站
          _Data.push(Alldata.meteringStation);//计量站
          _Data.push(Alldata.pipeline);//管线（逆止阀
          _Data.push(Alldata.naturalGasConsumption);//天然气消费
          _Data.push(Alldata.oilWellheadDevice);//井口装置
          _Data.push(Alldata.singleWellOilStorageDevice);//单井储油装置
          _Data.push(Alldata.pickUpStation);//接转站
          _Data.push(Alldata.jointStation);//联合站
          _Data.push(Alldata.heavyOilExtraction);//稠油开采
          _Data.push(Alldata.crudeOilStorageAndTransportation);//原油储运
          _Data.push(Alldata.crudeOilRefining);//原油炼制





          const fossilTitle = [


            '　　天然气开采',
            '　　天然气开采',
            '　　天然气开采',
            '　　天然气开采',
            '　　天然气加工处理',
            '　　天然气输送',
            '　　天然气输送',
            '　　天然气输送',
            '　　天然气消费',
            '　　常规油开采',
            '　　常规油开采',
            '　　常规油开采',
            '　　常规油开采',
            '　　稠油开采',
            '　　原油储运',
            '　　原油炼制',

          ];

          const fossilTitle1 = [


            '　　井口装置',
            '　　常规集气系统',
            '　　计量/配气站',
            '　　储气总站',
            '　　天然气加工处理',
            '　　增压站',
            '　　计量站',
            '　　管线（逆止阀）',
            '　　天然气消费',
            '　　井口装置',
            '　　单井储油装置',
            '　　接转站',
            '　　联合站',
            '　　稠油开采',
            '　　原油储运',
            '　　原油炼制',

          ];


          const fossilTitle2 = [


            '(吨CH4/个.年)',
            '(吨CH4/个.年)',
            '(吨CH4/个.年)',
            '(吨CH4/个.年)',
            '(吨CH4/亿立方米)',
            '(吨CH4/个.年)',
            '(吨CH4/个.年)',
            '(吨CH4/个.年)',
            '(吨CH4/亿立方米)',
            '(吨CH4/个.年)',
            '(吨CH4/个.年)',
            '(吨CH4/个.年)',
            '(吨CH4/个.年)',
            '（吨CH4/万吨）',
            '（吨CH4/万吨）',
            '（吨CH4/万吨）',

          ]

          const _a = [];


          for(var i = 0 ;i<16;i++){



            _a.push({
              key: i,
              name:fossilTitle[i],
              oilgas:fossilTitle1[i],
              oilgas1: fossilTitle2[i],
              oilgas2: _Data[i],


            });



          }



          console.log(_a);

          const _b = [];


          for(var i = 0 ; i<_a.length;i++){


            _b.push({
                key:_a[i].key,
                name:{

                  value:_a[i].name ,
                },
                oilgas:{

                  value:_a[i].oilgas ,
                },
                oilgas1: {

                  value:_a[i].oilgas1 ,
                },
                oilgas2: {
                  editable: false,
                  value:_a[i].oilgas2 ,
                },


              }
            )
          }

          console.log(_b);

          this.setState({data1:_b});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //石油和天然气 排放因子update
  updateOilgas1(index,data1,a){


    var data  = data1



    const Directory = [
      'gasWellheadDevice',
      'conventionalGasCollectionSystem',
      'meteringDispensingStation',
      'storageStation',
      'naturalGasProcessing',
      'pressurizedStation',
      'meteringStation',
      'pipeline',
      'naturalGasConsumption',
      'oilWellheadDevice',
      'singleWellOilStorageDevice',
      'pickUpStation',
      'jointStation',
      'heavyOilExtraction',
      'crudeOilStorageAndTransportation',
      'crudeOilRefining',




    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/oilAndGasSystemsEscape/emissionFactor/update'
    var bodyName = 'emissionFactor'






    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]=  data[index].oilgas2.value,




      post(url, obj)
        .then((res) => {

          if (res.code==0) {
            message.success(res.message);

          } else {
            message.error(res.message);
          }
        });
  }



  //年份选择
  selesctYears(years){

    this.setState({ loading: true});
    this.setState({years:years})
    this.queryOilgas(years);
    this.queryOilgas1(years)
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
          <span className={styles.title_span}>石油和天然气系统逃逸排放</span>
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

          <div className={styles.entryBody} id="bodyTable1" >

            <p>石油和天然气系统逃逸排放活动水平</p>

            <Table  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody} id="bodyTable2"  >
            <p>石油和天然气系统逃逸排放排放因子</p>

            <Table  pagination={false} bordered={true}  columns={columns1} dataSource={dataSource1} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

        </Spin>
      </div>

    );

  }
}


export default Form.create()(CoalmineTable);

