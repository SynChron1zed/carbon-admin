/**
 * 化石燃料燃烧Created by dixu on 2017/10/10.
 */
import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch  } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Biological.less';
import createReactClass from 'create-react-class';
import { post } from '../../../utils/carbonRequest';
import $ from 'jquery';

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

class EditableTable extends React.Component {


  constructor(props) {
    super(props);

     this.columns = [

        {title: '数据项',
      dataIndex: 'name',
      width: 280,

      colSpan:1,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),},

      {
      title: '无烟煤(万吨)', dataIndex: 'anthracite', width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'anthracite', text),
    }, {
      title: '烟煤(万吨)', dataIndex: 'bituminouscoal', width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'bituminouscoal', text),
    }, {
        title: '褐煤(万吨)', dataIndex: 'lignite', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'lignite', text),
      }, {
      title: '洗精煤(万吨)', dataIndex: 'washthecleancoal', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'washthecleancoal', text),
      }, {
      title: '其他洗煤(万吨)', dataIndex: 'othercoalwashing', width: 120,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'othercoalwashing', text),
    },{
      title: '型煤(万吨)', dataIndex: 'briquette', width:100 ,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'briquette', text),
    },{
      title: '煤矸石(万吨)', dataIndex: 'coalgangue', width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'coalgangue', text),
    },{
      title: '焦炭(万吨)', dataIndex: 'coke', width: 100 ,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'coke', text),
    },{
      title: '焦炉煤气(亿立方米)', dataIndex: 'cokeovengas' ,width: 160,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'cokeovengas', text),
    },{
      title: '高炉煤气(亿立方米)', dataIndex: 'blastfurnacegas' ,width: 150,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'blastfurnacegas', text),
    },{
      title: '转炉煤气(亿立方米)', dataIndex: 'onvertergas' ,width: 150,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'onvertergas', text),
    },{
      title: '其它煤气(亿立方米)', dataIndex: 'othergas' ,width: 150,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'othergas', text),
    },{
      title: '其它焦化产品(万吨)', dataIndex: 'othercokingproducts',width: 150,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'othercokingproducts', text),
    },{
      title: '原油(万吨)', dataIndex: 'crudeoil',width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'crudeoil', text),
    },{
      title: '汽油(万吨)', dataIndex: 'gasoline' ,width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'gasoline', text),
    },{
      title: '煤油(万吨)', dataIndex: 'kerosene' ,width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'kerosene', text),
    },{
      title: '柴油(万吨)', dataIndex: 'diesel' ,width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'diesel', text),
    },{
      title: '燃料油(万吨)', dataIndex: 'fueloil',width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'fueloil', text),
    },{
      title: '石脑油(万吨)', dataIndex: 'naphtha',width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'naphtha', text),
    },{
      title: '润滑油(万吨)', dataIndex: 'lubricatingoil' ,width:100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'lubricatingoil', text),
    },{
      title: '石蜡(万吨)', dataIndex: 'paraffin',width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'paraffin', text),
    },{
      title: '溶剂油(万吨)', dataIndex: 'solventoil' ,width: 100,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'solventoil', text),
    },{
      title: '石油沥青(万吨)', dataIndex: 'asphalt' ,width: 150,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'asphalt', text),
    },{
      title: '石油焦(万吨)', dataIndex: 'oilcoke' ,width: 150,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'oilcoke', text),
    },{
      title: '液化石油气(万吨)', dataIndex: 'liquefiedpetroleumgas' ,width: 150,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'liquefiedpetroleumgas', text),
    },{
      title: '炼厂干气(万吨)', dataIndex: 'refinerydrygas' ,width: 150,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'refinerydrygas', text),
    },{
      title: '其他石油制品(万吨)', dataIndex: 'otherpetroleumproducts',width: 150,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'otherpetroleumproducts', text),
    },{
      title: '天然气(亿立方米)', dataIndex: 'naturalgas' ,width: 130,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'naturalgas', text),
    },{
      title: '液化天然气(万吨)', dataIndex: 'liquifiednaturalgas' ,width: 130,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'liquifiednaturalgas', text),
    },{
      title: '其他(亿立方米)', dataIndex: 'other' ,width: 130,
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'other', text),
    },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

      render: (text, record, index) => {

        const { editable } = this.state.data[index].anthracite;
        return (
          <div className={styles.editableOperations} >

            {
              index ==0 || index ==1 || index ==2 || index ==6 || index ==10 || index ==14 || index ==15 || index ==20 ||
              index ==25 || index ==30 || index ==36 || index ==37 || index ==41 || index ==45 || index ==49 || index ==53|| index ==54|| index ==60? <span></span> :
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

     this.columns2 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 150,

        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'name', text),},

      {
        title: '无烟煤(万吨)', dataIndex: 'anthracite', width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'anthracite', text),
      }, {
        title: '烟煤(万吨)', dataIndex: 'bituminouscoal', width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'bituminouscoal', text),
      }, {
        title: '褐煤(万吨)', dataIndex: 'lignite', width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'lignite', text),
      }, {
        title: '洗精煤(万吨)', dataIndex: 'washthecleancoal', width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'washthecleancoal', text),
      }, {
        title: '其他洗煤(万吨)', dataIndex: 'othercoalwashing', width: 170,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'othercoalwashing', text),
      },{
        title: '型煤(万吨)', dataIndex: 'briquette', width:150 ,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'briquette', text),
      },{
        title: '煤矸石(万吨)', dataIndex: 'coalgangue', width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'coalgangue', text),
      },{
        title: '焦炭(万吨)', dataIndex: 'coke', width: 150 ,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'coke', text),
      },{
        title: '焦炉煤气(亿立方米)', dataIndex: 'cokeovengas' ,width: 210,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'cokeovengas', text),
      },{
        title: '高炉煤气(亿立方米)', dataIndex: 'blastfurnacegas' ,width: 200,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'blastfurnacegas', text),
      },{
        title: '转炉煤气(亿立方米)', dataIndex: 'onvertergas' ,width: 200,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'onvertergas', text),
      },{
        title: '其它煤气(亿立方米)', dataIndex: 'othergas' ,width: 200,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'othergas', text),
      },{
        title: '其它焦化产品(万吨)', dataIndex: 'othercokingproducts',width: 200,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'othercokingproducts', text),
      },{
        title: '原油(万吨)', dataIndex: 'crudeoil',width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'crudeoil', text),
      },{
        title: '汽油(万吨)', dataIndex: 'gasoline' ,width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'gasoline', text),
      },{
        title: '煤油(万吨)', dataIndex: 'kerosene' ,width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'kerosene', text),
      },{
        title: '柴油(万吨)', dataIndex: 'diesel' ,width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'diesel', text),
      },{
        title: '燃料油(万吨)', dataIndex: 'fueloil',width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'fueloil', text),
      },{
        title: '石脑油(万吨)', dataIndex: 'naphtha',width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'naphtha', text),
      },{
        title: '润滑油(万吨)', dataIndex: 'lubricatingoil' ,width:150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'lubricatingoil', text),
      },{
        title: '石蜡(万吨)', dataIndex: 'paraffin',width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'paraffin', text),
      },{
        title: '溶剂油(万吨)', dataIndex: 'solventoil' ,width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'solventoil', text),
      },{
        title: '石油沥青(万吨)', dataIndex: 'asphalt' ,width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'asphalt', text),
      },{
        title: '石油焦(万吨)', dataIndex: 'oilcoke' ,width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'oilcoke', text),
      },{
        title: '液化石油气(万吨)', dataIndex: 'liquefiedpetroleumgas' ,width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'liquefiedpetroleumgas', text),
      },{
        title: '炼厂干气(万吨)', dataIndex: 'refinerydrygas' ,width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'refinerydrygas', text),
      },{
        title: '其他石油制品(万吨)', dataIndex: 'otherpetroleumproducts',width: 150,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'otherpetroleumproducts', text),
      },{
        title: '天然气(亿立方米)', dataIndex: 'naturalgas' ,width: 180,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'naturalgas', text),
      },{
        title: '液化天然气(万吨)', dataIndex: 'liquifiednaturalgas' ,width: 180,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'liquifiednaturalgas', text),
      },{
        title: '其他(亿立方米)', dataIndex: 'other' ,width: 180,
        render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'other', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data1[index].anthracite;
          return (
            <div className={styles.editableOperations} >

              {
                index ==1|| index ==3 || index ==5 || index ==7 || index ==9 || index ==10
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
        width: 150,

        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'name', text),},

      {
        title: '无烟煤(万吨)', dataIndex: 'anthracite', width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'anthracite', text),
      }, {
        title: '烟煤(万吨)', dataIndex: 'bituminouscoal', width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'bituminouscoal', text),
      }, {
        title: '褐煤(万吨)', dataIndex: 'lignite', width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'lignite', text),
      }, {
        title: '洗精煤(万吨)', dataIndex: 'washthecleancoal', width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'washthecleancoal', text),
      }, {
        title: '其他洗煤(万吨)', dataIndex: 'othercoalwashing', width: 170,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'othercoalwashing', text),
      },{
        title: '型煤(万吨)', dataIndex: 'briquette', width:150 ,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'briquette', text),
      },{
        title: '煤矸石(万吨)', dataIndex: 'coalgangue', width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'coalgangue', text),
      },{
        title: '焦炭(万吨)', dataIndex: 'coke', width: 150 ,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'coke', text),
      },{
        title: '焦炉煤气(亿立方米)', dataIndex: 'cokeovengas' ,width: 210,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'cokeovengas', text),
      },{
        title: '高炉煤气(亿立方米)', dataIndex: 'blastfurnacegas' ,width: 200,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'blastfurnacegas', text),
      },{
        title: '转炉煤气(亿立方米)', dataIndex: 'onvertergas' ,width: 200,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'onvertergas', text),
      },{
        title: '其它煤气(亿立方米)', dataIndex: 'othergas' ,width: 200,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'othergas', text),
      },{
        title: '其它焦化产品(万吨)', dataIndex: 'othercokingproducts',width: 200,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'othercokingproducts', text),
      },{
        title: '原油(万吨)', dataIndex: 'crudeoil',width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'crudeoil', text),
      },{
        title: '汽油(万吨)', dataIndex: 'gasoline' ,width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'gasoline', text),
      },{
        title: '煤油(万吨)', dataIndex: 'kerosene' ,width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'kerosene', text),
      },{
        title: '柴油(万吨)', dataIndex: 'diesel' ,width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'diesel', text),
      },{
        title: '燃料油(万吨)', dataIndex: 'fueloil',width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'fueloil', text),
      },{
        title: '石脑油(万吨)', dataIndex: 'naphtha',width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'naphtha', text),
      },{
        title: '润滑油(万吨)', dataIndex: 'lubricatingoil' ,width:150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'lubricatingoil', text),
      },{
        title: '石蜡(万吨)', dataIndex: 'paraffin',width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'paraffin', text),
      },{
        title: '溶剂油(万吨)', dataIndex: 'solventoil' ,width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'solventoil', text),
      },{
        title: '石油沥青(万吨)', dataIndex: 'asphalt' ,width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'asphalt', text),
      },{
        title: '石油焦(万吨)', dataIndex: 'oilcoke' ,width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'oilcoke', text),
      },{
        title: '液化石油气(万吨)', dataIndex: 'liquefiedpetroleumgas' ,width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'liquefiedpetroleumgas', text),
      },{
        title: '炼厂干气(万吨)', dataIndex: 'refinerydrygas' ,width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'refinerydrygas', text),
      },{
        title: '其他石油制品(万吨)', dataIndex: 'otherpetroleumproducts',width: 150,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'otherpetroleumproducts', text),
      },{
        title: '天然气(亿立方米)', dataIndex: 'naturalgas' ,width: 180,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'naturalgas', text),
      },{
        title: '液化天然气(万吨)', dataIndex: 'liquifiednaturalgas' ,width: 180,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'liquifiednaturalgas', text),
      },{
        title: '其他(亿立方米)', dataIndex: 'other' ,width: 180,
        render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'other', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data2[index].anthracite;
          return (
            <div className={styles.editableOperations} >

              {
                 index ==7 || index ==5
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
        width: 150,

        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'name', text),},

      {
        title: '无烟煤(万吨)', dataIndex: 'anthracite', width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'anthracite', text),
      }, {
        title: '烟煤(万吨)', dataIndex: 'bituminouscoal', width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'bituminouscoal', text),
      }, {
        title: '褐煤(万吨)', dataIndex: 'lignite', width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'lignite', text),
      }, {
        title: '洗精煤(万吨)', dataIndex: 'washthecleancoal', width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'washthecleancoal', text),
      }, {
        title: '其他洗煤(万吨)', dataIndex: 'othercoalwashing', width: 170,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'othercoalwashing', text),
      },{
        title: '型煤(万吨)', dataIndex: 'briquette', width:150 ,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'briquette', text),
      },{
        title: '煤矸石(万吨)', dataIndex: 'coalgangue', width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'coalgangue', text),
      },{
        title: '焦炭(万吨)', dataIndex: 'coke', width: 150 ,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'coke', text),
      },{
        title: '焦炉煤气(亿立方米)', dataIndex: 'cokeovengas' ,width: 210,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'cokeovengas', text),
      },{
        title: '高炉煤气(亿立方米)', dataIndex: 'blastfurnacegas' ,width: 200,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'blastfurnacegas', text),
      },{
        title: '转炉煤气(亿立方米)', dataIndex: 'onvertergas' ,width: 200,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'onvertergas', text),
      },{
        title: '其它煤气(亿立方米)', dataIndex: 'othergas' ,width: 200,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'othergas', text),
      },{
        title: '其它焦化产品(万吨)', dataIndex: 'othercokingproducts',width: 200,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'othercokingproducts', text),
      },{
        title: '原油(万吨)', dataIndex: 'crudeoil',width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'crudeoil', text),
      },{
        title: '汽油(万吨)', dataIndex: 'gasoline' ,width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'gasoline', text),
      },{
        title: '煤油(万吨)', dataIndex: 'kerosene' ,width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'kerosene', text),
      },{
        title: '柴油(万吨)', dataIndex: 'diesel' ,width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'diesel', text),
      },{
        title: '燃料油(万吨)', dataIndex: 'fueloil',width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'fueloil', text),
      },{
        title: '石脑油(万吨)', dataIndex: 'naphtha',width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'naphtha', text),
      },{
        title: '润滑油(万吨)', dataIndex: 'lubricatingoil' ,width:150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'lubricatingoil', text),
      },{
        title: '石蜡(万吨)', dataIndex: 'paraffin',width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'paraffin', text),
      },{
        title: '溶剂油(万吨)', dataIndex: 'solventoil' ,width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'solventoil', text),
      },{
        title: '石油沥青(万吨)', dataIndex: 'asphalt' ,width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'asphalt', text),
      },{
        title: '石油焦(万吨)', dataIndex: 'oilcoke' ,width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'oilcoke', text),
      },{
        title: '液化石油气(万吨)', dataIndex: 'liquefiedpetroleumgas' ,width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'liquefiedpetroleumgas', text),
      },{
        title: '炼厂干气(万吨)', dataIndex: 'refinerydrygas' ,width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'refinerydrygas', text),
      },{
        title: '其他石油制品(万吨)', dataIndex: 'otherpetroleumproducts',width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'otherpetroleumproducts', text),
      },{
        title: '天然气(亿立方米)', dataIndex: 'naturalgas' ,width: 180,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'naturalgas', text),
      },{
        title: '液化天然气(万吨)', dataIndex: 'liquifiednaturalgas' ,width: 180,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'liquifiednaturalgas', text),
      },{
        title: '其他(亿立方米)', dataIndex: 'other' ,width: 180,
        render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'other', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data3[index].anthracite;
          return (
            <div className={styles.editableOperations} >

              {
                index ==7
                  ? <span></span> :
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
        width: 150,

        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'name', text),},

      {
        title: '无烟煤(TJ/万t)', dataIndex: 'anthracite', width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'anthracite', text),
      }, {
        title: '烟煤(TJ/万t)', dataIndex: 'bituminouscoal', width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'bituminouscoal', text),
      }, {
        title: '褐煤(TJ/万t)', dataIndex: 'lignite', width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'lignite', text),
      }, {
        title: '洗精煤(TJ/万t)', dataIndex: 'washthecleancoal', width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'washthecleancoal', text),
      }, {
        title: '其他洗煤(TJ/万t)', dataIndex: 'othercoalwashing', width: 170,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'othercoalwashing', text),
      },{
        title: '型煤(TJ/万t)', dataIndex: 'briquette', width:150 ,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'briquette', text),
      },{
        title: '煤矸石(TJ/万t)', dataIndex: 'coalgangue', width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'coalgangue', text),
      },{
        title: '焦炭(TJ/万t)', dataIndex: 'coke', width: 150 ,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'coke', text),
      },{
        title: '焦炉煤气(TJ/亿m3)', dataIndex: 'cokeovengas' ,width: 210,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'cokeovengas', text),
      },{
        title: '高炉煤气(TJ/亿m3)', dataIndex: 'blastfurnacegas' ,width: 200,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'blastfurnacegas', text),
      },{
        title: '转炉煤气(TJ/亿m3)', dataIndex: 'onvertergas' ,width: 200,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'onvertergas', text),
      },{
        title: '其它煤气(TJ/亿m3)', dataIndex: 'othergas' ,width: 200,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'othergas', text),
      },{
        title: '其它焦化产品(TJ/万t)', dataIndex: 'othercokingproducts',width: 200,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'othercokingproducts', text),
      },{
        title: '原油(TJ/万t)', dataIndex: 'crudeoil',width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'crudeoil', text),
      },{
        title: '汽油(TJ/万t)', dataIndex: 'gasoline' ,width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'gasoline', text),
      },{
        title: '煤油(TJ/万t)', dataIndex: 'kerosene' ,width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'kerosene', text),
      },{
        title: '柴油(TJ/万t)', dataIndex: 'diesel' ,width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'diesel', text),
      },{
        title: '燃料油(TJ/万t)', dataIndex: 'fueloil',width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'fueloil', text),
      },{
        title: '石脑油(TJ/万t)', dataIndex: 'naphtha',width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'naphtha', text),
      },{
        title: '润滑油(TJ/万t)', dataIndex: 'lubricatingoil' ,width:150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'lubricatingoil', text),
      },{
        title: '石蜡(TJ/万t)', dataIndex: 'paraffin',width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'paraffin', text),
      },{
        title: '溶剂油(TJ/万t)', dataIndex: 'solventoil' ,width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'solventoil', text),
      },{
        title: '石油沥青(TJ/万t)', dataIndex: 'asphalt' ,width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'asphalt', text),
      },{
        title: '石油焦(TJ/万t)', dataIndex: 'oilcoke' ,width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'oilcoke', text),
      },{
        title: '液化石油气(TJ/万t)', dataIndex: 'liquefiedpetroleumgas' ,width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'liquefiedpetroleumgas', text),
      },{
        title: '炼厂干气(TJ/亿m3)', dataIndex: 'refinerydrygas' ,width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'refinerydrygas', text),
      },{
        title: '其他石油制品(TJ/万t)', dataIndex: 'otherpetroleumproducts',width: 150,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'otherpetroleumproducts', text),
      },{
        title: '天然气(TJ/亿m3)', dataIndex: 'naturalgas' ,width: 180,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'naturalgas', text),
      },{
        title: '液化天然气(TJ/万t)', dataIndex: 'liquifiednaturalgas' ,width: 180,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'liquifiednaturalgas', text),
      },{
        title: '其他(TJ/亿m3)', dataIndex: 'other' ,width: 180,
        render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'other', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data4[index].anthracite;
          return (
            <div className={styles.editableOperations} >

              {
                index ==7
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

     this.columns6 = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 150,

        render: (text, record, index) => this.renderColumns6(this.state.data5, index, 'name', text),},

      {
        title: '排放因子（kgN2O/TJ）', dataIndex: 'anthracite', width: 550,colSpan:1,
        render: (text, record, index) => this.renderColumns6(this.state.data5, index, 'anthracite', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data5[index].anthracite;
          return (
            <div className={styles.editableOperations} >

              {
                index ==7
                  ? <span></span> :
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
        width: 150,

        render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'name', text),},

      {
        title: '烟煤(万吨)', dataIndex: 'bituminousCoal', width: 150,
        render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'bituminousCoal', text),
      }, {
        title: '汽油(万吨)', dataIndex: 'gasoline', width: 150,
        render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'gasoline', text),
      }, {
        title: '煤油(万吨)', dataIndex: 'kerosene', width: 150,
        render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'kerosene', text),
      }, {
        title: '柴油(万吨)', dataIndex: 'diesel', width: 150,
        render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'diesel', text),
      }, {
        title: '燃料油(万吨)', dataIndex: 'fuelOil', width: 170,
        render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'fuelOil', text),
      },{
        title: '天然气（亿立方米）', dataIndex: 'naturalgas', width:150 ,
        render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'naturalgas', text),
      },{
        title: '液化天然气(万吨)', dataIndex: 'liquifiednaturalgas', width: 170,
        render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'liquifiednaturalgas', text),
      },{
        title: '液化石油气(万吨)', dataIndex: 'liquefiedpetroleumgas', width: 170 ,
        render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'liquefiedpetroleumgas', text),
      },{
        title: '其他品种1(万吨)', dataIndex: 'otherVarieties1' ,width: 170,
        render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'otherVarieties1', text),
      },{
        title: '其他品种2(万吨)', dataIndex: 'otherVarieties2' ,width: 170,
        render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'otherVarieties2', text),
      },{
        title: '其他品种3（亿立方米）', dataIndex: 'otherVarieties3' ,width: 170,
        render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'otherVarieties3', text),
      },{
        title: '其他品种4（亿立方米）', dataIndex: 'otherVarieties4' ,width: 170,
        render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'otherVarieties4', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data6[index].otherVarieties1;
          return (
            <div className={styles.editableOperations} >

              {
                index ==0 ||index ==6
                  ? <span></span> :
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
        width: 150,

        render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'name', text),},

      {
        title: '烟煤(TJ/万t)', dataIndex: 'bituminousCoal', width: 150,
        render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'bituminousCoal', text),
      }, {
        title: '汽油(TJ/万t)', dataIndex: 'gasoline', width: 150,
        render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'gasoline', text),
      }, {
        title: '煤油(TJ/万t)', dataIndex: 'kerosene', width: 150,
        render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'kerosene', text),
      }, {
        title: '柴油(TJ/万t)', dataIndex: 'diesel', width: 150,
        render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'diesel', text),
      }, {
        title: '燃料油(TJ/万t)', dataIndex: 'fuelOil', width: 170,
        render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'fuelOil', text),
      },{
        title: '天然气(TJ/亿m³)', dataIndex: 'naturalgas', width:150 ,
        render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'naturalgas', text),
      },{
        title: '液化天然气(TJ/万t)', dataIndex: 'liquifiednaturalgas', width: 170,
        render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'liquifiednaturalgas', text),
      },{
        title: '液化石油气(TJ/万t)', dataIndex: 'liquefiedpetroleumgas', width: 170 ,
        render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'liquefiedpetroleumgas', text),
      },{
        title: '其他品种1(TJ/万t)', dataIndex: 'otherVarieties1' ,width: 170,
        render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'otherVarieties1', text),
      },{
        title: '其他品种2(TJ/万t)', dataIndex: 'otherVarieties2' ,width: 170,
        render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'otherVarieties2', text),
      },{
        title: '其他品种3(TJ/亿m³)', dataIndex: 'otherVarieties3' ,width: 170,
        render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'otherVarieties3', text),
      },{
        title: '其他品种4(TJ/亿m³)', dataIndex: 'otherVarieties4' ,width: 170,
        render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'otherVarieties4', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data7[index].bituminousCoal;
          return (
            <div className={styles.editableOperations} >

              {
                index ==0 || index ==6
                  ? <span></span> :
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
        width: 150,

        render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'name', text),},

      {
        title: '烟煤(kgCH4/TJ)', dataIndex: 'bituminousCoal', width: 150,
        render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'bituminousCoal', text),
      }, {
        title: '汽油(kgCH4/TJ)', dataIndex: 'gasoline', width: 150,
        render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'gasoline', text),
      }, {
        title: '煤油(kgCH4/TJ)', dataIndex: 'kerosene', width: 150,
        render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'kerosene', text),
      }, {
        title: '柴油(kgCH4/TJ)', dataIndex: 'diesel', width: 150,
        render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'diesel', text),
      }, {
        title: '燃料油(kgCH4/TJ)', dataIndex: 'fuelOil', width: 170,
        render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'fuelOil', text),
      },{
        title: '天然气(kgCH4/TJ)', dataIndex: 'naturalgas', width:150 ,
        render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'naturalgas', text),
      },{
        title: '液化天然气(kgCH4/TJ)', dataIndex: 'liquifiednaturalgas', width: 170,
        render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'liquifiednaturalgas', text),
      },{
        title: '液化石油气(kgCH4/TJ)', dataIndex: 'liquefiedpetroleumgas', width: 170 ,
        render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'liquefiedpetroleumgas', text),
      },{
        title: '其他品种1(kgCH4/TJ)', dataIndex: 'otherVarieties1' ,width: 170,
        render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'otherVarieties1', text),
      },{
        title: '其他品种2(kgCH4/TJ)', dataIndex: 'otherVarieties2' ,width: 170,
        render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'otherVarieties2', text),
      },{
        title: '其他品种3(kgCH4/TJ)', dataIndex: 'otherVarieties3' ,width: 170,
        render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'otherVarieties3', text),
      },{
        title: '其他品种4(kgCH4/TJ)', dataIndex: 'otherVarieties4' ,width: 170,
        render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'otherVarieties4', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data8[index].bituminousCoal;
          return (
            <div className={styles.editableOperations} >

              {
                index ==0 || index ==6
                  ? <span></span> :
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
        width: 150,

        render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'name', text),},

      {
        title: '烟煤(kgN2O/TJ)', dataIndex: 'bituminousCoal', width: 150,
        render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'bituminousCoal', text),
      }, {
        title: '汽油(kgN2O/TJ)', dataIndex: 'gasoline', width: 150,
        render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'gasoline', text),
      }, {
        title: '煤油(kgN2O/TJ)', dataIndex: 'kerosene', width: 150,
        render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'kerosene', text),
      }, {
        title: '柴油(kgN2O/TJ)', dataIndex: 'diesel', width: 150,
        render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'diesel', text),
      }, {
        title: '燃料油(kgN2O/TJ)', dataIndex: 'fuelOil', width: 170,
        render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'fuelOil', text),
      },{
        title: '天然气(kgN2O/TJ)', dataIndex: 'naturalgas', width:150 ,
        render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'naturalgas', text),
      },{
        title: '液化天然气(kgN2O/TJ)', dataIndex: 'liquifiednaturalgas', width: 170,
        render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'liquifiednaturalgas', text),
      },{
        title: '液化石油气(kgN2O/TJ)', dataIndex: 'liquefiedpetroleumgas', width: 170 ,
        render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'liquefiedpetroleumgas', text),
      },{
        title: '其他品种1(kgN2O/TJ)', dataIndex: 'otherVarieties1' ,width: 170,
        render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'otherVarieties1', text),
      },{
        title: '其他品种2(kgN2O/TJ)', dataIndex: 'otherVarieties2' ,width: 170,
        render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'otherVarieties2', text),
      },{
        title: '其他品种3(kgN2O/TJ)', dataIndex: 'otherVarieties3' ,width: 170,
        render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'otherVarieties3', text),
      },{
        title: '其他品种4(kgN2O/TJ)', dataIndex: 'otherVarieties4' ,width: 170,
        render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'otherVarieties4', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data9[index].bituminousCoal;
          return (
            <div className={styles.editableOperations} >

              {
                index ==0 || index ==6
                  ? <span></span> :
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
      loading: true ,

      collapsed: false,
      select:1,
      trigger:true,
      user:[],


      Data1:[],
      Data2:[],
      Data3:[],
      Data4:[],
      Data5:[],
      Data6:[],

      gas:'a1',
      statistics:'b1',
      discharge:'c1',
      breed:'0',
      dataSource:[],
      cs:'活动水平数据',
      csZs:'',

      AllData:[],
      years:'2014'
    };

    this.query('0','2014');

    //$("#bodyTable1").hide();

  }





  //非co2cH4 2.4 n2o排放因子

  renderColumns10(data9, index, key, text) {


    const { editable, status } = data9[index][key];
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



    const data9 = [...this.state.data9];
    data9[index][key].value = value;
    this.setState({ data9 });

    if(key  == 'otherVarieties4'){


      this.updateQueryYdYzN(index,data9,1);

      //console.log(data2)

    }


  }

  edit10(index) {

    const { data9 } = this.state;
    Object.keys(data9[index]).forEach((item) => {
      if (data9[index][item] && typeof data9[index][item].editable !== 'undefined') {
        data9[index][item].editable = true;
      }
    });
    this.setState({ data9 });
  }

  editDone10(index, type) {

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


  //非co2cH4 2.3 ch4排放因子

  renderColumns9(data8, index, key, text) {


    const { editable, status } = data8[index][key];
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



    const data8 = [...this.state.data8];
    data8[index][key].value = value;
    this.setState({ data8 });

    if(key  == 'otherVarieties4'){


      this.updateQueryYdYzCH4(index,data8,1);

      //console.log(data2)

    }


  }

  edit9(index) {

    const { data8 } = this.state;
    Object.keys(data8[index]).forEach((item) => {
      if (data8[index][item] && typeof data8[index][item].editable !== 'undefined') {
        data8[index][item].editable = true;
      }
    });
    this.setState({ data8 });
  }

  editDone9(index, type) {

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


  //非co2cH4 2.2 平均低位热值

  renderColumns8(data7, index, key, text) {


    const { editable, status } = data7[index][key];
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



    const data7 = [...this.state.data7];
    data7[index][key].value = value;
    this.setState({ data7 });

    if(key  == 'otherVarieties4'){


      this.updateQueryRzCH4(index,data7,1);

      //console.log(data2)

    }


  }

  edit8(index) {

    const { data7 } = this.state;
    Object.keys(data7[index]).forEach((item) => {
      if (data7[index][item] && typeof data7[index][item].editable !== 'undefined') {
        data7[index][item].editable = true;
      }
    });
    this.setState({ data7 });
  }

  editDone8(index, type) {

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


  //非co2cH4 2.1 活动水平数据

  renderColumns7(data6, index, key, text) {


    const { editable, status } = data6[index][key];
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


    const data6 = [...this.state.data6];
    data6[index][key].value = value;
    this.setState({ data6 });

    if(key  == 'otherVarieties4'){


      this.updateQueryHdCH4(index,data6,1);

      //console.log(data2)

    }


  }

  edit7(index) {

    const { data6 } = this.state;
    Object.keys(data6[index]).forEach((item) => {
      if (data6[index][item] && typeof data6[index][item].editable !== 'undefined') {
        data6[index][item].editable = true;
      }
    });
    this.setState({ data6 });
  }

  editDone7(index, type) {

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



  //非co2 1.3  排放因子

  renderColumns6(data5, index, key, text) {


    const { editable, status } = data5[index][key];
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


    const data5 = [...this.state.data5];
    data5[index][key].value = value;
    this.setState({ data5 });

    if(key  == 'anthracite'){


      this.updateQueryYzNO2(index,data5,1);

      //console.log(data2)

    }


  }

  edit6(index) {

    const { data5 } = this.state;
    Object.keys(data5[index]).forEach((item) => {
      if (data5[index][item] && typeof data5[index][item].editable !== 'undefined') {
        data5[index][item].editable = true;
      }
    });
    this.setState({ data5 });
  }

  editDone6(index, type) {

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


  //非co2 1.2 平均低位热值

  renderColumns5(data4, index, key, text) {


    const { editable, status } = data4[index][key];
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


    const data4 = [...this.state.data4];
    data4[index][key].value = value;
    this.setState({ data4 });

    if(key  == 'other'){


      this.updateQueryRzNO2(index,data4,1);

      //console.log(data2)

    }


  }

  edit5(index) {

    const { data4 } = this.state;
    Object.keys(data4[index]).forEach((item) => {
      if (data4[index][item] && typeof data4[index][item].editable !== 'undefined') {
        data4[index][item].editable = true;
      }
    });
    this.setState({ data4 });
  }

  editDone5(index, type) {

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


  //非co2 1.1 活动水平数据

  renderColumns4(data3, index, key, text) {


    const { editable, status } = data3[index][key];
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


    const data3 = [...this.state.data3];
    data3[index][key].value = value;
    this.setState({ data3 });

    if(key  == 'other'){


      this.updateQueryHdNO2(index,data3,1);

      //console.log(data2)

    }


  }

  edit4(index) {

    const { data3 } = this.state;
    Object.keys(data3[index]).forEach((item) => {
      if (data3[index][item] && typeof data3[index][item].editable !== 'undefined') {
        data3[index][item].editable = true;
      }
    });
    this.setState({ data3 });
  }

  editDone4(index, type) {

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



  //co2 1.2

  renderColumns3(data2, index, key, text) {


    const { editable, status } = data2[index][key];
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


    const data2 = [...this.state.data2];
    data2[index][key].value = value;
    this.setState({ data2 });

    if(key  == 'other'){


      this.updateMethod(index,data2,1);

      //console.log(data2)

    }


  }

  edit3(index) {

    const { data2 } = this.state;
    Object.keys(data2[index]).forEach((item) => {
      if (data2[index][item] && typeof data2[index][item].editable !== 'undefined') {
        data2[index][item].editable = true;
      }
    });
    this.setState({ data2 });
  }

  editDone3(index, type) {

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


  //co2 1.1

  renderColumns2(data1, index, key, text) {


 const { editable, status } = data1[index][key];
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


    const data1 = [...this.state.data1];
     data1[index][key].value = value;
    this.setState({ data1 });

    if(key  == 'other'){



    this.updateCo2(index,data1,1);

     //console.log(data1)

 }


 }

  edit2(index) {

 const { data1 } = this.state;
 Object.keys(data1[index]).forEach((item) => {
 if (data1[index][item] && typeof data1[index][item].editable !== 'undefined') {
 data1[index][item].editable = true;
 }
 });
 this.setState({ data1 });
 }

  editDone2(index, type) {

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

    if(key  == 'other'){

      if(index<14 && index>2){
        this.update(index,data,1);
      }else if(index<53 && index>14){
        this.update(index,data,2);
      }else if(index<63 && index>52){
        this.update(index,data,3);
      }else if(index==63){
        this.update(index,data,4);
      }else if(index==64){
        this.update(index,data,5);
      }else if(index==65){
        this.update(index,data,6);
      }
      console.log(data)
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


  //非co2排放量-CH4-2.4 移动源N2O排放因子
  queryYdYzN(years){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/mobileSourceCH4AndN2OEmissions/mobileSourceN2OEmissionFactor/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {



          var Alldata =res.data;

          const _Data = []

          _Data.push('');;//航空 *******
          _Data.push(Alldata.tDomesticFlights);//国内航班
          _Data.push(Alldata.tHongKongAndMacaoFlights);//港澳地区航班
          _Data.push(Alldata.tInternationalFlights); //国际航班
          _Data.push(Alldata.highway);//公路
          _Data.push(Alldata.railway);//铁路
          _Data.push('');//水运 ******
          _Data.push(Alldata.inlandRiverInternalCombustionEngine);//内河近海内燃机
          _Data.push(Alldata.internationalOceanInternalCombustionEngine);//国际远洋内燃机






          const fossilTitle = [


            '　航空',
            '　　国内航班',
            '　　港澳地区航班',
            '　　国际航班',
            '　公路',
            '　铁路',
            '　水运',
            '　　内河近海内燃机',
            '　　国际远洋内燃机',

          ]

          const _a = [];


          for(var i = 0 ;i<9;i++){
            if(i==0||i==6){
              _a.push({
                key: i,
                name:fossilTitle[i],
                bituminousCoal: '',
                gasoline: '',
                kerosene: '',
                diesel: '',
                fuelOil: '',
                naturalgas: '',
                liquifiednaturalgas: '',
                liquefiedpetroleumgas: '',
                otherVarieties1: '',
                otherVarieties2: '',
                otherVarieties3: '',
                otherVarieties4: '',

              });

            }else{

              _a.push({
                key: i,
                name:fossilTitle[i],
                bituminousCoal: _Data[i].bituminousCoal,
                gasoline: _Data[i].gasoline,
                kerosene: _Data[i].kerosene,
                diesel: _Data[i].diesel,
                fuelOil: _Data[i].fuelOil,
                naturalgas: _Data[i].naturalgas,
                liquifiednaturalgas: _Data[i].liquifiednaturalgas,
                liquefiedpetroleumgas: _Data[i].liquefiedpetroleumgas,
                otherVarieties1: _Data[i].otherVarieties1,
                otherVarieties2: _Data[i].otherVarieties2,
                otherVarieties3: _Data[i].otherVarieties3,
                otherVarieties4: _Data[i].otherVarieties4,

              });
            }

          }


          const _b = [];


          for(var i = 0 ; i<_a.length;i++){
            _b.push({
                key:_a[i].key,
                name:{

                  value:_a[i].name ,
                },
                bituminousCoal:{
                  editable: false,
                  value:_a[i].bituminousCoal ,
                },
                gasoline: {
                  editable: false,
                  value:_a[i].gasoline ,
                },
                kerosene: {
                  editable: false,
                  value:_a[i].kerosene ,
                },
                diesel: {
                  editable: false,
                  value:_a[i].diesel ,
                },
                fuelOil: {
                  editable: false,
                  value:_a[i].fuelOil ,
                },
                naturalgas: {
                  editable: false,
                  value:_a[i].naturalgas ,
                },
                liquifiednaturalgas: {
                  editable: false,
                  value:_a[i].liquifiednaturalgas ,
                },
                liquefiedpetroleumgas: {
                  editable: false,
                  value:_a[i].liquefiedpetroleumgas ,
                },
                otherVarieties1: {
                  editable: false,
                  value:_a[i].otherVarieties1,
                },
                otherVarieties2: {
                  editable: false,
                  value:_a[i].otherVarieties2 ,
                },
                otherVarieties3: {
                  editable: false,
                  value:_a[i].otherVarieties3,
                },
                otherVarieties4: {
                  editable: false,
                  value:_a[i].otherVarieties4 ,
                },


              }
            )
          }

          console.log(_b);


          this.setState({data9:_b});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //非co2排放量-CH4-2.4  移动源N2O排放因子
  updateQueryYdYzN(index,data9){
    var data  = data9

    const Directory = [
      'aviation',
      'tDomesticFlights',
      'tHongKongAndMacaoFlights',
      'tInternationalFlights',
      'highway',
      'railway',
      'waterTransport',
      'inlandRiverInternalCombustionEngine',
      'internationalOceanInternalCombustionEngine',



    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/mobileSourceCH4AndN2OEmissions/mobileSourceN2OEmissionFactor/update'
    var bodyName = 'mobileSourceN2OEmissionFactor'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]={
      "bituminousCoal":data[index].bituminousCoal.value,
      "gasoline":data[index].gasoline.value,
      "kerosene":data[index].kerosene.value,
      "diesel":data[index].diesel.value,
      "fuelOil":data[index].fuelOil.value,
      "naturalgas":data[index].naturalgas.value,
      "liquifiednaturalgas":data[index].liquifiednaturalgas.value,
      "liquefiedpetroleumgas":data[index].liquefiedpetroleumgas.value,
      "otherVarieties1":data[index].otherVarieties1.value,
      "otherVarieties2":data[index].otherVarieties2.value,
      "otherVarieties3":data[index].otherVarieties3.value,
      "otherVarieties4":data[index].otherVarieties4.value,}

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);

        } else {
          message.error(res.message);
        }
      });
  }


  //非co2排放量-CH4-2.3 移动源CH4排放因子
  queryYdYzCH4(years){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/mobileSourceCH4AndN2OEmissions/mobileSourceCH4EmissionFactor/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {



          var Alldata =res.data;

          const _Data = []

          _Data.push('');;//航空 *******
          _Data.push(Alldata.tDomesticFlights);//国内航班
          _Data.push(Alldata.tHongKongAndMacaoFlights);//港澳地区航班
          _Data.push(Alldata.tInternationalFlights); //国际航班
          _Data.push(Alldata.highway);//公路
          _Data.push(Alldata.railway);//铁路
          _Data.push('');//水运 ******
          _Data.push(Alldata.inlandRiverInternalCombustionEngine);//内河近海内燃机
          _Data.push(Alldata.internationalOceanInternalCombustionEngine);//国际远洋内燃机






          const fossilTitle = [


            '　航空',
            '　　国内航班',
            '　　港澳地区航班',
            '　　国际航班',
            '　公路',
            '　铁路',
            '　水运',
            '　　内河近海内燃机',
            '　　国际远洋内燃机',

          ]

          const _a = [];


          for(var i = 0 ;i<9;i++){
            if(i==0||i==6){
              _a.push({
                key: i,
                name:fossilTitle[i],
                bituminousCoal: '',
                gasoline: '',
                kerosene: '',
                diesel: '',
                fuelOil: '',
                naturalgas: '',
                liquifiednaturalgas: '',
                liquefiedpetroleumgas: '',
                otherVarieties1: '',
                otherVarieties2: '',
                otherVarieties3: '',
                otherVarieties4: '',

              });

            }else{

              _a.push({
                key: i,
                name:fossilTitle[i],
                bituminousCoal: _Data[i].bituminousCoal,
                gasoline: _Data[i].gasoline,
                kerosene: _Data[i].kerosene,
                diesel: _Data[i].diesel,
                fuelOil: _Data[i].fuelOil,
                naturalgas: _Data[i].naturalgas,
                liquifiednaturalgas: _Data[i].liquifiednaturalgas,
                liquefiedpetroleumgas: _Data[i].liquefiedpetroleumgas,
                otherVarieties1: _Data[i].otherVarieties1,
                otherVarieties2: _Data[i].otherVarieties2,
                otherVarieties3: _Data[i].otherVarieties3,
                otherVarieties4: _Data[i].otherVarieties4,

              });
            }

          }


          const _b = [];


          for(var i = 0 ; i<_a.length;i++){
            _b.push({
                key:_a[i].key,
                name:{

                  value:_a[i].name ,
                },
                bituminousCoal:{
                  editable: false,
                  value:_a[i].bituminousCoal ,
                },
                gasoline: {
                  editable: false,
                  value:_a[i].gasoline ,
                },
                kerosene: {
                  editable: false,
                  value:_a[i].kerosene ,
                },
                diesel: {
                  editable: false,
                  value:_a[i].diesel ,
                },
                fuelOil: {
                  editable: false,
                  value:_a[i].fuelOil ,
                },
                naturalgas: {
                  editable: false,
                  value:_a[i].naturalgas ,
                },
                liquifiednaturalgas: {
                  editable: false,
                  value:_a[i].liquifiednaturalgas ,
                },
                liquefiedpetroleumgas: {
                  editable: false,
                  value:_a[i].liquefiedpetroleumgas ,
                },
                otherVarieties1: {
                  editable: false,
                  value:_a[i].otherVarieties1,
                },
                otherVarieties2: {
                  editable: false,
                  value:_a[i].otherVarieties2 ,
                },
                otherVarieties3: {
                  editable: false,
                  value:_a[i].otherVarieties3,
                },
                otherVarieties4: {
                  editable: false,
                  value:_a[i].otherVarieties4 ,
                },


              }
            )
          }

          console.log(_b);


          this.setState({data8:_b});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //非co2排放量-CH4-2.3  移动源CH4排放因子
  updateQueryYdYzCH4(index,data8){
    var data  = data8

    const Directory = [
      'aviation',
      'tDomesticFlights',
      'tHongKongAndMacaoFlights',
      'tInternationalFlights',
      'highway',
      'railway',
      'waterTransport',
      'inlandRiverInternalCombustionEngine',
      'internationalOceanInternalCombustionEngine',



    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/mobileSourceCH4AndN2OEmissions/mobileSourceCH4EmissionFactor/update'
    var bodyName = 'mobileSourceCH4EmissionFactor'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]={
      "bituminousCoal":data[index].bituminousCoal.value,
      "gasoline":data[index].gasoline.value,
      "kerosene":data[index].kerosene.value,
      "diesel":data[index].diesel.value,
      "fuelOil":data[index].fuelOil.value,
      "naturalgas":data[index].naturalgas.value,
      "liquifiednaturalgas":data[index].liquifiednaturalgas.value,
      "liquefiedpetroleumgas":data[index].liquefiedpetroleumgas.value,
      "otherVarieties1":data[index].otherVarieties1.value,
      "otherVarieties2":data[index].otherVarieties2.value,
      "otherVarieties3":data[index].otherVarieties3.value,
      "otherVarieties4":data[index].otherVarieties4.value,}

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);

        } else {
          message.error(res.message);
        }
      });
  }


  //非co2排放量-CH4-2.2平均低位热值
  queryRzCH4(years){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/mobileSourceCH4AndN2OEmissions/averageLowCalorificValue/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {



          var Alldata =res.data;

          const _Data = []

          _Data.push('');;//航空 *******
          _Data.push(Alldata.tDomesticFlights);//国内航班
          _Data.push(Alldata.tHongKongAndMacaoFlights);//港澳地区航班
          _Data.push(Alldata.tInternationalFlights); //国际航班
          _Data.push(Alldata.highway);//公路
          _Data.push(Alldata.railway);//铁路
          _Data.push('');//水运 ******
          _Data.push(Alldata.inlandRiverInternalCombustionEngine);//内河近海内燃机
          _Data.push(Alldata.internationalOceanInternalCombustionEngine);//国际远洋内燃机






          const fossilTitle = [


            '　航空',
            '　　国内航班',
            '　　港澳地区航班',
            '　　国际航班',
            '　公路',
            '　铁路',
            '　水运',
            '　　内河近海内燃机',
            '　　国际远洋内燃机',

          ]

          const _a = [];


          for(var i = 0 ;i<9;i++){
            if(i==0||i==6){
              _a.push({
                key: i,
                name:fossilTitle[i],
                bituminousCoal: '',
                gasoline: '',
                kerosene: '',
                diesel: '',
                fuelOil: '',
                naturalgas: '',
                liquifiednaturalgas: '',
                liquefiedpetroleumgas: '',
                otherVarieties1: '',
                otherVarieties2: '',
                otherVarieties3: '',
                otherVarieties4: '',

              });

            }else{

              _a.push({
                key: i,
                name:fossilTitle[i],
                bituminousCoal: _Data[i].bituminousCoal,
                gasoline: _Data[i].gasoline,
                kerosene: _Data[i].kerosene,
                diesel: _Data[i].diesel,
                fuelOil: _Data[i].fuelOil,
                naturalgas: _Data[i].naturalgas,
                liquifiednaturalgas: _Data[i].liquifiednaturalgas,
                liquefiedpetroleumgas: _Data[i].liquefiedpetroleumgas,
                otherVarieties1: _Data[i].otherVarieties1,
                otherVarieties2: _Data[i].otherVarieties2,
                otherVarieties3: _Data[i].otherVarieties3,
                otherVarieties4: _Data[i].otherVarieties4,

              });
            }

          }


          const _b = [];


          for(var i = 0 ; i<_a.length;i++){
            _b.push({
                key:_a[i].key,
                name:{

                  value:_a[i].name ,
                },
              bituminousCoal:{
                  editable: false,
                  value:_a[i].bituminousCoal ,
                },
              gasoline: {
                  editable: false,
                  value:_a[i].gasoline ,
                },
              kerosene: {
                  editable: false,
                  value:_a[i].kerosene ,
                },
              diesel: {
                  editable: false,
                  value:_a[i].diesel ,
                },
              fuelOil: {
                  editable: false,
                  value:_a[i].fuelOil ,
                },
              naturalgas: {
                  editable: false,
                  value:_a[i].naturalgas ,
                },
              liquifiednaturalgas: {
                  editable: false,
                  value:_a[i].liquifiednaturalgas ,
                },
              liquefiedpetroleumgas: {
                  editable: false,
                  value:_a[i].liquefiedpetroleumgas ,
                },
              otherVarieties1: {
                  editable: false,
                  value:_a[i].otherVarieties1,
                },
              otherVarieties2: {
                  editable: false,
                  value:_a[i].otherVarieties2 ,
                },
              otherVarieties3: {
                  editable: false,
                  value:_a[i].otherVarieties3,
                },
              otherVarieties4: {
                  editable: false,
                  value:_a[i].otherVarieties4 ,
                },


              }
            )
          }

          console.log(_b);


          this.setState({data7:_b});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //非co2排放量-CH4-2.2平均低位热值
  updateQueryRzCH4(index,data7){
    var data  = data7

    const Directory = [
      'aviation',
      'tDomesticFlights',
      'tHongKongAndMacaoFlights',
      'tInternationalFlights',
      'highway',
      'railway',
      'waterTransport',
      'inlandRiverInternalCombustionEngine',
      'internationalOceanInternalCombustionEngine',



    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/mobileSourceCH4AndN2OEmissions/averageLowCalorificValue/update'
    var bodyName = 'averageLowCalorificValue'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]={
      "bituminousCoal":data[index].bituminousCoal.value,
      "gasoline":data[index].gasoline.value,
      "kerosene":data[index].kerosene.value,
      "diesel":data[index].diesel.value,
      "fuelOil":data[index].fuelOil.value,
      "naturalgas":data[index].naturalgas.value,
      "liquifiednaturalgas":data[index].liquifiednaturalgas.value,
      "liquefiedpetroleumgas":data[index].liquefiedpetroleumgas.value,
      "otherVarieties1":data[index].otherVarieties1.value,
      "otherVarieties2":data[index].otherVarieties2.value,
      "otherVarieties3":data[index].otherVarieties3.value,
      "otherVarieties4":data[index].otherVarieties4.value,}

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);

        } else {
          message.error(res.message);
        }
      });
  }


  //非co2排放量-CH4-2.1活动水平数据
  queryHdCH4(years){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/mobileSourceCH4AndN2OEmissions/activityLevelData/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {



          var Alldata =res.data;

          const _Data = []

          _Data.push('');;//航空 *******
          _Data.push(Alldata.tDomesticFlights);//国内航班
          _Data.push(Alldata.tHongKongAndMacaoFlights);//港澳地区航班
          _Data.push(Alldata.tInternationalFlights); //国际航班
          _Data.push(Alldata.highway);//公路
          _Data.push(Alldata.railway);//铁路
          _Data.push('');//水运 ******
          _Data.push(Alldata.inlandRiverInternalCombustionEngine);//内河近海内燃机
          _Data.push(Alldata.internationalOceanInternalCombustionEngine);//国际远洋内燃机





          const fossilTitle = [

            '　航空',
            '　　国内航班',
            '　　港澳地区航班',
            '　　国际航班',
            '　公路',
            '　铁路',
            '　水运',
            '　　内河近海内燃机',
            '　　国际远洋内燃机',

          ]

          const _a = [];



          for(var i = 0 ;i<9;i++){
            if(i==0||i==6){
              _a.push({
                key: i,
                name:fossilTitle[i],
                bituminousCoal: '',
                gasoline: '',
                kerosene: '',
                diesel: '',
                fuelOil: '',
                naturalgas: '',
                liquifiednaturalgas: '',
                liquefiedpetroleumgas: '',
                otherVarieties1: '',
                otherVarieties2: '',
                otherVarieties3: '',
                otherVarieties4: '',

              });

            }else{

              _a.push({
                key: i,
                name:fossilTitle[i],
                bituminousCoal: _Data[i].bituminousCoal,
                gasoline: _Data[i].gasoline,
                kerosene: _Data[i].kerosene,
                diesel: _Data[i].diesel,
                fuelOil: _Data[i].fuelOil,
                naturalgas: _Data[i].naturalgas,
                liquifiednaturalgas: _Data[i].liquifiednaturalgas,
                liquefiedpetroleumgas: _Data[i].liquefiedpetroleumgas,
                otherVarieties1: _Data[i].otherVarieties1,
                otherVarieties2: _Data[i].otherVarieties2,
                otherVarieties3: _Data[i].otherVarieties3,
                otherVarieties4: _Data[i].otherVarieties4,

              });
            }

          }


          const _b = [];


          for(var i = 0 ; i<_a.length;i++){
            _b.push({
                key:_a[i].key,
                name:{

                  value:_a[i].name ,
                },
              bituminousCoal:{

                  value:_a[i].bituminousCoal ,
                },
                gasoline: {

                  value:_a[i].gasoline ,
                },
                kerosene: {

                  value:_a[i].kerosene ,
                },
                diesel: {

                  value:_a[i].diesel ,
                },
                fuelOil: {

                  value:_a[i].fuelOil ,
                },
                naturalgas: {

                  value:_a[i].naturalgas ,
                },
                liquifiednaturalgas: {

                  value:_a[i].liquifiednaturalgas ,
                },
                liquefiedpetroleumgas: {

                  value:_a[i].liquefiedpetroleumgas ,
                },
                otherVarieties1: {
                  editable: false,
                  value:_a[i].otherVarieties1,
                },
                otherVarieties2: {
                  editable: false,
                  value:_a[i].otherVarieties2 ,
                },
                otherVarieties3: {
                  editable: false,
                  value:_a[i].otherVarieties3,
                },
                otherVarieties4: {
                  editable: false,
                  value:_a[i].otherVarieties4 ,
                },


              }
            )
          }

          console.log(_b);


          this.setState({data6:_b});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //非co2排放量-CH4-2.1活动水平数据
  updateQueryHdCH4(index,data6){
    var data  = data6

    const Directory = [
      'aviation',
      'tDomesticFlights',
      'tHongKongAndMacaoFlights',
      'tInternationalFlights',
      'highway',
      'railway',
      'waterTransport',
      'inlandRiverInternalCombustionEngine',
      'internationalOceanInternalCombustionEngine',



    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/mobileSourceCH4AndN2OEmissions/activityLevelData/update'
    var bodyName = 'activityLevelData'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]={

      "otherVarieties1":data[index].otherVarieties1.value,
      "otherVarieties2":data[index].otherVarieties2.value,
      "otherVarieties3":data[index].otherVarieties3.value,
      "otherVarieties4":data[index].otherVarieties4.value,}

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);

        } else {
          message.error(res.message);
        }
      });
  }


  //非co2排放量-NO2-1.3排放因子
  queryYzNO2(years){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/N2OEmissioFromUtilityBoilers/emissionFactor/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {



          var Alldata =res.data;

          const _Data = []

          _Data.push(Alldata.coalFiredFluidizedBedBoiler);//燃煤流化床锅炉
          _Data.push(Alldata.ctherCoalFiredBoilers);//其他燃煤锅炉
          _Data.push(Alldata.oilFiredBoiler); //燃油锅炉
          _Data.push(Alldata.gasBoiler);//燃气锅炉






          const fossilTitle = [


            '燃煤流化床锅炉',
            '其他燃煤锅炉',
            '燃油锅炉',
            '燃气锅炉',

          ]

          const _a = [];


          for(var i = 0 ;i<4;i++){


            _a.push({
              key: i,
              name:fossilTitle[i],
              anthracite: _Data[i],


            });




          }



          console.log(_a);

          const _b = [];


          for(var i = 0 ; i<_a.length;i++){
            _b.push({
                key:_a[i].key,
                name:{

                  value:_a[i].name ,
                },
                anthracite:{
                  editable: false,
                  value:_a[i].anthracite ,
                }

              }
            )
          }

          console.log(_b);


          this.setState({data5:_b});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //非co2排放量-NO2-1.3排放因子
  updateQueryYzNO2(index,data5){


    var data  = data5

    const Directory = [
      'coalFiredFluidizedBedBoiler',
      'ctherCoalFiredBoilers',
      'oilFiredBoiler',
      'gasBoiler',



    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/N2OEmissioFromUtilityBoilers/emissionFactor/update'
    var bodyName = 'emissionFactor'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]=

      data[index].anthracite.value

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);

        } else {
          message.error(res.message);
        }
      });
  }


  //非co2排放量-NO2-1.2平均低位热值
  queryRzNO2(years){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/N2OEmissioFromUtilityBoilers/averageLowCalorificValue/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {


          var Alldata =res.data;

          const _Data = []

          _Data.push(Alldata.coalFiredFluidizedBedBoiler);//燃煤流化床锅炉
          _Data.push(Alldata.ctherCoalFiredBoilers);//其他燃煤锅炉
          _Data.push(Alldata.oilFiredBoiler); //燃油锅炉
          _Data.push(Alldata.gasBoiler);//燃气锅炉






          const fossilTitle = [


            '燃煤流化床锅炉',
            '其他燃煤锅炉',
            '燃油锅炉',
            '燃气锅炉',

          ]

          const _a = [];


          for(var i = 0 ;i<4;i++){


            _a.push({
              key: i,
              name:fossilTitle[i],
              anthracite: _Data[i].anthracite,
              asphalt: _Data[i].asphalt,
              bituminouscoal: _Data[i].bituminouscoal,
              blastfurnacegas: _Data[i].blastfurnacegas,
              briquette: _Data[i].briquette,
              catelogId: _Data[i].catelogId,
              coalgangue: _Data[i].coalgangue,
              coke: _Data[i].coke,
              cokeovengas: _Data[i].cokeovengas,
              crudeoil: _Data[i].crudeoil,
              diesel: _Data[i].diesel,
              fueloil: _Data[i].fueloil,
              gasoline: _Data[i].gasoline,
              kerosene: _Data[i].kerosene,
              lignite: _Data[i].lignite,
              liquefiedpetroleumgas: _Data[i].liquefiedpetroleumgas,
              liquifiednaturalgas: _Data[i].liquifiednaturalgas,
              lubricatingoil: _Data[i].lubricatingoil,
              naphtha: _Data[i].naphtha,
              naturalgas: _Data[i].naturalgas,
              oilcoke: _Data[i].oilcoke,
              onvertergas: _Data[i].onvertergas,
              other: _Data[i].other,
              othercoalwashing: _Data[i].othercoalwashing,
              othercokingproducts: _Data[i].othercokingproducts,
              othergas: _Data[i].othergas,
              otherpetroleumproducts: _Data[i].otherpetroleumproducts,
              paraffin: _Data[i].paraffin,
              refinerydrygas: _Data[i].refinerydrygas,
              solventoil: _Data[i].solventoil,
              tffId: _Data[i].tffId,
              washthecleancoal: _Data[i].washthecleancoal,

            });




          }



          console.log(_a);

          const _b = [];


          for(var i = 0 ; i<_a.length;i++){
            _b.push({
                key:_a[i].key,
                name:{

                  value:_a[i].name ,
                },
                anthracite:{
                  editable: false,
                  value:_a[i].anthracite ,
                },
                asphalt: {
                  editable: false,
                  value:_a[i].asphalt ,
                },
                bituminouscoal: {
                  editable: false,
                  value:_a[i].bituminouscoal ,
                },
                blastfurnacegas: {
                  editable: false,
                  value:_a[i].blastfurnacegas ,
                },
                briquette: {
                  editable: false,
                  value:_a[i].briquette ,
                },
                catelogId: {
                  editable: false,
                  value:_a[i].catelogId ,
                },
                coalgangue: {
                  editable: false,
                  value:_a[i].coalgangue ,
                },
                coke: {
                  editable: false,
                  value:_a[i].coke ,
                },
                cokeovengas: {
                  editable: false,
                  value:_a[i].cokeovengas,
                },
                crudeoil: {
                  editable: false,
                  value:_a[i].crudeoil ,
                },
                diesel: {
                  editable: false,
                  value:_a[i].diesel,
                },
                fueloil: {
                  editable: false,
                  value:_a[i].fueloil ,
                },
                gasoline: {
                  editable: false,
                  value:_a[i].gasoline ,
                },
                kerosene: {
                  editable: false,
                  value:_a[i].kerosene,
                },
                lignite: {
                  editable: false,
                  value:_a[i].lignite ,
                },
                liquefiedpetroleumgas: {
                  editable: false,
                  value:_a[i].liquefiedpetroleumgas ,
                },
                liquifiednaturalgas: {
                  editable: false,
                  value:_a[i].liquifiednaturalgas ,
                },
                lubricatingoil: {
                  editable: false,
                  value:_a[i].lubricatingoil ,
                },
                naphtha: {
                  editable: false,
                  value:_a[i].naphtha ,
                },
                naturalgas: {
                  editable: false,
                  value:_a[i].naturalgas ,
                },
                oilcoke: {
                  editable: false,
                  value:_a[i].oilcoke ,
                },
                onvertergas: {
                  editable: false,
                  value:_a[i].onvertergas ,
                },
                other: {
                  editable: false,
                  value:_a[i].other,
                },
                othercoalwashing: {
                  editable: false,
                  value:_a[i].othercoalwashing ,
                },
                othercokingproducts: {
                  editable: false,
                  value:_a[i].othercokingproducts ,
                },
                othergas: {
                  editable: false,
                  value:_a[i].othergas ,
                },
                otherpetroleumproducts: {
                  editable: false,
                  value:_a[i].otherpetroleumproducts ,
                },
                paraffin: {
                  editable: false,
                  value:_a[i].paraffin ,
                },
                refinerydrygas: {
                  editable: false,
                  value:_a[i].refinerydrygas ,
                },
                solventoil: {
                  editable: false,
                  value:_a[i].solventoil ,
                },
                tffId: {
                  editable: false,
                  value:_a[i].tffId ,
                },
                washthecleancoal: {
                  editable: false,
                  value:_a[i].washthecleancoal ,
                },

              }
            )
          }

          console.log(_b);


          this.setState({data4:_b});



        } else {
          message.error('数据错误！');
        }
      });

  }

  //非co2排放量-NO2-1.2平均低位热值
  updateQueryRzNO2(index,data4){
    var data  = data4

    const Directory = [
      'coalFiredFluidizedBedBoiler',
      'ctherCoalFiredBoilers',
      'oilFiredBoiler',
      'gasBoiler',



    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/N2OEmissioFromUtilityBoilers/averageLowCalorificValue/update'
    var bodyName = 'averageLowCalorificValue'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]={
      "naturalgas":data[index].naturalgas.value,
      "diesel":data[index].diesel.value,
      "other":data[index].other.value,
      "othercoalwashing":data[index].othercoalwashing.value,
      "briquette":data[index].briquette.value,
      "paraffin":data[index].paraffin.value,
      "catelogId":data[index].catelogId.value,
      "gasoline":data[index].gasoline.value,
      "solventoil":data[index].solventoil.value,
      "washthecleancoal":data[index].washthecleancoal.value,
      "othercokingproducts":data[index].othercokingproducts.value,
      "refinerydrygas":data[index].refinerydrygas.value,
      "lignite":data[index].lignite.value,
      "liquefiedpetroleumgas":data[index].liquefiedpetroleumgas.value,
      "otherpetroleumproducts":data[index].otherpetroleumproducts.value,
      "lubricatingoil":data[index].lubricatingoil.value,
      "bituminouscoal":data[index].bituminouscoal.value,
      "coke":data[index].coke.value,
      "coalgangue":data[index].coalgangue.value,
      "liquifiednaturalgas":data[index].liquifiednaturalgas.value,
      "onvertergas":data[index].onvertergas.value,
      "asphalt":data[index].asphalt.value,
      "naphtha":data[index].naphtha.value,
      "kerosene":data[index].kerosene.value,
      "cokeovengas":data[index].cokeovengas.value,
      "blastfurnacegas":data[index].blastfurnacegas.value,
      "othergas":data[index].othergas.value,
      "fueloil":data[index].fueloil.value,
      "crudeoil":data[index].crudeoil.value,
      "oilcoke":data[index].oilcoke.value,
      "tffId":data[index].tffId.value,
      "anthracite":data[index].anthracite.value}

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);

        } else {
          message.error(res.message);
        }
      });
  }


  //非co2排放量-NO2-1.1活动水平数据
  queryHdNO2(years){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/N2OEmissioFromUtilityBoilers/activityLevelData/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {


          var Alldata =res.data;

          const _Data = []

          _Data.push(Alldata.coalFiredFluidizedBedBoiler);//燃煤流化床锅炉
          _Data.push(Alldata.ctherCoalFiredBoilers);//其他燃煤锅炉
          _Data.push(Alldata.oilFiredBoiler); //燃油锅炉
          _Data.push(Alldata.gasBoiler);//燃气锅炉






          const fossilTitle = [


            '燃煤流化床锅炉',
            '其他燃煤锅炉',
            '燃油锅炉',
            '燃气锅炉',

          ]

          const _a = [];


          for(var i = 0 ;i<4;i++){


              _a.push({
                key: i,
                name:fossilTitle[i],
                anthracite: _Data[i].anthracite,
                asphalt: _Data[i].asphalt,
                bituminouscoal: _Data[i].bituminouscoal,
                blastfurnacegas: _Data[i].blastfurnacegas,
                briquette: _Data[i].briquette,
                catelogId: _Data[i].catelogId,
                coalgangue: _Data[i].coalgangue,
                coke: _Data[i].coke,
                cokeovengas: _Data[i].cokeovengas,
                crudeoil: _Data[i].crudeoil,
                diesel: _Data[i].diesel,
                fueloil: _Data[i].fueloil,
                gasoline: _Data[i].gasoline,
                kerosene: _Data[i].kerosene,
                lignite: _Data[i].lignite,
                liquefiedpetroleumgas: _Data[i].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i].liquifiednaturalgas,
                lubricatingoil: _Data[i].lubricatingoil,
                naphtha: _Data[i].naphtha,
                naturalgas: _Data[i].naturalgas,
                oilcoke: _Data[i].oilcoke,
                onvertergas: _Data[i].onvertergas,
                other: _Data[i].other,
                othercoalwashing: _Data[i].othercoalwashing,
                othercokingproducts: _Data[i].othercokingproducts,
                othergas: _Data[i].othergas,
                otherpetroleumproducts: _Data[i].otherpetroleumproducts,
                paraffin: _Data[i].paraffin,
                refinerydrygas: _Data[i].refinerydrygas,
                solventoil: _Data[i].solventoil,
                tffId: _Data[i].tffId,
                washthecleancoal: _Data[i].washthecleancoal,

              });




          }



          console.log(_a);

          const _b = [];


          for(var i = 0 ; i<_a.length;i++){
            _b.push({
                key:_a[i].key,
                name:{

                  value:_a[i].name ,
                },
                anthracite:{
                  editable: false,
                  value:_a[i].anthracite ,
                },
                asphalt: {
                  editable: false,
                  value:_a[i].asphalt ,
                },
                bituminouscoal: {
                  editable: false,
                  value:_a[i].bituminouscoal ,
                },
                blastfurnacegas: {
                  editable: false,
                  value:_a[i].blastfurnacegas ,
                },
                briquette: {
                  editable: false,
                  value:_a[i].briquette ,
                },
                catelogId: {
                  editable: false,
                  value:_a[i].catelogId ,
                },
                coalgangue: {
                  editable: false,
                  value:_a[i].coalgangue ,
                },
                coke: {
                  editable: false,
                  value:_a[i].coke ,
                },
                cokeovengas: {
                  editable: false,
                  value:_a[i].cokeovengas,
                },
                crudeoil: {
                  editable: false,
                  value:_a[i].crudeoil ,
                },
                diesel: {
                  editable: false,
                  value:_a[i].diesel,
                },
                fueloil: {
                  editable: false,
                  value:_a[i].fueloil ,
                },
                gasoline: {
                  editable: false,
                  value:_a[i].gasoline ,
                },
                kerosene: {
                  editable: false,
                  value:_a[i].kerosene,
                },
                lignite: {
                  editable: false,
                  value:_a[i].lignite ,
                },
                liquefiedpetroleumgas: {
                  editable: false,
                  value:_a[i].liquefiedpetroleumgas ,
                },
                liquifiednaturalgas: {
                  editable: false,
                  value:_a[i].liquifiednaturalgas ,
                },
                lubricatingoil: {
                  editable: false,
                  value:_a[i].lubricatingoil ,
                },
                naphtha: {
                  editable: false,
                  value:_a[i].naphtha ,
                },
                naturalgas: {
                  editable: false,
                  value:_a[i].naturalgas ,
                },
                oilcoke: {
                  editable: false,
                  value:_a[i].oilcoke ,
                },
                onvertergas: {
                  editable: false,
                  value:_a[i].onvertergas ,
                },
                other: {
                  editable: false,
                  value:_a[i].other,
                },
                othercoalwashing: {
                  editable: false,
                  value:_a[i].othercoalwashing ,
                },
                othercokingproducts: {
                  editable: false,
                  value:_a[i].othercokingproducts ,
                },
                othergas: {
                  editable: false,
                  value:_a[i].othergas ,
                },
                otherpetroleumproducts: {
                  editable: false,
                  value:_a[i].otherpetroleumproducts ,
                },
                paraffin: {
                  editable: false,
                  value:_a[i].paraffin ,
                },
                refinerydrygas: {
                  editable: false,
                  value:_a[i].refinerydrygas ,
                },
                solventoil: {
                  editable: false,
                  value:_a[i].solventoil ,
                },
                tffId: {
                  editable: false,
                  value:_a[i].tffId ,
                },
                washthecleancoal: {
                  editable: false,
                  value:_a[i].washthecleancoal ,
                },

              }
            )
          }

          console.log(_b);


          this.setState({data3:_b});



        } else {
          message.error('数据错误！');
        }
      });

  }

  //非co2排放量-NO2-1.1活动水平数据
  updateQueryHdNO2(index,data3){
    var data  = data3

    const Directory = [
      'coalFiredFluidizedBedBoiler',
      'ctherCoalFiredBoilers',
      'oilFiredBoiler',
      'gasBoiler',



    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/N2OEmissioFromUtilityBoilers/activityLevelData/update'
    var bodyName = 'activityLevelData'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]={
      "naturalgas":data[index].naturalgas.value,
      "diesel":data[index].diesel.value,
      "other":data[index].other.value,
      "othercoalwashing":data[index].othercoalwashing.value,
      "briquette":data[index].briquette.value,
      "paraffin":data[index].paraffin.value,
      "catelogId":data[index].catelogId.value,
      "gasoline":data[index].gasoline.value,
      "solventoil":data[index].solventoil.value,
      "washthecleancoal":data[index].washthecleancoal.value,
      "othercokingproducts":data[index].othercokingproducts.value,
      "refinerydrygas":data[index].refinerydrygas.value,
      "lignite":data[index].lignite.value,
      "liquefiedpetroleumgas":data[index].liquefiedpetroleumgas.value,
      "otherpetroleumproducts":data[index].otherpetroleumproducts.value,
      "lubricatingoil":data[index].lubricatingoil.value,
      "bituminouscoal":data[index].bituminouscoal.value,
      "coke":data[index].coke.value,
      "coalgangue":data[index].coalgangue.value,
      "liquifiednaturalgas":data[index].liquifiednaturalgas.value,
      "onvertergas":data[index].onvertergas.value,
      "asphalt":data[index].asphalt.value,
      "naphtha":data[index].naphtha.value,
      "kerosene":data[index].kerosene.value,
      "cokeovengas":data[index].cokeovengas.value,
      "blastfurnacegas":data[index].blastfurnacegas.value,
      "othergas":data[index].othergas.value,
      "fueloil":data[index].fueloil.value,
      "crudeoil":data[index].crudeoil.value,
      "oilcoke":data[index].oilcoke.value,
      "tffId":data[index].tffId.value,
      "anthracite":data[index].anthracite.value}

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);

        } else {
          message.error(res.message);
        }
      });
  }



  //co2排放量-参考方法
  queryMethod(years){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByRef/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {


          var Alldata =res.data;

          const _Data = []

          _Data.push(Alldata.production);//生产量
          _Data.push(Alldata.importAmount);//进口量
          _Data.push(Alldata.exportAmount); //出口量
          _Data.push(Alldata.transferAmount);//调入量
          _Data.push(Alldata.callOutTheAmount);//调出量
          _Data.push(Alldata.internationalFuelTank);//国际燃料舱
          _Data.push(Alldata.inventoryChanges);//库存变化
          //_Data.push(Alldata.apparentConsumption);//表观消费量





          const fossilTitle = [


            '生产量',
            '进口量',
            '出口量',
            '调入量',
            '调出量',
            '国际燃料仓',
            '库存变化',
            '表现消费量',

          ]

          const _a = [];


          for(var i = 0 ;i<8;i++){

             if( i==7 ) {

              _a.push({
                key: i,
                name:fossilTitle[i],
                anthracite: '0',
                asphalt: '0',
                bituminouscoal: '0',
                blastfurnacegas: '0',
                briquette: '0',
                catelogId: '0',
                coalgangue: '0',
                coke: '0',
                cokeovengas: '0',
                crudeoil: '0',
                diesel: '0',
                fueloil: '0',
                gasoline: '0',
                kerosene: '0',
                lignite: '0',
                liquefiedpetroleumgas: '0',
                liquifiednaturalgas: '0',
                lubricatingoil: '0',
                naphtha: '0',
                naturalgas: '0',
                oilcoke: '0',
                onvertergas: '0',
                other: '0',
                othercoalwashing: '0',
                othercokingproducts: '0',
                othergas: '0',
                otherpetroleumproducts: '0',
                paraffin: '0',
                refinerydrygas: '0',
                solventoil: '0',
                tffId: '0',
                washthecleancoal: '0',

              });

            }else{

              _a.push({
                key: i,
                name:fossilTitle[i],
                anthracite: _Data[i].anthracite,
                asphalt: _Data[i].asphalt,
                bituminouscoal: _Data[i].bituminouscoal,
                blastfurnacegas: _Data[i].blastfurnacegas,
                briquette: _Data[i].briquette,
                catelogId: _Data[i].catelogId,
                coalgangue: _Data[i].coalgangue,
                coke: _Data[i].coke,
                cokeovengas: _Data[i].cokeovengas,
                crudeoil: _Data[i].crudeoil,
                diesel: _Data[i].diesel,
                fueloil: _Data[i].fueloil,
                gasoline: _Data[i].gasoline,
                kerosene: _Data[i].kerosene,
                lignite: _Data[i].lignite,
                liquefiedpetroleumgas: _Data[i].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i].liquifiednaturalgas,
                lubricatingoil: _Data[i].lubricatingoil,
                naphtha: _Data[i].naphtha,
                naturalgas: _Data[i].naturalgas,
                oilcoke: _Data[i].oilcoke,
                onvertergas: _Data[i].onvertergas,
                other: _Data[i].other,
                othercoalwashing: _Data[i].othercoalwashing,
                othercokingproducts: _Data[i].othercokingproducts,
                othergas: _Data[i].othergas,
                otherpetroleumproducts: _Data[i].otherpetroleumproducts,
                paraffin: _Data[i].paraffin,
                refinerydrygas: _Data[i].refinerydrygas,
                solventoil: _Data[i].solventoil,
                tffId: _Data[i].tffId,
                washthecleancoal: _Data[i].washthecleancoal,

              });

            }


          }



          console.log(_a);

          const _b = [];


          for(var i = 0 ; i<_a.length;i++){
            _b.push({
                key:_a[i].key,
                name:{

                  value:_a[i].name ,
                },
                anthracite:{
                  editable: false,
                  value:_a[i].anthracite ,
                },
                asphalt: {
                  editable: false,
                  value:_a[i].asphalt ,
                },
                bituminouscoal: {
                  editable: false,
                  value:_a[i].bituminouscoal ,
                },
                blastfurnacegas: {
                  editable: false,
                  value:_a[i].blastfurnacegas ,
                },
                briquette: {
                  editable: false,
                  value:_a[i].briquette ,
                },
                catelogId: {
                  editable: false,
                  value:_a[i].catelogId ,
                },
                coalgangue: {
                  editable: false,
                  value:_a[i].coalgangue ,
                },
                coke: {
                  editable: false,
                  value:_a[i].coke ,
                },
                cokeovengas: {
                  editable: false,
                  value:_a[i].cokeovengas,
                },
                crudeoil: {
                  editable: false,
                  value:_a[i].crudeoil ,
                },
                diesel: {
                  editable: false,
                  value:_a[i].diesel,
                },
                fueloil: {
                  editable: false,
                  value:_a[i].fueloil ,
                },
                gasoline: {
                  editable: false,
                  value:_a[i].gasoline ,
                },
                kerosene: {
                  editable: false,
                  value:_a[i].kerosene,
                },
                lignite: {
                  editable: false,
                  value:_a[i].lignite ,
                },
                liquefiedpetroleumgas: {
                  editable: false,
                  value:_a[i].liquefiedpetroleumgas ,
                },
                liquifiednaturalgas: {
                  editable: false,
                  value:_a[i].liquifiednaturalgas ,
                },
                lubricatingoil: {
                  editable: false,
                  value:_a[i].lubricatingoil ,
                },
                naphtha: {
                  editable: false,
                  value:_a[i].naphtha ,
                },
                naturalgas: {
                  editable: false,
                  value:_a[i].naturalgas ,
                },
                oilcoke: {
                  editable: false,
                  value:_a[i].oilcoke ,
                },
                onvertergas: {
                  editable: false,
                  value:_a[i].onvertergas ,
                },
                other: {
                  editable: false,
                  value:_a[i].other,
                },
                othercoalwashing: {
                  editable: false,
                  value:_a[i].othercoalwashing ,
                },
                othercokingproducts: {
                  editable: false,
                  value:_a[i].othercokingproducts ,
                },
                othergas: {
                  editable: false,
                  value:_a[i].othergas ,
                },
                otherpetroleumproducts: {
                  editable: false,
                  value:_a[i].otherpetroleumproducts ,
                },
                paraffin: {
                  editable: false,
                  value:_a[i].paraffin ,
                },
                refinerydrygas: {
                  editable: false,
                  value:_a[i].refinerydrygas ,
                },
                solventoil: {
                  editable: false,
                  value:_a[i].solventoil ,
                },
                tffId: {
                  editable: false,
                  value:_a[i].tffId ,
                },
                washthecleancoal: {
                  editable: false,
                  value:_a[i].washthecleancoal ,
                },

              }
            )
          }

          console.log(_b);


          this.setState({data2:_b});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //co2排放量-参考方法update
  updateMethod(index,data2){
    var data  = data2

    const Directory = [
      'production',
      'importAmount',
      'exportAmount',
      'transferAmount',
      'callOutTheAmount',
      'internationalFuelTank',
      'inventoryChanges',
      'apparentConsumption',




    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByRef/update'
    var bodyName = 'statisticalByRef'



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]={
      "naturalgas":data[index].naturalgas.value,
      "diesel":data[index].diesel.value,
      "other":data[index].other.value,
      "othercoalwashing":data[index].othercoalwashing.value,
      "briquette":data[index].briquette.value,
      "paraffin":data[index].paraffin.value,
      "catelogId":data[index].catelogId.value,
      "gasoline":data[index].gasoline.value,
      "solventoil":data[index].solventoil.value,
      "washthecleancoal":data[index].washthecleancoal.value,
      "othercokingproducts":data[index].othercokingproducts.value,
      "refinerydrygas":data[index].refinerydrygas.value,
      "lignite":data[index].lignite.value,
      "liquefiedpetroleumgas":data[index].liquefiedpetroleumgas.value,
      "otherpetroleumproducts":data[index].otherpetroleumproducts.value,
      "lubricatingoil":data[index].lubricatingoil.value,
      "bituminouscoal":data[index].bituminouscoal.value,
      "coke":data[index].coke.value,
      "coalgangue":data[index].coalgangue.value,
      "liquifiednaturalgas":data[index].liquifiednaturalgas.value,
      "onvertergas":data[index].onvertergas.value,
      "asphalt":data[index].asphalt.value,
      "naphtha":data[index].naphtha.value,
      "kerosene":data[index].kerosene.value,
      "cokeovengas":data[index].cokeovengas.value,
      "blastfurnacegas":data[index].blastfurnacegas.value,
      "othergas":data[index].othergas.value,
      "fueloil":data[index].fueloil.value,
      "crudeoil":data[index].crudeoil.value,
      "oilcoke":data[index].oilcoke.value,
      "tffId":data[index].tffId.value,
      "anthracite":data[index].anthracite.value}

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);

        } else {
          message.error(res.message);
        }
      });
  }


  //co2排放量-非能源利用
  queryCo2(years){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/nonEnergyUseEmissions/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {


          var Alldata =res.data;

          const _Data = []

          _Data.push(Alldata.nonEnergyUse);//非能源利用量
          _Data.push('');
          _Data.push(Alldata.averageLowCalorificValue); //平均低位热值
          _Data.push('');
          _Data.push(Alldata.unitCalorificValueCarbonContent);//单位热值含碳量
          _Data.push('');
          _Data.push(Alldata.carbonContent);//固碳量
          _Data.push('');
          _Data.push(Alldata.carbonOxidationRate);//碳氧化率
          _Data.push('');
          _Data.push(Alldata.emissions);//排放量（万吨）




          const fossilTitle = [


            '非能源利用量',
            '',
            '平均低位热值',
            '',
            '单位热值含碳量',
            '',
            '固碳量',
            '',
            '碳氧化率',
            '',
            '非能源利用排放量',
            '',
          ]

          const _a = [];


          for(var i = 0 ;i<11;i++){

            if(i==1 ){
              _a.push({
                key: i,
                name:'数据项',
                anthracite: '无烟煤(TJ/万t)',
                bituminouscoal: '烟煤(TJ/万t)',
                lignite: '褐煤(TJ/万t)',
                washthecleancoal: '洗精煤(TJ/万t)',
                othercoalwashing: '其他洗煤(TJ/万t)',
                briquette: '型煤(TJ/万t)',
                coalgangue: '煤矸石(TJ/万t)',
                coke: '焦炭(TJ/万t)',
                cokeovengas: '焦炉煤气(TJ/亿m3)',
                blastfurnacegas: '高炉煤气(TJ/亿m3)',
                onvertergas: '转炉煤气(TJ/亿m3)',
                othergas: '其他煤气(TJ/亿m3)',
                othercokingproducts: '其他焦化产品(TJ/万t)',
                crudeoil: '原油(TJ/万t)',
                gasoline: '汽油(TJ/万t)',
                kerosene: '煤油(TJ/万t)',
                diesel: '柴油(TJ/万t)',
                fueloil: '燃料油(TJ/万t)',
                naphtha: '石脑油(TJ/万t)',
                lubricatingoil: '润滑油(TJ/万t)',
                paraffin: '石蜡(TJ/万t)',
                solventoil: '溶剂油(TJ/万t)',
                asphalt: '石油沥青(TJ/万t)',
                oilcoke: '石油焦(TJ/万t)',
                liquefiedpetroleumgas: '液化石油气(TJ/万t)',
                refinerydrygas: '炼厂干气(TJ/万t)',
                otherpetroleumproducts: '其他石油制品(TJ/万t)',
                naturalgas: '天然气(TJ/亿m3)',
                liquifiednaturalgas: '液化天然气(TJ/万t)',
                other: '其他(TJ/亿m3)',
                catelogId: '0',
                tffId: '0',
              });
            }else if( i==3 ) {

              _a.push({
                key: i,
                name:'数据项',
                anthracite: '无烟煤(tC/TJ)',
                bituminouscoal: '烟煤(tC/TJ)',
                lignite: '褐煤(tC/TJ)',
                washthecleancoal: '洗精煤(tC/TJ)',
                othercoalwashing: '其他洗煤(tC/TJ)',
                briquette: '型煤(tC/TJ)',
                coalgangue: '煤矸石(tC/TJ)',
                coke: '焦炭(tC/TJ)',
                cokeovengas: '焦炉煤气(tC/TJ)',
                blastfurnacegas: '高炉煤气(tC/TJ)',
                onvertergas: '转炉煤气(tC/TJ)',
                othergas: '其他煤气(tC/TJ)',
                othercokingproducts: '其他焦化产品(tC/TJ)',
                crudeoil: '原油(tC/TJ)',
                gasoline: '汽油(tC/TJ)',
                kerosene: '煤油(tC/TJ)',
                diesel: '柴油(tC/TJ)',
                fueloil: '燃料油(tC/TJ)',
                naphtha: '石脑油(tC/TJ)',
                lubricatingoil: '润滑油(tC/TJ)',
                paraffin: '石蜡(tC/TJ)',
                solventoil: '溶剂油(tC/TJ)',
                asphalt: '石油沥青(tC/TJ)',
                oilcoke: '石油焦(tC/TJ)',
                liquefiedpetroleumgas: '液化石油气(tC/TJ)',
                refinerydrygas: '炼厂干气(tC/TJ)',
                otherpetroleumproducts: '其他石油制品(tC/TJ)',
                naturalgas: '天然气(tC/TJ)',
                liquifiednaturalgas: '液化天然气(tC/TJ)',
                other: '其他(tC/TJ)',
                catelogId: '0',
                tffId: '0',
              });

            } else if(i==5 || i==7 ){

              _a.push({
                key: i,
                name:'数据项',
                anthracite: '无烟煤(%)',
                bituminouscoal: '烟煤(%)',
                lignite: '褐煤(%)',
                washthecleancoal: '洗精煤(%)',
                othercoalwashing: '其他洗煤(%)',
                briquette: '型煤(%)',
                coalgangue: '煤矸石(%)',
                coke: '焦炭(%)',
                cokeovengas: '焦炉煤气(%)',
                blastfurnacegas: '高炉煤气(%)',
                onvertergas: '转炉煤气(%)',
                othergas: '其他煤气(%)',
                othercokingproducts: '其他焦化产品(%)',
                crudeoil: '原油(%)',
                gasoline: '汽油(%)',
                kerosene: '煤油(%)',
                diesel: '柴油(%)',
                fueloil: '燃料油(%)',
                naphtha: '石脑油(%)',
                lubricatingoil: '润滑油(%)',
                paraffin: '石蜡(%)',
                solventoil: '溶剂油(%)',
                asphalt: '石油沥青(%)',
                oilcoke: '石油焦(%)',
                liquefiedpetroleumgas: '液化石油气(%)',
                refinerydrygas: '炼厂干气(%)',
                otherpetroleumproducts: '其他石油制品(%)',
                naturalgas: '天然气(%)',
                liquifiednaturalgas: '液化天然气(%)',
                other: '其他(%)',
                catelogId: '0',
                tffId: '0',
              });

            } else if(i==9 ){

              _a.push({
                key: i,
                name:'数据项',
                anthracite: '无烟煤(万吨)',
                bituminouscoal: '烟煤(万吨)',
                lignite: '褐煤(万吨)',
                washthecleancoal: '洗精煤(万吨)',
                othercoalwashing: '其他洗煤(万吨)',
                briquette: '型煤(万吨)',
                coalgangue: '煤矸石(万吨)',
                coke: '焦炭(万吨)',
                cokeovengas: '焦炉煤气(万吨)',
                blastfurnacegas: '高炉煤气(万吨)',
                onvertergas: '转炉煤气(万吨)',
                othergas: '其他煤气(万吨)',
                othercokingproducts: '其他焦化产品(万吨)',
                crudeoil: '原油(万吨)',
                gasoline: '汽油(万吨)',
                kerosene: '煤油(万吨)',
                diesel: '柴油(万吨)',
                fueloil: '燃料油(万吨)',
                naphtha: '石脑油(万吨)',
                lubricatingoil: '润滑油(万吨)',
                paraffin: '石蜡(万吨)',
                solventoil: '溶剂油(万吨)',
                asphalt: '石油沥青(万吨)',
                oilcoke: '石油焦(万吨)',
                liquefiedpetroleumgas: '液化石油气(万吨)',
                refinerydrygas: '炼厂干气(万吨)',
                otherpetroleumproducts: '其他石油制品(万吨)',
                naturalgas: '天然气(万吨)',
                liquifiednaturalgas: '液化天然气(万吨)',
                other: '其他(万吨)',
                catelogId: '0',
                tffId: '0',
              });

            }else{

              _a.push({
                key: i,
                name:fossilTitle[i],
                anthracite: _Data[i].anthracite,
                asphalt: _Data[i].asphalt,
                bituminouscoal: _Data[i].bituminouscoal,
                blastfurnacegas: _Data[i].blastfurnacegas,
                briquette: _Data[i].briquette,
                catelogId: _Data[i].catelogId,
                coalgangue: _Data[i].coalgangue,
                coke: _Data[i].coke,
                cokeovengas: _Data[i].cokeovengas,
                crudeoil: _Data[i].crudeoil,
                diesel: _Data[i].diesel,
                fueloil: _Data[i].fueloil,
                gasoline: _Data[i].gasoline,
                kerosene: _Data[i].kerosene,
                lignite: _Data[i].lignite,
                liquefiedpetroleumgas: _Data[i].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i].liquifiednaturalgas,
                lubricatingoil: _Data[i].lubricatingoil,
                naphtha: _Data[i].naphtha,
                naturalgas: _Data[i].naturalgas,
                oilcoke: _Data[i].oilcoke,
                onvertergas: _Data[i].onvertergas,
                other: _Data[i].other,
                othercoalwashing: _Data[i].othercoalwashing,
                othercokingproducts: _Data[i].othercokingproducts,
                othergas: _Data[i].othergas,
                otherpetroleumproducts: _Data[i].otherpetroleumproducts,
                paraffin: _Data[i].paraffin,
                refinerydrygas: _Data[i].refinerydrygas,
                solventoil: _Data[i].solventoil,
                tffId: _Data[i].tffId,
                washthecleancoal: _Data[i].washthecleancoal,

              });

            }


          }



          console.log(_a);

          const _b = [];


          for(var i = 0 ; i<_a.length;i++){
            _b.push({
                key:_a[i].key,
                name:{

                  value:_a[i].name ,
                },
                anthracite:{
                  editable: false,
                  value:_a[i].anthracite ,
                },
                asphalt: {
                  editable: false,
                  value:_a[i].asphalt ,
                },
                bituminouscoal: {
                  editable: false,
                  value:_a[i].bituminouscoal ,
                },
                blastfurnacegas: {
                  editable: false,
                  value:_a[i].blastfurnacegas ,
                },
                briquette: {
                  editable: false,
                  value:_a[i].briquette ,
                },
                catelogId: {
                  editable: false,
                  value:_a[i].catelogId ,
                },
                coalgangue: {
                  editable: false,
                  value:_a[i].coalgangue ,
                },
                coke: {
                  editable: false,
                  value:_a[i].coke ,
                },
                cokeovengas: {
                  editable: false,
                  value:_a[i].cokeovengas,
                },
                crudeoil: {
                  editable: false,
                  value:_a[i].crudeoil ,
                },
                diesel: {
                  editable: false,
                  value:_a[i].diesel,
                },
                fueloil: {
                  editable: false,
                  value:_a[i].fueloil ,
                },
                gasoline: {
                  editable: false,
                  value:_a[i].gasoline ,
                },
                kerosene: {
                  editable: false,
                  value:_a[i].kerosene,
                },
                lignite: {
                  editable: false,
                  value:_a[i].lignite ,
                },
                liquefiedpetroleumgas: {
                  editable: false,
                  value:_a[i].liquefiedpetroleumgas ,
                },
                liquifiednaturalgas: {
                  editable: false,
                  value:_a[i].liquifiednaturalgas ,
                },
                lubricatingoil: {
                  editable: false,
                  value:_a[i].lubricatingoil ,
                },
                naphtha: {
                  editable: false,
                  value:_a[i].naphtha ,
                },
                naturalgas: {
                  editable: false,
                  value:_a[i].naturalgas ,
                },
                oilcoke: {
                  editable: false,
                  value:_a[i].oilcoke ,
                },
                onvertergas: {
                  editable: false,
                  value:_a[i].onvertergas ,
                },
                other: {
                  editable: false,
                  value:_a[i].other,
                },
                othercoalwashing: {
                  editable: false,
                  value:_a[i].othercoalwashing ,
                },
                othercokingproducts: {
                  editable: false,
                  value:_a[i].othercokingproducts ,
                },
                othergas: {
                  editable: false,
                  value:_a[i].othergas ,
                },
                otherpetroleumproducts: {
                  editable: false,
                  value:_a[i].otherpetroleumproducts ,
                },
                paraffin: {
                  editable: false,
                  value:_a[i].paraffin ,
                },
                refinerydrygas: {
                  editable: false,
                  value:_a[i].refinerydrygas ,
                },
                solventoil: {
                  editable: false,
                  value:_a[i].solventoil ,
                },
                tffId: {
                  editable: false,
                  value:_a[i].tffId ,
                },
                washthecleancoal: {
                  editable: false,
                  value:_a[i].washthecleancoal ,
                },

              }
            )
          }

          console.log(_b);


          this.setState({data1:_b});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //co2排放量-非能源利用update
  updateCo2(index,data1,a){

    var data  = data1

    const Directory = [
      'nonEnergyUse',
      '',
      'averageLowCalorificValue',
      '',
      'unitCalorificValueCarbonContent',
      '',
      'carbonContent',
      '',
      'carbonOxidationRate',
      '',
      'emissions',



    ]

    var DirectoryIndex = Directory[index];

     var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/nonEnergyUseEmissions/update'
     var bodyName = 'nonEnergyUseEmissions'






    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]={
      "naturalgas":data[index].naturalgas.value,
      "diesel":data[index].diesel.value,
      "other":data[index].other.value,
      "othercoalwashing":data[index].othercoalwashing.value,
      "briquette":data[index].briquette.value,
      "paraffin":data[index].paraffin.value,
      "catelogId":data[index].catelogId.value,
      "gasoline":data[index].gasoline.value,
      "solventoil":data[index].solventoil.value,
      "washthecleancoal":data[index].washthecleancoal.value,
      "othercokingproducts":data[index].othercokingproducts.value,
      "refinerydrygas":data[index].refinerydrygas.value,
      "lignite":data[index].lignite.value,
      "liquefiedpetroleumgas":data[index].liquefiedpetroleumgas.value,
      "otherpetroleumproducts":data[index].otherpetroleumproducts.value,
      "lubricatingoil":data[index].lubricatingoil.value,
      "bituminouscoal":data[index].bituminouscoal.value,
      "coke":data[index].coke.value,
      "coalgangue":data[index].coalgangue.value,
      "liquifiednaturalgas":data[index].liquifiednaturalgas.value,
      "onvertergas":data[index].onvertergas.value,
      "asphalt":data[index].asphalt.value,
      "naphtha":data[index].naphtha.value,
      "kerosene":data[index].kerosene.value,
      "cokeovengas":data[index].cokeovengas.value,
      "blastfurnacegas":data[index].blastfurnacegas.value,
      "othergas":data[index].othergas.value,
      "fueloil":data[index].fueloil.value,
      "crudeoil":data[index].crudeoil.value,
      "oilcoke":data[index].oilcoke.value,
      "tffId":data[index].tffId.value,
      "anthracite":data[index].anthracite.value}

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);

        } else {
          message.error(res.message);
        }
      });
  }




  //1.1
  query(para,years){

    post('/activityLevelDataEntry/energyActivity//totalFossilFuels/co2/statisticalByDept/energyProductionAndProcessingConversion/list', {
      year:years,
      para:para

    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data;


          const _Data = []


          _Data.push(Alldata.cEPowerGenerationBoilers);//1.1.1.1发电锅炉
          _Data.push(Alldata.cEIndustrialBoilers); //1.1.1.2工业锅炉
          _Data.push(Alldata.cEOtherEquipment);//1.1.1.3其他设备

          _Data.push(Alldata.oAPowerGenerationBoilers);//1.1.2.1发电锅炉
          _Data.push(Alldata.oAIndustrialBoilers);//1.1.2.2工业锅炉
          _Data.push(Alldata.oAOtherEquipment);//1.1.2.3其他设备

          _Data.push(Alldata.sFPowerGenerationBoilers);//1.1.3.1发电锅炉
          _Data.push(Alldata.sFIndustrialBoilers);//1.1.3.2工业锅炉
          _Data.push(Alldata.sFOtherEquipment);//1.1.3.3其他设备


          var _A = []

          for(var i = 0 ;i<Alldata.sFPowerGenerationBoilers.length;i++){
            _A.push(Alldata.sFPowerGenerationBoilers.anthracite+Alldata.sFIndustrialBoilers.anthracite+Alldata.sFOtherEquipment.anthracite)
            _A.push(Alldata.sFPowerGenerationBoilers.asphalt+Alldata.sFIndustrialBoilers.asphalt+Alldata.sFOtherEquipment.asphalt)
            _A.push(Alldata.sFPowerGenerationBoilers.bituminouscoal+Alldata.sFIndustrialBoilers.bituminouscoal+Alldata.sFOtherEquipment.bituminouscoal)
            _A.push(Alldata.sFPowerGenerationBoilers.blastfurnacegas+Alldata.sFIndustrialBoilers.blastfurnacegas+Alldata.sFOtherEquipment.blastfurnacegas)
          }

          this.setState({Data1:Alldata});



          const fossilTitle = [

            '1.化石燃料合计',
            '　　1.1能源生产与加工转换',
            '　　　　1.1.1公用电力与热力部门',
            '　　　　　　1.1.1.1发电锅炉',
            '　　　　　　1.1.1.2工业锅炉',
            '　　　　　　1.1.1.3其他设备',
            '　　　　1.1.2石油天然气开采与加工业',
            '　　　　　　1.1.2.1发电锅炉',
            '　　　　　　1.1.2.2工业锅炉',
            '　　　　　　1.1.2.3其他设备',
            '　　　　1.1.3固体燃料和其他能源工业',
            '　　　　　　1.1.3.1发电锅炉',
            '　　　　　　1.1.3.2工业锅炉',
            '　　　　　　1.1.3.3其他设备',
            '　　1.2工业和建筑业',
            '　　　　1.2.1钢铁',
            '　　　　　　1.2.1.1发电锅炉',
            '　　　　　　1.2.1.2工业锅炉',
            '　　　　　　1.2.1.3高炉',
            '　　　　　　1.2.1.4其他设备',
            '　　　　1.2.2有色金属',
            '　　　　　　1.2.2.1发电锅炉',
            '　　　　　　1.2.2.2工业锅炉',
            '　　　　　　1.2.2.3氧化铝回转窑',
            '　　　　　　1.2.2.4其他设备',
            '　　　　1.2.3化工',
            '　　　　　　1.2.3.1发电锅炉',
            '　　　　　　1.2.3.2工业锅炉',
            '　　　　　　1.2.3.3合成氨造气炉',
            '　　　　　　1.2.3.4其他设备',
            '　　　　1.2.4建材',
            '　　　　　　1.2.4.1发电锅炉',
            '　　　　　　1.2.4.2工业锅炉',
            '　　　　　　1.2.4.3水泥回转窑',
            '　　　　　　1.2.4.4水泥立窑',
            '　　　　　　1.2.4.5其他设备',
            '　　　　1.2.5其他工业部门',
            '　　　　　　1.2.5.1其他工业部门',
            '　　　　　　　　1.2.5.1.1设备1',
            '　　　　　　　　1.2.5.1.2设备2',
            '　　　　　　　　1.2.5.1.3设备3',
            '　　　　　　1.2.5.2其他工业部门',
            '　　　　　　　　1.2.5.2.1设备1',
            '　　　　　　　　1.2.5.2.2设备2',
            '　　　　　　　　1.2.5.2.3设备3',
            '　　　　　　1.2.5.3其他工业部门',
            '　　　　　　　　1.2.5.3.1设备1',
            '　　　　　　　　1.2.5.3.2设备2',
            '　　　　　　　　1.2.5.3.3设备3',
            '　　　　 1.2.6建筑业',
            '　　　　　　1.2.6.1发电锅炉',
            '　　　　　　1.2.6.2工业锅炉',
            '　　　　　　1.2.6.3其他设备',
            '　　1.3交通运输',
            '　　　　1.3.1航空',
            '　　　　　　1.3.1.1国内航班',
            '　　　　　　1.3.1.2港澳地区航班',
            '　　　　　　1.3.1.3国际航班',
            '　　　　1.3.2公路',
            '　　　　1.3.3铁路',
            '　　　　1.3.4水运',
            '　　　　　　1.3.4.1内河近海内燃机',
            '　　　　　　1.3.4.2国际远洋内燃机',
            '　　1.4服务业及其他',
            '　　1.5居民生活',
            '　　1.6农、林、牧、渔业',

          ]

          const data = [];

          for(var i = 0 ;i<14;i++){

            if(i==0 || i==1 || i==2 || i==6 ){
              data.push({
                key: i,
                name:fossilTitle[i],
                anthracite: '0',
                asphalt: '0',
                bituminouscoal: '0',
                blastfurnacegas: '0',
                briquette: '0',
                catelogId: '0',
                coalgangue: '0',
                coke: '0',
                cokeovengas: '0',
                crudeoil: '0',
                diesel: '0',
                fueloil: '0',
                gasoline: '0',
                kerosene: '0',
                lignite: '0',
                liquefiedpetroleumgas: '0',
                liquifiednaturalgas: '0',
                lubricatingoil: '0',
                naphtha: '0',
                naturalgas: '0',
                oilcoke: '0',
                onvertergas: '0',
                other: '0',
                othercoalwashing: '0',
                othercokingproducts: '0',
                othergas: '0',
                otherpetroleumproducts: '0',
                paraffin: '0',
                refinerydrygas: '0',
                solventoil: '0',
                tffId: '0',
                washthecleancoal: '0',

              });
            }else if(i==10){

              data.push({
                key: i,
                name:fossilTitle[i],
                anthracite: '0',
                asphalt: '0',
                bituminouscoal: '0',
                blastfurnacegas: '0',

                briquette: '0',
                catelogId: '0',
                coalgangue: '0',
                coke: '0',
                cokeovengas: '0',
                crudeoil: '0',
                diesel: '0',
                fueloil: '0',
                gasoline: '0',
                kerosene: '0',
                lignite: '0',
                liquefiedpetroleumgas: '0',
                liquifiednaturalgas: '0',
                lubricatingoil: '0',
                naphtha: '0',
                naturalgas: '0',
                oilcoke: '0',
                onvertergas: '0',
                other: '0',
                othercoalwashing: '0',
                othercokingproducts: '0',
                othergas: '0',
                otherpetroleumproducts: '0',
                paraffin: '0',
                refinerydrygas: '0',
                solventoil: '0',
                tffId: '0',
                washthecleancoal: '0',

              });

            }else if(i>6 && i<10) {

              var j = 4
              data.push({
                key: i,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            } else if(i>10){
              var j = 5;

              data.push({
                key: i,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            }else{


              var j = 3
              data.push({
                key: i,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            }



          }

          //console.log(data);





          this.query2(data,para,years);

        } else {
          message.error('数据错误！');
        }
      });
  }

  //1.2
  query2(data,para,years){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/industryAndConstruction/list', {
      year:years,
      para:para

    })
      .then((res) => {


        if (res.code==0) {

          var Alldata =res.data;

          const _a = data;

          const _Data = [];

          _Data.push(Alldata.sPowerGenerationBoilers);//1.2.1.1发电锅炉
          _Data.push(Alldata.sIndustrialBoilers);//1.2.1.2工业锅炉
          _Data.push(Alldata.sBlastFurnace);//1.2.1.3高炉
          _Data.push(Alldata.sotherEquipment);//1.2.1.4其他设备

          _Data.push(Alldata.nMPowerGenerationBoilers);//1.2.2.1发电锅炉
          _Data.push(Alldata.nMIndustrialBoilers);//1.2.2.2工业锅炉
          _Data.push(Alldata.nMAluminaRotaryKiln);//1.2.2.3氧化铝回转窑
          _Data.push(Alldata.nMOtherEquipment);//1.2.2.4其他设备

          _Data.push(Alldata.cMPowerGenerationBoilers);//1.2.3.1发电锅炉
          _Data.push(Alldata.cMIndustrialBoilers);//1.2.3.2工业锅炉
          _Data.push(Alldata.cMSyntheticAmmoniaGasFurnace);//1.2.3.3合成氨造气炉
          _Data.push(Alldata.cMotherEquipment);//1.2.3.4其他设备

          _Data.push(Alldata.bMPowerGenerationBoilers);//1.2.4.1发电锅炉
          _Data.push(Alldata.bMIndustrialBoilers);//1.2.4.2工业锅炉
          _Data.push(Alldata.bMCementRotaryKiln);//1.2.4.3水泥回转窑
          _Data.push(Alldata.bMCementShaftKiln);//1.2.4.4水泥立窑
          _Data.push(Alldata.bMOtherEquipment);//1.2.4.5其他设备


          _Data.push(Alldata.aEquipment1);//1.2.5.1.1设备1
          _Data.push(Alldata.aEquipment2);//1.2.5.1.1设备2
          _Data.push(Alldata.aEquipment3);//1.2.5.1.1设备3

          _Data.push(Alldata.bEquipment1);//1.2.5.2.1设备1
          _Data.push(Alldata.bEquipment2);//1.2.5.2.2设备2
          _Data.push(Alldata.bEquipment3);//1.2.5.2.3设备3

          _Data.push(Alldata.cEquipment1);//1.2.5.3.1设备1
          _Data.push(Alldata.cEquipment2);//1.2.5.3.2设备2
          _Data.push(Alldata.cEquipment3);//1.2.5.3.3设备3

          _Data.push(Alldata.cIPowerGenerationBoilers);//1.2.6.1发电锅炉
          _Data.push(Alldata.cIIndustrialBoilers);//1.2.6.2工业锅炉
          _Data.push(Alldata.cIOtherEquipment);//1.2.6.3其他设备


          const fossilTitle = [

            '　　1.2工业和建筑业',
            '　　　　1.2.1钢铁',
            '　　　　　　1.2.1.1发电锅炉',
            '　　　　　　1.2.1.2工业锅炉',
            '　　　　　　1.2.1.3高炉',
            '　　　　　　1.2.1.4其他设备',
            '　　　　1.2.2有色金属',
            '　　　　　　1.2.2.1发电锅炉',
            '　　　　　　1.2.2.2工业锅炉',
            '　　　　　　1.2.2.3氧化铝回转窑',
            '　　　　　　1.2.2.4其他设备',
            '　　　　1.2.3化工',
            '　　　　　　1.2.3.1发电锅炉',
            '　　　　　　1.2.3.2工业锅炉',
            '　　　　　　1.2.3.3合成氨造气炉',
            '　　　　　　1.2.3.4其他设备',
            '　　　　1.2.4建材',
            '　　　　　　1.2.4.1发电锅炉',
            '　　　　　　1.2.4.2工业锅炉',
            '　　　　　　1.2.4.3水泥回转窑',
            '　　　　　　1.2.4.4水泥立窑',
            '　　　　　　1.2.4.5其他设备',
            '　　　　1.2.5其他工业部门',
            '　　　　　　1.2.5.1其他工业部门',
            '　　　　　　　　1.2.5.1.1设备1',
            '　　　　　　　　1.2.5.1.2设备2',
            '　　　　　　　　1.2.5.1.3设备3',
            '　　　　　　1.2.5.2其他工业部门',
            '　　　　　　　　1.2.5.2.1设备1',
            '　　　　　　　　1.2.5.2.2设备2',
            '　　　　　　　　1.2.5.2.3设备3',
            '　　　　　　1.2.5.3其他工业部门',
            '　　　　　　　　1.2.5.3.1设备1',
            '　　　　　　　　1.2.5.3.2设备2',
            '　　　　　　　　1.2.5.3.3设备3',
            '　　　　 1.2.6建筑业',
            '　　　　　　1.2.6.1发电锅炉',
            '　　　　　　1.2.6.2工业锅炉',
            '　　　　　　1.2.6.3其他设备',
            '　　1.3交通运输',
            '　　　　1.3.1航空',
            '　　　　　　1.3.1.1国内航班',
            '　　　　　　1.3.1.2港澳地区航班',
            '　　　　　　1.3.1.3国际航班',
            '　　　　1.3.2公路',
            '　　　　1.3.3铁路',
            '　　　　1.3.4水运',
            '　　　　　　1.3.4.1内河近海内燃机',
            '　　　　　　1.3.4.2国际远洋内燃机',
            '　　1.4服务业及其他',
            '　　1.5居民生活',
            '　　1.6农、林、牧、渔业',

          ]



          for(var i = 0 ;i<39;i++){

            if(i==0 || i==1 || i==6 || i==11 || i==16  || i==22 || i==23 || i==27 || i==31 || i==35 || i==39 ){
              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: '0',
                asphalt: '0',
                bituminouscoal: '0',
                blastfurnacegas: '0',
                briquette: '0',
                catelogId: '0',
                coalgangue: '0',
                coke: '0',
                cokeovengas: '0',
                crudeoil: '0',
                diesel: '0',
                fueloil: '0',
                gasoline: '0',
                kerosene: '0',
                lignite: '0',
                liquefiedpetroleumgas: '0',
                liquifiednaturalgas: '0',
                lubricatingoil: '0',
                naphtha: '0',
                naturalgas: '0',
                oilcoke: '0',
                onvertergas: '0',
                other: '0',
                othercoalwashing: '0',
                othercokingproducts: '0',
                othergas: '0',
                otherpetroleumproducts: '0',
                paraffin: '0',
                refinerydrygas: '0',
                solventoil: '0',
                tffId: '0',
                washthecleancoal: '0',

              });
            }else if(i>6 && i<11) {
              var j = 3
              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            } else if(i>11 && i<16){
              var j = 4

              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            } else if(i>16 && i<22){
              var j = 5

              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            } else if(i>23 && i<27){
              var j =7

              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            } else if(i>27 && i<31){
              var j = 8

              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            } else if(i>31 && i<35){
              var j = 9

              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            } else if(i>35 && i<39){
              var j = 10

              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });



            }else{

              var j =2

              _a.push({
                key: i+14,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            }


          }

          //console.log(_a)

          this.setState({Data2:Alldata});



          this.query3(_a,para,years);

        } else {
          message.error('数据错误！');
        }
      });
  }

  //1.3
  query3(data,para,years){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/transportation/list', {
      year:years,
      para:para

    })
      .then((res) => {


        if (res.code==0) {

          var Alldata =res.data;


          const _a = data;

          const _Data = [];


          _Data.push(Alldata.tDomesticFlights);//1.3.1.1国内航班
          _Data.push(Alldata.tHongKongAndMacaoFlights);//1.3.1.2港澳地区航班
          _Data.push(Alldata.tInternationalFlights);//1.3.1.3国际航班

          _Data.push(Alldata.highway);//1.3.2公路
          _Data.push(Alldata.railway);//1.3.3铁路

          _Data.push(Alldata.inlandRiverInternalCombustionEngine);//1.3.4.1内河近海内燃机
          _Data.push(Alldata.internationalOceanInternalCombustionEngine);//1.3.4.2国际远洋内燃机




          const fossilTitle = [

            '　　1.3交通运输',
            '　　　　1.3.1航空',
            '　　　　　　1.3.1.1国内航班',
            '　　　　　　1.3.1.2港澳地区航班',
            '　　　　　　1.3.1.3国际航班',
            '　　　　1.3.2公路',
            '　　　　1.3.3铁路',
            '　　　　1.3.4水运',
            '　　　　　　1.3.4.1内河近海内燃机',
            '　　　　　　1.3.4.2国际远洋内燃机',
            '　　1.4服务业及其他',
            '　　1.5居民生活',
            '　　1.6农、林、牧、渔业',

          ]



          for(var i = 0 ;i<10;i++){

            if(i==0 || i==1 || i==7 ){
              _a.push({
                key: i+53,
                name:fossilTitle[i],
                anthracite: '0',
                asphalt: '0',
                bituminouscoal: '0',
                blastfurnacegas: '0',
                briquette: '0',
                catelogId: '0',
                coalgangue: '0',
                coke: '0',
                cokeovengas: '0',
                crudeoil: '0',
                diesel: '0',
                fueloil: '0',
                gasoline: '0',
                kerosene: '0',
                lignite: '0',
                liquefiedpetroleumgas: '0',
                liquifiednaturalgas: '0',
                lubricatingoil: '0',
                naphtha: '0',
                naturalgas: '0',
                oilcoke: '0',
                onvertergas: '0',
                other: '0',
                othercoalwashing: '0',
                othercokingproducts: '0',
                othergas: '0',
                otherpetroleumproducts: '0',
                paraffin: '0',
                refinerydrygas: '0',
                solventoil: '0',
                tffId: '0',
                washthecleancoal: '0',

              });
            }else if(i>7) {
              var j = 3
              _a.push({
                key: i+53,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            }else{

              var j =2

              _a.push({
                key: i+53,
                name:fossilTitle[i],
                anthracite: _Data[i-j].anthracite,
                asphalt: _Data[i-j].asphalt,
                bituminouscoal: _Data[i-j].bituminouscoal,
                blastfurnacegas: _Data[i-j].blastfurnacegas,
                briquette: _Data[i-j].briquette,
                catelogId: _Data[i-j].catelogId,
                coalgangue: _Data[i-j].coalgangue,
                coke: _Data[i-j].coke,
                cokeovengas: _Data[i-j].cokeovengas,
                crudeoil: _Data[i-j].crudeoil,
                diesel: _Data[i-j].diesel,
                fueloil: _Data[i-j].fueloil,
                gasoline: _Data[i-j].gasoline,
                kerosene: _Data[i-j].kerosene,
                lignite: _Data[i-j].lignite,
                liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
                liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
                lubricatingoil: _Data[i-j].lubricatingoil,
                naphtha: _Data[i-j].naphtha,
                naturalgas: _Data[i-j].naturalgas,
                oilcoke: _Data[i-j].oilcoke,
                onvertergas: _Data[i-j].onvertergas,
                other: _Data[i-j].other,
                othercoalwashing: _Data[i-j].othercoalwashing,
                othercokingproducts: _Data[i-j].othercokingproducts,
                othergas: _Data[i-j].othergas,
                otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
                paraffin: _Data[i-j].paraffin,
                refinerydrygas: _Data[i-j].refinerydrygas,
                solventoil: _Data[i-j].solventoil,
                tffId: _Data[i-j].tffId,
                washthecleancoal: _Data[i-j].washthecleancoal,

              });

            }


          }

          //console.log(_a);


          this.setState({Data3:Alldata});



          this.query4(_a,para,years);

        } else {
          message.error('数据错误！');
        }
      });
  }

  //1.4
  query4(data,para,years){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/servicesAndOthers/list', {
      year:years,
      para:para

    })
      .then((res) => {


        if (res.code==0) {

          var Alldata =res.data;

          const _a = data;

          const _Data = [];

          _Data.push(Alldata.servicesAndOthers);//1.4服务业及其他




          const fossilTitle = [


            '　　1.4服务业及其他',
            '　　1.5居民生活',
            '　　1.6农、林、牧、渔业',

          ]



          for(var i = 0 ;i<1;i++){



            var j =0

            _a.push({
              key: i+63,
              name:fossilTitle[i],
              anthracite: _Data[i-j].anthracite,
              asphalt: _Data[i-j].asphalt,
              bituminouscoal: _Data[i-j].bituminouscoal,
              blastfurnacegas: _Data[i-j].blastfurnacegas,
              briquette: _Data[i-j].briquette,
              catelogId: _Data[i-j].catelogId,
              coalgangue: _Data[i-j].coalgangue,
              coke: _Data[i-j].coke,
              cokeovengas: _Data[i-j].cokeovengas,
              crudeoil: _Data[i-j].crudeoil,
              diesel: _Data[i-j].diesel,
              fueloil: _Data[i-j].fueloil,
              gasoline: _Data[i-j].gasoline,
              kerosene: _Data[i-j].kerosene,
              lignite: _Data[i-j].lignite,
              liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
              liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
              lubricatingoil: _Data[i-j].lubricatingoil,
              naphtha: _Data[i-j].naphtha,
              naturalgas: _Data[i-j].naturalgas,
              oilcoke: _Data[i-j].oilcoke,
              onvertergas: _Data[i-j].onvertergas,
              other: _Data[i-j].other,
              othercoalwashing: _Data[i-j].othercoalwashing,
              othercokingproducts: _Data[i-j].othercokingproducts,
              othergas: _Data[i-j].othergas,
              otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
              paraffin: _Data[i-j].paraffin,
              refinerydrygas: _Data[i-j].refinerydrygas,
              solventoil: _Data[i-j].solventoil,
              tffId: _Data[i-j].tffId,
              washthecleancoal: _Data[i-j].washthecleancoal,

            });


          }

          //console.log(_a);

          this.setState({AllData:_a});

          this.setState({Data4:Alldata})

          this.query5(_a,para,years);

        } else {
          message.error('数据错误！');
        }
      });
  }

  //1.5
  query5(data,para,years){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/residentsLiving/list', {
      year:years,
      para:para

    })
      .then((res) => {


        if (res.code==0) {

          var Alldata =res.data;


          const _a = data;

          const _Data = [];

          _Data.push(Alldata.residentsLiving);//1.5居民生活




          const fossilTitle = [


            '　　1.5居民生活',
            '　　1.6农、林、牧、渔业',

          ]



          for(var i = 0 ;i<1;i++){



            var j =0

            _a.push({
              key: i+64,
              name:fossilTitle[i],
              anthracite: _Data[i-j].anthracite,
              asphalt: _Data[i-j].asphalt,
              bituminouscoal: _Data[i-j].bituminouscoal,
              blastfurnacegas: _Data[i-j].blastfurnacegas,
              briquette: _Data[i-j].briquette,
              catelogId: _Data[i-j].catelogId,
              coalgangue: _Data[i-j].coalgangue,
              coke: _Data[i-j].coke,
              cokeovengas: _Data[i-j].cokeovengas,
              crudeoil: _Data[i-j].crudeoil,
              diesel: _Data[i-j].diesel,
              fueloil: _Data[i-j].fueloil,
              gasoline: _Data[i-j].gasoline,
              kerosene: _Data[i-j].kerosene,
              lignite: _Data[i-j].lignite,
              liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
              liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
              lubricatingoil: _Data[i-j].lubricatingoil,
              naphtha: _Data[i-j].naphtha,
              naturalgas: _Data[i-j].naturalgas,
              oilcoke: _Data[i-j].oilcoke,
              onvertergas: _Data[i-j].onvertergas,
              other: _Data[i-j].other,
              othercoalwashing: _Data[i-j].othercoalwashing,
              othercokingproducts: _Data[i-j].othercokingproducts,
              othergas: _Data[i-j].othergas,
              otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
              paraffin: _Data[i-j].paraffin,
              refinerydrygas: _Data[i-j].refinerydrygas,
              solventoil: _Data[i-j].solventoil,
              tffId: _Data[i-j].tffId,
              washthecleancoal: _Data[i-j].washthecleancoal,

            });


          }

          //console.log(_a);

          this.setState({AllData:_a});

          this.setState({Data5:Alldata})

          this.query6(_a,para,years);

        } else {
          message.error('数据错误！');
        }
      });
  }

  //1.6
  query6(data,para,years){


    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/agricultureForestryAnimalHusbandryAndFishery/list', {
      year:years,
      para:para

    })
      .then((res) => {


        if (res.code==0) {

          var Alldata =res.data;

          const _a = data;

          const _Data = [];

          _Data.push(Alldata.agricultureForestryAnimalHusbandryAndFishery);//1.6农、林、牧、渔业




          const fossilTitle = [


            '　　1.6农、林、牧、渔业',

          ]



          for(var i = 0 ;i<1;i++){



            var j =0

            _a.push({
              key: i+65,
              name:fossilTitle[i],
              anthracite: _Data[i-j].anthracite,
              asphalt: _Data[i-j].asphalt,
              bituminouscoal: _Data[i-j].bituminouscoal,
              blastfurnacegas: _Data[i-j].blastfurnacegas,
              briquette: _Data[i-j].briquette,
              catelogId: _Data[i-j].catelogId,
              coalgangue: _Data[i-j].coalgangue,
              coke: _Data[i-j].coke,
              cokeovengas: _Data[i-j].cokeovengas,
              crudeoil: _Data[i-j].crudeoil,
              diesel: _Data[i-j].diesel,
              fueloil: _Data[i-j].fueloil,
              gasoline: _Data[i-j].gasoline,
              kerosene: _Data[i-j].kerosene,
              lignite: _Data[i-j].lignite,
              liquefiedpetroleumgas: _Data[i-j].liquefiedpetroleumgas,
              liquifiednaturalgas: _Data[i-j].liquifiednaturalgas,
              lubricatingoil: _Data[i-j].lubricatingoil,
              naphtha: _Data[i-j].naphtha,
              naturalgas: _Data[i-j].naturalgas,
              oilcoke: _Data[i-j].oilcoke,
              onvertergas: _Data[i-j].onvertergas,
              other: _Data[i-j].other,
              othercoalwashing: _Data[i-j].othercoalwashing,
              othercokingproducts: _Data[i-j].othercokingproducts,
              othergas: _Data[i-j].othergas,
              otherpetroleumproducts: _Data[i-j].otherpetroleumproducts,
              paraffin: _Data[i-j].paraffin,
              refinerydrygas: _Data[i-j].refinerydrygas,
              solventoil: _Data[i-j].solventoil,
              tffId: _Data[i-j].tffId,
              washthecleancoal: _Data[i-j].washthecleancoal,

            });


          }

          const _b = [];


          for(var i = 0 ; i<_a.length;i++){
            _b.push({
                key:_a[i].key,
                name:{

                  value:_a[i].name ,
                },
                anthracite:{
                  editable: false,
                  value:_a[i].anthracite ,
                },
                asphalt: {
                  editable: false,
                  value:_a[i].asphalt ,
                },
                bituminouscoal: {
                  editable: false,
                  value:_a[i].bituminouscoal ,
                },
                blastfurnacegas: {
                  editable: false,
                  value:_a[i].blastfurnacegas ,
                },
                briquette: {
                  editable: false,
                  value:_a[i].briquette ,
                },
                catelogId: {
                  editable: false,
                  value:_a[i].catelogId ,
                },
                coalgangue: {
                  editable: false,
                  value:_a[i].coalgangue ,
                },
                coke: {
                  editable: false,
                  value:_a[i].coke ,
                },
                cokeovengas: {
                  editable: false,
                  value:_a[i].cokeovengas,
                },
                crudeoil: {
                  editable: false,
                  value:_a[i].crudeoil ,
                },
                diesel: {
                  editable: false,
                  value:_a[i].diesel,
                },
                fueloil: {
                  editable: false,
                  value:_a[i].fueloil ,
                },
                gasoline: {
                  editable: false,
                  value:_a[i].gasoline ,
                },
                kerosene: {
                  editable: false,
                  value:_a[i].kerosene,
                },
                lignite: {
                  editable: false,
                  value:_a[i].lignite ,
                },
                liquefiedpetroleumgas: {
                  editable: false,
                  value:_a[i].liquefiedpetroleumgas ,
                },
                liquifiednaturalgas: {
                  editable: false,
                  value:_a[i].liquifiednaturalgas ,
                },
                lubricatingoil: {
                  editable: false,
                  value:_a[i].lubricatingoil ,
                },
                naphtha: {
                  editable: false,
                  value:_a[i].naphtha ,
                },
                naturalgas: {
                  editable: false,
                  value:_a[i].naturalgas ,
                },
                oilcoke: {
                  editable: false,
                  value:_a[i].oilcoke ,
                },
                onvertergas: {
                  editable: false,
                  value:_a[i].onvertergas ,
                },
                other: {
                  editable: false,
                  value:_a[i].other,
                },
                othercoalwashing: {
                  editable: false,
                  value:_a[i].othercoalwashing ,
                },
                othercokingproducts: {
                  editable: false,
                  value:_a[i].othercokingproducts ,
                },
                othergas: {
                  editable: false,
                  value:_a[i].othergas ,
                },
                otherpetroleumproducts: {
                  editable: false,
                  value:_a[i].otherpetroleumproducts ,
                },
                paraffin: {
                  editable: false,
                  value:_a[i].paraffin ,
                },
                refinerydrygas: {
                  editable: false,
                  value:_a[i].refinerydrygas ,
                },
                solventoil: {
                  editable: false,
                  value:_a[i].solventoil ,
                },
                tffId: {
                  editable: false,
                  value:_a[i].tffId ,
                },
                washthecleancoal: {
                  editable: false,
                  value:_a[i].washthecleancoal ,
                },

              }
            )
          }


          this.setState({data:_b});

          /*    const dataSource = _b.map((item) => {
           const obj = {};
           Object.keys(item).forEach((key) => {
           obj[key] = key === 'key' ? item[key] : item[key].value;
           });
           return obj;
           });

           this.setState({dataSource:dataSource});*/


          //this.setState({AllData:_a});


          //this.setState({Data6:Alldata})
          this.setState({ loading: false});

        } else {
          message.error('数据错误！');
        }
      });
  }

  //1.1 更新
  update(index,data,j){



    const Directory = [
      '',
      '',
      '',
      'cEPowerGenerationBoilers',
      'cEIndustrialBoilers',
      'cEOtherEquipment',
      '',
      'oAPowerGenerationBoilers',
      'oAIndustrialBoilers',
      'oAOtherEquipment',
      '',
      'sFPowerGenerationBoilers',
      'sFIndustrialBoilers',
      'sFOtherEquipment',
      '',
      '',
      'sPowerGenerationBoilers',
      'sIndustrialBoilers',
      'sBlastFurnace',
      'sotherEquipment',
      '',
      'nMPowerGenerationBoilers',
      'nMIndustrialBoilers',
      'nMAluminaRotaryKiln',
      'nMOtherEquipment',
      '',
      'cMPowerGenerationBoilers',
      'cMIndustrialBoilers',
      'cMSyntheticAmmoniaGasFurnace',
      'cMotherEquipment',
      '',
      'bMPowerGenerationBoilers',
      'bMIndustrialBoilers',
      'bMCementRotaryKiln',
      'bMCementShaftKiln',
      'bMOtherEquipment',
      '',
      '',
      'aEquipment1',
      'aEquipment2',
      'aEquipment3',
      '',
      'bEquipment1',
      'bEquipment2',
      'bEquipment3',
      '',
      'cEquipment1',
      'cEquipment2',
      'cEquipment3',
      '',
      'cIPowerGenerationBoilers',
      'cIIndustrialBoilers',
      'cIOtherEquipment',
      '',
      '',
      'tDomesticFlights',
      'tHongKongAndMacaoFlights',
      'tInternationalFlights',
      'highway',
      'railway',
      '',
      'inlandRiverInternalCombustionEngine',
      'internationalOceanInternalCombustionEngine',
      'servicesAndOthers',
      'residentsLiving',
      'agricultureForestryAnimalHusbandryAndFishery',


    ]
    var url = [],bodyName = [];
    var DirectoryIndex = Directory[index];

    if(j==1){
      url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/energyProductionAndProcessingConversion/update'
      bodyName = 'energyProductionAndProcessingConversion'
    }else  if(j==2){
      url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/industryAndConstruction/update'
      bodyName = 'industryAndConstruction'
    }else  if(j==3){
      url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/transportation/update'
      bodyName = 'transportation'
    }else  if(j==4){
      url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/servicesAndOthers/update'
      bodyName = 'servicesAndOthers'
    }else  if(j==5){
      url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/residentsLiving/update'
      bodyName = 'residentsLiving'
    }else  if(j==6){
      url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/agricultureForestryAnimalHusbandryAndFishery/update'
      bodyName = 'agricultureForestryAnimalHusbandryAndFishery'
    }





    var obj={
      "para":this.state.breed,
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]={
      "naturalgas":data[index].naturalgas.value,
      "diesel":data[index].diesel.value,
      "other":data[index].other.value,
      "othercoalwashing":data[index].othercoalwashing.value,
      "briquette":data[index].briquette.value,
      "paraffin":data[index].paraffin.value,
      "catelogId":data[index].catelogId.value,
      "gasoline":data[index].gasoline.value,
      "solventoil":data[index].solventoil.value,
      "washthecleancoal":data[index].washthecleancoal.value,
      "othercokingproducts":data[index].othercokingproducts.value,
      "refinerydrygas":data[index].refinerydrygas.value,
      "lignite":data[index].lignite.value,
      "liquefiedpetroleumgas":data[index].liquefiedpetroleumgas.value,
      "otherpetroleumproducts":data[index].otherpetroleumproducts.value,
      "lubricatingoil":data[index].lubricatingoil.value,
      "bituminouscoal":data[index].bituminouscoal.value,
      "coke":data[index].coke.value,
      "coalgangue":data[index].coalgangue.value,
      "liquifiednaturalgas":data[index].liquifiednaturalgas.value,
      "onvertergas":data[index].onvertergas.value,
      "asphalt":data[index].asphalt.value,
      "naphtha":data[index].naphtha.value,
      "kerosene":data[index].kerosene.value,
      "cokeovengas":data[index].cokeovengas.value,
      "blastfurnacegas":data[index].blastfurnacegas.value,
      "othergas":data[index].othergas.value,
      "fueloil":data[index].fueloil.value,
      "crudeoil":data[index].crudeoil.value,
      "oilcoke":data[index].oilcoke.value,
      "tffId":data[index].tffId.value,
      "anthracite":data[index].anthracite.value}

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);

        } else {
          message.error(res.message);
        }
      });

  }



  //参数选择
  selesctYears(years,i,j,k,s){



    this.setState({ loading: true});
    this.setState({years:years});

    if(k=='a1'){
      this.setState({gas:k});

      $("#tjF").show();
      $("#pfF").hide();
      $("#ckff").show();
      $("#noCoTable").hide();
      $("#noCoTable1").hide();


      if(j=='b1'|| j=='b2' || j=='b3'){
        if(j=='b1'){

          if(i==0){
            this.setState({cs:'活动水平数据'});
            this.setState({csZs:''});
          }else if(i==1){
            this.setState({cs:'平均低位热值'});
            this.setState({csZs:''});
          }else if(i==2){
            this.setState({cs:'单位热值含碳量'});
            this.setState({csZs:''});
          }else if(i==3){
            this.setState({cs:'碳氧化率'});
            this.setState({csZs:'（若某燃料固碳率98%，在此表的数就填98%或0.98）'});
          }



          this.setState({statistics:j});
          this.query(i,years)
          $("#ckff").show();
          $("#bodyTable").show();
          $("#bodyTable1").hide();
          $("#bodyTable2").hide();
          this.setState({breed:i});


        }else if(j=='b2'){


          this.setState({statistics:j});
          $("#ckff").hide();
          $("#bodyTable").hide();
          $("#bodyTable1").show();
          $("#bodyTable2").hide();

          this.queryCo2(years)

        }else {
          this.setState({statistics:j});

          $("#ckff").hide();
          $("#bodyTable").hide();
          $("#bodyTable1").hide();
          $("#bodyTable2").show();

          this.queryMethod(years)
        }

      }


    }else{




      this.setState({gas:k});
      $("#tjF").hide();
      $("#pfF").show();
      $("#ckff").hide();
      $("#bodyTable").hide();
      $("#bodyTable1").hide();
      $("#bodyTable2").hide();


      if(s=='c1'){

        $("#noCoTable").show();
        $("#noCoTable1").hide();
        this.setState({discharge:s});

        this.queryHdNO2(years);
        this.queryRzNO2(years);
        this.queryYzNO2(years);


      }else{
        $("#noCoTable").hide();
        $("#noCoTable1").show();
        this.setState({discharge:s});

        this.queryHdCH4(years);
        this.queryRzCH4(years);
        this.queryYdYzCH4(years);
        this.queryYdYzN(years);

      }


    }





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

    //co2 1.1
    const { data1 } = this.state;
    const dataSource1 = data1.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    //co2 1.2
    const { data2 } = this.state;
    const dataSource2 = data2.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    //非co2 1.1
    const { data3 } = this.state;
    const dataSource3 = data3.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    //非co2 1.2
    const { data4 } = this.state;
    const dataSource4 = data4.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    //非co2 1.3
    const { data5 } = this.state;
    const dataSource5 = data5.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    //非co2 2.1
    const { data6 } = this.state;
    const dataSource6 = data6.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    //非co2 2.2
    const { data7 } = this.state;
    const dataSource7 = data7.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    //非co2 2.3
    const { data8 } = this.state;
    const dataSource8 = data8.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    //非co2 2.3
    const { data9 } = this.state;
    const dataSource9 = data9.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });

    const columns = this.columns;
    const columns2 = this.columns2;
    const columns3 = this.columns3;
    const columns4 = this.columns4;
    const columns5 = this.columns5;
    const columns6 = this.columns6;
    const columns7 = this.columns7;
    const columns8 = this.columns8;
    const columns9 = this.columns9;
    const columns10 = this.columns10;


    return (
      <div className={styles.normal}>
        <div className={styles.title}>
          <span className={styles.title_span}>化石燃料燃烧</span>
        </div>

        <div className={styles.select}>
          <div className={styles.targetChoose}>
            <span className={styles.selectH1}>数据年份:</span>
            <ul>
              <li id="li1" className={'2005'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('2005',this.state.breed,this.state.statistics,this.state.gas,this.state.discharge)}}>2005</li>
              <li id="li2" className={'2010'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('2010',this.state.breed,this.state.statistics,this.state.gas,this.state.discharge)}}>2010</li>
              <li id="li3" className={'2012'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('2012',this.state.breed,this.state.statistics,this.state.gas,this.state.discharge)}}>2012</li>
              <li id="li4" className={'2014'==this.state.years?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('2014',this.state.breed,this.state.statistics,this.state.gas,this.state.discharge)}}>2014</li>
            </ul>
          </div>

          <div className={styles.targetChoose}>
            <span className={styles.selectH1}>气体分类:</span>
            <ul>
              <li id="li5" className={'a1'==this.state.gas?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears(this.state.years,this.state.breed,this.state.statistics,'a1',this.state.discharge)}}>CO2排放量</li>
              <li id="li6" className={'a2'==this.state.gas?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears(this.state.years,this.state.breed,this.state.statistics,'a2',this.state.discharge)}}>非CO2排放量</li>
            </ul>
          </div>

          <div className={styles.targetChoose} id="tjF">
            <span className={styles.selectH1}>统计方法:</span>
            <ul>
              <li id="li7" className={'b1'==this.state.statistics?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears(this.state.years,this.state.breed,'b1',this.state.gas,this.state.discharge)}}>部门方法</li>
              <li id="li8" style={{width:150}} className={'b2'==this.state.statistics?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears(this.state.years,this.state.breed,'b2',this.state.gas,this.state.discharge)}}>非能源利用排放量</li>
              <li id="li8" className={'b3'==this.state.statistics?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears(this.state.years,this.state.breed,'b3',this.state.gas,this.state.discharge)}}>参考方法</li>
            </ul>
          </div>

          <div className={styles.targetChoose}  style={{display:'none'}} id="pfF" >
            <span className={styles.selectH1}>排放分类:</span>
            <ul>
              <li id="li7" style={{width:150}} className={'c1'==this.state.discharge?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears(this.state.years,this.state.breed,this.state.statistics,this.state.gas,'c1')}}>电站锅炉N2O排放</li>
              <li id="li8" style={{width:150}} className={'c2'==this.state.discharge?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears(this.state.years,this.state.breed,this.state.statistics,this.state.gas,'c2')}}>移动源CH4和N2O排放</li>
            </ul>
          </div>

          <div className={styles.targetChoose} id="ckff">
            <span className={styles.selectH1}>参&#x3000;&#x3000;数:</span>
            <ul>
              <li id="li9" className={'0'==this.state.breed?styles.li_focus:styles.eee}  onClick={()=>{this.selesctYears(this.state.years,'0',this.state.statistics,this.state.gas,this.state.discharge)}}>活动水平数据</li>
              <li id="li10" className={'1'==this.state.breed?styles.li_focus:styles.eee}  onClick={()=>{this.selesctYears(this.state.years,'1',this.state.statistics,this.state.gas,this.state.discharge)}}>平均低位热值</li>
              <li id="li11" className={'2'==this.state.breed?styles.li_focus:styles.eee}  onClick={()=>{this.selesctYears(this.state.years,'2',this.state.statistics,this.state.gas,this.state.discharge)}}>单位热值含碳量</li>
              <li id="li12" className={'3'==this.state.breed?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears(this.state.years,'3',this.state.statistics,this.state.gas,this.state.discharge)}}>碳氧化率</li>
            </ul>
            <span className={styles.selectH2}>(分部门分能源品种)</span>
          </div>

        </div>


        <div className={styles.entryBody} id="bodyTable">
          <p>{this.state.cs}<span className={styles.csZhushi}>{this.state.csZs}</span></p>
          <Spin spinning={this.state.loading} delay={500}>
          <Table  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 4000, y: 620 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
          </Spin>
        </div>


        <div className={styles.entryBody} id="bodyTable1" style={{display:'none'}}>
          <p>非能源利用排放量</p>
          <Spin spinning={this.state.loading} >
            <Table  pagination={false} bordered={true}  columns={columns2} dataSource={dataSource1} scroll={{ x: 5500, y: 820 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC1 }/>
          </Spin>
        </div>


        <div className={styles.entryBody} id="bodyTable2" style={{display:'none'}}>
          <p>活动水平数据</p>
          <Spin spinning={this.state.loading} >
            <Table  pagination={false} bordered={true}  columns={columns3} dataSource={dataSource2} scroll={{ x: 5500, y: 620 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
          </Spin>
        </div>


        <div id="noCoTable" style={{display:'none'}}>
          <Spin spinning={this.state.loading} >
        <div className={styles.entryBody} >
          <p>活动水平数据</p>
            <Table  pagination={false} bordered={true}  columns={columns4} dataSource={dataSource3} scroll={{ x: 5500, y: 620 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
        </div>

          <div className={styles.entryBody} >
            <p>平均低位热值</p>
              <Table  pagination={false} bordered={true}  columns={columns5} dataSource={dataSource4} scroll={{ x: 5500, y: 620 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
          </div>

            <div className={styles.entryBody} >
              <p>排放因子</p>
              <Table  pagination={false} bordered={true}  columns={columns6} dataSource={dataSource5} scroll={{ x: 800, y: 620 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
            </div>
        </Spin>
        </div>


        <div id="noCoTable1" style={{display:'none'}}>
          <Spin spinning={this.state.loading} >
            <div className={styles.entryBody} >
              <p>活动水平数据</p>
              <Table  pagination={false} bordered={true}  columns={columns7} dataSource={dataSource6} scroll={{ x: 2000, y: 620 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
            </div>

            <div className={styles.entryBody} >
              <p>平均低位热值</p>
              <Table  pagination={false} bordered={true}  columns={columns8} dataSource={dataSource7} scroll={{ x: 2000, y: 620 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
            </div>

            <div className={styles.entryBody} >
              <p>移动源CH4排放因子</p>
              <Table  pagination={false} bordered={true}  columns={columns9} dataSource={dataSource8} scroll={{ x: 2000, y: 620 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
            </div>


            <div className={styles.entryBody} >
              <p>移动源NO2排放因子</p>
              <Table  pagination={false} bordered={true}  columns={columns10} dataSource={dataSource9} scroll={{ x: 2000, y: 620 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
            </div>
          </Spin>
        </div>



      </div>
    );

  }
}


export default Form.create()(EditableTable);

