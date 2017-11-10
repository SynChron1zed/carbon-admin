/**
 * 煤矿Created by dixu on 2017/10/17.
 */
import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch  } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Coalmine.less';
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

class CoalmineTable extends React.Component {


  constructor(props) {

    super(props);


    this.columns = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 280,

        colSpan:1,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text)},
      , {
        title: '井工开采',
        children: [{
          title: '重点煤矿', dataIndex: 'keyCoalMine', width: 100,
          render: (text, record, index) => this.renderColumns(this.state.data, index, 'keyCoalMine', text),
        }, {
          title: '地方煤矿', dataIndex: 'localCoalMine', width: 100,
          render: (text, record, index) => this.renderColumns(this.state.data, index, 'localCoalMine', text),
        }, {
          title: '乡镇煤矿', dataIndex: 'townshipCoalMine', width: 100,
          render: (text, record, index) => this.renderColumns(this.state.data, index, 'townshipCoalMine', text),
        }],
      },{
        title: '露天开采',
        children: [{
          title: '', dataIndex: 'openPitMining', width: 100,
          render: (text, record, index) => this.renderColumns(this.state.data, index, 'openPitMining', text),
        }],
      },
      {
        title: '矿后活动',
        children: [{
          title: '高瓦斯矿', dataIndex: 'highGasMine', width: 100,
          render: (text, record, index) => this.renderColumns(this.state.data, index, 'highGasMine', text),
        }, {
          title: '低瓦斯矿', dataIndex: 'lowGasMine', width: 100,
          render: (text, record, index) => this.renderColumns(this.state.data, index, 'lowGasMine', text),
        }, {
          title: '露天矿', dataIndex: 'openPitMine', width: 100,
          render: (text, record, index) => this.renderColumns(this.state.data, index, 'openPitMine', text),
        }],
      },

      {
        title: '合计', dataIndex: 'total', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'total', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data[index].keyCoalMine;
          return (
            <div className={styles.editableOperations} >

              { index ==4 ? <span></span> :

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
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'name', text)},
      , {
        title: '井工开采',
        children: [{
          title: '重点煤矿', dataIndex: 'keyCoalMine', width: 100,
          render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'keyCoalMine', text),
        }, {
          title: '地方煤矿', dataIndex: 'localCoalMine', width: 100,
          render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'localCoalMine', text),
        }, {
          title: '乡镇煤矿', dataIndex: 'townshipCoalMine', width: 100,
          render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'townshipCoalMine', text),
        }],
      },{
        title: '露天开采',
        children: [{
          title: '', dataIndex: 'openPitMining', width: 100,
          render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'openPitMining', text),
        }],
      },
      {
        title: '矿后活动',
        children: [{
          title: '高瓦斯矿', dataIndex: 'highGasMine', width: 100,
          render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'highGasMine', text),
        }, {
          title: '低瓦斯矿', dataIndex: 'lowGasMine', width: 100,
          render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'lowGasMine', text),
        }, {
          title: '露天矿', dataIndex: 'openPitMine', width: 100,
          render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'openPitMine', text),
        }],
      },

      {
        title: '合计', dataIndex: 'total', width: 100,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'total', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data1[index].keyCoalMine;
          return (
            <div className={styles.editableOperations} >

              { index ==2 ? <span></span> :

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


    this.state = {

      data: [],
      data1: [],
      loading: true ,

      collapsed: false,
      select:1,
      trigger:true,
      user:[],


      statistics:'b1',


      AllData:[]
    };

    this.queryCoalmine();

    //$("#bodyTable1").hide();

  }

  selesctYears(i,j,k){

    this.setState({statistics:j});

    if(j=='b1'){

      $("#bodyTable2").hide();
      $("#bodyTable1").show();
      this.queryCoalmine();

    }else{

      $("#bodyTable1").hide();
      $("#bodyTable2").show();
      this.queryCoalmine1();

    }

  }

  // 排放因子法
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

    if(key  == 'openPitMine'){

      this.updateCoalmine1(index,data1);
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


  // 实测法
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

    if(key  == 'openPitMine'){

      this.updateCoalmine(index,data);
    }
    console.log(data)
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



  //煤炭开采 矿后活动逃逸 实测法
  queryCoalmine(){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/coalMiningAndMineActivitiesToEscape/measuredMethod/list', {
      year:'2017',

    })
      .then((res) => {

        if (res.code==0) {


          var Alldata =res.data;

          const _Data = []

          _Data.push(Alldata.methaneGradeIdentificationResults);//甲烷等级鉴定结果
          _Data.push(Alldata.rawCoalProduction);//原煤产量
          _Data.push(Alldata.measuredCoalMethaneEmissionsAndEmissions); //实测煤矿甲烷排放量和抽放量
          _Data.push(Alldata.methaneActualUtilization);//甲烷实际利用量
          _Data.push('');//排放量




          const fossilTitle = [


            '　　甲烷等级鉴定结果',
            '　　原煤产量（t）',
            '　　实测煤矿甲烷排放量和抽放量（m³）',
            '　　甲烷实际利用量（m³）',
            '　　排放量（m³）',


          ]

          const _a = [];


          for(var i = 0 ;i<5;i++){


            if(i==4){
              _a.push({
                key: i,
                name:fossilTitle[i],
                keyCoalMine: '0',
                localCoalMine: '0',
                townshipCoalMine: '0',
                openPitMining: '0',
                highGasMine: '0',
                lowGasMine: '0',
                openPitMine: '0',
                total: '0',

              });
            }else {
              _a.push({
                key: i,
                name:fossilTitle[i],
                keyCoalMine: _Data[i].keyCoalMine,
                localCoalMine: _Data[i].localCoalMine,
                townshipCoalMine: _Data[i].townshipCoalMine,
                openPitMining: _Data[i].openPitMining,
                highGasMine: _Data[i].highGasMine,
                lowGasMine: _Data[i].lowGasMine,
                openPitMine: _Data[i].openPitMine,
                total: '0',

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
              keyCoalMine:{
                  editable: false,
                  value:_a[i].keyCoalMine ,
                },
              localCoalMine: {
                  editable: false,
                  value:_a[i].localCoalMine ,
                },
              townshipCoalMine: {
                editable: false,
                value:_a[i].townshipCoalMine ,
              },
              openPitMining: {
                editable: false,
                value:_a[i].openPitMining ,
              },
              highGasMine: {
                editable: false,
                value:_a[i].highGasMine ,
              },
              lowGasMine: {
                editable: false,
                value:_a[i].lowGasMine ,
              },
              openPitMine: {
                editable: false,
                value:_a[i].openPitMine ,
              },
              total: {

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

  //co2排放量-非能源利用update
  updateCoalmine(index,data,a){

    var data  = data

    const Directory = [
      'methaneGradeIdentificationResults',
      'rawCoalProduction',
      'measuredCoalMethaneEmissionsAndEmissions',
      'methaneActualUtilization',




    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/coalMiningAndMineActivitiesToEscape/measuredMethod/update'
    var bodyName = 'measuredMethod'






    var obj={
      "year":"2017"
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "keyCoalMine": data[index].keyCoalMine.value,
      "localCoalMine": data[index].localCoalMine.value,
      "townshipCoalMine": data[index].townshipCoalMine.value,
      "openPitMining": data[index].openPitMining.value,
      "highGasMine": data[index].highGasMine.value,
      "lowGasMine": data[index].lowGasMine.value,
      "openPitMine": data[index].openPitMine.value,

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


  //煤炭开采 矿后活动逃逸 排放因子法
  queryCoalmine1(){

    post('/activityLevelDataEntry/energyActivity/totalFossilFuels/coalMiningAndMineActivitiesToEscape/emissionFactorMethod/list', {
      year:'2017',

    })
      .then((res) => {

        if (res.code==0) {


          var Alldata =res.data;

          const _Data = []

          _Data.push(Alldata.rawCoalProduction);//原煤产量
          _Data.push(Alldata.emissionFactor);//排放因子
          _Data.push('');//排放量




          const fossilTitle = [


            '　　原煤产量（t）',
            '　　排放因子(m3/t)',
            '　　排放量（m3）',


          ]

          const _a = [];


          for(var i = 0 ;i<3;i++){


            if(i==2){
              _a.push({
                key: i,
                name:fossilTitle[i],
                keyCoalMine: '0',
                localCoalMine: '0',
                townshipCoalMine: '0',
                openPitMining: '0',
                highGasMine: '0',
                lowGasMine: '0',
                openPitMine: '0',
                total: '0',

              });
            }else if(i==1) {
              _a.push({
                key: i,
                name:fossilTitle[i],
                keyCoalMine: _Data[i].keyCoalMine,
                localCoalMine: _Data[i].localCoalMine,
                townshipCoalMine: _Data[i].townshipCoalMine,
                openPitMining: _Data[i].openPitMining,
                highGasMine: _Data[i].highGasMine,
                lowGasMine: _Data[i].lowGasMine,
                openPitMine: _Data[i].openPitMine,
                total: '',

              });
            }else{
              _a.push({
                key: i,
                name:fossilTitle[i],
                keyCoalMine: _Data[i].keyCoalMine,
                localCoalMine: _Data[i].localCoalMine,
                townshipCoalMine: _Data[i].townshipCoalMine,
                openPitMining: _Data[i].openPitMining,
                highGasMine: _Data[i].highGasMine,
                lowGasMine: _Data[i].lowGasMine,
                openPitMine: _Data[i].openPitMine,
                total: '0',

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
                keyCoalMine:{
                  editable: false,
                  value:_a[i].keyCoalMine ,
                },
                localCoalMine: {
                  editable: false,
                  value:_a[i].localCoalMine ,
                },
                townshipCoalMine: {
                  editable: false,
                  value:_a[i].townshipCoalMine ,
                },
                openPitMining: {
                  editable: false,
                  value:_a[i].openPitMining ,
                },
                highGasMine: {
                  editable: false,
                  value:_a[i].highGasMine ,
                },
                lowGasMine: {
                  editable: false,
                  value:_a[i].lowGasMine ,
                },
                openPitMine: {
                  editable: false,
                  value:_a[i].openPitMine ,
                },
                total: {

                  value:_a[i].total,
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

  //煤炭开采 矿后活动逃逸 排放因子法update
  updateCoalmine1(index,data1,a){

    var data  = data1

    const Directory = [

      'rawCoalProduction',
      'emissionFactor',





    ]

    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/coalMiningAndMineActivitiesToEscape/emissionFactorMethod/update'
    var bodyName = 'emissionFactorMethod'






    var obj={
      "year":"2017"
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "keyCoalMine": data[index].keyCoalMine.value,
      "localCoalMine": data[index].localCoalMine.value,
      "townshipCoalMine": data[index].townshipCoalMine.value,
      "openPitMining": data[index].openPitMining.value,
      "highGasMine": data[index].highGasMine.value,
      "lowGasMine": data[index].lowGasMine.value,
      "openPitMine": data[index].openPitMine.value,

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



    const columns = this.columns;
    const columns1 = this.columns1;


    return (
      <div className={styles.normal}>
        <div className={styles.title}>
          <span className={styles.title_span}>煤矿开采和矿后活动逃逸排放</span>
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


          <div className={styles.targetChoose} id="tjF">
            <span className={styles.selectH1}>统计方法:</span>
            <ul>
              <li id="li7" className={'b1'==this.state.statistics?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('0','b1','a1')}}>实测法</li>
              <li id="li8" style={{width:150}} className={'b2'==this.state.statistics?styles.li_focus:styles.eee} onClick={()=>{this.selesctYears('0','b2','a1')}}>排放因子法</li>
            </ul>
          </div>


        </div>




        <div className={styles.entryBody} id="bodyTable1" >
          <p>活动水平数据</p>
          <Spin spinning={this.state.loading} >
            <Table  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 820 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
          </Spin>
        </div>

        <div className={styles.entryBody} id="bodyTable2" style={{display:'none'}} >
          <p>活动水平数据</p>
          <Spin spinning={this.state.loading} >
            <Table  pagination={false} bordered={true}  columns={columns1} dataSource={dataSource1} scroll={{ x: 1000, y: 820 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>
          </Spin>
        </div>

      </div>
    );

  }
}


export default Form.create()(CoalmineTable);
