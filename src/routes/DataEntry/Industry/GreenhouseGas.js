/**
 * Created by dixu on 2017/10/23.
 */
/**
 * 温室气体排放Created by dixu on 2017/10/17.
 */
import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch,Radio  } from 'antd';

import ReactDOM from 'react-dom'
import styles from './GreenhouseGas.less';
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

class EditableCell6 extends React.Component {

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

class EditableCell7 extends React.Component {

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

class EditableCell8 extends React.Component {

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

class EditableCell9 extends React.Component {

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

class EditableCell10 extends React.Component {

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

class EditableCell11 extends React.Component {

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

class CoalmineTable extends React.Component {



  constructor(props) {

    super(props);


    this.columns = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 100,

        colSpan:1,
        render: (text, record, index) =>
        {  const obj = {
          children:this.renderColumns(this.state.data, index, 'name', text),
          props: {},

        };
          return obj},

      },  {
        title: '水泥熟料产量(万吨)', dataIndex: 'cementClinkerProduction', width: 120,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'cementClinkerProduction', text),
          props: {},

        };
          return obj},
      },
        {
          title: '电石渣生产的熟料产量(万吨)', dataIndex: 'calciumCarbideProductionOfClinkerProduction', width: 120,
          render: (text, record, index) =>   {  const obj = {
            children: this.renderColumns(this.state.data, index, 'calciumCarbideProductionOfClinkerProduction', text),
            props: {},
          };
            return obj
          }

        }, {
          title: '排放因子(万吨)', dataIndex: 'emissionFactor', width: 120,
          render: (text, record, index) =>
          {  const obj = {
            children:  this.renderColumns(this.state.data, index, 'emissionFactor', text),
            props: {},
          };
            return obj},
        }, {
          title: 'CO2排放量(万吨)', dataIndex: 'emissionsco2', width: 120,
          render: (text, record, index) => {  const obj = {
            children: this.renderColumns(this.state.data, index, 'emissionsco2', text),
            props: {},
          };

            return obj},
        },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 70,

        render: (text, record, index) => {

          const { editable } = this.state.data[index].cementClinkerProduction;
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

        colSpan:1,
        render: (text, record, index) =>
        {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'name', text),
          props: {},

        };
          return obj},

      },  {
        title: '石灰产量(万吨)', dataIndex: 'limeProduction', width: 120,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns1(this.state.data1, index, 'limeProduction', text),
          props: {},

        };
          return obj},
      },
      {
        title: '排放因子(吨二氧化碳／吨石灰)', dataIndex: 'emissionFactor', width: 200,
        render: (text, record, index) =>   {  const obj = {
          children: this.renderColumns1(this.state.data1, index, 'emissionFactor', text),
          props: {},
        };
          return obj
        }

      },  {
        title: 'CO2排放量(万吨)', dataIndex: 'emissionsco2', width: 120,
        render: (text, record, index) => {  const obj = {
          children: this.renderColumns1(this.state.data1, index, 'emissionsco2', text),
          props: {},
        };

          return obj},
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 70,

        render: (text, record, index) => {

          const { editable } = this.state.data1[index].limeProduction;
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

        colSpan:1,
        render: (text, record, index) =>
        {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'name', text),
          props: {},

        };
          return obj},

      },  {
        title: '白云石消耗量(万吨)', dataIndex: 'dolomiteConsumption', width: 120,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'dolomiteConsumption', text),
          props: {},

        };
          return obj},
      },
      {
        title: '石灰石消耗量(万吨)', dataIndex: 'limestoneConsumption', width: 200,
        render: (text, record, index) =>   {  const obj = {
          children: this.renderColumns2(this.state.data2, index, 'limestoneConsumption', text),
          props: {},
        };
          return obj
        }

      },  {
        title: '炼钢生铁耗量(万吨)', dataIndex: 'steelmakingPigironConsumption', width: 120,
        render: (text, record, index) => {  const obj = {
          children: this.renderColumns2(this.state.data2, index, 'steelmakingPigironConsumption', text),
          props: {},
        };

          return obj},
      }, {
        title: '钢材用量(万吨)', dataIndex: 'steelConsumption', width: 120,
        render: (text, record, index) => {  const obj = {
          children: this.renderColumns2(this.state.data2, index, 'steelConsumption', text),
          props: {},
        };

          return obj},
      }, {
        title: '石灰石消耗排放因子(吨二氧化碳／吨石灰石)', dataIndex: 'limestoneConsumptionEmissionFactor', width: 120,
        render: (text, record, index) => {  const obj = {
          children: this.renderColumns2(this.state.data2, index, 'limestoneConsumptionEmissionFactor', text),
          props: {},
        };

          return obj},
      }, {
        title: '白云石消耗排放因子(吨二氧化碳／吨石灰石)', dataIndex: 'dolomiteConsumptionEmissionFactor', width: 120,
        render: (text, record, index) => {  const obj = {
          children: this.renderColumns2(this.state.data2, index, 'dolomiteConsumptionEmissionFactor', text),
          props: {},
        };

          return obj},
      },  {
        title: '生铁平均含碳量', dataIndex: 'pigironAverageCarbonContent', width: 120,
        render: (text, record, index) => {  const obj = {
          children: this.renderColumns2(this.state.data2, index, 'pigironAverageCarbonContent', text),
          props: {},
        };

          return obj},
      }, {
        title: '钢材平均含碳量', dataIndex: 'steelAverageCarbonContent', width: 120,
        render: (text, record, index) => {  const obj = {
          children: this.renderColumns2(this.state.data2, index, 'steelAverageCarbonContent', text),
          props: {},
        };

          return obj},
      },{
        title: 'CO2排放量(万吨)', dataIndex: 'emissionsco2', width: 120,
        render: (text, record, index) => {  const obj = {
          children: this.renderColumns2(this.state.data2, index, 'emissionsco2', text),
          props: {},
        };

          return obj},
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 70,

        render: (text, record, index) => {

          const { editable } = this.state.data2[index].dolomiteConsumption;
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

    this.columns3 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 100,

        colSpan:1,
        render: (text, record, index) =>
        {  const obj = {
          children:this.renderColumns3(this.state.data3, index, 'name', text),
          props: {},

        };
          return obj},

      },  {
        title: '电石产量(万吨)', dataIndex: 'calciumCarbideProduction', width: 120,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns3(this.state.data3, index, 'calciumCarbideProduction', text),
          props: {},

        };
          return obj},
      },
      {
        title: '排放因子(吨二氧化碳／吨电石)', dataIndex: 'emissionFactor', width: 200,
        render: (text, record, index) =>   {  const obj = {
          children: this.renderColumns3(this.state.data3, index, 'emissionFactor', text),
          props: {},
        };
          return obj
        }

      },  {
        title: 'CO2排放量(万吨)', dataIndex: 'emissionsco2', width: 120,
        render: (text, record, index) => {  const obj = {
          children: this.renderColumns3(this.state.data3, index, 'emissionsco2', text),
          props: {},
        };

          return obj},
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 70,

        render: (text, record, index) => {

          const { editable } = this.state.data3[index].calciumCarbideProduction;
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
        dataIndex: 'name',
        width: 100,

        colSpan:1,
        render: (text, record, index) =>
        {  const obj = {
          children:this.renderColumns4(this.state.data4, index, 'name', text),
          props: {},

        };
          return obj},

      },  {
        title: '乙二酸产量(万吨)', dataIndex: 'adipicAcidProduction', width: 120,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns4(this.state.data4, index, 'adipicAcidProduction', text),
          props: {},

        };
          return obj},
      },
      {
        title: '排放因子(吨二氧化碳／吨乙二酸)', dataIndex: 'emissionFactor', width: 200,
        render: (text, record, index) =>   {  const obj = {
          children: this.renderColumns4(this.state.data4, index, 'emissionFactor', text),
          props: {},
        };
          return obj
        }

      },  {
        title: 'NO2排放量(万吨)', dataIndex: 'emissionsco2', width: 120,
        render: (text, record, index) => {  const obj = {
          children: this.renderColumns4(this.state.data4, index, 'emissionsco2', text),
          props: {},
        };

          return obj},
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 70,

        render: (text, record, index) => {

          const { editable } = this.state.data4[index].adipicAcidProduction;
          return (
            <div className={styles.editableOperations} >

              {

                editable ?
                  <span>
                  <a onClick={() => this.editDone4(index, 'save')}>确认</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone4(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                  :
                  <span>
                  <a onClick={() => this.edit4(index)}>编辑</a>
                </span>
              }

            </div>
          );
        },
      }];

    this.columns5 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 200,

        colSpan:1,
        render: (text, record, index) =>
        {  const obj = {
          children:this.renderColumns5(this.state.data5, index, 'name', text),
          props: {},

        };


          return obj},

      },  {
        title: '产量(万吨)', dataIndex: 'production', width: 120,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns5(this.state.data5, index, 'production', text),
          props: {},

        };
         
          return obj},
      },
      {
        title: '排放因子(千克二氧化碳／吨硝酸)', dataIndex: 'emissionFactor', width: 200,
        render: (text, record, index) =>   {  const obj = {
          children: this.renderColumns5(this.state.data5, index, 'emissionFactor', text),
          props: {},
        };
         
          return obj
        }

      },  {
        title: 'NO2排放量(万吨)', dataIndex: 'emissionsco2', width: 120,
        render: (text, record, index) => {  const obj = {
          children: this.renderColumns5(this.state.data5, index, 'emissionsco2', text),
          props: {},
        };

          return obj},
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 70,

        render: (text, record, index) => {

          const { editable } = this.state.data5[index].production;
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
      }];

    this.columns6 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 200,

        colSpan:1,
        render: (text, record, index) => this.renderColumns6(this.state.data6, index, 'name', text)}
      , {
        title: '产量(万吨)', dataIndex: 'production', width: 100,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns6(this.state.data6, index, 'production', text),
          props: {},

        };
          if (index === 0) {
            obj.props.rowSpan = 2;
          }
          if (index === 1) {
            obj.props.rowSpan = 0;
          }
          if (index === 2) {
            obj.props.rowSpan = 2;
          }
          if (index === 3) {
            obj.props.rowSpan = 0;
          }
          return obj},
      },{
        title: '排放因子',
        children: [{
          title: '排放气体', dataIndex: 'exhaustGas', width: 100,
          render: (text, record, index) => this.renderColumns6(this.state.data6, index, 'exhaustGas', text),
        }, {
          title: '单位', dataIndex: 'unit', width: 100,
          render: (text, record, index) => this.renderColumns6(this.state.data6, index, 'unit', text),
        }, {
          title: '数值', dataIndex: 'value', width: 100,
          render: (text, record, index) => this.renderColumns6(this.state.data6, index, 'value', text),
        }],
      },

      {
        title: '排放量(吨)', dataIndex: 'total', width: 100,
        render: (text, record, index) => this.renderColumns6(this.state.data6, index, 'total', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data6[index].production;
          return (
            <div className={styles.editableOperations} >

              {

                editable ?
                  <span>
                  <a onClick={() => this.editDone6(index, 'save')}>确认</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone6(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                  :
                  <span>
                  <a onClick={() => this.edit6(index)}>编辑</a>
                </span>
              }

            </div>
          );
        },
      }];

    this.columns7 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 200,

        colSpan:1,
        render: (text, record, index) => this.renderColumns7(this.state.data7, index, 'name', text)}
      , {
        title: '镁产量(万吨)', dataIndex: 'magnesiumProduction', width: 100,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns7(this.state.data7, index, 'magnesiumProduction', text),
          props: {},

        };

          return obj},
      },{
        title: '排放因子(千克SF6/吨镁)', dataIndex: 'emissionFactor', width: 100,
        render: (text, record, index) => this.renderColumns7(this.state.data7, index, 'emissionFactor', text),
      },

      {
        title: 'SF6排放量(吨)', dataIndex: 'emissionsSF6', width: 100,
        render: (text, record, index) => this.renderColumns7(this.state.data7, index, 'emissionsSF6', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data7[index].magnesiumProduction;
          return (
            <div className={styles.editableOperations} >

              {

                editable ?
                  <span>
                  <a onClick={() => this.editDone7(index, 'save')}>确认</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone7(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                  :
                  <span>
                  <a onClick={() => this.edit7(index)}>编辑</a>
                </span>
              }

            </div>
          );
        },
      }];

    this.columns8 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 200,

        colSpan:1,
        render: (text, record, index) => this.renderColumns8(this.state.data8, index, 'name', text)}
      , {
        title: '电力设备生产过程六氟化硫使用量(吨)', dataIndex: 'production', width: 200,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns8(this.state.data8, index, 'production', text),
          props: {},

        };

          return obj},
      },{
        title: '排放因子', dataIndex: 'emissionFactor', width: 100,
        render: (text, record, index) => this.renderColumns8(this.state.data8, index, 'emissionFactor', text),
      },

      {
        title: 'SF6排放量(吨)', dataIndex: 'emissionsSF6', width: 100,
        render: (text, record, index) => this.renderColumns8(this.state.data8, index, 'emissionsSF6', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data8[index].production;
          return (
            <div className={styles.editableOperations} >

              {

                editable ?
                  <span>
                  <a onClick={() => this.editDone8(index, 'save')}>确认</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone8(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                  :
                  <span>
                  <a onClick={() => this.edit8(index)}>编辑</a>
                </span>
              }

            </div>
          );
        },
      }];

    this.columns9 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 200,

        colSpan:1,
        render: (text, record, index) => this.renderColumns9(this.state.data9, index, 'name', text)}
      ,{
        title: '活动水平数值',
        children: [{
          title: '刻蚀(吨)', dataIndex: 'activityLevelValueEtching', width: 100,
          render: (text, record, index) => this.renderColumns9(this.state.data9, index, 'activityLevelValueEtching', text),
        }, {
          title: 'CVD清洗(吨)', dataIndex: 'activityLevelValueCVD', width: 100,
          render: (text, record, index) => this.renderColumns9(this.state.data9, index, 'activityLevelValueCVD', text),
        }],
      },,{
        title: '排放因子',
        children: [{
          title: '刻蚀', dataIndex: 'emissionFactorEtching', width: 100,
          render: (text, record, index) => this.renderColumns9(this.state.data9, index, 'emissionFactorEtching', text),
        }, {
          title: 'CVD清洗', dataIndex: 'emissionFactorCVD', width: 100,
          render: (text, record, index) => this.renderColumns9(this.state.data9, index, 'emissionFactorCVD', text),
        }],
      },

      {
        title: '排放量(吨)', dataIndex: 'emissions', width: 100,
        render: (text, record, index) => this.renderColumns9(this.state.data9, index, 'emissions', text),
      },
      {
        title: '排放当量(吨)', dataIndex: 'emissionsEquivalent', width: 100,
        render: (text, record, index) => this.renderColumns9(this.state.data9, index, 'emissionsEquivalent', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data9[index].activityLevelValueEtching;
          return (
            <div className={styles.editableOperations} >

              {

                editable ?
                  <span>
                  <a onClick={() => this.editDone9(index, 'save')}>确认</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone9(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                  :
                  <span>
                  <a onClick={() => this.edit9(index)}>编辑</a>
                </span>
              }

            </div>
          );
        },
      }];

    this.columns10 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 200,

        colSpan:1,
        render: (text, record, index) => this.renderColumns10(this.state.data10, index, 'name', text)}
      , {
        title: 'HCFC-22产量(吨)', dataIndex: 'HCFC_22Production', width: 200,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns10(this.state.data10, index, 'HCFC_22Production', text),
          props: {},

        };

          return obj},
      },{
        title: '排放因子', dataIndex: 'emissionFactor', width: 100,
        render: (text, record, index) => this.renderColumns10(this.state.data10, index, 'emissionFactor', text),
      },

      {
        title: 'HFC-23排放量(吨)', dataIndex: 'emissionsSF6', width: 100,
        render: (text, record, index) => this.renderColumns10(this.state.data10, index, 'emissionsSF6', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data10[index].HCFC_22Production;
          return (
            <div className={styles.editableOperations} >

              {

                editable ?
                  <span>
                  <a onClick={() => this.editDone10(index, 'save')}>确认</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone10(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                  :
                  <span>
                  <a onClick={() => this.edit10(index)}>编辑</a>
                </span>
              }

            </div>
          );
        },
      }];

    this.columns11 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 200,

        colSpan:1,
        render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'name', text)}
      , {
        title: '活动水平数值(吨)', dataIndex: 'activityLevelValue', width: 200,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns11(this.state.data11, index, 'activityLevelValue', text),
          props: {},

        };

          return obj},
      },{
        title: '排放因子', dataIndex: 'emissionFactor', width: 100,
        render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'emissionFactor', text),
      },

      {
        title: '排放量(吨)', dataIndex: 'emissionsSF6', width: 100,
        render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'emissionsSF6', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data11[index].activityLevelValue;
          return (
            <div className={styles.editableOperations} >

              {

                editable ?
                  <span>
                  <a onClick={() => this.editDone11(index, 'save')}>确认</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone11(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                  :
                  <span>
                  <a onClick={() => this.edit11(index)}>编辑</a>
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
      data4: [],
      data5: [],
      data6: [],
      data7: [],
      data8: [],
      data9: [],
      data10: [],
      data11: [],
      loading: true ,

      collapsed: false,
      select:1,
      trigger:true,
      user:[],


      statistics:'b1',
      value:'1',


      AllData:[],
      years:'2014'
    };


    this.queryGreenhouseGas('2014');
    //this.queryOilgas1()


    //$("#bodyTable1").hide();

  }

  // 氢氟烃
  renderColumns11(data11, index, key, text) {


    const { editable, status } = data11[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (

      <EditableCell11
        editable={editable}
        value={text}
        onChange={value => this.handleChange11(key, index, value)}
        status={status}
      />);
  }


  handleChange11(key, index, value) {



    const data11 = [...this.state.data11];
    data11[index][key].value = value;
    this.setState({ data11 });

    if(key  == 'emissionFactor'){

      this.updateGreenhouseGas11(index,data11);
    }





  }

  edit11(index) {

    const { data11 } = this.state;
    Object.keys(data11[index]).forEach((item) => {
      if (data11[index][item] && typeof data11[index][item].editable !== 'undefined') {
        data11[index][item].editable = true;
      }
    });
    this.setState({ data11 });
  }

  editDone11(index, type) {

    const { data11 } = this.state;
    Object.keys(data11[index]).forEach((item) => {
      if (data11[index][item] && typeof data11[index][item].editable !== 'undefined') {
        data11[index][item].editable = false;
        data11[index][item].status = type;
      }
    });
    this.setState({ data11 }, () => {
      Object.keys(data11[index]).forEach((item) => {
        if (data11[index][item] && typeof data11[index][item].editable !== 'undefined') {
          delete data11[index][item].status;
        }
      });
    });
  }

  // 一氯二氟
  renderColumns10(data10, index, key, text) {


    const { editable, status } = data10[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (

      <EditableCell10
        editable={editable}
        value={text}
        onChange={value => this.handleChange10(key, index, value)}
        status={status}
      />);
  }


  handleChange10(key, index, value) {



    const data10 = [...this.state.data10];
    data10[index][key].value = value;
    this.setState({ data10 });

    if(key  == 'emissionFactor'){

      this.updateGreenhouseGas10(index,data10);
    }





  }

  edit10(index) {

    const { data10 } = this.state;
    Object.keys(data10[index]).forEach((item) => {
      if (data10[index][item] && typeof data10[index][item].editable !== 'undefined') {
        data10[index][item].editable = true;
      }
    });
    this.setState({ data10 });
  }

  editDone10(index, type) {

    const { data10 } = this.state;
    Object.keys(data10[index]).forEach((item) => {
      if (data10[index][item] && typeof data10[index][item].editable !== 'undefined') {
        data10[index][item].editable = false;
        data10[index][item].status = type;
      }
    });
    this.setState({ data10 }, () => {
      Object.keys(data10[index]).forEach((item) => {
        if (data10[index][item] && typeof data10[index][item].editable !== 'undefined') {
          delete data10[index][item].status;
        }
      });
    });
  }


  // 半导体
  renderColumns9(data9, index, key, text) {


    const { editable, status } = data9[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (

      <EditableCell9
        editable={editable}
        value={text}
        onChange={value => this.handleChange9(key, index, value)}
        status={status}
      />);
  }


  handleChange9(key, index, value) {



    const data9 = [...this.state.data9];
    data9[index][key].value = value;
    this.setState({ data9 });

    if(key  == 'emissionFactorCVD'){

      this.updateGreenhouseGas9(index,data9);
    }





  }

  edit9(index) {

    const { data9 } = this.state;
    Object.keys(data9[index]).forEach((item) => {
      if (data9[index][item] && typeof data9[index][item].editable !== 'undefined') {
        data9[index][item].editable = true;
      }
    });
    this.setState({ data9 });
  }

  editDone9(index, type) {

    const { data9 } = this.state;
    Object.keys(data9[index]).forEach((item) => {
      if (data9[index][item] && typeof data9[index][item].editable !== 'undefined') {
        data9[index][item].editable = false;
        data9[index][item].status = type;
      }
    });
    this.setState({ data9 }, () => {
      Object.keys(data9[index]).forEach((item) => {
        if (data9[index][item] && typeof data9[index][item].editable !== 'undefined') {
          delete data9[index][item].status;
        }
      });
    });
  }


  // 电力
  renderColumns8(data8, index, key, text) {


    const { editable, status } = data8[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (

      <EditableCell8
        editable={editable}
        value={text}
        onChange={value => this.handleChange8(key, index, value)}
        status={status}
      />);
  }


  handleChange8(key, index, value) {



    const data8 = [...this.state.data8];
    data8[index][key].value = value;
    this.setState({ data8 });

    if(key  == 'emissionFactor'){

      this.updateGreenhouseGas8(index,data8);
    }





  }

  edit8(index) {

    const { data8 } = this.state;
    Object.keys(data8[index]).forEach((item) => {
      if (data8[index][item] && typeof data8[index][item].editable !== 'undefined') {
        data8[index][item].editable = true;
      }
    });
    this.setState({ data8 });
  }

  editDone8(index, type) {

    const { data8 } = this.state;
    Object.keys(data8[index]).forEach((item) => {
      if (data8[index][item] && typeof data8[index][item].editable !== 'undefined') {
        data8[index][item].editable = false;
        data8[index][item].status = type;
      }
    });
    this.setState({ data8 }, () => {
      Object.keys(data8[index]).forEach((item) => {
        if (data8[index][item] && typeof data8[index][item].editable !== 'undefined') {
          delete data8[index][item].status;
        }
      });
    });
  }

  // 镁生产
  renderColumns7(data7, index, key, text) {


    const { editable, status } = data7[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (

      <EditableCell7
        editable={editable}
        value={text}
        onChange={value => this.handleChange7(key, index, value)}
        status={status}
      />);
  }


  handleChange7(key, index, value) {



    const data7 = [...this.state.data7];
    data7[index][key].value = value;
    this.setState({ data7 });

    if(key  == 'emissionFactor'){

      this.updateGreenhouseGas7(index,data7);
    }





  }

  edit7(index) {

    const { data7 } = this.state;
    Object.keys(data7[index]).forEach((item) => {
      if (data7[index][item] && typeof data7[index][item].editable !== 'undefined') {
        data7[index][item].editable = true;
      }
    });
    this.setState({ data7 });
  }

  editDone7(index, type) {

    const { data7 } = this.state;
    Object.keys(data7[index]).forEach((item) => {
      if (data7[index][item] && typeof data7[index][item].editable !== 'undefined') {
        data7[index][item].editable = false;
        data7[index][item].status = type;
      }
    });
    this.setState({ data7 }, () => {
      Object.keys(data7[index]).forEach((item) => {
        if (data7[index][item] && typeof data7[index][item].editable !== 'undefined') {
          delete data7[index][item].status;
        }
      });
    });
  }


  // 铝生产
  renderColumns6(data6, index, key, text) {


    const { editable, status } = data6[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (

      <EditableCell6
        editable={editable}
        value={text}
        onChange={value => this.handleChange6(key, index, value)}
        status={status}
      />);
  }


  handleChange6(key, index, value) {



    const data6 = [...this.state.data6];
    data6[index][key].value = value;
    this.setState({ data6 });

    if(key  == 'value'){

      this.updateGreenhouseGas6(index,data6);
    }





  }

  edit6(index) {

    const { data6 } = this.state;
    Object.keys(data6[index]).forEach((item) => {
      if (data6[index][item] && typeof data6[index][item].editable !== 'undefined') {
        data6[index][item].editable = true;
      }
    });
    this.setState({ data6 });
  }

  editDone6(index, type) {

    const { data6 } = this.state;
    Object.keys(data6[index]).forEach((item) => {
      if (data6[index][item] && typeof data6[index][item].editable !== 'undefined') {
        data6[index][item].editable = false;
        data6[index][item].status = type;
      }
    });
    this.setState({ data6 }, () => {
      Object.keys(data6[index]).forEach((item) => {
        if (data6[index][item] && typeof data6[index][item].editable !== 'undefined') {
          delete data6[index][item].status;
        }
      });
    });
  }


  // 硝酸生产
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

    if(key  == 'emissionFactor'){

     this.updateGreenhouseGas5(index,data5);
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


  // 乙二酸生产
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

    if(key  == 'emissionFactor'){

      this.updateGreenhouseGas4(index,data4);
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


  // 电石生产
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

    if(key  == 'emissionFactor'){

     this.updateGreenhouseGas3(index,data3);
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



  // 钢铁生产
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

    if(key  == 'pigironAverageCarbonContent'){

      this.updateGreenhouseGas2(index,data2);
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



  // 石灰生产
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

     this.updateGreenhouseGas1(index,data1);
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


  // 水泥生产
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

    if(key  == 'emissionFactor'){

    this.updateGreenhouseGas(index,data);
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



  //工业生产过程温室气体排放量计算
  queryGreenhouseGas(years){

    post('/activityLevelDataEntry/industrialProductionProcess/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {


          var Alldata = res.data;

          const _Data = []
          const _data = []
          const _data1 = []
          const _data2 = []
          const _data3 = []
          const _data4 = []

          _Data.push(Alldata.cementProductionProcess);//水泥生产过程
          _Data.push(Alldata.limeProductionProcess);//石灰生产过程
          _Data.push(Alldata.steelProductionProcess); //钢铁生产过程
          _Data.push(Alldata.calciumCarbideProductionProcess);//电石生产过程
          _Data.push(Alldata.adipicAcidProductionProcess);//己二酸生产过程
          _Data.push(Alldata.nitricAcidProductionProcess);//硝酸生产过程
          _Data.push(Alldata.aluminumProductionProcess);//铝生产过程
          _Data.push(Alldata.magnesiumProductionProcess);//镁生产过程
          _Data.push(Alldata.electricPowerEquipmentProductionProcess);//电力设备生产过程
          _Data.push(Alldata.semiconductorProductionProcess);//半导体生产过程
          _Data.push(Alldata.chlorodifluoromethaneProductionProcess);//一氯二氟甲烷生产过程
          _Data.push(Alldata.hydrofluorocarbonProductionProcess);//氢氟烃生产过程


          //硝酸
          _data.push(Alldata.nitricAcidProductionProcess.highPressureMethod_noInstalled);
          _data.push(Alldata.nitricAcidProductionProcess.highPressureMethod_installationDevice);
          _data.push(Alldata.nitricAcidProductionProcess.mediumPressureMethod);
          _data.push(Alldata.nitricAcidProductionProcess.atmosphericPressureMethod);
          _data.push(Alldata.nitricAcidProductionProcess.doublePressurized);
          _data.push(Alldata.nitricAcidProductionProcess.comprehensiveMethod);
          _data.push(Alldata.nitricAcidProductionProcess.lowPressureMethod);
          _data.push('');


          //铝
          _data1.push(Alldata.aluminumProductionProcess.precastingTechnologyOfPointCutting);
          _data1.push(Alldata.aluminumProductionProcess.sidemountedAnodeRods);


          //镁
          _data2.push(Alldata.magnesiumProductionProcess.usingSulfurHexafluorideAsAProtectiveAgent);
          _data2.push(Alldata.magnesiumProductionProcess.magnesiumProcessing);

          //半导体
          _data3.push(Alldata.semiconductorProductionProcess.CF4Dosage);
          _data3.push(Alldata.semiconductorProductionProcess.CHF3Dosage);
          _data3.push(Alldata.semiconductorProductionProcess.C2F6Dosage);
          _data3.push(Alldata.semiconductorProductionProcess.SF6Dosage);


          //氢氟烃
          _data4.push(Alldata.hydrofluorocarbonProductionProcess.HFC_32);
          _data4.push(Alldata.hydrofluorocarbonProductionProcess.HFC_125);
          _data4.push(Alldata.hydrofluorocarbonProductionProcess.HFC_134a);
          _data4.push(Alldata.hydrofluorocarbonProductionProcess.HFC_143a);
          _data4.push(Alldata.hydrofluorocarbonProductionProcess.HFC_152a);
          _data4.push(Alldata.hydrofluorocarbonProductionProcess.HFC_227ea);
          _data4.push(Alldata.hydrofluorocarbonProductionProcess.HFC_236fa);
          _data4.push(Alldata.hydrofluorocarbonProductionProcess.HFC_245fa);

          //硝酸
          const fossilTitle = [


            '　　高压法（没有安装非选择性尾气处理装置）',
            '　　高压法（安装非选择性尾气处理装置）',
            '　　中压法',
            '　　常压法',
            '　　双加压',
            '　　综合法',
            '　　低压法',
            '　　合计',

          ];


          //铝
          const fossilTitle1 = [


            '　　点式下料预焙槽技术',

            '　　侧插阳极棒自焙槽技术',


          ];

          const fossilTitle2 = [


            '　　采用六氟化硫作为保护剂',
            '　　镁加工',


          ];

          const fossilTitle3 = [


            'CF4用量',
            'CHF3用量',
            'C2F6用量',
            'SF6用量',


          ];

          const fossilTitle4 = [


            'HFC-32',
            'HFC-125',
            'HFC-134a',
            'HFC-143a',
            'HFC-152a',
            'HFC-227ea',
            'HFC-236fa',
            'HFC-245fa',


          ];


          //硝酸
          const _a = [];
          var _production = 0;
          var _emissionsco2 = 0;

          for (var i = 0; i < 7; i++) {



              _a.push({
                key: i,
                name: fossilTitle[i],
                production: _data[i].production,
                emissionFactor: _data[i].emissionFactor,
                emissionsco2: (_data[i].production*_data[i].emissionFactor*10).toFixed(2),

              });

            _production +=_data[i].production;
            _emissionsco2 += (_data[i].production*_data[i].emissionFactor*10)

          }

          _a.push({
            key: 7,
            name: fossilTitle[7],
            production: _production.toFixed(2),
            emissionFactor: '',
            emissionsco2: _emissionsco2.toFixed(2),

          });


          //铝
          const _a1 = [];

          for (var i = 0; i < 2; i++) {


            if (i == 0) {
              _a1.push({
                key: i,
                name: fossilTitle1[i],
                exhaustGas: 'CF4',
                production: _data1[i].production,
                value: _data1[i].CF4,
                unit: '千克CF4／吨铝',
                total: '0'
              });
              _a1.push({
                key: i,
                name: fossilTitle1[i],
                exhaustGas: 'C2F6',
                production: _data1[i].production,
                value: _data1[i].C2F6,
                unit: '千克C2F6／吨铝',
                total: '0'
              });
            } else {
              _a1.push({
                key: i,
                name: fossilTitle1[i],
                exhaustGas: 'CF4',
                production: _data1[i].production,
                value: _data1[i].CF4,
                unit: '千克CF4／吨铝',
                total: '0'
              });
              _a1.push({
                key: i,
                name: fossilTitle1[i],
                exhaustGas: 'C2F6',
                production: _data1[i].production,
                value: _data1[i].C2F6,
                unit: '千克C2F6／吨铝',
                total: '0'
              });
            }


          }


          //镁
          const _a2 = [];

          for (var i = 0; i < 2; i++) {


            _a2.push({
              key: i,
              name: fossilTitle2[i],
              magnesiumProduction: _data2[i].magnesiumProduction,
              emissionFactor: _data2[i].emissionFactor,
              emissionsSF6: '',

            });

          }


          //半导体
          const _a3 = [];

          for (var i = 0; i < 4; i++) {


            _a3.push({
              key: i,
              name: fossilTitle3[i],
              activityLevelValueEtching: _data3[i].activityLevelValueEtching,
              activityLevelValueCVD: _data3[i].activityLevelValueCVD,
              emissionFactorEtching: _data3[i].emissionFactorEtching,
              emissionFactorCVD: _data3[i].emissionFactorCVD,

            });

          }


          //半导体
          const _a4 = [];

          for (var i = 0; i < 8; i++) {


            _a4.push({
              key: i,
              name: fossilTitle4[i],
              activityLevelValue: _data4[i].activityLevelValue,
              emissionFactor: _data4[i].emissionFactor,
              emissionsSF6: '',


            });

          }


          const _b = [];//水泥生产过程

          _b.push({
              key: 1,
              name: {

                value: '',
              },
              cementClinkerProduction: {
                editable: false,
                value: Alldata.cementProductionProcess.cementClinkerProduction,
              },
              calciumCarbideProductionOfClinkerProduction: {
                editable: false,
                value: Alldata.cementProductionProcess.calciumCarbideProductionOfClinkerProduction,
              },
              emissionFactor: {
                editable: false,
                value: Alldata.cementProductionProcess.emissionFactor,
              },
              emissionsco2: {

                value: ((Alldata.cementProductionProcess.cementClinkerProduction-Alldata.cementProductionProcess.calciumCarbideProductionOfClinkerProduction)*Alldata.cementProductionProcess.emissionFactor).toFixed(2),
              },

            }
          );


          const _b1 = [];//石灰生产过程

          _b1.push({
              key: 1,
              name: {

                value: '',
              },
              limeProduction: {
                editable: false,
                value: Alldata.limeProductionProcess.limeProduction,
              },
              emissionFactor: {
                editable: false,
                value: Alldata.limeProductionProcess.emissionFactor,
              },
              emissionsco2: {

                value: (Alldata.limeProductionProcess.limeProduction*Alldata.limeProductionProcess.emissionFactor).toFixed(2),
              },
            }
          );


          const _b2 = [];//钢铁生产过程

          _b2.push({
              key: 1,
              name: {

                value: '',
              },
              dolomiteConsumption: {
                editable: false,
                value: Alldata.steelProductionProcess.dolomiteConsumption,
              },
              limestoneConsumption: {
                editable: false,
                value: Alldata.steelProductionProcess.limestoneConsumption,
              },
              steelmakingPigironConsumption: {
                editable: false,
                value: Alldata.steelProductionProcess.steelmakingPigironConsumption,
              },
              steelConsumption: {
                editable: false,
                value: Alldata.steelProductionProcess.steelConsumption,
              },
              limestoneConsumptionEmissionFactor: {
                editable: false,
                value: Alldata.steelProductionProcess.limestoneConsumptionEmissionFactor,
              },
              dolomiteConsumptionEmissionFactor: {
                editable: false,
                value: Alldata.steelProductionProcess.dolomiteConsumptionEmissionFactor,
              },
              steelAverageCarbonContent: {
                editable: false,
                value: Alldata.steelProductionProcess.steelAverageCarbonContent,
              },

              pigironAverageCarbonContent: {
                editable: false,
                value: Alldata.steelProductionProcess.pigironAverageCarbonContent,
              },
              emissionsco2: {

                value: (Alldata.steelProductionProcess.dolomiteConsumption*Alldata.steelProductionProcess.dolomiteConsumptionEmissionFactor
                +Alldata.steelProductionProcess.limestoneConsumption*Alldata.steelProductionProcess.limestoneConsumptionEmissionFactor
                +(Alldata.steelProductionProcess.steelConsumption*Alldata.steelProductionProcess.steelAverageCarbonContent
                -Alldata.steelProductionProcess.steelConsumption*Alldata.steelProductionProcess.pigironAverageCarbonContent)*44/12).toFixed(2),
              },
            }
          );


          const _b3 = [];//电石生产过程

          _b3.push({
              key: 1,
              name: {

                value: '',
              },
              calciumCarbideProduction: {
                editable: false,
                value: Alldata.calciumCarbideProductionProcess.calciumCarbideProduction,
              },
              emissionFactor: {
                editable: false,
                value: Alldata.calciumCarbideProductionProcess.emissionFactor,
              },
              emissionsco2: {

                value: (Alldata.calciumCarbideProductionProcess.calciumCarbideProduction*Alldata.calciumCarbideProductionProcess.emissionFactor).toFixed(2),
              },
            }
          );


          const _b4 = [];//乙二酸生产过程

          _b4.push({
              key: 1,
              name: {

                value: '',
              },
              adipicAcidProduction: {
                editable: false,
                value: Alldata.adipicAcidProductionProcess.adipicAcidProduction,
              },
              emissionFactor: {
                editable: false,
                value: Alldata.adipicAcidProductionProcess.emissionFactor,
              },
              emissionsco2: {

                value: (Alldata.adipicAcidProductionProcess.adipicAcidProduction*Alldata.adipicAcidProductionProcess.emissionFactor).toFixed(2),
              },
            }
          );


          const _b5 = [];//小酸生产过程

          for (var i = 0; i < _a.length; i++) {

            _b5.push({
                key: [i],
                name: {

                  value: _a[i].name,
                },
                production: {
                  editable: false,
                  value: _a[i].production,
                },
                emissionFactor: {
                  editable: false,
                  value: _a[i].emissionFactor,
                },
                emissionsco2: {

                  value: _a[i].emissionsco2,
                },
              }
            );
          }


          const _b6 = [];//铝生产过程

          for (var i = 0; i < _a1.length; i++) {

            _b6.push({
                key: [i],
                name: {

                  value: _a1[i].name,
                },
                production: {
                  editable: false,
                  value: _a1[i].production,
                },
                exhaustGas: {

                  value: _a1[i].exhaustGas,
                },
                unit: {

                  value: _a1[i].unit,
                },
                value: {
                  editable: false,
                  value: _a1[i].value,
                },
                total: {

                  value: (_a1[i].production*_a1[i].value*10).toFixed(2),
                },
              }
            );
          }


          const _b7 = [];//镁生产过程

          for (var i = 0; i < _a2.length; i++) {

            _b7.push({
                key: [i],
                name: {

                  value: _a2[i].name,
                },
                magnesiumProduction: {
                  editable: false,
                  value: _a2[i].magnesiumProduction,
                },
                emissionFactor: {
                  editable: false,
                  value: _a2[i].emissionFactor,
                },
                emissionsSF6: {

                  value: (_a2[i].magnesiumProduction*_a2[i].emissionFactor*10).toFixed(2),
                },
              }
            );
          }

          const _b8 = [];//电力设备

          _b8.push({
              key: 1,
              name: {

                value: '',
              },
              production: {
                editable: false,
                value: Alldata.electricPowerEquipmentProductionProcess.production,
              },
              emissionFactor: {
                editable: false,
                value: Alldata.electricPowerEquipmentProductionProcess.emissionFactor,
              },
              emissionsSF6: {

                value: (Alldata.electricPowerEquipmentProductionProcess.production*Alldata.electricPowerEquipmentProductionProcess.emissionFactor).toFixed(2),
              },
            }
          );

          const _b9 = [];//半导体生产过程

          for (var i = 0; i < _a3.length; i++) {

            _b9.push({
                key: [i],
                name: {

                  value: _a3[i].name,
                },
                activityLevelValueEtching: {
                  editable: false,
                  value: _a3[i].activityLevelValueEtching,
                },
                activityLevelValueCVD: {
                  editable: false,
                  value: _a3[i].activityLevelValueCVD,
                },
                emissionFactorEtching: {
                  editable: false,
                  value: _a3[i].emissionFactorEtching,
                },
                emissionFactorCVD: {
                  editable: false,
                  value: _a3[i].emissionFactorCVD,
                },
                emissions: {

                  value: (_a3[i].activityLevelValueEtching*_a3[i].emissionFactorEtching+_a3[i].activityLevelValueCVD*_a3[i].emissionFactorCVD).toFixed(2),
                },
                emissionsEquivalent: {

                  value: ((_a3[i].activityLevelValueEtching*_a3[i].emissionFactorEtching+_a3[i].activityLevelValueCVD*_a3[i].emissionFactorCVD)*6500/10000).toFixed(2),
                },
              }
            );
          }


          const _b10 = [];//一氯二氟

          _b10.push({
              key: 1,
              name: {

                value: '',
              },
              HCFC_22Production: {
                editable: false,
                value: Alldata.chlorodifluoromethaneProductionProcess.HCFC_22Production,
              },
              emissionFactor: {
                editable: false,
                value: Alldata.chlorodifluoromethaneProductionProcess.emissionFactor,
              },
              emissionsSF6: {

                value: (Alldata.chlorodifluoromethaneProductionProcess.HCFC_22Production*Alldata.chlorodifluoromethaneProductionProcess.emissionFactor).toFixed(2),
              },
            }
          );


          const _b11 = [];//氢氟烃

          for (var i = 0; i < _a4.length; i++){
            _b11.push({
                key: i,
                name: {

                  value: _a4[i].name,
                },
                activityLevelValue: {
                  editable: false,
                  value: _a4[i].activityLevelValue,
                },
                emissionFactor: {
                  editable: false,
                  value: _a4[i].emissionFactor,
                },
                emissionsSF6: {

                  value: (_a4[i].activityLevelValue*_a4[i].emissionFactor).toFixed(2),
                },
              }
            );
          }
         


          this.setState({data:_b});
          this.setState({data1:_b1});
          this.setState({data2:_b2});
          this.setState({data3:_b3});
          this.setState({data4:_b4});
          this.setState({data5:_b5});
          this.setState({data6:_b6});
          this.setState({data7:_b7});
          this.setState({data8:_b8});
          this.setState({data9:_b9});
          this.setState({data10:_b10});
          this.setState({data11:_b11});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //水泥生产update
  updateGreenhouseGas(index,data,a){


    var data  = data


    var DirectoryIndex = 'cementProductionProcess';

    var url = '/activityLevelDataEntry/industrialProductionProcess/update'
    var bodyName = 'industrialProductionProcess'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]=  {
      "cementClinkerProduction": data[index].cementClinkerProduction.value,
      "calciumCarbideProductionOfClinkerProduction": data[index].calciumCarbideProductionOfClinkerProduction.value,
      "emissionFactor": data[index].emissionFactor.value,

    },




      post(url, obj)
        .then((res) => {

          if (res.code==0) {
            message.success(res.message);
            this.queryGreenhouseGas(this.state.years)

          } else {
            message.error(res.message);
          }
        });
  }

  //石灰生产update
  updateGreenhouseGas1(index,data1,a){


    var data  = data1


    var DirectoryIndex = 'limeProductionProcess';

    var url = '/activityLevelDataEntry/industrialProductionProcess/update'
    var bodyName = 'industrialProductionProcess'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]=  {
      "limeProduction": data[index].limeProduction.value,
      "emissionFactor": data[index].emissionFactor.value,

    },




      post(url, obj)
        .then((res) => {

          if (res.code==0) {
            message.success(res.message);
            this.queryGreenhouseGas(this.state.years)

          } else {
            message.error(res.message);
          }
        });
  }

  //钢铁生产update
  updateGreenhouseGas2(index,data2,a){


    var data  = data2


    var DirectoryIndex = 'steelProductionProcess';

    var url = '/activityLevelDataEntry/industrialProductionProcess/update'
    var bodyName = 'industrialProductionProcess'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]=  {
      "dolomiteConsumption": data[index].dolomiteConsumption.value,
      "limestoneConsumption": data[index].limestoneConsumption.value,
      "steelmakingPigironConsumption": data[index].steelmakingPigironConsumption.value,
      "steelConsumption": data[index].steelConsumption.value,
      "limestoneConsumptionEmissionFactor": data[index].limestoneConsumptionEmissionFactor.value,
      "dolomiteConsumptionEmissionFactor": data[index].dolomiteConsumptionEmissionFactor.value,
      "steelAverageCarbonContent": data[index].steelAverageCarbonContent.value,
      "pigironAverageCarbonContent": data[index].pigironAverageCarbonContent.value,


    },




      post(url, obj)
        .then((res) => {

          if (res.code==0) {
            message.success(res.message);
            this.queryGreenhouseGas(this.state.years)

          } else {
            message.error(res.message);
          }
        });
  }

  //电石生产update
  updateGreenhouseGas3(index,data3,a){


    var data  = data3


    var DirectoryIndex = 'calciumCarbideProductionProcess';

    var url = '/activityLevelDataEntry/industrialProductionProcess/update'
    var bodyName = 'industrialProductionProcess'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]=  {
      "calciumCarbideProduction": data[index].calciumCarbideProduction.value,
      "emissionFactor": data[index].emissionFactor.value,


    },




      post(url, obj)
        .then((res) => {

          if (res.code==0) {
            message.success(res.message);
            this.queryGreenhouseGas(this.state.years)

          } else {
            message.error(res.message);
          }
        });
  }

  //乙二酸生产update
  updateGreenhouseGas4(index,data4,a){


    var data  = data4


    var DirectoryIndex = 'adipicAcidProductionProcess';

    var url = '/activityLevelDataEntry/industrialProductionProcess/update'
    var bodyName = 'industrialProductionProcess'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]=  {
      "adipicAcidProduction": data[index].adipicAcidProduction.value,
      "emissionFactor": data[index].emissionFactor.value,


    },




      post(url, obj)
        .then((res) => {

          if (res.code==0) {
            message.success(res.message);
            this.queryGreenhouseGas(this.state.years)

          } else {
            message.error(res.message);
          }
        });
  }

  //硝酸生产update
  updateGreenhouseGas5(index,data5,a){


    var data  = data5


    const Directory = [
      'highPressureMethod_noInstalled',
      'highPressureMethod_installationDevice',
      'mediumPressureMethod',
      'atmosphericPressureMethod',
      'doublePressurized',
      'comprehensiveMethod',
      'lowPressureMethod',



    ]


    var DirectoryIndex = Directory[index];


    var url = '/activityLevelDataEntry/industrialProductionProcess/update'
    var bodyName = 'industrialProductionProcess';
    var bodyName1 = 'nitricAcidProductionProcess'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}
    obj[bodyName][bodyName1]={}

    obj[bodyName][bodyName1][DirectoryIndex]=  {
      "production": data[index].production.value,
      "emissionFactor": data[index].emissionFactor.value,


    },




      post(url, obj)
        .then((res) => {

          if (res.code==0) {
            message.success(res.message);
            this.queryGreenhouseGas(this.state.years)

          } else {
            message.error(res.message);
          }
        });
  }

  //铝生产update
  updateGreenhouseGas6(index,data6,a){



    var data  = data6




    const Directory = [
      'precastingTechnologyOfPointCutting',
      'precastingTechnologyOfPointCutting',
      'sidemountedAnodeRods',
      'sidemountedAnodeRods',


    ]

    if(index==0 ){

      var DirectoryIndex = Directory[index];

      var url = '/activityLevelDataEntry/industrialProductionProcess/update'
      var bodyName = 'industrialProductionProcess';
      var bodyName1 = 'aluminumProductionProcess'

      var obj={
        "year":this.state.years
      };

      obj[bodyName]={}
      obj[bodyName][bodyName1]={}

      obj[bodyName][bodyName1][DirectoryIndex]=  {
        "production": data[index].production.value,
        "CF4": data[index].value.value,
        "C2F6": data[1].value.value,

      }

    }else if(index==1){
      var DirectoryIndex = Directory[index];

      var url = '/activityLevelDataEntry/industrialProductionProcess/update'
      var bodyName = 'industrialProductionProcess';
      var bodyName1 = 'aluminumProductionProcess'

      var obj={
        "year":"2017"
      };

      obj[bodyName]={}
      obj[bodyName][bodyName1]={}

      obj[bodyName][bodyName1][DirectoryIndex]=  {
        "production": data[0].production.value,
        "C2F6": data[index].value.value,
        "CF4": data[0].value.value,

      }
    }else if(index==2){
      var DirectoryIndex = Directory[index];

      var url = '/activityLevelDataEntry/industrialProductionProcess/update'
      var bodyName = 'industrialProductionProcess';
      var bodyName1 = 'aluminumProductionProcess'

      var obj={
        "year":"2017"
      };

      obj[bodyName]={}
      obj[bodyName][bodyName1]={}

      obj[bodyName][bodyName1][DirectoryIndex]=  {
        "production": data[2].production.value,
        "C2F6": data[3].value.value,
        "CF4": data[index].value.value,

      }
    }else if(index==3){
      var DirectoryIndex = Directory[index];

      var url = '/activityLevelDataEntry/industrialProductionProcess/update'
      var bodyName = 'industrialProductionProcess';
      var bodyName1 = 'aluminumProductionProcess'

      var obj={
        "year":"2017"
      };

      obj[bodyName]={}
      obj[bodyName][bodyName1]={}

      obj[bodyName][bodyName1][DirectoryIndex]=  {
        "production": data[2].production.value,
        "C2F6": data[index].value.value,
        "CF4": data[2].value.value,

      }
    }
    console.log(obj)





      post(url, obj)
        .then((res) => {

          if (res.code==0) {
            message.success(res.message);
            this.queryGreenhouseGas(this.state.years)

          } else {
            message.error(res.message);
          }
        });
  }

  //镁生产update
  updateGreenhouseGas7(index,data7,a){


    var data  = data7


    const Directory = [
      'usingSulfurHexafluorideAsAProtectiveAgent',
      'magnesiumProcessing',



    ]


    var DirectoryIndex = Directory[index];


    var url = '/activityLevelDataEntry/industrialProductionProcess/update'
    var bodyName = 'industrialProductionProcess';
    var bodyName1 = 'magnesiumProductionProcess'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}
    obj[bodyName][bodyName1]={}

    obj[bodyName][bodyName1][DirectoryIndex]=  {
      "magnesiumProduction": data[index].magnesiumProduction.value,
      "emissionFactor": data[index].emissionFactor.value,


    },




      post(url, obj)
        .then((res) => {

          if (res.code==0) {
            message.success(res.message);
            this.queryGreenhouseGas(this.state.years)

          } else {
            message.error(res.message);
          }
        });
  }

  //电力生产update
  updateGreenhouseGas8(index,data8,a){



    var data  = data8


    var DirectoryIndex = 'electricPowerEquipmentProductionProcess';

    var url = '/activityLevelDataEntry/industrialProductionProcess/update'
    var bodyName = 'industrialProductionProcess'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]=  {
      "production": data[index].production.value,
      "emissionFactor": data[index].emissionFactor.value,
    },




      post(url, obj)
        .then((res) => {

          if (res.code==0) {
            message.success(res.message);
            this.queryGreenhouseGas(this.state.years)

          } else {
            message.error(res.message);
          }
        });
  }

  //半导体生产update
  updateGreenhouseGas9(index,data9,a){


    var data  = data9


    const Directory = [
      'CF4Dosage',
      'CHF3Dosage',
      'C2F6Dosage',
      'SF6Dosage',



    ]


    var DirectoryIndex = Directory[index];


    var url = '/activityLevelDataEntry/industrialProductionProcess/update'
    var bodyName = 'industrialProductionProcess';
    var bodyName1 = 'semiconductorProductionProcess'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}
    obj[bodyName][bodyName1]={}

    obj[bodyName][bodyName1][DirectoryIndex]=  {
      "activityLevelValueEtching": data[index].activityLevelValueEtching.value,
      "activityLevelValueCVD": data[index].activityLevelValueCVD.value,
      "emissionFactorEtching": data[index].emissionFactorEtching.value,
      "emissionFactorCVD": data[index].emissionFactorCVD.value,


    },




      post(url, obj)
        .then((res) => {

          if (res.code==0) {
            message.success(res.message);
            this.queryGreenhouseGas(this.state.years)

          } else {
            message.error(res.message);
          }
        });
  }

  //一氯二氟update
  updateGreenhouseGas10(index,data10,a){



    var data  = data10


    var DirectoryIndex = 'chlorodifluoromethaneProductionProcess';

    var url = '/activityLevelDataEntry/industrialProductionProcess/update'
    var bodyName = 'industrialProductionProcess'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]=  {
      "HCFC_22Production": data[index].HCFC_22Production.value,
      "emissionFactor": data[index].emissionFactor.value,
    },




      post(url, obj)
        .then((res) => {

          if (res.code==0) {
            message.success(res.message);
            this.queryGreenhouseGas(this.state.years)

          } else {
            message.error(res.message);
          }
        });
  }

  //氢氟烃生产update
  updateGreenhouseGas11(index,data11,a){


    var data  = data11


    const Directory = [
      'HFC_32',
      'HFC_125',
      'HFC_134a',
      'HFC_143a',
      'HFC_152a',
      'HFC_227ea',
      'HFC_236fa',
      'HFC_245fa',



    ]


    var DirectoryIndex = Directory[index];


    var url = '/activityLevelDataEntry/industrialProductionProcess/update'
    var bodyName = 'industrialProductionProcess';
    var bodyName1 = 'hydrofluorocarbonProductionProcess'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}
    obj[bodyName][bodyName1]={}

    obj[bodyName][bodyName1][DirectoryIndex]=  {
      "activityLevelValue": data[index].activityLevelValue.value,
      "emissionFactor": data[index].emissionFactor.value,



    },




      post(url, obj)
        .then((res) => {

          if (res.code==0) {
            message.success(res.message);
            this.queryGreenhouseGas(this.state.years)

          } else {
            message.error(res.message);
          }
        });
  }


  //年份选择
  selesctYears(years){

    this.setState({ loading: true});
    this.setState({years:years})
    this.queryGreenhouseGas(years)
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

    const { data6 } = this.state;
    const dataSource6 = data6.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    const { data7 } = this.state;
    const dataSource7 = data7.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    const { data8 } = this.state;
    const dataSource8 = data8.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    const { data9 } = this.state;
    const dataSource9 = data9.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    const { data10 } = this.state;
    const dataSource10 = data10.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    const { data11 } = this.state;
    const dataSource11 = data11.map((item) => {
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
    const columns6 = this.columns6;
    const columns7 = this.columns7;
    const columns8 = this.columns8;
    const columns9 = this.columns9;
    const columns10 = this.columns10;
    const columns11 = this.columns11;



    return (
      <div className={styles.normal}>
        <div className={styles.title}>
          <span className={styles.title_span}>工业生产过程温室气体排放量计算</span>
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

          <div className={styles.entryBody} id="bodyTable1" >

            <p>水泥生产过程</p>
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
            <p>石灰生产过程</p>
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
            <p>钢铁生产过程</p>
            <div className={styles.greenSelect}>
              <span>是否采用本地化排放因子：</span>
              <RadioGroup defaultValue={1}>
                <Radio value={1}>否</Radio>
                <Radio value={2}>是</Radio>
              </RadioGroup>
            </div>
            <Table  pagination={false} bordered={true}  columns={columns2} dataSource={dataSource2} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody} id="bodyTable4"  >
            <p>电石生产过程</p>
            <div className={styles.greenSelect}>
              <span>是否采用本地化排放因子：</span>
              <RadioGroup defaultValue={1}>
                <Radio value={1}>否</Radio>
                <Radio value={2}>是</Radio>
              </RadioGroup>
            </div>

            <Table  pagination={false} bordered={true}  columns={columns3} dataSource={dataSource3} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody} id="bodyTable5"  >
            <p>乙二酸生产过程</p>
            <div className={styles.greenSelect}>
              <span>是否采用本地化排放因子：</span>
              <RadioGroup defaultValue={1}>
                <Radio value={1}>否</Radio>
                <Radio value={2}>是</Radio>
              </RadioGroup>
            </div>

            <Table  pagination={false} bordered={true}  columns={columns4} dataSource={dataSource4} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody} id="bodyTable6"  >
            <p>硝酸生产过程</p>
            <div className={styles.greenSelect}>
              <span>是否采用本地化排放因子：</span>
              <RadioGroup defaultValue={1}>
                <Radio value={1}>否</Radio>
                <Radio value={2}>是</Radio>
              </RadioGroup>
            </div>

            <Table  pagination={false} bordered={true}  columns={columns5} dataSource={dataSource5} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody} id="bodyTable7"  >
            <p>铝生产过程</p>
            <div className={styles.greenSelect}>
              <span>是否采用本地化排放因子：</span>
              <RadioGroup defaultValue={1}>
                <Radio value={1}>否</Radio>
                <Radio value={2}>是</Radio>
              </RadioGroup>
            </div>

            <Table  pagination={false} bordered={true}  columns={columns6} dataSource={dataSource6} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>


          <div className={styles.entryBody} id="bodyTable8"  >
            <p>镁生产过程</p>
            <div className={styles.greenSelect}>
              <span>是否采用本地化排放因子：</span>
              <RadioGroup defaultValue={1}>
                <Radio value={1}>否</Radio>
                <Radio value={2}>是</Radio>
              </RadioGroup>
            </div>

            <Table  pagination={false} bordered={true}  columns={columns7} dataSource={dataSource7} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>


          <div className={styles.entryBody} id="bodyTable9"  >
            <p>电力设备生产过程</p>
            <div className={styles.greenSelect}>
              <span>是否采用本地化排放因子：</span>
              <RadioGroup defaultValue={1}>
                <Radio value={1}>否</Radio>
                <Radio value={2}>是</Radio>
              </RadioGroup>
            </div>

            <Table  pagination={false} bordered={true}  columns={columns8} dataSource={dataSource8} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody} id="bodyTable10"  >
            <p>半导体生产过程</p>
            <div className={styles.greenSelect}>
              <span>是否采用本地化排放因子：</span>
              <RadioGroup defaultValue={1}>
                <Radio value={1}>否</Radio>
                <Radio value={2}>是</Radio>
              </RadioGroup>
            </div>

            <Table  pagination={false} bordered={true}  columns={columns9} dataSource={dataSource9} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody} id="bodyTable11"  >
            <p>一氯二氟生产过程</p>
            <div className={styles.greenSelect}>
              <span>是否采用本地化排放因子：</span>
              <RadioGroup defaultValue={1}>
                <Radio value={1}>否</Radio>
                <Radio value={2}>是</Radio>
              </RadioGroup>
            </div>

            <Table  pagination={false} bordered={true}  columns={columns10} dataSource={dataSource10} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody} id="bodyTable12"  >
            <p>氢氟烃生产过程</p>
            <div className={styles.greenSelect}>
              <span>是否采用本地化排放因子：</span>
              <RadioGroup defaultValue={1}>
                <Radio value={1}>否</Radio>
                <Radio value={2}>是</Radio>
              </RadioGroup>
            </div>

            <Table  pagination={false} bordered={true}  columns={columns11} dataSource={dataSource11} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>


        </Spin>
      </div>

    );

  }
}


export default Form.create()(CoalmineTable);

