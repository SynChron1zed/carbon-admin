/**
 * 废弃物不确定性Created by dixu on 2017/10/31.
 */


import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch ,Radio } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Waste.less';
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

        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'name', text),
          props: {},

        };

          return obj}

      }, {
        title: '排放量（万吨CO2e）', dataIndex: 'p1', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'p1', text),
          props: {},

        };



          return obj},
      },{
        title: '不确定性（%）', dataIndex: 'uncertainty', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'uncertainty', text),
          props: {},

        };



          return obj},
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 60,

        render: (text, record, index) => {

          const { editable } = this.state.data[index].uncertainty;
          return (
            <div className={styles.editableOperations} >

              {
                  index==4 ? <span></span>:

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
      }
    ];



    this.state = {

      data: [],
      data1: [],
      loading: true ,

      collapsed: false,
      select:1,
      trigger:true,
      user:[],
        Xdata:[],




      AllData:[],
      years:'2014'
    };

    this.XqueryGut('2014');

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

    if(key  == 'uncertainty'){

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


    //清单结果的
    XqueryGut(years){


        post('/report/wasteDisposal/list', {
            year:years,

        })
            .then((res) => {

                if (res.code==0) {




                    var Alldata =res.data;


                    var _data = []
                    _data.push(((Alldata.CH4.solidWasteLandfillDisposal.managedLandfill+Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillMoreThan5m+Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillLessThan5m+Alldata.CH4.solidWasteLandfillDisposal.unclassifiedLandfill)*21))

                    _data.push(((Alldata.CO2.classificationOfMunicipalSolidWasteFossils+Alldata.CO2.hazardousWaste)*21))

                    _data.push((((Alldata.CH4.domesticSewageTreatment.intoTheEnvironmentBOD+Alldata.CH4.domesticSewageTreatment.sewageTreatmentSystemToRemoveBOD)*21)+(Alldata.N2O.wasteWater*310)))

                    _data.push(((Alldata.CH4.industrialWastewaterTreatment.dischargedIntoTheEnvironmentCOD+Alldata.CH4.industrialWastewaterTreatment.sewageTreatmentSystemToRemoveCOD)*21))

                    _data.push((((Alldata.CH4.solidWasteLandfillDisposal.managedLandfill+Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillMoreThan5m+Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillLessThan5m+Alldata.CH4.solidWasteLandfillDisposal.unclassifiedLandfill)*21)
                    +((Alldata.CO2.classificationOfMunicipalSolidWasteFossils+Alldata.CO2.hazardousWaste)*21)
                    +(((Alldata.CH4.domesticSewageTreatment.intoTheEnvironmentBOD+Alldata.CH4.domesticSewageTreatment.sewageTreatmentSystemToRemoveBOD)*21)+(Alldata.N2O.wasteWater*310))
                    +((Alldata.CH4.industrialWastewaterTreatment.dischargedIntoTheEnvironmentCOD+Alldata.CH4.industrialWastewaterTreatment.sewageTreatmentSystemToRemoveCOD)*21)))

                    this.setState({ Xdata: _data});
                    this.setState({ loading: false});

                    this.queryGut(years);


                } else {
                    message.error('数据错误！');
                }
            });

    }


  //
  queryGut(years){


    post('/uncertainty/wasteDisposal/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {



          var Alldata =res.data;

            var xdata = this.state.Xdata

            var Total = ((Math.pow(Alldata.wasteLandfillDisposal.uncertainty*xdata[0]/xdata[4],2))
                +(Math.pow(Alldata.wasteIncineration.uncertainty*xdata[1]/xdata[4],2))
            +(Math.pow(Alldata.domesticSewageTreatment.uncertainty*xdata[2]/xdata[4],2))
            +(Math.pow(Alldata.industrialWasteWaterTreatment.uncertainty*xdata[3]/xdata[4],2))).toFixed(2)

          const _Data = [
            Alldata.wasteLandfillDisposal.uncertainty,
            Alldata.wasteIncineration.uncertainty,
            Alldata.domesticSewageTreatment.uncertainty,
            Alldata.industrialWasteWaterTreatment.uncertainty,
              Total
          ]  //co2

            var xdata1 = []
            for(var i = 0 ; i<xdata.length;i++){
              xdata1.push(xdata[i].toFixed(2))
            }



          const fossilTitle = [

            '废弃物填埋处理',
            '废弃物焚烧处理',
            '生活污水处理',
            '工业废水处理',
            '总计',


          ]



          const _b1= []


          for(var i = 0 ; i<_Data.length;i++){


                        _b1.push({
                            key:i,
                            name:{

                              value:fossilTitle[i] ,
                            },
                          p1:{

                              value:xdata1[i] ,
                            },
                         uncertainty: {
                              editable: false,
                              value:_Data[i] ,
                            },

                          }
                        )
                      }


          console.log(_b1);


          this.setState({data:_b1});

          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //update不确定性
  updateGut(index,data,a){

    var data  = data

    const Directory = [
      'wasteLandfillDisposal',
      'wasteIncineration',
      'domesticSewageTreatment',
      'industrialWasteWaterTreatment',


    ]



    var DirectoryIndex = Directory[index];

    var url = '/uncertainty/wasteDisposal/update'
    var bodyName = 'wasteDisposal';







    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "uncertainty": data[index].uncertainty.value,

    }

    post(url, obj)
      .then((res) => {

        if (res.code==0) {

          message.success(res.message);
          this.XqueryGut(this.state.years)

        } else {
          message.error('数据录入有误，请重新录入！');
        }
      });
  }

  //年份选择
  selesctYears(years){

    this.setState({ loading: true});
    this.setState({years:years})
    this.XqueryGut(years)
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
          <span className={styles.title_span}> 不确定性计算</span>
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
            <p>废弃物活动温室气体清单报告不确定性</p>


            <Table size="small" pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>
        </Spin>









      </div>
    );

  }
}


export default Form.create()(ElectricTable);

