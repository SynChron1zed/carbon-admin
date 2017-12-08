/**
 * 废弃物处理Created by dixu on 2017/10/17.
 */
import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch ,Radio } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Waste.less';
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
        title: '固体废弃物产生量(万吨)', dataIndex: 'solidWasteGeneration', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'solidWasteGeneration', text),
      }, {
        title: '填埋处理率', dataIndex: 'landfillRate', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'landfillRate', text),
      }, {
        title: '甲烷总排放量(万吨)', dataIndex: 'totalMethaneEmissions', width: 100,
        render: (text, record, index) => this.renderColumns(this.state.data, index, 'totalMethaneEmissions', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data[index].solidWasteGeneration;
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
        width: 200,
        colSpan:1,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'name', text),},
      {
        title: '不同填埋类型处理比例',
        children: [{
          title: '（没有填埋的垃圾按照未分类填埋处理）', dataIndex: 'differentLandfillTypeTreatmentRatio', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'differentLandfillTypeTreatmentRatio', text),
            props: {},

          };

            return obj},
        }],
      }, {
        title: '不同类型填埋场处理量(万吨)', dataIndex: 'differentTypesOfLandfillDisposalCapacity', width: 200,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'differentTypesOfLandfillDisposalCapacity', text),
      }, {
        title: '甲烷排放量(E)(万吨)', dataIndex: 'methaneEmissions', width: 200,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'methaneEmissions', text),
      }, {
        title: '甲烷回收量(R)(万吨)', dataIndex: 'methaneRecovery', width: 200,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'methaneRecovery', text),
      }, {
        title: '可分解的DOC比例(DOCF)', dataIndex: 'decomposableDOCRatio', width: 200,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'decomposableDOCRatio', text),
      }, {
        title: '甲烷气体比例(F)', dataIndex: 'methaneGasRatio', width: 100,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'methaneGasRatio', text),
      }, {
        title: '甲烷修正因子(MCF)', dataIndex: 'methaneCorrectionFactor', width: 200,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'methaneCorrectionFactor', text),
      },{
        title: '氧化因子(OX)', dataIndex: 'oxidationFactor', width: 200,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'oxidationFactor', text),
      },{
        title: '可降解有机碳(DOC)(Kg碳/Kg废弃物)', dataIndex: 'degradableOrganicCarbon', width: 200,
        render: (text, record, index) => this.renderColumns1(this.state.data1, index, 'degradableOrganicCarbon', text),
      },  {
        title: '纸张和纸板',
        children: [{
          title: '成分', dataIndex: 'paperAndCardboardIngredients', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'paperAndCardboardIngredients', text),
            props: {},

          };

            return obj},
        },{
          title: 'DOC占湿废弃物比例', dataIndex: 'paperAndCardboardDOCRatioOfWetWaste', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'paperAndCardboardDOCRatioOfWetWaste', text),
            props: {},

          };

            return obj},
        }],
      },  {
        title: '纺织品',
        children: [{
          title: '成分', dataIndex: 'textilesIngredients', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'textilesIngredients', text),
            props: {},

          };

            return obj},
        },{
          title: 'DOC占湿废弃物比例', dataIndex: 'textilesDOCRatioOfWetWaste', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'textilesDOCRatioOfWetWaste', text),
            props: {},

          };

            return obj},
        }],
      },  {
        title: '食品垃圾',
        children: [{
          title: '成分', dataIndex: 'foodWasteIngredients', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'foodWasteIngredients', text),
            props: {},

          };

            return obj},
        },{
          title: 'DOC占湿废弃物比例', dataIndex: 'foodWasteDOCRatioOfWetWaste', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'foodWasteDOCRatioOfWetWaste', text),
            props: {},

          };

            return obj},
        }],
      },  {
        title: '木材',
        children: [{
          title: '成分', dataIndex: 'woodIngredients', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'woodIngredients', text),
            props: {},

          };

            return obj},
        },{
          title: 'DOC占湿废弃物比例', dataIndex: 'woodDOCRatioOfWetWaste', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'woodDOCRatioOfWetWaste', text),
            props: {},

          };

            return obj},
        }],
      },  {
        title: '庭院和公园废弃物',
        children: [{
          title: '成分', dataIndex: 'courtyardAndParkWasteIngredients', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'courtyardAndParkWasteIngredients', text),
            props: {},

          };

            return obj},
        },{
          title: 'DOC占湿废弃物比例', dataIndex: 'courtyardAndParkWasteDOCRatioOfWetWaste', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'courtyardAndParkWasteDOCRatioOfWetWaste', text),
            props: {},

          };

            return obj},
        }],
      },  {
        title: '橡胶和皮革',
        children: [{
          title: '成分', dataIndex: 'rubberAndLeatherIngredients', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'rubberAndLeatherIngredients', text),
            props: {},

          };

            return obj},
        },{
          title: 'DOC占湿废弃物比例', dataIndex: 'rubberAndLeatherDOCRatioOfWetWaste', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'rubberAndLeatherDOCRatioOfWetWaste', text),
            props: {},

          };

            return obj},
        }],
      },  {
        title: '其他',
        children: [{
          title: '成分', dataIndex: 'otherIngredients', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'otherIngredients', text),
            props: {},

          };

            return obj},
        },{
          title: 'DOC占湿废弃物比例', dataIndex: 'otherDOCRatioOfWetWaste', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'otherDOCRatioOfWetWaste', text),
            props: {},

          };

            return obj},
        }],
      },  {
        title: '未列举项请此处添加',
        children: [{
          title: '成分', dataIndex: 'unlistedItemsAreAddedHereIngredients', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'unlistedItemsAreAddedHereIngredients', text),
            props: {},

          };

            return obj},
        },{
          title: 'DOC占湿废弃物比例', dataIndex: 'unlistedItemsAreAddedHereDOCRatioOfWetWaste', width: 150,
          render: (text, record, index) => {  const obj = {
            children:this.renderColumns1(this.state.data1, index, 'unlistedItemsAreAddedHereDOCRatioOfWetWaste', text),
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

          const { editable } = this.state.data1[index].differentLandfillTypeTreatmentRatio;
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
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'name', text),},

      {
        title: '焚烧量(IW／万吨)', dataIndex: 'incineration', width: 100,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'incineration', text),
      }, {
        title: '废弃物碳含量(CCW)', dataIndex: 'wasteCarbonContent', width: 100,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'wasteCarbonContent', text),
      }, {
        title: '矿物碳在碳总量的比例(FCF)', dataIndex: 'mineralCarbonInTheProportionOfCarbon', width: 100,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'mineralCarbonInTheProportionOfCarbon', text),
      }, {
        title: '燃烧效率(EF)', dataIndex: 'combustionEfficiency', width: 100,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'combustionEfficiency', text),
      }, {
        title: 'CO2排放量(万吨)', dataIndex: 'CO2Emissions', width: 100,
        render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'CO2Emissions', text),
      }, {
        title: 'CO2总排放量(万吨)', dataIndex: 'totalCO2Emissions', width: 100,
        render: (text, record, index) =>
        {  const obj = {
          children:this.renderColumns2(this.state.data2, index, 'totalCO2Emissions', text),
          props: {},

        };
          if (index === 0) {
            obj.props.rowSpan = 3;
          }
          if (index === 1) {
            obj.props.rowSpan =0;
          }
          if (index === 2) {
            obj.props.rowSpan =0;
          }
          return obj}

      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data2[index].incineration;
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
        render: (text, record, index) =>   {  const obj = {
          children:this.renderColumns3(this.state.data3, index, 'name', text),
          props: {},

        };
          if (index === 0) {
            obj.props.rowSpan = 2;
          }
          if (index === 1) {
            obj.props.rowSpan =0;
          }
          if (index === 2) {
            obj.props.rowSpan =2;
          }
          if (index === 3) {
            obj.props.rowSpan =0;
          }
          return obj}},

      {
        title: '废水类型', dataIndex: 'feishui', width: 100,
        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'feishui', text),
      }, {
        title: '可降解有机物总量(kg/年)', dataIndex: 'degradableOrganicMatter', width: 100,
        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'degradableOrganicMatter', text),
      }, {
        title: '随污泥去除有机物总量(kg/年)', dataIndex: 'removalOfOrganicMatterWithSludge', width: 100,
        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'removalOfOrganicMatterWithSludge', text),
      }, {
        title: '甲烷修正因子(MCF)', dataIndex: 'methaneCorrectionFactor_MCF', width: 100,
        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'methaneCorrectionFactor_MCF', text),
      }, {
        title: '甲烷最大产生能力Bo(kg甲烷/kg有机物)', dataIndex: 'theMaximumCapacityOfMethane', width: 100,
        render: (text, record, index) => this.renderColumns3(this.state.data3, index, 'theMaximumCapacityOfMethane', text),
      }, {
        title: '甲烷回收量(万吨)', dataIndex: 'methaneRecovery', width: 100,
        render: (text, record, index) =>
        {  const obj = {
          children:this.renderColumns3(this.state.data3, index, 'methaneRecovery', text),
          props: {},

        };

          return obj}

      },{
        title: '甲烷排放量(万吨)', dataIndex: 'methaneEmissions', width: 100,
        render: (text, record, index) =>
        {  const obj = {
          children:this.renderColumns3(this.state.data3, index, 'methaneEmissions', text),
          props: {},

        };

          return obj}

      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data3[index].degradableOrganicMatter;
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
        render: (text, record, index) => this.renderColumns4(this.state.data4, index, 'name', text),},

      {
        title: '城镇人口数(人）', dataIndex: 'townPopulation', width: 150,
        render: (text, record, index) => this.renderColumns4(this.state.data4, index, 'townPopulation', text),
      }, {
        title: '每人年均蛋白质消费量(kg/人/年)', dataIndex: 'annualPerCapitalProteinConsumption', width: 200,
        render: (text, record, index) => this.renderColumns4(this.state.data4, index, 'annualPerCapitalProteinConsumption', text),
      }, {
        title: '蛋白质中的氮含量(kg氮/kg蛋白质)', dataIndex: 'theNitrogenContentInTheProtein', width: 200,
        render: (text, record, index) => this.renderColumns4(this.state.data4, index, 'theNitrogenContentInTheProtein', text),
      }, {
        title: '废水中非消费性蛋白质排放因子', dataIndex: 'nonConsumptionOfProteinInWasteWater', width: 200,
        render: (text, record, index) => this.renderColumns4(this.state.data4, index, 'nonConsumptionOfProteinInWasteWater', text),
      }, {
        title: '工业和商业的蛋白质排放因子', dataIndex: 'industrialAndCommercialProteinDischargeFactors', width: 200,
        render: (text, record, index) => this.renderColumns4(this.state.data4, index, 'industrialAndCommercialProteinDischargeFactors', text),
      }, {
        title: '随污泥清除的氮(kg)', dataIndex: 'withNitrogenRemovedFromTheSludge', width: 200,
        render: (text, record, index) => this.renderColumns4(this.state.data4, index, 'withNitrogenRemovedFromTheSludge', text),
      }, {
        title: '污水中氮含量(kg)', dataIndex: 'nitrogenCntentInWastewater', width: 100,
        render: (text, record, index) => this.renderColumns4(this.state.data4, index, 'nitrogenCntentInWastewater', text),
      }, {
        title: 'N2O排放因子(kgN2O/kg氮)', dataIndex: 'n2OEmissionFactor', width: 200,
        render: (text, record, index) => this.renderColumns4(this.state.data4, index, 'n2OEmissionFactor', text),
      }, {
        title: 'N2O排放量(万吨)', dataIndex: 'N2OEmissions', width: 100,
        render: (text, record, index) => this.renderColumns4(this.state.data4, index, 'N2OEmissions', text),
      },
      {
        title: '编辑',
        dataIndex: 'operation',

        width: 100,

        render: (text, record, index) => {

          const { editable } = this.state.data4[index].townPopulation;
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

    this.state = {

      data: [],
      data1: [],
      data2: [],
      data3: [],
      data4: [],
      loading: true ,

      collapsed: false,
      select:1,
      trigger:true,
      user:[],




      AllData:[],
      years:'2014'
    };

    this.queryWaste('2014');

    //$("#bodyTable1").hide();

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

     this.updateWaste4(index,data4);
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



    const data3 = [...this.state.data3];
    data3[index][key].value = value;
    this.setState({ data3 });

    if(key  == 'methaneRecovery'){

      this.updateWaste3(index,data3);
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

    if(key  == 'combustionEfficiency'){

     this.updateWaste2(index,data2);
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

    if(key  == 'unlistedItemsAreAddedHereDOCRatioOfWetWaste'){

      this.updateWaste1(index,data1);
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

    if(key  == 'landfillRate'){

      this.updateWaste(index,data);
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

  //查询
  queryWaste(years){



    post('/activityLevelDataEntry/wasteDisposal/list', {
      year:years,

    })
      .then((res) => {


        if (res.code==0) {


          var Alldata =res.data;

          console.log(Alldata)

          const _Data = []
          const _Data1 = []
          const _Data3 = []



          const fossilTitle = [


            '　　城市生活垃圾',
            '　　危险废弃物',
            '　　污水污泥',


          ]

          const fossilTitle1 = [


            '　　生活污水',
            '　　生活污水',
            '　　工业废水',
            '　　工业废水',


          ]

          const fossilTitle2 = [


            '　　排入环境BOD',
            '　　污水处理系统去除BOD',
            '　　排入环境COD',
            '　　污水处理系统去除COD',


          ]


          const fossilTitle3 = [


            '　　管理型填埋场',
            '　　非管理型填埋场（>5m)',
            '　　非管理型填埋场（<5m)',
            '　　未分类填埋场',


          ]


          _Data.push(Alldata.incinerationOfCarbonDioxideEmissions.garbageOfUrbanLife);
          _Data.push(Alldata.incinerationOfCarbonDioxideEmissions.hazardousWaste);
          _Data.push(Alldata.incinerationOfCarbonDioxideEmissions.sewageSludge);


          _Data1.push(Alldata.wasteWaterMethaneEmissions.intoTheEnvironmentBOD);
          _Data1.push(Alldata.wasteWaterMethaneEmissions.sewageTreatmentSystemToRemoveBOD);
          _Data1.push(Alldata.wasteWaterMethaneEmissions.dischargedIntoTheEnvironmentCOD);
          _Data1.push(Alldata.wasteWaterMethaneEmissions.sewageTreatmentSystemToRemoveCOD);


          _Data3.push(Alldata.landfillClass.managedLandfill);
          _Data3.push(Alldata.landfillClass.nonManagedLandfillMoreThan5m);
          _Data3.push(Alldata.landfillClass.nonManagedLandfillLessThan5m);
          _Data3.push(Alldata.landfillClass.unclassifiedLandfill);


          const _a3 = [];//废水甲烷排放


          for(var i = 0 ;i<4;i++){


            _a3.push({
              key: i,
              name:fossilTitle1[i],
              feishui:fossilTitle2[i],
              degradableOrganicMatter: _Data1[i].degradableOrganicMatter,
              removalOfOrganicMatterWithSludge: _Data1[i].removalOfOrganicMatterWithSludge,
              methaneCorrectionFactor_MCF: _Data1[i].methaneCorrectionFactor_MCF,
              theMaximumCapacityOfMethane: _Data1[i].theMaximumCapacityOfMethane,
              methaneRecovery: _Data1[i].methaneRecovery,
              methaneEmissions: _Data1[i].methaneEmissions,


            });


          }




          const _a2 = []; //焚烧处理二氧化碳排放
          var _totalCO2Emissions = 0; //CO2总排放量(万吨)


          for(var i = 0 ;i<3;i++){


              _a2.push({
                key: i,
                name:fossilTitle[i],
                incineration: _Data[i].incineration,
                wasteCarbonContent: _Data[i].wasteCarbonContent,
                mineralCarbonInTheProportionOfCarbon: _Data[i].mineralCarbonInTheProportionOfCarbon,
                combustionEfficiency: _Data[i].combustionEfficiency,
                CO2Emissions: _Data[i].CO2Emissions,
                totalCO2Emissions: '',


              });
            _totalCO2Emissions += _Data[i].CO2Emissions


          }





          const _a1 = []; //城市固体废弃物填埋处理甲烷排放


          for(var i = 0 ;i<4;i++){


            _a1.push({
              key: i,
              name:fossilTitle3[i],
              differentLandfillTypeTreatmentRatio: _Data3[i].differentLandfillTypeTreatmentRatio,
              differentTypesOfLandfillDisposalCapacity: _Data3[i].differentTypesOfLandfillDisposalCapacity,
              methaneEmissions: _Data3[i].methaneEmissions,
              methaneRecovery:_Data3[i].methaneRecovery,
              decomposableDOCRatio: _Data3[i].decomposableDOCRatio,
              methaneGasRatio: _Data3[i].methaneGasRatio,
              methaneCorrectionFactor: _Data3[i].methaneCorrectionFactor,
              oxidationFactor: _Data3[i].oxidationFactor,
              degradableOrganicCarbon: _Data3[i].degradableOrganicCarbon,
              paperAndCardboardIngredients: _Data3[i].paperAndCardboardIngredients,
              paperAndCardboardDOCRatioOfWetWaste: _Data3[i].paperAndCardboardDOCRatioOfWetWaste,
              textilesIngredients: _Data3[i].textilesIngredients,
              textilesDOCRatioOfWetWaste: _Data3[i].textilesDOCRatioOfWetWaste,
              foodWasteIngredients: _Data3[i].foodWasteIngredients,
              foodWasteDOCRatioOfWetWaste: _Data3[i].foodWasteDOCRatioOfWetWaste,
              woodIngredients: _Data3[i].woodIngredients,
              woodDOCRatioOfWetWaste: _Data3[i].woodDOCRatioOfWetWaste,
              courtyardAndParkWasteIngredients: _Data3[i].courtyardAndParkWasteIngredients,
              courtyardAndParkWasteDOCRatioOfWetWaste: _Data3[i].courtyardAndParkWasteDOCRatioOfWetWaste,
              rubberAndLeatherIngredients: _Data3[i].rubberAndLeatherIngredients,
              rubberAndLeatherDOCRatioOfWetWaste: _Data3[i].rubberAndLeatherDOCRatioOfWetWaste,
              otherIngredients: _Data3[i].otherIngredients,
              otherDOCRatioOfWetWaste: _Data3[i].otherDOCRatioOfWetWaste,
              unlistedItemsAreAddedHereIngredients: _Data3[i].unlistedItemsAreAddedHereIngredients,
              unlistedItemsAreAddedHereDOCRatioOfWetWaste: _Data3[i].unlistedItemsAreAddedHereDOCRatioOfWetWaste,


            });


          }







          const _b1 = [];


          for(var i = 0 ; i<_a1.length;i++){


            _b1.push({
                key:_a1[i].key,
                name:{

                  value:_a1[i].name ,
                },
              differentLandfillTypeTreatmentRatio:{
                  editable: false,
                  value:_a1[i].differentLandfillTypeTreatmentRatio ,
                },
              differentTypesOfLandfillDisposalCapacity:{

                value:_a1[i].differentTypesOfLandfillDisposalCapacity ,
              },
              methaneEmissions:{

                value:_a1[i].methaneEmissions ,
              },
              methaneRecovery:{
                editable: false,
                value:_a1[i].methaneRecovery ,
              },
              decomposableDOCRatio:{
                editable: false,
                value:_a1[i].decomposableDOCRatio ,
              },
              methaneGasRatio:{
                editable: false,
                value:_a1[i].methaneGasRatio ,
              },
              methaneCorrectionFactor:{
                editable: false,
                value:_a1[i].methaneCorrectionFactor ,
              },
              oxidationFactor:{
                editable: false,
                value:_a1[i].oxidationFactor ,
              },
              degradableOrganicCarbon:{

                value:_a1[i].degradableOrganicCarbon ,
              },
              paperAndCardboardIngredients:{
                editable: false,
                value:_a1[i].paperAndCardboardIngredients,
              },
              paperAndCardboardDOCRatioOfWetWaste:{
                editable: false,
                value:_a1[i].paperAndCardboardDOCRatioOfWetWaste,
              },
              textilesIngredients:{
                editable: false,
                value:_a1[i].textilesIngredients ,
              },
              textilesDOCRatioOfWetWaste:{
                editable: false,
                value:_a1[i].textilesDOCRatioOfWetWaste ,
              },
              foodWasteIngredients:{
                editable: false,
                value:_a1[i].foodWasteIngredients ,
              },
              foodWasteDOCRatioOfWetWaste:{
                editable: false,
                value:_a1[i].foodWasteDOCRatioOfWetWaste,
              },
              woodIngredients:{
                editable: false,
                value:_a1[i].woodIngredients ,
              },
              woodDOCRatioOfWetWaste:{
                editable: false,
                value:_a1[i].woodDOCRatioOfWetWaste ,
              },
              courtyardAndParkWasteIngredients:{
                editable: false,
                value:_a1[i].courtyardAndParkWasteIngredients ,
              },
              courtyardAndParkWasteDOCRatioOfWetWaste:{
                editable: false,
                value:_a1[i].courtyardAndParkWasteDOCRatioOfWetWaste ,
              },
              rubberAndLeatherIngredients:{
                  editable: false,
                  value:_a1[i].rubberAndLeatherIngredients,
                },

              rubberAndLeatherDOCRatioOfWetWaste:{
                  editable: false,
                  value:_a1[i].rubberAndLeatherDOCRatioOfWetWaste,
                },

              otherIngredients:{
                  editable: false,
                  value:_a1[i].otherIngredients ,
                },

              otherDOCRatioOfWetWaste:{
                  editable: false,
                  value:_a1[i].otherDOCRatioOfWetWaste ,
                },
              unlistedItemsAreAddedHereIngredients:{
                editable: false,
                value:_a1[i].unlistedItemsAreAddedHereIngredients ,
              },
              unlistedItemsAreAddedHereDOCRatioOfWetWaste:{
                editable: false,
                value:_a1[i].unlistedItemsAreAddedHereDOCRatioOfWetWaste ,
              },




              }
            )
          }




          const _b2 = [];


          for(var i = 0 ; i<_a2.length;i++){


            _b2.push({
                key:_a2[i].key,
                name:{

                  value:_a2[i].name ,
                },
              incineration:{
                  editable: false,
                  value:_a2[i].incineration ,
                },
              wasteCarbonContent: {
                  editable: false,
                  value:_a2[i].wasteCarbonContent ,
                },
              mineralCarbonInTheProportionOfCarbon: {
                editable: false,
                  value:_a2[i].mineralCarbonInTheProportionOfCarbon,
                },
              combustionEfficiency: {
                  editable: false,
                  value:_a2[i].combustionEfficiency ,
                },
              CO2Emissions: {

                  value:_a2[i].CO2Emissions ,
                },
              totalCO2Emissions: {

                  value:_totalCO2Emissions ,
                },


              }
            )
          }




          const _b3 = [];


          for(var i = 0 ; i<_a3.length;i++){


            _b3.push({
                key:_a3[i].key,
                name:{

                  value:_a3[i].name ,
                },
              feishui:{

                  value:_a3[i].feishui ,
                },
              degradableOrganicMatter: {
                  editable: false,
                  value:_a3[i].degradableOrganicMatter ,
                },
              removalOfOrganicMatterWithSludge: {
                  editable: false,
                  value:_a3[i].removalOfOrganicMatterWithSludge,
                },
              methaneCorrectionFactor_MCF: {
                  editable: false,
                  value:_a3[i].methaneCorrectionFactor_MCF ,
                },
              theMaximumCapacityOfMethane: {
                editable: false,
                  value:_a3[i].theMaximumCapacityOfMethane,
                },
              methaneRecovery: {
                editable: false,
                  value:_a3[i].methaneRecovery ,
                },

              methaneEmissions: {

                value:_a3[i].methaneEmissions ,
              },
              }
            )
          }





          const _b = [];


            _b.push({
                key:1,
                name:{

                  value:'' ,
                },
              solidWasteGeneration:{
                  editable: false,
                  value:Alldata.solidWasteGeneration.solidWasteGeneration ,
                },
              landfillRate: {
                  editable: false,
                  value:Alldata.solidWasteGeneration.landfillRate ,
                },
              totalMethaneEmissions: {

                  value:'0',
                }


              }
            );




          const _b4 = [];//废水处理氧化亚氮排放


          _b4.push({
              key:1,
              name:{

                value:'' ,
              },
            townPopulation:{
                editable: false,
                value:Alldata.wasteWaterTreatmentOfNitrousOxideEmissions.townPopulation ,
              },
            annualPerCapitalProteinConsumption: {
                editable: false,
                value:Alldata.wasteWaterTreatmentOfNitrousOxideEmissions.annualPerCapitalProteinConsumption,
              },
            theNitrogenContentInTheProtein: {
                editable: false,
                value:Alldata.wasteWaterTreatmentOfNitrousOxideEmissions.theNitrogenContentInTheProtein,
              },
            nonConsumptionOfProteinInWasteWater: {
                editable: false,
                value:Alldata.wasteWaterTreatmentOfNitrousOxideEmissions.nonConsumptionOfProteinInWasteWater,
              },
            industrialAndCommercialProteinDischargeFactors: {
                editable: false,
                value:Alldata.wasteWaterTreatmentOfNitrousOxideEmissions.industrialAndCommercialProteinDischargeFactors,
              },
            withNitrogenRemovedFromTheSludge: {
                editable: false,
                value:Alldata.wasteWaterTreatmentOfNitrousOxideEmissions.withNitrogenRemovedFromTheSludge,
              },
            nitrogenCntentInWastewater: {

                value:'0',
              },
            n2OEmissionFactor: {
                editable: false,
                value:Alldata.wasteWaterTreatmentOfNitrousOxideEmissions.n2OEmissionFactor,
              },
            N2OEmissions: {

                value:Alldata.wasteWaterTreatmentOfNitrousOxideEmissions.N2OEmissions,
              },



            }
          );




          this.setState({data:_b});
          this.setState({data2:_b2});
          this.setState({data3:_b3});
          this.setState({data4:_b4});
          this.setState({data1:_b1});
          this.setState({ loading: false});


        } else {
          message.error('数据错误！');
        }
      });

  }



  //页面顺序
  updateWaste(index,data,a){



    var data  = data

    const Directory = [
      'solidWasteGeneration',

    ]



    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/wasteDisposal/update'
    var bodyName = 'wasteDisposal';







    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}

    obj[bodyName][DirectoryIndex]= {
      "solidWasteGeneration": data[index].solidWasteGeneration.value,
      "landfillRate": data[index].landfillRate.value,

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

  //
  updateWaste1(index,data1,a){

    var data  = data1

    const Directory = [
      'managedLandfill',
      'nonManagedLandfillMoreThan5m',
      'nonManagedLandfillLessThan5m',
      'unclassifiedLandfill',


    ]



    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/wasteDisposal/update'
    var bodyName = 'wasteDisposal';
    var bodyName1 = 'landfillClass';






    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}
    obj[bodyName][bodyName1]={}
    obj[bodyName][bodyName1][DirectoryIndex]= {
      "differentLandfillTypeTreatmentRatio": data[index].differentLandfillTypeTreatmentRatio.value,
      "methaneRecovery": data[index].methaneRecovery.value,
      "decomposableDOCRatio": data[index].decomposableDOCRatio.value,
      "methaneGasRatio": data[index].methaneGasRatio.value,
      "methaneCorrectionFactor": data[index].methaneCorrectionFactor.value,
      "oxidationFactor": data[index].oxidationFactor.value,
      "paperAndCardboardIngredients": data[index].paperAndCardboardIngredients.value,
      "paperAndCardboardDOCRatioOfWetWaste": data[index].paperAndCardboardDOCRatioOfWetWaste.value,
      "textilesIngredients": data[index].textilesIngredients.value,
      "textilesDOCRatioOfWetWaste": data[index].textilesDOCRatioOfWetWaste.value,
      "foodWasteIngredients": data[index].foodWasteIngredients.value,
      "foodWasteDOCRatioOfWetWaste": data[index].foodWasteDOCRatioOfWetWaste.value,
      "woodIngredients": data[index].woodIngredients.value,
      "woodDOCRatioOfWetWaste": data[index].woodDOCRatioOfWetWaste.value,
      "courtyardAndParkWasteIngredients": data[index].courtyardAndParkWasteIngredients.value,
      "courtyardAndParkWasteDOCRatioOfWetWaste": data[index].courtyardAndParkWasteDOCRatioOfWetWaste.value,
      "rubberAndLeatherIngredients": data[index].rubberAndLeatherIngredients.value,
      "rubberAndLeatherDOCRatioOfWetWaste": data[index].rubberAndLeatherDOCRatioOfWetWaste.value,
      "otherIngredients": data[index].otherIngredients.value,
      "otherDOCRatioOfWetWaste": data[index].otherDOCRatioOfWetWaste.value,
      "unlistedItemsAreAddedHereIngredients": data[index].unlistedItemsAreAddedHereIngredients.value,
      "unlistedItemsAreAddedHereDOCRatioOfWetWaste": data[index].unlistedItemsAreAddedHereDOCRatioOfWetWaste.value,

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

  //
  updateWaste2(index,data2,a){

  var data  = data2

  const Directory = [
    'garbageOfUrbanLife',
    'hazardousWaste',
    'sewageSludge',



  ]



  var DirectoryIndex = Directory[index];

  var url = '/activityLevelDataEntry/wasteDisposal/update'
  var bodyName = 'wasteDisposal';
  var bodyName1 = 'incinerationOfCarbonDioxideEmissions';






  var obj={
    "year":this.state.years
  };

  obj[bodyName]={}
  obj[bodyName][bodyName1]={}
  obj[bodyName][bodyName1][DirectoryIndex]= {
    "incineration": data[index].incineration.value,
    "wasteCarbonContent": data[index].wasteCarbonContent.value,
    "mineralCarbonInTheProportionOfCarbon": data[index].mineralCarbonInTheProportionOfCarbon.value,
    "combustionEfficiency": data[index].combustionEfficiency.value,

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


  updateWaste3(index,data3,a){

    var data  = data3

    const Directory = [
      'intoTheEnvironmentBOD',
      'sewageTreatmentSystemToRemoveBOD',
      'dischargedIntoTheEnvironmentCOD',
      'sewageTreatmentSystemToRemoveCOD',

    ]



    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/wasteDisposal/update'
    var bodyName = 'wasteDisposal';
    var bodyName1 = 'wasteWaterMethaneEmissions';






    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}
    obj[bodyName][bodyName1]={}
    obj[bodyName][bodyName1][DirectoryIndex]= {
      "degradableOrganicMatter": data[index].degradableOrganicMatter.value,
      "removalOfOrganicMatterWithSludge": data[index].removalOfOrganicMatterWithSludge.value,
      "methaneCorrectionFactor_MCF": data[index].methaneCorrectionFactor_MCF.value,
      "theMaximumCapacityOfMethane": data[index].theMaximumCapacityOfMethane.value,
      "methaneRecovery": data[index].methaneRecovery.value,

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

  updateWaste4(index,data4,a){

    var data  = data4

    const Directory = [
      'wasteWaterTreatmentOfNitrousOxideEmissions',


    ]



    var DirectoryIndex = Directory[index];

    var url = '/activityLevelDataEntry/wasteDisposal/update'
    var bodyName = 'wasteDisposal';





    var obj={
      "year":this.state.years
    };

    obj[bodyName]={}
    obj[bodyName][DirectoryIndex]= {
      "townPopulation": data[index].townPopulation.value,
      "annualPerCapitalProteinConsumption": data[index].annualPerCapitalProteinConsumption.value,
      "theNitrogenContentInTheProtein": data[index].theNitrogenContentInTheProtein.value,
      "nonConsumptionOfProteinInWasteWater": data[index].nonConsumptionOfProteinInWasteWater.value,
      "industrialAndCommercialProteinDischargeFactors": data[index].industrialAndCommercialProteinDischargeFactors.value,
      "withNitrogenRemovedFromTheSludge": data[index].withNitrogenRemovedFromTheSludge.value,
      "n2OEmissionFactor": data[index].n2OEmissionFactor.value,


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
    this.queryWaste(years)
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


    const columns = this.columns;
    const columns1 = this.columns1;
    const columns2 = this.columns2;
    const columns3 = this.columns3;
    const columns4 = this.columns4;


    return (
      <div className={styles.normal}>
        <div className={styles.title}>
          <span className={styles.title_span}>废弃物处理活动</span>
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
          <p>城市固体废弃物填埋处理甲烷排放</p>
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
          <p>城市固体废弃物填埋处理甲烷排放</p>
          <div className={styles.greenSelect}>
            <span>是否采用本地化排放因子：</span>
            <RadioGroup defaultValue={1}>
              <Radio value={1}>否</Radio>
              <Radio value={2}>是</Radio>
            </RadioGroup>
          </div>

          <Table  pagination={false} bordered={true}  columns={columns1} dataSource={dataSource1} scroll={{ x: 4000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>


        <div className={styles.entryBody} id="bodyTable3"  >
          <p>焚烧处理二氧化碳排放</p>
          <div className={styles.greenSelect}>
            <span>是否采用本地化排放因子：</span>
            <RadioGroup defaultValue={1}>
              <Radio value={1}>否</Radio>
              <Radio value={2}>是</Radio>
            </RadioGroup>
          </div>

          <Table  pagination={false} bordered={true}  columns={columns2} dataSource={dataSource2} scroll={{ x: 2000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>




        <div className={styles.entryBody} id="bodyTable4"  >
          <p>废水甲烷排放</p>
          <div className={styles.greenSelect}>
            <span>是否采用本地化排放因子：</span>
            <RadioGroup defaultValue={1}>
              <Radio value={1}>否</Radio>
              <Radio value={2}>是</Radio>
            </RadioGroup>
          </div>

          <Table  pagination={false} bordered={true}  columns={columns3} dataSource={dataSource3} scroll={{ x: 2000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>

        <div className={styles.entryBody} id="bodyTable5"  >
          <p>废水处理氧化亚氮排放</p>
          <div className={styles.greenSelect}>
            <span>是否采用本地化排放因子：</span>
            <RadioGroup defaultValue={1}>
              <Radio value={1}>否</Radio>
              <Radio value={2}>是</Radio>
            </RadioGroup>
          </div>

          <Table  pagination={false} bordered={true}  columns={columns4} dataSource={dataSource4} scroll={{ x: 2000, y: 1520 }} rowClassName={(record, index) => index % 2  === 0 ? '' :styles.columnsC }/>

        </div>
        </Spin>


      </div>
    );

  }
}


export default Form.create()(ElectricTable);

