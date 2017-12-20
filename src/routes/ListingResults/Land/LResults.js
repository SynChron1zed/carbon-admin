/**
 * 土地清单结果Created by dixu on 2017/10/31.
 */


import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch ,Radio } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Lgwp.less';
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
        width: 150,


        render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),},

      {
        title: '碳(万吨)', dataIndex: 'C', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'C', text),
      }, {
        title: '二氧化碳(万吨)', dataIndex: 'CO2', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'CO2', text),
      },  {
        title: '甲烷(吨)', dataIndex: 'CH4', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'CH4', text),
      }, {
        title: '氧化亚氮(吨)', dataIndex: 'N2O', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'N2O', text),
      }, {
        title: '温室气体(万吨CO2当量)', dataIndex: 'SF1', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'SF1', text),
      }, {
        title: '不确定性(%)', dataIndex: 'SF2', width: 70,
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
      years:'2014',
        Xdata:[],
        Xdata1:[],
    };

    this.queryTheforest('2014');

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


    //引用值
    queryTheforest(years){



        post('/activityLevelDataEntry/landUseChangeAndForestry/list', {
            year:years,

        })
            .then((res) => {

                if (res.code==0) {


                    var Alldata =res.data;

                    this.setState({Xdata:Alldata})

                    const _Data = []  //活动水平数据
                    const _Data1 = [] //排放因子数据
                    const _Data4 = []  //排放量计算



                    _Data.push(Alldata.forestActivityLevel.FAL_arborForest);//乔木林
                    _Data.push(Alldata.forestActivityLevel.FAL_bambooForest);//竹林
                    _Data.push(Alldata.forestActivityLevel.FAL_economicForest);//经济林


                    _Data1.push(Alldata.forestEmissionFactor.FEF_arborForest);//乔木林
                    _Data1.push(Alldata.forestEmissionFactor.FEF_bambooForest);//竹林
                    _Data1.push(Alldata.forestEmissionFactor.FEF_economicForest);//经济林

                    _Data4.push(Alldata.forestEmission.arborForest);//乔木林
                    _Data4.push(Alldata.forestEmission.bambooForest);//竹林
                    _Data4.push(Alldata.forestEmission.economicForest);//经济林

                    const fossilTitle = [


                        '乔木林',
                        '竹林',
                        '经济林',



                    ]


                    const _a4 = [];
                    var _presentCombustionCO2Emissions = 0;
                    var _presentCombustionCH4Emissions = 0;
                    var _presentCombustionN2OEmissions = 0;
                    var _OffSiteCombustionCO2Emissions = 0;
                    var _OxidativeDecompositionCO2Emissions = 0;
                    var _biomassCarbonEmissionsFromForestConsumptionAreDeducted = 0;

                    for(var i = 0 ;i<3;i++){



                        _a4.push({
                            key: i,
                            name:fossilTitle[i],
                            presentCombustionCO2Emissions: _Data4[i].presentCombustionCO2Emissions,
                            presentCombustionCH4Emissions: _Data4[i].presentCombustionCH4Emissions,
                            presentCombustionN2OEmissions: _Data4[i].presentCombustionN2OEmissions,
                            OffSiteCombustionCO2Emissions: _Data4[i].OffSiteCombustionCO2Emissions,
                            OxidativeDecompositionCO2Emissions: _Data4[i].OxidativeDecompositionCO2Emissions,
                            biomassCarbonEmissionsFromForestConsumptionAreDeducted: _Data4[i].biomassCarbonEmissionsFromForestConsumptionAreDeducted,


                        });

                        _presentCombustionCO2Emissions +=_Data4[i].presentCombustionCO2Emissions;
                        _presentCombustionCH4Emissions +=_Data4[i].presentCombustionCH4Emissions;
                        _presentCombustionN2OEmissions +=_Data4[i].presentCombustionN2OEmissions;
                        _OffSiteCombustionCO2Emissions +=_Data4[i].OffSiteCombustionCO2Emissions;
                        _OxidativeDecompositionCO2Emissions +=_Data4[i].OxidativeDecompositionCO2Emissions;
                        _biomassCarbonEmissionsFromForestConsumptionAreDeducted +=_Data4[i].biomassCarbonEmissionsFromForestConsumptionAreDeducted;

                    }

                    const _b4 = [];


                    for(var i = 0 ; i<_a4.length;i++){


                        _b4.push({
                                key:_a4[i].key,
                                name:{

                                    value:_a4[i].name ,
                                },
                                presentCombustionCO2Emissions:{
                                    editable: false,
                                    value:_a4[i].presentCombustionCO2Emissions ,
                                },
                                presentCombustionCH4Emissions: {
                                    editable: false,
                                    value:_a4[i].presentCombustionCH4Emissions ,
                                },
                                presentCombustionN2OEmissions: {
                                    editable: false,
                                    value:_a4[i].presentCombustionN2OEmissions ,
                                },
                                OffSiteCombustionCO2Emissions: {
                                    editable: false,
                                    value:_a4[i].OffSiteCombustionCO2Emissions ,
                                },
                                OxidativeDecompositionCO2Emissions: {
                                    editable: false,
                                    value:_a4[i].OxidativeDecompositionCO2Emissions ,
                                },
                                biomassCarbonEmissionsFromForestConsumptionAreDeducted: {
                                    editable: false,
                                    value:_a4[i].biomassCarbonEmissionsFromForestConsumptionAreDeducted ,
                                },

                            }
                        )
                    }

                    _b4.push({
                            key:_Data4.length,
                            name:{
                                editable: false,
                                value:'合计或平均' ,
                            },
                            presentCombustionCO2Emissions:{
                                editable: false,
                                value:_presentCombustionCO2Emissions.toFixed(2) ,
                            },
                            presentCombustionCH4Emissions: {
                                editable: false,
                                value:_presentCombustionCH4Emissions.toFixed(2) ,
                            },
                            presentCombustionN2OEmissions: {
                                editable: false,
                                value:_presentCombustionN2OEmissions.toFixed(2) ,
                            },
                            OffSiteCombustionCO2Emissions: {
                                editable: false,
                                value:_OffSiteCombustionCO2Emissions.toFixed(2),
                            },
                            OxidativeDecompositionCO2Emissions: {
                                editable: false,
                                value:_OxidativeDecompositionCO2Emissions.toFixed(2) ,
                            },
                            biomassCarbonEmissionsFromForestConsumptionAreDeducted: {
                                editable: false,
                                value:_biomassCarbonEmissionsFromForestConsumptionAreDeducted.toFixed(2) ,
                            },



                        }
                    )


                    const _a = [];


                    for(var i = 0 ;i<3;i++){



                        _a.push({
                            key: i,
                            name:fossilTitle[i],
                            fiveYearsAverageConversionArea: _Data[i].fiveYearsAverageConversionArea,
                            tenYearsAverageConversionArea: _Data[i].tenYearsAverageConversionArea,


                        });


                    }



                    const _a1 = [];



                    for(var i = 0 ;i<3;i++){


                        _a1.push({
                            key: i,
                            name:fossilTitle[i],
                            biomassCarbonDensityBeforeTransformation:_Data1[i].biomassCarbonDensityBeforeTransformation,
                            biomassCarbonDensityAfterTransformation: _Data1[i].biomassCarbonDensityAfterTransformation,
                            burnedNow: _Data1[i].burnedNow,
                            burnedInDifferentPlaces: _Data1[i].burnedInDifferentPlaces,
                            oxidativeDecomposition: _Data1[i].oxidativeDecomposition,
                            biomassBurningOxidationCoefficient: _Data1[i].biomassBurningOxidationCoefficient,
                            CH4_CRelativeToCO2_CEmissionsRatio: _Data1[i].CH4_CRelativeToCO2_CEmissionsRatio,
                            N2O_NRelativeToCO2_CEmissionsRatio: _Data1[i].N2O_NRelativeToCO2_CEmissionsRatio,
                            nitrogenAndCarbonRatio: _Data1[i].nitrogenAndCarbonRatio,


                        });


                    }


                    const _b = [];


                    for(var i = 0 ; i<_a.length;i++){


                        _b.push({
                                key:_a[i].key,
                                name:{

                                    value:_a[i].name ,
                                },
                                fiveYearsAverageConversionArea:{
                                    editable: false,
                                    value:_a[i].fiveYearsAverageConversionArea ,
                                },
                                tenYearsAverageConversionArea: {
                                    editable: false,
                                    value:_a[i].tenYearsAverageConversionArea ,
                                },


                            }
                        )
                    }

                    const _b1 = [];


                    for(var i = 0 ; i<_a1.length;i++){


                        _b1.push({
                                key:_a1[i].key,
                                name:{

                                    value:_a1[i].name ,
                                },
                                biomassCarbonDensityBeforeTransformation:{

                                    value:_a1[i].biomassCarbonDensityBeforeTransformation ,
                                },
                                biomassCarbonDensityAfterTransformation:{
                                    editable: false,
                                    value:_a1[i].biomassCarbonDensityAfterTransformation ,
                                },
                                burnedNow: {
                                    editable: false,
                                    value:_a1[i].burnedNow ,
                                },
                                burnedInDifferentPlaces: {
                                    editable: false,
                                    value:_a1[i].burnedInDifferentPlaces ,
                                },
                                oxidativeDecomposition: {
                                    editable: false,
                                    value:_a1[i].oxidativeDecomposition ,
                                },
                                biomassBurningOxidationCoefficient: {
                                    editable: false,
                                    value:_a1[i].biomassBurningOxidationCoefficient ,
                                },
                                CH4_CRelativeToCO2_CEmissionsRatio: {
                                    editable: false,
                                    value:_a1[i].CH4_CRelativeToCO2_CEmissionsRatio ,
                                },
                                N2O_NRelativeToCO2_CEmissionsRatio: {
                                    editable: false,
                                    value:_a1[i].N2O_NRelativeToCO2_CEmissionsRatio ,
                                },
                                nitrogenAndCarbonRatio: {
                                    editable: false,
                                    value:_a1[i].nitrogenAndCarbonRatio ,
                                },



                            }
                        )
                    }





                    this.newQueryTheforest(years)
                    this.setState({ loading: false});


                } else {
                    message.error('数据错误！');
                }
            });

    }

    //引用值
    newQueryTheforest(years){


        post('/uncertainty/landUseChangeAndForestry/list', {
            year:years,

        })
            .then((res) => {

                if (res.code==0) {


                    var Alldata =res.data;

                    this.setState({Xdata1:Alldata})

                    const _Data = [] //活动水平不确定性
                    const _Data1 = [] //排放因子不确定性
                    const _Data5 = [] //不确定性计算


                    _Data.push(Alldata.FAL_arborForest);//乔木林
                    _Data.push(Alldata.FAL_bambooForest);//竹林
                    _Data.push(Alldata.FAL_economicForest);//经济林


                    _Data1.push(Alldata.FEF_arborForest);//乔木林
                    _Data1.push(Alldata.FEF_bambooForest);//竹林
                    _Data1.push(Alldata.FEF_economicForest);//经济林


                    _Data5.push(Alldata.FE_arborForest);//乔木林
                    _Data5.push(Alldata.FE_bambooForest);//竹林
                    _Data5.push(Alldata.FE_economicForest);//经济林
                    _Data5.push(Alldata.FE_total);//合计

                    const fossilTitle = [


                        '乔木林',
                        '竹林',
                        '经济林',
                        '平均或合计',



                    ]



                    const _a5 = [];
                    var _presentCombustionCO2Emissions = 0;
                    var _presentCombustionCH4Emissions = 0;
                    var _presentCombustionN2OEmissions = 0;
                    var _OffSiteCombustionCO2Emissions = 0;
                    var _OxidativeDecompositionCO2Emissions = 0;
                    var _biomassCarbonEmissionsFromForestConsumptionAreDeducted = 0;

                    for(var i = 0 ;i<4;i++){



                        _a5.push({
                            key: i,
                            name:fossilTitle[i],
                            presentCombustionCO2Emissions: _Data5[i].presentCombustionCO2Emissions,
                            presentCombustionCH4Emissions: _Data5[i].presentCombustionCH4Emissions,
                            presentCombustionN2OEmissions: _Data5[i].presentCombustionN2OEmissions,
                            OffSiteCombustionCO2Emissions: _Data5[i].OffSiteCombustionCO2Emissions,
                            OxidativeDecompositionCO2Emissions: _Data5[i].OxidativeDecompositionCO2Emissions,
                            biomassCarbonEmissionsFromForestConsumptionAreDeducted: _Data5[i].biomassCarbonEmissionsFromForestConsumptionAreDeducted,


                        });


                    }

                    const _b5 = [];


                    for(var i = 0 ; i<_a5.length;i++){


                        _b5.push({
                                key:_a5[i].key,
                                name:{

                                    value:_a5[i].name ,
                                },
                                presentCombustionCO2Emissions:{
                                    editable: false,
                                    value:_a5[i].presentCombustionCO2Emissions ,
                                },
                                presentCombustionCH4Emissions: {
                                    editable: false,
                                    value:_a5[i].presentCombustionCH4Emissions ,
                                },
                                presentCombustionN2OEmissions: {
                                    editable: false,
                                    value:_a5[i].presentCombustionN2OEmissions ,
                                },
                                OffSiteCombustionCO2Emissions: {
                                    editable: false,
                                    value:_a5[i].OffSiteCombustionCO2Emissions ,
                                },
                                OxidativeDecompositionCO2Emissions: {
                                    editable: false,
                                    value:_a5[i].OxidativeDecompositionCO2Emissions ,
                                },
                                biomassCarbonEmissionsFromForestConsumptionAreDeducted: {
                                    editable: false,
                                    value:_a5[i].biomassCarbonEmissionsFromForestConsumptionAreDeducted ,
                                },

                            }
                        )
                    }




                    const _a = [];


                    for(var i = 0 ;i<3;i++){



                        _a.push({
                            key: i,
                            name:fossilTitle[i],
                            fiveYearsAverageConversionArea: _Data[i].fiveYearsAverageConversionArea,
                            tenYearsAverageConversionArea: _Data[i].tenYearsAverageConversionArea,


                        });


                    }






                    const _a1 = [];


                    for(var i = 0 ;i<3;i++){


                        _a1.push({
                            key: i,
                            name:fossilTitle[i],
                            biomassCarbonDensityBeforeTransformation:_Data1[i].biomassCarbonDensityBeforeTransformation,
                            biomassCarbonDensityAfterTransformation: _Data1[i].biomassCarbonDensityAfterTransformation,
                            burnedNow: _Data1[i].burnedNow,
                            burnedInDifferentPlaces: _Data1[i].burnedInDifferentPlaces,
                            oxidativeDecomposition: _Data1[i].oxidativeDecomposition,
                            biomassBurningOxidationCoefficient: _Data1[i].biomassBurningOxidationCoefficient,
                            CH4_CRelativeToCO2_CEmissionsRatio: _Data1[i].CH4_CRelativeToCO2_CEmissionsRatio,
                            N2O_NRelativeToCO2_CEmissionsRatio: _Data1[i].N2O_NRelativeToCO2_CEmissionsRatio,
                            nitrogenAndCarbonRatio: _Data1[i].nitrogenAndCarbonRatio,


                        });


                    }







                    const _b = [];


                    for(var i = 0 ; i<_a.length;i++){


                        _b.push({
                                key:_a[i].key,
                                name:{

                                    value:_a[i].name ,
                                },
                                fiveYearsAverageConversionArea:{
                                    editable: false,
                                    value:_a[i].fiveYearsAverageConversionArea ,
                                },
                                tenYearsAverageConversionArea: {
                                    editable: false,
                                    value:_a[i].tenYearsAverageConversionArea ,
                                },


                            }
                        )
                    }

                    const _b1 = [];


                    for(var i = 0 ; i<_a1.length;i++){


                        _b1.push({
                                key:_a1[i].key,
                                name:{

                                    value:_a1[i].name ,
                                },
                                biomassCarbonDensityBeforeTransformation:{
                                    editable: false,
                                    value:_a1[i].biomassCarbonDensityBeforeTransformation ,
                                },
                                biomassCarbonDensityAfterTransformation:{
                                    editable: false,
                                    value:_a1[i].biomassCarbonDensityAfterTransformation ,
                                },
                                burnedNow: {
                                    editable: false,
                                    value:_a1[i].burnedNow ,
                                },
                                burnedInDifferentPlaces: {
                                    editable: false,
                                    value:_a1[i].burnedInDifferentPlaces ,
                                },
                                oxidativeDecomposition: {
                                    editable: false,
                                    value:_a1[i].oxidativeDecomposition ,
                                },
                                biomassBurningOxidationCoefficient: {
                                    editable: false,
                                    value:_a1[i].biomassBurningOxidationCoefficient ,
                                },
                                CH4_CRelativeToCO2_CEmissionsRatio: {
                                    editable: false,
                                    value:_a1[i].CH4_CRelativeToCO2_CEmissionsRatio ,
                                },
                                N2O_NRelativeToCO2_CEmissionsRatio: {
                                    editable: false,
                                    value:_a1[i].N2O_NRelativeToCO2_CEmissionsRatio ,
                                },
                                nitrogenAndCarbonRatio: {
                                    editable: false,
                                    value:_a1[i].nitrogenAndCarbonRatio ,
                                },



                            }
                        )
                    }




                    this.queryGut(years);
                    this.setState({ loading: false});


                } else {
                    message.error('数据错误！');
                }
            });

    }

  //
    queryGut(years){



    post('/report/landUseChangeAndForestry/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {




          var Alldata =res.data;

          var xdata = this.state.Xdata
          var xdata1 = this.state.Xdata1


          

          //排放量计算
            var _xData4 = []
            _xData4.push(xdata.forestEmission.arborForest);//乔木林
            _xData4.push(xdata.forestEmission.bambooForest);//竹林
            _xData4.push(xdata.forestEmission.economicForest);//经济林



            const _xa4 = [];
            var _presentCombustionCO2Emissions = 0;
            var _presentCombustionCH4Emissions = 0;
            var _presentCombustionN2OEmissions = 0;
            var _OffSiteCombustionCO2Emissions = 0;
            var _OxidativeDecompositionCO2Emissions = 0;
            var _biomassCarbonEmissionsFromForestConsumptionAreDeducted = 0;

            for(var i = 0 ;i<3;i++){

                _xa4.push({
                    key: i,
                    presentCombustionCO2Emissions: _xData4[i].presentCombustionCO2Emissions,
                    presentCombustionCH4Emissions: _xData4[i].presentCombustionCH4Emissions,
                    presentCombustionN2OEmissions: _xData4[i].presentCombustionN2OEmissions,
                    OffSiteCombustionCO2Emissions: _xData4[i].OffSiteCombustionCO2Emissions,
                    OxidativeDecompositionCO2Emissions: _xData4[i].OxidativeDecompositionCO2Emissions,
                    biomassCarbonEmissionsFromForestConsumptionAreDeducted: _xData4[i].biomassCarbonEmissionsFromForestConsumptionAreDeducted,


                });

                _presentCombustionCO2Emissions +=_xData4[i].presentCombustionCO2Emissions;
                _presentCombustionCH4Emissions +=_xData4[i].presentCombustionCH4Emissions;
                _presentCombustionN2OEmissions +=_xData4[i].presentCombustionN2OEmissions;
                _OffSiteCombustionCO2Emissions +=_xData4[i].OffSiteCombustionCO2Emissions;
                _OxidativeDecompositionCO2Emissions +=_xData4[i].OxidativeDecompositionCO2Emissions;
                _biomassCarbonEmissionsFromForestConsumptionAreDeducted +=_xData4[i].biomassCarbonEmissionsFromForestConsumptionAreDeducted;

            }

            var Gut10 = Math.abs(_presentCombustionCO2Emissions+_OffSiteCombustionCO2Emissions+_presentCombustionCH4Emissions*21+_presentCombustionN2OEmissions*310)==0 ? 0:
                Math.sqrt((Math.pow(_presentCombustionCO2Emissions,2)*Math.pow(xdata1.FE_total.presentCombustionCO2Emissions,2)+Math.pow(_OffSiteCombustionCO2Emissions,2)*Math.pow(xdata1.FE_total.OffSiteCombustionCO2Emissions,2)
            +( Math.pow(_presentCombustionCH4Emissions*21,2))*Math.pow(xdata1.FE_total.presentCombustionCH4Emissions,2)
            +( Math.pow(_presentCombustionN2OEmissions*310,2))*Math.pow(xdata1.FE_total.presentCombustionN2OEmissions,2)))/Math.abs(_presentCombustionCO2Emissions+_OffSiteCombustionCO2Emissions+_presentCombustionCH4Emissions*21+_presentCombustionN2OEmissions*310)
            var Gut11 = xdata1.FE_total.OxidativeDecompositionCO2Emissions
            var Gut9 = Math.abs((Alldata.CO2.combustionEmission+(Alldata.CH4.combustionEmission*21/10000)+(Alldata.N2O.combustionEmission*310/10000)))+Math.abs(Alldata.CO2.decompositionOfEmission)==0 ? 0:
            (Math.sqrt((Alldata.CO2.combustionEmission+(Alldata.CH4.combustionEmission*21/10000)+(Alldata.N2O.combustionEmission*310/10000))*(Alldata.CO2.combustionEmission+(Alldata.CH4.combustionEmission*21/10000)+(Alldata.N2O.combustionEmission*310/10000))*Gut10*Gut10
            +Alldata.CO2.decompositionOfEmission*Alldata.CO2.decompositionOfEmission*Gut11*Gut11))/(Math.abs((Alldata.CO2.combustionEmission+(Alldata.CH4.combustionEmission*21/10000)+(Alldata.N2O.combustionEmission*310/10000)))+Math.abs(Alldata.CO2.decompositionOfEmission))

            var Gut8 = xdata1.arborForestEmissions[xdata1.arborForestEmissions.length-1].lossOfCarbonConsumption
            var Gut7 = xdata1.arborForestEmissions[xdata1.arborForestEmissions.length-1].afterCorrectionHarvestingConsumptionOfCarbonEmissions
            var Gut6 = xdata1.SWSBTSFE_total.changesInBiomassCarbonStocks
            var Gut5 = xdata1.EFBFE_countrySpecialIrrigation[xdata1.EFBFE_countrySpecialIrrigation.length-1].changesInBiomassCarbonStocks
            var Gut4 = xdata1.EFBFE_bambooForest[xdata1.EFBFE_bambooForest.length-1].changesInBiomassCarbonStocks
            var Gut3 = xdata1.EFBFE_economicForest[xdata1.EFBFE_economicForest.length-1].changesInBiomassCarbonStocks
            var Gut2 = xdata1.arborForestEmissions[xdata1.arborForestEmissions.length-1].biomassGrowthCarbonUptake

            var Gut1 = Math.abs(Alldata.CO2.arborForest)
            +Math.abs(Alldata.CO2.economicForest)
            +Math.abs(Alldata.CO2.bambooForest)
            +Math.abs(Alldata.CO2.countrySpecialIrrigation)
            +Math.abs(Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest)
            +Math.abs(Alldata.CO2.harvestingConsumption)
            +Math.abs(Alldata.CO2.lossOfConsumption) == 0 ? 0: 
            Math.sqrt(Alldata.CO2.arborForest*Alldata.CO2.arborForest*Gut2*Gut2
            +Alldata.CO2.economicForest*Alldata.CO2.economicForest*Gut3*Gut3
            +Alldata.CO2.bambooForest*Alldata.CO2.bambooForest*Gut4*Gut4
            +Alldata.CO2.countrySpecialIrrigation*Alldata.CO2.countrySpecialIrrigation*Gut5*Gut5
            +Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest*Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest*Gut6*Gut6
            +Alldata.CO2.harvestingConsumption*Alldata.CO2.harvestingConsumption*Gut7*Gut7
            +Alldata.CO2.lossOfConsumption*Alldata.CO2.lossOfConsumption*Gut8*Gut8)/ (Math.abs(Alldata.CO2.arborForest)
            +Math.abs(Alldata.CO2.economicForest)
            +Math.abs(Alldata.CO2.bambooForest)
            +Math.abs(Alldata.CO2.countrySpecialIrrigation)
            +Math.abs(Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest)
            +Math.abs(Alldata.CO2.harvestingConsumption)
            +Math.abs(Alldata.CO2.lossOfConsumption))

            var Gut12 = Math.abs((Alldata.CO2.arborForest+Alldata.CO2.economicForest+Alldata.CO2.bambooForest+Alldata.CO2.countrySpecialIrrigation+Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest+Alldata.CO2.harvestingConsumption+Alldata.CO2.lossOfConsumption))
            +Math.abs(((Alldata.CO2.combustionEmission+(Alldata.CH4.combustionEmission*21/10000)+(Alldata.N2O.combustionEmission*310/10000))+Alldata.CO2.decompositionOfEmission)) == 0 ? 0:
            Math.sqrt(Math.pow((Alldata.CO2.arborForest+Alldata.CO2.economicForest+Alldata.CO2.bambooForest+Alldata.CO2.countrySpecialIrrigation+Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest+Alldata.CO2.harvestingConsumption+Alldata.CO2.lossOfConsumption),2)*Math.pow(Gut1,2)
            +Math.pow(((Alldata.CO2.combustionEmission+(Alldata.CH4.combustionEmission*21/10000)+(Alldata.N2O.combustionEmission*310/10000))+Alldata.CO2.decompositionOfEmission),2)*Math.pow(Gut9,2))
            /(Math.abs((Alldata.CO2.arborForest+Alldata.CO2.economicForest+Alldata.CO2.bambooForest+Alldata.CO2.countrySpecialIrrigation+Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest+Alldata.CO2.harvestingConsumption+Alldata.CO2.lossOfConsumption))
            +Math.abs(((Alldata.CO2.combustionEmission+(Alldata.CH4.combustionEmission*21/10000)+(Alldata.N2O.combustionEmission*310/10000))+Alldata.CO2.decompositionOfEmission)))


          


          const _Data1 = []  //c
          const  _Data2 = []  //co2
          const  _Data3= []  //ch4
          const  _Data4= []  //n2o
          const  _Data5= []  //n2o
          const  _Data6= []  //n2o



          const fossilTitle = [

            '森林和其他木质生物质碳储量变化',
            '乔木林',
            '经济林',
            '竹林',
            '特种灌木林',
            '疏林、散生木和四旁树',
            '采伐消耗',
            '枯损消耗',
            '森林转化碳排放',
            '燃烧排放',
            '分解排放',
            '总计 ',

          ]




          _Data1.push((Alldata.C.arborForest+Alldata.C.economicForest+Alldata.C.bambooForest+Alldata.C.countrySpecialIrrigation+Alldata.C.scatteredWoodSurroundedByTreesSparseForest+Alldata.C.harvestingConsumption+Alldata.C.lossOfConsumption).toFixed(6))

          _Data1.push(Alldata.C.arborForest)//乔木林
          _Data1.push(Alldata.C.economicForest)//经济林
          _Data1.push(Alldata.C.bambooForest)//竹林
          _Data1.push(Alldata.C.countrySpecialIrrigation)//特种灌木林
          _Data1.push(Alldata.C.scatteredWoodSurroundedByTreesSparseForest)//疏林、散生木和四旁树
          _Data1.push(Alldata.C.harvestingConsumption)//采伐消耗
          _Data1.push(Alldata.C.lossOfConsumption)//枯损消耗

          _Data1.push((Alldata.C.combustionEmission+Alldata.C.decompositionOfEmission).toFixed(6))

          _Data1.push(Alldata.C.combustionEmission)//燃烧排放
          _Data1.push(Alldata.C.decompositionOfEmission)//分解排放

          _Data1.push((Alldata.C.combustionEmission+Alldata.C.decompositionOfEmission
            +Alldata.C.arborForest+Alldata.C.economicForest+Alldata.C.bambooForest+Alldata.C.countrySpecialIrrigation+Alldata.C.scatteredWoodSurroundedByTreesSparseForest+Alldata.C.harvestingConsumption+Alldata.C.lossOfConsumption).toFixed(6))




          _Data2.push((Alldata.CO2.arborForest+Alldata.CO2.economicForest+Alldata.CO2.bambooForest+Alldata.CO2.countrySpecialIrrigation+Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest+Alldata.CO2.harvestingConsumption+Alldata.CO2.lossOfConsumption).toFixed(6))

          _Data2.push(Alldata.CO2.arborForest)//乔木林
          _Data2.push(Alldata.CO2.economicForest)//经济林
          _Data2.push(Alldata.CO2.bambooForest)//竹林
          _Data2.push(Alldata.CO2.countrySpecialIrrigation)//特种灌木林
          _Data2.push(Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest)//疏林、散生木和四旁树
          _Data2.push(Alldata.CO2.harvestingConsumption)//采伐消耗
          _Data2.push(Alldata.CO2.lossOfConsumption)//枯损消耗

          _Data2.push((Alldata.CO2.combustionEmission+Alldata.CO2.decompositionOfEmission).toFixed(6))
          _Data2.push(Alldata.CO2.combustionEmission)//燃烧排放
          _Data2.push(Alldata.CO2.decompositionOfEmission)//分解排放

          _Data2.push(((Alldata.CO2.arborForest+Alldata.CO2.economicForest+Alldata.CO2.bambooForest+Alldata.CO2.countrySpecialIrrigation+Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest+Alldata.CO2.harvestingConsumption+Alldata.CO2.lossOfConsumption)
              +(Alldata.CO2.combustionEmission+Alldata.CO2.decompositionOfEmission)).toFixed(6))



          _Data3.push('-')
          _Data3.push('-')
          _Data3.push('-')
          _Data3.push('-')
          _Data3.push('-')
          _Data3.push('-')
          _Data3.push('-')
          _Data3.push('-')
          _Data3.push(Alldata.CH4.combustionEmission)
          _Data3.push(Alldata.CH4.combustionEmission)
          _Data3.push('-')
          _Data3.push(Alldata.CH4.combustionEmission)


          _Data4.push('-')
          _Data4.push('-')
          _Data4.push('-')
          _Data4.push('-')
          _Data4.push('-')
          _Data4.push('-')
          _Data4.push('-')
          _Data4.push('-')
          _Data4.push(Alldata.N2O.combustionEmission)
          _Data4.push(Alldata.N2O.combustionEmission)
          _Data4.push('-')
          _Data4.push(Alldata.N2O.combustionEmission)



          _Data5.push((Alldata.CO2.arborForest+Alldata.CO2.economicForest+Alldata.CO2.bambooForest+Alldata.CO2.countrySpecialIrrigation+Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest+Alldata.CO2.harvestingConsumption+Alldata.CO2.lossOfConsumption).toFixed(6))
          _Data5.push(Alldata.CO2.arborForest)
          _Data5.push(Alldata.CO2.economicForest)
          _Data5.push(Alldata.CO2.bambooForest)
          _Data5.push(Alldata.CO2.countrySpecialIrrigation)
          _Data5.push(Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest)
          _Data5.push(Alldata.CO2.harvestingConsumption)
          _Data5.push(Alldata.CO2.lossOfConsumption)

          _Data5.push(((Alldata.CO2.combustionEmission+(Alldata.CH4.combustionEmission*21/10000)+(Alldata.N2O.combustionEmission*310/10000))+Alldata.CO2.decompositionOfEmission).toFixed(6))

          _Data5.push((Alldata.CO2.combustionEmission+(Alldata.CH4.combustionEmission*21/10000)+(Alldata.N2O.combustionEmission*310/10000)).toFixed(6))
          _Data5.push(Alldata.CO2.decompositionOfEmission)


          _Data5.push(((Alldata.CO2.arborForest+Alldata.CO2.economicForest+Alldata.CO2.bambooForest+Alldata.CO2.countrySpecialIrrigation+Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest+Alldata.CO2.harvestingConsumption+Alldata.CO2.lossOfConsumption)+((Alldata.CO2.combustionEmission+(Alldata.CH4.combustionEmission*21/10000)+(Alldata.N2O.combustionEmission*310/10000))+Alldata.CO2.decompositionOfEmission)).toFixed(6))


          _Data6.push(Gut1.toFixed(2))
          _Data6.push(Gut2)
          _Data6.push(Gut3.toFixed(2))
          _Data6.push(Gut4.toFixed(2))
          _Data6.push(Gut5.toFixed(2))
          _Data6.push(Gut6)
          _Data6.push(Gut7)
          _Data6.push(Gut8)
          _Data6.push(Gut9.toFixed(2))
          _Data6.push(Gut10.toFixed(2))
          _Data6.push(Gut11)
          _Data6.push(Gut12.toFixed(2))





          const _b1= []

          for(var i  = 0 ;i <_Data1.length;i++){
            _b1.push({
              key:i,
              name:{

                value:fossilTitle[i] ,
              },
              C:{

                value:_Data1[i] ,
              },
              CO2:{

                value:_Data2[i] ,
              },
              CH4:{

                value:_Data3[i],
              },
              N2O:{

                value:_Data4[i] ,
              },
              SF1:{

                value:_Data5[i] ,
              },
              SF2:{

                value:_Data6[i] ,
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

  //update
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
          this.queryTheforest(this.state.years)
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
    this.queryTheforest(years)
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
          <span className={styles.title_span}> 土地利用变化和林业温室气体清单汇总及不确定性计算表</span>
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
            <p>土地利用变化和林业温室气体清单汇总及不确定性计算表</p>


            <Table size="small"  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 1020 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>
        </Spin>









      </div>
    );

  }
}


export default Form.create()(ElectricTable);

