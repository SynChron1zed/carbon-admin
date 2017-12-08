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
        width: 100,

        colSpan:1,
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
        title: '不确定性(%)', dataIndex: 'SF2', width: 100,
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
      years:'2014'
    };

    this.queryGut('2014');

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

  //
  queryGut(years){


    post('/report/landUseChangeAndForestry/list', {
      year:years,

    })
      .then((res) => {

        if (res.code==0) {



          var Alldata =res.data;

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


          _Data1.push((Alldata.C.arborForest+Alldata.C.economicForest+Alldata.C.bambooForest+Alldata.C.countrySpecialIrrigation+Alldata.C.scatteredWoodSurroundedByTreesSparseForest+Alldata.C.harvestingConsumption+Alldata.C.lossOfConsumption).toFixed(2))

          _Data1.push(Alldata.C.arborForest)//乔木林
          _Data1.push(Alldata.C.economicForest)//经济林
          _Data1.push(Alldata.C.bambooForest)//竹林
          _Data1.push(Alldata.C.countrySpecialIrrigation)//特种灌木林
          _Data1.push(Alldata.C.scatteredWoodSurroundedByTreesSparseForest)//疏林、散生木和四旁树
          _Data1.push(Alldata.C.harvestingConsumption)//采伐消耗
          _Data1.push(Alldata.C.lossOfConsumption)//枯损消耗

          _Data1.push((Alldata.C.combustionEmission+Alldata.C.decompositionOfEmission).toFixed(2))

          _Data1.push(Alldata.C.combustionEmission)//燃烧排放
          _Data1.push(Alldata.C.decompositionOfEmission)//分解排放

          _Data1.push((Alldata.C.combustionEmission+Alldata.C.decompositionOfEmission
            +Alldata.C.arborForest+Alldata.C.economicForest+Alldata.C.bambooForest+Alldata.C.countrySpecialIrrigation+Alldata.C.scatteredWoodSurroundedByTreesSparseForest+Alldata.C.harvestingConsumption+Alldata.C.lossOfConsumption).toFixed(2))
     


          _Data2.push((Alldata.CO2.arborForest+Alldata.CO2.economicForest+Alldata.CO2.economicForest+Alldata.CO2.bambooForest+Alldata.CO2.countrySpecialIrrigation+Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest+Alldata.CO2.harvestingConsumption+Alldata.CO2.lossOfConsumption).toFixed(2))

          _Data2.push(Alldata.CO2.arborForest)//乔木林
          _Data2.push(Alldata.CO2.economicForest)//经济林
          _Data2.push(Alldata.CO2.bambooForest)//竹林
          _Data2.push(Alldata.CO2.countrySpecialIrrigation)//特种灌木林
          _Data2.push(Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest)//疏林、散生木和四旁树
          _Data2.push(Alldata.CO2.harvestingConsumption)//采伐消耗
          _Data2.push(Alldata.CO2.lossOfConsumption)//枯损消耗

          _Data2.push((Alldata.CO2.combustionEmission+Alldata.CO2.decompositionOfEmission).toFixed(2))
          _Data2.push(Alldata.CO2.combustionEmission)//燃烧排放
          _Data2.push(Alldata.CO2.decompositionOfEmission)//分解排放

          _Data2.push((Alldata.CO2.combustionEmission+Alldata.CO2.decompositionOfEmission
          +Alldata.CO2.arborForest+Alldata.CO2.economicForest+Alldata.CO2.economicForest+Alldata.CO2.bambooForest+Alldata.CO2.countrySpecialIrrigation+Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest+Alldata.CO2.harvestingConsumption+Alldata.CO2.lossOfConsumption).toFixed(2))
     


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
       


          _Data5.push((Alldata.CO2.arborForest+Alldata.CO2.economicForest+Alldata.CO2.economicForest+Alldata.CO2.bambooForest+Alldata.CO2.countrySpecialIrrigation+Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest+Alldata.CO2.harvestingConsumption+Alldata.CO2.lossOfConsumption).toFixed(2))
          _Data5.push(Alldata.CO2.arborForest)
          _Data5.push(Alldata.CO2.economicForest)
          _Data5.push(Alldata.CO2.bambooForest)
          _Data5.push(Alldata.CO2.countrySpecialIrrigation)
          _Data5.push(Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest)
          _Data5.push(Alldata.CO2.harvestingConsumption)
          _Data5.push(Alldata.CO2.lossOfConsumption)

          _Data5.push(((Alldata.CO2.combustionEmission+(Alldata.CH4.combustionEmission*21/10000)+(Alldata.N2O.combustionEmission*310/1000))+Alldata.CO2.decompositionOfEmission).toFixed(2))

          _Data5.push((Alldata.CO2.combustionEmission+(Alldata.CH4.combustionEmission*21/10000)+(Alldata.N2O.combustionEmission*310/1000)).toFixed(2))
          _Data5.push(Alldata.CO2.decompositionOfEmission)

        
          _Data5.push(((Alldata.CO2.arborForest+Alldata.CO2.economicForest+Alldata.CO2.economicForest+Alldata.CO2.bambooForest+Alldata.CO2.countrySpecialIrrigation+Alldata.CO2.scatteredWoodSurroundedByTreesSparseForest+Alldata.CO2.harvestingConsumption+Alldata.CO2.lossOfConsumption)
        +((Alldata.CO2.combustionEmission+(Alldata.CH4.combustionEmission*21/10000)+(Alldata.N2O.combustionEmission*310/1000))+Alldata.CO2.decompositionOfEmission)).toFixed(2))
       

          _Data6.push(0)
          _Data6.push(0)
          _Data6.push(0)
          _Data6.push(0)
          _Data6.push(0)
          _Data6.push(0)
          _Data6.push(0)
          _Data6.push(0)
          _Data6.push(0)
          _Data6.push(0)
          _Data6.push(0)
          _Data6.push(0)
        

         


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
          message.success(res.message);

        } else {
          message.error(res.message);
        }
      });
  }

  //年份选择
  selesctYears(years){

    this.setState({ loading: true});
    this.setState({years:years})
    this.queryGut(years)
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
          <span className={styles.title_span}> 工业生产过程温室气体排放量计算</span>
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
            <p>工业生产过程清单结果</p>


            <Table  pagination={false} bordered={true}  columns={columns} dataSource={dataSource} scroll={{ x: 1000, y: 1020 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

          </div>
        </Spin>









      </div>
    );

  }
}


export default Form.create()(ElectricTable);

