/**
 * Created by dixu on 2017/12/1.
 */

import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch ,Radio } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Gas.less';
import createReactClass from 'create-react-class';
import { post } from '../../utils/carbonRequest';
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

class EditableCell3 extends React.Component {

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
        title: 'HFC-23(CHF3)', dataIndex: 'HFC', width: 60,
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
        title: '数据项',
        dataIndex: 'name',
        width: 100,

        colSpan:1,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'name', text),
          props: {},

        };

          return obj}

      },{
        title: '林业活动CO2吸收量', dataIndex: 'p1', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p1', text),
          props: {},

        };



          return obj},
      },{
        title: '林业活动GHG排放量', dataIndex: 'p2', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p2', text),
          props: {},

        };



          return obj},
      },{
        title: '（乔木林+疏林+散生木+四旁树）CO2吸收量-活立木消耗CO2排放量', dataIndex: 'p3', width:300,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p3', text),
          props: {},

        };



          return obj},
      }
    ];

    this.columns2 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 150,

        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'name', text),
          props: {},

        };

          return obj}

      },{
        title: '排放量', dataIndex: 'p1', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'p1', text),
          props: {},

        };

          if (index === 5) {
            obj.props.colSpan = 0;
          }

          return obj},
      },{
        title: '不确定性', dataIndex: 'p2', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'p2', text),
          props: {},

        };
          if (index === 5) {
            obj.props.colSpan =2;
          }



          return obj},
      },

      {
        title: '编辑',
        dataIndex: 'operation',

        width: 50,

        render: (text, record, index) => {

          const { editable } = this.state.data2[index].p2;
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
      }
    ];

    this.columns3 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 150,

        colSpan:1,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns3(this.state.data3, index, 'name', text),
          props: {},

        };

          return obj}

      },{
        title: '包括土地变化和林业', dataIndex: 'p1', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns3(this.state.data3, index, 'p1', text),
          props: {},

        };

            if (index === 2) {
                obj.props.colSpan = 2;
            }


          return obj},
      },{
        title: '不包括土地变化和林业', dataIndex: 'p2', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns3(this.state.data3, index, 'p2', text),
          props: {},

        };

            if (index === 2) {
                obj.props.colSpan = 0;
            }



          return obj},
      },

      {
        title: '编辑',
        dataIndex: 'operation',

        width: 50,

        render: (text, record, index) => {

          const { editable } = this.state.data3[index].p1;
          return (
            <div className={styles.editableOperations} >

              {

                editable ?
                  <span>
                  <a onClick={() => this.editDone3(index, 'save')}>确认</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone3(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                  :
                  <span>
                  <a onClick={() => this.edit3(index)}>编辑</a>
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
      data2: [],
      data3: [],
      loading: true ,

      collapsed: false,
      select:1,
      trigger:true,
      user:[],




      AllData:[],
      years:'2014',
      Data:[]
    };
    this.newQueryGut1();
    this.queryGut('2014');
    this.newQueryGut('2014');


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

    if(key  == 'p2'){

      this.updateWaste1(index,data2);
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



  renderColumns3(data3, index, key, text) {


    const { editable, status } = data3[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (

      <EditableCell3
        editable={editable}
        value={text}
        onChange={value => this.handleChange3(key, index, value)}
        status={status}
      />);
  }


  handleChange3(key, index, value) {



    const data3 = [...this.state.data3];
    data3[index][key].value = value;
    this.setState({ data3 });

    if(key  == 'p1'){

      this.updateWaste(index,data3);
    }





  }



  edit3(index) {

    const { data3 } = this.state;
    Object.keys(data3[index]).forEach((item) => {
      if (data3[index][item] && typeof data3[index][item].editable !== 'undefined') {
        data3[index][item].editable = true;
      }
    });
    this.setState({ data3 });
  }

  editDone3(index, type) {

    const { data3 } = this.state;
    Object.keys(data3[index]).forEach((item) => {
      if (data3[index][item] && typeof data3[index][item].editable !== 'undefined') {
        data3[index][item].editable = false;
        data3[index][item].status = type;
      }
    });
    this.setState({ data3 }, () => {
      Object.keys(data3[index]).forEach((item) => {
        if (data3[index][item] && typeof data3[index][item].editable !== 'undefined') {
          delete data3[index][item].status;
        }
      });
    });
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

  //
  queryGut(years){


    post('/uncertainty/kpi/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data;


          const _Data = []

          _Data.push(Alldata.unitGDPCO2Emissions)
          _Data.push(Alldata.perCapitaGreenhouseGasEmissions)
          _Data.push(Alldata.unitPrimaryEnergyConsumptionOfCarbonDioxideEmissions)

          const fossilTitle = [

            '单位GDP二氧化碳排放量（tCO2/万元）',
            '人均温室气体排放量（tCO2e/人）',
            '单位一次能源消费二氧化碳排放量（tCO2/吨标煤）',


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







          const _b2 = [];


          for(var i = 0 ; i<_Data.length;i++){


            _b2.push({
                key:i,
                name:{

                  value:fossilTitle[i] ,
                },
                p1:{
                  editable: false,
                  value:_Data[i].includingLandUseChangeAndForestry ,
                },
                p2: {
                  editable: false,
                  value:_Data[i].notIncludingLandUseChangeAndForestry
                  ,
                },


              }
            )
          }





          this.setState({data:_b});

          this.setState({data3:_b2});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });



  }


  newQueryGut1(){

    post('/report/summary/list', {


    })
      .then((res) => {

        if (res.code==0) {


         this.setState({Data:res.data})


        } else {
          message.error('数据错误！');
        }
      });



  }

  //
  newQueryGut(years){


    post('/uncertainty/report/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data;



          const _Data = []

          _Data.push(Alldata.uncertaintyEnergyActivity.uncertainty)
          _Data.push(Alldata.uncertaintyIndustrialProductionProcess.uncertainty)
          _Data.push(Alldata.uncertaintyAgricultureActivity.uncertainty)
          _Data.push(Alldata.uncertaintyWasteDisposal.uncertainty)
          _Data.push(Alldata.uncertaintyLandUseChangeAndForestry.uncertainty)
          _Data.push(Alldata.uncertaintySynthesis.uncertainty)

          const fossilTitle = [

            '能源活动',
            '工业生产过程',
            '农业活动',
            '废弃物处理',
            '土地利用变化与林业',
            '综合不确定性',

          ]

          const  _Data1 = [];
          const  pfl = this.state.Data;




          if(years=='2014'){
            _Data1.push(pfl.SUM2014.Summary.Total.energyActivity)
            _Data1.push(pfl.SUM2014.Summary.Total.industrialProductionProcess)
            _Data1.push(pfl.SUM2014.Summary.Total.agricultureActivity)
            _Data1.push(pfl.SUM2014.Summary.Total.wasteDisposal)
            _Data1.push(pfl.SUM2014.Summary.Total.landUseChangeAndForestry)
              _Data1.push(Alldata.uncertaintySynthesis.uncertainty)


          }else if(years=='2012'){
            _Data1.push(pfl.SUM2012.Summary.Total.energyActivity)
            _Data1.push(pfl.SUM2012.Summary.Total.industrialProductionProcess)
            _Data1.push(pfl.SUM2012.Summary.Total.agricultureActivity)
            _Data1.push(pfl.SUM2012.Summary.Total.wasteDisposal)
            _Data1.push(pfl.SUM2012.Summary.Total.landUseChangeAndForestry)

              _Data1.push(Alldata.uncertaintySynthesis.uncertainty)
          }else if(years=='2010'){
            _Data1.push(pfl.SUM2010.Summary.Total.energyActivity)
            _Data1.push(pfl.SUM2010.Summary.Total.industrialProductionProcess)
            _Data1.push(pfl.SUM2010.Summary.Total.agricultureActivity)
            _Data1.push(pfl.SUM2010.Summary.Total.wasteDisposal)
            _Data1.push(pfl.SUM2010.Summary.Total.landUseChangeAndForestry)
              _Data1.push(Alldata.uncertaintySynthesis.uncertainty)
          }else if(years=='2005'){
            _Data1.push(pfl.SUM2005.Summary.Total.energyActivity)
            _Data1.push(pfl.SUM2005.Summary.Total.industrialProductionProcess)
            _Data1.push(pfl.SUM2005.Summary.Total.agricultureActivity)
            _Data1.push(pfl.SUM2005.Summary.Total.wasteDisposal)
            _Data1.push(pfl.SUM2005.Summary.Total.landUseChangeAndForestry)
              _Data1.push(Alldata.uncertaintySynthesis.uncertainty)
          }


      /*    var bqd = pflTotal==0 ? 0 : Math.sqrt(Math.pow(_Data[0]*_Data1[0],2)+Math.pow(_Data[1]*_Data1[1],2)+Math.pow(_Data[2]*_Data1[2],2)+Math.pow(_Data[3]*_Data1[3],2)
            +Math.pow(_Data[4]*_Data1[4],2))/pflTotal


          _Data.push(bqd)
          _Data1.push(bqd)*/




          const _b2 = [];


          for(var i = 0 ; i<fossilTitle.length;i++){


            _b2.push({
                key:i,
                name:{

                  value:fossilTitle[i] ,
                },
                p1:{

                  value:_Data1[i] ,
                },
                p2: {
                  editable: false,
                  value:_Data[i]
                  ,
                },


              }
            )
          }





          this.setState({data2:_b2});

          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });


  }

  //

  updateWaste1(index,data2,a){



    var data  = data2

    const Directory = [
      'uncertaintyEnergyActivity',
      'uncertaintyIndustrialProductionProcess',
      'uncertaintyAgricultureActivity',
      'uncertaintyWasteDisposal',
      'uncertaintyLandUseChangeAndForestry',
      'uncertaintySynthesis',

    ]



    var DirectoryIndex = Directory[index];

    var url = '/uncertainty/report/update'
    var bodyName = 'report';







    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "uncertainty": data[index].p2.value,


    }

    post(url, obj)
      .then((res) => {

        if (res.code==0) {

          message.success(res.message);
          this.newQueryGut(this.state.years)

        } else {
          message.error('数据录入有误，请重新录入！');
        }
      });
  }

  updateWaste(index,data3,a){



    var data  = data3

    const Directory = [
      'unitGDPCO2Emissions',
      'perCapitaGreenhouseGasEmissions',
      'unitPrimaryEnergyConsumptionOfCarbonDioxideEmissions',

    ]



    var DirectoryIndex = Directory[index];

    var url = '/uncertainty/kpi/update'
    var bodyName = 'KPI';







    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "includingLandUseChangeAndForestry": data[index].p1.value,
      "notIncludingLandUseChangeAndForestry": data[index].p2.value,

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
    this.newQueryGut(years);
    this.newQueryGut1();
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

    const { data2 } = this.state;
    const dataSource2 = data2.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    const { data3 } = this.state;
    const dataSource3 = data3.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });


    const columns = this.columns;
    const columns2 = this.columns2;
    const columns3 = this.columns3;



    return (
      <div className={styles.normal}>
        <div className={styles.title}>
          <span className={styles.title_span}>其它指标</span>
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


            <Table size="small"  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 1020 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC1 }/>

          </div>




          <div className={styles.entryBody} id="bodyTable2"  >
            <p>不确定性计算</p>


            <Table  size="small" pagination={false} bordered={true}  columns={columns2} dataSource={dataSource2} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody} id="bodyTable3"  >
            <p>关键指标</p>


            <Table  size="small" pagination={false} bordered={true}  columns={columns3} dataSource={dataSource3} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>


        </Spin>



      </div>
    );

  }
}


export default Form.create()(ElectricTable);
