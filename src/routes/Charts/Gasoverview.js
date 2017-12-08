/**
 * 温室气体排放总览 Created by dixu on 2017/12/1.
 */

import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch ,Radio ,Checkbox,Button,Row, Col} from 'antd';

import ReactDOM from 'react-dom'
import styles from './Gas.less';
import createReactClass from 'create-react-class';
import { post } from '../../utils/carbonRequest';
import $ from 'jquery';
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

import echarts from 'echarts';

import kuang from '../../assets/yunkuang.png'
import kuang1 from '../../assets/CH4k.png'
import kuang2 from '../../assets/CO2k.png'
import kuang3 from '../../assets/HFCk.png'
import kuang4 from '../../assets/NO2k.png'

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
        title: '数据项',
        dataIndex: 'name',
        width: 100,

        colSpan:1,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'name', text),
          props: {},

        };

          return obj}

      },{
        title: '二氧化碳(万吨)', dataIndex: 'CO', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'CO', text),
          props: {},

        };



          return obj},
      },{
        title: '甲烷(万吨)', dataIndex: 'CH', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'CH', text),
          props: {},

        };



          return obj},
      },{
        title: '氧化亚氮(万吨)', dataIndex: 'N2O', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'N2O', text),
          props: {},

        };



          return obj},
      },{
        title: '氢氟碳化物(万吨当量)', dataIndex: 'HFC', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'HFC', text),
          props: {},

        };



          return obj},
      },{
        title: '全氟化碳(万吨当量)', dataIndex: 'HFC1', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'HFC1', text),
          props: {},

        };



          return obj},
      },{
        title: '六氟化硫(万吨当量)', dataIndex: 'HFC2', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'HFC2', text),
          props: {},

        };



          return obj},
      },
      {
        title: '温室气体(万吨当量)', dataIndex: 'HFC3', width: 100,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns(this.state.data, index, 'HFC3', text),
          props: {},

        };

          return obj},
      }
    ];


    this.columns1 = [
      {
        title: '排放源类型',
        dataIndex: 'name',
        width: 100,

        colSpan:1,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'name', text),
          props: {},

        };

          return obj}

      },{
        title: '二氧化碳(包括土地利用变化和林业)',
        children: [
          {
            title: '二氧化碳(万吨)', dataIndex: 'CO', width: 100,
            render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'CO', text),
          },{
            title: '构成(%)', dataIndex: 'CO1', width: 100,
            render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'CO1', text),
          },


        ],
      },{
        title: '二氧化碳(不包括土地利用变化和林业)',
        children: [
          {
            title: '二氧化碳(万吨)', dataIndex: 'NCO', width: 100,
            render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'NCO', text),
          },{
            title: '构成(%)', dataIndex: 'NCO1', width: 100,
            render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'NCO1', text),
          },


        ],
      },{
        title: '甲烷',
        children: [
          {
            title: '甲烷(万吨)', dataIndex: 'CH', width: 100,
            render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'CH', text),
          },{
            title: '构成(%)', dataIndex: 'CH1', width: 100,
            render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'CH1', text),
          },


        ],
      }
      ,{
        title: '氧化亚氮',
        children: [
          {
            title: '氧化亚氮(万吨)', dataIndex: 'N2O', width: 100,
            render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'N2O', text),
          },{
            title: '构成(%)', dataIndex: 'N2O1', width: 100,
            render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'N2O1', text),
          },


        ],
      }
    ];

    this.columns2 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 100,

        colSpan:1,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'name', text),
          props: {},

        };

          return obj}

      },{
        title: '二氧化碳(万吨)', dataIndex: 'CO', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'CO', text),
          props: {},

        };



          return obj},
      },{
        title: '甲烷(万吨)', dataIndex: 'CH', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'CH', text),
          props: {},

        };



          return obj},
      },{
        title: '氧化亚氮(万吨)', dataIndex: 'N2O', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'N2O', text),
          props: {},

        };



          return obj},
      },{
        title: '氢氟碳化物(万吨当量)', dataIndex: 'HFC', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'HFC', text),
          props: {},

        };



          return obj},
      },{
        title: '全氟化碳(万吨当量)', dataIndex: 'HFC1', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'HFC1', text),
          props: {},

        };



          return obj},
      },{
        title: '六氟化硫(万吨当量)', dataIndex: 'HFC2', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'HFC2', text),
          props: {},

        };



          return obj},
      },
      {
        title: '合计(万吨当量)', dataIndex: 'HFC3', width: 100,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'HFC3', text),
          props: {},

        };

          return obj},
      }
    ];

    this.columns3 = [
      {
        title: '排放源类型',
        dataIndex: 'name',
        width: 100,

        colSpan:1,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns3(this.state.data3, index, 'name', text),
          props: {},

        };

          return obj}

      },{
        title: '包括土地利用变化和林业',
        children: [
          {
            title: '二氧化碳当量(万吨)', dataIndex: 'CO', width: 100,
            render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'CO', text),
          },{
            title: '比重(%)', dataIndex: 'CO1', width: 100,
            render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'CO1', text),
          },


        ],
      },{
        title: '不包括土地利用变化和林业',
        children: [
          {
            title: '二氧化碳(万吨)', dataIndex: 'NCO', width: 100,
            render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'NCO', text),
          },{
            title: '比重(%)', dataIndex: 'NCO1', width: 100,
            render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'NCO1', text),
          },


        ],
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
      cs:'a',


      pf2005:[],
      nopf2005:[],

      pf2010:[],
      nopf2010:[],

      pf2012:[],
      nopf2012:[],

      pf2014:[],
      nopf2014:[],

      checkedValues:[],
      pf:[],
      nopf:[],
      i:'0',
      j:'a'

    };

    this.queryGut('0','a','2014');

    //$("#bodyTable1").hide();

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

    if(key  == 'methaneRecovery'){

      //this.updateWaste3(index,data3);
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
  queryGut(i,j,years){


    post('/report/summary/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data;


          var _DataPf = []; //排放总量
          var _DataPf1 = []; //排放分析
          var _DataPf2 = []; //排放分析包含土地
          var _DataPf3 = []; //排放分析包含土地 %
          var _DataPf4 = []; //排放分析不包含土地
          var _DataPf5 = []; //排放分析不包含土地%
          var _DataPf6 = []; //甲烷
          var _DataPf7 = []; //甲烷 %
          var _DataPf8 = []; //氧化亚氮
          var _DataPf9 = []; //氧化亚氮 %
          var _DataPf10 = []; //能源活动分析
          var _DataPf11 = []; //农业活动分析
          var _DataPf12 = []; //gy
          var _DataPf13 = []; // 土地利用变化与林业分析
          var _DataPf14 = []; //fqw
          var _DataPf15 = []; //gy
          var _DataPf16 = []; //温室气体排放总量

          var _Data = []
          var _Data1 = []
          var _Data2 = []
          var _Data3 = []




          const fossilTitle = [

            '总排放量（包括土地利用变化和林业）',
            '能源活动总计',
            '　1.化石燃料合计',
            '　　　能源工业',
            '　　　农业',
            '　　　工业和建筑业',
            '　　　交通运输',
            '　　　服务业',
            '　　　居民生活',
            '　2.生物质燃烧',
            '　3.煤炭开采逃逸',
            '　4.油气系统逃逸',
            '　5.非能源利用',
            '工业生产过程总计',
            '　1.水泥生产过程',
            '　2.石灰生产过程',
            '　3.钢铁生产过程',
            '　4.电石生产过程',
            '　5.己二酸生产过程',
            '　6.硝酸生产过程',
            '　7.铝生产过程',
            '　8.镁生产过程',
            '　9.电力设备生产过程',
            '农业总计',
            '　1.稻田',
            '　2.农用地',
            '　3.动物肠道发酵',
            '　4.动物粪便管理系统',
            '土地利用变化与林业总计',
            '　1.森林和其他木质生物质碳储量变化小计',
            '　　　乔木林',
            '　　　经济林',
            '　　　竹林',
            '　　　灌木林',
            '　　　疏林、散生木和四旁树',
            '　　　活立木消耗',
            '　2.森林转化碳排放小计',
            '　　　燃烧排放',
            '　　　分解排放',
            '废弃物处理总计',
            '　1.固体废弃物',
            '　2.废水',
            '国际燃料舱',
            '　　　国际航空',
            '　　　国际航海',
            '调入（出）电力间接排放',

          ]


          const fossilTitle1 = [

            '能源活动',
            '工业生产过程',
            '农业活动',
            '废弃物处理',
            '土地利用变化与林业',

          ]

          const fossilTitle2 = [

            '能源活动',
            '工业生产过程',
            '农业活动',
            '废弃物处理',
            '土地利用变化与林业',
            '温室气体排放(不包括土地利用变化与林业)',
            '温室气体排放(包括土地利用变化与林业)',


          ]



          const fossilTitle3 = [

            '二氧化碳',
            '甲烷',
            '氧化亚氮',
            '含氟气体',
            '合计',

          ]


          if(years=='2014'){

            if(i=='0'){ //0 包括 1 不包括
              _DataPf = [
                (Alldata.SUM2014.Composition.CO2.proportionOfGreenhouseGases_IncludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2014.Composition.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry.toFixed(2),
                (Alldata.SUM2014.Composition.CH4.proportionOfGreenhouseGases_IncludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2014.Composition.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry.toFixed(2),
                (Alldata.SUM2014.Composition.N2O.proportionOfGreenhouseGases_IncludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2014.Composition.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry.toFixed(2),
                (Alldata.SUM2014.Composition.F.proportionOfGreenhouseGases_IncludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2014.Composition.F.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry.toFixed(2)]

            }else{

              _DataPf = [
              (Alldata.SUM2014.Composition.CO2.proportionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2014.Composition.CO2.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry.toFixed(2),
              (Alldata.SUM2014.Composition.CH4.proportionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2014.Composition.CH4.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry.toFixed(2),
              (Alldata.SUM2014.Composition.N2O.proportionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2014.Composition.N2O.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry.toFixed(2),
              (Alldata.SUM2014.Composition.F.proportionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2014.Composition.F.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry.toFixed(2)]
            }

            _DataPf1.push((Alldata.SUM2014.Summary.CO2.energyActivity+Alldata.SUM2014.Summary.CH4.energyActivity+Alldata.SUM2014.Summary.N2O.energyActivity).toFixed(2))
            _DataPf1.push((Alldata.SUM2014.Summary.CO2.industrialProductionProcess+Alldata.SUM2014.Summary.HFC.industrialProductionProcess+Alldata.SUM2014.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2014.Summary.PFC.industrialProductionProcess+Alldata.SUM2014.Summary.SF6.industrialProductionProcess).toFixed(2))
            _DataPf1.push((Alldata.SUM2014.Summary.CH4.agricultureActivity+Alldata.SUM2014.Summary.N2O.agricultureActivity).toFixed(2))
            _DataPf1.push((Alldata.SUM2014.Summary.CO2.wasteDisposal+Alldata.SUM2014.Summary.CH4.wasteDisposal+Alldata.SUM2014.Summary.N2O.wasteDisposal).toFixed(2))
            _DataPf1.push((Alldata.SUM2014.Summary.CO2.landUseChangeAndForestry+Alldata.SUM2014.Summary.CH4.landUseChangeAndForestry+Alldata.SUM2014.Summary.N2O.landUseChangeAndForestry).toFixed(2))



            _DataPf2.push((Alldata.SUM2014.Summary.CO2.energyActivity))
            _DataPf2.push((Alldata.SUM2014.Summary.CO2.industrialProductionProcess))
            _DataPf2.push((Alldata.SUM2014.Summary.CO2.wasteDisposal))
            _DataPf2.push((Alldata.SUM2014.Summary.CO2.landUseChangeAndForestry))

            _DataPf3.push(((Alldata.SUM2014.Summary.CO2.energyActivity/(Alldata.SUM2014.Summary.CO2.energyActivity+Alldata.SUM2014.Summary.CO2.industrialProductionProcess
              +Alldata.SUM2014.Summary.CO2.wasteDisposal+Alldata.SUM2014.Summary.CO2.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf3.push(((Alldata.SUM2014.Summary.CO2.industrialProductionProcess/(Alldata.SUM2014.Summary.CO2.energyActivity+Alldata.SUM2014.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2014.Summary.CO2.wasteDisposal+Alldata.SUM2014.Summary.CO2.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf3.push(((Alldata.SUM2014.Summary.CO2.wasteDisposal/(Alldata.SUM2014.Summary.CO2.energyActivity+Alldata.SUM2014.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2014.Summary.CO2.wasteDisposal+Alldata.SUM2014.Summary.CO2.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf3.push(((Alldata.SUM2014.Summary.CO2.landUseChangeAndForestry/(Alldata.SUM2014.Summary.CO2.energyActivity+Alldata.SUM2014.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2014.Summary.CO2.wasteDisposal+Alldata.SUM2014.Summary.CO2.landUseChangeAndForestry))*100).toFixed(2))



            _DataPf4.push((Alldata.SUM2014.Summary.CO2.energyActivity))
            _DataPf4.push((Alldata.SUM2014.Summary.CO2.industrialProductionProcess))
            _DataPf4.push((Alldata.SUM2014.Summary.CO2.wasteDisposal))


            _DataPf5.push(((Alldata.SUM2014.Summary.CO2.energyActivity/(Alldata.SUM2014.Summary.CO2.energyActivity+Alldata.SUM2014.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2014.Summary.CO2.wasteDisposal))*100).toFixed(2))

            _DataPf5.push(((Alldata.SUM2014.Summary.CO2.industrialProductionProcess/(Alldata.SUM2014.Summary.CO2.energyActivity+Alldata.SUM2014.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2014.Summary.CO2.wasteDisposal))*100).toFixed(2))


            _DataPf5.push(((Alldata.SUM2014.Summary.CO2.wasteDisposal/(Alldata.SUM2014.Summary.CO2.energyActivity+Alldata.SUM2014.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2014.Summary.CO2.wasteDisposal))*100).toFixed(2))

            _DataPf6.push((Alldata.SUM2014.Summary.CH4.energyActivity))
            _DataPf6.push((Alldata.SUM2014.Summary.CH4.agricultureActivity))
            _DataPf6.push((Alldata.SUM2014.Summary.CH4.wasteDisposal))
            _DataPf6.push((Alldata.SUM2014.Summary.CH4.landUseChangeAndForestry))


            _DataPf7.push(((Alldata.SUM2014.Summary.CH4.energyActivity/(Alldata.SUM2014.Summary.CH4.energyActivity+Alldata.SUM2014.Summary.CH4.agricultureActivity
            +Alldata.SUM2014.Summary.CH4.wasteDisposal+Alldata.SUM2014.Summary.CH4.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf7.push(((Alldata.SUM2014.Summary.CH4.agricultureActivity/(Alldata.SUM2014.Summary.CH4.energyActivity+Alldata.SUM2014.Summary.CH4.agricultureActivity
            +Alldata.SUM2014.Summary.CH4.wasteDisposal+Alldata.SUM2014.Summary.CH4.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf7.push(((Alldata.SUM2014.Summary.CH4.wasteDisposal/(Alldata.SUM2014.Summary.CH4.energyActivity+Alldata.SUM2014.Summary.CH4.agricultureActivity
            +Alldata.SUM2014.Summary.CH4.wasteDisposal+Alldata.SUM2014.Summary.CH4.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf7.push(((Alldata.SUM2014.Summary.CH4.landUseChangeAndForestry/(Alldata.SUM2014.Summary.CH4.energyActivity+Alldata.SUM2014.Summary.CH4.agricultureActivity
            +Alldata.SUM2014.Summary.CH4.wasteDisposal+Alldata.SUM2014.Summary.CH4.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf8.push((Alldata.SUM2014.Summary.N2O.energyActivity))
            _DataPf8.push((Alldata.SUM2014.Summary.N2O.industrialProductionProcess))
            _DataPf8.push((Alldata.SUM2014.Summary.N2O.agricultureActivity))
            _DataPf8.push((Alldata.SUM2014.Summary.N2O.wasteDisposal))
            _DataPf8.push((Alldata.SUM2014.Summary.N2O.landUseChangeAndForestry))


            _DataPf9.push(((Alldata.SUM2014.Summary.N2O.energyActivity/(Alldata.SUM2014.Summary.N2O.energyActivity+Alldata.SUM2014.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2014.Summary.N2O.agricultureActivity
            +Alldata.SUM2014.Summary.N2O.wasteDisposal+Alldata.SUM2014.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf9.push(((Alldata.SUM2014.Summary.N2O.industrialProductionProcess/(Alldata.SUM2014.Summary.N2O.energyActivity+Alldata.SUM2014.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2014.Summary.N2O.agricultureActivity
            +Alldata.SUM2014.Summary.N2O.wasteDisposal+Alldata.SUM2014.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf9.push(((Alldata.SUM2014.Summary.N2O.agricultureActivity/(Alldata.SUM2014.Summary.N2O.energyActivity+Alldata.SUM2014.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2014.Summary.N2O.agricultureActivity
            +Alldata.SUM2014.Summary.N2O.wasteDisposal+Alldata.SUM2014.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf9.push(((Alldata.SUM2014.Summary.N2O.wasteDisposal/(Alldata.SUM2014.Summary.N2O.energyActivity+Alldata.SUM2014.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2014.Summary.N2O.agricultureActivity
            +Alldata.SUM2014.Summary.N2O.wasteDisposal+Alldata.SUM2014.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf9.push(((Alldata.SUM2014.Summary.N2O.landUseChangeAndForestry/(Alldata.SUM2014.Summary.N2O.energyActivity+Alldata.SUM2014.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2014.Summary.N2O.agricultureActivity
            +Alldata.SUM2014.Summary.N2O.wasteDisposal+Alldata.SUM2014.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf10.push(Alldata.SUM2014.Collection.fossilFuel.CO2EW)
            _DataPf10.push(Alldata.SUM2014.Collection.biomassBurning.CO2EW)
            _DataPf10.push(Alldata.SUM2014.Collection.coalMiningEscape.CO2EW)
            _DataPf10.push(Alldata.SUM2014.Collection.oilAndGasSystemEscape.CO2EW)
            _DataPf10.push(Alldata.SUM2014.Collection.nonEnergyUse.CO2EW)


            _DataPf11.push(Alldata.SUM2014.Collection.paddyFields.CO2EW)
            _DataPf11.push(Alldata.SUM2014.Collection.land.CO2EW)
            _DataPf11.push(Alldata.SUM2014.Collection.animalIntestinalFermentation.CO2EW)
            _DataPf11.push(Alldata.SUM2014.Collection.animalManureManagement.CO2EW)

            _DataPf12.push(Alldata.SUM2014.Collection.cementProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2014.Collection.limeProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2014.Collection.steelProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2014.Collection.calciumCarbideProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2014.Collection.adipicAcidProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2014.Collection.nitricAcidProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2014.Collection.aluminumProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2014.Collection.magnesiumProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2014.Collection.electricPowerEquipmentProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2014.Collection.otherProductionProcess.CO2EW)

            _DataPf13.push(Alldata.SUM2014.Collection.subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks.CO2EW)
            _DataPf13.push(Alldata.SUM2014.Collection.subtotalOfCarbonEmissionsFromForestConversion.CO2EW)

            _DataPf14.push(Alldata.SUM2014.Collection.solidWaste.CO2EW)
            _DataPf14.push(Alldata.SUM2014.Collection.wasteWater.CO2EW)

            _DataPf15.push(Alldata.SUM2014.Collection.internationalAviation.CO2EW)
            _DataPf15.push(Alldata.SUM2014.Collection.internationalSailing.CO2EW)


            var SUMpfCO = Alldata.SUM2014.Summary;

            var sumCO = [
              SUMpfCO.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              (SUMpfCO.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry/SUMpfCO.Total.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry*100).toFixed(2),
              SUMpfCO.CO2.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              (SUMpfCO.CO2.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry/SUMpfCO.Total.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),

            ]
            _Data3.push(sumCO)

            var sumCH = [
              SUMpfCO.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              (SUMpfCO.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry/SUMpfCO.Total.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry*100).toFixed(2),
              SUMpfCO.CH4.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              (SUMpfCO.CH4.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry/SUMpfCO.Total.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),

            ]

            _Data3.push(sumCH)

            var sumNO = [
              SUMpfCO.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              (SUMpfCO.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry/SUMpfCO.Total.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry*100).toFixed(2),
              SUMpfCO.N2O.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              (SUMpfCO.N2O.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry/SUMpfCO.Total.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),

            ]

            _Data3.push(sumNO)

            var sumF = [
              (SUMpfCO.HFC.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry+ SUMpfCO.PFC.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry+ SUMpfCO.SF6.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry).toFixed(2),
              ((SUMpfCO.HFC.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry+ SUMpfCO.PFC.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry+ SUMpfCO.SF6.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)/SUMpfCO.Total.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry*100).toFixed(2),
              (SUMpfCO.HFC.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry+ SUMpfCO.PFC.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry+ SUMpfCO.SF6.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry).toFixed(2),

              (  (SUMpfCO.HFC.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry+ SUMpfCO.PFC.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry+ SUMpfCO.SF6.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry)/SUMpfCO.Total.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),

            ]

            _Data3.push(sumF)

            var sumT = [
              SUMpfCO.Total.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
             100,
              SUMpfCO.Total.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
            100
            ]

            _Data3.push(sumT)


            var _b4 = []

            for(var i  = 0 ;i <fossilTitle3.length;i++){
              _b4.push({
                key:i,
                name:{

                  value:fossilTitle3[i] ,
                },
                CO:{

                  value:_Data3[i][0] ,
                },
                CO1:{

                  value:_Data3[i][1],
                },
                NCO:{

                  value:_Data3[i][2] ,
                },
                NCO1:{

                  value:_Data3[i][3],
                },


              })


            }

            this.setState({data3:_b4})




            var SUMpfTotal = Alldata.SUM2014.Summary;

            var energyActivityPFT = [
              SUMpfTotal.CO2.energyActivity,
              SUMpfTotal.CH4.energyActivity,
              SUMpfTotal.N2O.energyActivity,
              '-',
              '-',
              '-',
              SUMpfTotal.Total.energyActivity,

            ];

            _Data2.push(energyActivityPFT)

            var industrialProductionProcessPFT = [
              SUMpfTotal.CO2.industrialProductionProcess,
              '-',
              SUMpfTotal.N2O.industrialProductionProcess,
              SUMpfTotal.HFC.industrialProductionProcess,
              SUMpfTotal.PFC.industrialProductionProcess,
              SUMpfTotal.SF6.industrialProductionProcess,
              SUMpfTotal.Total.industrialProductionProcess,

            ];

            _Data2.push(industrialProductionProcessPFT)

            var agricultureActivityPFT = [
              '-',
              SUMpfTotal.CH4.agricultureActivity,
              SUMpfTotal.N2O.agricultureActivity,
              '-',
              '-',
              '-',
              SUMpfTotal.Total.agricultureActivity,

            ];

            _Data2.push(agricultureActivityPFT)

            var wasteDisposalPFT = [
              SUMpfTotal.CO2.wasteDisposal,
              SUMpfTotal.CH4.wasteDisposal,
              SUMpfTotal.N2O.wasteDisposal,
              '-',
              '-',
              '-',
              SUMpfTotal.Total.wasteDisposal,

            ];

            _Data2.push(wasteDisposalPFT)

            var landUseChangeAndForestryPFT = [
              SUMpfTotal.CO2.landUseChangeAndForestry,
              SUMpfTotal.CH4.landUseChangeAndForestry,
              SUMpfTotal.N2O.landUseChangeAndForestry,
              '-',
              '-',
              '-',
              SUMpfTotal.Total.landUseChangeAndForestry,

            ];

            _Data2.push(landUseChangeAndForestryPFT)

            var emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestryPFT = [
              SUMpfTotal.CO2.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.CH4.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.N2O.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.HFC.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.PFC.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.SF6.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.Total.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,

            ];
            _Data2.push(emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestryPFT)

            var emissionOfGreenhouseGases_IncludingLandUseChangeAndForestryPFT = [
              SUMpfTotal.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.HFC.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.PFC.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.SF6.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.Total.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,

            ];

            _Data2.push(emissionOfGreenhouseGases_IncludingLandUseChangeAndForestryPFT)



            var _b3 = []

            for(var i  = 0 ;i <fossilTitle2.length;i++){
              _b3.push({
                key:i,
                name:{

                  value:fossilTitle2[i] ,
                },
                CO:{

                  value:_Data2[i][0] ,
                },
                CH:{

                  value:_Data2[i][1],
                },
                N2O:{

                  value:_Data2[i][2] ,
                },
                HFC:{

                  value:_Data2[i][3],
                },
                HFC1:{

                  value:_Data2[i][4],
                },
                HFC2:{

                  value:_Data2[i][5] ,
                },
                HFC3:{

                  value:_Data2[i][6] ,
                },


              })


            }

            this.setState({data2:_b3})






            var SUMpf = Alldata.SUM2014.SubSummary
            var SUMpf1 = Alldata.SUM2014.Summary.CO2
            var energyActivityPF = [
              SUMpf.energyActivity.CO2, (SUMpf.energyActivity.CO2Proportion*100).toFixed(2)+'%',

              SUMpf1.energyActivity,

              (SUMpf1.energyActivity/(SUMpf1.energyActivity+SUMpf1.industrialProductionProcess+SUMpf1.wasteDisposal)).toFixed(2)+'%',

              SUMpf.energyActivity.CH4,(SUMpf.energyActivity.CH4Proportion*100).toFixed(2)+'%',
              SUMpf.energyActivity.N2O,(SUMpf.energyActivity.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(energyActivityPF);

            var industrialProductionProcessPF = [
              SUMpf.industrialProductionProcess.CO2, (SUMpf.industrialProductionProcess.CO2Proportion*100).toFixed(2)+'%',

              SUMpf1.industrialProductionProcess,

              (SUMpf1.industrialProductionProcess/(SUMpf1.energyActivity+SUMpf1.industrialProductionProcess+SUMpf1.wasteDisposal)).toFixed(2)+'%',

              '','',
              SUMpf.industrialProductionProcess.N2O,(SUMpf.industrialProductionProcess.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(industrialProductionProcessPF);

            var agricultureActivityPF = [
              '', '',

              '',

              '',

              SUMpf.agricultureActivity.CH4,(SUMpf.agricultureActivity.CH4Proportion*100).toFixed(2)+'%',
              SUMpf.agricultureActivity.N2O,(SUMpf.agricultureActivity.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(agricultureActivityPF);


            var wasteDisposalPF = [
              SUMpf.wasteDisposal.CO2, (SUMpf.wasteDisposal.CO2Proportion*100).toFixed(2)+'%',

              SUMpf1.wasteDisposal,

              (SUMpf1.wasteDisposal/(SUMpf1.energyActivity+SUMpf1.industrialProductionProcess+SUMpf1.wasteDisposal)).toFixed(2)+'%',

              SUMpf.wasteDisposal.CH4,(SUMpf.wasteDisposal.CH4Proportion*100).toFixed(2)+'%',
              SUMpf.wasteDisposal.N2O,(SUMpf.wasteDisposal.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(wasteDisposalPF);

            var landUseChangeAndForestryPF = [
              SUMpf.landUseChangeAndForestry.CO2, (SUMpf.landUseChangeAndForestry.CO2Proportion*100).toFixed(2)+'%',

              '',

              '',

              SUMpf.landUseChangeAndForestry.CH4,(SUMpf.landUseChangeAndForestry.CH4Proportion*100).toFixed(2)+'%',
              SUMpf.landUseChangeAndForestry.N2O,(SUMpf.landUseChangeAndForestry.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(landUseChangeAndForestryPF);




            var _b2 = []

            for(var i  = 0 ;i <fossilTitle1.length;i++){
              _b2.push({
                key:i,
                name:{

                  value:fossilTitle1[i] ,
                },
                CO:{

                  value:_Data1[i][0] ,
                },
                CO1:{

                  value:_Data1[i][1],
                },
                NCO:{

                  value:_Data1[i][2] ,
                },
                NCO1:{

                  value:_Data1[i][3],
                },
                CH:{

                  value:_Data1[i][4],
                },
                CH1:{

                  value:_Data1[i][5] ,
                },
                N2O:{

                  value:_Data1[i][6] ,
                },
                N2O1:{

                  value:_Data1[i][7] ,
                },

              })


            }

            this.setState({data1:_b2})


            var totalEmissions_IncludingLand_UseChangeAndForestry = [
              (Alldata.SUM2014.Collection.totalEnergyActivities.CO2+Alldata.SUM2014.Collection.totalIndustrialProductionProcess.CO2+Alldata.SUM2014.Collection.totalIndustrialProductionProcess.CO2
              +Alldata.SUM2014.Collection.totalLandUseChangeAndForestry.CO2+Alldata.SUM2014.Collection.totalWasteDisposal.CO2).toFixed(2),

              (Alldata.SUM2014.Collection.totalEnergyActivities.CH4
              +Alldata.SUM2014.Collection.totalAgricultureActivity.CH4+Alldata.SUM2014.Collection.totalLandUseChangeAndForestry.CH4+Alldata.SUM2014.Collection.totalWasteDisposal.CH4).toFixed(2),

              (Alldata.SUM2014.Collection.totalEnergyActivities.N2O+Alldata.SUM2014.Collection.totalIndustrialProductionProcess.N2O+Alldata.SUM2014.Collection.totalIndustrialProductionProcess.N2O
              +Alldata.SUM2014.Collection.totalAgricultureActivity.N2O+Alldata.SUM2014.Collection.totalLandUseChangeAndForestry.N2O+Alldata.SUM2014.Collection.totalWasteDisposal.N2O).toFixed(2),

              (Alldata.SUM2014.Collection.totalIndustrialProductionProcess.HFC).toFixed(2),

              (Alldata.SUM2014.Collection.totalIndustrialProductionProcess.PFC).toFixed(2),
              (Alldata.SUM2014.Collection.totalIndustrialProductionProcess.SF6).toFixed(2),

              (Alldata.SUM2014.Collection.totalEnergyActivities.CO2EW+Alldata.SUM2014.Collection.totalIndustrialProductionProcess.CO2EW+Alldata.SUM2014.Collection.totalIndustrialProductionProcess.CO2EW
              +Alldata.SUM2014.Collection.totalAgricultureActivity.CO2EW+Alldata.SUM2014.Collection.totalLandUseChangeAndForestry.CO2EW+Alldata.SUM2014.Collection.totalWasteDisposal.CO2EW).toFixed(2),


            ]

            _Data.push(totalEmissions_IncludingLand_UseChangeAndForestry);

            var totalEnergyActivities = [
              Alldata.SUM2014.Collection.totalEnergyActivities.CO2,
              Alldata.SUM2014.Collection.totalEnergyActivities.CH4,
              Alldata.SUM2014.Collection.totalEnergyActivities.N2O,
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.totalEnergyActivities.CO2EW,
            ]

            _Data.push(totalEnergyActivities);


            var fossilFuel = [
              Alldata.SUM2014.Collection.fossilFuel.CO2,
              Alldata.SUM2014.Collection.fossilFuel.CH4,
              Alldata.SUM2014.Collection.fossilFuel.N2O,
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.fossilFuel.CO2EW,
            ]

            _Data.push(fossilFuel);

            var energyIndustry = [
              Alldata.SUM2014.Collection.energyIndustry.CO2,
              '-',
              Alldata.SUM2014.Collection.energyIndustry.N2O,
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.energyIndustry.CO2EW,
            ]
            _Data.push(energyIndustry);

            var agriculture = [
              Alldata.SUM2014.Collection.agriculture.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.agriculture.CO2EW,
            ]

            _Data.push(agriculture);

            var industryAndConstruction = [
              Alldata.SUM2014.Collection.industryAndConstruction.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.industryAndConstruction.CO2EW,
            ]

            _Data.push(industryAndConstruction);

            var transportation = [
              Alldata.SUM2014.Collection.transportation.CO2,
              Alldata.SUM2014.Collection.transportation.CH4,
              Alldata.SUM2014.Collection.transportation.N2O,
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.transportation.CO2EW,
            ]

            _Data.push(transportation);

            var serviceIndustry = [
              Alldata.SUM2014.Collection.serviceIndustry.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.serviceIndustry.CO2EW,
            ]

            _Data.push(serviceIndustry);

            var residentsLiving = [
              Alldata.SUM2014.Collection.residentsLiving.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.residentsLiving.CO2EW,
            ]

            _Data.push(residentsLiving);

            var biomassBurning = [
              '-',
              Alldata.SUM2014.Collection.biomassBurning.CH4,
              Alldata.SUM2014.Collection.biomassBurning.N2O,
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.biomassBurning.CO2EW,
            ]

            _Data.push(biomassBurning);

            var coalMiningEscape = [
              '-',
              Alldata.SUM2014.Collection.coalMiningEscape.CH4,
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.coalMiningEscape.CO2EW,
            ]

            _Data.push(coalMiningEscape);

            var oilAndGasSystemEscape = [
              '-',
              Alldata.SUM2014.Collection.oilAndGasSystemEscape.CH4,
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.oilAndGasSystemEscape.CO2EW,
            ]
            _Data.push(oilAndGasSystemEscape);

            var nonEnergyUse = [

              Alldata.SUM2014.Collection.nonEnergyUse.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.nonEnergyUse.CO2EW,
            ]

            _Data.push(nonEnergyUse);


            var totalIndustrialProductionProcess = [

              Alldata.SUM2014.Collection.totalIndustrialProductionProcess.CO2,
              '-',
              Alldata.SUM2014.Collection.totalIndustrialProductionProcess.N2O,
              Alldata.SUM2014.Collection.totalIndustrialProductionProcess.HFC,
              Alldata.SUM2014.Collection.totalIndustrialProductionProcess.PFC,
              Alldata.SUM2014.Collection.totalIndustrialProductionProcess.SF6,
              Alldata.SUM2014.Collection.totalIndustrialProductionProcess.CO2EW,
            ]

            _Data.push(totalIndustrialProductionProcess);

            var cementProductionProcess = [

              Alldata.SUM2014.Collection.cementProductionProcess.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.cementProductionProcess.CO2EW,
            ]

            _Data.push(cementProductionProcess);

            var limeProductionProcess = [

              Alldata.SUM2014.Collection.limeProductionProcess.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.limeProductionProcess.CO2EW,
            ]

            _Data.push(limeProductionProcess);

            var steelProductionProcess = [

              Alldata.SUM2014.Collection.steelProductionProcess.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.steelProductionProcess.CO2EW,
            ]

            _Data.push(steelProductionProcess);

            var calciumCarbideProductionProcess = [

              Alldata.SUM2014.Collection.calciumCarbideProductionProcess.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.calciumCarbideProductionProcess.CO2EW,
            ]

            _Data.push(calciumCarbideProductionProcess);

            var adipicAcidProductionProcess = [

              '-',
              '-',
              Alldata.SUM2014.Collection.adipicAcidProductionProcess.N2O,
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.totalIndustrialProductionProcess.CO2EW,
            ]

            _Data.push(adipicAcidProductionProcess);

            var nitricAcidProductionProcess = [

              '-',
              '-',
              Alldata.SUM2014.Collection.nitricAcidProductionProcess.N2O,
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.nitricAcidProductionProcess.CO2EW,
            ]

            _Data.push(nitricAcidProductionProcess);

            var aluminumProductionProcess = [

              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.aluminumProductionProcess.PFC,
              '-',
              Alldata.SUM2014.Collection.aluminumProductionProcess.CO2EW,
            ]

            _Data.push(aluminumProductionProcess);

            var magnesiumProductionProcess = [

              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.magnesiumProductionProcess.SF6,
              Alldata.SUM2014.Collection.magnesiumProductionProcess.CO2EW,
            ]

            _Data.push(magnesiumProductionProcess);

            var electricPowerEquipmentProductionProcess = [

              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.electricPowerEquipmentProductionProcess.SF6,
              Alldata.SUM2014.Collection.electricPowerEquipmentProductionProcess.CO2EW,
            ]

            _Data.push(electricPowerEquipmentProductionProcess);

            var otherProductionProcess = [

              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.otherProductionProcess.HFC,
              Alldata.SUM2014.Collection.otherProductionProcess.PFC,
              Alldata.SUM2014.Collection.otherProductionProcess.SF6,
              Alldata.SUM2014.Collection.otherProductionProcess.CO2EW,
            ]

            _Data.push(otherProductionProcess );

            var totalAgricultureActivity = [

              '-',
              Alldata.SUM2014.Collection.totalAgricultureActivity.CH4,
              Alldata.SUM2014.Collection.totalAgricultureActivity.N2O,
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.totalAgricultureActivity.CO2EW,
            ]

            _Data.push(totalAgricultureActivity);

            var paddyFields = [

              '-',
              Alldata.SUM2014.Collection.paddyFields.CH4,
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.paddyFields.CO2EW,
            ]

            _Data.push(paddyFields);

            var land = [

              '-',
              '-',
              Alldata.SUM2014.Collection.land.N2O,
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.land.CO2EW,
            ]

            _Data.push(land);

            var animalIntestinalFermentation = [

              '-',
              Alldata.SUM2014.Collection.animalIntestinalFermentation.CH4,
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.animalIntestinalFermentation.CO2EW,
            ]

            _Data.push(animalIntestinalFermentation);

            var animalManureManagement = [

              '-',
              Alldata.SUM2014.Collection.animalManureManagement.CH4,
              Alldata.SUM2014.Collection.animalManureManagement.N2O,
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.animalManureManagement.CO2EW,
            ]

            _Data.push(animalManureManagement);

            var totalLandUseChangeAndForestry = [

              Alldata.SUM2014.Collection.totalLandUseChangeAndForestry.CO2,
              Alldata.SUM2014.Collection.totalLandUseChangeAndForestry.CH4,
              Alldata.SUM2014.Collection.totalLandUseChangeAndForestry.N2O,
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.totalLandUseChangeAndForestry.CO2EW,
            ]

            _Data.push(totalLandUseChangeAndForestry);

            var subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks = [

              Alldata.SUM2014.Collection.subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks.CO2EW,
            ]

            _Data.push(subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks);

            var arborForest = [

              Alldata.SUM2014.Collection.arborForest.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.arborForest.CO2EW,
            ]

            _Data.push(arborForest);

            var economicForest = [

              Alldata.SUM2014.Collection.economicForest.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.economicForest.CO2EW,
            ]

            _Data.push(economicForest);

            var bambooForest = [

              Alldata.SUM2014.Collection.bambooForest.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.bambooForest.CO2EW,
            ]

            _Data.push(bambooForest);

            var countrySpecialIrrigation = [

              Alldata.SUM2014.Collection.countrySpecialIrrigation.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.countrySpecialIrrigation.CO2EW,
            ]

            _Data.push(countrySpecialIrrigation);

            var scatteredWoodSurroundedByTreesSparseForest = [

              Alldata.SUM2014.Collection.scatteredWoodSurroundedByTreesSparseForest.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.scatteredWoodSurroundedByTreesSparseForest.CO2EW,
            ]

            _Data.push(scatteredWoodSurroundedByTreesSparseForest);

            var liveWoodConsumption = [

              Alldata.SUM2014.Collection.liveWoodConsumption.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.liveWoodConsumption.CO2EW,
            ]

            _Data.push(liveWoodConsumption);

            var subtotalOfCarbonEmissionsFromForestConversion = [

              Alldata.SUM2014.Collection.subtotalOfCarbonEmissionsFromForestConversion.CO2,
              Alldata.SUM2014.Collection.subtotalOfCarbonEmissionsFromForestConversion.CH4,
              Alldata.SUM2014.Collection.subtotalOfCarbonEmissionsFromForestConversion.N2O,
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.subtotalOfCarbonEmissionsFromForestConversion.CO2EW,
            ]

            _Data.push(subtotalOfCarbonEmissionsFromForestConversion);

            var combustionEmission = [

              Alldata.SUM2014.Collection.combustionEmission.CO2,
              Alldata.SUM2014.Collection.combustionEmission.CH4,
              Alldata.SUM2014.Collection.combustionEmission.N2O,
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.combustionEmission.CO2EW,
            ]

            _Data.push(combustionEmission);

            var decompositionOfEmission = [

              Alldata.SUM2014.Collection.decompositionOfEmission.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.decompositionOfEmission.CO2EW,
            ]

            _Data.push(decompositionOfEmission);

            var totalWasteDisposal = [

              Alldata.SUM2014.Collection.totalWasteDisposal.CO2,
              Alldata.SUM2014.Collection.totalWasteDisposal.CH4,
              Alldata.SUM2014.Collection.totalWasteDisposal.N2O,

              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.totalWasteDisposal.CO2EW,
            ]

            _Data.push(totalWasteDisposal);

            var solidWaste = [

              Alldata.SUM2014.Collection.solidWaste.CO2,
              Alldata.SUM2014.Collection.solidWaste.CH4,
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.solidWaste.CO2EW,
            ]

            _Data.push(solidWaste);


            var wasteWater = [

              '-',
              Alldata.SUM2014.Collection.wasteWater.N2O,
              Alldata.SUM2014.Collection.wasteWater.CH4,
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.wasteWater.CO2EW,
            ]

            _Data.push(wasteWater);

            var internationalFuel = [

              Alldata.SUM2014.Collection.internationalFuel.CO2,
              Alldata.SUM2014.Collection.internationalFuel.CH4,
              Alldata.SUM2014.Collection.internationalFuel.N2O,
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.internationalFuel.CO2EW,
            ]

            _Data.push(internationalFuel);

            var internationalAviation = [

              Alldata.SUM2014.Collection.internationalAviation.CO2,
              Alldata.SUM2014.Collection.internationalAviation.CH4,
              Alldata.SUM2014.Collection.internationalAviation.N2O,
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.internationalAviation.CO2EW,
            ]

            _Data.push(internationalAviation);

            var internationalSailing = [

              Alldata.SUM2014.Collection.internationalSailing.CO2,
              Alldata.SUM2014.Collection.internationalSailing.CH4,
              Alldata.SUM2014.Collection.internationalSailing.N2O,
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.internationalSailing.CO2EW,
            ]

            _Data.push(internationalSailing);

            var chargeOutIndirectDischargeOfElectricity = [

              Alldata.SUM2014.Collection.chargeOutIndirectDischargeOfElectricity.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              Alldata.SUM2014.Collection.chargeOutIndirectDischargeOfElectricity.CO2EW,
            ]

            _Data.push(chargeOutIndirectDischargeOfElectricity);



            var _b1 = []

            for(var i  = 0 ;i <fossilTitle.length;i++){
              _b1.push({
                key:i,
                name:{

                  value:fossilTitle[i] ,
                },
                CO:{

                  value:_Data[i][0] ,
                },
                CH:{

                  value:_Data[i][1],
                },
                N2O:{

                  value:_Data[i][2],
                },
                HFC:{

                  value:_Data[i][3] ,
                },
                HFC1:{

                  value:_Data[i][4] ,
                },
                HFC2:{

                  value:_Data[i][5] ,
                },
                HFC3:{

                  value:_Data[i][6] ,
                },

              })


            }

            this.setState({data:_b1})

          }else if (years=='2012')
          {

            if(i=='0') {
              _DataPf = [
                (Alldata.SUM2012.Composition.CO2.proportionOfGreenhouseGases_IncludingLandUseChangeAndForestry * 100).toFixed(2), Alldata.SUM2012.Composition.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry.toFixed(2),
                (Alldata.SUM2012.Composition.CH4.proportionOfGreenhouseGases_IncludingLandUseChangeAndForestry * 100).toFixed(2), Alldata.SUM2012.Composition.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry.toFixed(2),
                (Alldata.SUM2012.Composition.N2O.proportionOfGreenhouseGases_IncludingLandUseChangeAndForestry * 100).toFixed(2), Alldata.SUM2012.Composition.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry.toFixed(2),
                (Alldata.SUM2012.Composition.F.proportionOfGreenhouseGases_IncludingLandUseChangeAndForestry * 100).toFixed(2), Alldata.SUM2012.Composition.F.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry.toFixed(2)]

            }else {

              _DataPf = [
              (Alldata.SUM2012.Composition.CO2.proportionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2012.Composition.CO2.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry.toFixed(2),
              (Alldata.SUM2012.Composition.CH4.proportionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2012.Composition.CH4.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry.toFixed(2),
              (Alldata.SUM2012.Composition.N2O.proportionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2012.Composition.N2O.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry.toFixed(2),
              (Alldata.SUM2012.Composition.F.proportionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2012.Composition.F.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry.toFixed(2)]
            }

            _DataPf1.push((Alldata.SUM2012.Summary.CO2.energyActivity+Alldata.SUM2012.Summary.CH4.energyActivity+Alldata.SUM2012.Summary.N2O.energyActivity).toFixed(2));
            _DataPf1.push((Alldata.SUM2012.Summary.CO2.industrialProductionProcess+Alldata.SUM2012.Summary.HFC.industrialProductionProcess+Alldata.SUM2012.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2012.Summary.PFC.industrialProductionProcess+Alldata.SUM2012.Summary.SF6.industrialProductionProcess).toFixed(2));
            _DataPf1.push((Alldata.SUM2012.Summary.CH4.agricultureActivity+Alldata.SUM2012.Summary.N2O.agricultureActivity).toFixed(2));
            _DataPf1.push((Alldata.SUM2012.Summary.CO2.wasteDisposal+Alldata.SUM2012.Summary.CH4.wasteDisposal+Alldata.SUM2012.Summary.N2O.wasteDisposal).toFixed(2));
            _DataPf1.push((Alldata.SUM2012.Summary.CO2.landUseChangeAndForestry+Alldata.SUM2012.Summary.CH4.landUseChangeAndForestry+Alldata.SUM2012.Summary.N2O.landUseChangeAndForestry).toFixed(2));


            _DataPf2.push((Alldata.SUM2012.Summary.CO2.energyActivity))
            _DataPf2.push((Alldata.SUM2012.Summary.CO2.industrialProductionProcess))
            _DataPf2.push((Alldata.SUM2012.Summary.CO2.wasteDisposal))
            _DataPf2.push((Alldata.SUM2012.Summary.CO2.landUseChangeAndForestry))

            _DataPf3.push(((Alldata.SUM2012.Summary.CO2.energyActivity/(Alldata.SUM2012.Summary.CO2.energyActivity+Alldata.SUM2012.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2012.Summary.CO2.wasteDisposal+Alldata.SUM2012.Summary.CO2.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf3.push(((Alldata.SUM2012.Summary.CO2.industrialProductionProcess/(Alldata.SUM2012.Summary.CO2.energyActivity+Alldata.SUM2012.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2012.Summary.CO2.wasteDisposal+Alldata.SUM2012.Summary.CO2.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf3.push(((Alldata.SUM2012.Summary.CO2.wasteDisposal/(Alldata.SUM2012.Summary.CO2.energyActivity+Alldata.SUM2012.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2012.Summary.CO2.wasteDisposal+Alldata.SUM2012.Summary.CO2.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf3.push(((Alldata.SUM2012.Summary.CO2.landUseChangeAndForestry/(Alldata.SUM2012.Summary.CO2.energyActivity+Alldata.SUM2012.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2012.Summary.CO2.wasteDisposal+Alldata.SUM2012.Summary.CO2.landUseChangeAndForestry))*100).toFixed(2))




            _DataPf4.push((Alldata.SUM2012.Summary.CO2.energyActivity))
            _DataPf4.push((Alldata.SUM2012.Summary.CO2.industrialProductionProcess))
            _DataPf4.push((Alldata.SUM2012.Summary.CO2.wasteDisposal))


            _DataPf5.push(((Alldata.SUM2012.Summary.CO2.energyActivity/(Alldata.SUM2012.Summary.CO2.energyActivity+Alldata.SUM2012.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2012.Summary.CO2.wasteDisposal))*100).toFixed(2))

            _DataPf5.push(((Alldata.SUM2012.Summary.CO2.industrialProductionProcess/(Alldata.SUM2012.Summary.CO2.energyActivity+Alldata.SUM2012.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2012.Summary.CO2.wasteDisposal))*100).toFixed(2))


            _DataPf5.push(((Alldata.SUM2012.Summary.CO2.wasteDisposal/(Alldata.SUM2012.Summary.CO2.energyActivity+Alldata.SUM2012.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2012.Summary.CO2.wasteDisposal))*100).toFixed(2))


            _DataPf6.push((Alldata.SUM2012.Summary.CH4.energyActivity))
            _DataPf6.push((Alldata.SUM2012.Summary.CH4.agricultureActivity))
            _DataPf6.push((Alldata.SUM2012.Summary.CH4.wasteDisposal))
            _DataPf6.push((Alldata.SUM2012.Summary.CH4.landUseChangeAndForestry))


            _DataPf7.push(((Alldata.SUM2012.Summary.CH4.energyActivity/(Alldata.SUM2012.Summary.CH4.energyActivity+Alldata.SUM2012.Summary.CH4.agricultureActivity
            +Alldata.SUM2012.Summary.CH4.wasteDisposal+Alldata.SUM2012.Summary.CH4.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf7.push(((Alldata.SUM2012.Summary.CH4.agricultureActivity/(Alldata.SUM2012.Summary.CH4.energyActivity+Alldata.SUM2012.Summary.CH4.agricultureActivity
            +Alldata.SUM2012.Summary.CH4.wasteDisposal+Alldata.SUM2012.Summary.CH4.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf7.push(((Alldata.SUM2012.Summary.CH4.wasteDisposal/(Alldata.SUM2012.Summary.CH4.energyActivity+Alldata.SUM2012.Summary.CH4.agricultureActivity
            +Alldata.SUM2012.Summary.CH4.wasteDisposal+Alldata.SUM2012.Summary.CH4.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf7.push(((Alldata.SUM2012.Summary.CH4.landUseChangeAndForestry/(Alldata.SUM2012.Summary.CH4.energyActivity+Alldata.SUM2012.Summary.CH4.agricultureActivity
            +Alldata.SUM2012.Summary.CH4.wasteDisposal+Alldata.SUM2012.Summary.CH4.landUseChangeAndForestry))*100).toFixed(2))



            _DataPf8.push((Alldata.SUM2012.Summary.N2O.energyActivity))
            _DataPf8.push((Alldata.SUM2012.Summary.N2O.industrialProductionProcess))
            _DataPf8.push((Alldata.SUM2012.Summary.N2O.agricultureActivity))
            _DataPf8.push((Alldata.SUM2012.Summary.N2O.wasteDisposal))
            _DataPf8.push((Alldata.SUM2012.Summary.N2O.landUseChangeAndForestry))


            _DataPf9.push(((Alldata.SUM2012.Summary.N2O.energyActivity/(Alldata.SUM2012.Summary.N2O.energyActivity+Alldata.SUM2012.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2012.Summary.N2O.agricultureActivity
            +Alldata.SUM2012.Summary.N2O.wasteDisposal+Alldata.SUM2012.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf9.push(((Alldata.SUM2012.Summary.N2O.industrialProductionProcess/(Alldata.SUM2012.Summary.N2O.energyActivity+Alldata.SUM2012.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2012.Summary.N2O.agricultureActivity
            +Alldata.SUM2012.Summary.N2O.wasteDisposal+Alldata.SUM2012.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf9.push(((Alldata.SUM2012.Summary.N2O.agricultureActivity/(Alldata.SUM2012.Summary.N2O.energyActivity+Alldata.SUM2012.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2012.Summary.N2O.agricultureActivity
            +Alldata.SUM2012.Summary.N2O.wasteDisposal+Alldata.SUM2012.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf9.push(((Alldata.SUM2012.Summary.N2O.wasteDisposal/(Alldata.SUM2012.Summary.N2O.energyActivity+Alldata.SUM2012.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2012.Summary.N2O.agricultureActivity
            +Alldata.SUM2012.Summary.N2O.wasteDisposal+Alldata.SUM2012.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf9.push(((Alldata.SUM2012.Summary.N2O.landUseChangeAndForestry/(Alldata.SUM2012.Summary.N2O.energyActivity+Alldata.SUM2012.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2012.Summary.N2O.agricultureActivity
            +Alldata.SUM2012.Summary.N2O.wasteDisposal+Alldata.SUM2012.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf10.push(Alldata.SUM2012.Collection.fossilFuel.CO2EW)
            _DataPf10.push(Alldata.SUM2012.Collection.biomassBurning.CO2EW)
            _DataPf10.push(Alldata.SUM2012.Collection.coalMiningEscape.CO2EW)
            _DataPf10.push(Alldata.SUM2012.Collection.oilAndGasSystemEscape.CO2EW)
            _DataPf10.push(Alldata.SUM2012.Collection.nonEnergyUse.CO2EW)



            _DataPf11.push(Alldata.SUM2012.Collection.paddyFields.CO2EW)
            _DataPf11.push(Alldata.SUM2012.Collection.land.CO2EW)
            _DataPf11.push(Alldata.SUM2012.Collection.animalIntestinalFermentation.CO2EW)
            _DataPf11.push(Alldata.SUM2012.Collection.animalManureManagement.CO2EW)

            _DataPf12.push(Alldata.SUM2012.Collection.cementProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2012.Collection.limeProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2012.Collection.steelProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2012.Collection.calciumCarbideProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2012.Collection.adipicAcidProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2012.Collection.nitricAcidProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2012.Collection.aluminumProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2012.Collection.magnesiumProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2012.Collection.electricPowerEquipmentProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2012.Collection.otherProductionProcess.CO2EW)

            _DataPf13.push(Alldata.SUM2012.Collection.subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks.CO2EW)
            _DataPf13.push(Alldata.SUM2012.Collection.subtotalOfCarbonEmissionsFromForestConversion.CO2EW)



            _DataPf14.push(Alldata.SUM2012.Collection.solidWaste.CO2EW)
            _DataPf14.push(Alldata.SUM2012.Collection.wasteWater.CO2EW)


            _DataPf15.push(Alldata.SUM2012.Collection.internationalAviation.CO2EW)
            _DataPf15.push(Alldata.SUM2012.Collection.internationalSailing.CO2EW)


            var SUMpfTotal = Alldata.SUM2012.Summary;

            var energyActivityPFT = [
              SUMpfTotal.CO2.energyActivity,
              SUMpfTotal.CH4.energyActivity,
              SUMpfTotal.N2O.energyActivity,
              '-',
              '-',
              '-',
              SUMpfTotal.Total.energyActivity,

            ];

            _Data2.push(energyActivityPFT)

            var industrialProductionProcessPFT = [
              SUMpfTotal.CO2.industrialProductionProcess,
              '-',
              SUMpfTotal.N2O.industrialProductionProcess,
              SUMpfTotal.HFC.industrialProductionProcess,
              SUMpfTotal.PFC.industrialProductionProcess,
              SUMpfTotal.SF6.industrialProductionProcess,
              SUMpfTotal.Total.industrialProductionProcess,

            ];

            _Data2.push(industrialProductionProcessPFT)

            var agricultureActivityPFT = [
              '-',
              SUMpfTotal.CH4.agricultureActivity,
              SUMpfTotal.N2O.agricultureActivity,
              '-',
              '-',
              '-',
              SUMpfTotal.Total.agricultureActivity,

            ];

            _Data2.push(agricultureActivityPFT)

            var wasteDisposalPFT = [
              SUMpfTotal.CO2.wasteDisposal,
              SUMpfTotal.CH4.wasteDisposal,
              SUMpfTotal.N2O.wasteDisposal,
              '-',
              '-',
              '-',
              SUMpfTotal.Total.wasteDisposal,

            ];

            _Data2.push(wasteDisposalPFT)

            var landUseChangeAndForestryPFT = [
              SUMpfTotal.CO2.landUseChangeAndForestry,
              SUMpfTotal.CH4.landUseChangeAndForestry,
              SUMpfTotal.N2O.landUseChangeAndForestry,
              '-',
              '-',
              '-',
              SUMpfTotal.Total.landUseChangeAndForestry,

            ];

            _Data2.push(landUseChangeAndForestryPFT)

            var emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestryPFT = [
              SUMpfTotal.CO2.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.CH4.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.N2O.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.HFC.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.PFC.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.SF6.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.Total.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,

            ];
            _Data2.push(emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestryPFT)

            var emissionOfGreenhouseGases_IncludingLandUseChangeAndForestryPFT = [
              SUMpfTotal.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.HFC.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.PFC.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.SF6.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.Total.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,

            ];

            _Data2.push(emissionOfGreenhouseGases_IncludingLandUseChangeAndForestryPFT)



            var _b3 = []

            for(var i  = 0 ;i <fossilTitle2.length;i++){
              _b3.push({
                key:i,
                name:{

                  value:fossilTitle2[i] ,
                },
                CO:{

                  value:_Data2[i][0] ,
                },
                CH:{

                  value:_Data2[i][1],
                },
                N2O:{

                  value:_Data2[i][2] ,
                },
                HFC:{

                  value:_Data2[i][3],
                },
                HFC1:{

                  value:_Data2[i][4],
                },
                HFC2:{

                  value:_Data2[i][5] ,
                },
                HFC3:{

                  value:_Data2[i][6] ,
                },


              })


            }

            this.setState({data2:_b3})



            var SUMpf = Alldata.SUM2012.SubSummary
            var SUMpf1 = Alldata.SUM2012.Summary.CO2
            var energyActivityPF = [
              SUMpf.energyActivity.CO2, (SUMpf.energyActivity.CO2Proportion*100).toFixed(2)+'%',

              SUMpf1.energyActivity,

              (SUMpf1.energyActivity/(SUMpf1.energyActivity+SUMpf1.industrialProductionProcess+SUMpf1.wasteDisposal)).toFixed(2)+'%',

              SUMpf.energyActivity.CH4,(SUMpf.energyActivity.CH4Proportion*100).toFixed(2)+'%',
              SUMpf.energyActivity.N2O,(SUMpf.energyActivity.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(energyActivityPF);

            var industrialProductionProcessPF = [
              SUMpf.industrialProductionProcess.CO2, (SUMpf.industrialProductionProcess.CO2Proportion*100).toFixed(2)+'%',

              SUMpf1.industrialProductionProcess,

              (SUMpf1.industrialProductionProcess/(SUMpf1.energyActivity+SUMpf1.industrialProductionProcess+SUMpf1.wasteDisposal)).toFixed(2)+'%',

              '','',
              SUMpf.industrialProductionProcess.N2O,(SUMpf.industrialProductionProcess.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(industrialProductionProcessPF);

            var agricultureActivityPF = [
              '', '',

              '',

              '',

              SUMpf.agricultureActivity.CH4,(SUMpf.agricultureActivity.CH4Proportion*100).toFixed(2)+'%',
              SUMpf.agricultureActivity.N2O,(SUMpf.agricultureActivity.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(agricultureActivityPF);


            var wasteDisposalPF = [
              SUMpf.wasteDisposal.CO2, (SUMpf.wasteDisposal.CO2Proportion*100).toFixed(2)+'%',

              SUMpf1.wasteDisposal,

              (SUMpf1.wasteDisposal/(SUMpf1.energyActivity+SUMpf1.industrialProductionProcess+SUMpf1.wasteDisposal)).toFixed(2)+'%',

              SUMpf.wasteDisposal.CH4,(SUMpf.wasteDisposal.CH4Proportion*100).toFixed(2)+'%',
              SUMpf.wasteDisposal.N2O,(SUMpf.wasteDisposal.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(wasteDisposalPF);

            var landUseChangeAndForestryPF = [
              SUMpf.landUseChangeAndForestry.CO2, (SUMpf.landUseChangeAndForestry.CO2Proportion*100).toFixed(2)+'%',

              '',

              '',

              SUMpf.landUseChangeAndForestry.CH4,(SUMpf.landUseChangeAndForestry.CH4Proportion*100).toFixed(2)+'%',
              SUMpf.landUseChangeAndForestry.N2O,(SUMpf.landUseChangeAndForestry.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(landUseChangeAndForestryPF);




            var _b2 = []

            for(var i  = 0 ;i <fossilTitle1.length;i++){
              _b2.push({
                key:i,
                name:{

                  value:fossilTitle1[i] ,
                },
                CO:{

                  value:_Data1[i][0] ,
                },
                CO1:{

                  value:_Data1[i][1],
                },
                NCO:{

                  value:_Data1[i][2] ,
                },
                NCO1:{

                  value:_Data1[i][3],
                },
                CH:{

                  value:_Data1[i][4],
                },
                CH1:{

                  value:_Data1[i][5] ,
                },
                N2O:{

                  value:_Data1[i][6] ,
                },
                N2O1:{

                  value:_Data1[i][7] ,
                },

              })


            }

            this.setState({data1:_b2})

            var SUM12 = Alldata.SUM2012.Collection

            var totalEmissions_IncludingLand_UseChangeAndForestry = [
              (SUM12.totalEnergyActivities.CO2+SUM12.totalIndustrialProductionProcess.CO2+SUM12.totalIndustrialProductionProcess.CO2
              +SUM12.totalLandUseChangeAndForestry.CO2+SUM12.totalWasteDisposal.CO2).toFixed(2),

              (SUM12.totalEnergyActivities.CH4
              +SUM12.totalAgricultureActivity.CH4+SUM12.totalLandUseChangeAndForestry.CH4+SUM12.totalWasteDisposal.CH4).toFixed(2),

              (SUM12.totalEnergyActivities.N2O+SUM12.totalIndustrialProductionProcess.N2O+SUM12.totalIndustrialProductionProcess.N2O
              +SUM12.totalAgricultureActivity.N2O+SUM12.totalLandUseChangeAndForestry.N2O+SUM12.totalWasteDisposal.N2O).toFixed(2),

              (SUM12.totalIndustrialProductionProcess.HFC).toFixed(2),

              (SUM12.totalIndustrialProductionProcess.PFC).toFixed(2),
              (SUM12.totalIndustrialProductionProcess.SF6).toFixed(2),

              (SUM12.totalEnergyActivities.CO2EW+SUM12.totalIndustrialProductionProcess.CO2EW+SUM12.totalIndustrialProductionProcess.CO2EW
              +SUM12.totalAgricultureActivity.CO2EW+SUM12.totalLandUseChangeAndForestry.CO2EW+SUM12.totalWasteDisposal.CO2EW).toFixed(2),


            ]

            _Data.push(totalEmissions_IncludingLand_UseChangeAndForestry);

            var totalEnergyActivities = [
              SUM12.totalEnergyActivities.CO2,
              SUM12.totalEnergyActivities.CH4,
              SUM12.totalEnergyActivities.N2O,
              '-',
              '-',
              '-',
              SUM12.totalEnergyActivities.CO2EW,
            ]

            _Data.push(totalEnergyActivities);


            var fossilFuel = [
              SUM12.fossilFuel.CO2,
              SUM12.fossilFuel.CH4,
              SUM12.fossilFuel.N2O,
              '-',
              '-',
              '-',
              SUM12.fossilFuel.CO2EW,
            ]

            _Data.push(fossilFuel);

            var energyIndustry = [
              SUM12.energyIndustry.CO2,
              '-',
              SUM12.energyIndustry.N2O,
              '-',
              '-',
              '-',
              SUM12.energyIndustry.CO2EW,
            ]
            _Data.push(energyIndustry);

            var agriculture = [
              SUM12.agriculture.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.agriculture.CO2EW,
            ]

            _Data.push(agriculture);

            var industryAndConstruction = [
              SUM12.industryAndConstruction.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.industryAndConstruction.CO2EW,
            ]

            _Data.push(industryAndConstruction);

            var transportation = [
              SUM12.transportation.CO2,
              SUM12.transportation.CH4,
              SUM12.transportation.N2O,
              '-',
              '-',
              '-',
              SUM12.transportation.CO2EW,
            ]

            _Data.push(transportation);

            var serviceIndustry = [
              SUM12.serviceIndustry.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.serviceIndustry.CO2EW,
            ]

            _Data.push(serviceIndustry);

            var residentsLiving = [
              SUM12.residentsLiving.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.residentsLiving.CO2EW,
            ]

            _Data.push(residentsLiving);

            var biomassBurning = [
              '-',
              SUM12.biomassBurning.CH4,
              SUM12.biomassBurning.N2O,
              '-',
              '-',
              '-',
              SUM12.biomassBurning.CO2EW,
            ]

            _Data.push(biomassBurning);

            var coalMiningEscape = [
              '-',
              SUM12.coalMiningEscape.CH4,
              '-',
              '-',
              '-',
              '-',
              SUM12.coalMiningEscape.CO2EW,
            ]

            _Data.push(coalMiningEscape);

            var oilAndGasSystemEscape = [
              '-',
              SUM12.oilAndGasSystemEscape.CH4,
              '-',
              '-',
              '-',
              '-',
              SUM12.oilAndGasSystemEscape.CO2EW,
            ]
            _Data.push(oilAndGasSystemEscape);

            var nonEnergyUse = [

              SUM12.nonEnergyUse.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.nonEnergyUse.CO2EW,
            ]

            _Data.push(nonEnergyUse);


            var totalIndustrialProductionProcess = [

              SUM12.totalIndustrialProductionProcess.CO2,
              '-',
              SUM12.totalIndustrialProductionProcess.N2O,
              SUM12.totalIndustrialProductionProcess.HFC,
              SUM12.totalIndustrialProductionProcess.PFC,
              SUM12.totalIndustrialProductionProcess.SF6,
              SUM12.totalIndustrialProductionProcess.CO2EW,
            ]

            _Data.push(totalIndustrialProductionProcess);

            var cementProductionProcess = [

              SUM12.cementProductionProcess.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.cementProductionProcess.CO2EW,
            ]

            _Data.push(cementProductionProcess);

            var limeProductionProcess = [

              SUM12.limeProductionProcess.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.limeProductionProcess.CO2EW,
            ]

            _Data.push(limeProductionProcess);

            var steelProductionProcess = [

              SUM12.steelProductionProcess.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.steelProductionProcess.CO2EW,
            ]

            _Data.push(steelProductionProcess);

            var calciumCarbideProductionProcess = [

              SUM12.calciumCarbideProductionProcess.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.calciumCarbideProductionProcess.CO2EW,
            ]

            _Data.push(calciumCarbideProductionProcess);

            var adipicAcidProductionProcess = [

              '-',
              '-',
              SUM12.adipicAcidProductionProcess.N2O,
              '-',
              '-',
              '-',
              SUM12.totalIndustrialProductionProcess.CO2EW,
            ]

            _Data.push(adipicAcidProductionProcess);

            var nitricAcidProductionProcess = [

              '-',
              '-',
              SUM12.nitricAcidProductionProcess.N2O,
              '-',
              '-',
              '-',
              SUM12.nitricAcidProductionProcess.CO2EW,
            ]

            _Data.push(nitricAcidProductionProcess);

            var aluminumProductionProcess = [

              '-',
              '-',
              '-',
              '-',
              SUM12.aluminumProductionProcess.PFC,
              '-',
              SUM12.aluminumProductionProcess.CO2EW,
            ]

            _Data.push(aluminumProductionProcess);

            var magnesiumProductionProcess = [

              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.magnesiumProductionProcess.SF6,
              SUM12.magnesiumProductionProcess.CO2EW,
            ]

            _Data.push(magnesiumProductionProcess);

            var electricPowerEquipmentProductionProcess = [

              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.electricPowerEquipmentProductionProcess.SF6,
              SUM12.electricPowerEquipmentProductionProcess.CO2EW,
            ]

            _Data.push(electricPowerEquipmentProductionProcess);

            var otherProductionProcess = [

              '-',
              '-',
              '-',
              SUM12.otherProductionProcess.HFC,
              SUM12.otherProductionProcess.PFC,
              SUM12.otherProductionProcess.SF6,
              SUM12.otherProductionProcess.CO2EW,
            ]

            _Data.push(otherProductionProcess );

            var totalAgricultureActivity = [

              '-',
              SUM12.totalAgricultureActivity.CH4,
              SUM12.totalAgricultureActivity.N2O,
              '-',
              '-',
              '-',
              SUM12.totalAgricultureActivity.CO2EW,
            ]

            _Data.push(totalAgricultureActivity);

            var paddyFields = [

              '-',
              SUM12.paddyFields.CH4,
              '-',
              '-',
              '-',
              '-',
              SUM12.paddyFields.CO2EW,
            ]

            _Data.push(paddyFields);

            var land = [

              '-',
              '-',
              SUM12.land.N2O,
              '-',
              '-',
              '-',
              SUM12.land.CO2EW,
            ]

            _Data.push(land);

            var animalIntestinalFermentation = [

              '-',
              SUM12.animalIntestinalFermentation.CH4,
              '-',
              '-',
              '-',
              '-',
              SUM12.animalIntestinalFermentation.CO2EW,
            ]

            _Data.push(animalIntestinalFermentation);

            var animalManureManagement = [

              '-',
              SUM12.animalManureManagement.CH4,
              SUM12.animalManureManagement.N2O,
              '-',
              '-',
              '-',
              SUM12.animalManureManagement.CO2EW,
            ]

            _Data.push(animalManureManagement);

            var totalLandUseChangeAndForestry = [

              SUM12.totalLandUseChangeAndForestry.CO2,
              SUM12.totalLandUseChangeAndForestry.CH4,
              SUM12.totalLandUseChangeAndForestry.N2O,
              '-',
              '-',
              '-',
              SUM12.totalLandUseChangeAndForestry.CO2EW,
            ]

            _Data.push(totalLandUseChangeAndForestry);

            var subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks = [

              SUM12.subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks.CO2EW,
            ]

            _Data.push(subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks);

            var arborForest = [

              SUM12.arborForest.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.arborForest.CO2EW,
            ]

            _Data.push(arborForest);

            var economicForest = [

              SUM12.economicForest.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.economicForest.CO2EW,
            ]

            _Data.push(economicForest);

            var bambooForest = [

              SUM12.bambooForest.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.bambooForest.CO2EW,
            ]

            _Data.push(bambooForest);

            var countrySpecialIrrigation = [

              SUM12.countrySpecialIrrigation.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.countrySpecialIrrigation.CO2EW,
            ]

            _Data.push(countrySpecialIrrigation);

            var scatteredWoodSurroundedByTreesSparseForest = [

              SUM12.scatteredWoodSurroundedByTreesSparseForest.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.scatteredWoodSurroundedByTreesSparseForest.CO2EW,
            ]

            _Data.push(scatteredWoodSurroundedByTreesSparseForest);

            var liveWoodConsumption = [

              SUM12.liveWoodConsumption.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.liveWoodConsumption.CO2EW,
            ]

            _Data.push(liveWoodConsumption);

            var subtotalOfCarbonEmissionsFromForestConversion = [

              SUM12.subtotalOfCarbonEmissionsFromForestConversion.CO2,
              SUM12.subtotalOfCarbonEmissionsFromForestConversion.CH4,
              SUM12.subtotalOfCarbonEmissionsFromForestConversion.N2O,
              '-',
              '-',
              '-',
              SUM12.subtotalOfCarbonEmissionsFromForestConversion.CO2EW,
            ]

            _Data.push(subtotalOfCarbonEmissionsFromForestConversion);

            var combustionEmission = [

              SUM12.combustionEmission.CO2,
              SUM12.combustionEmission.CH4,
              SUM12.combustionEmission.N2O,
              '-',
              '-',
              '-',
              SUM12.combustionEmission.CO2EW,
            ]

            _Data.push(combustionEmission);

            var decompositionOfEmission = [

              SUM12.decompositionOfEmission.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.decompositionOfEmission.CO2EW,
            ]

            _Data.push(decompositionOfEmission);

            var totalWasteDisposal = [

              SUM12.totalWasteDisposal.CO2,
              SUM12.totalWasteDisposal.CH4,
              SUM12.totalWasteDisposal.N2O,

              '-',
              '-',
              '-',
              SUM12.totalWasteDisposal.CO2EW,
            ]

            _Data.push(totalWasteDisposal);

            var solidWaste = [

              SUM12.solidWaste.CO2,
              SUM12.solidWaste.CH4,
              '-',
              '-',
              '-',
              '-',
              SUM12.solidWaste.CO2EW,
            ]

            _Data.push(solidWaste);


            var wasteWater = [

              '-',
              SUM12.wasteWater.N2O,
              SUM12.wasteWater.CH4,
              '-',
              '-',
              '-',
              SUM12.wasteWater.CO2EW,
            ]

            _Data.push(wasteWater);

            var internationalFuel = [

              SUM12.internationalFuel.CO2,
              SUM12.internationalFuel.CH4,
              SUM12.internationalFuel.N2O,
              '-',
              '-',
              '-',
              SUM12.internationalFuel.CO2EW,
            ]

            _Data.push(internationalFuel);

            var internationalAviation = [

              SUM12.internationalAviation.CO2,
              SUM12.internationalAviation.CH4,
              SUM12.internationalAviation.N2O,
              '-',
              '-',
              '-',
              SUM12.internationalAviation.CO2EW,
            ]

            _Data.push(internationalAviation);

            var internationalSailing = [

              SUM12.internationalSailing.CO2,
              SUM12.internationalSailing.CH4,
              SUM12.internationalSailing.N2O,
              '-',
              '-',
              '-',
              SUM12.internationalSailing.CO2EW,
            ]

            _Data.push(internationalSailing);

            var chargeOutIndirectDischargeOfElectricity = [

              SUM12.chargeOutIndirectDischargeOfElectricity.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.chargeOutIndirectDischargeOfElectricity.CO2EW,
            ]

            _Data.push(chargeOutIndirectDischargeOfElectricity);




            var _b1 = []

            for(var i  = 0 ;i <fossilTitle.length;i++){
              _b1.push({
                key:i,
                name:{

                  value:fossilTitle[i] ,
                },
                CO:{

                  value:_Data[i][0] ,
                },
                CH:{

                  value:_Data[i][1],
                },
                N2O:{

                  value:_Data[i][2],
                },
                HFC:{

                  value:_Data[i][3] ,
                },
                HFC1:{

                  value:_Data[i][4] ,
                },
                HFC2:{

                  value:_Data[i][5] ,
                },
                HFC3:{

                  value:_Data[i][6] ,
                },

              })


            }

            this.setState({data:_b1})


          } else  if (years=='2010')
          {


            if(i=='0') {
              _DataPf = [
                (Alldata.SUM2010.Composition.CO2.proportionOfGreenhouseGases_IncludingLandUseChangeAndForestry * 100).toFixed(2), Alldata.SUM2010.Composition.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry.toFixed(2),
                (Alldata.SUM2010.Composition.CH4.proportionOfGreenhouseGases_IncludingLandUseChangeAndForestry * 100).toFixed(2), Alldata.SUM2010.Composition.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry.toFixed(2),
                (Alldata.SUM2010.Composition.N2O.proportionOfGreenhouseGases_IncludingLandUseChangeAndForestry * 100).toFixed(2), Alldata.SUM2010.Composition.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry.toFixed(2),
                (Alldata.SUM2010.Composition.F.proportionOfGreenhouseGases_IncludingLandUseChangeAndForestry * 100).toFixed(2), Alldata.SUM2010.Composition.F.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry.toFixed(2)]

            }else {

              _DataPf = [
              (Alldata.SUM2010.Composition.CO2.proportionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2010.Composition.CO2.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry.toFixed(2),
              (Alldata.SUM2010.Composition.CH4.proportionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2010.Composition.CH4.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry.toFixed(2),
              (Alldata.SUM2010.Composition.N2O.proportionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2010.Composition.N2O.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry.toFixed(2),
              (Alldata.SUM2010.Composition.F.proportionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2010.Composition.F.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry.toFixed(2)]
            }

            _DataPf1.push((Alldata.SUM2010.Summary.CO2.energyActivity+Alldata.SUM2010.Summary.CH4.energyActivity+Alldata.SUM2010.Summary.N2O.energyActivity).toFixed(2));
            _DataPf1.push((Alldata.SUM2010.Summary.CO2.industrialProductionProcess+Alldata.SUM2010.Summary.HFC.industrialProductionProcess+Alldata.SUM2010.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2010.Summary.PFC.industrialProductionProcess+Alldata.SUM2010.Summary.SF6.industrialProductionProcess).toFixed(2));
            _DataPf1.push((Alldata.SUM2010.Summary.CH4.agricultureActivity+Alldata.SUM2010.Summary.N2O.agricultureActivity).toFixed(2));
            _DataPf1.push((Alldata.SUM2010.Summary.CO2.wasteDisposal+Alldata.SUM2010.Summary.CH4.wasteDisposal+Alldata.SUM2010.Summary.N2O.wasteDisposal).toFixed(2));
            _DataPf1.push((Alldata.SUM2010.Summary.CO2.landUseChangeAndForestry+Alldata.SUM2010.Summary.CH4.landUseChangeAndForestry+Alldata.SUM2010.Summary.N2O.landUseChangeAndForestry).toFixed(2));


            _DataPf2.push((Alldata.SUM2010.Summary.CO2.energyActivity))
            _DataPf2.push((Alldata.SUM2010.Summary.CO2.industrialProductionProcess))
            _DataPf2.push((Alldata.SUM2010.Summary.CO2.wasteDisposal))
            _DataPf2.push((Alldata.SUM2010.Summary.CO2.landUseChangeAndForestry))

            _DataPf3.push(((Alldata.SUM2010.Summary.CO2.energyActivity/(Alldata.SUM2010.Summary.CO2.energyActivity+Alldata.SUM2010.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2010.Summary.CO2.wasteDisposal+Alldata.SUM2010.Summary.CO2.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf3.push(((Alldata.SUM2010.Summary.CO2.industrialProductionProcess/(Alldata.SUM2010.Summary.CO2.energyActivity+Alldata.SUM2010.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2010.Summary.CO2.wasteDisposal+Alldata.SUM2010.Summary.CO2.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf3.push(((Alldata.SUM2010.Summary.CO2.wasteDisposal/(Alldata.SUM2010.Summary.CO2.energyActivity+Alldata.SUM2010.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2010.Summary.CO2.wasteDisposal+Alldata.SUM2010.Summary.CO2.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf3.push(((Alldata.SUM2010.Summary.CO2.landUseChangeAndForestry/(Alldata.SUM2010.Summary.CO2.energyActivity+Alldata.SUM2010.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2010.Summary.CO2.wasteDisposal+Alldata.SUM2010.Summary.CO2.landUseChangeAndForestry))*100).toFixed(2))



            _DataPf4.push((Alldata.SUM2010.Summary.CO2.energyActivity))
            _DataPf4.push((Alldata.SUM2010.Summary.CO2.industrialProductionProcess))
            _DataPf4.push((Alldata.SUM2010.Summary.CO2.wasteDisposal))


            _DataPf5.push(((Alldata.SUM2010.Summary.CO2.energyActivity/(Alldata.SUM2010.Summary.CO2.energyActivity+Alldata.SUM2010.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2010.Summary.CO2.wasteDisposal))*100).toFixed(2))

            _DataPf5.push(((Alldata.SUM2010.Summary.CO2.industrialProductionProcess/(Alldata.SUM2010.Summary.CO2.energyActivity+Alldata.SUM2010.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2010.Summary.CO2.wasteDisposal))*100).toFixed(2))


            _DataPf5.push(((Alldata.SUM2010.Summary.CO2.wasteDisposal/(Alldata.SUM2010.Summary.CO2.energyActivity+Alldata.SUM2010.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2010.Summary.CO2.wasteDisposal))*100).toFixed(2))


            _DataPf6.push((Alldata.SUM2010.Summary.CH4.energyActivity))
            _DataPf6.push((Alldata.SUM2010.Summary.CH4.agricultureActivity))
            _DataPf6.push((Alldata.SUM2010.Summary.CH4.wasteDisposal))
            _DataPf6.push((Alldata.SUM2010.Summary.CH4.landUseChangeAndForestry))


            _DataPf7.push(((Alldata.SUM2010.Summary.CH4.energyActivity/(Alldata.SUM2010.Summary.CH4.energyActivity+Alldata.SUM2010.Summary.CH4.agricultureActivity
            +Alldata.SUM2010.Summary.CH4.wasteDisposal+Alldata.SUM2010.Summary.CH4.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf7.push(((Alldata.SUM2010.Summary.CH4.agricultureActivity/(Alldata.SUM2010.Summary.CH4.energyActivity+Alldata.SUM2010.Summary.CH4.agricultureActivity
            +Alldata.SUM2010.Summary.CH4.wasteDisposal+Alldata.SUM2010.Summary.CH4.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf7.push(((Alldata.SUM2010.Summary.CH4.wasteDisposal/(Alldata.SUM2010.Summary.CH4.energyActivity+Alldata.SUM2010.Summary.CH4.agricultureActivity
            +Alldata.SUM2010.Summary.CH4.wasteDisposal+Alldata.SUM2010.Summary.CH4.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf7.push(((Alldata.SUM2010.Summary.CH4.landUseChangeAndForestry/(Alldata.SUM2010.Summary.CH4.energyActivity+Alldata.SUM2010.Summary.CH4.agricultureActivity
            +Alldata.SUM2010.Summary.CH4.wasteDisposal+Alldata.SUM2010.Summary.CH4.landUseChangeAndForestry))*100).toFixed(2))



            _DataPf8.push((Alldata.SUM2010.Summary.N2O.energyActivity))
            _DataPf8.push((Alldata.SUM2010.Summary.N2O.industrialProductionProcess))
            _DataPf8.push((Alldata.SUM2010.Summary.N2O.agricultureActivity))
            _DataPf8.push((Alldata.SUM2010.Summary.N2O.wasteDisposal))
            _DataPf8.push((Alldata.SUM2010.Summary.N2O.landUseChangeAndForestry))


            _DataPf9.push(((Alldata.SUM2010.Summary.N2O.energyActivity/(Alldata.SUM2010.Summary.N2O.energyActivity+Alldata.SUM2010.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2010.Summary.N2O.agricultureActivity
            +Alldata.SUM2010.Summary.N2O.wasteDisposal+Alldata.SUM2010.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf9.push(((Alldata.SUM2010.Summary.N2O.industrialProductionProcess/(Alldata.SUM2010.Summary.N2O.energyActivity+Alldata.SUM2010.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2010.Summary.N2O.agricultureActivity
            +Alldata.SUM2010.Summary.N2O.wasteDisposal+Alldata.SUM2010.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf9.push(((Alldata.SUM2010.Summary.N2O.agricultureActivity/(Alldata.SUM2010.Summary.N2O.energyActivity+Alldata.SUM2010.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2010.Summary.N2O.agricultureActivity
            +Alldata.SUM2010.Summary.N2O.wasteDisposal+Alldata.SUM2010.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf9.push(((Alldata.SUM2010.Summary.N2O.wasteDisposal/(Alldata.SUM2010.Summary.N2O.energyActivity+Alldata.SUM2010.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2010.Summary.N2O.agricultureActivity
            +Alldata.SUM2010.Summary.N2O.wasteDisposal+Alldata.SUM2010.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf9.push(((Alldata.SUM2010.Summary.N2O.landUseChangeAndForestry/(Alldata.SUM2010.Summary.N2O.energyActivity+Alldata.SUM2010.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2010.Summary.N2O.agricultureActivity
            +Alldata.SUM2010.Summary.N2O.wasteDisposal+Alldata.SUM2010.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))



            _DataPf10.push(Alldata.SUM2010.Collection.fossilFuel.CO2EW)
            _DataPf10.push(Alldata.SUM2010.Collection.biomassBurning.CO2EW)
            _DataPf10.push(Alldata.SUM2010.Collection.coalMiningEscape.CO2EW)
            _DataPf10.push(Alldata.SUM2010.Collection.oilAndGasSystemEscape.CO2EW)
            _DataPf10.push(Alldata.SUM2010.Collection.nonEnergyUse.CO2EW)



            _DataPf11.push(Alldata.SUM2010.Collection.paddyFields.CO2EW)
            _DataPf11.push(Alldata.SUM2010.Collection.land.CO2EW)
            _DataPf11.push(Alldata.SUM2010.Collection.animalIntestinalFermentation.CO2EW)
            _DataPf11.push(Alldata.SUM2010.Collection.animalManureManagement.CO2EW)

            _DataPf12.push(Alldata.SUM2010.Collection.cementProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2010.Collection.limeProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2010.Collection.steelProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2010.Collection.calciumCarbideProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2010.Collection.adipicAcidProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2010.Collection.nitricAcidProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2010.Collection.aluminumProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2010.Collection.magnesiumProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2010.Collection.electricPowerEquipmentProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2010.Collection.otherProductionProcess.CO2EW)


            _DataPf13.push(Alldata.SUM2010.Collection.subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks.CO2EW)
            _DataPf13.push(Alldata.SUM2010.Collection.subtotalOfCarbonEmissionsFromForestConversion.CO2EW)


            _DataPf14.push(Alldata.SUM2010.Collection.solidWaste.CO2EW)
            _DataPf14.push(Alldata.SUM2010.Collection.wasteWater.CO2EW)


            _DataPf15.push(Alldata.SUM2010.Collection.internationalAviation.CO2EW)
            _DataPf15.push(Alldata.SUM2010.Collection.internationalSailing.CO2EW)


            var SUMpfTotal = Alldata.SUM2010.Summary;

            var energyActivityPFT = [
              SUMpfTotal.CO2.energyActivity,
              SUMpfTotal.CH4.energyActivity,
              SUMpfTotal.N2O.energyActivity,
              '-',
              '-',
              '-',
              SUMpfTotal.Total.energyActivity,

            ];

            _Data2.push(energyActivityPFT)

            var industrialProductionProcessPFT = [
              SUMpfTotal.CO2.industrialProductionProcess,
              '-',
              SUMpfTotal.N2O.industrialProductionProcess,
              SUMpfTotal.HFC.industrialProductionProcess,
              SUMpfTotal.PFC.industrialProductionProcess,
              SUMpfTotal.SF6.industrialProductionProcess,
              SUMpfTotal.Total.industrialProductionProcess,

            ];

            _Data2.push(industrialProductionProcessPFT)

            var agricultureActivityPFT = [
              '-',
              SUMpfTotal.CH4.agricultureActivity,
              SUMpfTotal.N2O.agricultureActivity,
              '-',
              '-',
              '-',
              SUMpfTotal.Total.agricultureActivity,

            ];

            _Data2.push(agricultureActivityPFT)

            var wasteDisposalPFT = [
              SUMpfTotal.CO2.wasteDisposal,
              SUMpfTotal.CH4.wasteDisposal,
              SUMpfTotal.N2O.wasteDisposal,
              '-',
              '-',
              '-',
              SUMpfTotal.Total.wasteDisposal,

            ];

            _Data2.push(wasteDisposalPFT)

            var landUseChangeAndForestryPFT = [
              SUMpfTotal.CO2.landUseChangeAndForestry,
              SUMpfTotal.CH4.landUseChangeAndForestry,
              SUMpfTotal.N2O.landUseChangeAndForestry,
              '-',
              '-',
              '-',
              SUMpfTotal.Total.landUseChangeAndForestry,

            ];

            _Data2.push(landUseChangeAndForestryPFT)

            var emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestryPFT = [
              SUMpfTotal.CO2.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.CH4.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.N2O.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.HFC.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.PFC.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.SF6.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.Total.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,

            ];
            _Data2.push(emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestryPFT)

            var emissionOfGreenhouseGases_IncludingLandUseChangeAndForestryPFT = [
              SUMpfTotal.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.HFC.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.PFC.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.SF6.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.Total.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,

            ];

            _Data2.push(emissionOfGreenhouseGases_IncludingLandUseChangeAndForestryPFT)



            var _b3 = []

            for(var i  = 0 ;i <fossilTitle2.length;i++){
              _b3.push({
                key:i,
                name:{

                  value:fossilTitle2[i] ,
                },
                CO:{

                  value:_Data2[i][0] ,
                },
                CH:{

                  value:_Data2[i][1],
                },
                N2O:{

                  value:_Data2[i][2] ,
                },
                HFC:{

                  value:_Data2[i][3],
                },
                HFC1:{

                  value:_Data2[i][4],
                },
                HFC2:{

                  value:_Data2[i][5] ,
                },
                HFC3:{

                  value:_Data2[i][6] ,
                },


              })


            }

            this.setState({data2:_b3})



            var SUMpf = Alldata.SUM2010.SubSummary
            var SUMpf1 = Alldata.SUM2010.Summary.CO2
            var energyActivityPF = [
              SUMpf.energyActivity.CO2, (SUMpf.energyActivity.CO2Proportion*100).toFixed(2)+'%',

              SUMpf1.energyActivity,

              (SUMpf1.energyActivity/(SUMpf1.energyActivity+SUMpf1.industrialProductionProcess+SUMpf1.wasteDisposal)).toFixed(2)+'%',

              SUMpf.energyActivity.CH4,(SUMpf.energyActivity.CH4Proportion*100).toFixed(2)+'%',
              SUMpf.energyActivity.N2O,(SUMpf.energyActivity.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(energyActivityPF);

            var industrialProductionProcessPF = [
              SUMpf.industrialProductionProcess.CO2, (SUMpf.industrialProductionProcess.CO2Proportion*100).toFixed(2)+'%',

              SUMpf1.industrialProductionProcess,

              (SUMpf1.industrialProductionProcess/(SUMpf1.energyActivity+SUMpf1.industrialProductionProcess+SUMpf1.wasteDisposal)).toFixed(2)+'%',

              '','',
              SUMpf.industrialProductionProcess.N2O,(SUMpf.industrialProductionProcess.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(industrialProductionProcessPF);

            var agricultureActivityPF = [
              '', '',

              '',

              '',

              SUMpf.agricultureActivity.CH4,(SUMpf.agricultureActivity.CH4Proportion*100).toFixed(2)+'%',
              SUMpf.agricultureActivity.N2O,(SUMpf.agricultureActivity.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(agricultureActivityPF);


            var wasteDisposalPF = [
              SUMpf.wasteDisposal.CO2, (SUMpf.wasteDisposal.CO2Proportion*100).toFixed(2)+'%',

              SUMpf1.wasteDisposal,

              (SUMpf1.wasteDisposal/(SUMpf1.energyActivity+SUMpf1.industrialProductionProcess+SUMpf1.wasteDisposal)).toFixed(2)+'%',

              SUMpf.wasteDisposal.CH4,(SUMpf.wasteDisposal.CH4Proportion*100).toFixed(2)+'%',
              SUMpf.wasteDisposal.N2O,(SUMpf.wasteDisposal.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(wasteDisposalPF);

            var landUseChangeAndForestryPF = [
              SUMpf.landUseChangeAndForestry.CO2, (SUMpf.landUseChangeAndForestry.CO2Proportion*100).toFixed(2)+'%',

              '',

              '',

              SUMpf.landUseChangeAndForestry.CH4,(SUMpf.landUseChangeAndForestry.CH4Proportion*100).toFixed(2)+'%',
              SUMpf.landUseChangeAndForestry.N2O,(SUMpf.landUseChangeAndForestry.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(landUseChangeAndForestryPF);




            var _b2 = []

            for(var i  = 0 ;i <fossilTitle1.length;i++){
              _b2.push({
                key:i,
                name:{

                  value:fossilTitle1[i] ,
                },
                CO:{

                  value:_Data1[i][0] ,
                },
                CO1:{

                  value:_Data1[i][1],
                },
                NCO:{

                  value:_Data1[i][2] ,
                },
                NCO1:{

                  value:_Data1[i][3],
                },
                CH:{

                  value:_Data1[i][4],
                },
                CH1:{

                  value:_Data1[i][5] ,
                },
                N2O:{

                  value:_Data1[i][6] ,
                },
                N2O1:{

                  value:_Data1[i][7] ,
                },

              })


            }

            this.setState({data1:_b2})

            var SUM12 = Alldata.SUM2010.Collection

            var totalEmissions_IncludingLand_UseChangeAndForestry = [
              (SUM12.totalEnergyActivities.CO2+SUM12.totalIndustrialProductionProcess.CO2+SUM12.totalIndustrialProductionProcess.CO2
              +SUM12.totalLandUseChangeAndForestry.CO2+SUM12.totalWasteDisposal.CO2).toFixed(2),

              (SUM12.totalEnergyActivities.CH4
              +SUM12.totalAgricultureActivity.CH4+SUM12.totalLandUseChangeAndForestry.CH4+SUM12.totalWasteDisposal.CH4).toFixed(2),

              (SUM12.totalEnergyActivities.N2O+SUM12.totalIndustrialProductionProcess.N2O+SUM12.totalIndustrialProductionProcess.N2O
              +SUM12.totalAgricultureActivity.N2O+SUM12.totalLandUseChangeAndForestry.N2O+SUM12.totalWasteDisposal.N2O).toFixed(2),

              (SUM12.totalIndustrialProductionProcess.HFC).toFixed(2),

              (SUM12.totalIndustrialProductionProcess.PFC).toFixed(2),
              (SUM12.totalIndustrialProductionProcess.SF6).toFixed(2),

              (SUM12.totalEnergyActivities.CO2EW+SUM12.totalIndustrialProductionProcess.CO2EW+SUM12.totalIndustrialProductionProcess.CO2EW
              +SUM12.totalAgricultureActivity.CO2EW+SUM12.totalLandUseChangeAndForestry.CO2EW+SUM12.totalWasteDisposal.CO2EW).toFixed(2),


            ]

            _Data.push(totalEmissions_IncludingLand_UseChangeAndForestry);

            var totalEnergyActivities = [
              SUM12.totalEnergyActivities.CO2,
              SUM12.totalEnergyActivities.CH4,
              SUM12.totalEnergyActivities.N2O,
              '-',
              '-',
              '-',
              SUM12.totalEnergyActivities.CO2EW,
            ]

            _Data.push(totalEnergyActivities);


            var fossilFuel = [
              SUM12.fossilFuel.CO2,
              SUM12.fossilFuel.CH4,
              SUM12.fossilFuel.N2O,
              '-',
              '-',
              '-',
              SUM12.fossilFuel.CO2EW,
            ]

            _Data.push(fossilFuel);

            var energyIndustry = [
              SUM12.energyIndustry.CO2,
              '-',
              SUM12.energyIndustry.N2O,
              '-',
              '-',
              '-',
              SUM12.energyIndustry.CO2EW,
            ]
            _Data.push(energyIndustry);

            var agriculture = [
              SUM12.agriculture.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.agriculture.CO2EW,
            ]

            _Data.push(agriculture);

            var industryAndConstruction = [
              SUM12.industryAndConstruction.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.industryAndConstruction.CO2EW,
            ]

            _Data.push(industryAndConstruction);

            var transportation = [
              SUM12.transportation.CO2,
              SUM12.transportation.CH4,
              SUM12.transportation.N2O,
              '-',
              '-',
              '-',
              SUM12.transportation.CO2EW,
            ]

            _Data.push(transportation);

            var serviceIndustry = [
              SUM12.serviceIndustry.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.serviceIndustry.CO2EW,
            ]

            _Data.push(serviceIndustry);

            var residentsLiving = [
              SUM12.residentsLiving.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.residentsLiving.CO2EW,
            ]

            _Data.push(residentsLiving);

            var biomassBurning = [
              '-',
              SUM12.biomassBurning.CH4,
              SUM12.biomassBurning.N2O,
              '-',
              '-',
              '-',
              SUM12.biomassBurning.CO2EW,
            ]

            _Data.push(biomassBurning);

            var coalMiningEscape = [
              '-',
              SUM12.coalMiningEscape.CH4,
              '-',
              '-',
              '-',
              '-',
              SUM12.coalMiningEscape.CO2EW,
            ]

            _Data.push(coalMiningEscape);

            var oilAndGasSystemEscape = [
              '-',
              SUM12.oilAndGasSystemEscape.CH4,
              '-',
              '-',
              '-',
              '-',
              SUM12.oilAndGasSystemEscape.CO2EW,
            ]
            _Data.push(oilAndGasSystemEscape);

            var nonEnergyUse = [

              SUM12.nonEnergyUse.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.nonEnergyUse.CO2EW,
            ]

            _Data.push(nonEnergyUse);


            var totalIndustrialProductionProcess = [

              SUM12.totalIndustrialProductionProcess.CO2,
              '-',
              SUM12.totalIndustrialProductionProcess.N2O,
              SUM12.totalIndustrialProductionProcess.HFC,
              SUM12.totalIndustrialProductionProcess.PFC,
              SUM12.totalIndustrialProductionProcess.SF6,
              SUM12.totalIndustrialProductionProcess.CO2EW,
            ]

            _Data.push(totalIndustrialProductionProcess);

            var cementProductionProcess = [

              SUM12.cementProductionProcess.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.cementProductionProcess.CO2EW,
            ]

            _Data.push(cementProductionProcess);

            var limeProductionProcess = [

              SUM12.limeProductionProcess.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.limeProductionProcess.CO2EW,
            ]

            _Data.push(limeProductionProcess);

            var steelProductionProcess = [

              SUM12.steelProductionProcess.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.steelProductionProcess.CO2EW,
            ]

            _Data.push(steelProductionProcess);

            var calciumCarbideProductionProcess = [

              SUM12.calciumCarbideProductionProcess.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.calciumCarbideProductionProcess.CO2EW,
            ]

            _Data.push(calciumCarbideProductionProcess);

            var adipicAcidProductionProcess = [

              '-',
              '-',
              SUM12.adipicAcidProductionProcess.N2O,
              '-',
              '-',
              '-',
              SUM12.totalIndustrialProductionProcess.CO2EW,
            ]

            _Data.push(adipicAcidProductionProcess);

            var nitricAcidProductionProcess = [

              '-',
              '-',
              SUM12.nitricAcidProductionProcess.N2O,
              '-',
              '-',
              '-',
              SUM12.nitricAcidProductionProcess.CO2EW,
            ]

            _Data.push(nitricAcidProductionProcess);

            var aluminumProductionProcess = [

              '-',
              '-',
              '-',
              '-',
              SUM12.aluminumProductionProcess.PFC,
              '-',
              SUM12.aluminumProductionProcess.CO2EW,
            ]

            _Data.push(aluminumProductionProcess);

            var magnesiumProductionProcess = [

              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.magnesiumProductionProcess.SF6,
              SUM12.magnesiumProductionProcess.CO2EW,
            ]

            _Data.push(magnesiumProductionProcess);

            var electricPowerEquipmentProductionProcess = [

              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.electricPowerEquipmentProductionProcess.SF6,
              SUM12.electricPowerEquipmentProductionProcess.CO2EW,
            ]

            _Data.push(electricPowerEquipmentProductionProcess);

            var otherProductionProcess = [

              '-',
              '-',
              '-',
              SUM12.otherProductionProcess.HFC,
              SUM12.otherProductionProcess.PFC,
              SUM12.otherProductionProcess.SF6,
              SUM12.otherProductionProcess.CO2EW,
            ]

            _Data.push(otherProductionProcess );

            var totalAgricultureActivity = [

              '-',
              SUM12.totalAgricultureActivity.CH4,
              SUM12.totalAgricultureActivity.N2O,
              '-',
              '-',
              '-',
              SUM12.totalAgricultureActivity.CO2EW,
            ]

            _Data.push(totalAgricultureActivity);

            var paddyFields = [

              '-',
              SUM12.paddyFields.CH4,
              '-',
              '-',
              '-',
              '-',
              SUM12.paddyFields.CO2EW,
            ]

            _Data.push(paddyFields);

            var land = [

              '-',
              '-',
              SUM12.land.N2O,
              '-',
              '-',
              '-',
              SUM12.land.CO2EW,
            ]

            _Data.push(land);

            var animalIntestinalFermentation = [

              '-',
              SUM12.animalIntestinalFermentation.CH4,
              '-',
              '-',
              '-',
              '-',
              SUM12.animalIntestinalFermentation.CO2EW,
            ]

            _Data.push(animalIntestinalFermentation);

            var animalManureManagement = [

              '-',
              SUM12.animalManureManagement.CH4,
              SUM12.animalManureManagement.N2O,
              '-',
              '-',
              '-',
              SUM12.animalManureManagement.CO2EW,
            ]

            _Data.push(animalManureManagement);

            var totalLandUseChangeAndForestry = [

              SUM12.totalLandUseChangeAndForestry.CO2,
              SUM12.totalLandUseChangeAndForestry.CH4,
              SUM12.totalLandUseChangeAndForestry.N2O,
              '-',
              '-',
              '-',
              SUM12.totalLandUseChangeAndForestry.CO2EW,
            ]

            _Data.push(totalLandUseChangeAndForestry);

            var subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks = [

              SUM12.subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks.CO2EW,
            ]

            _Data.push(subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks);

            var arborForest = [

              SUM12.arborForest.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.arborForest.CO2EW,
            ]

            _Data.push(arborForest);

            var economicForest = [

              SUM12.economicForest.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.economicForest.CO2EW,
            ]

            _Data.push(economicForest);

            var bambooForest = [

              SUM12.bambooForest.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.bambooForest.CO2EW,
            ]

            _Data.push(bambooForest);

            var countrySpecialIrrigation = [

              SUM12.countrySpecialIrrigation.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.countrySpecialIrrigation.CO2EW,
            ]

            _Data.push(countrySpecialIrrigation);

            var scatteredWoodSurroundedByTreesSparseForest = [

              SUM12.scatteredWoodSurroundedByTreesSparseForest.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.scatteredWoodSurroundedByTreesSparseForest.CO2EW,
            ]

            _Data.push(scatteredWoodSurroundedByTreesSparseForest);

            var liveWoodConsumption = [

              SUM12.liveWoodConsumption.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.liveWoodConsumption.CO2EW,
            ]

            _Data.push(liveWoodConsumption);

            var subtotalOfCarbonEmissionsFromForestConversion = [

              SUM12.subtotalOfCarbonEmissionsFromForestConversion.CO2,
              SUM12.subtotalOfCarbonEmissionsFromForestConversion.CH4,
              SUM12.subtotalOfCarbonEmissionsFromForestConversion.N2O,
              '-',
              '-',
              '-',
              SUM12.subtotalOfCarbonEmissionsFromForestConversion.CO2EW,
            ]

            _Data.push(subtotalOfCarbonEmissionsFromForestConversion);

            var combustionEmission = [

              SUM12.combustionEmission.CO2,
              SUM12.combustionEmission.CH4,
              SUM12.combustionEmission.N2O,
              '-',
              '-',
              '-',
              SUM12.combustionEmission.CO2EW,
            ]

            _Data.push(combustionEmission);

            var decompositionOfEmission = [

              SUM12.decompositionOfEmission.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.decompositionOfEmission.CO2EW,
            ]

            _Data.push(decompositionOfEmission);

            var totalWasteDisposal = [

              SUM12.totalWasteDisposal.CO2,
              SUM12.totalWasteDisposal.CH4,
              SUM12.totalWasteDisposal.N2O,

              '-',
              '-',
              '-',
              SUM12.totalWasteDisposal.CO2EW,
            ]

            _Data.push(totalWasteDisposal);

            var solidWaste = [

              SUM12.solidWaste.CO2,
              SUM12.solidWaste.CH4,
              '-',
              '-',
              '-',
              '-',
              SUM12.solidWaste.CO2EW,
            ]

            _Data.push(solidWaste);


            var wasteWater = [

              '-',
              SUM12.wasteWater.N2O,
              SUM12.wasteWater.CH4,
              '-',
              '-',
              '-',
              SUM12.wasteWater.CO2EW,
            ]

            _Data.push(wasteWater);

            var internationalFuel = [

              SUM12.internationalFuel.CO2,
              SUM12.internationalFuel.CH4,
              SUM12.internationalFuel.N2O,
              '-',
              '-',
              '-',
              SUM12.internationalFuel.CO2EW,
            ]

            _Data.push(internationalFuel);

            var internationalAviation = [

              SUM12.internationalAviation.CO2,
              SUM12.internationalAviation.CH4,
              SUM12.internationalAviation.N2O,
              '-',
              '-',
              '-',
              SUM12.internationalAviation.CO2EW,
            ]

            _Data.push(internationalAviation);

            var internationalSailing = [

              SUM12.internationalSailing.CO2,
              SUM12.internationalSailing.CH4,
              SUM12.internationalSailing.N2O,
              '-',
              '-',
              '-',
              SUM12.internationalSailing.CO2EW,
            ]

            _Data.push(internationalSailing);

            var chargeOutIndirectDischargeOfElectricity = [

              SUM12.chargeOutIndirectDischargeOfElectricity.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.chargeOutIndirectDischargeOfElectricity.CO2EW,
            ]

            _Data.push(chargeOutIndirectDischargeOfElectricity);




            var _b1 = []

            for(var i  = 0 ;i <fossilTitle.length;i++){
              _b1.push({
                key:i,
                name:{

                  value:fossilTitle[i] ,
                },
                CO:{

                  value:_Data[i][0] ,
                },
                CH:{

                  value:_Data[i][1],
                },
                N2O:{

                  value:_Data[i][2],
                },
                HFC:{

                  value:_Data[i][3] ,
                },
                HFC1:{

                  value:_Data[i][4] ,
                },
                HFC2:{

                  value:_Data[i][5] ,
                },
                HFC3:{

                  value:_Data[i][6] ,
                },

              })


            }

            this.setState({data:_b1})

          }else if (years=='2005')
          {

            if(i=='0') {
              _DataPf = [
                (Alldata.SUM2005.Composition.CO2.proportionOfGreenhouseGases_IncludingLandUseChangeAndForestry * 100).toFixed(2), (Alldata.SUM2005.Composition.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry).toFixed(2),
                (Alldata.SUM2005.Composition.CH4.proportionOfGreenhouseGases_IncludingLandUseChangeAndForestry * 100).toFixed(2), Alldata.SUM2005.Composition.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry.toFixed(2),
                (Alldata.SUM2005.Composition.N2O.proportionOfGreenhouseGases_IncludingLandUseChangeAndForestry * 100).toFixed(2), Alldata.SUM2005.Composition.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry.toFixed(2),
                (Alldata.SUM2005.Composition.F.proportionOfGreenhouseGases_IncludingLandUseChangeAndForestry * 100).toFixed(2), Alldata.SUM2005.Composition.F.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry.toFixed(2)]

            }else {

              _DataPf = [
              (Alldata.SUM2005.Composition.CO2.proportionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2005.Composition.CO2.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry.toFixed(2),
              (Alldata.SUM2005.Composition.CH4.proportionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2005.Composition.CH4.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry.toFixed(2),
              (Alldata.SUM2005.Composition.N2O.proportionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2005.Composition.N2O.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry.toFixed(2),
              (Alldata.SUM2005.Composition.F.proportionOfGreenhouseGases_ExcludingLandUseChangeAndForestry*100).toFixed(2),Alldata.SUM2005.Composition.F.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry.toFixed(2)]

            }

            _DataPf1.push((Alldata.SUM2005.Summary.CO2.energyActivity+Alldata.SUM2005.Summary.CH4.energyActivity+Alldata.SUM2005.Summary.N2O.energyActivity).toFixed(2))
            _DataPf1.push((Alldata.SUM2005.Summary.CO2.industrialProductionProcess+Alldata.SUM2005.Summary.HFC.industrialProductionProcess+Alldata.SUM2005.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2005.Summary.PFC.industrialProductionProcess+Alldata.SUM2005.Summary.SF6.industrialProductionProcess).toFixed(2))
            _DataPf1.push((Alldata.SUM2005.Summary.CH4.agricultureActivity+Alldata.SUM2005.Summary.N2O.agricultureActivity).toFixed(2))
            _DataPf1.push((Alldata.SUM2005.Summary.CO2.wasteDisposal+Alldata.SUM2005.Summary.CH4.wasteDisposal+Alldata.SUM2005.Summary.N2O.wasteDisposal).toFixed(2))
            _DataPf1.push((Alldata.SUM2005.Summary.CO2.landUseChangeAndForestry+Alldata.SUM2005.Summary.CH4.landUseChangeAndForestry+Alldata.SUM2005.Summary.N2O.landUseChangeAndForestry).toFixed(2))


            _DataPf2.push((Alldata.SUM2005.Summary.CO2.energyActivity))
            _DataPf2.push((Alldata.SUM2005.Summary.CO2.industrialProductionProcess))
            _DataPf2.push((Alldata.SUM2005.Summary.CO2.wasteDisposal))
            _DataPf2.push((Alldata.SUM2005.Summary.CO2.landUseChangeAndForestry))

            _DataPf3.push(((Alldata.SUM2005.Summary.CO2.energyActivity/(Alldata.SUM2005.Summary.CO2.energyActivity+Alldata.SUM2005.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2010.Summary.CO2.wasteDisposal+Alldata.SUM2010.Summary.CO2.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf3.push(((Alldata.SUM2005.Summary.CO2.industrialProductionProcess/(Alldata.SUM2005.Summary.CO2.energyActivity+Alldata.SUM2005.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2005.Summary.CO2.wasteDisposal+Alldata.SUM2005.Summary.CO2.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf3.push(((Alldata.SUM2005.Summary.CO2.wasteDisposal/(Alldata.SUM2005.Summary.CO2.energyActivity+Alldata.SUM2005.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2005.Summary.CO2.wasteDisposal+Alldata.SUM2005.Summary.CO2.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf3.push(((Alldata.SUM2005.Summary.CO2.landUseChangeAndForestry/(Alldata.SUM2005.Summary.CO2.energyActivity+Alldata.SUM2005.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2005.Summary.CO2.wasteDisposal+Alldata.SUM2005.Summary.CO2.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf4.push((Alldata.SUM2005.Summary.CO2.energyActivity))
            _DataPf4.push((Alldata.SUM2005.Summary.CO2.industrialProductionProcess))
            _DataPf4.push((Alldata.SUM2005.Summary.CO2.wasteDisposal))


            _DataPf5.push(((Alldata.SUM2005.Summary.CO2.energyActivity/(Alldata.SUM2005.Summary.CO2.energyActivity+Alldata.SUM2005.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2012.Summary.CO2.wasteDisposal))*100).toFixed(2))

            _DataPf5.push(((Alldata.SUM2005.Summary.CO2.industrialProductionProcess/(Alldata.SUM2005.Summary.CO2.energyActivity+Alldata.SUM2005.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2005.Summary.CO2.wasteDisposal))*100).toFixed(2))


            _DataPf5.push(((Alldata.SUM2005.Summary.CO2.wasteDisposal/(Alldata.SUM2005.Summary.CO2.energyActivity+Alldata.SUM2005.Summary.CO2.industrialProductionProcess
            +Alldata.SUM2005.Summary.CO2.wasteDisposal))*100).toFixed(2))



            _DataPf6.push((Alldata.SUM2005.Summary.CH4.energyActivity))
            _DataPf6.push((Alldata.SUM2005.Summary.CH4.agricultureActivity))
            _DataPf6.push((Alldata.SUM2005.Summary.CH4.wasteDisposal))
            _DataPf6.push((Alldata.SUM2005.Summary.CH4.landUseChangeAndForestry))


            _DataPf7.push(((Alldata.SUM2005.Summary.CH4.energyActivity/(Alldata.SUM2005.Summary.CH4.energyActivity+Alldata.SUM2005.Summary.CH4.agricultureActivity
            +Alldata.SUM2005.Summary.CH4.wasteDisposal+Alldata.SUM2005.Summary.CH4.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf7.push(((Alldata.SUM2005.Summary.CH4.agricultureActivity/(Alldata.SUM2005.Summary.CH4.energyActivity+Alldata.SUM2005.Summary.CH4.agricultureActivity
            +Alldata.SUM2005.Summary.CH4.wasteDisposal+Alldata.SUM2005.Summary.CH4.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf7.push(((Alldata.SUM2005.Summary.CH4.wasteDisposal/(Alldata.SUM2005.Summary.CH4.energyActivity+Alldata.SUM2005.Summary.CH4.agricultureActivity
            +Alldata.SUM2005.Summary.CH4.wasteDisposal+Alldata.SUM2005.Summary.CH4.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf7.push(((Alldata.SUM2005.Summary.CH4.landUseChangeAndForestry/(Alldata.SUM2005.Summary.CH4.energyActivity+Alldata.SUM2005.Summary.CH4.agricultureActivity
            +Alldata.SUM2005.Summary.CH4.wasteDisposal+Alldata.SUM2005.Summary.CH4.landUseChangeAndForestry))*100).toFixed(2))




            _DataPf8.push((Alldata.SUM2005.Summary.N2O.energyActivity))
            _DataPf8.push((Alldata.SUM2005.Summary.N2O.industrialProductionProcess))
            _DataPf8.push((Alldata.SUM2005.Summary.N2O.agricultureActivity))
            _DataPf8.push((Alldata.SUM2005.Summary.N2O.wasteDisposal))
            _DataPf8.push((Alldata.SUM2005.Summary.N2O.landUseChangeAndForestry))


            _DataPf9.push(((Alldata.SUM2005.Summary.N2O.energyActivity/(Alldata.SUM2005.Summary.N2O.energyActivity+Alldata.SUM2005.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2005.Summary.N2O.agricultureActivity
            +Alldata.SUM2005.Summary.N2O.wasteDisposal+Alldata.SUM2005.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf9.push(((Alldata.SUM2005.Summary.N2O.industrialProductionProcess/(Alldata.SUM2005.Summary.N2O.energyActivity+Alldata.SUM2005.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2005.Summary.N2O.agricultureActivity
            +Alldata.SUM2005.Summary.N2O.wasteDisposal+Alldata.SUM2005.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf9.push(((Alldata.SUM2005.Summary.N2O.agricultureActivity/(Alldata.SUM2005.Summary.N2O.energyActivity+Alldata.SUM2005.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2005.Summary.N2O.agricultureActivity
            +Alldata.SUM2005.Summary.N2O.wasteDisposal+Alldata.SUM2005.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))


            _DataPf9.push(((Alldata.SUM2005.Summary.N2O.wasteDisposal/(Alldata.SUM2005.Summary.N2O.energyActivity+Alldata.SUM2005.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2005.Summary.N2O.agricultureActivity
            +Alldata.SUM2005.Summary.N2O.wasteDisposal+Alldata.SUM2005.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf9.push(((Alldata.SUM2005.Summary.N2O.landUseChangeAndForestry/(Alldata.SUM2005.Summary.N2O.energyActivity+Alldata.SUM2005.Summary.N2O.industrialProductionProcess
            +Alldata.SUM2005.Summary.N2O.agricultureActivity
            +Alldata.SUM2005.Summary.N2O.wasteDisposal+Alldata.SUM2005.Summary.N2O.landUseChangeAndForestry))*100).toFixed(2))

            _DataPf10.push(Alldata.SUM2005.Collection.fossilFuel.CO2EW)
            _DataPf10.push(Alldata.SUM2005.Collection.biomassBurning.CO2EW)
            _DataPf10.push(Alldata.SUM2005.Collection.coalMiningEscape.CO2EW)
            _DataPf10.push(Alldata.SUM2005.Collection.oilAndGasSystemEscape.CO2EW)
            _DataPf10.push(Alldata.SUM2005.Collection.nonEnergyUse.CO2EW)



            _DataPf11.push(Alldata.SUM2005.Collection.paddyFields.CO2EW)
            _DataPf11.push(Alldata.SUM2005.Collection.land.CO2EW)
            _DataPf11.push(Alldata.SUM2005.Collection.animalIntestinalFermentation.CO2EW)
            _DataPf11.push(Alldata.SUM2005.Collection.animalManureManagement.CO2EW)

            _DataPf12.push(Alldata.SUM2005.Collection.cementProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2005.Collection.limeProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2005.Collection.steelProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2005.Collection.calciumCarbideProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2005.Collection.adipicAcidProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2005.Collection.nitricAcidProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2005.Collection.aluminumProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2005.Collection.magnesiumProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2005.Collection.electricPowerEquipmentProductionProcess.CO2EW)
            _DataPf12.push(Alldata.SUM2005.Collection.otherProductionProcess.CO2EW)


            _DataPf13.push(Alldata.SUM2005.Collection.subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks.CO2EW)
            _DataPf13.push(Alldata.SUM2005.Collection.subtotalOfCarbonEmissionsFromForestConversion.CO2EW)


            _DataPf14.push(Alldata.SUM2005.Collection.solidWaste.CO2EW)
            _DataPf14.push(Alldata.SUM2005.Collection.wasteWater.CO2EW)


          _DataPf15.push(Alldata.SUM2005.Collection.internationalAviation.CO2EW)
            _DataPf15.push(Alldata.SUM2005.Collection.internationalSailing.CO2EW)


            var SUMpfTotal = Alldata.SUM2005.Summary;

            var energyActivityPFT = [
              SUMpfTotal.CO2.energyActivity,
              SUMpfTotal.CH4.energyActivity,
              SUMpfTotal.N2O.energyActivity,
              '-',
              '-',
              '-',
              SUMpfTotal.Total.energyActivity,

            ];

            _Data2.push(energyActivityPFT)

            var industrialProductionProcessPFT = [
              SUMpfTotal.CO2.industrialProductionProcess,
              '-',
              SUMpfTotal.N2O.industrialProductionProcess,
              SUMpfTotal.HFC.industrialProductionProcess,
              SUMpfTotal.PFC.industrialProductionProcess,
              SUMpfTotal.SF6.industrialProductionProcess,
              SUMpfTotal.Total.industrialProductionProcess,

            ];

            _Data2.push(industrialProductionProcessPFT)

            var agricultureActivityPFT = [
              '-',
              SUMpfTotal.CH4.agricultureActivity,
              SUMpfTotal.N2O.agricultureActivity,
              '-',
              '-',
              '-',
              SUMpfTotal.Total.agricultureActivity,

            ];

            _Data2.push(agricultureActivityPFT)

            var wasteDisposalPFT = [
              SUMpfTotal.CO2.wasteDisposal,
              SUMpfTotal.CH4.wasteDisposal,
              SUMpfTotal.N2O.wasteDisposal,
              '-',
              '-',
              '-',
              SUMpfTotal.Total.wasteDisposal,

            ];

            _Data2.push(wasteDisposalPFT)

            var landUseChangeAndForestryPFT = [
              SUMpfTotal.CO2.landUseChangeAndForestry,
              SUMpfTotal.CH4.landUseChangeAndForestry,
              SUMpfTotal.N2O.landUseChangeAndForestry,
              '-',
              '-',
              '-',
              SUMpfTotal.Total.landUseChangeAndForestry,

            ];

            _Data2.push(landUseChangeAndForestryPFT)

            var emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestryPFT = [
              SUMpfTotal.CO2.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.CH4.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.N2O.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.HFC.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.PFC.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.SF6.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,
              SUMpfTotal.Total.emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestry,

            ];
            _Data2.push(emissionOfGreenhouseGases_ExcludingLandUseChangeAndForestryPFT)

            var emissionOfGreenhouseGases_IncludingLandUseChangeAndForestryPFT = [
              SUMpfTotal.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.HFC.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.PFC.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.SF6.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,
              SUMpfTotal.Total.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry,

            ];

            _Data2.push(emissionOfGreenhouseGases_IncludingLandUseChangeAndForestryPFT)



            var _b3 = []

            for(var i  = 0 ;i <fossilTitle2.length;i++){
              _b3.push({
                key:i,
                name:{

                  value:fossilTitle2[i] ,
                },
                CO:{

                  value:_Data2[i][0] ,
                },
                CH:{

                  value:_Data2[i][1],
                },
                N2O:{

                  value:_Data2[i][2] ,
                },
                HFC:{

                  value:_Data2[i][3],
                },
                HFC1:{

                  value:_Data2[i][4],
                },
                HFC2:{

                  value:_Data2[i][5] ,
                },
                HFC3:{

                  value:_Data2[i][6] ,
                },


              })


            }

            this.setState({data2:_b3})


            var SUMpf = Alldata.SUM2005.SubSummary
            var SUMpf1 = Alldata.SUM2005.Summary.CO2
            var energyActivityPF = [
              SUMpf.energyActivity.CO2, (SUMpf.energyActivity.CO2Proportion*100).toFixed(2)+'%',

              SUMpf1.energyActivity,

              (SUMpf1.energyActivity/(SUMpf1.energyActivity+SUMpf1.industrialProductionProcess+SUMpf1.wasteDisposal)).toFixed(2)+'%',

              SUMpf.energyActivity.CH4,(SUMpf.energyActivity.CH4Proportion*100).toFixed(2)+'%',
              SUMpf.energyActivity.N2O,(SUMpf.energyActivity.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(energyActivityPF);

            var industrialProductionProcessPF = [
              SUMpf.industrialProductionProcess.CO2, (SUMpf.industrialProductionProcess.CO2Proportion*100).toFixed(2)+'%',

              SUMpf1.industrialProductionProcess,

              (SUMpf1.industrialProductionProcess/(SUMpf1.energyActivity+SUMpf1.industrialProductionProcess+SUMpf1.wasteDisposal)).toFixed(2)+'%',

              '','',
              SUMpf.industrialProductionProcess.N2O,(SUMpf.industrialProductionProcess.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(industrialProductionProcessPF);

            var agricultureActivityPF = [
              '', '',

              '',

              '',

              SUMpf.agricultureActivity.CH4,(SUMpf.agricultureActivity.CH4Proportion*100).toFixed(2)+'%',
              SUMpf.agricultureActivity.N2O,(SUMpf.agricultureActivity.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(agricultureActivityPF);


            var wasteDisposalPF = [
              SUMpf.wasteDisposal.CO2, (SUMpf.wasteDisposal.CO2Proportion*100).toFixed(2)+'%',

              SUMpf1.wasteDisposal,

              (SUMpf1.wasteDisposal/(SUMpf1.energyActivity+SUMpf1.industrialProductionProcess+SUMpf1.wasteDisposal)).toFixed(2)+'%',

              SUMpf.wasteDisposal.CH4,(SUMpf.wasteDisposal.CH4Proportion*100).toFixed(2)+'%',
              SUMpf.wasteDisposal.N2O,(SUMpf.wasteDisposal.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(wasteDisposalPF);

            var landUseChangeAndForestryPF = [
              SUMpf.landUseChangeAndForestry.CO2, (SUMpf.landUseChangeAndForestry.CO2Proportion*100).toFixed(2)+'%',

              '',

              '',

              SUMpf.landUseChangeAndForestry.CH4,(SUMpf.landUseChangeAndForestry.CH4Proportion*100).toFixed(2)+'%',
              SUMpf.landUseChangeAndForestry.N2O,(SUMpf.landUseChangeAndForestry.N2OProportion*100).toFixed(2)+'%'
            ]

            _Data1.push(landUseChangeAndForestryPF);




            var _b2 = []

            for(var i  = 0 ;i <fossilTitle1.length;i++){
              _b2.push({
                key:i,
                name:{

                  value:fossilTitle1[i] ,
                },
                CO:{

                  value:_Data1[i][0] ,
                },
                CO1:{

                  value:_Data1[i][1],
                },
                NCO:{

                  value:_Data1[i][2] ,
                },
                NCO1:{

                  value:_Data1[i][3],
                },
                CH:{

                  value:_Data1[i][4],
                },
                CH1:{

                  value:_Data1[i][5] ,
                },
                N2O:{

                  value:_Data1[i][6] ,
                },
                N2O1:{

                  value:_Data1[i][7] ,
                },

              })


            }

            this.setState({data1:_b2})

            var SUM12 = Alldata.SUM2005.Collection

            var totalEmissions_IncludingLand_UseChangeAndForestry = [
              (SUM12.totalEnergyActivities.CO2+SUM12.totalIndustrialProductionProcess.CO2+SUM12.totalIndustrialProductionProcess.CO2
              +SUM12.totalLandUseChangeAndForestry.CO2+SUM12.totalWasteDisposal.CO2).toFixed(2),

              (SUM12.totalEnergyActivities.CH4
              +SUM12.totalAgricultureActivity.CH4+SUM12.totalLandUseChangeAndForestry.CH4+SUM12.totalWasteDisposal.CH4).toFixed(2),

              (SUM12.totalEnergyActivities.N2O+SUM12.totalIndustrialProductionProcess.N2O+SUM12.totalIndustrialProductionProcess.N2O
              +SUM12.totalAgricultureActivity.N2O+SUM12.totalLandUseChangeAndForestry.N2O+SUM12.totalWasteDisposal.N2O).toFixed(2),

              (SUM12.totalIndustrialProductionProcess.HFC).toFixed(2),

              (SUM12.totalIndustrialProductionProcess.PFC).toFixed(2),
              (SUM12.totalIndustrialProductionProcess.SF6).toFixed(2),

              (SUM12.totalEnergyActivities.CO2EW+SUM12.totalIndustrialProductionProcess.CO2EW+SUM12.totalIndustrialProductionProcess.CO2EW
              +SUM12.totalAgricultureActivity.CO2EW+SUM12.totalLandUseChangeAndForestry.CO2EW+SUM12.totalWasteDisposal.CO2EW).toFixed(2),


            ]

            _Data.push(totalEmissions_IncludingLand_UseChangeAndForestry);

            var totalEnergyActivities = [
              SUM12.totalEnergyActivities.CO2,
              SUM12.totalEnergyActivities.CH4,
              SUM12.totalEnergyActivities.N2O,
              '-',
              '-',
              '-',
              SUM12.totalEnergyActivities.CO2EW,
            ]

            _Data.push(totalEnergyActivities);


            var fossilFuel = [
              SUM12.fossilFuel.CO2,
              SUM12.fossilFuel.CH4,
              SUM12.fossilFuel.N2O,
              '-',
              '-',
              '-',
              SUM12.fossilFuel.CO2EW,
            ]

            _Data.push(fossilFuel);

            var energyIndustry = [
              SUM12.energyIndustry.CO2,
              '-',
              SUM12.energyIndustry.N2O,
              '-',
              '-',
              '-',
              SUM12.energyIndustry.CO2EW,
            ]
            _Data.push(energyIndustry);

            var agriculture = [
              SUM12.agriculture.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.agriculture.CO2EW,
            ]

            _Data.push(agriculture);

            var industryAndConstruction = [
              SUM12.industryAndConstruction.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.industryAndConstruction.CO2EW,
            ]

            _Data.push(industryAndConstruction);

            var transportation = [
              SUM12.transportation.CO2,
              SUM12.transportation.CH4,
              SUM12.transportation.N2O,
              '-',
              '-',
              '-',
              SUM12.transportation.CO2EW,
            ]

            _Data.push(transportation);

            var serviceIndustry = [
              SUM12.serviceIndustry.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.serviceIndustry.CO2EW,
            ]

            _Data.push(serviceIndustry);

            var residentsLiving = [
              SUM12.residentsLiving.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.residentsLiving.CO2EW,
            ]

            _Data.push(residentsLiving);

            var biomassBurning = [
              '-',
              SUM12.biomassBurning.CH4,
              SUM12.biomassBurning.N2O,
              '-',
              '-',
              '-',
              SUM12.biomassBurning.CO2EW,
            ]

            _Data.push(biomassBurning);

            var coalMiningEscape = [
              '-',
              SUM12.coalMiningEscape.CH4,
              '-',
              '-',
              '-',
              '-',
              SUM12.coalMiningEscape.CO2EW,
            ]

            _Data.push(coalMiningEscape);

            var oilAndGasSystemEscape = [
              '-',
              SUM12.oilAndGasSystemEscape.CH4,
              '-',
              '-',
              '-',
              '-',
              SUM12.oilAndGasSystemEscape.CO2EW,
            ]
            _Data.push(oilAndGasSystemEscape);

            var nonEnergyUse = [

              SUM12.nonEnergyUse.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.nonEnergyUse.CO2EW,
            ]

            _Data.push(nonEnergyUse);


            var totalIndustrialProductionProcess = [

              SUM12.totalIndustrialProductionProcess.CO2,
              '-',
              SUM12.totalIndustrialProductionProcess.N2O,
              SUM12.totalIndustrialProductionProcess.HFC,
              SUM12.totalIndustrialProductionProcess.PFC,
              SUM12.totalIndustrialProductionProcess.SF6,
              SUM12.totalIndustrialProductionProcess.CO2EW,
            ]

            _Data.push(totalIndustrialProductionProcess);

            var cementProductionProcess = [

              SUM12.cementProductionProcess.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.cementProductionProcess.CO2EW,
            ]

            _Data.push(cementProductionProcess);

            var limeProductionProcess = [

              SUM12.limeProductionProcess.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.limeProductionProcess.CO2EW,
            ]

            _Data.push(limeProductionProcess);

            var steelProductionProcess = [

              SUM12.steelProductionProcess.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.steelProductionProcess.CO2EW,
            ]

            _Data.push(steelProductionProcess);

            var calciumCarbideProductionProcess = [

              SUM12.calciumCarbideProductionProcess.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.calciumCarbideProductionProcess.CO2EW,
            ]

            _Data.push(calciumCarbideProductionProcess);

            var adipicAcidProductionProcess = [

              '-',
              '-',
              SUM12.adipicAcidProductionProcess.N2O,
              '-',
              '-',
              '-',
              SUM12.totalIndustrialProductionProcess.CO2EW,
            ]

            _Data.push(adipicAcidProductionProcess);

            var nitricAcidProductionProcess = [

              '-',
              '-',
              SUM12.nitricAcidProductionProcess.N2O,
              '-',
              '-',
              '-',
              SUM12.nitricAcidProductionProcess.CO2EW,
            ]

            _Data.push(nitricAcidProductionProcess);

            var aluminumProductionProcess = [

              '-',
              '-',
              '-',
              '-',
              SUM12.aluminumProductionProcess.PFC,
              '-',
              SUM12.aluminumProductionProcess.CO2EW,
            ]

            _Data.push(aluminumProductionProcess);

            var magnesiumProductionProcess = [

              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.magnesiumProductionProcess.SF6,
              SUM12.magnesiumProductionProcess.CO2EW,
            ]

            _Data.push(magnesiumProductionProcess);

            var electricPowerEquipmentProductionProcess = [

              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.electricPowerEquipmentProductionProcess.SF6,
              SUM12.electricPowerEquipmentProductionProcess.CO2EW,
            ]

            _Data.push(electricPowerEquipmentProductionProcess);

            var otherProductionProcess = [

              '-',
              '-',
              '-',
              SUM12.otherProductionProcess.HFC,
              SUM12.otherProductionProcess.PFC,
              SUM12.otherProductionProcess.SF6,
              SUM12.otherProductionProcess.CO2EW,
            ]

            _Data.push(otherProductionProcess );

            var totalAgricultureActivity = [

              '-',
              SUM12.totalAgricultureActivity.CH4,
              SUM12.totalAgricultureActivity.N2O,
              '-',
              '-',
              '-',
              SUM12.totalAgricultureActivity.CO2EW,
            ]

            _Data.push(totalAgricultureActivity);

            var paddyFields = [

              '-',
              SUM12.paddyFields.CH4,
              '-',
              '-',
              '-',
              '-',
              SUM12.paddyFields.CO2EW,
            ]

            _Data.push(paddyFields);

            var land = [

              '-',
              '-',
              SUM12.land.N2O,
              '-',
              '-',
              '-',
              SUM12.land.CO2EW,
            ]

            _Data.push(land);

            var animalIntestinalFermentation = [

              '-',
              SUM12.animalIntestinalFermentation.CH4,
              '-',
              '-',
              '-',
              '-',
              SUM12.animalIntestinalFermentation.CO2EW,
            ]

            _Data.push(animalIntestinalFermentation);

            var animalManureManagement = [

              '-',
              SUM12.animalManureManagement.CH4,
              SUM12.animalManureManagement.N2O,
              '-',
              '-',
              '-',
              SUM12.animalManureManagement.CO2EW,
            ]

            _Data.push(animalManureManagement);

            var totalLandUseChangeAndForestry = [

              SUM12.totalLandUseChangeAndForestry.CO2,
              SUM12.totalLandUseChangeAndForestry.CH4,
              SUM12.totalLandUseChangeAndForestry.N2O,
              '-',
              '-',
              '-',
              SUM12.totalLandUseChangeAndForestry.CO2EW,
            ]

            _Data.push(totalLandUseChangeAndForestry);

            var subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks = [

              SUM12.subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks.CO2EW,
            ]

            _Data.push(subtotalChangesInForestAndOtherWoodyBiomassCarbonStocks);

            var arborForest = [

              SUM12.arborForest.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.arborForest.CO2EW,
            ]

            _Data.push(arborForest);

            var economicForest = [

              SUM12.economicForest.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.economicForest.CO2EW,
            ]

            _Data.push(economicForest);

            var bambooForest = [

              SUM12.bambooForest.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.bambooForest.CO2EW,
            ]

            _Data.push(bambooForest);

            var countrySpecialIrrigation = [

              SUM12.countrySpecialIrrigation.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.countrySpecialIrrigation.CO2EW,
            ]

            _Data.push(countrySpecialIrrigation);

            var scatteredWoodSurroundedByTreesSparseForest = [

              SUM12.scatteredWoodSurroundedByTreesSparseForest.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.scatteredWoodSurroundedByTreesSparseForest.CO2EW,
            ]

            _Data.push(scatteredWoodSurroundedByTreesSparseForest);

            var liveWoodConsumption = [

              SUM12.liveWoodConsumption.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.liveWoodConsumption.CO2EW,
            ]

            _Data.push(liveWoodConsumption);

            var subtotalOfCarbonEmissionsFromForestConversion = [

              SUM12.subtotalOfCarbonEmissionsFromForestConversion.CO2,
              SUM12.subtotalOfCarbonEmissionsFromForestConversion.CH4,
              SUM12.subtotalOfCarbonEmissionsFromForestConversion.N2O,
              '-',
              '-',
              '-',
              SUM12.subtotalOfCarbonEmissionsFromForestConversion.CO2EW,
            ]

            _Data.push(subtotalOfCarbonEmissionsFromForestConversion);

            var combustionEmission = [

              SUM12.combustionEmission.CO2,
              SUM12.combustionEmission.CH4,
              SUM12.combustionEmission.N2O,
              '-',
              '-',
              '-',
              SUM12.combustionEmission.CO2EW,
            ]

            _Data.push(combustionEmission);

            var decompositionOfEmission = [

              SUM12.decompositionOfEmission.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.decompositionOfEmission.CO2EW,
            ]

            _Data.push(decompositionOfEmission);

            var totalWasteDisposal = [

              SUM12.totalWasteDisposal.CO2,
              SUM12.totalWasteDisposal.CH4,
              SUM12.totalWasteDisposal.N2O,

              '-',
              '-',
              '-',
              SUM12.totalWasteDisposal.CO2EW,
            ]

            _Data.push(totalWasteDisposal);

            var solidWaste = [

              SUM12.solidWaste.CO2,
              SUM12.solidWaste.CH4,
              '-',
              '-',
              '-',
              '-',
              SUM12.solidWaste.CO2EW,
            ]

            _Data.push(solidWaste);


            var wasteWater = [

              '-',
              SUM12.wasteWater.N2O,
              SUM12.wasteWater.CH4,
              '-',
              '-',
              '-',
              SUM12.wasteWater.CO2EW,
            ]

            _Data.push(wasteWater);

            var internationalFuel = [

              SUM12.internationalFuel.CO2,
              SUM12.internationalFuel.CH4,
              SUM12.internationalFuel.N2O,
              '-',
              '-',
              '-',
              SUM12.internationalFuel.CO2EW,
            ]

            _Data.push(internationalFuel);

            var internationalAviation = [

              SUM12.internationalAviation.CO2,
              SUM12.internationalAviation.CH4,
              SUM12.internationalAviation.N2O,
              '-',
              '-',
              '-',
              SUM12.internationalAviation.CO2EW,
            ]

            _Data.push(internationalAviation);

            var internationalSailing = [

              SUM12.internationalSailing.CO2,
              SUM12.internationalSailing.CH4,
              SUM12.internationalSailing.N2O,
              '-',
              '-',
              '-',
              SUM12.internationalSailing.CO2EW,
            ]

            _Data.push(internationalSailing);

            var chargeOutIndirectDischargeOfElectricity = [

              SUM12.chargeOutIndirectDischargeOfElectricity.CO2,
              '-',
              '-',
              '-',
              '-',
              '-',
              SUM12.chargeOutIndirectDischargeOfElectricity.CO2EW,
            ]

            _Data.push(chargeOutIndirectDischargeOfElectricity);




            var _b1 = []

            for(var i  = 0 ;i <fossilTitle.length;i++){
              _b1.push({
                key:i,
                name:{

                  value:fossilTitle[i] ,
                },
                CO:{

                  value:_Data[i][0] ,
                },
                CH:{

                  value:_Data[i][1],
                },
                N2O:{

                  value:_Data[i][2],
                },
                HFC:{

                  value:_Data[i][3] ,
                },
                HFC1:{

                  value:_Data[i][4] ,
                },
                HFC2:{

                  value:_Data[i][5] ,
                },
                HFC3:{

                  value:_Data[i][6] ,
                },

              })


            }

            this.setState({data:_b1})
          }



          this.setState({pf:_DataPf});




          /*
           温室气体排放量趋势
           */
          var pathSymbols = {
             walk:'image://http://120.76.194.221/fgimage/nengyuan.png?_k=37wcis',
             walk1:'image://http://120.76.194.221/fgimage/gongye.png?_k=37wcis',
             walk2:'image://http://120.76.194.221/fgimage/nongye.png?_k=37wcis',
             walk3:'image://http://120.76.194.221/fgimage/feiqiwu.png?_k=37wcis',
             walk4:'image://http://120.76.194.221/fgimage/tudi.png?_k=37wcis',
          };

          var myChart1 = echarts.init(document.getElementById('saleTrend1'));
          var optionday = ({
            tooltip: {
              trigger: 'axis',
              axisPointer: {
                type: 'none'
              },
              formatter: function (params) {
                return params[0].name + ': ' + params[0].value;
              }
            },
            xAxis: {
              data: ['能源活动', '工业生产过程', '农业活动', '废弃物处理','土地利用变化与林业' ],
              axisTick: {show: false},
              axisLine: {show: false},
              axisLabel: {
                textStyle: {
                  color: '#888888'
                }
              }
            },
            yAxis: {
              type: 'value',
              name: '万吨二氧化碳当量',
              nameGap: 35,
              axisTick: {
                show: false
              },
              axisLine: {
                show: false
              },
              splitLine: {
                show: true,
                lineStyle: {
                  color: '#888888'
                }
              },
            },
            color: ['#188df0'],
            series: [{
              name: 'hill',
              type: 'pictorialBar',
              barCategoryGap: '-130%',
              // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
              symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
              itemStyle: {
                normal: {
                  opacity: 0.5
                },
                emphasis: {
                  opacity: 1
                }
              },
              data: _DataPf1,
              z: 10
            }, {
              name: 'glyph',
              type: 'pictorialBar',
              barGap: '-100%',
              symbolPosition: 'end',
              symbolSize: 50,
              symbolOffset: [0, '-120%'],
              data: [{
                value: _DataPf1[0],
                symbol: pathSymbols.walk,
                symbolSize: [60, 60]
              }, {
                value: _DataPf1[1],
                symbol: pathSymbols.walk1,
                symbolSize: [60, 60]
              }, {
                value: _DataPf1[2],
                symbol: pathSymbols.walk2,
                symbolSize: [60, 60]
              }, {
                value: _DataPf1[3],
                symbol: pathSymbols.walk3,
                symbolSize: [60, 60]
              }, {
                value: _DataPf1[4],
                symbol: pathSymbols.walk4,
                symbolSize: [60, 60]
              }]
            }]
          });


          myChart1.setOption(optionday);
          window.onresize = myChart1.resize;


          var pfWidth = (screen.width-300)/2

          /*
           温室气体分类分析 包含
           */


          var myChart2 = echarts.init(document.getElementById('saleTrend2'));
          var optionday2 = ({


            tooltip: {
              trigger: 'axis'
            },

            grid: {
              left: '2%',
              right: '2%',
              bottom: '5%',
              containLabel: true
            },

            toolbox: {
              feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
              },
              iconStyle:{
                normal:{
                  borderColor:'#b1b1b1'
                },
                emphasis:{
                  borderColor:'#4a9ff2'
                }
              }
            },

            textStyle: {
              fontSize: '12',
              fontWeight: 'normal',
              color: '#888888'
            },

            legend: {
              data:['二氧化碳','占比']
            },
            xAxis: [
              {
                type: 'category',
                axisTick: {
                  alignWithLabel: true
                },
                axisPointer: {
                  type: 'shadow'
                },
                axisLine: {

                  lineStyle: {
                    color: '#888888'
                  },
                },
                data: ['能源活动','工业生产','废弃物处理','土地利用变化与林业']
              }

            ],
            yAxis: [

              {
                type: 'value',
                name: '万吨',

                position: 'left',
                offset: 5,
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#888888'
                  }
                },

              },
              {
                type: 'value',
                name: '百分比',

                position: 'right',

                axisLabel: {
                  formatter: '{value} %'
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#888888'
                  }
                },
              }
            ],
            series: [
              {
                name:'二氧化碳',
                type:'bar',
                barWidth: 30,
                itemStyle: {
                  normal: {
                    barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                      ]
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 20
                  }
                },
                data:_DataPf2
              },
              {
                name:'占比',
                type:'line',
                yAxisIndex: 1,
                data:_DataPf3
              }
            ]
          });


          myChart2.setOption(optionday2);
          window.onresize = myChart2.resize;


          /*
           温室气体分类分析 不包含
           */


          var myChart3 = echarts.init(document.getElementById('saleTrend3'));
          var optionday3 = ({


            tooltip: {
              trigger: 'axis'
            },

            grid: {
              left: '2%',
              right: '2%',
              bottom: '5%',
              containLabel: true
            },

            toolbox: {
              feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
              },
              iconStyle:{
                normal:{
                  borderColor:'#b1b1b1'
                },
                emphasis:{
                  borderColor:'#4a9ff2'
                }
              }
            },

            textStyle: {
              fontSize: '12',
              fontWeight: 'normal',
              color: '#888888'
            },

            legend: {
              data:['二氧化碳','占比']
            },
            xAxis: [
              {
                type: 'category',
                axisTick: {
                  alignWithLabel: true
                },
                axisPointer: {
                  type: 'shadow'
                },
                axisLine: {

                  lineStyle: {
                    color: '#888888'
                  },
                },
                data: ['能源活动','工业生产','废弃物处理']
              }

            ],
            yAxis: [

              {
                type: 'value',
                name: '万吨',

                position: 'left',
                offset: 5,
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#888888'
                  }
                },

              },
              {
                type: 'value',
                name: '百分比',

                position: 'right',

                axisLabel: {
                  formatter: '{value} %'
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#888888'
                  }
                },
              }
            ],
            series: [
              {
                name:'二氧化碳',
                type:'bar',
                barWidth: 30,
                itemStyle: {
                  normal: {
                    barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                      ]
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 20
                  }
                },
                data:_DataPf4
              },
              {
                name:'占比',
                type:'line',
                yAxisIndex: 1,
                data:_DataPf5
              }
            ]
          });


          myChart3.setOption(optionday3);
          window.onresize = myChart3.resize;


          /*
           甲烷排放情况分析
           */


          var myChart4 = echarts.init(document.getElementById('saleTrend4'));
          var optionday4 = ({


            tooltip: {
              trigger: 'axis'
            },

            grid: {
              left: '2%',
              right: '2%',
              bottom: '5%',
              containLabel: true
            },

            toolbox: {
              feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
              },
              iconStyle:{
                normal:{
                  borderColor:'#b1b1b1'
                },
                emphasis:{
                  borderColor:'#4a9ff2'
                }
              }
            },

            textStyle: {
              fontSize: '12',
              fontWeight: 'normal',
              color: '#888888'
            },

            legend: {
              data:['二氧化碳','占比']
            },
            xAxis: [
              {
                type: 'category',
                axisTick: {
                  alignWithLabel: true
                },
                axisPointer: {
                  type: 'shadow'
                },
                axisLine: {

                  lineStyle: {
                    color: '#888888'
                  },
                },
                data: ['能源活动','工业生产','废弃物处理','土地利用变化与林业']
              }

            ],
            yAxis: [

              {
                type: 'value',
                name: '万吨',

                position: 'left',
                offset: 5,
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#888888'
                  }
                },

              },
              {
                type: 'value',
                name: '百分比',

                position: 'right',

                axisLabel: {
                  formatter: '{value} %'
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#888888'
                  }
                },
              }
            ],
            series: [
              {
                name:'二氧化碳',
                type:'bar',
                barWidth: 30,
                itemStyle: {
                  normal: {
                    barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                      ]
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 20
                  }
                },
                data:_DataPf6
              },
              {
                name:'占比',
                type:'line',
                yAxisIndex: 1,
                data:_DataPf7
              }
            ]
          });


          myChart4.setOption(optionday4);
          window.onresize = myChart4.resize;



          /*
           氧化亚氮排放情况分析
           */


          var myChart5 = echarts.init(document.getElementById('saleTrend5'));
          var optionday5 = ({


            tooltip: {
              trigger: 'axis'
            },

            grid: {
              left: '2%',
              right: '2%',
              bottom: '5%',
              containLabel: true
            },

            toolbox: {
              feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
              },
              iconStyle:{
                normal:{
                  borderColor:'#b1b1b1'
                },
                emphasis:{
                  borderColor:'#4a9ff2'
                }
              }
            },

            textStyle: {
              fontSize: '12',
              fontWeight: 'normal',
              color: '#888888'
            },

            legend: {
              data:['二氧化碳','占比']
            },
            xAxis: [
              {
                type: 'category',
                axisTick: {
                  alignWithLabel: true
                },
                axisPointer: {
                  type: 'shadow'
                },
                axisLine: {

                  lineStyle: {
                    color: '#888888'
                  },
                },
                data: ['能源活动','工业生产','农业活动','废弃物处理','土地利用变化与林业']
              }

            ],
            yAxis: [

              {
                type: 'value',
                name: '万吨',

                position: 'left',
                offset: 5,
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#888888'
                  }
                },

              },
              {
                type: 'value',
                name: '百分比',

                position: 'right',

                axisLabel: {
                  formatter: '{value} %'
                },
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#888888'
                  }
                },
              }
            ],
            series: [
              {
                name:'二氧化碳',
                type:'bar',
                barWidth: 30,
                itemStyle: {
                  normal: {
                    barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                      ]
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 20
                  }
                },
                data:_DataPf8
              },
              {
                name:'占比',
                type:'line',
                yAxisIndex: 1,
                data:_DataPf9
              }
            ]
          });


          myChart5.setOption(optionday5);
          window.onresize = myChart5.resize;



          /*
           能源活动分析
           */


          var myChart6 = echarts.init(document.getElementById('saleTrend6'));
          var optionday6 = ({


            tooltip: {
              trigger: 'axis'
            },

            grid: {
              left: '2%',
              right: '2%',
              bottom: '5%',
              containLabel: true
            },

            toolbox: {
              feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
              },
              iconStyle:{
                normal:{
                  borderColor:'#b1b1b1'
                },
                emphasis:{
                  borderColor:'#4a9ff2'
                }
              }
            },

            textStyle: {
              fontSize: '12',
              fontWeight: 'normal',
              color: '#888888'
            },

            legend: {
              data:['温室气体']
            },
            xAxis: [
              {
                type: 'category',
                axisTick: {
                  alignWithLabel: true
                },
                axisPointer: {
                  type: 'shadow'
                },
                axisLine: {

                  lineStyle: {
                    color: '#888888'
                  },
                },
                data: ['化石燃料燃烧','生物质燃烧','煤炭开采逃逸','油气系统逃逸','非能源利用']
              }

            ],
            yAxis: [

              {
                type: 'value',
                name: '万吨',

                position: 'left',
                offset: 5,
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#888888'
                  }
                },

              },

            ],
            series: [
              {
                name:'温室气体',
                type:'bar',
                barWidth: 30,
                itemStyle: {
                  normal: {
                    barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                      ]
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 20
                  }
                },
                data:_DataPf10
              },
            ]
          });


          myChart6.setOption(optionday6);
          window.onresize = myChart6.resize;


          /*
           农业分析
           */


          var myChart7 = echarts.init(document.getElementById('saleTrend7'));
          var optionday7 = ({


            tooltip: {
              trigger: 'axis'
            },

            grid: {
              left: '2%',
              right: '2%',
              bottom: '5%',
              containLabel: true
            },

            toolbox: {
              feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
              },
              iconStyle:{
                normal:{
                  borderColor:'#b1b1b1'
                },
                emphasis:{
                  borderColor:'#4a9ff2'
                }
              }
            },

            textStyle: {
              fontSize: '12',
              fontWeight: 'normal',
              color: '#888888'
            },

            legend: {
              data:['温室气体']
            },
            xAxis: [
              {
                type: 'category',
                axisTick: {
                  alignWithLabel: true
                },
                axisPointer: {
                  type: 'shadow'
                },
                axisLine: {

                  lineStyle: {
                    color: '#888888'
                  },
                },
                data: ['稻田','农用地','动物肠道发酵','动物粪便管理系统']
              }

            ],
            yAxis: [

              {
                type: 'value',
                name: '万吨',

                position: 'left',
                offset: 5,
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#888888'
                  }
                },

              },

            ],
            series: [
              {
                name:'温室气体',
                type:'bar',
                barWidth: 30,
                itemStyle: {
                  normal: {
                    barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                      ]
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 20
                  }
                },
                data:_DataPf11
              },
            ]
          });


          myChart7.setOption(optionday7);
          window.onresize = myChart7.resize;



          /*
           工业分析
           */


          var myChart8 = echarts.init(document.getElementById('saleTrend8'));
          var optionday8 = ({


            tooltip: {
              trigger: 'axis'
            },

            grid: {
              left: '2%',
              right: '2%',
              bottom: '5%',
              containLabel: true
            },

            toolbox: {
              feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
              },
              iconStyle:{
                normal:{
                  borderColor:'#b1b1b1'
                },
                emphasis:{
                  borderColor:'#4a9ff2'
                }
              }
            },

            textStyle: {
              fontSize: '12',
              fontWeight: 'normal',
              color: '#888888'
            },

            legend: {
              data:['温室气体']
            },
            xAxis: [
              {
                type: 'category',
                axisTick: {
                  alignWithLabel: true
                },
                axisPointer: {
                  type: 'shadow'
                },
                axisLine: {

                  lineStyle: {
                    color: '#888888'
                  },
                },
                data: ['水泥生产','石灰生产','钢铁生产','电石生产','乙二酸生产','硝酸生产','铝生产','镁生产','电力设备生产','其它生产']
              }

            ],
            yAxis: [

              {
                type: 'value',
                name: '万吨',

                position: 'left',
                offset: 5,
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#888888'
                  }
                },

              },

            ],
            series: [
              {
                name:'温室气体',
                type:'bar',
                barWidth: 30,
                itemStyle: {
                  normal: {
                    barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                      ]
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 20
                  }
                },
                data:_DataPf12
              },
            ]
          });


          myChart8.setOption(optionday8);
          window.onresize = myChart8.resize;

          /*
           土地利用变化与林业分析
           */


          var myChart9 = echarts.init(document.getElementById('saleTrend9'));
          var optionday9 = ({


            tooltip: {
              trigger: 'axis'
            },

            grid: {
              left: '2%',
              right: '2%',
              bottom: '5%',
              containLabel: true
            },

            toolbox: {
              feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
              },
              iconStyle:{
                normal:{
                  borderColor:'#b1b1b1'
                },
                emphasis:{
                  borderColor:'#4a9ff2'
                }
              }
            },

            textStyle: {
              fontSize: '12',
              fontWeight: 'normal',
              color: '#888888'
            },

            legend: {
              data:['温室气体']
            },
            xAxis: [
              {
                type: 'category',
                axisTick: {
                  alignWithLabel: true
                },
                axisPointer: {
                  type: 'shadow'
                },
                axisLine: {

                  lineStyle: {
                    color: '#888888'
                  },
                },
                data: ['森林和其他储量变化','森林转化碳排放小计']
              }

            ],
            yAxis: [

              {
                type: 'value',
                name: '万吨',

                position: 'left',
                offset: 5,
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#888888'
                  }
                },

              },

            ],
            series: [
              {
                name:'温室气体',
                type:'bar',
                barWidth: 30,
                itemStyle: {
                  normal: {
                    barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                      ]
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 20
                  }
                },
                data:_DataPf13
              },
            ]
          });


          myChart9.setOption(optionday9);
          window.onresize = myChart9.resize;



          /*
           废弃物处理分析
           */


          var myChart10 = echarts.init(document.getElementById('saleTrend10'));
          var optionday10 = ({


            tooltip: {
              trigger: 'axis'
            },

            grid: {
              left: '2%',
              right: '2%',
              bottom: '5%',
              containLabel: true
            },

            toolbox: {
              feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
              },
              iconStyle:{
                normal:{
                  borderColor:'#b1b1b1'
                },
                emphasis:{
                  borderColor:'#4a9ff2'
                }
              }
            },

            textStyle: {
              fontSize: '12',
              fontWeight: 'normal',
              color: '#888888'
            },

            legend: {
              data:['温室气体']
            },
            xAxis: [
              {
                type: 'category',
                axisTick: {
                  alignWithLabel: true
                },
                axisPointer: {
                  type: 'shadow'
                },
                axisLine: {

                  lineStyle: {
                    color: '#888888'
                  },
                },
                data: ['固体废弃物','废水']
              }

            ],
            yAxis: [

              {
                type: 'value',
                name: '万吨',

                position: 'left',
                offset: 5,
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#888888'
                  }
                },

              },

            ],
            series: [
              {
                name:'温室气体',
                type:'bar',
                barWidth: 30,
                itemStyle: {
                  normal: {
                    barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                      ]
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 20
                  }
                },
                data:_DataPf14
              },
            ]
          });


          myChart10.setOption(optionday10);
          window.onresize = myChart10.resize;



          /*
           废弃物处理分析
           */


          var myChart11 = echarts.init(document.getElementById('saleTrend11'));
          var optionday11 = ({


            tooltip: {
              trigger: 'axis'
            },

            grid: {
              left: '2%',
              right: '2%',
              bottom: '5%',
              containLabel: true
            },

            toolbox: {
              feature: {
                dataView: {show: true, readOnly: false},
                restore: {show: true},
                saveAsImage: {show: true}
              },
              iconStyle:{
                normal:{
                  borderColor:'#b1b1b1'
                },
                emphasis:{
                  borderColor:'#4a9ff2'
                }
              }
            },

            textStyle: {
              fontSize: '12',
              fontWeight: 'normal',
              color: '#888888'
            },

            legend: {
              data:['温室气体']
            },
            xAxis: [
              {
                type: 'category',
                axisTick: {
                  alignWithLabel: true
                },
                axisPointer: {
                  type: 'shadow'
                },
                axisLine: {

                  lineStyle: {
                    color: '#888888'
                  },
                },
                data: ['国际航空','国际航海']
              }

            ],
            yAxis: [

              {
                type: 'value',
                name: '万吨',

                position: 'left',
                offset: 5,
                axisTick: {
                  show: false
                },
                axisLine: {
                  show: false
                },
                splitLine: {
                  show: true,
                  lineStyle: {
                    color: '#888888'
                  }
                },

              },

            ],
            series: [
              {
                name:'温室气体',
                type:'bar',
                barWidth: 30,
                itemStyle: {
                  normal: {
                    barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#83bff6'},
                        {offset: 0.5, color: '#188df0'},
                        {offset: 1, color: '#188df0'}
                      ]
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 20
                  }
                },
                data:_DataPf15
              },
            ]
          });


          myChart11.setOption(optionday11);
          window.onresize = myChart11.resize;

          //this.setState({nopf:_nopf2014});

          /*   console.log(_b);


             this.setState({data:_b});
             this.setState({data1:_b1});*/
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });



  }


  onChange(checkedValues) {

    console.log('checked = ', checkedValues);


    this.setState({checkedValues:checkedValues});

  }
  handleQuery(){

    if(this.state.checkedValues.length!=1){
      message.error('请选择其中一项！');

    }else {
      if(this.state.checkedValues==0){
        this.setState({i:'0'});
        this.queryGut('0','a',this.state.years)
      }else{
        this.setState({i:'1'});
        this.queryGut('1','a',this.state.years)
      }

    }
  }

  //年份选择
  selesctYears(i,j,years){

    this.setState({ loading: true});
    this.setState({years:years})
    this.setState({j:j})
    this.queryGut(i,j,years)

    if(j=='a'){
      $("#contentB").hide();
      $("#contentC").hide();
      $("#contentA").show();
      this.setState({cs:'a'})

    }else if(j=='b'){
      $("#contentB").show();
      $("#contentC").hide();
      $("#contentA").hide();
      this.setState({cs:'b'})
    }else if(j=='c'){
      $("#contentB").hide();
      $("#contentC").show();
      $("#contentA").hide();
      this.setState({cs:'c'})
    }

  }


  render() {


    const options = [
      { label: '包括', value: 0 },
      { label: '不包括', value: 1 },

    ];

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

    const { data2} = this.state;
    const dataSource2 = data2.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    const { data3} = this.state;
    const dataSource3 = data3.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    const columns = this.columns;
    const columns1 = this.columns1;
    const columns2 = this.columns2;
    const columns3 = this.columns3;




    return (
      <div className={styles.normal}>
        <div className={styles.title}>
          <span className={styles.title_span}>温室气体增温潜值及关键排放指标</span>
        </div>

        <div className={styles.newSelect}>

          <div className={styles.targetChoose}>
            <span className={styles.selectH1}>数据年份:</span>
            <ul>
              <li id="li1" className={'2005'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears(this.state.i,this.state.j,'2005')}}>2005</li>
              <li id="li2" className={'2010'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears(this.state.i,this.state.j,'2010')}}>2010</li>
              <li id="li3" className={'2012'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears(this.state.i,this.state.j,'2012')}}>2012</li>
              <li id="li4" className={'2014'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears(this.state.i,this.state.j,'2014')}}>2014</li>
            </ul>
          </div>

          <div className={styles.targetChoose}>
            <span className={styles.selectH1}>参数:</span>
            <ul>
              <li id="li5" className={'a'==this.state.cs?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears(this.state.i,'a',this.state.years)}}>温室气体排放总量</li>
              <li id="li6" className={'b'==this.state.cs?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears(this.state.i,'b',this.state.years)}}>温室气体分类分析</li>
              <li id="li7" className={'c'==this.state.cs?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears(this.state.i,'c',this.state.years)}}>温室气体清单总汇</li>
            </ul>
          </div>

        </div>


        <div id="contentA">
        <div className={styles.content3}>
          <div className={styles.selectGas}>
          <div className={styles.targetChoose}>
            <span className={styles.selectH1}>温室气体排放总览：</span>
            <CheckboxGroup options={options} defaultValue={[0]} onChange={this.onChange.bind(this)} />
            <Button className={styles.button} onClick={this.handleQuery.bind(this)}>确认</Button>
          </div>
          </div>

          <div className={styles.saleTrend6} >
            <Row className={styles.pfkuang}>
              <Col span={6} >
                <img src={kuang1} className={styles.kuang}/>
                <span className={styles.kuangP1}>{this.state.pf[0]}%</span>
                <span className={styles.kuangP2}>{this.state.pf[1]}</span>
              </Col>
              <Col span={6}>
                <img src={kuang2} className={styles.kuang}/>
                <span className={styles.kuangP1}>{this.state.pf[2]}%</span>
                <span className={styles.kuangP2}>{this.state.pf[3]}</span>
              </Col>
              <Col span={6}>
                <img src={kuang3} className={styles.kuang}/>
                <span className={styles.kuangP1}>{this.state.pf[4]}%</span>
                <span className={styles.kuangP2}>{this.state.pf[5]}</span>
              </Col>
              <Col span={6}>
                <img src={kuang4} className={styles.kuang}/>
                <span className={styles.kuangP1}>{this.state.pf[6]}%</span>
                <span className={styles.kuangP2}>{this.state.pf[7]}</span>
              </Col>
            </Row>
          </div>




        </div>

        <div className={styles.content3}>
          <p id="content3_p">温室气体排放分析</p>
          <div className={styles.saleTrend1} id="saleTrend1"></div>
        </div>


          <div className={styles.entryBody}  >
            <p>温室气体分类排放情况</p>


            <Table  pagination={false} bordered={true}  columns={columns2} dataSource={dataSource2} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody}  >
            <p>温室气体排放构成</p>


            <Table  pagination={false} bordered={true}  columns={columns3} dataSource={dataSource3} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

        </div>


        <div  id="contentB" style={{display:'none'}}>
          <Row  >
            <Col span={12} >
              <div className={styles.content3} style={{marginRight:10}} >
                <p id="content3_p">二氧化碳排放情况分析 <span style={{fontSize:8}}>（包括土地利用变化和林业）</span> </p>
                <div className={styles.newsaleTrend1} style={{width:(document.body.clientWidth-300)/2+'px'}} id="saleTrend2"></div>
              </div>
            </Col>
            <Col span={12}>
              <div className={styles.content3} style={{marginLeft:10}}>
                <p id="content3_p">二氧化碳排放情况分析  <span style={{fontSize:8}}>（不包括土地利用变化和林业）</span></p>
                <div className={styles.saleTrend1} style={{width:(document.body.clientWidth-300)/2+'px'}}  id="saleTrend3"></div>
              </div>
            </Col>

          </Row>

          <Row  >
            <Col span={12} >
              <div className={styles.content3} style={{marginRight:10}} >
                <p id="content3_p">甲烷排放情况分析 </p>
                <div className={styles.newsaleTrend1} style={{width:(document.body.clientWidth-300)/2+'px'}} id="saleTrend4"></div>
              </div>
            </Col>
            <Col span={12}>
              <div className={styles.content3} style={{marginLeft:10}}>
                <p id="content3_p">氧化亚氮排放情况分析  <span style={{fontSize:8}}>（不包括土地利用变化和林业）</span></p>
                <div className={styles.saleTrend1} style={{width:(document.body.clientWidth-300)/2+'px'}}  id="saleTrend5"></div>
              </div>
            </Col>

          </Row>

          <div className={styles.entryBody}  >
            <p>温室气体分类排放情况）</p>


            <Table  pagination={false} bordered={true}  columns={columns1} dataSource={dataSource1} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

        </div>


        <div id="contentC" style={{display:'none'}}>

          <Row  >
            <Col span={12} >
              <div className={styles.content3} style={{marginRight:10}} >
                <p id="content3_p">甲烷排放情况分析 </p>
                <div className={styles.newsaleTrend1} style={{width:(document.body.clientWidth-300)/2+'px'}} id="saleTrend6"></div>
              </div>
            </Col>
            <Col span={12}>
              <div className={styles.content3} style={{marginLeft:10}}>
                <p id="content3_p">氧化亚氮排放情况分析 </p>
                <div className={styles.saleTrend1} style={{width:(document.body.clientWidth-300)/2+'px'}}  id="saleTrend7"></div>
              </div>
            </Col>

          </Row>

          <div className={styles.content3} style={{marginRight:10}} >
            <p id="content3_p">工业生产过程分析</p>
            <div className={styles.newsaleTrend1} style={{width:(document.body.clientWidth-300)+'px'}} id="saleTrend8"></div>
          </div>

          <Row  >
            <Col span={8} >
              <div className={styles.content3} style={{marginRight:10}} >
                <p id="content3_p">土地利用变化与林业分析 </p>
                <div className={styles.newsaleTrend1} style={{width:(document.body.clientWidth-300)/3+'px'}} id="saleTrend9"></div>
              </div>
            </Col>
            <Col span={8}>
              <div className={styles.content3} style={{marginLeft:10}}>
                <p id="content3_p">废弃物处理分析 </p>
                <div className={styles.saleTrend1} style={{width:(document.body.clientWidth-300)/3+'px'}}  id="saleTrend10"></div>
              </div>
            </Col>
            <Col span={8}>
              <div className={styles.content3} style={{marginLeft:20}}>
                <p id="content3_p">国际燃料仓分析 </p>
                <div className={styles.saleTrend1} style={{width:(document.body.clientWidth-300)/3+'px'}}  id="saleTrend11"></div>
              </div>
            </Col>

          </Row>


          <div className={styles.entryBody}  >
            <p>温室气体排放总量（万吨二氧化碳当量）</p>


            <Table  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 2520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>




        </div>





      </div>
    );

  }
}


export default Form.create()(ElectricTable);
