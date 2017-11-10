/**
 * 农用地Created by dixu on 2017/10/17.
 */
import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch,Radio  } from 'antd';

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

        colSpan:1,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),},

      {
        title: '各种氮源',
        children: [{
          title: '化肥(吨氮)', dataIndex: 'fertilizer', width: 150,
          render: (text, record, index) => this.renderColumns(this.state.data, index, 'fertilizer', text),
        }, {
          title: '粪肥(吨氮)', dataIndex: 'manure', width: 150,
          render: (text, record, index) => this.renderColumns(this.state.data, index, 'manure', text),
        }, {
          title: '秸秆还田(吨氮)', dataIndex: 'strawBackToField', width: 150,
          render: (text, record, index) => this.renderColumns(this.state.data, index, 'strawBackToField', text),
        }, {
          title: '总氮输入量(吨氮)', dataIndex: 'totalNitrogenInput', width: 150,
          render: (text, record, index) => this.renderColumns(this.state.data, index, 'totalNitrogenInput', text),
        }],
      }, {
        title: '直接排放因子(千克N2O-N/千克氮输入量)', dataIndex: 'directEmissionFactor', width: 250,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'directEmissionFactor', text),
      }, {
        title: '氧化亚氮直接排放量(吨氮)', dataIndex: 'directEmissionsOfNitrousOxide', width: 200,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'directEmissionsOfNitrousOxide', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data[index].fertilizer;
          return (
            <div className={styles.editableOperations} >

              { index ==7 ? <span></span> :

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

        colSpan:1,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'name', text),
          props: {},

        };
          if (index === 0) {
            obj.props.rowSpan = 2;
          }
          if (index === 1) {
            obj.props.rowSpan =0;
          }
          return obj}

      },
      {
        title: '大气沉降引起',
        children: [{
          title: '大气氮沉降输入量(吨氮)', dataIndex: 'atmosphericNitrogenDepositionInput', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'atmosphericNitrogenDepositionInput', text),
            props: {},

          };

            return obj},
        }, {
          title: '氧化亚氮排放量(吨氮)', dataIndex: 'nitrousOxideEmissions', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'nitrousOxideEmissions', text),
            props: {},

          };
            if (index === 0) {
              obj.props.rowSpan = 2;
            }
            if (index === 1) {
              obj.props.rowSpan =0;
            }
            return obj},
        }],
      }, {
        title: '氮淋溶径流引起',
        children: [{
          title: '氮淋溶径流损失量(吨氮)', dataIndex: 'nitrogenLeachingRunoffLoss', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'nitrogenLeachingRunoffLoss', text),
            props: {},

          };
            if (index === 0) {
              obj.props.rowSpan = 2;
            }
            if (index === 1) {
              obj.props.rowSpan =0;
            }
            return obj},
        }, {
          title: '氧化亚氮排放量(吨氮)', dataIndex: 'nitrousOxideEmissions1', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'nitrousOxideEmissions1', text),
            props: {},

          };
            if (index === 0) {
              obj.props.rowSpan = 2;
            }
            if (index === 1) {
              obj.props.rowSpan =0;
            }
            return obj},
        }],
      }, {
        title: '氧化亚氮间接排放量(吨氮)', dataIndex: 'indirectDischargeOfNitrousOxide', width: 200,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'indirectDischargeOfNitrousOxide', text),
          props: {},

        };
          if (index === 0) {
            obj.props.rowSpan = 2;
          }
          if (index === 1) {
            obj.props.rowSpan =0;
          }
          return obj},
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data1[index].atmosphericNitrogenDepositionInput;
          return (
            <div className={styles.editableOperations} >

              {index ==0 ? <span></span> :

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

        colSpan:1,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'name', text),},

      {
        title: '秸秆田间焚烧量(吨氮)', dataIndex: 'strawFieldIncineration', width: 200,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'strawFieldIncineration', text),
      }, {
        title: '排放因子(%)', dataIndex: 'emissionFactor', width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'emissionFactor', text),
      }, {
        title: '焚烧氧化亚氮排放量(吨氮)', dataIndex: 'CH4Emissions', width: 200,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'CH4Emissions', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data2[index].strawFieldIncineration;
          return (
            <div className={styles.editableOperations} >

              {

                editable ?
                  <span>
                  <a onClick={() => this.editDone2(index, 'save')}>确认</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone2(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                  :
                  <span>
                  <a onClick={() => this.edit2(index)}>编辑</a>
                </span>
              }

            </div>
          );
        },
      }];


    this.state = {

      data: [],
      data1: [],
      data2: [],
      data3: [],
      loading: true ,

      collapsed: false,
      select:1,
      trigger:true,
      user:[],




      AllData:[]
    };

    this.queryAgricultural();

    //$("#bodyTable1").hide();

  }



  // 秸秆
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

      this.updateAgricultural2(index,data2);
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


  // 间接 1.2
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

    if(key  == 'atmosphericNitrogenDepositionInput'){

     this.updateAgricultural1(index,data1);
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





  // 直接 1.1
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

    if(key  == 'directEmissionFactor'){

      this.updateAgricultural(index,data);
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

  //直接排放
  queryAgricultural(){


    post('/activityLevelDataEntry/agricultureActivity/list', {
      year:'2017',

    })
      .then((res) => {

        if (res.code==0) {


          var Alldata =res.data;

          const _Data = []

          _Data.push(Alldata.calculationOfMethaneEmissionsFromPaddyFields.singleCroppingOfRice);//水稻
          _Data.push(Alldata.calculationOfMethaneEmissionsFromPaddyFields.doubleSeasonEarlyRice);//水稻
          _Data.push(Alldata.calculationOfMethaneEmissionsFromPaddyFields.doubleSeasonLateRice);//水稻



          const fossilTitle = [


            '　　单季稻',
            '　　双季早稻',
            '　　双季晚稻',
            '　　小计',


          ]




          const _a = [];





            _a.push({
              key: 1,
              name:'',
              fertilizer: Alldata.agriculturalLandOxidationOfNitrogenDirectEmissions.fertilizer,
              manure: Alldata.agriculturalLandOxidationOfNitrogenDirectEmissions.manure,
              strawBackToField: Alldata.agriculturalLandOxidationOfNitrogenDirectEmissions.strawBackToField,
              directEmissionFactor: Alldata.agriculturalLandOxidationOfNitrogenDirectEmissions.directEmissionFactor,

            });




          const _b = [];


          for(var i = 0 ; i<_a.length;i++){


            _b.push({
                key:0,
                name:{

                  value:'' ,
                },
              fertilizer:{
                  editable: false,
                  value:_a[i].fertilizer ,
                },
              manure: {
                  editable: false,
                  value:_a[i].manure ,
                },
              strawBackToField: {
                editable: false,
                  value:_a[i].strawBackToField ,
                },
              totalNitrogenInput: {

                value:'0' ,
              },
              directEmissionFactor: {
                editable: false,
                value:_a[i].directEmissionFactor ,
              },
              directEmissionsOfNitrousOxide: {

                value:'0' ,
              },

              }
            )
          }



          const _b1 = [];


          for(var i = 0 ; i<2;i++){


            if(i==0){

              _b1.push({
                  key:0,
                  name:{

                    value:'' ,
                  },
                atmosphericNitrogenDepositionInput:{

                  value:'0' ,
                },
                nitrousOxideEmissions: {

                    value:'0' ,
                  },
                nitrogenLeachingRunoffLoss: {

                    value:'0',
                  },
                nitrousOxideEmissions1: {

                    value:'0' ,
                  },
                indirectDischargeOfNitrousOxide: {

                    value:'0' ,
                  }

                }
              )
            }else{

              _b1.push({
                  key:1,
                  name:{

                    value:'' ,
                  },
                atmosphericNitrogenDepositionInput:{
                    editable: false,
                    value:Alldata.irradiationOfNitrogenAndNitrogenInAgriculturalLand.atmosphericNitrogenDepositionInput ,
                  },
                  nitrousOxideEmissions: {

                    value:'0' ,
                  },
                  nitrogenLeachingRunoffLoss: {

                    value:'0',
                  },
                  nitrousOxideEmissions1: {

                    value:'0' ,
                  },
                  indirectDischargeOfNitrousOxide: {

                    value:'0' ,
                  }

                }
              )
            }

          }



          const _b2 = [];//秸秆

          _b2.push({
              key: 1,
              name: {

                value: '',
              },
            strawFieldIncineration: {
                editable: false,
                value: Alldata.strawFieldBurned.strawFieldIncineration,
              },
            emissionFactor: {
                editable: false,
                value: Alldata.strawFieldBurned.emissionFactor,
              },
            CH4Emissions: {

                value: '0',
              },

            }
          );


          this.setState({data:_b});
          this.setState({data1:_b1});
          this.setState({data2:_b2});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //直接排放update
  updateAgricultural(index,data,a){

    var data  = data

    const Directory = [
      'agriculturalLandOxidationOfNitrogenDirectEmissions',



    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/agricultureActivity/update'
    var bodyName = 'agricultureActivity';







    var obj={
      "year":"2017"
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "fertilizer": data[index].fertilizer.value,
      "manure": data[index].manure.value,
      "strawBackToField": data[index].strawBackToField.value,
      "directEmissionFactor": data[index].directEmissionFactor.value,

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


  //间接排放update
  updateAgricultural1(index,data1,a){

    var data  = data1

    const Directory = [
      'irradiationOfNitrogenAndNitrogenInAgriculturalLand',



    ]

    var DirectoryIndex = Directory[0];

    var url = '/activityLevelDataEntry/agricultureActivity/update'
    var bodyName = 'agricultureActivity';







    var obj={
      "year":"2017"
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "atmosphericNitrogenDepositionInput": data[index].atmosphericNitrogenDepositionInput.value,

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


  //秸秆update
  updateAgricultural2(index,data2,a){

    var data  = data2

    const Directory = [
      'strawFieldBurned',



    ]

    var DirectoryIndex = Directory[0];

    var url = '/activityLevelDataEntry/agricultureActivity/update'
    var bodyName = 'agricultureActivity';







    var obj={
      "year":"2017"
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "strawFieldIncineration": data[index].strawFieldIncineration.value,
      "emissionFactor": data[index].emissionFactor.value,

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

    const { data1} = this.state;
    const dataSource1 = data1.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    const { data2} = this.state;
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
          <span className={styles.title_span}>农用地氧化亚氮排放</span>
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




        <Spin spinning={this.state.loading} >

          <div className={styles.entryBody} id="bodyTable2"  >
            <p>农用地氧化亚氮直接排放</p>
            <div className={styles.greenSelect}>
              <span>是否采用本地化排放因子：</span>
              <RadioGroup defaultValue={1}>
                <Radio value={1}>否</Radio>
                <Radio value={2}>是</Radio>
              </RadioGroup>
            </div>

            <Table  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>



          <div className={styles.entryBody} id="bodyTable2"  >
            <p>农用地氧化亚氮间接排放</p>
            <div className={styles.greenSelect}>
              <span>是否采用本地化排放因子：</span>
              <RadioGroup defaultValue={1}>
                <Radio value={1}>否</Radio>
                <Radio value={2}>是</Radio>
              </RadioGroup>
            </div>

            <Table  pagination={false} bordered={true}  columns={columns1} dataSource={dataSource1} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>



          <div className={styles.entryBody} id="bodyTable3"  >
            <p>秸秆田间焚烧</p>
            <div className={styles.greenSelect}>
              <span>是否采用本地化排放因子：</span>
              <RadioGroup defaultValue={1}>
                <Radio value={1}>否</Radio>
                <Radio value={2}>是</Radio>
              </RadioGroup>
            </div>

            <Table  pagination={false} bordered={true}  columns={columns2} dataSource={dataSource2} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

        </Spin>






      </div>
    );

  }
}


export default Form.create()(ElectricTable);
