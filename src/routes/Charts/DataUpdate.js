/**
 * Created by dixu on 2017/12/15.
 */

import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch ,Radio, Modal, Button } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Gas.less';
import createReactClass from 'create-react-class';
import { post } from '../../utils/carbonRequest';
import $ from 'jquery';
const RadioGroup = Radio.Group;

const confirm = Modal.confirm;

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

class ElectricTable extends React.Component {


    constructor(props) {

        super(props);



        this.columns = [
            {
                title: '温室气体种类',
                dataIndex: 'name',
                width: 60,

                render: (text, record, index) => {  const obj = {
                    children:this.renderColumns(this.state.data, index, 'name', text),
                    props: {},

                };

                    return obj}

            },{
                title: 'CO2', dataIndex: 'CO', width: 60,
                render: (text, record, index) => {  const obj = {
                    children:this.renderColumns(this.state.data, index, 'CO', text),
                    props: {},

                };



                    return obj},
            },{
                title: 'CH4', dataIndex: 'CH', width: 60,
                render: (text, record, index) => {  const obj = {
                    children:this.renderColumns(this.state.data, index, 'CH', text),
                    props: {},

                };



                    return obj},
            },{
                title: 'N2O', dataIndex: 'N2O', width: 60,
                render: (text, record, index) => {  const obj = {
                    children:this.renderColumns(this.state.data, index, 'N2O', text),
                    props: {},

                };



                    return obj},
            },{
                title: 'HFC-23(CHF3)', dataIndex: 'HFC', width: 60,
                render: (text, record, index) => {  const obj = {
                    children:this.renderColumns(this.state.data, index, 'HFC', text),
                    props: {},

                };



                    return obj},
            },{
                title: 'HFC-32', dataIndex: 'HFC1', width: 60,
                render: (text, record, index) => {  const obj = {
                    children:this.renderColumns(this.state.data, index, 'HFC1', text),
                    props: {},

                };



                    return obj},
            },{
                title: 'HFC-125', dataIndex: 'HFC2', width:60,
                render: (text, record, index) => {  const obj = {
                    children:this.renderColumns(this.state.data, index, 'HFC2', text),
                    props: {},

                };



                    return obj},
            },
            {
                title: 'HFC-134a', dataIndex: 'HFC3', width: 60,
                render: (text, record, index) =>{  const obj = {
                    children:this.renderColumns(this.state.data, index, 'HFC3', text),
                    props: {},

                };

                    return obj},
            },{
                title: 'HFC-143a', dataIndex: 'HFC4', width:60,
                render: (text, record, index) =>{  const obj = {
                    children:this.renderColumns(this.state.data, index, 'HFC4', text),
                    props: {},

                };

                    return obj},
            },
        ];


        this.columns1 = [
            {
                title: '数据项',
                dataIndex: 'name',
                width: 100,

                colSpan:1,
                render: (text, record, index) => {  const obj = {
                    children:this.renderColumns1(this.state.data1, index, 'name', text),
                    props: {},

                };

                    return obj}

            },{
                title: '林业活动CO2吸收量', dataIndex: 'p1', width: 150,
                render: (text, record, index) => {  const obj = {
                    children:this.renderColumns1(this.state.data1, index, 'p1', text),
                    props: {},

                };



                    return obj},
            },{
                title: '林业活动GHG排放量', dataIndex: 'p2', width: 150,
                render: (text, record, index) => {  const obj = {
                    children:this.renderColumns1(this.state.data1, index, 'p2', text),
                    props: {},

                };



                    return obj},
            },{
                title: '（乔木林+疏林+散生木+四旁树）CO2吸收量-活立木消耗CO2排放量', dataIndex: 'p3', width:300,
                render: (text, record, index) => {  const obj = {
                    children:this.renderColumns1(this.state.data1, index, 'p3', text),
                    props: {},

                };



                    return obj},
            }
        ];

        this.columns2 = [
            {
                title: '数据项',
                dataIndex: 'name',
                width: 150,

                render: (text, record, index) => {  const obj = {
                    children:this.renderColumns2(this.state.data2, index, 'name', text),
                    props: {},

                };

                    return obj}

            },{
                title: '排放量', dataIndex: 'p1', width: 150,
                render: (text, record, index) => {  const obj = {
                    children:this.renderColumns2(this.state.data2, index, 'p1', text),
                    props: {},

                };

                    if (index === 5) {
                        obj.props.colSpan = 2;
                    }

                    return obj},
            },{
                title: '不确定性', dataIndex: 'p2', width: 150,
                render: (text, record, index) => {  const obj = {
                    children:this.renderColumns2(this.state.data2, index, 'p2', text),
                    props: {},

                };
                    if (index === 5) {
                        obj.props.colSpan =0;
                    }



                    return obj},
            },

            {
                title: '编辑',
                dataIndex: 'operation',

                width: 50,

                render: (text, record, index) => {

                    const { editable } = this.state.data2[index].p2;
                    return (
                        <div className={styles.editableOperations} >

                            {
                                index==5 ? <span></span>:



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
                dataIndex: 'name',
                width: 150,

                colSpan:1,
                render: (text, record, index) => {  const obj = {
                    children:this.renderColumns3(this.state.data3, index, 'name', text),
                    props: {},

                };

                    return obj}

            },{
                title: '包括土地变化和林业', dataIndex: 'p1', width: 150,
                render: (text, record, index) => {  const obj = {
                    children:this.renderColumns3(this.state.data3, index, 'p1', text),
                    props: {},

                };



                    return obj},
            },{
                title: '不包括土地变化和林业', dataIndex: 'p2', width: 150,
                render: (text, record, index) => {  const obj = {
                    children:this.renderColumns3(this.state.data3, index, 'p2', text),
                    props: {},

                };



                    return obj},
            },

            {
                title: '编辑',
                dataIndex: 'operation',

                width: 50,

                render: (text, record, index) => {

                    const { editable } = this.state.data3[index].p1;
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
            }
        ];

        this.state = {

            data: [],
            data1: [],
            data2: [],
            data3: [],
            loading: false,

            collapsed: false,
            select:1,
            trigger:true,
            user:[],




            AllData:[],
            years:'2014',
            Data:[],
            visible:false
        };





        //$("#bodyTable1").hide();

    }





    //数据更新
    newQueryGut(){

        post('/report/summary/update', {

            year:2014,
        })
            .then((res) => {

                if (res.code==0) {

                    this.newQueryGut1();



                } else {
                    message.error('数据错误！');
                }
            });



    }


    newQueryGut1(){

        post('/report/summary/update', {

            year:2012,
        })
            .then((res) => {

                if (res.code==0) {

                    this.newQueryGut2();




                } else {
                    message.error('数据错误！');
                }
            });



    }


    newQueryGut2(){

        post('/report/summary/update', {

            year:2010,
        })
            .then((res) => {

                if (res.code==0) {


                    this.newQueryGut3();


                } else {
                    message.error('数据错误！');
                }
            });



    }

    newQueryGut3(){

        post('/report/summary/update', {

            year:2005,
        })
            .then((res) => {

                if (res.code==0) {


                    this.setState({loading:false})


                } else {
                    message.error('数据错误！');
                }
            });



    }

    showConfirm() {

    confirm({
        title: '确认进行温室气体数据更新吗?',
        content: '更新时间较长，请耐心等待！',
        onOk() {


            console.log('确认');


            this.setState({loading:true})

        },
        onCancel() {
            console.log('取消');
        },
    });
}



    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    handleOk = (e) => {
        console.log(e);
        this.newQueryGut();

        this.setState({
            visible: false,
            loading:true
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,

        });
    }


    render() {




        return (
            <Spin spinning={this.state.loading} delay={500}>
            <div className={styles.normal}>
                <div className={styles.title}>
                    <span className={styles.title_span}>温室气体数据更新</span>
                </div>






                    <div className={styles.dataUpdate} id="bodyTable1"  >
                        <p>温室气体数据更新</p>

                        <div>
                            <Button className={styles.dataUpdate1} type="primary" onClick={this.showModal}>数据更新</Button>
                            <Modal
                                title="确认进行温室气体数据更新吗?"
                                visible={this.state.visible}
                                onOk={this.handleOk}
                                onCancel={this.handleCancel}
                            >
                                <p>更新时，请耐心等待！</p>

                            </Modal>
                        </div>
                    </div>








            </div>
            </Spin>
        );

    }
}


export default Form.create()(ElectricTable);
