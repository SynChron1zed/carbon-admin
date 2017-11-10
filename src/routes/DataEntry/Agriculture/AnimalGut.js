/**
 * 动物肠道Created by dixu on 2017/10/17.
 */
import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch ,Radio } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Rice.less';
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

class ElectricTable extends React.Component {


  constructor(props) {

    super(props);


    this.columns = [
      {
        title: '数据项',
        dataIndex: 'name',
        width: 100,

        colSpan:1,
        render: (text, record, index) => {  const obj = {
          children:this.renderColumns(this.state.data, index, 'name', text),
          props: {},

        };
          if (index === 9) {
            obj.props.colSpan = 10;
          }

          return obj}

      },
      {
        title: '存栏量',
        children: [{
          title: '规模化饲养(头／只)', dataIndex: 'sVscaleFeeding', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'sVscaleFeeding', text),
            props: {},

          };
            if (index === 5) {
              obj.props.colSpan = 3;
            }
            if (index === 6) {
              obj.props.colSpan =3;
            }
            if (index === 7) {
              obj.props.colSpan = 3;
            }
            if (index === 8) {
              obj.props.colSpan =3;
            }
            if (index === 9) {
              obj.props.colSpan = 0;
            }


            return obj},
        }, {
          title: '农户饲养(头／只)', dataIndex: 'sVfarmerKeeping', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'sVfarmerKeeping', text),
            props: {},

          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 6) {
              obj.props.colSpan =0;
            }
            if (index === 7) {
              obj.props.colSpan = 0;
            }
            if (index === 8) {
              obj.props.colSpan =0;
            }
            if (index === 9) {
              obj.props.colSpan = 0;
            }

            return obj},
        }
          , {
            title: '放牧饲养(头／只)', dataIndex: 'sVgrazing', width: 150,
            render: (text, record, index) => {  const obj = {
              children:this.renderColumns(this.state.data, index, 'sVgrazing', text),
              props: {},

            };
              if (index === 5) {
                obj.props.colSpan = 0;
              }
              if (index === 6) {
                obj.props.colSpan =0;
              }
              if (index === 7) {
                obj.props.colSpan = 0;
              }
              if (index === 8) {
                obj.props.colSpan =0;
              }
              if (index === 9) {
                obj.props.colSpan = 0;
              }

              return obj},
          }],
      }, {
        title: '动物肠道发酵CH4排放因子',
        children: [{
          title: '规模化饲养(kg／头／年)', dataIndex: 'scaleFeeding', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'scaleFeeding', text),
            props: {},

          };
            if (index === 5) {
              obj.props.colSpan = 3;
            }
            if (index === 6) {
              obj.props.colSpan =3;
            }
            if (index === 7) {
              obj.props.colSpan = 3;
            }
            if (index === 8) {
              obj.props.colSpan =3;
            }
            if (index === 9) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '农户饲养(kg／头／年)', dataIndex: 'farmerKeeping', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'farmerKeeping', text),
            props: {},

          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 6) {
              obj.props.colSpan =0;
            }
            if (index === 7) {
              obj.props.colSpan = 0;
            }
            if (index === 8) {
              obj.props.colSpan =0;
            }
            if (index === 9) {
              obj.props.colSpan = 0;
            }

            return obj},
        }, {
          title: '放牧饲养(kg／头／年)', dataIndex: 'grazing', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'grazing', text),
            props: {},

          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 6) {
              obj.props.colSpan =0;
            }
            if (index === 7) {
              obj.props.colSpan = 0;
            }
            if (index === 8) {
              obj.props.colSpan =0;
            }
            if (index === 9) {
              obj.props.colSpan = 0;
            }

            return obj},
        }],
      },{
        title: '甲烷排放量',
        children: [{
          title: '规模化饲养(吨)', dataIndex: 'scaleFeeding1', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'scaleFeeding1', text),
            props: {},

          };
            if (index === 5) {
              obj.props.colSpan = 3;
            }
            if (index === 6) {
              obj.props.colSpan =3;
            }
            if (index === 7) {
              obj.props.colSpan = 3;
            }
            if (index === 8) {
              obj.props.colSpan =3;
            }
            if (index === 9) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '农户饲养(吨)', dataIndex: 'farmerKeeping1', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'farmerKeeping1', text),
            props: {},

          };
            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 6) {
              obj.props.colSpan =0;
            }
            if (index === 7) {
              obj.props.colSpan = 0;
            }
            if (index === 8) {
              obj.props.colSpan =0;
            }
            if (index === 9) {
              obj.props.colSpan = 0;
            }
            return obj},
        }, {
          title: '放牧饲养(吨)', dataIndex: 'grazing1', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns(this.state.data, index, 'grazing1', text),
            props: {},

          };

            if (index === 5) {
              obj.props.colSpan = 0;
            }
            if (index === 6) {
              obj.props.colSpan =0;
            }
            if (index === 7) {
              obj.props.colSpan = 0;
            }
            if (index === 8) {
              obj.props.colSpan =0;
            }
            if (index === 9) {
              obj.props.colSpan = 0;
            }
            return obj},
        }],
      }, {
        title: '甲烷排放小计(吨)', dataIndex: 'Total', width: 200,
        render: (text, record, index) =>{  const obj = {
          children:this.renderColumns(this.state.data, index, 'Total', text),
          props: {},

        };

          return obj},
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data[index].sVscaleFeeding;
          return (
            <div className={styles.editableOperations} >

              {
                index ==9 ? <span></span> :

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


    this.state = {

      data: [],
      loading: true ,

      collapsed: false,
      select:1,
      trigger:true,
      user:[],




      AllData:[]
    };

    this.queryGut();

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

    if(index==5||index==6||index==7||index==8){
      if(key  == 'scaleFeeding'){

        this.updateGut(index,data);
      }
    }else{


    if(key  == 'grazing'){

     this.updateGut(index,data);
    }
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

  //秸秆
  queryGut(){


    post('/activityLevelDataEntry/agricultureActivity/list', {
      year:'2017',

    })
      .then((res) => {

        if (res.code==0) {

          var Alldata =res.data;

          const _Data = []

          _Data.push(Alldata.animalIntestinalFermentationOfMethaneEmissions.cows);
          _Data.push(Alldata.animalIntestinalFermentationOfMethaneEmissions.nonCow);
          _Data.push(Alldata.animalIntestinalFermentationOfMethaneEmissions.buffalo);
          _Data.push(Alldata.animalIntestinalFermentationOfMethaneEmissions.sheep);
          _Data.push(Alldata.animalIntestinalFermentationOfMethaneEmissions.goat);
          _Data.push(Alldata.animalIntestinalFermentationOfMethaneEmissions.pig);
          _Data.push(Alldata.animalIntestinalFermentationOfMethaneEmissions.horse);
          _Data.push(Alldata.animalIntestinalFermentationOfMethaneEmissions.jennet);
          _Data.push(Alldata.animalIntestinalFermentationOfMethaneEmissions.camel);
          _Data.push('');



          const fossilTitle = [


            '　　奶牛',
            '　　非奶牛',
            '　　水牛',
            '　　绵羊',
            '　　山羊',
            '　　猪',
            '　　马',
            '　　驴/骡',
            '　　骆驼',
            '　　动物肠道甲烷排放总计',


          ]




          const _a = [];


          for(var i = 0 ;i<10;i++){


            if(i==9){
              _a.push({
                key: i,
                name:fossilTitle[i],
                sVscaleFeeding:'0',
                sVfarmerKeeping: '0',
                sVgrazing: '0',
                scaleFeeding: '0',
                farmerKeeping: '0',
                grazing: '0',
                scaleFeeding1: '0',
                farmerKeeping1: '0',
                grazing1: '0',
                Total:'0'

              });
            }else{
              _a.push({
                key: i,
                name:fossilTitle[i],
                sVscaleFeeding: _Data[i].sVscaleFeeding,
                sVfarmerKeeping: _Data[i].sVfarmerKeeping,
                sVgrazing: _Data[i].sVgrazing,
                scaleFeeding: _Data[i].scaleFeeding,
                farmerKeeping: _Data[i].farmerKeeping,
                grazing: _Data[i].grazing,
                scaleFeeding1: '0',
                farmerKeeping1: '0',
                grazing1: '0',
                Total:'0'

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
              sVscaleFeeding:{
                  editable: false,
                  value:_a[i].sVscaleFeeding ,
                },
              sVfarmerKeeping: {
                  editable: false,
                  value:_a[i].sVfarmerKeeping ,
                },
              sVgrazing: {
                editable: false,
                value:_a[i].sVgrazing,
              },
              scaleFeeding: {
                  editable: false,
                  value:_a[i].scaleFeeding ,
                },
              farmerKeeping:{
                editable: false,
                value:_a[i].farmerKeeping ,
              },
              grazing: {
                editable: false,
                value:_a[i].grazing ,
              },
              scaleFeeding1: {

                value:_a[i].scaleFeeding1 ,
              },
              farmerKeeping1:{

                value:_a[i].farmerKeeping1 ,
              },
              grazing1: {

                value:_a[i].grazing1 ,
              },
              Total: {

                  value:_a[i].Total ,
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

  //秸秆update
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



    const columns = this.columns;


    return (
      <div className={styles.normal}>
        <div className={styles.title}>
          <span className={styles.title_span}>动物肠道甲烷排放</span>
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


        <div className={styles.entryBody} id="bodyTable1"  >
          <p>动物肠道甲烷排放</p>
          <div className={styles.greenSelect}>
            <span>是否采用本地化排放因子：</span>
            <RadioGroup defaultValue={1}>
              <Radio value={1}>否</Radio>
              <Radio value={2}>是</Radio>
            </RadioGroup>
          </div>

          <Table  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 2000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>










      </div>
    );

  }
}


export default Form.create()(ElectricTable);
