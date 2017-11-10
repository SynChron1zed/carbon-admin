/**
 * 生物质燃烧Created by dixu on 2017/10/17.
 */
import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch  } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Biomass.less';
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

class CoalmineTable extends React.Component {



  constructor(props) {

    super(props);


    this.columns = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 280,

        colSpan:1,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text)


      }, {
        title: '燃料消耗量（万t）',
        children: [{
          title: '省煤灶', dataIndex: 'provinceCoalStove', width: 100,
          render: (text, record, index) =>   {  const obj = {
            children: this.renderColumns(this.state.data, index, 'provinceCoalStove', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 10;
            }
            if (index === 4) {
              obj.props.colSpan = 7;
            }
            return obj
          }

        }, {
          title: '传统灶', dataIndex: 'traditionalStove', width: 100,
          render: (text, record, index) =>
          {  const obj = {
            children:  this.renderColumns(this.state.data, index, 'traditionalStove', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '火盆火锅等', dataIndex: 'brazierPotAndSoOn', width: 100,
          render: (text, record, index) => {  const obj = {
            children: this.renderColumns(this.state.data, index, 'brazierPotAndSoOn', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '牧区灶具', dataIndex: 'pastoralStove', width: 100,
          render: (text, record, index) => {  const obj = {
            children: this.renderColumns(this.state.data, index, 'pastoralStove', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '炒茶灶', dataIndex: 'friedTeaStove', width: 100,
          render: (text, record, index) => {  const obj = {
            children: this.renderColumns(this.state.data, index, 'friedTeaStove', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '烤烟房', dataIndex: 'flueCuredTobaccoRoom', width: 100,
          render: (text, record, index) => {  const obj = {
            children: this.renderColumns(this.state.data, index, 'flueCuredTobaccoRoom', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '砖瓦窑', dataIndex: 'brickKiln', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'brickKiln', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '总量', dataIndex: 'totalAmount', width: 100,
          render: (text, record, index) => {  const obj = {
            children: this.renderColumns(this.state.data, index, 'totalAmount', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            return obj},
        }],
      },{
        title: '低位热值（TJ/kg)',
        children: [{
          title: '', dataIndex: 'lowCalorificValue', width: 100,
          render: (text, record, index) => {  const obj = {
            children: this.renderColumns(this.state.data, index, 'lowCalorificValue', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            return obj},
        }],
      },{
        title: '生物质燃烧量（TJ）',
        children: [{
          title: '', dataIndex: 'biomassBurns', width: 100,
          render: (text, record, index) => {  const obj = {
            children: this.renderColumns(this.state.data, index, 'biomassBurns', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            return obj},
        }],
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data[index].friedTeaStove;
          return (
            <div className={styles.editableOperations} >

              { index ==5 ? <span></span> :

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
        width: 280,

        colSpan:1,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'name', text)


      }, {
        title: 'CH4（gCH4/kg燃料）',
        children: [{
          title: '省煤灶', dataIndex: 'provinceCoalStove', width: 100,
          render: (text, record, index) =>   {  const obj = {
            children: this.renderColumns1(this.state.data1, index, 'provinceCoalStove', text),
            props: {},
          };

            if (index === 4) {
              obj.props.colSpan = 7;
            }
            return obj
          }

        }, {
          title: '传统灶', dataIndex: 'traditionalStove', width: 100,
          render: (text, record, index) =>
          {  const obj = {
            children:  this.renderColumns1(this.state.data1, index, 'traditionalStove', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '火盆火锅等', dataIndex: 'brazierPotAndSoOn', width: 100,
          render: (text, record, index) => {  const obj = {
            children: this.renderColumns1(this.state.data1, index, 'brazierPotAndSoOn', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '牧区灶具', dataIndex: 'pastoralStove', width: 100,
          render: (text, record, index) => {  const obj = {
            children: this.renderColumns1(this.state.data1, index, 'pastoralStove', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '炒茶灶', dataIndex: 'friedTeaStove', width: 100,
          render: (text, record, index) => {  const obj = {
            children: this.renderColumns1(this.state.data1, index, 'friedTeaStove', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '烤烟房', dataIndex: 'flueCuredTobaccoRoom', width: 100,
          render: (text, record, index) => {  const obj = {
            children: this.renderColumns1(this.state.data1, index, 'flueCuredTobaccoRoom', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '砖瓦窑', dataIndex: 'brickKiln', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'brickKiln', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }],
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data1[index].friedTeaStove;
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
        width: 280,

        colSpan:1,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'name', text)


      }, {
        title: 'N2O（gN2O/kg燃料）',
        children: [{
          title: '省煤灶', dataIndex: 'provinceCoalStove', width: 100,
          render: (text, record, index) =>   {  const obj = {
            children: this.renderColumns2(this.state.data2, index, 'provinceCoalStove', text),
            props: {},
          };

            if (index === 4) {
              obj.props.colSpan = 7;
            }
            return obj
          }

        }, {
          title: '传统灶', dataIndex: 'traditionalStove', width: 100,
          render: (text, record, index) =>
          {  const obj = {
            children:  this.renderColumns2(this.state.data2, index, 'traditionalStove', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '火盆火锅等', dataIndex: 'brazierPotAndSoOn', width: 100,
          render: (text, record, index) => {  const obj = {
            children: this.renderColumns2(this.state.data2, index, 'brazierPotAndSoOn', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '牧区灶具', dataIndex: 'pastoralStove', width: 100,
          render: (text, record, index) => {  const obj = {
            children: this.renderColumns2(this.state.data2, index, 'pastoralStove', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '炒茶灶', dataIndex: 'friedTeaStove', width: 100,
          render: (text, record, index) => {  const obj = {
            children: this.renderColumns2(this.state.data2, index, 'friedTeaStove', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '烤烟房', dataIndex: 'flueCuredTobaccoRoom', width: 100,
          render: (text, record, index) => {  const obj = {
            children: this.renderColumns2(this.state.data2, index, 'flueCuredTobaccoRoom', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '砖瓦窑', dataIndex: 'brickKiln', width: 100,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns2(this.state.data2, index, 'brickKiln', text),
            props: {},
          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 4) {
              obj.props.colSpan = 0;
            }
            return obj},
        }],
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data2[index].friedTeaStove;
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

    this.state = {

      data: [],
      data1: [],
      data2: [],
      loading: true ,

      collapsed: false,
      select:1,
      trigger:true,
      user:[],


      statistics:'b1',


      AllData:[]
    };

    this.queryBiomass();
    this.queryBiomass1();
    this.queryBiomass2();


    //$("#bodyTable1").hide();

  }


  // N2O排放因子法
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


    if(index==4){
      if(key  == 'provinceCoalStove' ){


        this.updateBiomass2(index,data2);
      }
    }else {
      if(key  == 'brickKiln' ){


        this.updateBiomass2(index,data2);
      }
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


  // 甲烷排放因子法
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

    if(index==4){
      if(key  == 'provinceCoalStove' ){


        this.updateBiomass1(index,data1);
      }
    }else {
      if(key  == 'brickKiln' ){


        this.updateBiomass1(index,data1);
      }
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


  // 活动水平数据
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

    if(key  == 'lowCalorificValue'){

      this.updateBiomass(index,data);
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




  //生物质燃烧 活动水平数据
  queryBiomass(){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/biomassBurning/activityLevelData/list', {
      year:'2017',

    })
      .then((res) => {

        if (res.code==0) {


          var Alldata =res.data;

          const _Data = []

          _Data.push(Alldata.straw);//秸秆
          _Data.push(Alldata.firewood);//薪柴
          _Data.push(Alldata.charcoal); //木炭
          _Data.push(Alldata.animalFaeces);//动物粪便
          _Data.push(Alldata.refuseBurning);//垃圾焚烧
          _Data.push('');//总量




          const fossilTitle = [


            '　　秸秆',
            '　　薪柴',
            '　　木炭',
            '　　动物粪便',
            '　　垃圾焚烧',
            '　　合计',


          ]

          const _a = [];


          for(var i = 0 ;i<6;i++){


            if(i==5){
              _a.push({
                key: i,
                name:fossilTitle[i],
                provinceCoalStove:'0',
                traditionalStove: '0',
                brazierPotAndSoOn: '0',
                pastoralStove: '0',
                friedTeaStove: '0',
                flueCuredTobaccoRoom: '0',
                brickKiln: '0',
                totalAmount: '0',
                lowCalorificValue: '0',
                biomassBurns: '0',

              });
            }else {
              _a.push({
                key: i,
                name:fossilTitle[i],
                provinceCoalStove: _Data[i].provinceCoalStove,
                traditionalStove: _Data[i].traditionalStove,
                brazierPotAndSoOn: _Data[i].brazierPotAndSoOn,
                pastoralStove: _Data[i].pastoralStove,
                friedTeaStove: _Data[i].friedTeaStove,
                flueCuredTobaccoRoom: _Data[i].flueCuredTobaccoRoom,
                brickKiln: _Data[i].brickKiln,
                totalAmount: '0',
                lowCalorificValue: _Data[i].lowCalorificValue,
                biomassBurns: '0',

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
              provinceCoalStove:{
                  editable: false,
                  value:_a[i].provinceCoalStove ,
                },
              traditionalStove: {
                  editable: false,
                  value:_a[i].traditionalStove ,
                },
              brazierPotAndSoOn: {
                  editable: false,
                  value:_a[i].brazierPotAndSoOn ,
                },
              pastoralStove: {
                  editable: false,
                  value:_a[i].pastoralStove ,
                },
              friedTeaStove: {
                  editable: false,
                  value:_a[i].friedTeaStove ,
                },
              flueCuredTobaccoRoom: {
                  editable: false,
                  value:_a[i].flueCuredTobaccoRoom ,
                },
              brickKiln: {
                  editable: false,
                  value:_a[i].brickKiln ,
                },
              totalAmount: {

                  value:'0' ,
                },
              lowCalorificValue: {
                editable: false,
                value:_a[i].lowCalorificValue ,
              },
              biomassBurns: {

                value:'0' ,
              },

              }
            )
          }

          console.log(_b);


          this.setState({data:_b});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }

  //生物质燃烧 活动水平数据update
  updateBiomass(index,data,a){

    var data  = data

    const Directory = [
      'straw',
      'firewood',
      'charcoal',
      'animalFaeces',
      'refuseBurning',




    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/biomassBurning/activityLevelData/update'
    var bodyName = 'activityLevelData'






    var obj={
      "year":"2017"
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "provinceCoalStove": data[index].provinceCoalStove.value,
      "traditionalStove": data[index].traditionalStove.value,
      "brazierPotAndSoOn": data[index].brazierPotAndSoOn.value,
      "pastoralStove": data[index].pastoralStove.value,
      "friedTeaStove": data[index].friedTeaStove.value,
      "flueCuredTobaccoRoom": data[index].flueCuredTobaccoRoom.value,
      "brickKiln": data[index].brickKiln.value,
      "totalAmount": data[index].totalAmount.value,
      "lowCalorificValue": data[index].lowCalorificValue.value,
      "biomassBurns": data[index].biomassBurns.value,


    }

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);

        } else {
          message.error(res.message);
        }
      });
  }


  //生物质燃烧 甲烷排放因子
  queryBiomass1(){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/biomassBurning/CH4EmissionFactor/list', {
      year:'2017',

    })
      .then((res) => {

        if (res.code==0) {


          var Alldata =res.data;

          const _Data = []

          _Data.push(Alldata.straw);//秸秆
          _Data.push(Alldata.firewood);//薪柴
          _Data.push(Alldata.charcoal); //木炭
          _Data.push(Alldata.animalFaeces);//动物粪便
          _Data.push(Alldata.refuseBurning);//垃圾焚烧




          const fossilTitle = [



            '　　秸秆',
            '　　薪柴',
            '　　木炭',
            '　　动物粪便',
            '　　垃圾焚烧',


          ]

          const _a = [];


          for(var i = 0 ;i<5;i++){


              _a.push({
                key: i,
                name:fossilTitle[i],
                provinceCoalStove: _Data[i].provinceCoalStove,
                traditionalStove: _Data[i].traditionalStove,
                brazierPotAndSoOn: _Data[i].brazierPotAndSoOn,
                pastoralStove: _Data[i].pastoralStove,
                friedTeaStove: _Data[i].friedTeaStove,
                flueCuredTobaccoRoom: _Data[i].flueCuredTobaccoRoom,
                brickKiln: _Data[i].brickKiln,

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
                provinceCoalStove:{
                  editable: false,
                  value:_a[i].provinceCoalStove ,
                },
                traditionalStove: {
                  editable: false,
                  value:_a[i].traditionalStove ,
                },
                brazierPotAndSoOn: {
                  editable: false,
                  value:_a[i].brazierPotAndSoOn ,
                },
                pastoralStove: {
                  editable: false,
                  value:_a[i].pastoralStove ,
                },
                friedTeaStove: {
                  editable: false,
                  value:_a[i].friedTeaStove ,
                },
                flueCuredTobaccoRoom: {
                  editable: false,
                  value:_a[i].flueCuredTobaccoRoom ,
                },
                brickKiln: {
                  editable: false,
                  value:_a[i].brickKiln ,
                }

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

  //生物质燃烧 甲烷排放因子update
  updateBiomass1(index,data1,a){

    var data  = data1

    const Directory = [

      'straw',
      'firewood',
      'charcoal',
      'animalFaeces',
      'refuseBurning',





    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/biomassBurning/CH4EmissionFactor/update'
    var bodyName = 'CH4EmissionFactor'






    var obj={
      "year":"2017"
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "provinceCoalStove": data[index].provinceCoalStove.value,
      "traditionalStove": data[index].traditionalStove.value,
      "brazierPotAndSoOn": data[index].brazierPotAndSoOn.value,
      "pastoralStove": data[index].pastoralStove.value,
      "friedTeaStove": data[index].friedTeaStove.value,
      "flueCuredTobaccoRoom": data[index].flueCuredTobaccoRoom.value,
      "brickKiln": data[index].brickKiln.value,

    }

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);

        } else {
          message.error(res.message);
        }
      });
  }

  //生物质燃烧 N2O排放因子
  queryBiomass2(){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/biomassBurning/N2OEmissionFactor/list', {
      year:'2017',

    })
      .then((res) => {

        if (res.code==0) {


          var Alldata =res.data;

          const _Data = []

          _Data.push(Alldata.straw);//秸秆
          _Data.push(Alldata.firewood);//薪柴
          _Data.push(Alldata.charcoal); //木炭
          _Data.push(Alldata.animalFaeces);//动物粪便
          _Data.push(Alldata.refuseBurning);//垃圾焚烧




          const fossilTitle = [



            '　　秸秆',
            '　　薪柴',
            '　　木炭',
            '　　动物粪便',
            '　　垃圾焚烧',


          ]

          const _a = [];


          for(var i = 0 ;i<5;i++){


            _a.push({
              key: i,
              name:fossilTitle[i],
              provinceCoalStove: _Data[i].provinceCoalStove,
              traditionalStove: _Data[i].traditionalStove,
              brazierPotAndSoOn: _Data[i].brazierPotAndSoOn,
              pastoralStove: _Data[i].pastoralStove,
              friedTeaStove: _Data[i].friedTeaStove,
              flueCuredTobaccoRoom: _Data[i].flueCuredTobaccoRoom,
              brickKiln: _Data[i].brickKiln,

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
                provinceCoalStove:{
                  editable: false,
                  value:_a[i].provinceCoalStove ,
                },
                traditionalStove: {
                  editable: false,
                  value:_a[i].traditionalStove ,
                },
                brazierPotAndSoOn: {
                  editable: false,
                  value:_a[i].brazierPotAndSoOn ,
                },
                pastoralStove: {
                  editable: false,
                  value:_a[i].pastoralStove ,
                },
                friedTeaStove: {
                  editable: false,
                  value:_a[i].friedTeaStove ,
                },
                flueCuredTobaccoRoom: {
                  editable: false,
                  value:_a[i].flueCuredTobaccoRoom ,
                },
                brickKiln: {
                  editable: false,
                  value:_a[i].brickKiln ,
                }

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

  //生物质燃烧 N2O排放因子update
  updateBiomass2(index,data1,a){

    var data  = data1

    const Directory = [

      'straw',
      'firewood',
      'charcoal',
      'animalFaeces',
      'refuseBurning',





    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/biomassBurning/N2OEmissionFactor/update'
    var bodyName = 'N2OEmissionFactor'






    var obj={
      "year":"2017"
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "provinceCoalStove": data[index].provinceCoalStove.value,
      "traditionalStove": data[index].traditionalStove.value,
      "brazierPotAndSoOn": data[index].brazierPotAndSoOn.value,
      "pastoralStove": data[index].pastoralStove.value,
      "friedTeaStove": data[index].friedTeaStove.value,
      "flueCuredTobaccoRoom": data[index].flueCuredTobaccoRoom.value,
      "brickKiln": data[index].brickKiln.value,

    }

    post(url, obj)
      .then((res) => {

        if (res.code==0) {
          message.success(res.message);

        } else {
          message.error(res.message);
        }
      });
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



    const columns = this.columns;
    const columns1 = this.columns1;
    const columns2 = this.columns2;


    return (
      <div className={styles.normal}>
        <div className={styles.title}>
          <span className={styles.title_span}>生物质燃烧</span>
        </div>

        <div className={styles.select}>
          <div className={styles.targetChoose}>
            <span className={styles.selectH1}>数据年份:</span>
            <ul>
              <li id="li1" >2005</li>
              <li id="li2" >2010</li>
              <li id="li3" >2012</li>
              <li id="li4" className={styles.li_focus}>2017</li>
            </ul>
          </div>



        </div>


        <Spin spinning={this.state.loading} >

        <div className={styles.entryBody} id="bodyTable1" >

          <p>活动水平数据</p>

            <Table  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 820 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>

        <div className={styles.entryBody} id="bodyTable2"  >
          <p>甲烷排放因子</p>

            <Table  pagination={false} bordered={true}  columns={columns1} dataSource={dataSource1} scroll={{ x: 1000, y: 820 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>

        <div className={styles.entryBody} id="bodyTable3"  >
          <p>氧化亚氮排放因子</p>

            <Table  pagination={false} bordered={true}  columns={columns2} dataSource={dataSource2} scroll={{ x: 1000, y: 820 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>
      </Spin>
      </div>

    );

  }
}


export default Form.create()(CoalmineTable);

