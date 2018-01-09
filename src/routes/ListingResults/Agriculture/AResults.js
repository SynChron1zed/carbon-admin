/**
 * 农业活动清单结果Created by dixu on 2017/10/31.
 */


import React from 'react';
import {Table, Input, Form, Popconfirm, message, Spin, Alert, Switch, Radio} from 'antd';

import ReactDOM from 'react-dom'
import styles from './Agwp.less';
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

class EditableCell2 extends React.Component {

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
                width: 60,

                render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),
            },

            {
                title: '甲烷(万吨)', dataIndex: 'CH4', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'CH4', text),
            }, {
                title: '氧化亚氮(万吨)', dataIndex: 'N2O', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'N2O', text),
            }, {
                title: '二氧化碳当量(万吨)', dataIndex: 'CO2', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'CO2', text),
            }];

        this.columns2 = [
            {
                title: '数据项',
                dataIndex: 'name',
                width: 60,
                render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'name', text),
            },

            {
                title: '甲烷(吨)', dataIndex: 'CH4', width: 100,
                render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'CH4', text),
            }, {
                title: '氧化亚氮(吨)', dataIndex: 'N2O', width: 100,
                render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'N2O', text),
            }, {
                title: '二氧化碳当量(吨)', dataIndex: 'CO2', width: 100,
                render: (text, record, index) => this.renderColumns2(this.state.data2, index, 'CO2', text),
            }];

        this.state = {

            data: [],
            data1: [],
            data2: [],
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


    renderColumns2(data2, index, key, text) {


        const {editable, status} = data2[index][key];
        if (typeof editable === 'undefined') {
            return text;
        }
        return (

            <EditableCell2
                editable={editable}
                value={text}
                onChange={value => this.handleChange(key, index, value)}
                status={status}
            />);
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


        post('/report/agricultureActivity/list', {
            year: years,

        })
            .then((res) => {

                if (res.code == 0) {


                    var Alldata = res.data;

                    const _Data1 = []  //CH4
                    const _Data2 = []  //N2O
                    const _Data3 = []  //GHG


                    const _Data11 = []  //CH4
                    const _Data22 = []  //N2O
                    const _Data33 = []  //GHG

                    const fossilTitle = [

                        '稻田',
                        '农用地',
                        '动物肠道发酵',
                        '动物粪便管理系统',
                        '总计',

                    ]


                    _Data1.push(Alldata.CH4.paddyFields.toFixed(2))
                    _Data1.push('-')
                    _Data1.push(Alldata.CH4.animalIntestinalFermentation.toFixed(2))
                    _Data1.push(Alldata.CH4.animalManureManagement.toFixed(2))
                    _Data1.push((Alldata.CH4.paddyFields + Alldata.CH4.animalIntestinalFermentation + Alldata.CH4.animalManureManagement).toFixed(2))


                    _Data2.push('-')
                    _Data2.push(Alldata.N2O.land.toFixed(2))
                    _Data2.push('-')
                    _Data2.push(Alldata.N2O.animalManureManagement.toFixed(2))
                    _Data2.push((Alldata.N2O.land + Alldata.N2O.animalManureManagement).toFixed(2))


                    _Data3.push((Alldata.CH4.paddyFields * 21).toFixed(2))
                    _Data3.push((Alldata.N2O.land * 310).toFixed(2))
                    _Data3.push((Alldata.CH4.animalIntestinalFermentation * 21).toFixed(2))
                    _Data3.push((Alldata.CH4.animalManureManagement * 21 + Alldata.N2O.animalManureManagement * 310).toFixed(2))
                    _Data3.push((Alldata.CH4.paddyFields * 21 + Alldata.N2O.land * 310 + Alldata.CH4.animalIntestinalFermentation * 21 + Alldata.CH4.animalManureManagement * 21 + Alldata.N2O.animalManureManagement * 310).toFixed(2))


                    _Data11.push((Alldata.CH4.paddyFields * 10000).toFixed(2))
                    _Data11.push('-')
                    _Data11.push((Alldata.CH4.animalIntestinalFermentation * 10000).toFixed(2))
                    _Data11.push((Alldata.CH4.animalManureManagement * 10000).toFixed(2))
                    _Data11.push((Alldata.CH4.paddyFields * 10000 + Alldata.CH4.animalIntestinalFermentation * 10000 + Alldata.CH4.animalManureManagement * 10000).toFixed(2))


                    _Data22.push('-')
                    _Data22.push((Alldata.N2O.land * 10000).toFixed(2))
                    _Data22.push('-')
                    _Data22.push((Alldata.N2O.animalManureManagement * 10000).toFixed(2))
                    _Data22.push((Alldata.N2O.land * 10000 + Alldata.N2O.animalManureManagement * 10000).toFixed(2))


                    _Data33.push((Alldata.CH4.paddyFields * 10000 * 21).toFixed(2))
                    _Data33.push((Alldata.N2O.land * 10000 * 310).toFixed(2))
                    _Data33.push((Alldata.CH4.animalIntestinalFermentation * 10000 * 21).toFixed(2))
                    _Data33.push((Alldata.CH4.animalManureManagement * 10000 * 21 + Alldata.N2O.animalManureManagement * 10000 * 310).toFixed(2))
                    _Data33.push((Alldata.CH4.paddyFields * 10000 * 21 + Alldata.N2O.land * 10000 * 310 + Alldata.CH4.animalIntestinalFermentation * 10000 * 21 + (Alldata.CH4.animalManureManagement * 10000 * 21 + Alldata.N2O.animalManureManagement * 10000 * 310)).toFixed(2))


                    const _b1 = []

                    for (var i = 0; i < _Data1.length; i++) {
                        _b1.push({
                            key: i,
                            name: {

                                value: fossilTitle[i],
                            },
                            CH4: {

                                value: _Data1[i],
                            },
                            N2O: {

                                value: _Data2[i],
                            },
                            CO2: {

                                value: _Data3[i],
                            },

                        })
                    }


                    const _b2 = []

                    for (var i = 0; i < _Data11.length; i++) {
                        _b2.push({
                            key: i,
                            name: {

                                value: fossilTitle[i],
                            },
                            CH4: {

                                value: _Data11[i],
                            },
                            N2O: {

                                value: _Data22[i],
                            },
                            CO2: {

                                value: _Data33[i],
                            },

                        })
                    }


                    console.log(_b1);


                    this.setState({data: _b1});
                    this.setState({data2: _b2});

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

        const {data2} = this.state;
        const dataSource2 = data2.map((item) => {
            const obj = {};
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
        });


        const columns = this.columns;
        const columns2 = this.columns2;


        return (
            <div className={styles.normal}>
                <div className={styles.title}>
                    <span className={styles.title_span}> 农业活动温室气体排放量计算</span>
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
                        <p>农业活动温室气体清单报告(单位： 万吨)</p>


                        <Table size="small" pagination={false} bordered={true} columns={columns} dataSource={dataSource}
                               scroll={{x: 1000, y: 1520}}
                               rowClassName={(record, index) => index % 2 === 0 ? '' : styles.columnsC }/>

                    </div>


                    <div className={styles.entryBody} id="bodyTable1">
                        <p>农业活动温室气体清单报告(单位：吨)</p>


                        <Table size="small" pagination={false} bordered={true} columns={columns2}
                               dataSource={dataSource2} scroll={{x: 1000, y: 1520}}
                               rowClassName={(record, index) => index % 2 === 0 ? '' : styles.columnsC }/>

                    </div>
                </Spin>


            </div>
        );

    }
}


export default Form.create()(ElectricTable);

