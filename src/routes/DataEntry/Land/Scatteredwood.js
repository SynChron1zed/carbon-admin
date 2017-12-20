/**
 * 散生木Created by dixu on 2017/11/13.
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
        title: '蓄积量（立方米）', dataIndex: 'volume', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'volume', text),
      }, {
        title: '蓄积量年均变化量(立方米/年)', dataIndex: 'volumeOfAnnualChangeInVolume', width: 150,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'volumeOfAnnualChangeInVolume', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 60,

        render: (text, record, index) => {

          const { editable } = this.state.data[index].volume;
          return (
            <div className={styles.editableOperations} >

              {
                index ==3 ? <span></span> :
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
        title: '基本木材密度SVD(吨干物质/立方米)', dataIndex: 'basicWoodDensitySVD', width: 100,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'basicWoodDensitySVD', text),
      }, {
        title: '生物量扩展因子BEF(地上/树干生物量)', dataIndex: 'biomassExpansionFactorBEF', width: 150,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'biomassExpansionFactorBEF', text),
      },
      {
        title: '根茎比RSR(地下/地上生物量)', dataIndex: 'rhizomeRatioRSR', width: 150,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'rhizomeRatioRSR', text),
      },
      {
        title: '生物量含碳率CF(吨碳/吨干物质)', dataIndex: 'biomassCarbonContentCF', width: 150,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'biomassCarbonContentCF', text),
      },
    ];

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
        title: '蓄积量（不确定性%）', dataIndex: 'volume', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'volume', text),
          props: {},

        };



          return obj},
      },{
        title: '蓄积量年均变化量(不确定性%）', dataIndex: 'volumeOfAnnualChangeInVolume', width: 100,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'volumeOfAnnualChangeInVolume', text),
          props: {},

        };

          return obj},
      },

      {
        title: '编辑',
        dataIndex: 'operation',

        width: 60,

        render: (text, record, index) => {


          const { editable } = this.state.data2[index].volume;


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
        children: [{
          title: '', dataIndex: 'name', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns3(this.state.data3, index,'name', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '基本木材密度SVD ',
        children: [{
          title: '（不确定性%）', dataIndex: 'basicWoodDensitySVD', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns3(this.state.data3, index, 'basicWoodDensitySVD', text),
            props: {},

          };

            return obj},
        }],
      }, {
        title: '生物量扩展因子BEF',
        children: [{
          title: '（不确定性%）', dataIndex: 'biomassExpansionFactorBEF', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns3(this.state.data3, index, 'biomassExpansionFactorBEF', text),
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
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data3[index].basicWoodDensitySVD;
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
          title: '', dataIndex: 'name', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns4(this.state.data4, index,'name', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '生物量碳储量变化 ',
        children: [{
          title: '（吨碳/年）', dataIndex: 'p1', width: 200, colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns4(this.state.data4, index, 'p1', text),
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
          title: '', dataIndex: 'name', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns5(this.state.data5, index,'name', text),
            props: {},

          };

            return obj},
        }],
      },
      {
        title: '生物量碳储量变化 ',
        children: [{
          title: '（不确定性%）', dataIndex: 'p1', width: 200,colSpan:1,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns5(this.state.data5, index, 'p1', text),
            props: {},

          };

            return obj},
        }],
      },{
        title: '编辑',
        dataIndex: 'operation',

        width: 60,

        render: (text, record, index) => {

          const { editable } = this.state.data5[index].p1;
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

    this.queryScatteredwood('2014');
    this.newQueryScatteredwood('2014');

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

    if(key  == 'p1'){

     this.updateScatteredwood5(index,data5);
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

    if(key  == 'biomassCarbonContentCF'){

      this.updateScatteredwood2(index,data3);
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

    if(key  == 'volumeOfAnnualChangeInVolume'){

     this.updateScatteredwood1(index,data2);
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

    if(key  == 'volumeOfAnnualChangeInVolume'){

      this.updateScatteredwood(index,data);
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

  //活动水平
  queryScatteredwood(years){


    post('/activityLevelDataEntry/landUseChangeAndForestry/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {

          var Alldata = res.data;


          const _Data = []  //活动水平
          const _Data1 = []  //排放因子
          const _Data2 = []  //排放量计算

          _Data.push(Alldata.scatteredWoodSurroundedByTreesSparseForestActivityLevel.SWSBTSFAL_scatteredWood);//
          _Data.push(Alldata.scatteredWoodSurroundedByTreesSparseForestActivityLevel.SWSBTSFAL_fourTreesAround);//
          _Data.push(Alldata.scatteredWoodSurroundedByTreesSparseForestActivityLevel.SWSBTSFAL_sparseForest);//


          _Data1.push(Alldata.scatteredWoodSurroundedByTreesSparseForestEmissionFactor.SWSBTSFEF_scatteredWood);//
          _Data1.push(Alldata.scatteredWoodSurroundedByTreesSparseForestEmissionFactor.SWSBTSFEF_fourTreesAround);//
          _Data1.push(Alldata.scatteredWoodSurroundedByTreesSparseForestEmissionFactor.SWSBTSFEF_sparseForest);//


          _Data2.push(Alldata.scatteredWoodSurroundedByTreesSparseForestEmission.scatteredWood);//
          _Data2.push(Alldata.scatteredWoodSurroundedByTreesSparseForestEmission.fourTreesAround);//
          _Data2.push(Alldata.scatteredWoodSurroundedByTreesSparseForestEmission.sparseForest);//




          const fossilTitle = [


            '散生木',
            '四旁树',
            '疏林',



          ]



          const _b2 = [];


          for (var i = 0; i < _Data2.length; i++) {


            _b2.push({
                key: i,
                name: {

                  value: fossilTitle[i],
                },
                p1: {
                  editable: false,
                  value: _Data2[i],
                },


              }
            )
          }


          _b2.push({
              key: _Data2.length,
              name: {

                value: '合计或平局',
              },
              p1: {
                editable: false,
                value: _Data2[0]+_Data2[1]+_Data2[2],
              },


            }
          )



          const _a = []; //活动水平

          var _volume = 0;
          var _volumeOfAnnualChangeInVolume = 0;

          for (var i = 0; i < 3; i++) {


            _a.push({
              key: i,
              name: fossilTitle[i],
              volume: _Data[i].volume,
              volumeOfAnnualChangeInVolume: _Data[i].volumeOfAnnualChangeInVolume,


            });

            _volume += _Data[i].volume;
            _volumeOfAnnualChangeInVolume += _Data[i].volumeOfAnnualChangeInVolume;

          }


          const _a1 = []; //排放因子

          var _basicWoodDensitySVD = 0;
          var _biomassExpansionFactorBEF = 0;
          var _rhizomeRatioRSR = 0;
          var _biomassCarbonContentCF = 0;

          for (var i = 0; i < 3; i++) {



              _a1.push({
                key: i,
                name: fossilTitle[i],
                basicWoodDensitySVD: _Data1[i].basicWoodDensitySVD,
                biomassExpansionFactorBEF: _Data1[i].biomassExpansionFactorBEF,
                rhizomeRatioRSR: _Data1[i].rhizomeRatioRSR,
                biomassCarbonContentCF: _Data1[i].biomassCarbonContentCF,

              });

            _basicWoodDensitySVD = _Data1[2].basicWoodDensitySVD;
            _biomassExpansionFactorBEF = _Data1[2].biomassExpansionFactorBEF;
            _rhizomeRatioRSR = _Data1[2].rhizomeRatioRSR;
            _biomassCarbonContentCF = _Data1[2].biomassCarbonContentCF;


          }






          const _b = [];


          for (var i = 0; i < _a.length; i++) {


            _b.push({
                key: _a[i].key,
                name: {

                  value: _a[i].name,
                },
                volume: {
                  editable: false,
                  value: _a[i].volume,
                },
                volumeOfAnnualChangeInVolume: {
                  editable: false,
                  value: _a[i].volumeOfAnnualChangeInVolume,
                },


              }
            )
          }

          _b.push({
              key: _a.length,
              name: {

                value: '合计或平局',
              },
              volume: {
                editable: false,
                value: _volume.toFixed(2),
              },
              volumeOfAnnualChangeInVolume: {
                editable: false,
                value: _volumeOfAnnualChangeInVolume.toFixed(2),
              },


            }
          )






          const _b1 = [];


          for(var i = 0 ; i<_a1.length;i++){


            _b1.push({
                key:_a1[i].key,
                name:{

                  value:_a1[i].name ,
                },
              basicWoodDensitySVD:{
                  editable: false,
                  value:_a1[i].basicWoodDensitySVD ,
                },
              biomassExpansionFactorBEF: {
                  editable: false,
                  value:_a1[i].biomassExpansionFactorBEF ,
                },
              rhizomeRatioRSR: {
                editable: false,
                value:_a1[i].rhizomeRatioRSR ,
              },
              biomassCarbonContentCF: {
                editable: false,
                value:_a1[i].biomassCarbonContentCF ,
              },


              }
            )
          }

          _b1.push({
              key:_a1.length,
              name:{

                value:'合计或平局' ,
              },
              basicWoodDensitySVD:{
                editable: false,
                value:_basicWoodDensitySVD.toFixed(2) ,
              },
              biomassExpansionFactorBEF: {
                editable: false,
                value:_biomassExpansionFactorBEF.toFixed(2) ,
              },
              rhizomeRatioRSR: {
                editable: false,
                value:_rhizomeRatioRSR.toFixed(2) ,
              },
              biomassCarbonContentCF: {
                editable: false,
                value:_biomassCarbonContentCF.toFixed(2) ,
              },


            }
          )




          this.setState({data:_b});
          this.setState({data1:_b1});
          this.setState({data4:_b2});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }


  //不确定性
  newQueryScatteredwood(years){


    post('/uncertainty/landUseChangeAndForestry/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {

          var Alldata = res.data;


          const _Data = []  //活动水平不确定性
          const _Data1 = []  //排放因子不确定性
          const _Data5 = []  //不确定性计算





          const fossilTitle = [


            '散生木',
            '四旁树',
            '疏林',
            '合计或平均',


          ]


          _Data.push(Alldata.SWSBTSFAL_scatteredWood);//
          _Data.push(Alldata.SWSBTSFAL_fourTreesAround);//
          _Data.push(Alldata.SWSBTSFAL_sparseForest);//
          _Data.push(Alldata.SWSBTSFAL_total);//


          _Data1.push(Alldata.SWSBTSFEF_scatteredWood);//
          _Data1.push(Alldata.SWSBTSFEF_fourTreesAround);//
          _Data1.push(Alldata.SWSBTSFEF_sparseForest);//
          _Data1.push(Alldata.SWSBTSFEF_total);//

          _Data5.push(Alldata.SWSBTSFE_scatteredWood);//
          _Data5.push(Alldata.SWSBTSFE_fourTreesAround);//
          _Data5.push(Alldata.SWSBTSFE_sparseForest);//
          _Data5.push(Alldata.SWSBTSFE_total);//




          const _b5 = [];


          for (var i = 0; i < _Data5.length; i++) {


            _b5.push({
                key: i,
                name: {

                  value:fossilTitle[i],
                },
                p1: {
                  editable: false,
                  value: _Data5[i].changesInBiomassCarbonStocks,
                },



              }
            )
          }






          const _a = []; //活动水平

          var _volume = 0;
          var _volumeOfAnnualChangeInVolume = 0;

          for (var i = 0; i < 4; i++) {


            _a.push({
              key: i,
              name: fossilTitle[i],
              volume: _Data[i].volume,
              volumeOfAnnualChangeInVolume: _Data[i].volumeOfAnnualChangeInVolume,


            });


          }


          const _a1 = []; //排放因子

          var _basicWoodDensitySVD = 0;
          var _biomassExpansionFactorBEF = 0;
          var _rhizomeRatioRSR = 0;
          var _biomassCarbonContentCF = 0;

          for (var i = 0; i < 4; i++) {



            _a1.push({
              key: i,
              name: fossilTitle[i],
              basicWoodDensitySVD: _Data1[i].basicWoodDensitySVD,
              biomassExpansionFactorBEF: _Data1[i].biomassExpansionFactorBEF,
              rhizomeRatioRSR: _Data1[i].rhizomeRatioRSR,
              biomassCarbonContentCF: _Data1[i].biomassCarbonContentCF,

            });



          }






          const _b = [];


          for (var i = 0; i < _a.length; i++) {


            _b.push({
                key: _a[i].key,
                name: {

                  value: _a[i].name,
                },
                volume: {
                  editable: false,
                  value: _a[i].volume,
                },
                volumeOfAnnualChangeInVolume: {
                  editable: false,
                  value: _a[i].volumeOfAnnualChangeInVolume,
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
                basicWoodDensitySVD:{
                  editable: false,
                  value:_a1[i].basicWoodDensitySVD ,
                },
                biomassExpansionFactorBEF: {
                  editable: false,
                  value:_a1[i].biomassExpansionFactorBEF ,
                },
                rhizomeRatioRSR: {
                  editable: false,
                  value:_a1[i].rhizomeRatioRSR ,
                },
                biomassCarbonContentCF: {
                  editable: false,
                  value:_a1[i].biomassCarbonContentCF ,
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
  updateScatteredwood(index,data){

    var data  = data

    const Directory = [
      'SWSBTSFAL_scatteredWood',
      'SWSBTSFAL_fourTreesAround',
      'SWSBTSFAL_sparseForest',



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
      "volume": data[index].volume.value,
      "volumeOfAnnualChangeInVolume": data[index].volumeOfAnnualChangeInVolume.value,


    }

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);
          this.queryScatteredwood(this.state.years)

        } else {
          message.error('数据录入有误，请重新录入！');
        }
      });
  }


  //update活动水平不确定性
  updateScatteredwood1(index,data2){

    var data  = data2

    const Directory = [
      'SWSBTSFAL_scatteredWood',
      'SWSBTSFAL_fourTreesAround',
      'SWSBTSFAL_sparseForest',
      'SWSBTSFAL_total',


    ]

    var DirectoryIndex = Directory[index];

    var url = '/uncertainty/landUseChangeAndForestry/update'
    var bodyName = 'landUseChangeAndForestry';



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "volume": data[index].volume.value,
      "volumeOfAnnualChangeInVolume": data[index].volumeOfAnnualChangeInVolume.value,


    }

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);
          this.newQueryScatteredwood(this.state.years)

        } else {
          message.error('数据录入有误，请重新录入！');
        }
      });
  }


  //update排放因子不确定性
  updateScatteredwood2(index,data3){

    var data  = data3

    const Directory = [
      'SWSBTSFEF_scatteredWood',
      'SWSBTSFEF_fourTreesAround',
      'SWSBTSFEF_sparseForest',
      'SWSBTSFEF_total',


    ]

    var DirectoryIndex = Directory[index];

    var url = '/uncertainty/landUseChangeAndForestry/update'
    var bodyName = 'landUseChangeAndForestry';



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "basicWoodDensitySVD": data[index].basicWoodDensitySVD.value,
      "biomassExpansionFactorBEF": data[index].biomassExpansionFactorBEF.value,
      "rhizomeRatioRSR": data[index].rhizomeRatioRSR.value,
      "biomassCarbonContentCF": data[index].biomassCarbonContentCF.value,


    }

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);
          this.newQueryScatteredwood(this.state.years)

        } else {
          message.error('数据录入有误，请重新录入！');
        }
      });
  }


  //update计算不确定性
  updateScatteredwood5(index,data5){

    var data  = data5


    const Directory = [
      'SWSBTSFE_scatteredWood',
      'SWSBTSFE_fourTreesAround',
      'SWSBTSFE_sparseForest',
      'SWSBTSFE_total',

    ]

    var DirectoryIndex = Directory[index];

    var url = '/uncertainty/landUseChangeAndForestry/update'
    var bodyName = 'landUseChangeAndForestry';



    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "changesInBiomassCarbonStocks": data[index].p1.value,



    }

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);
          this.newQueryScatteredwood(this.state.years)

        } else {
          message.error('数据录入有误，请重新录入！');
        }
      });
  }

  //年份选择
  selesctYears(years){

    this.setState({ loading: true});
    this.setState({years:years})
    this.queryScatteredwood(years);
    this.newQueryScatteredwood(years);

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
          <span className={styles.title_span}>散生木、四旁树、疏林生物量碳储量变化清单表</span>
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


          <Table size="small"   pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>

          <div className={styles.entryBody} id="bodyTable2"  >
            <p>排放因子</p>


            <Table  size="small"  pagination={false} bordered={true}  columns={columns1} dataSource={dataSource1} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody} id="bodyTable3"  >
            <p>活动水平不确定性</p>


            <Table size="small"   pagination={false} bordered={true}  columns={columns2} dataSource={dataSource2} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody} id="bodyTable4"  >
            <p>排放因子不确定性</p>


            <Table  size="small"  pagination={false} bordered={true}  columns={columns3} dataSource={dataSource3} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody} id="bodyTable5"  >
            <p>排放量计算</p>


            <Table  size="small"  pagination={false} bordered={true}  columns={columns4} dataSource={dataSource4} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

          <div className={styles.entryBody} id="bodyTable6"  >
            <p>不确定性计算</p>


            <Table size="small"  pagination={false} bordered={true}  columns={columns5} dataSource={dataSource5} scroll={{ x: 1000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>

        </Spin>








      </div>
    );

  }
}


export default Form.create()(ElectricTable);
