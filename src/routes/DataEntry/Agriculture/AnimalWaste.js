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
        title: '存栏量(头／只)', dataIndex: 'stockVolume', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'stockVolume', text),
      }, {
        title: '甲烷排放因子(kg／头／年)', dataIndex: 'methaneEmissionFactor', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'methaneEmissionFactor', text),
      }, {
        title: '甲烷排放量(吨)', dataIndex: 'methaneEmissions', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'methaneEmissions', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

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

        colSpan:1,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'name', text),},

      {
        title: '饲养量(头／只)', dataIndex: 'stockVolume', width: 100,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'stockVolume', text),
      }, {
        title: '氧化亚氮排放因子(不包括放牧放养／kg／头／年)', dataIndex: 'nitrousOxideEmissionFactor', width: 200,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'nitrousOxideEmissionFactor', text),
      }, {
        title: '氧化亚氮排放量(不包括放牧放养／吨)', dataIndex: 'nitrousOxideEmissions', width: 200,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'nitrousOxideEmissions', text),
      }, {
        title: '放牧/放养动物饲养量(头／只)', dataIndex: 'grazingStocking', width: 200,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'grazingStocking', text),
      }, {
        title: '年排泄氮量(kg-N／头)', dataIndex: 'annualExcretionOfNitrogen', width: 200,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'annualExcretionOfNitrogen', text),
      }, {
        title: '排放因子(%)', dataIndex: 'emissionFactor', width: 100,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'emissionFactor', text),
      }, {
        title: '氧化亚氮排放量(放牧放养／吨)', dataIndex: 'nitrousOxideEmissions1', width: 200,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'nitrousOxideEmissions1', text),
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

    this.queryWaste();

    //$("#bodyTable1").hide();

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

  //
  queryWaste(){


    post('/activityLevelDataEntry/agricultureActivity/list', {
      year:'2017',

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


            '　　奶牛',
            '　　非奶牛',
            '　　水牛',
            '　　绵羊',
            '　　山羊',
            '　　猪',
            '　　家禽',
            '　　马',
            '　　驴/骡',
            '　　骆驼',
            '　　总计',


          ]




          const _a1 = [];


          for(var i = 0 ;i<11;i++){


            if(i==10){
              _a1.push({
                key: i,
                name:fossilTitle[i],
                stockVolume: '0',
                nitrousOxideEmissionFactor: '0',
                nitrousOxideEmissions: '0',
                grazingStocking: '0',
                annualExcretionOfNitrogen: '0',
                emissionFactor: '0',
                nitrousOxideEmissions1: '0',

              });
            }else{
              _a1.push({
                key: i,
                name:fossilTitle[i],
                stockVolume: _Data1[i].stockVolume,
                nitrousOxideEmissionFactor: _Data1[i].nitrousOxideEmissionFactor,
                nitrousOxideEmissions:'0',
                grazingStocking: _Data1[i].grazingStocking,
                annualExcretionOfNitrogen: _Data1[i].annualExcretionOfNitrogen,
                emissionFactor: _Data1[i].emissionFactor,
                nitrousOxideEmissions1: '0',


              });
            }

          }



          const _a = [];


          for(var i = 0 ;i<11;i++){


            if(i==10){
              _a.push({
                key: i,
                name:fossilTitle[i],
                stockVolume: '0',
                methaneEmissionFactor: '0',
                methaneEmissions: '0',

              });
            }else{
              _a.push({
                key: i,
                name:fossilTitle[i],
                stockVolume: _Data[i].stockVolume,
                methaneEmissionFactor: _Data[i].methaneEmissionFactor,
                methaneEmissions: '0',


              });
            }

          }




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

                  value:'0',
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

                value:'0' ,
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

                  value:'0',
                }


              }
            )
          }




          this.setState({data:_b});
          this.setState({data1:_b1});
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
      "year":"2017"
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

        } else {
          message.error(res.message);
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
      "year":"2017"
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
          <span className={styles.title_span}>动物粪便管理甲烷和氧化亚氮排放</span>
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


        <div className={styles.entryBody} id="bodyTable1"  >
          <p>动物粪便管理甲烷排放</p>
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
          <p>动物粪便管理氧化亚氮排放</p>
          <div className={styles.greenSelect}>
            <span>是否采用本地化排放因子：</span>
            <RadioGroup defaultValue={1}>
              <Radio value={1}>否</Radio>
              <Radio value={2}>是</Radio>
            </RadioGroup>
          </div>

          <Table  pagination={false} bordered={true}  columns={columns1} dataSource={dataSource1} scroll={{ x: 2000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>








      </div>
    );

  }
}


export default Form.create()(ElectricTable);
