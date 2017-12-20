/**
 * 温室气体年度分析 Created by dixu on 2017/12/1.
 */

import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch ,Radio ,Checkbox,Button,Row, Col} from 'antd';

import ReactDOM from 'react-dom'
import styles from './Gas.less';
import createReactClass from 'create-react-class';
import { post } from '../../utils/carbonRequest';
import echarts from 'echarts';
import $ from 'jquery';
const RadioGroup = Radio.Group;
const CheckboxGroup = Checkbox.Group;

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
        title: '',
        dataIndex: 'name',
        width: 30,

        colSpan:1,
        render: (text, record, index) => this.renderColumns(this.state.Data, index, 'name', text),},

      {
        title: '能源活动', dataIndex: 'volume', width: 50,
        render: (text, record, index) => this.renderColumns(this.state.Data, index, 'volume', text),
      }, {
        title: '工业生产过程', dataIndex: 'volume1', width: 50,
        render: (text, record, index) => this.renderColumns(this.state.Data, index, 'volume1', text),
      },
      {
        title: '农业活动', dataIndex: 'volume2', width: 50,
        render: (text, record, index) => this.renderColumns(this.state.Data, index, 'volume2', text),
      },
      {
        title: '废弃物处理', dataIndex: 'volume3', width: 50,
        render: (text, record, index) => this.renderColumns(this.state.Data, index, 'volume3', text),
      },
      {
        title: '土地林业变化', dataIndex: 'volume4', width: 50,
        render: (text, record, index) => this.renderColumns(this.state.Data, index, 'volume4', text),
      },
     ];

    this.columns1 = [
      {
        title: '',
        dataIndex: 'name',
        width: 30,

        colSpan:1,
        render: (text, record, index) => this.renderColumns1(this.state.Data1, index, 'name', text),},

      {
        title: '二氧化碳', dataIndex: 'volume', width: 50,
        render: (text, record, index) => this.renderColumns1(this.state.Data1, index, 'volume', text),
      }, {
        title: '甲烷', dataIndex: 'volume1', width: 50,
        render: (text, record, index) => this.renderColumns1(this.state.Data1, index, 'volume1', text),
      },
      {
        title: '氧化亚氮', dataIndex: 'volume2', width: 50,
        render: (text, record, index) => this.renderColumns1(this.state.Data1, index, 'volume2', text),
      },
      {
        title: '含氟气体', dataIndex: 'volume3', width: 50,
        render: (text, record, index) => this.renderColumns1(this.state.Data1, index, 'volume3', text),
      },

    ];

    this.state = {

      Data: [],
      Data1: [],
      loading: true ,

      collapsed: false,
      select:1,
      trigger:true,
      user:[],


      AllData:[],
      years:'a1',
      a1:[],
      a2:[],
      a3:[],
      a4:[],
      a5:[],
      checkedValues:[0,1],
      sum2005:[],
      sum2010:[],
      sum2012:[],
      sum2014:[],
      newsum2005:[],
      newsum2010:[],
      newsum2012:[],
      newsum2014:[],

    };

    this.queryGut();

    //$("#bodyTable1").hide();

  }


  renderColumns(Data, index, key, text) {


    const { editable, status } = Data[index][key];
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

  renderColumns1(Data1, index, key, text) {


    const { editable, status } = Data1[index][key];
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

    if(key  == 'volumeOfAnnualChangeInVolume'){

      //this.updateScatteredwood(index,data);
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
  queryGut(){


    post('/report/summary/list', {


    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data;



          //二氧化碳当量
          var _Data = []

          _Data.push(Alldata.SUM2005.Summary.Total.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _Data.push(Alldata.SUM2010.Summary.Total.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _Data.push(Alldata.SUM2012.Summary.Total.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _Data.push(Alldata.SUM2014.Summary.Total.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)


          var _Data1 = [] //co2
          var _Data2 = [] //ch4
          var _Data3 = [] //n2o

          _Data1.push((Alldata.SUM2005.Composition.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry))
          _Data1.push(Alldata.SUM2010.Composition.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _Data1.push(Alldata.SUM2012.Composition.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _Data1.push(Alldata.SUM2014.Composition.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)


          _Data2.push(Alldata.SUM2005.Composition.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _Data2.push(Alldata.SUM2010.Composition.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _Data2.push(Alldata.SUM2012.Composition.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _Data2.push(Alldata.SUM2014.Composition.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)

          _Data3.push(Alldata.SUM2005.Composition.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _Data3.push(Alldata.SUM2010.Composition.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _Data3.push(Alldata.SUM2012.Composition.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _Data3.push(Alldata.SUM2014.Composition.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)


          var _new2005 = [];
          var _new2010 = [];
          var _new2012 = [];
          var _new2014 = [];


          _new2005.push((Alldata.SUM2005.Composition.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry))
          _new2005.push(Alldata.SUM2005.Composition.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _new2005.push(Alldata.SUM2005.Composition.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _new2005.push(Alldata.SUM2005.Composition.F.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)



          _new2010.push((Alldata.SUM2010.Composition.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry))
          _new2010.push(Alldata.SUM2010.Composition.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _new2010.push(Alldata.SUM2010.Composition.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _new2010.push(Alldata.SUM2010.Composition.F.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)



          _new2012.push((Alldata.SUM2012.Composition.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry))
          _new2012.push(Alldata.SUM2012.Composition.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _new2012.push(Alldata.SUM2012.Composition.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _new2012.push(Alldata.SUM2012.Composition.F.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)



          _new2014.push((Alldata.SUM2014.Composition.CO2.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry))
          _new2014.push(Alldata.SUM2014.Composition.CH4.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _new2014.push(Alldata.SUM2014.Composition.N2O.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)
          _new2014.push(Alldata.SUM2014.Composition.F.emissionOfGreenhouseGases_IncludingLandUseChangeAndForestry)


          var _Data4 = [] //能源活动
          var _Data5 = [] //工业生产过程
          var _Data6 = [] //农业活动
          var _Data7 = [] //土地利用变化和林业
          var _Data8 = [] //废弃物处理


          _Data4.push((Alldata.SUM2005.Summary.CO2.energyActivity+Alldata.SUM2005.Summary.CH4.energyActivity+Alldata.SUM2005.Summary.N2O.energyActivity).toFixed(2))
          _Data4.push((Alldata.SUM2010.Summary.CO2.energyActivity+Alldata.SUM2010.Summary.CH4.energyActivity+Alldata.SUM2010.Summary.N2O.energyActivity).toFixed(2))
          _Data4.push((Alldata.SUM2012.Summary.CO2.energyActivity+Alldata.SUM2012.Summary.CH4.energyActivity+Alldata.SUM2012.Summary.N2O.energyActivity).toFixed(2))
          _Data4.push((Alldata.SUM2014.Summary.CO2.energyActivity+Alldata.SUM2014.Summary.CH4.energyActivity+Alldata.SUM2014.Summary.N2O.energyActivity).toFixed(2))

          _Data5.push((Alldata.SUM2005.Summary.CO2.industrialProductionProcess+Alldata.SUM2005.Summary.HFC.industrialProductionProcess+Alldata.SUM2005.Summary.N2O.industrialProductionProcess
          +Alldata.SUM2005.Summary.PFC.industrialProductionProcess+Alldata.SUM2005.Summary.SF6.industrialProductionProcess).toFixed(2));

          _Data5.push((Alldata.SUM2010.Summary.CO2.industrialProductionProcess+Alldata.SUM2010.Summary.HFC.industrialProductionProcess+Alldata.SUM2010.Summary.N2O.industrialProductionProcess
          +Alldata.SUM2010.Summary.PFC.industrialProductionProcess+Alldata.SUM2010.Summary.SF6.industrialProductionProcess).toFixed(2));

          _Data5.push((Alldata.SUM2012.Summary.CO2.industrialProductionProcess+Alldata.SUM2012.Summary.HFC.industrialProductionProcess+Alldata.SUM2012.Summary.N2O.industrialProductionProcess
          +Alldata.SUM2012.Summary.PFC.industrialProductionProcess+Alldata.SUM2012.Summary.SF6.industrialProductionProcess).toFixed(2));

          _Data5.push((Alldata.SUM2014.Summary.CO2.industrialProductionProcess+Alldata.SUM2014.Summary.HFC.industrialProductionProcess+Alldata.SUM2014.Summary.N2O.industrialProductionProcess
          +Alldata.SUM2014.Summary.PFC.industrialProductionProcess+Alldata.SUM2014.Summary.SF6.industrialProductionProcess).toFixed(2));

          _Data6.push((Alldata.SUM2005.Summary.CH4.agricultureActivity+Alldata.SUM2005.Summary.N2O.agricultureActivity).toFixed(2))
          _Data6.push((Alldata.SUM2010.Summary.CH4.agricultureActivity+Alldata.SUM2010.Summary.N2O.agricultureActivity).toFixed(2))
          _Data6.push((Alldata.SUM2012.Summary.CH4.agricultureActivity+Alldata.SUM2012.Summary.N2O.agricultureActivity).toFixed(2))
          _Data6.push((Alldata.SUM2014.Summary.CH4.agricultureActivity+Alldata.SUM2014.Summary.N2O.agricultureActivity).toFixed(2))

          _Data8.push((Alldata.SUM2005.Summary.CO2.wasteDisposal+Alldata.SUM2005.Summary.CH4.wasteDisposal+Alldata.SUM2005.Summary.N2O.wasteDisposal).toFixed(2))
          _Data8.push((Alldata.SUM2010.Summary.CO2.wasteDisposal+Alldata.SUM2010.Summary.CH4.wasteDisposal+Alldata.SUM2010.Summary.N2O.wasteDisposal).toFixed(2))
          _Data8.push((Alldata.SUM2012.Summary.CO2.wasteDisposal+Alldata.SUM2012.Summary.CH4.wasteDisposal+Alldata.SUM2012.Summary.N2O.wasteDisposal).toFixed(2))
          _Data8.push((Alldata.SUM2014.Summary.CO2.wasteDisposal+Alldata.SUM2014.Summary.CH4.wasteDisposal+Alldata.SUM2014.Summary.N2O.wasteDisposal).toFixed(2))

          _Data7.push((Alldata.SUM2005.Summary.CO2.landUseChangeAndForestry+Alldata.SUM2005.Summary.CH4.landUseChangeAndForestry+Alldata.SUM2005.Summary.N2O.landUseChangeAndForestry).toFixed(2))
          _Data7.push((Alldata.SUM2010.Summary.CO2.landUseChangeAndForestry+Alldata.SUM2010.Summary.CH4.landUseChangeAndForestry+Alldata.SUM2010.Summary.N2O.landUseChangeAndForestry).toFixed(2))
          _Data7.push((Alldata.SUM2012.Summary.CO2.landUseChangeAndForestry+Alldata.SUM2012.Summary.CH4.landUseChangeAndForestry+Alldata.SUM2012.Summary.N2O.landUseChangeAndForestry).toFixed(2))
          _Data7.push((Alldata.SUM2014.Summary.CO2.landUseChangeAndForestry+Alldata.SUM2014.Summary.CH4.landUseChangeAndForestry+Alldata.SUM2014.Summary.N2O.landUseChangeAndForestry).toFixed(2))






          this.setState({a1:_Data4});
          this.setState({a2:_Data5});
          this.setState({a3:_Data6});
          this.setState({a4:_Data7});
          this.setState({a5:_Data8});


          var _2005 = [];
          var _2010 = [];
          var _2012 = [];
          var _2014 = [];


          _2005.push((Alldata.SUM2005.Summary.CO2.energyActivity+Alldata.SUM2005.Summary.CH4.energyActivity+Alldata.SUM2005.Summary.N2O.energyActivity).toFixed(2))
          _2005.push((Alldata.SUM2005.Summary.CO2.industrialProductionProcess+Alldata.SUM2005.Summary.HFC.industrialProductionProcess+Alldata.SUM2005.Summary.N2O.industrialProductionProcess
          +Alldata.SUM2005.Summary.PFC.industrialProductionProcess+Alldata.SUM2005.Summary.SF6.industrialProductionProcess).toFixed(2))
          _2005.push((Alldata.SUM2005.Summary.CH4.agricultureActivity+Alldata.SUM2005.Summary.N2O.agricultureActivity).toFixed(2))
          _2005.push((Alldata.SUM2005.Summary.CO2.wasteDisposal+Alldata.SUM2005.Summary.CH4.wasteDisposal+Alldata.SUM2005.Summary.N2O.wasteDisposal).toFixed(2))
          _2005.push((Alldata.SUM2005.Summary.CO2.landUseChangeAndForestry+Alldata.SUM2005.Summary.CH4.landUseChangeAndForestry+Alldata.SUM2005.Summary.N2O.landUseChangeAndForestry).toFixed(2))


          _2010.push((Alldata.SUM2010.Summary.CO2.energyActivity+Alldata.SUM2010.Summary.CH4.energyActivity+Alldata.SUM2010.Summary.N2O.energyActivity).toFixed(2));
          _2010.push((Alldata.SUM2010.Summary.CO2.industrialProductionProcess+Alldata.SUM2010.Summary.HFC.industrialProductionProcess+Alldata.SUM2010.Summary.N2O.industrialProductionProcess
          +Alldata.SUM2010.Summary.PFC.industrialProductionProcess+Alldata.SUM2010.Summary.SF6.industrialProductionProcess).toFixed(2));
          _2010.push((Alldata.SUM2010.Summary.CH4.agricultureActivity+Alldata.SUM2010.Summary.N2O.agricultureActivity).toFixed(2));
          _2010.push((Alldata.SUM2010.Summary.CO2.wasteDisposal+Alldata.SUM2010.Summary.CH4.wasteDisposal+Alldata.SUM2010.Summary.N2O.wasteDisposal).toFixed(2));
          _2010.push((Alldata.SUM2010.Summary.CO2.landUseChangeAndForestry+Alldata.SUM2010.Summary.CH4.landUseChangeAndForestry+Alldata.SUM2010.Summary.N2O.landUseChangeAndForestry).toFixed(2));

          _2012.push((Alldata.SUM2012.Summary.CO2.energyActivity+Alldata.SUM2012.Summary.CH4.energyActivity+Alldata.SUM2012.Summary.N2O.energyActivity).toFixed(2));
          _2012.push((Alldata.SUM2012.Summary.CO2.industrialProductionProcess+Alldata.SUM2012.Summary.HFC.industrialProductionProcess+Alldata.SUM2012.Summary.N2O.industrialProductionProcess
          +Alldata.SUM2012.Summary.PFC.industrialProductionProcess+Alldata.SUM2012.Summary.SF6.industrialProductionProcess).toFixed(2));
          _2012.push((Alldata.SUM2012.Summary.CH4.agricultureActivity+Alldata.SUM2012.Summary.N2O.agricultureActivity).toFixed(2));
          _2012.push((Alldata.SUM2012.Summary.CO2.wasteDisposal+Alldata.SUM2012.Summary.CH4.wasteDisposal+Alldata.SUM2012.Summary.N2O.wasteDisposal).toFixed(2));
          _2012.push((Alldata.SUM2012.Summary.CO2.landUseChangeAndForestry+Alldata.SUM2012.Summary.CH4.landUseChangeAndForestry+Alldata.SUM2012.Summary.N2O.landUseChangeAndForestry).toFixed(2));


          _2014.push((Alldata.SUM2014.Summary.CO2.energyActivity+Alldata.SUM2014.Summary.CH4.energyActivity+Alldata.SUM2014.Summary.N2O.energyActivity).toFixed(2))
          _2014.push((Alldata.SUM2014.Summary.CO2.industrialProductionProcess+Alldata.SUM2014.Summary.HFC.industrialProductionProcess+Alldata.SUM2014.Summary.N2O.industrialProductionProcess
          +Alldata.SUM2014.Summary.PFC.industrialProductionProcess+Alldata.SUM2014.Summary.SF6.industrialProductionProcess).toFixed(2))
          _2014.push((Alldata.SUM2014.Summary.CH4.agricultureActivity+Alldata.SUM2014.Summary.N2O.agricultureActivity).toFixed(2))
          _2014.push((Alldata.SUM2014.Summary.CO2.wasteDisposal+Alldata.SUM2014.Summary.CH4.wasteDisposal+Alldata.SUM2014.Summary.N2O.wasteDisposal).toFixed(2))
          _2014.push((Alldata.SUM2014.Summary.CO2.landUseChangeAndForestry+Alldata.SUM2014.Summary.CH4.landUseChangeAndForestry+Alldata.SUM2014.Summary.N2O.landUseChangeAndForestry).toFixed(2))


          this.setState({sum2005:_2005})
          this.setState({sum2010:_2010})
          this.setState({sum2012:_2012})
          this.setState({sum2014:_2014})



          this.setState({newsum2005:_new2005})
          this.setState({newsum2010:_new2010})
          this.setState({newsum2012:_new2012})
          this.setState({newsum2014:_new2014})

          /*
           温室气体排放量趋势
           */
          var myChart1 = echarts.init(document.getElementById('saleTrend1'));
          var optionday = ({
            tooltip: {
              trigger: 'axis'
            },
            toolbox: {
              feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
              },
              right: '5%',
              iconStyle:{
                normal:{
                  borderColor:'#b1b1b1'
                },
                emphasis:{
                  borderColor:'#4a9ff2'
                }
              }
            },
            backgroundColor:'#e9e9e9',
            color: ['#43a6f7'],
            grid: {
              left: '5%',
              right: '6%',
              top: '10%',
              bottom: '6%',
              containLabel: true
            },
            textStyle: {
              fontSize: '12',
              fontWeight: 'normal',
              color: '#888888'
            },
            xAxis: {
              show: true,
              type: 'category',
              boundaryGap: false,
              axisLine: {

                lineStyle: {
                  color: '#888888'
                },
              },
              data: ['2005', '2010', '2012', '2014']
            },
            yAxis: {
              show: true,
              type: 'value',
              name: '万吨二氧化碳当量',
              nameTextStyle: {
                fontSize: 12,
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

            },
            series: [{
              name: '万吨二氧化碳当量',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: [14, 14],
              itemStyle: {
                normal: {
                  lineStyle: {
                    color: '#43a6f7'
                  }
                }
              },
              areaStyle: {
                normal: {
                  color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: 'rgba(67, 166, 247, 0.9)'

                    }, {
                      offset: 1,
                      color: 'rgba(67, 166, 247, 0.3)'
                    }],
                    globalCoord: false
                  }
                }
              },
              data: _Data
            }]
          });


          myChart1.setOption(optionday);
          window.onresize = myChart1.resize;



          /*
           温室气体分项分析
           */
          var myChart2 = echarts.init(document.getElementById('saleTrend2'));
          var optionday2 = ({
            tooltip: {
              trigger: 'axis'
            },
            toolbox: {
              feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
              },
              right: '5%',
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
            grid: {
              left: '5%',
              right: '6%',
              top: '10%',
              bottom: '6%',
              containLabel: true
            },
            legend: {
              data:['二氧化碳','甲烷','氧化亚氮']
            },
            xAxis: [
              {
                type: 'category',
                data: ['2005','2010','2012','2014'],
                axisPointer: {
                  type: 'shadow'
                },
                axisLine: {

                  lineStyle: {
                    color: '#888888'
                  },
                },
              }
            ],
            yAxis: [
              {
                type: 'value',
                name: '万吨　　　　　　',

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
                data:_Data1
              },
              {
                name:'甲烷',
                type:'bar',
                barWidth:30,
                itemStyle: {
                  normal: {
                    barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#26ea21'},
                        {offset: 0.3, color: '#26ea21'},
                        {offset: 1, color: '#089432'}
                      ]
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 20
                  }
                },
                data:_Data2
              },
              {
                name:'氧化亚氮',
                type:'bar',
                barWidth: 30,
                itemStyle: {
                  normal: {
                    barBorderRadius: 20,
                    color: new echarts.graphic.LinearGradient(
                      0, 0, 0, 1,
                      [
                        {offset: 0, color: '#fecc09'},
                        {offset: 0.3, color: '#fecc09'},
                        {offset: 1, color: '#ea9c05'}
                      ]
                    ),
                    shadowColor: 'rgba(0, 0, 0, 0.4)',
                    shadowBlur: 20
                  }
                },
                data:_Data3
              }
            ]
          });


          myChart2.setOption(optionday2);
          window.onresize = myChart2.resize;




          this.selesctYears('a1');
          this.handleQuery();




        } else {
          message.error('数据错误！');
        }
      });



  }

  selesctYears(select){

   var data = []

    if(select=='a1'){

      data = this.state.a1;
      this.setState({years:'a1'})

    }else if (select=='a2'){
      data = this.state.a2;
      this.setState({years:'a2'})
    }else if (select=='a3'){
      data = this.state.a3;
      this.setState({years:'a3'})
    }else if (select=='a4'){
      data = this.state.a4;
      this.setState({years:'a4'})
    }else if (select=='a5'){
      data = this.state.a5;
      this.setState({years:'a5'})
    }


    /*
     温室气体部门分析
     */
    var myChart3 = echarts.init(document.getElementById('saleTrend3'));
    var optionday3 = ({


      toolbox: {
        feature: {
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
        },
        right: '5%',
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
      grid: {
        left: '5%',
        right: '6%',
        top: '4%',
        bottom: '13%',
        containLabel: true
      },

      tooltip: {
        show:"true",
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      xAxis:  {
        type: 'value',
        name: '万吨二氧化碳当量',
        nameLocation: 'center',
        nameGap:35,
        axisTick : {show: false},
        axisLine: {
          show: false,
          lineStyle:{
            color:'#fff',
          }
        },
        splitLine: {
          show: false
        },
      },
      yAxis: [
        {
          type: 'category',
          axisTick : {show: false},
          axisLine: {
            show: true,
            lineStyle:{
              color:'#888888',
            }
          },
          data: ['2005','2010','2012','2014']
        },
        {
          type: 'category',
          axisLine: {show:false},
          axisTick: {show:false},
          axisLabel: {show:false},
          splitArea: {show:false},
          splitLine: {show:false},
          data: ['2005','2010','2012','2014']
        },

      ],
      series: [
        {
          name: '温室气体排放总量',
          type: 'bar',
          yAxisIndex:1,
          barWidth: 30,
          itemStyle:{
            normal: {
              show: true,

              color: new echarts.graphic.LinearGradient(
                0, 0, 1, 0,
                [
                  {offset: 0.8, color: '#188df0'},
                  {offset: 0.5, color: '#188df0'},
                  {offset: 1, color: '#83bff6'}

                ]
              ),
              barBorderRadius:50,
              borderWidth:0,
              borderColor:'#333',
            }
          },
          barGap:'0%',
          barCategoryGap:'50%',
          data:data
        }
      ]
    });


    myChart3.setOption(optionday3);
    window.onresize = myChart3.resize;

}



  onChange(checkedValues) {

  console.log('checked = ', checkedValues);



  this.setState({checkedValues:checkedValues});


}

  handleQuery(){


    if(this.state.checkedValues.length!=2){
      message.error('请选择2个年份进行对比！');
    }else {

      var checkedValues = this.state.checkedValues

      var data = [this.state.sum2005,this.state.sum2010,this.state.sum2012,this.state.sum2014]

      var data1 = [this.state.newsum2005,this.state.newsum2010,this.state.newsum2012,this.state.newsum2014];


      var years1 ,years2
      if(checkedValues[0]==0){
        years1 = '2005'
      }else if (checkedValues[0]==1){
        years1 = '2010'
      }else if (checkedValues[0]==2){
        years1 = '2012'
      }else if (checkedValues[0]==3){
        years1 = '2014'
      }

      if(checkedValues[1]==0){
        years2 = '2005'
      }else if (checkedValues[1]==1){
        years2 = '2010'
      }else if (checkedValues[1]==2){
        years2 = '2012'
      }else if (checkedValues[1]==3){
        years2 = '2014'
      }


      const _b = [];


      if(checkedValues[0]>checkedValues[1]){

        _b.push({
            key: 1,
            name: {

              value: years2,
            },
          volume: {

              value: data[checkedValues[1]][0],
            },
          volume1: {

            value: data[checkedValues[1]][1],
          },
          volume2: {

            value: data[checkedValues[1]][2],
          },
          volume3: {

            value: data[checkedValues[1]][3],
          },
          volume4: {

            value: data[checkedValues[1]][4],
          },

          }
        )

        _b.push({
            key: 2,
            name: {

              value: years1,
            },
            volume: {

              value: data[checkedValues[0]][0],
            },
            volume1: {

              value: data[checkedValues[0]][1],
            },
            volume2: {

              value: data[checkedValues[0]][2],
            },
            volume3: {

              value: data[checkedValues[0]][3],
            },
            volume4: {

              value: data[checkedValues[0]][4],
            },

          }
        )

        _b.push({
            key: 3,
            name: {

              value: '同比',
            },
            volume: {

              value: ((data[checkedValues[0]][0]-data[checkedValues[1]][0])/data[checkedValues[1]][0]*100).toFixed(2)+'%',
            },
            volume1: {

              value: ((data[checkedValues[0]][1]-data[checkedValues[1]][1])/data[checkedValues[1]][1]*100).toFixed(2)+'%',
            },
            volume2: {

              value: ((data[checkedValues[0]][2]-data[checkedValues[1]][2])/data[checkedValues[1]][2]*100).toFixed(2)+'%',
            },
            volume3: {

              value: ((data[checkedValues[0]][3]-data[checkedValues[1]][3])/data[checkedValues[1]][3]*100).toFixed(2)+'%',
            },
            volume4: {

              value: ((data[checkedValues[0]][4]-data[checkedValues[1]][4])/data[checkedValues[1]][4]*100).toFixed(2)+'%',
            },

          }
        )

      }else{
        _b.push({
            key: 1,
            name: {

              value: years1,
            },
            volume: {

              value: data[checkedValues[0]][0],
            },
            volume1: {

              value: data[checkedValues[0]][1],
            },
            volume2: {

              value: data[checkedValues[0]][2],
            },
            volume3: {

              value: data[checkedValues[0]][3],
            },
            volume4: {

              value: data[checkedValues[0]][4],
            },

          }
        )

        _b.push({
            key: 2,
            name: {

              value: years2,
            },
            volume: {

              value: data[checkedValues[1]][0],
            },
            volume1: {

              value: data[checkedValues[1]][1],
            },
            volume2: {

              value: data[checkedValues[1]][2],
            },
            volume3: {

              value: data[checkedValues[1]][3],
            },
            volume4: {

              value: data[checkedValues[1]][4],
            },

          }
        )

        _b.push({
            key: 3,
            name: {

              value: '同比',
            },
            volume: {

              value: ((data[checkedValues[1]][0]-data[checkedValues[0]][0])/data[checkedValues[0]][0]*100).toFixed(2)+'%',
            },
            volume1: {

              value: ((data[checkedValues[1]][1]-data[checkedValues[0]][1])/data[checkedValues[0]][1]*100).toFixed(2)+'%',
            },
            volume2: {

              value: ((data[checkedValues[1]][2]-data[checkedValues[0]][2])/data[checkedValues[0]][2]*100).toFixed(2)+'%',
            },
            volume3: {

              value: ((data[checkedValues[1]][3]-data[checkedValues[0]][3])/data[checkedValues[0]][3]*100).toFixed(2)+'%',
            },
            volume4: {

              value: ((data[checkedValues[1]][4]-data[checkedValues[0]][4])/data[checkedValues[0]][4]*100).toFixed(2)+'%',
            },

          }
        )

      }

      this.setState({Data:_b})



      const _b1 = [];


      if(checkedValues[0]>checkedValues[1]){

        _b1.push({
            key: 1,
            name: {

              value: years2,
            },
            volume: {

              value: data1[checkedValues[1]][0],
            },
            volume1: {

              value: data1[checkedValues[1]][1],
            },
            volume2: {

              value: data1[checkedValues[1]][2],
            },
            volume3: {

              value: data1[checkedValues[1]][3],
            },


          }
        )

        _b1.push({
            key: 2,
            name: {

              value: years1,
            },
            volume: {

              value: data1[checkedValues[0]][0],
            },
            volume1: {

              value: data1[checkedValues[0]][1],
            },
            volume2: {

              value: data1[checkedValues[0]][2],
            },
            volume3: {

              value: data1[checkedValues[0]][3],
            },


          }
        )

        _b1.push({
            key: 3,
            name: {

              value: '同比',
            },
            volume: {

              value: ((data1[checkedValues[0]][0]-data1[checkedValues[1]][0])/data1[checkedValues[1]][0]*100).toFixed(2)+'%',
            },
            volume1: {

              value: ((data1[checkedValues[0]][1]-data1[checkedValues[1]][1])/data1[checkedValues[1]][1]*100).toFixed(2)+'%',
            },
            volume2: {

              value: ((data1[checkedValues[0]][2]-data1[checkedValues[1]][2])/data1[checkedValues[1]][2]*100).toFixed(2)+'%',
            },
            volume3: {

              value: ((data1[checkedValues[0]][3]-data1[checkedValues[1]][3])/data1[checkedValues[1]][3]*100).toFixed(2)+'%',
            },


          }
        )

      }else{
        _b1.push({
            key: 1,
            name: {

              value: years1,
            },
            volume: {

              value: data1[checkedValues[0]][0].toFixed(2),
            },
            volume1: {

              value: data1[checkedValues[0]][1].toFixed(2),
            },
            volume2: {

              value: data1[checkedValues[0]][2].toFixed(2),
            },
            volume3: {

              value: data1[checkedValues[0]][3].toFixed(2),
            },


          }
        )

        _b1.push({
            key: 2,
            name: {

              value: years2,
            },
            volume: {

              value: data1[checkedValues[1]][0].toFixed(2),
            },
            volume1: {

              value: data1[checkedValues[1]][1].toFixed(2),
            },
            volume2: {

              value: data1[checkedValues[1]][2].toFixed(2),
            },
            volume3: {

              value: data1[checkedValues[1]][3].toFixed(2),
            },


          }
        )

        _b1.push({
            key: 3,
            name: {

              value: '同比',
            },
            volume: {

              value: ((data1[checkedValues[1]][0]-data1[checkedValues[0]][0])/data1[checkedValues[0]][0]*100).toFixed(2)+'%',
            },
            volume1: {

              value: ((data1[checkedValues[1]][1]-data1[checkedValues[0]][1])/data1[checkedValues[0]][1]*100).toFixed(2)+'%',
            },
            volume2: {

              value: ((data1[checkedValues[1]][2]-data1[checkedValues[0]][2])/data1[checkedValues[0]][2]*100).toFixed(2)+'%',
            },
            volume3: {

              value: ((data1[checkedValues[1]][3]-data1[checkedValues[0]][3])/data1[checkedValues[0]][3]*100).toFixed(2)+'%',
            },

          }
        )

      }

      this.setState({Data1:_b1})


      /*
       温室气体年度对比分析
       */
      var myChart4 = echarts.init(document.getElementById('saleTrend4'));
      var optionday4 = ({
        legend: {
          data:[years1,years2]
        },
          title: {
              show: true,
              text: '各部门排放总量(万吨二氧化碳当量)',
              textStyle: {
                  fontSize: '12',
                  fontWeight: 'normal',
                  color: '#888888'
              },
              top: '20',
              left: '15',
          },
        tooltip: {},

        radar: {
          radius: '60%',
          name: {
            show: true,
            padding: -8,
          },
          splitNumber: 8,
          axisLine: {
            lineStyle: {
              color: '#188df0',
              opacity: .2
            }
          },
          splitLine: {
            lineStyle: {
              color: '#188df0',
              opacity: .2
            }
          },

          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15,
            }
          },
          indicator: [{
            name: '能源活动',

          }, {
            name: '工业生产过程',

          }, {
            name: '农业活动',

          }, {
            name: '废弃物处理',

          }, {
            name: '土地利用变化和林业',

          }]
        },
        series: [{
          name: years1 +'vs'+ years2,
          type: 'radar',
          symbolSize: 0,

          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: .8
            }
          },
          data: [{
            value: data[checkedValues[0]],
            name: years1,
          }, {
            value: data[checkedValues[1]],
            name: years2,
          }]
        }],
        color: ['#188df0', '#fecc09'],


      });


      myChart4.setOption(optionday4);
      window.onresize = myChart4.resize;



      var myChart5 = echarts.init(document.getElementById('saleTrend5'));
      var optionday5 = ({

          title: {
              show: true,
              text: '温室气体排放构成(万吨二氧化碳当量)',
              textStyle: {
                  fontSize: '12',
                  fontWeight: 'normal',
                  color: '#888888'
              },
              top: '20',
              left: '15',
          },
        tooltip: {},
        legend: {
          data:[years1,years2]
        },
        radar: {
          radius: '60%',
          splitNumber: 8,
          name: {
            show: true,
            padding: -8,
          },
          axisLine: {
            lineStyle: {
              color: '#188df0',
              opacity: .2
            }
          },
          splitLine: {
            lineStyle: {
              color: '#188df0',
              opacity: .2
            }
          },
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15,
            }
          },
          indicator: [{
            name: '二氧化碳',

          }, {
            name: '甲烷',

          }, {
            name: '氧化亚氮',

          }, {
            name: '含氟气体',

          }]
        },
        series: [{
          name: years1 +'vs'+ years2,
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            normal: {
              shadowBlur: 13,
              shadowColor: 'rgba(0,0,0,.2)',
              shadowOffsetX: 0,
              shadowOffsetY: 10,
              opacity: .8
            }
          },
          data: [{
            value: data1[checkedValues[0]],
            name: years1,
          }, {
            value: data1[checkedValues[1]],
            name: years2,
          }]
        }],
        color: ['#188df0', '#fecc09'],


      });


      myChart5.setOption(optionday5);
      window.onresize = myChart5.resize;
    }

  }


  render() {

    const options = [
      { label: '2005', value: 0 },
      { label: '2010', value: 1 },
      { label: '2012', value: 2 },
      { label: '2014', value: 3 },
    ];
    const { Data } = this.state;
    const dataSource = Data.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    const columns = this.columns;

    const { Data1 } = this.state;
    const dataSource1 = Data1.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    const columns1 = this.columns1;

    return (
      <div className={styles.normal}>
        <div className={styles.title}>
          <span className={styles.title_span}>温室气体年度分析</span>
        </div>

        <div className={styles.content3}>
          <p id="content3_p">温室气体排放量趋势(CO2当量)</p>
          <div className={styles.saleTrend1} id="saleTrend1"></div>
        </div>




        <div className={styles.content3}>
          <p id="content3_p">温室气体分项分析</p>
          <div className={styles.saleTrend1} id="saleTrend2"></div>
        </div>


        <div className={styles.content3}>


        <div className={styles.selectGas}>
          <div className={styles.targetChoose}>
            <span className={styles.selectH1}>温室气体部门分析:</span>
            <ul>
              <li id="li1" className={'a1'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('a1')}}>能源活动</li>
              <li id="li2" className={'a2'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('a2')}}>工业生产过程</li>
              <li id="li3" className={'a3'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('a3')}}>农业活动</li>
              <li id="li4" className={'a4'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('a4')}}>土地利用变化和林业</li>
              <li id="li4" className={'a5'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('a5')}}>废弃物处理</li>
            </ul>
          </div>



        </div>
        <div className={styles.saleTrend1} id="saleTrend3"></div>
      </div>


        <div className={styles.content3}>


          <div className={styles.selectGas}>
            <div className={styles.targetChoose}>
              <span className={styles.selectH1}>温室气体年度对比分析<span className={styles.normalTitle}>年份选择(任选2个)：</span></span>
              <CheckboxGroup options={options} defaultValue={[0,1]} onChange={this.onChange.bind(this)} />
              <Button className={styles.button} onClick={this.handleQuery.bind(this)}>确认</Button>
            </div>



          </div>
          <div className={styles.saleTrend3} id="saleTrend4"></div>
          <div className={styles.saleTrend2} id="saleTrend5"></div>
          <div className={styles.saleTrend4} id="saleTrend6">
            <Table  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 400, y: 250 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>
          <div className={styles.saleTrend5} id="saleTrend7">
            <Table  pagination={false} bordered={true}  columns={columns1} dataSource={dataSource1} scroll={{ x: 400, y: 250 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

        </div>


      </div>
    );

  }
}


export default Form.create()(ElectricTable);
