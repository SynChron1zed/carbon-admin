/**
 * 乔木林Created by dixu on 2017/11/13.
 */

import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch ,Radio, Button } from 'antd';

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
        children: [{
          title: '', dataIndex: 'dataName', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'dataName', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '面积合计',
        children: [{
          title: '（公顷）', dataIndex: 'areaTotal', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'areaTotal', text),
            props: {},

          };

            return obj},
        }],
      }, {
        title: '蓄积量合计',
        children: [{
          title: '(立方米)', dataIndex: 'volumeTotal', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'volumeTotal', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '分龄组面积（公顷）',
        children: [{
          title: '幼龄林', dataIndex: 'areaYoungForest', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'areaYoungForest', text),
            props: {},

          };

            return obj},
        },{
          title: '中龄林', dataIndex: 'areaMiddleAgeForest', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'areaMiddleAgeForest', text),
            props: {},

          };

            return obj},
        },{
          title: '近熟林', dataIndex: 'areaNearRipeningForest', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'areaNearRipeningForest', text),
            props: {},

          };

            return obj},
        },{
          title: '成熟林', dataIndex: 'areaMatureForest', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'areaMatureForest', text),
            props: {},

          };

            return obj},
        },{
          title: '过熟林', dataIndex: 'areaTooMatureForest', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'areaTooMatureForest', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '分龄组蓄积（立方米）',
        children: [{
          title: '幼龄林', dataIndex: 'volumeYoungForest', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'volumeYoungForest', text),
            props: {},

          };

            return obj},
        },{
          title: '中龄林', dataIndex: 'volumeMiddleAgeForest', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'volumeMiddleAgeForest', text),
            props: {},

          };

            return obj},
        },{
          title: '近熟林', dataIndex: 'volumeNearRipeningForest', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'volumeNearRipeningForest', text),
            props: {},

          };

            return obj},
        },{
          title: '成熟林', dataIndex: 'volumeMatureForest', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'volumeMatureForest', text),
            props: {},

          };

            return obj},
        },{
          title: '过熟林', dataIndex: 'volumeTooMatureForest', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'volumeTooMatureForest', text),
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

          const { editable } = this.state.data[index].dataName;
          return (
            <div className={styles.editableOperations} >

              {
                '合计或平均' == record.dataName
                  ? <span></span> :
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
        children: [{
          title: '', dataIndex: 'dataName', width: 100, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'dataName', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '平均基本木材密度SVD ',
        children: [{
          title: '（吨干物质/立方米）', dataIndex: 'averageBasicWoodDensitySVD', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'averageBasicWoodDensitySVD', text),
            props: {},

          };

            return obj},
        }],
      }, {
        title: '平均生物量扩展因子BEF',
        children: [{
          title: '（地上/树干生物量）', dataIndex: 'averageBiomassExpansionFactor', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'averageBiomassExpansionFactor', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '根茎比RSR ',
        children: [{
          title: '（地下/地上生物量）', dataIndex: 'rhizomeRatioRSR', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'rhizomeRatioRSR', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '生物量含碳率CF  ',
        children: [{
          title: '（吨碳/吨干物质）', dataIndex: 'biomassCarbonContentCF', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'biomassCarbonContentCF', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '蓄积量总生长率 ',
        children: [{
          title: '（%）', dataIndex: 'totalVolumeGrowthRate', width: 150, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'totalVolumeGrowthRate', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '蓄积量采伐消耗率 ',
        children: [{
          title: '（%）', dataIndex: 'volumeHarvestingRate', width: 150, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'volumeHarvestingRate', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '蓄积量枯损消耗率 ',
        children: [{
          title: '（%）', dataIndex: 'volumeLossRate', width: 150, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'volumeLossRate', text),
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

          const { editable } = this.state.data1[index].dataName;
          return (
            <div className={styles.editableOperations} >

              {
                '合计或平均' == record.dataName
                  ? <span></span> :
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
        dataIndex: 'dataName',
        width: 100,

        colSpan:1,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'dataName', text),
          props: {},

        };

          return obj}

      }, {
        title: '面积（不确定性%）', dataIndex: 'area', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'area', text),
          props: {},

        };



          return obj},
      },{
        title: '蓄积量（不确定性%）', dataIndex: 'volume', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'volume', text),
          props: {},

        };

          return obj},
      },

      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {


          const { editable } = this.state.data2[index].dataName;


          return (
            <div className={styles.editableOperations} >

              {

                '合计或平均' == record.dataName
                  ? <span></span> :
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
        children: [{
          title: '', dataIndex: 'dataName', width: 100, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns3(this.state.data3, index, 'dataName', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '基本木材密度SVD ',
        children: [{
          title: '（不确定性%）', dataIndex: 'averageBasicWoodDensitySVD', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns3(this.state.data3, index, 'averageBasicWoodDensitySVD', text),
            props: {},

          };

            return obj},
        }],
      }, {
        title: '生物量扩展因子BEF',
        children: [{
          title: '（不确定性%）', dataIndex: 'averageBiomassExpansionFactor', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns3(this.state.data3, index, 'averageBiomassExpansionFactor', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '根茎比RSR ',
        children: [{
          title: '（不确定性%）', dataIndex: 'rhizomeRatioRSR', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns3(this.state.data3, index, 'rhizomeRatioRSR', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '生物量含碳率CF  ',
        children: [{
          title: '（不确定性%）', dataIndex: 'biomassCarbonContentCF', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns3(this.state.data3, index, 'biomassCarbonContentCF', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '蓄积量总生长率 ',
        children: [{
          title: '（不确定性%）', dataIndex: 'totalVolumeGrowthRate', width: 150, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns3(this.state.data3, index, 'totalVolumeGrowthRate', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '蓄积量采伐消耗率 ',
        children: [{
          title: '（不确定性%）', dataIndex: 'volumeHarvestingRate', width: 150, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns3(this.state.data3, index, 'volumeHarvestingRate', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '蓄积量枯损消耗率 ',
        children: [{
          title: '（不确定性%）', dataIndex: 'volumeLossRate', width: 150, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns3(this.state.data3, index, 'volumeLossRate', text),
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

          const { editable } = this.state.data3[index].dataName;
          return (
            <div className={styles.editableOperations} >

              {
                '合计或平均' == record.dataName
                  ? <span></span> :
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
          title: '', dataIndex: 'dataName', width: 100, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns4(this.state.data4, index, 'dataName', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '地上生物量碳储量 ',
        children: [{
          title: '（吨碳）', dataIndex: 'groundBiomassCarbonStorage', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns4(this.state.data4, index, 'groundBiomassCarbonStorage', text),
            props: {},

          };

            return obj},
        }],
      }, {
        title: '全林生物量碳储量',
        children: [{
          title: '（吨碳）', dataIndex: 'wholeForestBiomassCarbonStorage', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns4(this.state.data4, index, 'wholeForestBiomassCarbonStorage', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '地上生物量碳密度',
        children: [{
          title: '（吨碳/公顷）', dataIndex: 'groundBiomassCarbonDensity', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns4(this.state.data4, index, 'groundBiomassCarbonDensity', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '全林生物量碳密度',
        children: [{
          title: '（吨碳/公顷）', dataIndex: 'wholeForestBiomassCarbonDensity', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns4(this.state.data4, index, 'wholeForestBiomassCarbonDensity', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '生物量生长碳吸收',
        children: [{
          title: '（吨碳/年）', dataIndex: 'biomassGrowthCarbonUptake', width: 150, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns4(this.state.data4, index, 'biomassGrowthCarbonUptake', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '校正前-采伐消耗碳排放 ',
        children: [{
          title: '（吨碳/年）', dataIndex: 'preCalibrationHarvestingConsumptionOfCarbonEmissions', width: 150, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns4(this.state.data4, index, 'preCalibrationHarvestingConsumptionOfCarbonEmissions', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '枯损消耗碳排放 ',
        children: [{
          title: '（吨碳/年）', dataIndex: 'lossOfCarbonConsumption', width: 150, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns4(this.state.data4, index, 'lossOfCarbonConsumption', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '校正后-采伐消耗碳排放 ',
        children: [{
          title: '（吨碳/年）', dataIndex: 'afterCorrectionHarvestingConsumptionOfCarbonEmissions', width: 150, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns4(this.state.data4, index, 'afterCorrectionHarvestingConsumptionOfCarbonEmissions', text),
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
          title: '', dataIndex: 'dataName', width: 100, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns5(this.state.data5, index, 'dataName', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '地上生物量碳储量 ',
        children: [{
          title: '（不确定性%）', dataIndex: 'groundBiomassCarbonStorage', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns5(this.state.data5, index, 'groundBiomassCarbonStorage', text),
            props: {},

          };

            return obj},
        }],
      }, {
        title: '全林生物量碳储量',
        children: [{
          title: '（不确定性%）', dataIndex: 'wholeForestBiomassCarbonStorage', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns5(this.state.data5, index, 'wholeForestBiomassCarbonStorage', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '地上生物量碳密度',
        children: [{
          title: '（不确定性%）', dataIndex: 'groundBiomassCarbonDensity', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns5(this.state.data5, index, 'groundBiomassCarbonDensity', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '全林生物量碳密度',
        children: [{
          title: '（不确定性%）', dataIndex: 'wholeForestBiomassCarbonDensity', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns5(this.state.data5, index, 'wholeForestBiomassCarbonDensity', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '生物量生长碳吸收',
        children: [{
          title: '（不确定性%）', dataIndex: 'biomassGrowthCarbonUptake', width: 150, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns5(this.state.data5, index, 'biomassGrowthCarbonUptake', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '校正前-采伐消耗碳排放 ',
        children: [{
          title: '（不确定性%）', dataIndex: 'preCalibrationHarvestingConsumptionOfCarbonEmissions', width: 150, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns5(this.state.data5, index, 'preCalibrationHarvestingConsumptionOfCarbonEmissions', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '枯损消耗碳排放 ',
        children: [{
          title: '（不确定性%））', dataIndex: 'lossOfCarbonConsumption', width: 150, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns5(this.state.data5, index, 'lossOfCarbonConsumption', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '校正后-采伐消耗碳排放 ',
        children: [{
          title: '（不确定性%）', dataIndex: 'afterCorrectionHarvestingConsumptionOfCarbonEmissions', width: 150, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns5(this.state.data5, index, 'afterCorrectionHarvestingConsumptionOfCarbonEmissions', text),
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

          const { editable } = this.state.data5[index].dataName;
          return (
            <div className={styles.editableOperations} >

              {
                '合计或平均' == record.dataName
                  ? <span></span> :
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

      Data:[],
      data: [],

      Data1:[],
      data1: [],

      Data2:[],
      data2: [],

      Data3:[],
      data3: [],

      Data4:[],
      data4: [],

      Data5:[],
      data5: [],


      loading: true ,

      collapsed: false,
      select:1,
      trigger:true,
      user:[],


      AllData:[],
      addCollapsed:true,
      addCollapsed1:true,
      addCollapsed2:true,
      addCollapsed3:true,
      addCollapsed5:true,
      years:'2014',
      newYears:'2014',
    };


    this.queryThearbor('2014');
    this.newQueryThearbor('2014');

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

    if(key  == 'afterCorrectionHarvestingConsumptionOfCarbonEmissions'){

      this.updateThearbor5(index,data5);
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

    if(key  == 'volumeLossRate'){

      this.updateThearbor3(index,data3);
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

    if(key  == 'volume'){

     this.updateThearbor2(index,data2);
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

    if(key  == 'volumeLossRate'){

     this.updateThearbor1(index,data1);
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

    if(key  == 'volumeTooMatureForest'){

     this.updateThearbor(index,data);
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

  //乔木
  queryThearbor(years){


    post('/activityLevelDataEntry/landUseChangeAndForestry/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data;

          const _Data = Alldata.arborForestActivityLevel //活动水平

          const _Data1 = Alldata.arborForestEmissionFactor //排放因子

          const _Data2 = Alldata.arborForestEmissions //计算量




          const _b = [];
          var _areaTotal = 0; //'面积合计
          var _volumeTotal = 0;  //蓄积量合计
          var _areaYoungForest = 0;  //幼龄林
          var _areaMiddleAgeForest = 0; //	中龄林
          var _areaNearRipeningForest = 0;  //近熟林
          var _areaMatureForest = 0;  //成熟林
          var _areaTooMatureForest = 0; //过熟林
          var _volumeYoungForest = 0;
          var _volumeMiddleAgeForest = 0;
          var _volumeNearRipeningForest = 0;
          var _volumeMatureForest = 0;
          var _volumeTooMatureForest = 0;


          for(var i = 0 ; i<_Data.length;i++){


            _b.push({
                key:i,
              dataName:{
                  editable: false,
                  value:_Data[i].dataName ,
                },
              areaTotal:{
                  editable: false,
                  value:_Data[i].areaTotal ,
                },
              volumeTotal: {
                  editable: false,
                  value:_Data[i].volumeTotal ,
                },
              areaYoungForest: {
                  editable: false,
                  value:_Data[i].areaYoungForest ,
                },
              areaMiddleAgeForest: {
                editable: false,
                value:_Data[i].areaMiddleAgeForest,
              },
              areaNearRipeningForest: {
                editable: false,
                value:_Data[i].areaNearRipeningForest ,
              },
              areaMatureForest: {
                editable: false,
                value:_Data[i].areaMatureForest ,
              },
              areaTooMatureForest: {
                editable: false,
                value:_Data[i].areaTooMatureForest ,
              },
              volumeYoungForest: {
                editable: false,
                value:_Data[i].volumeYoungForest ,
              },
              volumeMiddleAgeForest: {
                editable: false,
                value:_Data[i].volumeMiddleAgeForest,
              },
              volumeNearRipeningForest: {
                editable: false,
                value:_Data[i].volumeNearRipeningForest ,
              },
              volumeMatureForest: {
                editable: false,
                value:_Data[i].volumeMatureForest ,
              },
              volumeTooMatureForest: {
                editable: false,
                value:_Data[i].volumeTooMatureForest ,
              },


              }
            )

            _areaTotal += _Data[i].areaTotal;
            _volumeTotal += _Data[i].volumeTotal;
            _areaYoungForest += _Data[i].areaYoungForest;
            _areaMiddleAgeForest += _Data[i].areaMiddleAgeForest;
            _areaNearRipeningForest += _Data[i].areaNearRipeningForest;
            _areaMatureForest += _Data[i].areaMatureForest;
            _areaTooMatureForest += _Data[i].areaTooMatureForest;
            _volumeYoungForest += _Data[i].volumeYoungForest;
            _volumeMiddleAgeForest += _Data[i].volumeMiddleAgeForest;
            _volumeNearRipeningForest += _Data[i].volumeNearRipeningForest;
            _volumeMatureForest += _Data[i].volumeMatureForest;
            _volumeTooMatureForest += _Data[i].volumeTooMatureForest;

          }


          //添加合计值
            _b.push({
                key:_Data.length,
                dataName:{
                  editable: false,
                  value:'合计或平均' ,
                },
                areaTotal:{
                  editable: false,
                  value:_areaTotal.toFixed(2) ,
                },
                volumeTotal: {
                  editable: false,
                  value:_volumeTotal.toFixed(2) ,
                },
                areaYoungForest: {
                  editable: false,
                  value:_areaYoungForest.toFixed(2) ,
                },
                areaMiddleAgeForest: {
                  editable: false,
                  value:_areaMiddleAgeForest.toFixed(2),
                },
                areaNearRipeningForest: {
                  editable: false,
                  value:_areaNearRipeningForest.toFixed(2) ,
                },
                areaMatureForest: {
                  editable: false,
                  value:_areaMatureForest.toFixed(2) ,
                },
                areaTooMatureForest: {
                  editable: false,
                  value:_areaTooMatureForest.toFixed(2) ,
                },
                volumeYoungForest: {
                  editable: false,
                  value:_volumeYoungForest.toFixed(2) ,
                },
                volumeMiddleAgeForest: {
                  editable: false,
                  value:_volumeMiddleAgeForest.toFixed(2),
                },
                volumeNearRipeningForest: {
                  editable: false,
                  value:_volumeNearRipeningForest.toFixed(2) ,
                },
                volumeMatureForest: {
                  editable: false,
                  value:_volumeMatureForest.toFixed(2) ,
                },
                volumeTooMatureForest: {
                  editable: false,
                  value:_volumeTooMatureForest.toFixed(2) ,
                },


              }
            )





          const _b1 = [];

          var _averageBasicWoodDensitySVD = 0; //平均基本木材密度SVD
          var _averageBiomassExpansionFactor = 0; //平均生物量扩展因子BEF
          var _rhizomeRatioRSR = 0; //根茎比RSR
          var _biomassCarbonContentCF = 0; //生物量含碳率CF
          var _totalVolumeGrowthRate = 0; //蓄积量总生长率
          var _volumeHarvestingRate = 0; //蓄积量采伐消耗率
          var _volumeLossRate = 0; //蓄积量枯损消耗率



          for(var i = 0 ; i<_Data1.length;i++){


            _b1.push({
                key:i,
                dataName:{
                  editable: false,
                  value:_Data1[i].dataName ,
                },
              averageBasicWoodDensitySVD:{
                  editable: false,
                  value:_Data1[i].averageBasicWoodDensitySVD ,
                },
              averageBiomassExpansionFactor: {
                  editable: false,
                  value:_Data1[i].averageBiomassExpansionFactor ,
                },
              rhizomeRatioRSR: {
                  editable: false,
                  value:_Data1[i].rhizomeRatioRSR ,
                },
              biomassCarbonContentCF: {
                  editable: false,
                  value:_Data1[i].biomassCarbonContentCF,
                },
              totalVolumeGrowthRate: {
                  editable: false,
                  value:_Data1[i].totalVolumeGrowthRate ,
                },
              volumeHarvestingRate: {
                  editable: false,
                  value:_Data1[i].volumeHarvestingRate ,
                },
              volumeLossRate: {
                  editable: false,
                  value:_Data1[i].volumeLossRate ,
                },



              }
            )

            _averageBasicWoodDensitySVD += _Data1[i].averageBasicWoodDensitySVD;
            _averageBiomassExpansionFactor += _Data1[i].averageBiomassExpansionFactor;
            _rhizomeRatioRSR += _Data1[i].rhizomeRatioRSR;
            _biomassCarbonContentCF += _Data1[i].biomassCarbonContentCF;
            _totalVolumeGrowthRate += _Data1[i].totalVolumeGrowthRate;
            _volumeHarvestingRate += _Data1[i].volumeHarvestingRate;
            _volumeLossRate += _Data1[i].volumeLossRate;


          }


          _b1.push({
              key:_Data1.length,
              dataName:{
                editable: false,
                value:'合计或平均' ,
              },
              averageBasicWoodDensitySVD:{
                editable: false,
                value:_averageBasicWoodDensitySVD.toFixed(2) ,
              },
              averageBiomassExpansionFactor: {
                editable: false,
                value:_averageBiomassExpansionFactor.toFixed(2) ,
              },
              rhizomeRatioRSR: {
                editable: false,
                value:_rhizomeRatioRSR.toFixed(2) ,
              },
              biomassCarbonContentCF: {
                editable: false,
                value:_biomassCarbonContentCF.toFixed(2),
              },
              totalVolumeGrowthRate: {
                editable: false,
                value:_totalVolumeGrowthRate.toFixed(2) ,
              },
              volumeHarvestingRate: {
                editable: false,
                value:_volumeHarvestingRate.toFixed(2) ,
              },
              volumeLossRate: {
                editable: false,
                value:_volumeLossRate.toFixed(2) ,
              },



            }
          )


          const _b2 = [];

          var _groundBiomassCarbonStorage = 0;//地上生物量碳储量;
          var _wholeForestBiomassCarbonStorage = 0;//地上生物量碳储量;
          var _groundBiomassCarbonDensity = 0;//地上生物量碳储量;
          var _wholeForestBiomassCarbonDensity = 0;//地上生物量碳储量;
          var _biomassGrowthCarbonUptake = 0;//地上生物量碳储量;
          var _preCalibrationHarvestingConsumptionOfCarbonEmissions = 0;//地上生物量碳储量;
          var _lossOfCarbonConsumption = 0;//地上生物量碳储量;
          var _afterCorrectionHarvestingConsumptionOfCarbonEmissions = 0;//地上生物量碳储量;


          for(var i = 0 ; i<_Data2.length;i++){


            _b2.push({
                key:i,
                dataName:{
                  editable: false,
                  value:_Data2[i].dataName ,
                },
              groundBiomassCarbonStorage:{
                  editable: false,
                  value:_Data2[i].groundBiomassCarbonStorage ,
                },
              wholeForestBiomassCarbonStorage: {
                  editable: false,
                  value:_Data2[i].wholeForestBiomassCarbonStorage ,
                },
              groundBiomassCarbonDensity: {
                  editable: false,
                  value:_Data2[i].groundBiomassCarbonDensity ,
                },
              wholeForestBiomassCarbonDensity: {
                  editable: false,
                  value:_Data2[i].wholeForestBiomassCarbonDensity,
                },
              biomassGrowthCarbonUptake: {
                  editable: false,
                  value:_Data2[i].biomassGrowthCarbonUptake ,
                },
              preCalibrationHarvestingConsumptionOfCarbonEmissions: {
                  editable: false,
                  value:_Data2[i].preCalibrationHarvestingConsumptionOfCarbonEmissions ,
                },
              lossOfCarbonConsumption: {
                  editable: false,
                  value:_Data2[i].lossOfCarbonConsumption ,
                },

              afterCorrectionHarvestingConsumptionOfCarbonEmissions: {
                editable: false,
                value:_Data2[i].afterCorrectionHarvestingConsumptionOfCarbonEmissions ,
              },


              }
            )

            _groundBiomassCarbonStorage += _Data2[i].groundBiomassCarbonStorage;
            _wholeForestBiomassCarbonStorage += _Data2[i].wholeForestBiomassCarbonStorage;
            _groundBiomassCarbonDensity += _Data2[i].groundBiomassCarbonDensity;
            _wholeForestBiomassCarbonDensity += _Data2[i].wholeForestBiomassCarbonDensity;
            _biomassGrowthCarbonUptake += _Data2[i].biomassGrowthCarbonUptake;
            _preCalibrationHarvestingConsumptionOfCarbonEmissions += _Data2[i].preCalibrationHarvestingConsumptionOfCarbonEmissions;
            _lossOfCarbonConsumption += _Data2[i].lossOfCarbonConsumption;
            _afterCorrectionHarvestingConsumptionOfCarbonEmissions += _Data2[i].afterCorrectionHarvestingConsumptionOfCarbonEmissions;


          }


          _b2.push({
              key:_Data1.length,
              dataName:{
                editable: false,
                value:'合计或平均' ,
              },
            groundBiomassCarbonStorage:{
                editable: false,
                value:_groundBiomassCarbonStorage.toFixed(2) ,
              },
            wholeForestBiomassCarbonStorage: {
                editable: false,
                value:_wholeForestBiomassCarbonStorage.toFixed(2) ,
              },
            groundBiomassCarbonDensity: {
                editable: false,
                value:_groundBiomassCarbonDensity.toFixed(2) ,
              },
            wholeForestBiomassCarbonDensity: {
                editable: false,
                value:_wholeForestBiomassCarbonDensity.toFixed(2),
              },
            biomassGrowthCarbonUptake: {
                editable: false,
                value:_biomassGrowthCarbonUptake.toFixed(2) ,
              },
            preCalibrationHarvestingConsumptionOfCarbonEmissions: {
                editable: false,
                value:_preCalibrationHarvestingConsumptionOfCarbonEmissions.toFixed(2) ,
              },
            lossOfCarbonConsumption: {
                editable: false,
                value:_lossOfCarbonConsumption.toFixed(2) ,
              },
            afterCorrectionHarvestingConsumptionOfCarbonEmissions: {
              editable: false,
              value:_afterCorrectionHarvestingConsumptionOfCarbonEmissions.toFixed(2) ,
            },


            }
          )



          this.setState({data:_b});
          this.setState({Data:_Data});


          this.setState({data1:_b1});
          this.setState({Data1:_Data1});

          this.setState({data4:_b2});
          this.setState({Data4:_Data2});

          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }


  //乔木不确定性
  newQueryThearbor(newYears){


    post('/uncertainty/landUseChangeAndForestry/list', {
      year:newYears,

    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data;

          const _Data2 = Alldata.arborForestActivityLevel //活动水平不确定性

          const _Data3 = Alldata.arborForestEmissionFactor //排放因子不确定性

          const _Data5 = Alldata.arborForestEmissions //计算量不确定性


          const _b2 = [];
          var _areaTotal = 0; //'面积合计
          var _volumeTotal = 0;  //蓄积量合计



          for(var i = 0 ; i<_Data2.length;i++){


            _b2.push({
                key:i,
                dataName:{
                  editable: false,
                  value:_Data2[i].dataName ,
                },
                area:{
                  editable: false,
                  value:_Data2[i].area ,
                },
              volume:{
                editable: false,
                value:_Data2[i].volume ,
              },

              }
            )

            _areaTotal += _Data2[i].area;
            _volumeTotal += _Data2[i].volume;


          }


          //添加合计值
          _b2.push({
              key:_Data2.length,
              dataName:{
                editable: false,
                value:'合计或平均' ,
              },
              area:{
                editable: false,
                value:_areaTotal.toFixed(2) ,
              },
              volume: {
                editable: false,
                value:_volumeTotal.toFixed(2) ,
              },


            }
          )





          const _b3 = [];

          var _averageBasicWoodDensitySVD = 0; //平均基本木材密度SVD
          var _averageBiomassExpansionFactor = 0; //平均生物量扩展因子BEF
          var _rhizomeRatioRSR = 0; //根茎比RSR
          var _biomassCarbonContentCF = 0; //生物量含碳率CF
          var _totalVolumeGrowthRate = 0; //蓄积量总生长率
          var _volumeHarvestingRate = 0; //蓄积量采伐消耗率
          var _volumeLossRate = 0; //蓄积量枯损消耗率



          for(var i = 0 ; i<_Data3.length;i++){


            _b3.push({
                key:i,
                dataName:{
                  editable: false,
                  value:_Data3[i].dataName ,
                },
                averageBasicWoodDensitySVD:{
                  editable: false,
                  value:_Data3[i].averageBasicWoodDensitySVD ,
                },
                averageBiomassExpansionFactor: {
                  editable: false,
                  value:_Data3[i].averageBiomassExpansionFactor ,
                },
                rhizomeRatioRSR: {
                  editable: false,
                  value:_Data3[i].rhizomeRatioRSR ,
                },
                biomassCarbonContentCF: {
                  editable: false,
                  value:_Data3[i].biomassCarbonContentCF,
                },
                totalVolumeGrowthRate: {
                  editable: false,
                  value:_Data3[i].totalVolumeGrowthRate ,
                },
                volumeHarvestingRate: {
                  editable: false,
                  value:_Data3[i].volumeHarvestingRate ,
                },
                volumeLossRate: {
                  editable: false,
                  value:_Data3[i].volumeLossRate ,
                },



              }
            )

            _averageBasicWoodDensitySVD += _Data3[i].averageBasicWoodDensitySVD;
            _averageBiomassExpansionFactor += _Data3[i].averageBiomassExpansionFactor;
            _rhizomeRatioRSR += _Data3[i].rhizomeRatioRSR;
            _biomassCarbonContentCF += _Data3[i].biomassCarbonContentCF;
            _totalVolumeGrowthRate += _Data3[i].totalVolumeGrowthRate;
            _volumeHarvestingRate += _Data3[i].volumeHarvestingRate;
            _volumeLossRate += _Data3[i].volumeLossRate;


          }


          _b3.push({
              key:_Data3.length,
              dataName:{
                editable: false,
                value:'合计或平均' ,
              },
              averageBasicWoodDensitySVD:{
                editable: false,
                value:_averageBasicWoodDensitySVD.toFixed(2) ,
              },
              averageBiomassExpansionFactor: {
                editable: false,
                value:_averageBiomassExpansionFactor.toFixed(2) ,
              },
              rhizomeRatioRSR: {
                editable: false,
                value:_rhizomeRatioRSR.toFixed(2) ,
              },
              biomassCarbonContentCF: {
                editable: false,
                value:_biomassCarbonContentCF.toFixed(2),
              },
              totalVolumeGrowthRate: {
                editable: false,
                value:_totalVolumeGrowthRate.toFixed(2) ,
              },
              volumeHarvestingRate: {
                editable: false,
                value:_volumeHarvestingRate.toFixed(2) ,
              },
              volumeLossRate: {
                editable: false,
                value:_volumeLossRate.toFixed(2) ,
              },



            }
          )


          const _b5 = [];

          var _groundBiomassCarbonStorage = 0;//地上生物量碳储量;
          var _wholeForestBiomassCarbonStorage = 0;//地上生物量碳储量;
          var _groundBiomassCarbonDensity = 0;//地上生物量碳储量;
          var _wholeForestBiomassCarbonDensity = 0;//地上生物量碳储量;
          var _biomassGrowthCarbonUptake = 0;//地上生物量碳储量;
          var _preCalibrationHarvestingConsumptionOfCarbonEmissions = 0;//地上生物量碳储量;
          var _lossOfCarbonConsumption = 0;//地上生物量碳储量;
          var _afterCorrectionHarvestingConsumptionOfCarbonEmissions = 0;//地上生物量碳储量;


          for(var i = 0 ; i<_Data5.length;i++){


            _b5.push({
                key:i,
                dataName:{
                  editable: false,
                  value:_Data5[i].dataName ,
                },
                groundBiomassCarbonStorage:{
                  editable: false,
                  value:_Data5[i].groundBiomassCarbonStorage ,
                },
                wholeForestBiomassCarbonStorage: {
                  editable: false,
                  value:_Data5[i].wholeForestBiomassCarbonStorage ,
                },
                groundBiomassCarbonDensity: {
                  editable: false,
                  value:_Data5[i].groundBiomassCarbonDensity ,
                },
                wholeForestBiomassCarbonDensity: {
                  editable: false,
                  value:_Data5[i].wholeForestBiomassCarbonDensity,
                },
                biomassGrowthCarbonUptake: {
                  editable: false,
                  value:_Data5[i].biomassGrowthCarbonUptake ,
                },
                preCalibrationHarvestingConsumptionOfCarbonEmissions: {
                  editable: false,
                  value:_Data5[i].preCalibrationHarvestingConsumptionOfCarbonEmissions ,
                },
                lossOfCarbonConsumption: {
                  editable: false,
                  value:_Data5[i].lossOfCarbonConsumption ,
                },

                afterCorrectionHarvestingConsumptionOfCarbonEmissions: {
                  editable: false,
                  value:_Data5[i].afterCorrectionHarvestingConsumptionOfCarbonEmissions ,
                },


              }
            )

            _groundBiomassCarbonStorage += _Data5[i].groundBiomassCarbonStorage;
            _wholeForestBiomassCarbonStorage += _Data5[i].wholeForestBiomassCarbonStorage;
            _groundBiomassCarbonDensity += _Data5[i].groundBiomassCarbonDensity;
            _wholeForestBiomassCarbonDensity += _Data5[i].wholeForestBiomassCarbonDensity;
            _biomassGrowthCarbonUptake += _Data5[i].biomassGrowthCarbonUptake;
            _preCalibrationHarvestingConsumptionOfCarbonEmissions += _Data5[i].preCalibrationHarvestingConsumptionOfCarbonEmissions;
            _lossOfCarbonConsumption += _Data5[i].lossOfCarbonConsumption;
            _afterCorrectionHarvestingConsumptionOfCarbonEmissions += _Data5[i].afterCorrectionHarvestingConsumptionOfCarbonEmissions;


          }


          _b5.push({
              key:_Data5.length,
              dataName:{
                editable: false,
                value:'合计或平均' ,
              },
              groundBiomassCarbonStorage:{
                editable: false,
                value:_groundBiomassCarbonStorage.toFixed(2) ,
              },
              wholeForestBiomassCarbonStorage: {
                editable: false,
                value:_wholeForestBiomassCarbonStorage.toFixed(2) ,
              },
              groundBiomassCarbonDensity: {
                editable: false,
                value:_groundBiomassCarbonDensity.toFixed(2) ,
              },
              wholeForestBiomassCarbonDensity: {
                editable: false,
                value:_wholeForestBiomassCarbonDensity.toFixed(2),
              },
              biomassGrowthCarbonUptake: {
                editable: false,
                value:_biomassGrowthCarbonUptake.toFixed(2) ,
              },
              preCalibrationHarvestingConsumptionOfCarbonEmissions: {
                editable: false,
                value:_preCalibrationHarvestingConsumptionOfCarbonEmissions.toFixed(2) ,
              },
              lossOfCarbonConsumption: {
                editable: false,
                value:_lossOfCarbonConsumption.toFixed(2) ,
              },
              afterCorrectionHarvestingConsumptionOfCarbonEmissions: {
                editable: false,
                value:_afterCorrectionHarvestingConsumptionOfCarbonEmissions.toFixed(2) ,
              },


            }
          )





          this.setState({data2:_b2});
          this.setState({Data2:_Data2});

          this.setState({data3:_b3});
          this.setState({Data3:_Data3});

          this.setState({data5:_b5});
          this.setState({Data5:_Data5});

          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }



  //乔木update
  updateThearbor(index,data){




    var data3 = []

    for(var i = 0;i<data.length;i++ ){
      if(data[i].dataName.value =='合计或平均'){

      }else {
        data3.push(data[i])
      }
    }



    var a  = this.state.Data;
    const Directory = [
      'arborForestActivityLevel',



    ]

    var DirectoryIndex = Directory[0];

    var url = '/activityLevelDataEntry/landUseChangeAndForestry/update'
    var bodyName = 'landUseChangeAndForestry';




    var obj={
      "year":this.state.years
    };

    const _a = []
    for(var i = 0;i<data3.length;i++){




        _a.push({
          "dataName": data3[i].dataName.value,
          "areaTotal": data3[i].areaTotal.value,
          "volumeTotal": data3[i].volumeTotal.value,
          "areaYoungForest": data3[i].areaYoungForest.value,
          "areaMiddleAgeForest": data3[i].areaMiddleAgeForest.value,
          "areaNearRipeningForest": data3[i].areaNearRipeningForest.value,
          "areaMatureForest": data3[i].areaMatureForest.value,
          "areaTooMatureForest": data3[i].areaTooMatureForest.value,
          "volumeYoungForest": data3[i].volumeYoungForest.value,
          "volumeMiddleAgeForest": data3[i].volumeMiddleAgeForest.value,
          "volumeNearRipeningForest": data3[i].volumeNearRipeningForest.value,
          "volumeMatureForest": data3[i].volumeMatureForest.value,
          "volumeTooMatureForest": data3[i].volumeTooMatureForest.value,
        })





    }


    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= _a

    post(url, obj)
      .then((res) => {




        if (res.code==0) {
          this.setState({addCollapsed:true})
          message.success(res.message);
          this.queryThearbor(this.state.years);

        } else {
          message.error(res.message);
        }
      });
  }

  //乔木update1
  updateThearbor1(index,data1){

    var data = []


    for(var i = 0;i<data1.length;i++ ){
      if(data1[i].dataName.value =='合计或平均'){

      }else {
        data.push(data1[i])
      }
    }

    var a  = this.state.Data1;

    const Directory = [
      'arborForestEmissionFactor',


    ]

    var DirectoryIndex = Directory[0];

    var url = '/activityLevelDataEntry/landUseChangeAndForestry/update'
    var bodyName = 'landUseChangeAndForestry';




    var obj={
      "year":this.state.years
    };

    const _a = []
    for(var i = 0;i<data.length;i++){



        _a.push({
          "dataName": data[i].dataName.value,
          "averageBasicWoodDensitySVD": data[i].averageBasicWoodDensitySVD.value,
          "averageBiomassExpansionFactor": data[i].averageBiomassExpansionFactor.value,
          "rhizomeRatioRSR": data[i].rhizomeRatioRSR.value,
          "biomassCarbonContentCF": data[i].biomassCarbonContentCF.value,
          "totalVolumeGrowthRate": data[i].totalVolumeGrowthRate.value,
          "volumeHarvestingRate": data[i].volumeHarvestingRate.value,
          "volumeLossRate": data[i].volumeLossRate.value,
        })



    }



    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= _a

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          this.setState({addCollapsed1:true})
          message.success(res.message);
          this.queryThearbor(this.state.years);


        } else {
          message.error(res.message);
        }
      });
  }


  //乔木活动水平不确定性update
  updateThearbor2(index,data2){




    var data = []

    for(var i = 0;i<data2.length;i++ ){
       if(data2[i].dataName.value =='合计或平均'){

       }else {
         data.push(data2[i])
       }
    }




    const Directory = [
      'arborForestActivityLevel',

    ]

    var DirectoryIndex = Directory[0];

    var url = '/uncertainty/landUseChangeAndForestry/update'
    var bodyName = 'landUseChangeAndForestry';




    var obj={
      "year":this.state.newYears
    };

    const _a = []

    for(var i = 0;i<data.length;i++){




        _a.push({
          "dataName": data[i].dataName.value,
          "area": data[i].area.value,
          "volume": data[i].volume.value,

        })





    }

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= _a

    post(url, obj)
      .then((res) => {


        if (res.code==0) {
          this.setState({addCollapsed2:true})
          message.success(res.message);
          this.newQueryThearbor(this.state.newYears);

        } else {
          message.error(res.message);
        }
      });
  }


  //乔木排放因子不确定性update
  updateThearbor3(index,data3){




    var data = []

    for(var i = 0;i<data3.length;i++ ){
      if(data3[i].dataName.value =='合计或平均'){

      }else {
        data.push(data3[i])
      }
    }




    const Directory = [
      'arborForestEmissionFactor',

    ]

    var DirectoryIndex = Directory[0];

    var url = '/uncertainty/landUseChangeAndForestry/update'
    var bodyName = 'landUseChangeAndForestry';




    var obj={
      "year":this.state.newYears
    };

    const _a = []

    for(var i = 0;i<data.length;i++){




      _a.push({
        "dataName": data[i].dataName.value,
        "averageBasicWoodDensitySVD": data[i].averageBasicWoodDensitySVD.value,
        "averageBiomassExpansionFactor": data[i].averageBiomassExpansionFactor.value,
        "rhizomeRatioRSR": data[i].rhizomeRatioRSR.value,
        "biomassCarbonContentCF": data[i].biomassCarbonContentCF.value,
        "totalVolumeGrowthRate": data[i].totalVolumeGrowthRate.value,
        "volumeHarvestingRate": data[i].volumeHarvestingRate.value,
        "volumeLossRate": data[i].volumeLossRate.value,
      })





    }

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= _a

    post(url, obj)
      .then((res) => {


        if (res.code==0) {
          this.setState({addCollapsed3:true})
          message.success(res.message);
          this.newQueryThearbor(this.state.newYears);

        } else {
          message.error(res.message);
        }
      });
  }


  //乔木不确定性计算update
  updateThearbor5(index,data5){




    var data = []

    for(var i = 0;i<data5.length;i++ ){
      if(data5[i].dataName.value =='合计或平均'){

      }else {
        data.push(data5[i])
      }
    }




    const Directory = [
      'arborForestEmissions',

    ]

    var DirectoryIndex = Directory[0];

    var url = '/uncertainty/landUseChangeAndForestry/update'
    var bodyName = 'landUseChangeAndForestry';




    var obj={
      "year":this.state.newYears
    };

    const _a = []

    for(var i = 0;i<data.length;i++){




      _a.push({
        "dataName": data[i].dataName.value,
        "groundBiomassCarbonStorage": data[i].groundBiomassCarbonStorage.value,
        "wholeForestBiomassCarbonStorage": data[i].wholeForestBiomassCarbonStorage.value,
        "groundBiomassCarbonDensity": data[i].groundBiomassCarbonDensity.value,
        "wholeForestBiomassCarbonDensity": data[i].wholeForestBiomassCarbonDensity.value,
        "biomassGrowthCarbonUptake": data[i].biomassGrowthCarbonUptake.value,
        "preCalibrationHarvestingConsumptionOfCarbonEmissions": data[i].preCalibrationHarvestingConsumptionOfCarbonEmissions.value,
        "lossOfCarbonConsumption": data[i].lossOfCarbonConsumption.value,
        "afterCorrectionHarvestingConsumptionOfCarbonEmissions": data[i].afterCorrectionHarvestingConsumptionOfCarbonEmissions.value,
      })





    }

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= _a

    post(url, obj)
      .then((res) => {


        if (res.code==0) {
          this.setState({addCollapsed5:true})
          message.success(res.message);
          this.newQueryThearbor(this.state.newYears);

        } else {
          message.error(res.message);
        }
      });
  }


  handleAdd = () => {



    if(this.state.addCollapsed){

      this.setState({addCollapsed:false})

      const {  data } = this.state;
      const newData = {
        key:data.length+1,
        dataName:{
          editable: true,
          value:'0' ,
        },
        areaTotal:{
          editable: true,
          value:0 ,
        },
        volumeTotal: {
          editable: true,
          value:0 ,
        },
        areaYoungForest: {
          editable: true,
          value:0 ,
        },
        areaMiddleAgeForest: {
          editable: true,
          value:0,
        },
        areaNearRipeningForest: {
          editable: true,
          value:0 ,
        },
        areaMatureForest: {
          editable: true,
          value:0 ,
        },
        areaTooMatureForest: {
          editable: true,
          value:0 ,
        },
        volumeYoungForest: {
          editable: true,
          value:0,
        },
        volumeMiddleAgeForest: {
          editable: true,
          value:0,
        },
        volumeNearRipeningForest: {
          editable: true,
          value:0 ,
        },
        volumeMatureForest: {
          editable: true,
          value:0 ,
        },
        volumeTooMatureForest: {
          editable: true,
          value:0 ,
        },

      };
      this.setState({
        data: [...data, newData],

      });
    }else{
      message.error('数据添加未完成,请再次编辑！');
      return false;

    }


  }

  handleAdd1 = () => {


    if(this.state.addCollapsed1) {

      this.setState({addCollapsed1: false})
      const {data1} = this.state;
      const newData = {
        key: data1.length + 1,
        dataName: {
          editable: true,
          value: '0',
        },
        averageBasicWoodDensitySVD: {
          editable: true,
          value: 0,
        },
        averageBiomassExpansionFactor: {
          editable: true,
          value: 0,
        },
        rhizomeRatioRSR: {
          editable: true,
          value: 0,
        },
        biomassCarbonContentCF: {
          editable: true,
          value: 0,
        },
        totalVolumeGrowthRate: {
          editable: true,
          value: 0,
        },
        volumeHarvestingRate: {
          editable: true,
          value: 0,
        },
        volumeLossRate: {
          editable: true,
          value: 0,
        },


      };
      this.setState({
        data1: [...data1, newData],

      });
    }else{
      message.error('数据添加未完成,请再次编辑！');
      return false;
    }
  }

  handleAdd2 = () => {


    if(this.state.addCollapsed2) {

      this.setState({addCollapsed2: false})
      const {data2} = this.state;
      const newData = {

        key: data2.length + 1,
        dataName: {
          editable: true,
          value: '0',
        },
        area: {
          editable: true,
          value: 0,
        },
        volume: {
          editable: true,
          value: 0,
        },



      };
      this.setState({
        data2: [...data2, newData],

      });
    }else{
      message.error('数据添加未完成,请再次编辑！');
      return false;
    }
  }

  handleAdd3 = () => {


    if(this.state.addCollapsed3) {

      this.setState({addCollapsed3: false})
      const {data3} = this.state;
      const newData = {
        key: data3.length + 1,
        dataName: {
          editable: true,
          value: '0',
        },
        averageBasicWoodDensitySVD: {
          editable: true,
          value: 0,
        },
        averageBiomassExpansionFactor: {
          editable: true,
          value: 0,
        },
        rhizomeRatioRSR: {
          editable: true,
          value: 0,
        },
        biomassCarbonContentCF: {
          editable: true,
          value: 0,
        },
        totalVolumeGrowthRate: {
          editable: true,
          value: 0,
        },
        volumeHarvestingRate: {
          editable: true,
          value: 0,
        },
        volumeLossRate: {
          editable: true,
          value: 0,
        },


      };
      this.setState({
        data3: [...data3, newData],

      });
    }else{
      message.error('数据添加未完成,请再次编辑！');
      return false;
    }
  }

  handleAdd5 = () => {


    if(this.state.addCollapsed5) {

      this.setState({addCollapsed5: false})
      const {data5} = this.state;
      const newData = {
        key: data5.length + 1,
        dataName: {
          editable: true,
          value: '0',
        },
        groundBiomassCarbonStorage: {
          editable: true,
          value: 0,
        },
        wholeForestBiomassCarbonStorage: {
          editable: true,
          value: 0,
        },
        groundBiomassCarbonDensity: {
          editable: true,
          value: 0,
        },
        wholeForestBiomassCarbonDensity: {
          editable: true,
          value: 0,
        },
        biomassGrowthCarbonUptake: {
          editable: true,
          value: 0,
        },
        preCalibrationHarvestingConsumptionOfCarbonEmissions: {
          editable: true,
          value: 0,
        },
        lossOfCarbonConsumption: {
          editable: true,
          value: 0,
        },
        afterCorrectionHarvestingConsumptionOfCarbonEmissions: {
          editable: true,
          value: 0,
        },

      };
      this.setState({
        data5: [...data5, newData],

      });
    }else{
      message.error('数据添加未完成,请再次编辑！');
      return false;
    }
  }

  //年份选择
  selesctYears(years){

    this.setState({ loading: true});
    this.setState({years:years})
    this.queryThearbor(years)
    this.newQueryThearbor(years);

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
    const dataSource4= data4.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    const { data5 } = this.state;
    const dataSource5= data5.map((item) => {
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
          <span className={styles.title_span}>乔木林生物量生长碳吸收清单表</span>
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
          <p>活动水平</p>


          <Table  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1500, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
          <Button className={styles.button} onClick={this.handleAdd}>添加</Button>
        </div>


        <div className={styles.entryBody} id="bodyTable2"  >
          <p>排放因子</p>


          <Table  pagination={false} bordered={true}  columns={columns1} dataSource={dataSource1} scroll={{ x: 1500, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
          <Button className={styles.button} onClick={this.handleAdd1}>添加</Button>
        </div>


          <div className={styles.entryBody} id="bodyTable3"  >
            <p>活动水平不确定性</p>


            <Table  pagination={false} bordered={true}  columns={columns2} dataSource={dataSource2} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
            <Button className={styles.button} onClick={this.handleAdd2}>添加</Button>
          </div>

          <div className={styles.entryBody} id="bodyTable4"  >
            <p>排放因子不确定性</p>


            <Table  pagination={false} bordered={true}  columns={columns3} dataSource={dataSource3} scroll={{ x: 1500, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
            <Button className={styles.button} onClick={this.handleAdd3}>添加</Button>
          </div>

          <div className={styles.entryBody} id="bodyTable5"  >
            <p>排放量计算</p>


            <Table  pagination={false} bordered={true}  columns={columns4} dataSource={dataSource4} scroll={{ x: 2000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody} id="bodyTable6"  >
            <p>不确定性计算</p>


            <Table  pagination={false} bordered={true}  columns={columns5} dataSource={dataSource5} scroll={{ x: 2000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
            <Button className={styles.button} onClick={this.handleAdd5}>添加</Button>
          </div>

        </Spin>







      </div>
    );

  }
}


export default Form.create()(ElectricTable);
