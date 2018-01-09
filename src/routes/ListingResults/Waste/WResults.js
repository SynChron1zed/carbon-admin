/**
 * 废弃物Created by dixu on 2017/10/31.
 */


import React from 'react';
import {Table, Input, Form, Popconfirm, message, Spin, Alert, Switch, Radio} from 'antd';

import ReactDOM from 'react-dom'
import styles from './Wgwp.less';
import createReactClass from 'create-react-class';
import {post} from '../../../utils/carbonRequest';
import $ from 'jquery';
const RadioGroup = Radio.Group;

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

class EditableCell1 extends React.Component {

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
                width: 100,

                render: (text, record, index) => {
                    const obj = {
                        children: this.renderColumns(this.state.data, index, 'name', text),
                        props: {},

                    };
                    if (index === 0) {
                        obj.props.rowSpan = 9;
                    }
                    if (index === 1) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 2) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 3) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 4) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 5) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 6) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 7) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 8) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 9) {
                        obj.props.rowSpan = 6;
                    }
                    if (index === 10) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 11) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 12) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 13) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 14) {
                        obj.props.rowSpan = 0;
                    }
                    if (index === 15) {
                        obj.props.colSpan = 4;
                    }
                    return obj
                }

            }, {
                title: '类型',
                children: [
                    {
                        title: '', dataIndex: 'p1', width: 80,
                        render: (text, record, index) => {
                            const obj = {
                                children: this.renderColumns(this.state.data, index, 'p1', text),
                                props: {},

                            };
                            if (index === 0) {
                                obj.props.rowSpan = 5;
                            }
                            if (index === 1) {
                                obj.props.rowSpan = 0;
                            }
                            if (index === 2) {
                                obj.props.rowSpan = 0;
                            }
                            if (index === 3) {
                                obj.props.rowSpan = 0;
                            }
                            if (index === 4) {
                                obj.props.rowSpan = 0;
                            }
                            if (index === 5) {
                                obj.props.colSpan = 3;
                            }
                            if (index === 6) {
                                obj.props.rowSpan = 2;
                            }
                            if (index === 7) {
                                obj.props.rowSpan = 0;
                            }
                            if (index === 8) {
                                obj.props.colSpan = 3;
                            }
                            if (index === 9) {
                                obj.props.rowSpan = 2;
                            }
                            if (index === 10) {
                                obj.props.rowSpan = 0;
                            }
                            if (index === 11) {
                                obj.props.colSpan = 3;
                            }
                            if (index === 12) {
                                obj.props.rowSpan = 2;
                            }
                            if (index === 13) {
                                obj.props.rowSpan = 0;
                            }
                            if (index === 14) {
                                obj.props.colSpan = 3;
                            }

                            if (index === 15) {
                                obj.props.colSpan = 0;
                            }
                            return obj
                        },
                    }, {
                        title: '', dataIndex: 'p2', width: 80,
                        render: (text, record, index) => {
                            const obj = {
                                children: this.renderColumns(this.state.data, index, 'p2', text),
                                props: {},

                            };
                            if (index === 0) {
                                obj.props.colSpan = 2;
                            }
                            if (index === 1) {
                                obj.props.rowSpan = 2;
                            }
                            if (index === 2) {
                                obj.props.rowSpan = 0;
                            }
                            if (index === 3) {
                                obj.props.colSpan = 2;
                            }
                            if (index === 4) {
                                obj.props.colSpan = 2;
                            }

                            if (index === 5) {
                                obj.props.colSpan = 0;
                            }
                            if (index === 6) {
                                obj.props.colSpan = 2;
                            }
                            if (index === 7) {
                                obj.props.colSpan = 2;
                            }
                            if (index === 8) {
                                obj.props.colSpan = 0;
                            }
                            if (index === 9) {
                                obj.props.colSpan = 2;
                            }
                            if (index === 10) {
                                obj.props.colSpan = 2;
                            }
                            if (index === 11) {
                                obj.props.colSpan = 0;
                            }
                            if (index === 12) {
                                obj.props.colSpan = 2;
                            }
                            if (index === 13) {
                                obj.props.colSpan = 2;
                            }
                            if (index === 14) {
                                obj.props.colSpan = 0;
                            }
                            if (index === 15) {
                                obj.props.colSpan = 0;
                            }
                            return obj
                        },
                    }, {
                        title: '', dataIndex: 'p3', width: 80,
                        render: (text, record, index) => {
                            const obj = {
                                children: this.renderColumns(this.state.data, index, 'p3', text),
                                props: {},

                            };
                            if (index === 0) {
                                obj.props.colSpan = 0;
                            }
                            if (index === 3) {
                                obj.props.colSpan = 0;
                            }
                            if (index === 4) {
                                obj.props.colSpan = 0;
                            }
                            if (index === 5) {
                                obj.props.colSpan = 0;
                            }
                            if (index === 6) {
                                obj.props.colSpan = 0;
                            }
                            if (index === 7) {
                                obj.props.colSpan = 0;
                            }


                            if (index === 8) {
                                obj.props.colSpan = 0;
                            }
                            if (index === 9) {
                                obj.props.colSpan = 0;
                            }
                            if (index === 10) {
                                obj.props.colSpan = 0;
                            }
                            if (index === 11) {
                                obj.props.colSpan = 0;
                            }
                            if (index === 12) {
                                obj.props.colSpan = 0;
                            }
                            if (index === 13) {
                                obj.props.colSpan = 0;
                            }
                            if (index === 14) {
                                obj.props.colSpan = 0;
                            }
                            if (index === 15) {
                                obj.props.colSpan = 0;
                            }

                            return obj
                        },
                    },


                ],
            }, {
                title: '二氧化碳（万吨）', dataIndex: 'CO2', width: 100,
                render: (text, record, index) => {
                    const obj = {
                        children: this.renderColumns(this.state.data, index, 'CO2', text),
                        props: {},

                    };


                    return obj
                },
            }, {
                title: '甲烷（万吨）', dataIndex: 'CH4', width: 100,
                render: (text, record, index) => {
                    const obj = {
                        children: this.renderColumns(this.state.data, index, 'CH4', text),
                        props: {},

                    };


                    return obj
                },
            }, {
                title: '氧化亚氮（万吨）', dataIndex: 'N2O', width: 100,
                render: (text, record, index) => {
                    const obj = {
                        children: this.renderColumns(this.state.data, index, 'N2O', text),
                        props: {},

                    };


                    return obj
                },
            }, {
                title: '二氧化碳当量（万吨）', dataIndex: 'CO', width: 100,
                render: (text, record, index) => {
                    const obj = {
                        children: this.renderColumns(this.state.data, index, 'CO', text),
                        props: {},

                    };


                    return obj
                },
            }
        ];


        this.state = {

            data: [],
            data1: [],
            loading: true,

            collapsed: false,
            select: 1,
            trigger: true,
            user: [],


            AllData: [],
            years: '2014'
        };

        this.queryGut('2014');

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

        if (key == 'grazing') {

            this.updateGut(index, data);
        }

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

    //
    queryGut(years) {


        post('/report/wasteDisposal/list', {
            year: years,

        })
            .then((res) => {

                if (res.code == 0) {


                    var Alldata = res.data;

                    const _Data1 = []  //co2
                    const _Data2 = []  //ch4
                    const _Data3 = []  //n2o
                    const _Data4 = []  //co


                    const fossilTitle = [

                        '固体废弃物',
                        '固体废弃物',
                        '固体废弃物',
                        '固体废弃物',
                        '固体废弃物',
                        '固体废弃物',
                        '固体废弃物',
                        '固体废弃物',
                        '固体废弃物',
                        '废水',
                        '废水',
                        '废水',
                        '废水',
                        '废水',
                        '废水',
                        '合计',


                    ]
                    const fossilTitle1 = [

                        '固体废弃物填埋处理',
                        '固体废弃物填埋处理',
                        '固体废弃物填埋处理',
                        '固体废弃物填埋处理',
                        '固体废弃物填埋处理',
                        '固体废弃物填埋处理总计',
                        '废弃物焚烧处理',
                        '废弃物焚烧处理',
                        '废弃物焚烧处理总计',
                        '生活污水处理',
                        '生活污水处理',
                        '生活污水处理总计',
                        '工业废水处理',
                        '工业废水处理',
                        '工业废水处理总计',
                        '合计',


                    ]

                    const fossilTitle2 = [

                        '管理',
                        '未管理',
                        '未管理',
                        '未管理小计',
                        '未分类',
                        '固体废弃物填埋处理总计',
                        '城市固体废弃物化石成因',
                        '危险废弃物',
                        '废弃物焚烧处理总计',
                        '入环境',
                        '处理系统',
                        '生活污水处理总计',
                        '入环境',
                        '处理系统',
                        '工业废水处理总计',
                        '合计',


                    ]

                    const fossilTitle3 = [

                        '管理',
                        '深的>5米',
                        '浅的<5米',
                        '未管理小计',
                        '未分类',
                        '固体废弃物填埋处理总计',
                        '城市固体废弃物化石成因',
                        '危险废弃物',
                        '废弃物焚烧处理总计',
                        '入环境',
                        '处理系统',
                        '生活污水处理总计',
                        '入环境',
                        '处理系统',
                        '工业废水处理总计',
                        '合计',


                    ]


                    _Data1.push('-')
                    _Data1.push('-')
                    _Data1.push('-')
                    _Data1.push('-')
                    _Data1.push('-')
                    _Data1.push('-')
                    _Data1.push(Alldata.CO2.classificationOfMunicipalSolidWasteFossils.toFixed(2))
                    _Data1.push(Alldata.CO2.hazardousWaste.toFixed(2))
                    _Data1.push((Alldata.CO2.classificationOfMunicipalSolidWasteFossils + Alldata.CO2.hazardousWaste).toFixed(2))
                    _Data1.push('-')
                    _Data1.push('-')
                    _Data1.push('-')
                    _Data1.push('-')
                    _Data1.push('-')
                    _Data1.push('-')
                    _Data1.push((Alldata.CO2.classificationOfMunicipalSolidWasteFossils + Alldata.CO2.hazardousWaste).toFixed(2))


                    _Data2.push(Alldata.CH4.solidWasteLandfillDisposal.managedLandfill.toFixed(2))
                    _Data2.push(Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillMoreThan5m.toFixed(2))
                    _Data2.push(Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillLessThan5m.toFixed(2))
                    _Data2.push((Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillMoreThan5m + Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillLessThan5m).toFixed(2))
                    _Data2.push(Alldata.CH4.solidWasteLandfillDisposal.unclassifiedLandfill.toFixed(2))
                    _Data2.push((Alldata.CH4.solidWasteLandfillDisposal.managedLandfill + Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillMoreThan5m + Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillLessThan5m + Alldata.CH4.solidWasteLandfillDisposal.unclassifiedLandfill).toFixed(2))
                    _Data2.push('-')
                    _Data2.push('-')
                    _Data2.push('-')
                    _Data2.push(Alldata.CH4.domesticSewageTreatment.intoTheEnvironmentBOD.toFixed(2))
                    _Data2.push(Alldata.CH4.domesticSewageTreatment.sewageTreatmentSystemToRemoveBOD.toFixed(2))
                    _Data2.push((Alldata.CH4.domesticSewageTreatment.intoTheEnvironmentBOD + Alldata.CH4.domesticSewageTreatment.sewageTreatmentSystemToRemoveBOD).toFixed(2))
                    _Data2.push(Alldata.CH4.industrialWastewaterTreatment.dischargedIntoTheEnvironmentCOD.toFixed(2))
                    _Data2.push(Alldata.CH4.industrialWastewaterTreatment.sewageTreatmentSystemToRemoveCOD.toFixed(2))
                    _Data2.push((Alldata.CH4.industrialWastewaterTreatment.dischargedIntoTheEnvironmentCOD + Alldata.CH4.industrialWastewaterTreatment.sewageTreatmentSystemToRemoveCOD).toFixed(2))
                    _Data2.push((Alldata.CH4.solidWasteLandfillDisposal.managedLandfill + Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillMoreThan5m + Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillLessThan5m + Alldata.CH4.solidWasteLandfillDisposal.unclassifiedLandfill
                    + Alldata.CH4.domesticSewageTreatment.intoTheEnvironmentBOD + Alldata.CH4.domesticSewageTreatment.sewageTreatmentSystemToRemoveBOD
                    + Alldata.CH4.industrialWastewaterTreatment.dischargedIntoTheEnvironmentCOD + Alldata.CH4.industrialWastewaterTreatment.sewageTreatmentSystemToRemoveCOD).toFixed(2))


                    _Data3.push('-')
                    _Data3.push('-')
                    _Data3.push('-')
                    _Data3.push('-')
                    _Data3.push('-')
                    _Data3.push('-')
                    _Data3.push('-')
                    _Data3.push('-')
                    _Data3.push('-')
                    _Data3.push('-')
                    _Data3.push(Alldata.N2O.wasteWater.toFixed(2))
                    _Data3.push(Alldata.N2O.wasteWater.toFixed(2))
                    _Data3.push('-')
                    _Data3.push('-')
                    _Data3.push('-')
                    _Data3.push(Alldata.N2O.wasteWater.toFixed(2))

                    _Data4.push((Alldata.CH4.solidWasteLandfillDisposal.managedLandfill * 21).toFixed(2))
                    _Data4.push((Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillMoreThan5m * 21).toFixed(2))
                    _Data4.push((Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillLessThan5m * 21).toFixed(2))
                    _Data4.push(((Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillMoreThan5m + Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillLessThan5m) * 21).toFixed(2))

                    _Data4.push((Alldata.CH4.solidWasteLandfillDisposal.unclassifiedLandfill * 21).toFixed(2))
                    _Data4.push(((Alldata.CH4.solidWasteLandfillDisposal.managedLandfill + Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillMoreThan5m + Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillLessThan5m + Alldata.CH4.solidWasteLandfillDisposal.unclassifiedLandfill) * 21).toFixed(2))

                    _Data4.push((Alldata.CO2.classificationOfMunicipalSolidWasteFossils).toFixed(2))
                    _Data4.push((Alldata.CO2.hazardousWaste).toFixed(2))
                    _Data4.push((Alldata.CO2.classificationOfMunicipalSolidWasteFossils).toFixed(2))

                    _Data4.push(((Alldata.CH4.domesticSewageTreatment.intoTheEnvironmentBOD * 21)).toFixed(2))
                    _Data4.push(((Alldata.CH4.domesticSewageTreatment.sewageTreatmentSystemToRemoveBOD * 21) + (Alldata.N2O.wasteWater * 310)).toFixed(2))
                    _Data4.push((((Alldata.CH4.domesticSewageTreatment.intoTheEnvironmentBOD + Alldata.CH4.domesticSewageTreatment.sewageTreatmentSystemToRemoveBOD) * 21) + (Alldata.N2O.wasteWater * 310)).toFixed(2))

                    _Data4.push((Alldata.CH4.industrialWastewaterTreatment.dischargedIntoTheEnvironmentCOD * 21).toFixed(2))
                    _Data4.push((Alldata.CH4.industrialWastewaterTreatment.sewageTreatmentSystemToRemoveCOD * 21).toFixed(2))
                    _Data4.push(((Alldata.CH4.industrialWastewaterTreatment.dischargedIntoTheEnvironmentCOD + Alldata.CH4.industrialWastewaterTreatment.sewageTreatmentSystemToRemoveCOD) * 21).toFixed(2))


                    _Data4.push(
                        ((Alldata.CH4.solidWasteLandfillDisposal.managedLandfill + Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillMoreThan5m + Alldata.CH4.solidWasteLandfillDisposal.nonManagedLandfillLessThan5m + Alldata.CH4.solidWasteLandfillDisposal.unclassifiedLandfill) * 21
                        + (Alldata.CO2.classificationOfMunicipalSolidWasteFossils) + ((Alldata.CH4.domesticSewageTreatment.intoTheEnvironmentBOD + Alldata.CH4.domesticSewageTreatment.sewageTreatmentSystemToRemoveBOD) * 21 + Alldata.N2O.wasteWater * 310)
                        + ((Alldata.CH4.industrialWastewaterTreatment.dischargedIntoTheEnvironmentCOD + Alldata.CH4.industrialWastewaterTreatment.sewageTreatmentSystemToRemoveCOD) * 21)).toFixed(2))


                    const _b1 = []

                    for (var i = 0; i < _Data1.length; i++) {
                        _b1.push({
                            key: i,
                            name: {

                                value: fossilTitle[i],
                            },
                            p1: {

                                value: fossilTitle1[i],
                            },
                            p2: {

                                value: fossilTitle2[i],
                            },
                            p3: {

                                value: fossilTitle3[i],
                            },
                            CO2: {

                                value: _Data1[i],
                            },
                            CH4: {

                                value: _Data2[i],
                            },
                            N2O: {

                                value: _Data3[i],
                            },
                            CO: {

                                value: _Data4[i],
                            },

                        })
                    }


                    console.log(_b1);


                    this.setState({data: _b1});

                    this.setState({loading: false});


                } else {
                    message.error('数据错误！');
                }
            });

    }

    //update
    updateGut(index, data, a) {

        var data = data

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


        var obj = {
            "year": "2017"
        };

        obj[bodyName] = {}
        obj[bodyName][bodyName1] = {}
        obj[bodyName][bodyName1][DirectoryIndex] = {
            "sVscaleFeeding": data[index].sVscaleFeeding.value,
            "sVfarmerKeeping": data[index].sVfarmerKeeping.value,
            "sVgrazing": data[index].sVgrazing.value,
            "scaleFeeding": data[index].scaleFeeding.value,
            "farmerKeeping": data[index].farmerKeeping.value,
            "grazing": data[index].grazing.value,
        }

        post(url, obj)
            .then((res) => {

                if (res.code == 0) {
                    message.success(res.message);

                } else {
                    message.error('数据录入有误，请重新录入！');
                }
            });
    }

    //年份选择
    selesctYears(years) {

        this.setState({loading: true});
        this.setState({years: years})
        this.queryGut(years)
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
                    <span className={styles.title_span}> 废弃物处理温室气体排放量计算</span>
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

                <Spin spinning={this.state.loading} delay={500}>


                    <div className={styles.entryBody} id="bodyTable1">
                        <p>废弃物行业温室气体清单表</p>


                        <Table size="small" pagination={false} bordered={true} columns={columns} dataSource={dataSource}
                               scroll={{x: 1000, y: 1520}}
                               rowClassName={(record, index) => index % 2 === 0 ? '' : styles.columnsC }/>

                    </div>
                </Spin>


            </div>
        );

    }
}


export default Form.create()(ElectricTable);

