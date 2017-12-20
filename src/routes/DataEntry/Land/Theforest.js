/**
 * 森林Created by dixu on 2017/11/13.
 */


import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch ,Radio } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Land.less';
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

class EditableCell4 extends React.Component {

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

class EditableCell5 extends React.Component {

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


        render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),},

      {
        title: '5年平均转化面积(公顷/年)', dataIndex: 'fiveYearsAverageConversionArea', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'fiveYearsAverageConversionArea', text),
      }, {
        title: '10年平均转化面积(公顷/年)', dataIndex: 'tenYearsAverageConversionArea', width: 150,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'tenYearsAverageConversionArea', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 40,

        render: (text, record, index) => {

          const { editable } = this.state.data[index].fiveYearsAverageConversionArea;
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
        width: 100,

        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'name', text),},

      {
        title: '转化前地上生物量碳密度(吨碳/公顷)', dataIndex: 'biomassCarbonDensityBeforeTransformation', width: 100,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'biomassCarbonDensityBeforeTransformation', text),
      }, {
        title: '转化后地上生物量碳密度(吨碳/公顷)', dataIndex: 'biomassCarbonDensityAfterTransformation', width: 150,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'biomassCarbonDensityAfterTransformation', text),
      },
      {
        title: '现地燃烧(%)', dataIndex: 'burnedNow', width: 150,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'burnedNow', text),
      },
      {
        title: '异地燃烧(%)', dataIndex: 'burnedInDifferentPlaces', width: 150,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'burnedInDifferentPlaces', text),
      },
      {
        title: '氧化分解(%)', dataIndex: 'oxidativeDecomposition', width: 150,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'oxidativeDecomposition', text),
      },
      {
        title: '生物量燃烧氧化系数', dataIndex: 'biomassBurningOxidationCoefficient', width: 150,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'biomassBurningOxidationCoefficient', text),
      },
      {
        title: 'CH4-C相对CO2-C的排放比例', dataIndex: 'CH4_CRelativeToCO2_CEmissionsRatio', width: 150,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'CH4_CRelativeToCO2_CEmissionsRatio', text),
      },
      {
        title: 'N2O-N相对CO2-C的排放比例', dataIndex: 'N2O_NRelativeToCO2_CEmissionsRatio', width: 150,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'N2O_NRelativeToCO2_CEmissionsRatio', text),
      },
      {
        title: '氮碳比', dataIndex: 'nitrogenAndCarbonRatio', width: 150,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'nitrogenAndCarbonRatio', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data1[index].biomassCarbonDensityAfterTransformation;
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

    this.columns2 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 100,


        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'name', text),
          props: {},

        };

          return obj}

      }, {
        title: '5年平均转化面积（不确定性%）', dataIndex: 'fiveYearsAverageConversionArea', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'fiveYearsAverageConversionArea', text),
          props: {},

        };



          return obj},
      },{
        title: '10年平均转化面积（不确定性%）', dataIndex: 'tenYearsAverageConversionArea', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'tenYearsAverageConversionArea', text),
          props: {},

        };

          return obj},
      },

      {
        title: '编辑',
        dataIndex: 'operation',

        width:100,

        render: (text, record, index) => {


          const { editable } = this.state.data2[index].fiveYearsAverageConversionArea;


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
        width: 100,


        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'name', text),},

      {
        title: '转化前地上生物量碳密度(不确定性%)', dataIndex: 'biomassCarbonDensityBeforeTransformation', width: 100,
        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'biomassCarbonDensityBeforeTransformation', text),
      }, {
        title: '转化后地上生物量碳密度(不确定性%)', dataIndex: 'biomassCarbonDensityAfterTransformation', width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'biomassCarbonDensityAfterTransformation', text),
      },
      {
        title: '地上生物量现地燃烧比例(不确定性%)', dataIndex: 'burnedNow', width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'burnedNow', text),
      },
      {
        title: '地上生物量异地燃烧比例(不确定性%)', dataIndex: 'burnedInDifferentPlaces', width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'burnedInDifferentPlaces', text),
      },
      {
        title: '地上生物量氧化分解比例(不确定性%)', dataIndex: 'oxidativeDecomposition', width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'oxidativeDecomposition', text),
      },
      {
        title: '生物量燃烧氧化系数(不确定性%)', dataIndex: 'biomassBurningOxidationCoefficient', width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'biomassBurningOxidationCoefficient', text),
      },
      {
        title: 'CH4-C相对CO2-C的排放比例(不确定性%)', dataIndex: 'CH4_CRelativeToCO2_CEmissionsRatio', width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'CH4_CRelativeToCO2_CEmissionsRatio', text),
      },
      {
        title: 'N2O-N相对CO2-C的排放比例(不确定性%)', dataIndex: 'N2O_NRelativeToCO2_CEmissionsRatio', width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'N2O_NRelativeToCO2_CEmissionsRatio', text),
      },
      {
        title: '氮碳比(不确定性%)', dataIndex: 'nitrogenAndCarbonRatio', width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'nitrogenAndCarbonRatio', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data3[index].biomassCarbonDensityAfterTransformation;
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
      }];

    this.columns4 = [

      {
        title: '数据项',
        children: [{
          title: '', dataIndex: 'name', width: 100, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns4(this.state.data4, index, 'name', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '现地燃烧排放 ',
        children: [{
          title: 'CO2排放（吨碳/年）', dataIndex: 'presentCombustionCO2Emissions', width: 150, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns4(this.state.data4, index, 'presentCombustionCO2Emissions', text),
            props: {},

          };

            return obj},
        },
          {
            title: 'CH4排放（吨CH4/年））', dataIndex: 'presentCombustionCH4Emissions', width: 150, colSpan:1,
            render: (text, record, index) => {  const obj = {
              children:this.renderColumns4(this.state.data4, index, 'presentCombustionCH4Emissions', text),
              props: {},

            };

              return obj},
          },
          {
            title: 'N2O排放（吨N2O/年）', dataIndex: 'presentCombustionN2OEmissions', width: 150, colSpan:1,
            render: (text, record, index) => {  const obj = {
              children:this.renderColumns4(this.state.data4, index, 'presentCombustionN2OEmissions', text),
              props: {},

            };

              return obj},
          }],
      }, {
        title: '异地燃烧排放',
        children: [{
          title: 'CO2排放（吨碳/年）', dataIndex: 'OffSiteCombustionCO2Emissions', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns4(this.state.data4, index, 'OffSiteCombustionCO2Emissions', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '氧化分解排放',
        children: [{
          title: 'CO2排放（吨碳/年)', dataIndex: 'OxidativeDecompositionCO2Emissions', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns4(this.state.data4, index, 'OxidativeDecompositionCO2Emissions', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '需从森林消耗中扣除的地上生物量碳排放',
        children: [{
          title: '（吨碳/年)', dataIndex: 'biomassCarbonEmissionsFromForestConsumptionAreDeducted', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns4(this.state.data4, index, 'biomassCarbonEmissionsFromForestConsumptionAreDeducted', text),
            props: {},

          };

            return obj},
        }],
      },


    ];

    this.columns5 = [

      {
        title: '数据项',
        children: [{
          title: '', dataIndex: 'name', width: 100, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns5(this.state.data5, index, 'name', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '现地燃烧排放 ',
        children: [{
          title: 'CO2排放（不确定性%）', dataIndex: 'presentCombustionCO2Emissions', width: 150, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns5(this.state.data5, index, 'presentCombustionCO2Emissions', text),
            props: {},

          };

            return obj},
        },
          {
            title: 'CH4排放（不确定性%））', dataIndex: 'presentCombustionCH4Emissions', width: 150, colSpan:1,
            render: (text, record, index) => {  const obj = {
              children:this.renderColumns5(this.state.data5, index, 'presentCombustionCH4Emissions', text),
              props: {},

            };

              return obj},
          },
          {
            title: 'N2O排放（吨N2O/年）', dataIndex: 'presentCombustionN2OEmissions', width: 150, colSpan:1,
            render: (text, record, index) => {  const obj = {
              children:this.renderColumns5(this.state.data5, index, 'presentCombustionN2OEmissions', text),
              props: {},

            };

              return obj},
          }],
      }, {
        title: '异地燃烧排放',
        children: [{
          title: 'CO2排放（不确定性%）', dataIndex: 'OffSiteCombustionCO2Emissions', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns5(this.state.data5, index, 'OffSiteCombustionCO2Emissions', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '氧化分解排放',
        children: [{
          title: 'CO2排放（不确定性%)', dataIndex: 'OxidativeDecompositionCO2Emissions', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns5(this.state.data5, index, 'OxidativeDecompositionCO2Emissions', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '需从森林消耗中扣除的地上生物量碳排放',
        children: [{
          title: '（不确定性%)', dataIndex: 'biomassCarbonEmissionsFromForestConsumptionAreDeducted', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns5(this.state.data5, index, 'biomassCarbonEmissionsFromForestConsumptionAreDeducted', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data5[index].presentCombustionCO2Emissions;
          return (
            <div className={styles.editableOperations} >

              {

                  editable ?
                    <span>
                  <a onClick={() => this.editDone5(index, 'save')}>确认</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone5(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                    :
                    <span>
                  <a onClick={() => this.edit5(index)}>编辑</a>
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
      data4: [],
      data5: [],
      loading: true ,

      collapsed: false,
      select:1,
      trigger:true,
      user:[],




      AllData:[],
      years:'2014',

    };

    this.queryTheforest('2014');

    this.newQueryTheforest('2014')

    //$("#bodyTable1").hide();

  }



  renderColumns5(data5, index, key, text) {


    const { editable, status } = data5[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (

      <EditableCell5
        editable={editable}
        value={text}
        onChange={value => this.handleChange5(key, index, value)}
        status={status}
      />);
  }


  handleChange5(key, index, value) {



    const data5 = [...this.state.data5];
    data5[index][key].value = value;
    this.setState({ data5 });

    if(key  == 'biomassCarbonEmissionsFromForestConsumptionAreDeducted'){

      this.updateTheforest5(index,data5);
    }





  }

  edit5(index) {

    const { data5 } = this.state;
    Object.keys(data5[index]).forEach((item) => {
      if (data5[index][item] && typeof data5[index][item].editable !== 'undefined') {
        data5[index][item].editable = true;
      }
    });
    this.setState({ data5 });
  }

  editDone5(index, type) {

    const { data5 } = this.state;
    Object.keys(data5[index]).forEach((item) => {
      if (data5[index][item] && typeof data5[index][item].editable !== 'undefined') {
        data5[index][item].editable = false;
        data5[index][item].status = type;
      }
    });
    this.setState({ data5 }, () => {
      Object.keys(data5[index]).forEach((item) => {
        if (data5[index][item] && typeof data5[index][item].editable !== 'undefined') {
          delete data5[index][item].status;
        }
      });
    });
  }



  renderColumns4(data4, index, key, text) {


    const { editable, status } = data4[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (

      <EditableCell4
        editable={editable}
        value={text}
        onChange={value => this.handleChange4(key, index, value)}
        status={status}
      />);
  }


  handleChange4(key, index, value) {



    const data4 = [...this.state.data4];
    data4[index][key].value = value;
    this.setState({ data4 });

    if(key  == 'n2OEmissionFactor'){

      //this.updateWaste4(index,data4);
    }





  }

  edit4(index) {

    const { data4 } = this.state;
    Object.keys(data4[index]).forEach((item) => {
      if (data4[index][item] && typeof data4[index][item].editable !== 'undefined') {
        data4[index][item].editable = true;
      }
    });
    this.setState({ data4 });
  }

  editDone4(index, type) {

    const { data4 } = this.state;
    Object.keys(data4[index]).forEach((item) => {
      if (data4[index][item] && typeof data4[index][item].editable !== 'undefined') {
        data4[index][item].editable = false;
        data4[index][item].status = type;
      }
    });
    this.setState({ data4 }, () => {
      Object.keys(data4[index]).forEach((item) => {
        if (data4[index][item] && typeof data4[index][item].editable !== 'undefined') {
          delete data4[index][item].status;
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



    const data3 = [...this.state.data3]
    data3[index][key].value = value;
    this.setState({ data3 });

    if(key  == 'nitrogenAndCarbonRatio'){

      this.updateTheforest3(index,data3);
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

    if(key  == 'tenYearsAverageConversionArea'){

     this.updateTheforest2(index,data2);
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

    if(key  == 'nitrogenAndCarbonRatio'){

     this.updateTheforest1(index,data1);
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

    if(key  == 'tenYearsAverageConversionArea'){

      this.updateTheforest(index,data);
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
  queryTheforest(years){


    post('/activityLevelDataEntry/landUseChangeAndForestry/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data;



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

          console.log(_b1);
          console.log(_b);


          this.setState({data:_b});
          this.setState({data1:_b1});
          this.setState({data4:_b4});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //不确定性
  newQueryTheforest(years){


    post('/uncertainty/landUseChangeAndForestry/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data;

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




          this.setState({data2:_b});
          this.setState({data3:_b1});
          this.setState({data5:_b5});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //
  updateTheforest(index,data,a){

    var data  = data

    const Directory = [
      'FAL_arborForest',
      'FAL_bambooForest',
      'FAL_economicForest',



    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/landUseChangeAndForestry/update'
    var bodyName = 'landUseChangeAndForestry';
    var bodyName1 = 'scatteredWoodSurroundedByTreesSparseForestActivityLevel';






    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}
    obj[bodyName][bodyName1]={}
    obj[bodyName][bodyName1][DirectoryIndex]= {
      "fiveYearsAverageConversionArea": data[index].fiveYearsAverageConversionArea.value,
      "tenYearsAverageConversionArea": data[index].tenYearsAverageConversionArea.value,


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

  updateTheforest1(index,data1,a){

    var data  = data1

    const Directory = [
      'FEF_arborForest',
      'FEF_bambooForest',
      'FEF_economicForest',



    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/landUseChangeAndForestry/update'
    var bodyName = 'landUseChangeAndForestry';
    var bodyName1 = 'scatteredWoodSurroundedByTreesSparseForestActivityLevel';






    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}
    obj[bodyName][bodyName1]={}
    obj[bodyName][bodyName1][DirectoryIndex]= {
      "biomassCarbonDensityAfterTransformation": data[index].biomassCarbonDensityAfterTransformation.value,
      "burnedNow": data[index].burnedNow.value,
      "burnedInDifferentPlaces": data[index].burnedInDifferentPlaces.value,
      "oxidativeDecomposition": data[index].oxidativeDecomposition.value,
      "biomassBurningOxidationCoefficient": data[index].biomassBurningOxidationCoefficient.value,
      "CH4_CRelativeToCO2_CEmissionsRatio": data[index].CH4_CRelativeToCO2_CEmissionsRatio.value,
      "N2O_NRelativeToCO2_CEmissionsRatio": data[index].N2O_NRelativeToCO2_CEmissionsRatio.value,
      "nitrogenAndCarbonRatio": data[index].nitrogenAndCarbonRatio.value,


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


  //活动水平不确定性
  updateTheforest2(index,data2,a){

    var data  = data2

    const Directory = [
      'FAL_arborForest',
      'FAL_bambooForest',
      'FAL_economicForest',



    ]

    var DirectoryIndex = Directory[index];

    var url = '/uncertainty/landUseChangeAndForestry/update'
    var bodyName = 'landUseChangeAndForestry';







    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "fiveYearsAverageConversionArea": data[index].fiveYearsAverageConversionArea.value,
      "tenYearsAverageConversionArea": data[index].tenYearsAverageConversionArea.value,


    }

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);
            this.newQueryTheforest(this.state.years)
        } else {
          message.error('数据录入有误，请重新录入！');
        }
      });
  }


  //排放因子不确定性
  updateTheforest3(index,data3,a){

    var data  = data3

    const Directory = [
      'FEF_arborForest',
      'FEF_bambooForest',
      'FEF_economicForest',



    ]

    var DirectoryIndex = Directory[index];

    var url = '/uncertainty/landUseChangeAndForestry/update'
    var bodyName = 'landUseChangeAndForestry';




    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      'biomassCarbonDensityBeforeTransformation':data[index].biomassCarbonDensityBeforeTransformation.value,
      "biomassCarbonDensityAfterTransformation": data[index].biomassCarbonDensityAfterTransformation.value,
      "burnedNow": data[index].burnedNow.value,
      "burnedInDifferentPlaces": data[index].burnedInDifferentPlaces.value,
      "oxidativeDecomposition": data[index].oxidativeDecomposition.value,
      "biomassBurningOxidationCoefficient": data[index].biomassBurningOxidationCoefficient.value,
      "CH4_CRelativeToCO2_CEmissionsRatio": data[index].CH4_CRelativeToCO2_CEmissionsRatio.value,
      "N2O_NRelativeToCO2_CEmissionsRatio": data[index].N2O_NRelativeToCO2_CEmissionsRatio.value,
      "nitrogenAndCarbonRatio": data[index].nitrogenAndCarbonRatio.value,


    }

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);
            this.newQueryTheforest(this.state.years)
        } else {
          message.error('数据录入有误，请重新录入！');
        }
      });
  }


  //update计算不确定性
  updateTheforest5(index,data5){

    var data  = data5


    const Directory = [
      'FE_arborForest',
      'FE_bambooForest',
      'FE_economicForest',
      'FE_total',

    ]

    var DirectoryIndex = Directory[index];

    var url = '/uncertainty/landUseChangeAndForestry/update'
    var bodyName = 'landUseChangeAndForestry';



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}



    obj[bodyName][DirectoryIndex]= {
      "presentCombustionCO2Emissions": data[index].presentCombustionCO2Emissions.value,
      "presentCombustionCH4Emissions": data[index].presentCombustionCH4Emissions.value,
      "presentCombustionN2OEmissions": data[index].presentCombustionN2OEmissions.value,
      "OffSiteCombustionCO2Emissions": data[index].OffSiteCombustionCO2Emissions.value,
      "OxidativeDecompositionCO2Emissions": data[index].OxidativeDecompositionCO2Emissions.value,
      "biomassCarbonEmissionsFromForestConsumptionAreDeducted": data[index].biomassCarbonEmissionsFromForestConsumptionAreDeducted.value,



    }

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);
          this.newQueryTheforest(this.state.years)

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
    this.newQueryTheforest(years)

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

    const { data3 } = this.state;
    const dataSource3 = data3.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    const { data4 } = this.state;
    const dataSource4 = data4.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });


    const { data5 } = this.state;
    const dataSource5 = data5.map((item) => {
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
    const columns4 = this.columns4;
    const columns5 = this.columns5;


    return (
      <div className={styles.normal}>
        <div className={styles.title}>
          <span className={styles.title_span}>森林转化温室气体排放清单表</span>
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
          <p>活动水平数据</p>


          <Table size="small" pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>

          <div className={styles.entryBody} id="bodyTable2"  >
            <p>排放因子数据</p>


            <Table size="small" pagination={false} bordered={true}  columns={columns1} dataSource={dataSource1} scroll={{ x: 1500, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody} id="bodyTable3"  >
            <p>活动水平不确定性</p>


            <Table size="small" pagination={false} bordered={true}  columns={columns2} dataSource={dataSource2} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody} id="bodyTable4"  >
            <p>排放因子不确定性</p>


            <Table size="small" pagination={false} bordered={true}  columns={columns3} dataSource={dataSource3} scroll={{ x: 1500, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody} id="bodyTable5"  >
            <p>排放量计算（负值代表净吸收，正值代表净排放）</p>


            <Table size="small" pagination={false} bordered={true}  columns={columns4} dataSource={dataSource4} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>


          <div className={styles.entryBody} id="bodyTable6"  >
            <p>不确定性计算</p>


            <Table size="small" pagination={false} bordered={true}  columns={columns5} dataSource={dataSource5} scroll={{ x: 1500, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

        </Spin>








      </div>
    );

  }
}


export default Form.create()(ElectricTable);
