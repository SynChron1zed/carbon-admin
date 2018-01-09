/**
 * 电力Created by dixu on 2017/10/17.
 */
import React from 'react';
import {Table, Input, Form, Popconfirm, message, Spin, Alert, Switch} from 'antd';

import ReactDOM from 'react-dom'
import styles from './Electric.less';
import createReactClass from 'create-react-class';
import {post} from '../../../utils/carbonRequest';
import $ from 'jquery';

class EditableCell extends React.Component {

    state = {
        value: this.props.value,
        editable: this.props.editable || false,
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.editable !== this.state.editable || nextProps.value !== this.state.value) {
            this.setState({editable: nextProps.editable, value: nextProps.value});
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
                this.setState({value: this.cacheValue});
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
        this.setState({value});
    }

    render() {

        const {value, editable} = this.state;
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
                width: 280,

                render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),
            },

            {
                title: '电网名称', dataIndex: 'gridName', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'gridName', text),
            }, {
                title: '电量（亿kWh）', dataIndex: 'electricity', width: 150,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'electricity', text),
            }, {
                title: '间接排放因子（kgCO2/kWh)', dataIndex: 'indirectEmissionFactor', width: 200,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'indirectEmissionFactor', text),
            }, {
                title: '排放量（万吨CO2)', dataIndex: 'emissions', width: 150,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'emissions', text),
            },
            {
                title: '编辑',
                dataIndex: 'operation',

                width: 100,

                render: (text, record, index) => {

                    const {editable} = this.state.data[index].gridName;
                    return (
                        <div className={styles.editableOperations}>

                            { index == 7 || index == 1 ? <span></span> :

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
            loading: true,

            collapsed: false,
            select: 1,
            trigger: true,
            user: [],


            AllData: [],
            years: '2014'
        };

        this.queryElectric('2014');

        //$("#bodyTable1").hide();

    }


    // 部门方法 1.1
    renderColumns(data, index, key, text) {


        const {editable, status} = data[index][key];
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
        this.setState({data});

        if (key == 'indirectEmissionFactor') {

            this.updateElectric(index, data);
        }
        console.log(data)
    }


    edit(index) {

        const {data} = this.state;
        Object.keys(data[index]).forEach((item) => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = true;
            }
        });
        this.setState({data});
    }

    editDone(index, type) {

        const {data} = this.state;
        Object.keys(data[index]).forEach((item) => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = false;
                data[index][item].status = type;
            }
        });
        this.setState({data}, () => {
            Object.keys(data[index]).forEach((item) => {
                if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                    delete data[index][item].status;
                }
            });
        });
    }

    //co2排放量-非能源利用
    queryElectric(years) {


        post('/activityLevelDataEntry/energyActivity/totalFossilFuels/electricityTransferCallsForIndirectCO2Discharge/list', {
            year: years,

        })
            .then((res) => {

                if (res.code == 0) {

                    var Alldata = res.data;

                    const _Data = []

                    _Data.push(Alldata.recallOfElectricity);//调出电力
                    _Data.push(Alldata.transferredToElectricity);//调入电力
                    _Data.push(Alldata.fromGrid1); //来自电网1
                    _Data.push(Alldata.fromGrid2);//来自电网1
                    _Data.push(Alldata.fromGrid3);//来自电网1
                    _Data.push(Alldata.fromGrid4);//来自电网1
                    _Data.push(Alldata.fromGrid5);//来自电网1
                    _Data.push('');//总计


                    const fossilTitle = [


                        '调出电力',
                        '调入电力',
                        '　　来自电网1',
                        '　　来自电网2',
                        '　　来自电网3',
                        '　　来自电网4',
                        '　　来自电网5',
                        '合计',

                    ]

                    const _a = [];

                    var _Total = 0;   //排放量（万吨CO2)
                    var _Total1 = 0;  //电量（亿kWh）
                    var _Total2 = 0;   //间接排放因子（kgCO2/kWh)

                    for (var i = 0; i < 7; i++) {


                        if (i == 1) {
                            _a.push({
                                key: i,
                                name: fossilTitle[i],
                                gridName: _Data[i].gridName,
                                electricity: _Data[i].electricity,
                                indirectEmissionFactor: _Data[i].indirectEmissionFactor,
                                emissions: _Data[i].emissions,

                            });
                        } else {

                            _a.push({
                                key: i,
                                name: fossilTitle[i],
                                gridName: _Data[i].gridName,
                                electricity: _Data[i].electricity,
                                indirectEmissionFactor: _Data[i].indirectEmissionFactor,
                                emissions: _Data[i].emissions,

                            });
                        }


                        if (i == 1 || i == 0) {
                            _Total += 0
                            _Total1 += 0
                        } else {
                            _Total += (_Data[i].emissions)
                            _Total1 += (_Data[i].electricity)
                        }


                    }


                    _a.push({
                        key: i,
                        name: fossilTitle[7],
                        gridName: '',
                        electricity: '',
                        indirectEmissionFactor: '',
                        emissions: 0,

                    });


                    console.log(_a);


                    const _b = [];


                    for (var i = 0; i < _a.length; i++) {

                        if (i == 1) {
                            _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    gridName: {
                                        editable: false,
                                        value: _a[i].gridName,
                                    },
                                    electricity: {
                                        editable: false,
                                        value: _Total1,
                                    },
                                    indirectEmissionFactor: {
                                        editable: false,
                                        value: _a[i + 1].indirectEmissionFactor,
                                    },
                                    emissions: {

                                        value: _Total.toFixed(2),
                                    },

                                }
                            )
                        } else if (i == 7) {
                            _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    gridName: {

                                        value: _a[i].gridName,
                                    },
                                    electricity: {

                                        value: _a[i].electricity,
                                    },
                                    indirectEmissionFactor: {

                                        value: _a[i].indirectEmissionFactor,
                                    },
                                    emissions: {

                                        value: (_Total - _a[0].emissions).toFixed(2),
                                    },

                                }
                            )
                        } else {
                            _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    gridName: {
                                        editable: false,
                                        value: _a[i].gridName,
                                    },
                                    electricity: {
                                        editable: false,
                                        value: _a[i].electricity,
                                    },
                                    indirectEmissionFactor: {
                                        editable: false,
                                        value: _a[i].indirectEmissionFactor,
                                    },
                                    emissions: {

                                        value: _a[i].emissions.toFixed(2),
                                    },

                                }
                            )
                        }


                    }


                    console.log(_b);


                    this.setState({data: _b});
                    this.setState({loading: false});


                } else {
                    message.error('数据错误！');
                }
            });

    }

    //co2排放量-非能源利用update
    updateElectric(index, data, a) {

        var data = data

        const Directory = [
            'recallOfElectricity',
            'transferredToElectricity',
            'fromGrid1',
            'fromGrid2',
            'fromGrid3',
            'fromGrid4',
            'fromGrid5',


        ]

        var DirectoryIndex = Directory[index];

        var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/electricityTransferCallsForIndirectCO2Discharge/update'
        var bodyName = 'electricityTransferCallsForIndirectCO2Discharge'


        var obj = {
            "year": this.state.years
        };

        obj[bodyName] = {}

        obj[bodyName][DirectoryIndex] = {
            "gridName": data[index].gridName.value,
            "electricity": data[index].electricity.value,
            "indirectEmissionFactor": data[index].indirectEmissionFactor.value,

        }

        post(url, obj)
            .then((res) => {

                if (res.code == 0) {
                    message.success(res.message);
                    this.queryElectric(this.state.years)

                } else {
                    message.error('数据录入有误，请重新录入！');
                }
            });
    }


    //年份选择
    selesctYears(years) {

        this.setState({loading: true});
        this.setState({years: years})
        this.queryElectric(years)
    }

    render() {

        const {data} = this.state;
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
                    <span className={styles.title_span}>电力调入调出CO2间接排放</span>
                </div>

                <div className={styles.select}>
                    <div className={styles.targetChoose}>
                        <span className={styles.selectH1}>数据年份:</span>
                        <ul>
                            <li id="li1" className={'2005' == this.state.years ? styles.li_focus : styles.eee}
                                onClick={() => {
                                    this.selesctYears('2005')
                                }}>2005
                            </li>
                            <li id="li2" className={'2010' == this.state.years ? styles.li_focus : styles.eee}
                                onClick={() => {
                                    this.selesctYears('2010')
                                }}>2010
                            </li>
                            <li id="li3" className={'2012' == this.state.years ? styles.li_focus : styles.eee}
                                onClick={() => {
                                    this.selesctYears('2012')
                                }}>2012
                            </li>
                            <li id="li4" className={'2014' == this.state.years ? styles.li_focus : styles.eee}
                                onClick={() => {
                                    this.selesctYears('2014')
                                }}>2014
                            </li>
                        </ul>
                    </div>


                </div>


                <div className={styles.entryBody} id="bodyTable1">
                    <p>电力调入调出间接排放</p>
                    <Spin spinning={this.state.loading}>
                        <Table size="small" pagination={false} bordered={true} columns={columns} dataSource={dataSource}
                               scroll={{x: 1000, y: 820}}
                               rowClassName={(record, index) => index % 2 === 0 ? '' : styles.columnsC }/>
                    </Spin>
                </div>


            </div>
        );

    }
}


export default Form.create()(ElectricTable);
