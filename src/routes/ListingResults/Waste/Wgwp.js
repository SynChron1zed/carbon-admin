/**
 * 废弃物gwpCreated by dixu on 2017/10/31.
 */

import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch ,Radio } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Wgwp.less';
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
        title: '温室气体种类',
        dataIndex: 'name',
        width: 100,

        colSpan:1,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'name', text),
          props: {},

        };

          return obj}

      },{
        title: 'CO2', dataIndex: 'CO', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'CO', text),
          props: {},

        };



          return obj},
      },{
        title: 'CH4', dataIndex: 'CH', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'CH', text),
          props: {},

        };



          return obj},
      },{
        title: 'N2O', dataIndex: 'N2O', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'N2O', text),
          props: {},

        };



          return obj},
      },{
        title: 'HFC-23(CHF3)', dataIndex: 'HFC', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'HFC', text),
          props: {},

        };



          return obj},
      },{
        title: 'HFC-32', dataIndex: 'HFC1', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'HFC1', text),
          props: {},

        };



          return obj},
      },{
        title: 'HFC-125', dataIndex: 'HFC2', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'HFC2', text),
          props: {},

        };



          return obj},
      },
      {
        title: 'HFC-134a', dataIndex: 'HFC3', width: 100,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns(this.state.data, index, 'HFC3', text),
          props: {},

        };

          return obj},
      },{
        title: 'HFC-143a', dataIndex: 'HFC4', width: 100,
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
        title: '废弃物处理排放总量', dataIndex: 'p1', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p1', text),
          props: {},

        };



          return obj},
      },{
        title: '固废处理排放总量', dataIndex: 'p2', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p2', text),
          props: {},

        };



          return obj},
      },{
        title: '废水处理排放量', dataIndex: 'p3', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p3', text),
          props: {},

        };



          return obj},
      },{
        title: '固废填埋甲烷排放量', dataIndex: 'p4', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p4', text),
          props: {},

        };



          return obj},
      },{
        title: '固废焚烧排放量', dataIndex: 'p5', width: 150,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p5', text),
          props: {},

        };



          return obj},
      },{
        title: '工业废水处理甲烷排放', dataIndex: 'p6', width: 250,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p6', text),
          props: {},

        };



          return obj},
      },
      {
        title: '生活污水处理甲烷排放量', dataIndex: 'p7', width: 200,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p7', text),
          props: {},

        };

          return obj},
      },
      {
        title: '生活污水处理氧化亚氮排放量', dataIndex: 'p8', width: 200,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'p8', text),
          props: {},

        };

          return obj},
      },
    ];

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

  //秸秆
  queryGut(years){


    post('/report/wasteDisposal/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data;

         
          const _Data = []
      

          const fossilTitle = [


            '　　奶牛',
            '　　非奶牛',
            '　　水牛',
            '　　绵羊',
            '　　山羊',
            '　　猪',
            '　　马',
            '　　驴/骡',
            '　　骆驼',
            '　　动物肠道甲烷排放总计',


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



          var _b1 = [
            {
              key:1,
              name:{
                value:'单位' ,
              },
              p1:{
                value:'万tCO2e' ,
              },
              p2:{
                value:'万tCO2e',
              },
              p3:{
                value:'万tCO2e' ,
              },
              p4:{
                value:'万tCH4',
              },
              p5:{
                value:'万tN20',
              },
              p6:{
                value:'万tCH4',
              },
              p7:{
                value:'万tCH4',
              },
              p8:{
                value:'C万tN2O',
              },
            },{
              key:2,
              name:{
                value:'排放量',
              },
              p1:{
                value:(((Alldata.CH4.solidWasteLandfillDisposal.managedLandfill+Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillMoreThan5m+Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillLessThan5m+Alldata.CH4.solidWasteLandfillDisposal.unclassifiedLandfill)*21
                +(Alldata.CO2.classificationOfMunicipalSolidWasteFossils+Alldata.CO2.hazardousWaste)+((Alldata.CH4.domesticSewageTreatment.intoTheEnvironmentBOD+Alldata.CH4.domesticSewageTreatment.sewageTreatmentSystemToRemoveBOD)*21+Alldata.N2O.wasteWater*310))
              +((Alldata.CH4.industrialWastewaterTreatment.dischargedIntoTheEnvironmentCOD+Alldata.CH4.industrialWastewaterTreatment.sewageTreatmentSystemToRemoveCOD)*21+Alldata.N2O.wasteWater*310)).toFixed(2)
              },
              p2:{
                value:(((Alldata.CH4.solidWasteLandfillDisposal.managedLandfill+Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillMoreThan5m+Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillLessThan5m+Alldata.CH4.solidWasteLandfillDisposal.unclassifiedLandfill)*21)
                +(Alldata.CO2.classificationOfMunicipalSolidWasteFossils+Alldata.CO2.hazardousWaste)).toFixed(2)
              },
              p3:{
                value:((((Alldata.CH4.domesticSewageTreatment.intoTheEnvironmentBOD+Alldata.CH4.domesticSewageTreatment.sewageTreatmentSystemToRemoveBOD)*21)+(Alldata.N2O.wasteWater*310))
                +((Alldata.CH4.industrialWastewaterTreatment.dischargedIntoTheEnvironmentCOD+Alldata.CH4.industrialWastewaterTreatment.sewageTreatmentSystemToRemoveCOD)*21+Alldata.N2O.wasteWater*310)).toFixed(2),
              },
              p4:{
                value:((Alldata.CH4.solidWasteLandfillDisposal.managedLandfill+Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillMoreThan5m+Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillLessThan5m+Alldata.CH4.solidWasteLandfillDisposal.unclassifiedLandfill).toFixed(2)),
              },
              p5:{
                value:((Alldata.CO2.classificationOfMunicipalSolidWasteFossils+Alldata.CO2.hazardousWaste)).toFixed(2),
              },
              p6:{
                value:((Alldata.CH4.industrialWastewaterTreatment.dischargedIntoTheEnvironmentCOD+Alldata.CH4.industrialWastewaterTreatment.sewageTreatmentSystemToRemoveCOD).toFixed(2)),
              },
              p7:{
                value:((Alldata.CH4.domesticSewageTreatment.intoTheEnvironmentBOD+Alldata.CH4.domesticSewageTreatment.sewageTreatmentSystemToRemoveBOD).toFixed(2)),
              },
              p8:{
                value:Alldata.N2O.wasteWater,
              },
            }


          ]

          console.log(_b);


          this.setState({data:_b});
          this.setState({data1:_b1});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
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
          <span className={styles.title_span}>温室气体增温潜值及关键排放指标</span>
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


            <Table  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 2000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC1 }/>

          </div>




          <div className={styles.entryBody} id="bodyTable1"  >
            <p>关键排放指标信息</p>


            <Table  pagination={false} bordered={true}  columns={columns1} dataSource={dataSource1} scroll={{ x: 2000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

        </Spin>



      </div>
    );

  }
}


export default Form.create()(ElectricTable);
