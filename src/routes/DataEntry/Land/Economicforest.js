/**
 * 经济林Created by dixu on 2017/11/13.
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
        dataIndex: 'name',
        width: 100,


        render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),},
      {
        title: '子类型', dataIndex: 'dataName', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'dataName', text),
      },

      {
        title: '面积(公顷)', dataIndex: 'area', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'area', text),
      }, {
        title: '面积年变化量(公顷／年)', dataIndex: 'areaAnnualChange', width: 150,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'areaAnnualChange', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 60,

        render: (text, record, index) => {

          const { editable } = this.state.data[index].name;
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
        dataIndex: 'name',
        width: 100,

        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'name', text),},
      {
        title: '子类型', dataIndex: 'dataName', width: 100,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'dataName', text),
      },

      {
        title: '地上生物量碳储量（吨碳/公顷）', dataIndex: 'groundBiomassCarbonDensity', width: 100,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'groundBiomassCarbonDensity', text),
      }, {
        title: '全林生物量碳储量（吨碳/公顷）', dataIndex: 'wholeForestBiomassCarbonDensity', width: 150,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'wholeForestBiomassCarbonDensity', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 60,

        render: (text, record, index) => {


          const { editable } = this.state.data1[index].name;
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
        dataIndex: 'name',
        width: 100,

        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'name', text),},
      {
        title: '子类型', dataIndex: 'dataName', width: 100,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'dataName', text),
      },

      {
        title: '面积(不确定性%)', dataIndex: 'area', width: 100,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'area', text),
      }, {
        title: '面积年变化量(不确定性%)', dataIndex: 'areaAnnualChange', width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'areaAnnualChange', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 60,

        render: (text, record, index) => {

          const { editable } = this.state.data2[index].name;
          return (
            <div className={styles.editableOperations} >

              {

                  '-' == record.dataName
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
      }];

    this.columns3 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 100,


        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'name', text),},
      {
        title: '子类型', dataIndex: 'dataName', width: 100,
        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'dataName', text),
      },

      {
        title: '地上生物量碳储量（不确定性%）', dataIndex: 'groundBiomassCarbonDensity', width: 100,
        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'groundBiomassCarbonDensity', text),
      }, {
        title: '全林生物量碳储量（不确定性%）', dataIndex: 'wholeForestBiomassCarbonDensity', width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'wholeForestBiomassCarbonDensity', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 60,

        render: (text, record, index) => {


          const { editable } = this.state.data3[index].name;
          return (
            <div className={styles.editableOperations} >

              {
                  '-' == record.dataName
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
        dataIndex: 'name',
        width: 100,


        render: (text, record, index) => this.renderColumns4(this.state.data4, index, 'name', text),},
      {
        title: '子类型', dataIndex: 'dataName', width: 100,
        render: (text, record, index) => this.renderColumns4(this.state.data4, index, 'dataName', text),
      },

      {
        title: '地上生物量碳储量（吨碳）', dataIndex: 'groundBiomassCarbonStorage', width: 100,
        render: (text, record, index) => this.renderColumns4(this.state.data4, index, 'groundBiomassCarbonStorage', text),
      }, {
        title: '全林生物量碳储量（吨碳）', dataIndex: 'wholeForestBiomassCarbonStorage', width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data4, index, 'wholeForestBiomassCarbonStorage', text),
      },
      {
        title: '生物量碳储量变化（吨碳/年）', dataIndex: 'changesInBiomassCarbonStocks', width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data4, index, 'changesInBiomassCarbonStocks', text),
      }];

    this.columns5 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 100,


        render: (text, record, index) => this.renderColumns5(this.state.data5, index, 'name', text),},
      {
        title: '子类型', dataIndex: 'dataName', width: 100,
        render: (text, record, index) => this.renderColumns5(this.state.data5, index, 'dataName', text),
      },

      {
        title: '地上生物量碳储量（不确定性%）', dataIndex: 'groundBiomassCarbonStorage', width: 100,
        render: (text, record, index) => this.renderColumns5(this.state.data5, index, 'groundBiomassCarbonStorage', text),
      }, {
        title: '全林生物量碳储量（不确定性%）', dataIndex: 'wholeForestBiomassCarbonStorage', width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data5, index, 'wholeForestBiomassCarbonStorage', text),
      },
      {
        title: '生物量碳储量变化（不确定性%）', dataIndex: 'changesInBiomassCarbonStocks', width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data5, index, 'changesInBiomassCarbonStocks', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 60,

        render: (text, record, index) => {



          const { editable } = this.state.data5[index].name;
          return (
            <div className={styles.editableOperations} >

              {
                '-' == record.dataName
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
      }];

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

      Data1:[0],
      Data2:[0],
      Data3:[0],

      newData1:[0],
      newData2:[0],
      newData3:[0],

      Data11:[0],
      Data22:[0],
      Data33:[0],

      newData11:[0],
      newData22:[0],
      newData33:[0],

      Data111:[0],
      Data222:[0],
      Data333:[0],

      newData111:[0],
      newData222:[0],
      newData333:[0],


      addCollapsed:true,
      addCollapsed1:true,
      addCollapsed2:true,
      addCollapsed3:true,
      addCollapsed4:true,
      addCollapsed5:true,
      AllData:[],
      years:'2014',

    };

    this.queryEconomicforest('2014');
    this.newQueryEconomicforest('2014');

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

    if(key  == 'changesInBiomassCarbonStocks'){

      this.updateEconomicforest5(index,data5);
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

    if(key  == 'wholeForestBiomassCarbonDensity'){

     this.updateEconomicforest3(index,data3);
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

    if(key  == 'areaAnnualChange'){

      this.updateEconomicfores2(index,data2);
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

    if(key  == 'wholeForestBiomassCarbonDensity'){

     this.updateEconomicforest1(index,data1);
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

    if(key  == 'areaAnnualChange'){

      this.updateEconomicforest(index,data);
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
  queryEconomicforest(years){


    post('/activityLevelDataEntry/landUseChangeAndForestry/list', {
      year:years,
    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data;



          //活动水平数据
          const _Data1 = Alldata.economicForestBambooForestActivityLevel.EFBFAL_economicForest
          const _Data2 = Alldata.economicForestBambooForestActivityLevel.EFBFAL_bambooForest
          const _Data3 = Alldata.economicForestBambooForestActivityLevel.EFBFAL_countrySpecialIrrigation

          this.setState({Data1:_Data1})
          this.setState({Data2:_Data2})
          this.setState({Data3:_Data3})


            //排放因子数据
          const _Data11 = Alldata.economicForestBambooForestEmissionFactor.EFBFEF_economicForest
          const _Data22 = Alldata.economicForestBambooForestEmissionFactor.EFBFEF_bambooForest
          const _Data33 = Alldata.economicForestBambooForestEmissionFactor.EFBFEF_countrySpecialIrrigation

          this.setState({Data11:_Data11})
          this.setState({Data22:_Data22})
          this.setState({Data33:_Data33})



            //排放量计算
          const _Data111 = Alldata.economicForestBambooForestEmission.economicForest
          const _Data222 = Alldata.economicForestBambooForestEmission.bambooForest
          const _Data333 = Alldata.economicForestBambooForestEmission.countrySpecialIrrigation

          this.setState({Data111:_Data111})
          this.setState({Data222:_Data222})
          this.setState({Data333:_Data333})






          const _a4 = [];  //计算量

          var _groundBiomassCarbonStorage1=0;
          var _wholeForestBiomassCarbonStorage1=0;
          var _changesInBiomassCarbonStocks1=0;

          var _groundBiomassCarbonStorage2=0;
          var _wholeForestBiomassCarbonStorage2=0;
          var _changesInBiomassCarbonStocks2=0;

          var _groundBiomassCarbonStorage3=0;
          var _wholeForestBiomassCarbonStorage3=0;
          var _changesInBiomassCarbonStocks3=0;


         if(_Data111){
          for(var i = 0 ;i<_Data111.length;i++){


                        _a4.push({
                          key: i,
                          name:'经济林',
                          dataName:_Data111[i].dataName,
                          groundBiomassCarbonStorage: _Data111[i].groundBiomassCarbonStorage,
                          wholeForestBiomassCarbonStorage: _Data111[i].wholeForestBiomassCarbonStorage,
                          changesInBiomassCarbonStocks: _Data111[i].changesInBiomassCarbonStocks,

                        });

                        _groundBiomassCarbonStorage1 += _Data111[i].groundBiomassCarbonStorage;
                        _wholeForestBiomassCarbonStorage1 += _Data111[i].wholeForestBiomassCarbonStorage;
                        _changesInBiomassCarbonStocks1 += _Data111[i].changesInBiomassCarbonStocks;


                      }

                      _a4.push({
                        key: _Data111.length,
                        name:'经济林',
                        dataName:'合计或平均',
                        groundBiomassCarbonStorage: _groundBiomassCarbonStorage1,
                        wholeForestBiomassCarbonStorage: _wholeForestBiomassCarbonStorage1,
                        changesInBiomassCarbonStocks: _changesInBiomassCarbonStocks1,

                      });

         }else{
          _a4.push({
            key: 1,
            name:'经济林',
            dataName:'合计或平均',
            groundBiomassCarbonStorage: _groundBiomassCarbonStorage1,
            wholeForestBiomassCarbonStorage: _wholeForestBiomassCarbonStorage1,
            changesInBiomassCarbonStocks: _changesInBiomassCarbonStocks1,

          });
         }






          if(_Data222){
            for(var i = 0 ;i<_Data222.length;i++){


                          _a4.push({
                            key: i,
                            name:'竹林',
                            dataName:_Data222[i].dataName,
                            groundBiomassCarbonStorage: _Data222[i].groundBiomassCarbonStorage,
                            wholeForestBiomassCarbonStorage: _Data222[i].wholeForestBiomassCarbonStorage,
                            changesInBiomassCarbonStocks: _Data222[i].changesInBiomassCarbonStocks,

                          });

                          _groundBiomassCarbonStorage2 += _Data222[i].groundBiomassCarbonStorage;
                          _wholeForestBiomassCarbonStorage2 += _Data222[i].wholeForestBiomassCarbonStorage;
                          _changesInBiomassCarbonStocks2 += _Data222[i].changesInBiomassCarbonStocks;


                        }


          _a4.push({
            key: _Data222.length,
            name:'竹林',
            dataName:'合计或平均',
            groundBiomassCarbonStorage: _groundBiomassCarbonStorage2,
            wholeForestBiomassCarbonStorage: _wholeForestBiomassCarbonStorage2,
            changesInBiomassCarbonStocks: _changesInBiomassCarbonStocks2,


          });
          }else{


          _a4.push({
            key: 1,
            name:'竹林',
            dataName:'合计或平均',
            groundBiomassCarbonStorage: _groundBiomassCarbonStorage2,
            wholeForestBiomassCarbonStorage: _wholeForestBiomassCarbonStorage2,
            changesInBiomassCarbonStocks: _changesInBiomassCarbonStocks2,


          });
          }




          if(_Data333){
            for(var i = 0 ;i<_Data333.length;i++){



                          _a4.push({
                            key: i,
                            name:'国特灌',
                            dataName:_Data333[i].dataName,
                            groundBiomassCarbonStorage: _Data333[i].groundBiomassCarbonStorage,
                            wholeForestBiomassCarbonStorage: _Data333[i].wholeForestBiomassCarbonStorage,
                            changesInBiomassCarbonStocks: _Data333[i].changesInBiomassCarbonStocks,

                          });

                          _groundBiomassCarbonStorage3 += _Data333[i].groundBiomassCarbonStorage;
                          _wholeForestBiomassCarbonStorage3 += _Data333[i].wholeForestBiomassCarbonStorage;
                          _changesInBiomassCarbonStocks3 += _Data333[i].changesInBiomassCarbonStocks;

                        }
                        _a4.push({
                          key: _Data333.length,
                          name:'国特灌',
                          dataName:'合计或平均',
                          groundBiomassCarbonStorage: _groundBiomassCarbonStorage3,
                          wholeForestBiomassCarbonStorage: _wholeForestBiomassCarbonStorage3,
                          changesInBiomassCarbonStocks: _changesInBiomassCarbonStocks3,


                        });
          }else{
            _a4.push({
              key: 1,
              name:'国特灌',
              dataName:'合计或平均',
              groundBiomassCarbonStorage: _groundBiomassCarbonStorage3,
              wholeForestBiomassCarbonStorage: _wholeForestBiomassCarbonStorage3,
              changesInBiomassCarbonStocks: _changesInBiomassCarbonStocks3,


            });
          }




          const _b4 = [];



          for(var i = 0 ; i<_a4.length;i++){


            _b4.push({
                key:i,
                name:{
                  editable: false,
                  value:_a4[i].name ,
                },
                dataName:{
                  editable: false,
                  value:_a4[i].dataName ,
                },
              groundBiomassCarbonStorage:{
                  editable: false,
                  value:_a4[i].groundBiomassCarbonStorage ,
                },
              wholeForestBiomassCarbonStorage: {
                  editable: false,
                  value:_a4[i].wholeForestBiomassCarbonStorage ,
                },

              changesInBiomassCarbonStocks: {
                editable: false,
                value:_a4[i].changesInBiomassCarbonStocks ,
              },
              }
            )
          }




          const _a = [];  //活动水平数据

          var _area1=0;
          var _areaAnnualChange1=0;

          var _area2=0;
          var _areaAnnualChange2=0;

          var _area3=0;
          var _areaAnnualChange3=0;


          for(var i = 0 ;i<_Data1.length;i++){


              _a.push({
                key: i,
                name:'经济林',
                dataName:_Data1[i].dataName,
                area: _Data1[i].area,
                areaAnnualChange: _Data1[i].areaAnnualChange,

              });

            _area1 += _Data1[i].area;
            _areaAnnualChange1 += _Data1[i].areaAnnualChange;


          }

          _a.push({
            key: _Data1.length,
            name:'经济林',
            dataName:'合计或平均',
            area: _area1,
            areaAnnualChange: _areaAnnualChange1,

          });



          for(var i = 0 ;i<_Data2.length;i++){


              _a.push({
                key: i,
                name:'竹林',
                dataName:_Data2[i].dataName,
                area: _Data2[i].area,
                areaAnnualChange: _Data2[i].areaAnnualChange,

              });

            _area2 += _Data2[i].area;
            _areaAnnualChange2 += _Data2[i].areaAnnualChange;


          }

          _a.push({
            key: _Data2.length,
            name:'竹林',
            dataName:'合计或平均',
            area: _area2,
            areaAnnualChange: _areaAnnualChange2,

          });

          for(var i = 0 ;i<_Data3.length;i++){



              _a.push({
                key: i,
                name:'国特灌',
                dataName:_Data3[i].dataName,
                area: _Data3[i].area,
                areaAnnualChange: _Data3[i].areaAnnualChange,

              });

            _area3 += _Data3[i].area;
            _areaAnnualChange3 += _Data3[i].areaAnnualChange;

          }

          _a.push({
            key: _Data3.length,
            name:'国特灌',
            dataName:'合计或平均',
            area: _area3,
            areaAnnualChange: _areaAnnualChange3,

          });




          const _a1 = [];  //排放因子数据

          var _groundBiomassCarbonDensity11=0;
          var _wholeForestBiomassCarbonDensity11=0;

          var _groundBiomassCarbonDensity22=0;
          var _wholeForestBiomassCarbonDensity22=0;

          var _groundBiomassCarbonDensity33=0;
          var _wholeForestBiomassCarbonDensity33=0;


          for(var i = 0 ;i<_Data11.length;i++){



              _a1.push({
                key: i,
                name:'经济林',
                dataName:_Data11[i].dataName,
                groundBiomassCarbonDensity: _Data11[i].groundBiomassCarbonDensity,
                wholeForestBiomassCarbonDensity: _Data11[i].wholeForestBiomassCarbonDensity,

              });



            _groundBiomassCarbonDensity11 += _Data11[i].groundBiomassCarbonDensity*_Data1[i].area;
            _wholeForestBiomassCarbonDensity11 += _Data11[i].wholeForestBiomassCarbonDensity*_Data1[i].area;

          }


          _a1.push({
            key:_Data11.length,
            name:'经济林',
            dataName:'合计或平均',
            groundBiomassCarbonDensity: _groundBiomassCarbonDensity11/_area1 ,
            wholeForestBiomassCarbonDensity: _wholeForestBiomassCarbonDensity11/_area1,

          });



          for(var i = 0 ;i<_Data22.length;i++){



              _a1.push({
                key: i,
                name:'竹林',
                dataName:_Data22[i].dataName,
                groundBiomassCarbonDensity: _Data22[i].groundBiomassCarbonDensity,
                wholeForestBiomassCarbonDensity: _Data22[i].wholeForestBiomassCarbonDensity,

              });


            _groundBiomassCarbonDensity22 += _Data22[i].groundBiomassCarbonDensity*_Data2[i].area;
            _wholeForestBiomassCarbonDensity22 += _Data22[i].wholeForestBiomassCarbonDensity*_Data2[i].area;


          }

          _a1.push({
            key: _Data22.length,
            name:'竹林',
            dataName:'合计或平均',
            groundBiomassCarbonDensity: _groundBiomassCarbonDensity22/_area2,
            wholeForestBiomassCarbonDensity: _wholeForestBiomassCarbonDensity22/_area2,

          });

          for(var i = 0 ;i<_Data33.length;i++){


              _a1.push({
                key: i,
                name:'国特灌',
                dataName:_Data33[i].dataName,
                groundBiomassCarbonDensity: _Data33[i].groundBiomassCarbonDensity,
                wholeForestBiomassCarbonDensity: _Data33[i].wholeForestBiomassCarbonDensity,

              });

            _groundBiomassCarbonDensity33 += _Data33[i].groundBiomassCarbonDensity*_Data3[i].area;
            _wholeForestBiomassCarbonDensity33 += _Data33[i].wholeForestBiomassCarbonDensity*_Data3[i].area;

          }


          _a1.push({
            key: _Data33.length,
            name:'国特灌',
            dataName:'合计或平均',
            groundBiomassCarbonDensity: _groundBiomassCarbonDensity33/_area3,
            wholeForestBiomassCarbonDensity: _wholeForestBiomassCarbonDensity33/_area3,

          });

          const _b = [];


          for(var i = 0 ; i<_a.length;i++){


            _b.push({
                key:i,
              name:{
                editable: false,
                value:_a[i].name ,
              },
                dataName:{
                  editable: false,
                  value:_a[i].dataName ,
                },
              area:{
                  editable: false,
                  value:_a[i].area ,
                },
              areaAnnualChange: {
                  editable: false,
                  value:_a[i].areaAnnualChange ,
                },


              }
            )
          }



          const _b1 = [];


          for(var i = 0 ; i<_a1.length;i++){


            _b1.push({
                key:i,
              name:{
                editable: false,
                value:_a1[i].name ,
              },
              dataName:{
                editable: false,
                value:_a1[i].dataName ,
              },
              groundBiomassCarbonDensity:{
                  editable: false,
                  value:_a1[i].groundBiomassCarbonDensity,
                },
              wholeForestBiomassCarbonDensity: {
                  editable: false,
                  value:_a1[i].wholeForestBiomassCarbonDensity ,
                },


              }
            )
          }





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
  newQueryEconomicforest(years){


    post('/uncertainty/landUseChangeAndForestry/list', {
      year:years,
    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data;



          const _Data1 = Alldata.EFBFAL_economicForest
          const _Data2 = Alldata.EFBFAL_bambooForest
          const _Data3 = Alldata.EFBFAL_countrySpecialIrrigation

          this.setState({newData1:_Data1})
          this.setState({newData2:_Data2})
          this.setState({newData3:_Data3})


          const _Data11 = Alldata.EFBFEF_economicForest
          const _Data22 = Alldata.EFBFEF_bambooForest
          const _Data33 = Alldata.EFBFEF_countrySpecialIrrigation


          this.setState({newData11:_Data11})
          this.setState({newData22:_Data22})
          this.setState({newData33:_Data33})


          const _Data111 = Alldata.EFBFE_economicForest
          const _Data222 = Alldata.EFBFE_bambooForest
          const _Data333 = Alldata.EFBFE_countrySpecialIrrigation


          this.setState({newData111:_Data111})
          this.setState({newData222:_Data222})
          this.setState({newData333:_Data333})



          const _a5 = [];  //计算量

          var _groundBiomassCarbonStorage1=0;
          var _wholeForestBiomassCarbonStorage1=0;
          var _changesInBiomassCarbonStocks1=0;

          var _groundBiomassCarbonStorage2=0;
          var _wholeForestBiomassCarbonStorage2=0;
          var _changesInBiomassCarbonStocks2=0;

          var _groundBiomassCarbonStorage3=0;
          var _wholeForestBiomassCarbonStorage3=0;
          var _changesInBiomassCarbonStocks3=0;




          for(var i = 0 ;i<_Data111.length;i++){


            _a5.push({
              key: i,
              name:'经济林',
              dataName:_Data111[i].dataName,
              groundBiomassCarbonStorage: _Data111[i].groundBiomassCarbonStorage,
              wholeForestBiomassCarbonStorage: _Data111[i].wholeForestBiomassCarbonStorage,
              changesInBiomassCarbonStocks: _Data111[i].changesInBiomassCarbonStocks,

            });

            _groundBiomassCarbonStorage1 += _Data111[i].groundBiomassCarbonStorage;
            _wholeForestBiomassCarbonStorage1 += _Data111[i].wholeForestBiomassCarbonStorage;
            _changesInBiomassCarbonStocks1 += _Data111[i].changesInBiomassCarbonStocks;


          }

          _a5.push({
            key: _Data111.length,
            name:'',
            dataName:'-',
            groundBiomassCarbonStorage: '',
            wholeForestBiomassCarbonStorage: '',
            changesInBiomassCarbonStocks: '',

          });



          for(var i = 0 ;i<_Data222.length;i++){


            _a5.push({
              key: i,
              name:'竹林',
              dataName:_Data222[i].dataName,
              groundBiomassCarbonStorage: _Data222[i].groundBiomassCarbonStorage,
              wholeForestBiomassCarbonStorage: _Data222[i].wholeForestBiomassCarbonStorage,
              changesInBiomassCarbonStocks: _Data222[i].changesInBiomassCarbonStocks,

            });

            _groundBiomassCarbonStorage2 += _Data222[i].groundBiomassCarbonStorage;
            _wholeForestBiomassCarbonStorage2 += _Data222[i].wholeForestBiomassCarbonStorage;
            _changesInBiomassCarbonStocks2 += _Data222[i].changesInBiomassCarbonStocks;


          }

          _a5.push({
            key: _Data222.length,
            name:'',
            dataName:'-',
            groundBiomassCarbonStorage:'',
            wholeForestBiomassCarbonStorage: '',
            changesInBiomassCarbonStocks: '',


          });

          for(var i = 0 ;i<_Data333.length;i++){



            _a5.push({
              key: i,
              name:'国特灌',
              dataName:_Data333[i].dataName,
              groundBiomassCarbonStorage: _Data333[i].groundBiomassCarbonStorage,
              wholeForestBiomassCarbonStorage: _Data333[i].wholeForestBiomassCarbonStorage,
              changesInBiomassCarbonStocks: _Data333[i].changesInBiomassCarbonStocks,

            });

            _groundBiomassCarbonStorage3 += _Data333[i].groundBiomassCarbonStorage;
            _wholeForestBiomassCarbonStorage3 += _Data333[i].wholeForestBiomassCarbonStorage;
            _changesInBiomassCarbonStocks3 += _Data333[i].changesInBiomassCarbonStocks;

          }

          _a5.push({
            key: _Data333.length,
            name:'',
            dataName:'-',
            groundBiomassCarbonStorage: '',
            wholeForestBiomassCarbonStorage: '',
            changesInBiomassCarbonStocks: '',


          });

          const _b5 = [];



          for(var i = 0 ; i<_a5.length;i++){


            _b5.push({
                key:i,
                name:{
                  editable: false,
                  value:_a5[i].name ,
                },
                dataName:{
                  editable: false,
                  value:_a5[i].dataName ,
                },
                groundBiomassCarbonStorage:{
                  editable: false,
                  value:_a5[i].groundBiomassCarbonStorage ,
                },
                wholeForestBiomassCarbonStorage: {
                  editable: false,
                  value:_a5[i].wholeForestBiomassCarbonStorage ,
                },

                changesInBiomassCarbonStocks: {
                  editable: false,
                  value:_a5[i].changesInBiomassCarbonStocks ,
                },
              }
            )
          }







          const _a = [];  //活动水平数据

          var _area1=0;
          var _areaAnnualChange1=0;

          var _area2=0;
          var _areaAnnualChange2=0;

          var _area3=0;
          var _areaAnnualChange3=0;


          for(var i = 0 ;i<_Data1.length;i++){


            _a.push({
              key: i,
              name:'经济林',
              dataName:_Data1[i].dataName,
              area: _Data1[i].area,
              areaAnnualChange: _Data1[i].areaAnnualChange,

            });

            _area1 += _Data1[i].area;
            _areaAnnualChange1 += _Data1[i].areaAnnualChange;


          }

          _a.push({
            key: _Data1.length,
            name:'',
            dataName:'-',
            area: '',
            areaAnnualChange: '',

          });



          for(var i = 0 ;i<_Data2.length;i++){


            _a.push({
              key: i,
              name:'竹林',
              dataName:_Data2[i].dataName,
              area: _Data2[i].area,
              areaAnnualChange: _Data2[i].areaAnnualChange,

            });

            _area2 += _Data2[i].area;
            _areaAnnualChange2 += _Data2[i].areaAnnualChange;


          }

          _a.push({
            key: _Data2.length,
              name:'',
              dataName:'-',
              area: '',
              areaAnnualChange: '',

          });

          for(var i = 0 ;i<_Data3.length;i++){



            _a.push({
              key: i,
              name:'国特灌',
              dataName:_Data3[i].dataName,
              area: _Data3[i].area,
              areaAnnualChange: _Data3[i].areaAnnualChange,

            });

            _area3 += _Data3[i].area;
            _areaAnnualChange3 += _Data3[i].areaAnnualChange;

          }

          _a.push({
            key: _Data3.length,
              name:'',
              dataName:'-',
              area: '',
              areaAnnualChange: '',

          });







          const _a1 = [];  //排放因子数据

          var _groundBiomassCarbonDensity11=0;
          var _wholeForestBiomassCarbonDensity11=0;

          var _groundBiomassCarbonDensity22=0;
          var _wholeForestBiomassCarbonDensity22=0;

          var _groundBiomassCarbonDensity33=0;
          var _wholeForestBiomassCarbonDensity33=0;


          for(var i = 0 ;i<_Data11.length;i++){



            _a1.push({
              key: i,
              name:'经济林',
              dataName:_Data11[i].dataName,
              groundBiomassCarbonDensity: _Data11[i].groundBiomassCarbonDensity,
              wholeForestBiomassCarbonDensity: _Data11[i].wholeForestBiomassCarbonDensity,

            });

            _groundBiomassCarbonDensity11 += _Data11[i].groundBiomassCarbonDensity;
            _wholeForestBiomassCarbonDensity11 += _Data11[i].wholeForestBiomassCarbonDensity;

          }

          _a1.push({
            key:_Data11.length,
            name:'',
            dataName:'-',
            groundBiomassCarbonDensity: '',
            wholeForestBiomassCarbonDensity: '',

          });



          for(var i = 0 ;i<_Data22.length;i++){



            _a1.push({
              key: i,
              name:'竹林',
              dataName:_Data22[i].dataName,
              groundBiomassCarbonDensity: _Data22[i].groundBiomassCarbonDensity,
              wholeForestBiomassCarbonDensity: _Data22[i].wholeForestBiomassCarbonDensity,

            });

            _groundBiomassCarbonDensity22 += _Data22[i].groundBiomassCarbonDensity;
            _wholeForestBiomassCarbonDensity22 += _Data22[i].wholeForestBiomassCarbonDensity;


          }

          _a1.push({
            key: _Data22.length,
              name:'',
              dataName:'-',
              groundBiomassCarbonDensity: '',
              wholeForestBiomassCarbonDensity: '',

          });

          for(var i = 0 ;i<_Data33.length;i++){


            _a1.push({
              key: i,
              name:'国特灌',
              dataName:_Data33[i].dataName,
              groundBiomassCarbonDensity: _Data33[i].groundBiomassCarbonDensity,
              wholeForestBiomassCarbonDensity: _Data33[i].wholeForestBiomassCarbonDensity,

            });

            _groundBiomassCarbonDensity33 += _Data33[i].groundBiomassCarbonDensity;
            _wholeForestBiomassCarbonDensity33 += _Data33[i].wholeForestBiomassCarbonDensity;

          }

          _a1.push({
            key: _Data33.length,
              name:'',
              dataName:'-',
              groundBiomassCarbonDensity: '',
              wholeForestBiomassCarbonDensity: '',
          });





          const _b = [];


          for(var i = 0 ; i<_a.length;i++){


            _b.push({
                key:i,
                name:{
                  editable: false,
                  value:_a[i].name ,
                },
                dataName:{
                  editable: false,
                  value:_a[i].dataName ,
                },
                area:{
                  editable: false,
                  value:_a[i].area ,
                },
                areaAnnualChange: {
                  editable: false,
                  value:_a[i].areaAnnualChange ,
                },


              }
            )
          }






          const _b1 = [];


          for(var i = 0 ; i<_a1.length;i++){


            _b1.push({
                key:i,
                name:{
                  editable: false,
                  value:_a1[i].name ,
                },
                dataName:{
                  editable: false,
                  value:_a1[i].dataName ,
                },
                groundBiomassCarbonDensity:{
                  editable: false,
                  value:_a1[i].groundBiomassCarbonDensity,
                },
                wholeForestBiomassCarbonDensity: {
                  editable: false,
                  value:_a1[i].wholeForestBiomassCarbonDensity ,
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

  //update
  updateEconomicforest(index,data,a){



    var data  = data;


    var Datalength1 = this.state.Data1.length
    var Datalength2 = this.state.Data2.length
    var Datalength3 = this.state.Data3.length

    if(Datalength1+Datalength2+Datalength3<data.length){

    }

    var Data1 = this.state.Data1
    var Data2 = this.state.Data2
    var Data3 = this.state.Data3




    if(Datalength1+Datalength2+Datalength3+3==data.length){



    }else{


      if(data[data.length-1].name.value=='经济林'){
        Data1.push(data[data.length-1])
        index = index -Datalength2 - Datalength3 - 3
        if(Data1.length!=Datalength1){
          Datalength1 =Data1.length
        }
      }else if (data[data.length-1].name.value=='竹林'){
        Data2.push(data[data.length-1])
        index = index - Datalength3 - 2
        if(Data2.length!=Datalength2){
          Datalength2 =Data2.length
        }
      }else if (data[data.length-1].name.value=='国特灌'){
        Data3.push(data[data.length-1])
        index = index  - 1
        if(Data3.length!=Datalength3){
          Datalength3 =Data3.length
        }
      }else{
        message.error('请输入正确的数据项！');
        return false;
      }



     data=[]
       for(var i = 0 ;i<Data1.length;i++){
         data.push(
           Data1[i]
         )
       }
       data.push('')
      for(var i = 0 ;i<Data2.length;i++){
        data.push(
          Data2[i]
        )
      }
      data.push('')
      for(var i = 0 ;i<Data3.length;i++){
        data.push(
          Data3[i]
        )
      }
      data.push('')
    }







    var DirectoryIndex = []

    var _a = [ ]

    if(index<Datalength1){
      DirectoryIndex='EFBFAL_economicForest'
      for(var i = 0 ; i<Data1.length;i++){
      if(i==index){
        _a.push({
          "dataName": data[index].dataName.value,
          "area": data[index].area.value,
          "areaAnnualChange": data[index].areaAnnualChange.value,
        })
      }else{
        _a.push({
          "dataName": Data1[i].dataName,
          "area": Data1[i].area,
          "areaAnnualChange": Data1[i].areaAnnualChange,
        })

      }
      }


    }else if (Datalength1<index && index<Datalength2+Datalength1+1){
      DirectoryIndex='EFBFAL_bambooForest'
      for(var i = 0 ; i<Data2.length;i++){
        if(i==index-Datalength1-1){
          _a.push({
            "dataName": data[index].dataName.value,
            "area": data[index].area.value,
            "areaAnnualChange": data[index].areaAnnualChange.value,
          })
        }else{
          _a.push({
            "dataName": Data2[i].dataName,
            "area": Data2[i].area,
            "areaAnnualChange": Data2[i].areaAnnualChange,
          })

        }
      }
    }else if (Datalength2+Datalength1+1<index && index<Datalength3+Datalength2+Datalength1+2){
      DirectoryIndex='EFBFAL_countrySpecialIrrigation'
      for(var i = 0 ; i<Data3.length;i++){
        if(i==index-Datalength1-Datalength2-2){
          _a.push({
            "dataName": data[index].dataName.value,
            "area": data[index].area.value,
            "areaAnnualChange": data[index].areaAnnualChange.value,
          })
        }else{
          _a.push({
            "dataName": Data3[i].dataName,
            "area": Data3[i].area,
            "areaAnnualChange": Data3[i].areaAnnualChange,
          })

        }
      }
    }

    console.log(_a)




    var url = '/activityLevelDataEntry/landUseChangeAndForestry/update' //
    var bodyName = 'landUseChangeAndForestry';
    var bodyName1 = 'economicForestBambooForestActivityLevel';






    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}
    obj[bodyName][bodyName1]={}
    obj[bodyName][bodyName1][DirectoryIndex]= _a

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          this.setState({addCollapsed:true})
          message.success(res.message);
          this.queryEconomicforest(this.state.years);

        } else {
          message.error('数据录入有误，请重新录入！');

        }
      });
  }


  updateEconomicforest1(index,data1,a){


    var data  = data1;


    var Datalength1 = this.state.Data11.length
    var Datalength2 = this.state.Data22.length
    var Datalength3 = this.state.Data33.length

    if(Datalength1+Datalength2+Datalength3<data.length){

    }

    var Data1 = this.state.Data11
    var Data2 = this.state.Data22
    var Data3 = this.state.Data33




    if(Datalength1+Datalength2+Datalength3+3==data.length){



    }else{


      if(data[data.length-1].name.value=='经济林'){
        Data1.push(data[data.length-1])
        index = index -Datalength2 - Datalength3 - 3
        if(Data1.length!=Datalength1){
          Datalength1 =Data1.length
        }
      }else if (data[data.length-1].name.value=='竹林'){
        Data2.push(data[data.length-1])
        index = index - Datalength3 - 2
        if(Data2.length!=Datalength2){
          Datalength2 =Data2.length
        }
      }else if (data[data.length-1].name.value=='国特灌'){
        Data3.push(data[data.length-1])
        index = index  - 1
        if(Data3.length!=Datalength3){
          Datalength3 =Data3.length
        }
      }else{
        message.error('请输入正确的数据项！');
        return false;
      }



      data=[]
      for(var i = 0 ;i<Data1.length;i++){
        data.push(
          Data1[i]
        )
      }
      data.push('')
      for(var i = 0 ;i<Data2.length;i++){
        data.push(
          Data2[i]
        )
      }
      data.push('')
      for(var i = 0 ;i<Data3.length;i++){
        data.push(
          Data3[i]
        )
      }
      data.push('')
    }







    var DirectoryIndex = []

    var _a = [ ]

    if(index<Datalength1){
      DirectoryIndex='EFBFEF_economicForest'
      for(var i = 0 ; i<Data1.length;i++){
        if(i==index){
          _a.push({
            "dataName": data[index].dataName.value,
            "groundBiomassCarbonDensity": data[index].groundBiomassCarbonDensity.value,
            "wholeForestBiomassCarbonDensity": data[index].wholeForestBiomassCarbonDensity.value,
          })
        }else{
          _a.push({
            "dataName": Data1[i].dataName,
            "groundBiomassCarbonDensity": Data1[i].groundBiomassCarbonDensity,
            "wholeForestBiomassCarbonDensity": Data1[i].wholeForestBiomassCarbonDensity,
          })

        }
      }


    }else if (Datalength1<index && index<Datalength2+Datalength1+1){
      DirectoryIndex='EFBFEF_bambooForest'
      for(var i = 0 ; i<Data2.length;i++){
        if(i==index-Datalength1-1){
          _a.push({
            "dataName": data[index].dataName.value,
            "groundBiomassCarbonDensity": data[index].groundBiomassCarbonDensity.value,
            "wholeForestBiomassCarbonDensity": data[index].wholeForestBiomassCarbonDensity.value,
          })
        }else{
          _a.push({
            "dataName": Data2[i].dataName,
            "groundBiomassCarbonDensity": Data2[i].groundBiomassCarbonDensity,
            "wholeForestBiomassCarbonDensity": Data2[i].wholeForestBiomassCarbonDensity,
          })

        }
      }
    }else if (Datalength2+Datalength1+1<index && index<Datalength3+Datalength2+Datalength1+2){
      DirectoryIndex='EFBFEF_countrySpecialIrrigation'
      for(var i = 0 ; i<Data3.length;i++){
        if(i==index-Datalength1-Datalength2-2){
          _a.push({
            "dataName": data[index].dataName.value,
            "groundBiomassCarbonDensity": data[index].groundBiomassCarbonDensity.value,
            "wholeForestBiomassCarbonDensity": data[index].wholeForestBiomassCarbonDensity.value,
          })
        }else{
          _a.push({
            "dataName": Data3[i].dataName,
            "groundBiomassCarbonDensity": Data3[i].groundBiomassCarbonDensity,
            "wholeForestBiomassCarbonDensity": Data3[i].wholeForestBiomassCarbonDensity,
          })

        }
      }
    }

    console.log(_a)




    var url = '/activityLevelDataEntry/landUseChangeAndForestry/update' //
    var bodyName = 'landUseChangeAndForestry';
    var bodyName1 = 'economicForestBambooForestEmissionFactor';






    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}
    obj[bodyName][bodyName1]={}
    obj[bodyName][bodyName1][DirectoryIndex]= _a

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          this.setState({addCollapsed1:true})
          message.success(res.message);
          this.queryEconomicforest(this.state.years);

        } else {
          message.error('数据录入有误，请重新录入！');
        }
      });
  }

  //不确定性update
  updateEconomicfores2(index,data2,a){




    var data  = data2;


    var Datalength1 = this.state.newData1.length
    var Datalength2 = this.state.newData2.length
    var Datalength3 = this.state.newData3.length

    if(Datalength1+Datalength2+Datalength3<data.length){

    }

    var Data1 = this.state.newData1
    var Data2 = this.state.newData2
    var Data3 = this.state.newData3




    if(Datalength1+Datalength2+Datalength3+3==data.length){



    }else{


      if(data[data.length-1].name.value=='经济林'){
        Data1.push(data[data.length-1])
        index = index -Datalength2 - Datalength3 - 3
        if(Data1.length!=Datalength1){
          Datalength1 =Data1.length
        }
      }else if (data[data.length-1].name.value=='竹林'){
        Data2.push(data[data.length-1])
        index = index - Datalength3 - 2
        if(Data2.length!=Datalength2){
          Datalength2 =Data2.length
        }
      }else if (data[data.length-1].name.value=='国特灌'){
        Data3.push(data[data.length-1])
        index = index  - 1
        if(Data3.length!=Datalength3){
          Datalength3 =Data3.length
        }
      }else{
        message.error('请输入正确的数据项！');
        return false;
      }



      data=[]
      for(var i = 0 ;i<Data1.length;i++){
        data.push(
          Data1[i]
        )
      }
      data.push('')
      for(var i = 0 ;i<Data2.length;i++){
        data.push(
          Data2[i]
        )
      }
      data.push('')
      for(var i = 0 ;i<Data3.length;i++){
        data.push(
          Data3[i]
        )
      }
      data.push('')
    }







    var DirectoryIndex = []

    var _a = [ ]

    if(index<Datalength1){
      DirectoryIndex='EFBFAL_economicForest'
      for(var i = 0 ; i<Data1.length;i++){
        if(i==index){
          _a.push({
            "dataName": data[index].dataName.value,
            "area": data[index].area.value,
            "areaAnnualChange": data[index].areaAnnualChange.value,
          })
        }else{
          _a.push({
            "dataName": Data1[i].dataName,
            "area": Data1[i].area,
            "areaAnnualChange": Data1[i].areaAnnualChange,
          })

        }
      }


    }else if (Datalength1<index && index<Datalength2+Datalength1+1){
      DirectoryIndex='EFBFAL_bambooForest'
      for(var i = 0 ; i<Data2.length;i++){
        if(i==index-Datalength1-1){
          _a.push({
            "dataName": data[index].dataName.value,
            "area": data[index].area.value,
            "areaAnnualChange": data[index].areaAnnualChange.value,
          })
        }else{
          _a.push({
            "dataName": Data2[i].dataName,
            "area": Data2[i].area,
            "areaAnnualChange": Data2[i].areaAnnualChange,
          })

        }
      }
    }else if (Datalength2+Datalength1+1<index && index<Datalength3+Datalength2+Datalength1+2){
      DirectoryIndex='EFBFAL_countrySpecialIrrigation'
      for(var i = 0 ; i<Data3.length;i++){
        if(i==index-Datalength1-Datalength2-2){
          _a.push({
            "dataName": data[index].dataName.value,
            "area": data[index].area.value,
            "areaAnnualChange": data[index].areaAnnualChange.value,
          })
        }else{
          _a.push({
            "dataName": Data3[i].dataName,
            "area": Data3[i].area,
            "areaAnnualChange": Data3[i].areaAnnualChange,
          })

        }
      }
    }

    console.log(_a)



    var url = '/uncertainty/landUseChangeAndForestry/update'
    var bodyName = 'landUseChangeAndForestry';




    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= _a

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          this.setState({addCollapsed2:true})
          message.success(res.message);
          this.newQueryEconomicforest(this.state.years);


        } else {
          message.error('数据录入有误，请重新录入！');

        }
      });
  }


  updateEconomicforest3(index,data3,a){


    var data  = data3;


    var Datalength1 = this.state.newData11.length
    var Datalength2 = this.state.newData22.length
    var Datalength3 = this.state.newData33.length

    if(Datalength1+Datalength2+Datalength3<data.length){

    }

    var Data1 = this.state.newData11
    var Data2 = this.state.newData22
    var Data3 = this.state.newData33




    if(Datalength1+Datalength2+Datalength3+3==data.length){



    }else{


      if(data[data.length-1].name.value=='经济林'){
        Data1.push(data[data.length-1])
        index = index -Datalength2 - Datalength3 - 3
        if(Data1.length!=Datalength1){
          Datalength1 =Data1.length
        }
      }else if (data[data.length-1].name.value=='竹林'){
        Data2.push(data[data.length-1])
        index = index - Datalength3 - 2
        if(Data2.length!=Datalength2){
          Datalength2 =Data2.length
        }
      }else if (data[data.length-1].name.value=='国特灌'){
        Data3.push(data[data.length-1])
        index = index  - 1
        if(Data3.length!=Datalength3){
          Datalength3 =Data3.length
        }
      }else{
        message.error('请输入正确的数据项！');
        return false;
      }



      data=[]
      for(var i = 0 ;i<Data1.length;i++){
        data.push(
          Data1[i]
        )
      }
      data.push('')
      for(var i = 0 ;i<Data2.length;i++){
        data.push(
          Data2[i]
        )
      }
      data.push('')
      for(var i = 0 ;i<Data3.length;i++){
        data.push(
          Data3[i]
        )
      }
      data.push('')
    }







    var DirectoryIndex = []

    var _a = [ ]

    if(index<Datalength1){
      DirectoryIndex='EFBFEF_economicForest'
      for(var i = 0 ; i<Data1.length;i++){
        if(i==index){
          _a.push({
            "dataName": data[index].dataName.value,
            "groundBiomassCarbonDensity": data[index].groundBiomassCarbonDensity.value,
            "wholeForestBiomassCarbonDensity": data[index].wholeForestBiomassCarbonDensity.value,
          })
        }else{
          _a.push({
            "dataName": Data1[i].dataName,
            "groundBiomassCarbonDensity": Data1[i].groundBiomassCarbonDensity,
            "wholeForestBiomassCarbonDensity": Data1[i].wholeForestBiomassCarbonDensity,
          })

        }
      }


    }else if (Datalength1<index && index<Datalength2+Datalength1+1){
      DirectoryIndex='EFBFEF_bambooForest'
      for(var i = 0 ; i<Data2.length;i++){
        if(i==index-Datalength1-1){
          _a.push({
            "dataName": data[index].dataName.value,
            "groundBiomassCarbonDensity": data[index].groundBiomassCarbonDensity.value,
            "wholeForestBiomassCarbonDensity": data[index].wholeForestBiomassCarbonDensity.value,
          })
        }else{
          _a.push({
            "dataName": Data2[i].dataName,
            "groundBiomassCarbonDensity": Data2[i].groundBiomassCarbonDensity,
            "wholeForestBiomassCarbonDensity": Data2[i].wholeForestBiomassCarbonDensity,
          })

        }
      }
    }else if (Datalength2+Datalength1+1<index && index<Datalength3+Datalength2+Datalength1+2){
      DirectoryIndex='EFBFEF_countrySpecialIrrigation'
      for(var i = 0 ; i<Data3.length;i++){
        if(i==index-Datalength1-Datalength2-2){
          _a.push({
            "dataName": data[index].dataName.value,
            "groundBiomassCarbonDensity": data[index].groundBiomassCarbonDensity.value,
            "wholeForestBiomassCarbonDensity": data[index].wholeForestBiomassCarbonDensity.value,
          })
        }else{
          _a.push({
            "dataName": Data3[i].dataName,
            "groundBiomassCarbonDensity": Data3[i].groundBiomassCarbonDensity,
            "wholeForestBiomassCarbonDensity": Data3[i].wholeForestBiomassCarbonDensity,
          })

        }
      }
    }

    console.log(_a)



    var url = '/uncertainty/landUseChangeAndForestry/update'
    var bodyName = 'landUseChangeAndForestry';







    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= _a

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          this.setState({addCollapsed3:true})
          message.success(res.message);
          this.newQueryEconomicforest(this.state.years);

        } else {
          message.error('数据录入有误，请重新录入！');
        }
      });
  }

  updateEconomicforest5(index,data5,a){



    var data  = data5;


    var Datalength1 = this.state.newData111.length
    var Datalength2 = this.state.newData222.length
    var Datalength3 = this.state.newData333.length

    if(Datalength1+Datalength2+Datalength3<data.length){

    }

    var Data1 = this.state.newData111
    var Data2 = this.state.newData222
    var Data3 = this.state.newData333




    if(Datalength1+Datalength2+Datalength3+3==data.length){



    }else{


      if(data[data.length-1].name.value=='经济林'){
        Data1.push(data[data.length-1])
        index = index -Datalength2 - Datalength3 - 3
        if(Data1.length!=Datalength1){
          Datalength1 =Data1.length
        }
      }else if (data[data.length-1].name.value=='竹林'){
        Data2.push(data[data.length-1])
        index = index - Datalength3 - 2
        if(Data2.length!=Datalength2){
          Datalength2 =Data2.length
        }
      }else if (data[data.length-1].name.value=='国特灌'){
        Data3.push(data[data.length-1])
        index = index  - 1
        if(Data3.length!=Datalength3){
          Datalength3 =Data3.length
        }
      }else{
        message.error('请输入正确的数据项！');
        return false;
      }



      data=[]
      for(var i = 0 ;i<Data1.length;i++){
        data.push(
          Data1[i]
        )
      }
      data.push('')
      for(var i = 0 ;i<Data2.length;i++){
        data.push(
          Data2[i]
        )
      }
      data.push('')
      for(var i = 0 ;i<Data3.length;i++){
        data.push(
          Data3[i]
        )
      }
      data.push('')
    }






    var DirectoryIndex = []

    var _a = [ ]

    if(index<Datalength1){
      DirectoryIndex='EFBFE_economicForest'
      for(var i = 0 ; i<Data1.length;i++){
        if(i==index){
          _a.push({
            "dataName": data[index].dataName.value,
            "groundBiomassCarbonStorage": data[index].groundBiomassCarbonStorage.value,
            "wholeForestBiomassCarbonStorage": data[index].wholeForestBiomassCarbonStorage.value,
            "changesInBiomassCarbonStocks": data[index].changesInBiomassCarbonStocks.value,
          })
        }else{
          _a.push({
            "dataName": Data1[i].dataName,
            "groundBiomassCarbonStorage": Data1[i].groundBiomassCarbonStorage,
            "wholeForestBiomassCarbonStorage": Data1[i].wholeForestBiomassCarbonStorage,
            "changesInBiomassCarbonStocks": Data1[i].changesInBiomassCarbonStocks,
          })

        }
      }


    }else if (Datalength1<index && index<Datalength2+Datalength1+1){
      DirectoryIndex='EFBFE_bambooForest'
      for(var i = 0 ; i<Data2.length;i++){
        if(i==index-Datalength1-1){
          _a.push({
            "dataName": data[index].dataName.value,
            "groundBiomassCarbonStorage": data[index].groundBiomassCarbonStorage.value,
            "wholeForestBiomassCarbonStorage": data[index].wholeForestBiomassCarbonStorage.value,
            "changesInBiomassCarbonStocks": data[index].changesInBiomassCarbonStocks.value,

          })
        }else{
          _a.push({
            "dataName": Data2[i].dataName,
            "groundBiomassCarbonStorage": Data2[i].groundBiomassCarbonStorage,
            "wholeForestBiomassCarbonStorage": Data2[i].wholeForestBiomassCarbonStorage,
            "changesInBiomassCarbonStocks": Data2[i].changesInBiomassCarbonStocks,
          })

        }
      }
    }else if (Datalength2+Datalength1+1<index && index<Datalength3+Datalength2+Datalength1+2){
      DirectoryIndex='EFBFE_countrySpecialIrrigation'
      for(var i = 0 ; i<Data3.length;i++){
        if(i==index-Datalength1-Datalength2-2){
          _a.push({
            "dataName": data[index].dataName.value,
            "groundBiomassCarbonStorage": data[index].groundBiomassCarbonStorage.value,
            "wholeForestBiomassCarbonStorage": data[index].wholeForestBiomassCarbonStorage.value,
            "changesInBiomassCarbonStocks": data[index].changesInBiomassCarbonStocks.value,
          })
        }else{
          _a.push({
            "dataName": Data3[i].dataName,
            "groundBiomassCarbonStorage": Data3[i].groundBiomassCarbonStorage,
            "wholeForestBiomassCarbonStorage": Data3[i].wholeForestBiomassCarbonStorage,
            "changesInBiomassCarbonStocks": Data3[i].changesInBiomassCarbonStocks,
          })

        }
      }
    }

    console.log(_a)



    var url = '/uncertainty/landUseChangeAndForestry/update'
    var bodyName = 'landUseChangeAndForestry';







    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= _a

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          this.setState({addCollapsed5:true})
          message.success(res.message);
          this.newQueryEconomicforest(this.state.years);

        } else {
          message.error('数据录入有误，请重新录入！');
        }
      });
  }


  handleAdd = () => {


    if(this.state.addCollapsed) {

      this.setState({addCollapsed: false})

      const {data} = this.state;
      const newData = {
        key: data.length + 1,
        name: {
          editable: true,
          value: '',
        },
        dataName: {
          editable: true,
          value: '',
        },

        area: {
          editable: true,
          value: 0,
        },
        areaAnnualChange: {
          editable: true,
          value: 0,
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
        name: {
          editable: true,
          value: '',
        },
        dataName: {
          editable: true,
          value: '',
        },

        groundBiomassCarbonDensity: {
          editable: true,
          value: 0,
        },
        wholeForestBiomassCarbonDensity: {
          editable: true,
          value: 0,
        },
      };
      this.setState({
        data1: [...data1, newData],

      });
    }else {
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
          name: {
            editable: true,
            value: '',
          },
          dataName: {
            editable: true,
            value: '',
          },

          area: {
            editable: true,
            value: 0,
          },
          areaAnnualChange: {
            editable: true,
            value: 0,
          },
        }
      ;
      this.setState({
        data2: [...data2, newData],

      });
    }else {
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
        name: {
          editable: true,
          value: '',
        },
        dataName: {
          editable: true,
          value: '',
        },

        groundBiomassCarbonDensity: {
          editable: true,
          value: 0,
        },
        wholeForestBiomassCarbonDensity: {
          editable: true,
          value: 0,
        },
      };
      this.setState({
        data3: [...data3, newData],

      });
    }else {
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
        name: {
          editable: true,
          value: '',
        },
        dataName: {
          editable: true,
          value: '',
        },

        groundBiomassCarbonStorage: {
          editable: true,
          value: 0,
        },
        wholeForestBiomassCarbonStorage: {
          editable: true,
          value: 0,
        },
        changesInBiomassCarbonStocks: {
          editable: true,
          value: 0,
        },
      };
      this.setState({
        data5: [...data5, newData],

      });
    }else {
      message.error('数据添加未完成,请再次编辑！');
      return false;
    }
  }

  //年份选择
  selesctYears(years){

    this.setState({ loading: true});
    this.setState({years:years})
    this.queryEconomicforest(years)
    this.newQueryEconomicforest(years)

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
          <span className={styles.title_span}>经济林、竹林、国家特别规定灌木林生物量碳储量变化清单表</span>
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


          <Table size="small"  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          <Button className={styles.button} onClick={this.handleAdd}>添加</Button>
        </div>


        <div className={styles.entryBody} id="bodyTable2"  >
          <p>排放因子数据</p>


          <Table size="small"  pagination={false} bordered={true}  columns={columns1} dataSource={dataSource1} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          <Button className={styles.button} onClick={this.handleAdd1}>添加</Button>
        </div>


          <div className={styles.entryBody} id="bodyTable3"  >
            <p>活动水平不确定性</p>


            <Table  size="small"  pagination={false} bordered={true}  columns={columns2} dataSource={dataSource2} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

            <Button className={styles.button} onClick={this.handleAdd2}>添加</Button>
          </div>


          <div className={styles.entryBody} id="bodyTable4"  >
            <p>排放因子不确定性</p>


            <Table size="small"   pagination={false} bordered={true}  columns={columns3} dataSource={dataSource3} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

            <Button className={styles.button} onClick={this.handleAdd3}>添加</Button>
          </div>


          <div className={styles.entryBody} id="bodyTable5"  >
            <p>排放量计算（负值代表净吸收， 正值代表净排放）</p>


            <Table size="small"   pagination={false} bordered={true}  columns={columns4} dataSource={dataSource4} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>


          <div className={styles.entryBody} id="bodyTable6"  >
            <p>不确定性计算</p>


            <Table size="small"  pagination={false} bordered={true}  columns={columns5} dataSource={dataSource5} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
            <Button className={styles.button} onClick={this.handleAdd5}>添加</Button>
          </div>

        </Spin>





      </div>
    );

  }
}


export default Form.create()(ElectricTable);
