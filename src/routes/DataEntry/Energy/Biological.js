/**
 * 化石燃料燃烧Created by dixu on 2017/10/10.
 */
import React from 'react';
import {Table, Input, Form, Popconfirm, message, Spin, Alert, Switch} from 'antd';

import ReactDOM from 'react-dom'
import styles from './Biological.less';
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

class EditableCell3 extends React.Component {

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

class EditableCell4 extends React.Component {

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

class EditableCell5 extends React.Component {

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

class EditableCell6 extends React.Component {

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

class EditableCell7 extends React.Component {

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

class EditableCell8 extends React.Component {

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

class EditableCell9 extends React.Component {

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

class EditableCell10 extends React.Component {

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

class EditableCell11 extends React.Component {

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

class EditableTable extends React.Component {


    constructor(props) {
        super(props);

        this.columns = [

            {
                title: '数据项',
                dataIndex: 'name',
                width: 280,

                colSpan: 1,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),
            },

            {
                title: '无烟煤', dataIndex: 'anthracite', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'anthracite', text),
            }, {
                title: '烟煤', dataIndex: 'bituminouscoal', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'bituminouscoal', text),
            }, {
                title: '褐煤', dataIndex: 'lignite', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'lignite', text),
            }, {
                title: '洗精煤', dataIndex: 'washthecleancoal', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'washthecleancoal', text),
            }, {
                title: '其他洗煤', dataIndex: 'othercoalwashing', width: 120,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'othercoalwashing', text),
            }, {
                title: '型煤', dataIndex: 'briquette', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'briquette', text),
            }, {
                title: '煤矸石', dataIndex: 'coalgangue', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'coalgangue', text),
            }, {
                title: '焦炭', dataIndex: 'coke', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'coke', text),
            }, {
                title: '焦炉煤气', dataIndex: 'cokeovengas', width: 160,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'cokeovengas', text),
            }, {
                title: '高炉煤气', dataIndex: 'blastfurnacegas', width: 150,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'blastfurnacegas', text),
            }, {
                title: '转炉煤气', dataIndex: 'onvertergas', width: 150,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'onvertergas', text),
            }, {
                title: '其它煤气', dataIndex: 'othergas', width: 150,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'othergas', text),
            }, {
                title: '其它焦化产品', dataIndex: 'othercokingproducts', width: 150,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'othercokingproducts', text),
            }, {
                title: '原油', dataIndex: 'crudeoil', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'crudeoil', text),
            }, {
                title: '汽油', dataIndex: 'gasoline', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'gasoline', text),
            }, {
                title: '煤油', dataIndex: 'kerosene', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'kerosene', text),
            }, {
                title: '柴油', dataIndex: 'diesel', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'diesel', text),
            }, {
                title: '燃料油', dataIndex: 'fueloil', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'fueloil', text),
            }, {
                title: '石脑油', dataIndex: 'naphtha', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'naphtha', text),
            }, {
                title: '润滑油', dataIndex: 'lubricatingoil', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'lubricatingoil', text),
            }, {
                title: '石蜡', dataIndex: 'paraffin', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'paraffin', text),
            }, {
                title: '溶剂油', dataIndex: 'solventoil', width: 100,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'solventoil', text),
            }, {
                title: '石油沥青', dataIndex: 'asphalt', width: 150,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'asphalt', text),
            }, {
                title: '石油焦', dataIndex: 'oilcoke', width: 150,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'oilcoke', text),
            }, {
                title: '液化石油气', dataIndex: 'liquefiedpetroleumgas', width: 150,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'liquefiedpetroleumgas', text),
            }, {
                title: '炼厂干气', dataIndex: 'refinerydrygas', width: 150,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'refinerydrygas', text),
            }, {
                title: '其他石油制品', dataIndex: 'otherpetroleumproducts', width: 150,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'otherpetroleumproducts', text),
            }, {
                title: '天然气', dataIndex: 'naturalgas', width: 130,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'naturalgas', text),
            }, {
                title: '液化天然气', dataIndex: 'liquifiednaturalgas', width: 130,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'liquifiednaturalgas', text),
            }, {
                title: '其他', dataIndex: 'other', width: 130,
                render: (text, record, index) => this.renderColumns(this.state.data, index, 'other', text),
            },
            {
                title: '编辑',
                dataIndex: 'operation',

                width: 100,

                render: (text, record, index) => {

                    const {editable} = this.state.data[index].anthracite;
                    return (
                        <div className={styles.editableOperations}>

                            {
                                index == 0 || index == 1 || index == 2 || index == 3 || index == 7 || index == 11 || index == 15 || index == 16 || index == 21 ||
                                index == 26 || index == 31 || index == 37 || index == 38 || index == 42 || index == 46 || index == 50 || index == 54 || index == 55 || index == 61 ?
                                    <span></span> :
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

        this.columns2 = [
            {
                title: '数据项',
                dataIndex: 'name',
                width: 150,

                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'name', text),
            },

            {
                title: '无烟煤(万吨)', dataIndex: 'anthracite', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'anthracite', text),
            }, {
                title: '烟煤(万吨)', dataIndex: 'bituminouscoal', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'bituminouscoal', text),
            }, {
                title: '褐煤(万吨)', dataIndex: 'lignite', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'lignite', text),
            }, {
                title: '洗精煤(万吨)', dataIndex: 'washthecleancoal', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'washthecleancoal', text),
            }, {
                title: '其他洗煤(万吨)', dataIndex: 'othercoalwashing', width: 170,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'othercoalwashing', text),
            }, {
                title: '型煤(万吨)', dataIndex: 'briquette', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'briquette', text),
            }, {
                title: '煤矸石(万吨)', dataIndex: 'coalgangue', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'coalgangue', text),
            }, {
                title: '焦炭(万吨)', dataIndex: 'coke', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'coke', text),
            }, {
                title: '焦炉煤气(亿立方米)', dataIndex: 'cokeovengas', width: 210,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'cokeovengas', text),
            }, {
                title: '高炉煤气(亿立方米)', dataIndex: 'blastfurnacegas', width: 200,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'blastfurnacegas', text),
            }, {
                title: '转炉煤气(亿立方米)', dataIndex: 'onvertergas', width: 200,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'onvertergas', text),
            }, {
                title: '其它煤气(亿立方米)', dataIndex: 'othergas', width: 200,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'othergas', text),
            }, {
                title: '其它焦化产品(万吨)', dataIndex: 'othercokingproducts', width: 200,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'othercokingproducts', text),
            }, {
                title: '原油(万吨)', dataIndex: 'crudeoil', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'crudeoil', text),
            }, {
                title: '汽油(万吨)', dataIndex: 'gasoline', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'gasoline', text),
            }, {
                title: '煤油(万吨)', dataIndex: 'kerosene', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'kerosene', text),
            }, {
                title: '柴油(万吨)', dataIndex: 'diesel', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'diesel', text),
            }, {
                title: '燃料油(万吨)', dataIndex: 'fueloil', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'fueloil', text),
            }, {
                title: '石脑油(万吨)', dataIndex: 'naphtha', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'naphtha', text),
            }, {
                title: '润滑油(万吨)', dataIndex: 'lubricatingoil', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'lubricatingoil', text),
            }, {
                title: '石蜡(万吨)', dataIndex: 'paraffin', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'paraffin', text),
            }, {
                title: '溶剂油(万吨)', dataIndex: 'solventoil', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'solventoil', text),
            }, {
                title: '石油沥青(万吨)', dataIndex: 'asphalt', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'asphalt', text),
            }, {
                title: '石油焦(万吨)', dataIndex: 'oilcoke', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'oilcoke', text),
            }, {
                title: '液化石油气(万吨)', dataIndex: 'liquefiedpetroleumgas', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'liquefiedpetroleumgas', text),
            }, {
                title: '炼厂干气(万吨)', dataIndex: 'refinerydrygas', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'refinerydrygas', text),
            }, {
                title: '其他石油制品(万吨)', dataIndex: 'otherpetroleumproducts', width: 150,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'otherpetroleumproducts', text),
            }, {
                title: '天然气(亿立方米)', dataIndex: 'naturalgas', width: 180,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'naturalgas', text),
            }, {
                title: '液化天然气(万吨)', dataIndex: 'liquifiednaturalgas', width: 180,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'liquifiednaturalgas', text),
            }, {
                title: '其他(亿立方米)', dataIndex: 'other', width: 180,
                render: (text, record, index) => this.renderColumns2(this.state.data1, index, 'other', text),
            },
            {
                title: '编辑',
                dataIndex: 'operation',

                width: 100,

                render: (text, record, index) => {

                    const {editable} = this.state.data1[index].anthracite;
                    return (
                        <div className={styles.editableOperations}>

                            {
                                index == 1 || index == 3 || index == 5 || index == 7 || index == 9 || index == 10
                                    ? <span></span> :
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
                width: 150,

                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'name', text),
            },

            {
                title: '无烟煤(万吨)', dataIndex: 'anthracite', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'anthracite', text),
            }, {
                title: '烟煤(万吨)', dataIndex: 'bituminouscoal', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'bituminouscoal', text),
            }, {
                title: '褐煤(万吨)', dataIndex: 'lignite', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'lignite', text),
            }, {
                title: '洗精煤(万吨)', dataIndex: 'washthecleancoal', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'washthecleancoal', text),
            }, {
                title: '其他洗煤(万吨)', dataIndex: 'othercoalwashing', width: 170,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'othercoalwashing', text),
            }, {
                title: '型煤(万吨)', dataIndex: 'briquette', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'briquette', text),
            }, {
                title: '煤矸石(万吨)', dataIndex: 'coalgangue', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'coalgangue', text),
            }, {
                title: '焦炭(万吨)', dataIndex: 'coke', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'coke', text),
            }, {
                title: '焦炉煤气(亿立方米)', dataIndex: 'cokeovengas', width: 210,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'cokeovengas', text),
            }, {
                title: '高炉煤气(亿立方米)', dataIndex: 'blastfurnacegas', width: 200,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'blastfurnacegas', text),
            }, {
                title: '转炉煤气(亿立方米)', dataIndex: 'onvertergas', width: 200,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'onvertergas', text),
            }, {
                title: '其它煤气(亿立方米)', dataIndex: 'othergas', width: 200,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'othergas', text),
            }, {
                title: '其它焦化产品(万吨)', dataIndex: 'othercokingproducts', width: 200,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'othercokingproducts', text),
            }, {
                title: '原油(万吨)', dataIndex: 'crudeoil', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'crudeoil', text),
            }, {
                title: '汽油(万吨)', dataIndex: 'gasoline', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'gasoline', text),
            }, {
                title: '煤油(万吨)', dataIndex: 'kerosene', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'kerosene', text),
            }, {
                title: '柴油(万吨)', dataIndex: 'diesel', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'diesel', text),
            }, {
                title: '燃料油(万吨)', dataIndex: 'fueloil', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'fueloil', text),
            }, {
                title: '石脑油(万吨)', dataIndex: 'naphtha', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'naphtha', text),
            }, {
                title: '润滑油(万吨)', dataIndex: 'lubricatingoil', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'lubricatingoil', text),
            }, {
                title: '石蜡(万吨)', dataIndex: 'paraffin', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'paraffin', text),
            }, {
                title: '溶剂油(万吨)', dataIndex: 'solventoil', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'solventoil', text),
            }, {
                title: '石油沥青(万吨)', dataIndex: 'asphalt', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'asphalt', text),
            }, {
                title: '石油焦(万吨)', dataIndex: 'oilcoke', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'oilcoke', text),
            }, {
                title: '液化石油气(万吨)', dataIndex: 'liquefiedpetroleumgas', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'liquefiedpetroleumgas', text),
            }, {
                title: '炼厂干气(万吨)', dataIndex: 'refinerydrygas', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'refinerydrygas', text),
            }, {
                title: '其他石油制品(万吨)', dataIndex: 'otherpetroleumproducts', width: 150,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'otherpetroleumproducts', text),
            }, {
                title: '天然气(亿立方米)', dataIndex: 'naturalgas', width: 180,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'naturalgas', text),
            }, {
                title: '液化天然气(万吨)', dataIndex: 'liquifiednaturalgas', width: 180,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'liquifiednaturalgas', text),
            }, {
                title: '其他(亿立方米)', dataIndex: 'other', width: 180,
                render: (text, record, index) => this.renderColumns3(this.state.data2, index, 'other', text),
            },
            {
                title: '编辑',
                dataIndex: 'operation',

                width: 100,

                render: (text, record, index) => {

                    const {editable} = this.state.data2[index].anthracite;
                    return (
                        <div className={styles.editableOperations}>

                            {
                                index == 7 || index == 5
                                    ? <span></span> :
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
                width: 150,

                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'name', text),
            },

            {
                title: '无烟煤(万吨)', dataIndex: 'anthracite', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'anthracite', text),
            }, {
                title: '烟煤(万吨)', dataIndex: 'bituminouscoal', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'bituminouscoal', text),
            }, {
                title: '褐煤(万吨)', dataIndex: 'lignite', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'lignite', text),
            }, {
                title: '洗精煤(万吨)', dataIndex: 'washthecleancoal', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'washthecleancoal', text),
            }, {
                title: '其他洗煤(万吨)', dataIndex: 'othercoalwashing', width: 170,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'othercoalwashing', text),
            }, {
                title: '型煤(万吨)', dataIndex: 'briquette', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'briquette', text),
            }, {
                title: '煤矸石(万吨)', dataIndex: 'coalgangue', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'coalgangue', text),
            }, {
                title: '焦炭(万吨)', dataIndex: 'coke', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'coke', text),
            }, {
                title: '焦炉煤气(亿立方米)', dataIndex: 'cokeovengas', width: 210,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'cokeovengas', text),
            }, {
                title: '高炉煤气(亿立方米)', dataIndex: 'blastfurnacegas', width: 200,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'blastfurnacegas', text),
            }, {
                title: '转炉煤气(亿立方米)', dataIndex: 'onvertergas', width: 200,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'onvertergas', text),
            }, {
                title: '其它煤气(亿立方米)', dataIndex: 'othergas', width: 200,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'othergas', text),
            }, {
                title: '其它焦化产品(万吨)', dataIndex: 'othercokingproducts', width: 200,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'othercokingproducts', text),
            }, {
                title: '原油(万吨)', dataIndex: 'crudeoil', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'crudeoil', text),
            }, {
                title: '汽油(万吨)', dataIndex: 'gasoline', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'gasoline', text),
            }, {
                title: '煤油(万吨)', dataIndex: 'kerosene', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'kerosene', text),
            }, {
                title: '柴油(万吨)', dataIndex: 'diesel', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'diesel', text),
            }, {
                title: '燃料油(万吨)', dataIndex: 'fueloil', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'fueloil', text),
            }, {
                title: '石脑油(万吨)', dataIndex: 'naphtha', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'naphtha', text),
            }, {
                title: '润滑油(万吨)', dataIndex: 'lubricatingoil', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'lubricatingoil', text),
            }, {
                title: '石蜡(万吨)', dataIndex: 'paraffin', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'paraffin', text),
            }, {
                title: '溶剂油(万吨)', dataIndex: 'solventoil', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'solventoil', text),
            }, {
                title: '石油沥青(万吨)', dataIndex: 'asphalt', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'asphalt', text),
            }, {
                title: '石油焦(万吨)', dataIndex: 'oilcoke', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'oilcoke', text),
            }, {
                title: '液化石油气(万吨)', dataIndex: 'liquefiedpetroleumgas', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'liquefiedpetroleumgas', text),
            }, {
                title: '炼厂干气(万吨)', dataIndex: 'refinerydrygas', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'refinerydrygas', text),
            }, {
                title: '其他石油制品(万吨)', dataIndex: 'otherpetroleumproducts', width: 150,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'otherpetroleumproducts', text),
            }, {
                title: '天然气(亿立方米)', dataIndex: 'naturalgas', width: 180,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'naturalgas', text),
            }, {
                title: '液化天然气(万吨)', dataIndex: 'liquifiednaturalgas', width: 180,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'liquifiednaturalgas', text),
            }, {
                title: '其他(亿立方米)', dataIndex: 'other', width: 180,
                render: (text, record, index) => this.renderColumns4(this.state.data3, index, 'other', text),
            },
            {
                title: '编辑',
                dataIndex: 'operation',

                width: 100,

                render: (text, record, index) => {

                    const {editable} = this.state.data3[index].anthracite;
                    return (
                        <div className={styles.editableOperations}>

                            {
                                index == 7
                                    ? <span></span> :
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

        this.columns5 = [
            {
                title: '数据项',
                dataIndex: 'name',
                width: 150,

                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'name', text),
            },

            {
                title: '无烟煤(TJ/万t)', dataIndex: 'anthracite', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'anthracite', text),
            }, {
                title: '烟煤(TJ/万t)', dataIndex: 'bituminouscoal', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'bituminouscoal', text),
            }, {
                title: '褐煤(TJ/万t)', dataIndex: 'lignite', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'lignite', text),
            }, {
                title: '洗精煤(TJ/万t)', dataIndex: 'washthecleancoal', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'washthecleancoal', text),
            }, {
                title: '其他洗煤(TJ/万t)', dataIndex: 'othercoalwashing', width: 170,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'othercoalwashing', text),
            }, {
                title: '型煤(TJ/万t)', dataIndex: 'briquette', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'briquette', text),
            }, {
                title: '煤矸石(TJ/万t)', dataIndex: 'coalgangue', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'coalgangue', text),
            }, {
                title: '焦炭(TJ/万t)', dataIndex: 'coke', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'coke', text),
            }, {
                title: '焦炉煤气(TJ/亿m3)', dataIndex: 'cokeovengas', width: 210,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'cokeovengas', text),
            }, {
                title: '高炉煤气(TJ/亿m3)', dataIndex: 'blastfurnacegas', width: 200,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'blastfurnacegas', text),
            }, {
                title: '转炉煤气(TJ/亿m3)', dataIndex: 'onvertergas', width: 200,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'onvertergas', text),
            }, {
                title: '其它煤气(TJ/亿m3)', dataIndex: 'othergas', width: 200,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'othergas', text),
            }, {
                title: '其它焦化产品(TJ/万t)', dataIndex: 'othercokingproducts', width: 200,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'othercokingproducts', text),
            }, {
                title: '原油(TJ/万t)', dataIndex: 'crudeoil', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'crudeoil', text),
            }, {
                title: '汽油(TJ/万t)', dataIndex: 'gasoline', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'gasoline', text),
            }, {
                title: '煤油(TJ/万t)', dataIndex: 'kerosene', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'kerosene', text),
            }, {
                title: '柴油(TJ/万t)', dataIndex: 'diesel', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'diesel', text),
            }, {
                title: '燃料油(TJ/万t)', dataIndex: 'fueloil', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'fueloil', text),
            }, {
                title: '石脑油(TJ/万t)', dataIndex: 'naphtha', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'naphtha', text),
            }, {
                title: '润滑油(TJ/万t)', dataIndex: 'lubricatingoil', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'lubricatingoil', text),
            }, {
                title: '石蜡(TJ/万t)', dataIndex: 'paraffin', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'paraffin', text),
            }, {
                title: '溶剂油(TJ/万t)', dataIndex: 'solventoil', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'solventoil', text),
            }, {
                title: '石油沥青(TJ/万t)', dataIndex: 'asphalt', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'asphalt', text),
            }, {
                title: '石油焦(TJ/万t)', dataIndex: 'oilcoke', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'oilcoke', text),
            }, {
                title: '液化石油气(TJ/万t)', dataIndex: 'liquefiedpetroleumgas', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'liquefiedpetroleumgas', text),
            }, {
                title: '炼厂干气(TJ/亿m3)', dataIndex: 'refinerydrygas', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'refinerydrygas', text),
            }, {
                title: '其他石油制品(TJ/万t)', dataIndex: 'otherpetroleumproducts', width: 150,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'otherpetroleumproducts', text),
            }, {
                title: '天然气(TJ/亿m3)', dataIndex: 'naturalgas', width: 180,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'naturalgas', text),
            }, {
                title: '液化天然气(TJ/万t)', dataIndex: 'liquifiednaturalgas', width: 180,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'liquifiednaturalgas', text),
            }, {
                title: '其他(TJ/亿m3)', dataIndex: 'other', width: 180,
                render: (text, record, index) => this.renderColumns5(this.state.data4, index, 'other', text),
            },
            {
                title: '编辑',
                dataIndex: 'operation',

                width: 100,

                render: (text, record, index) => {

                    const {editable} = this.state.data4[index].anthracite;
                    return (
                        <div className={styles.editableOperations}>

                            {
                                index == 7
                                    ? <span></span> :
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
            }];

        this.columns6 = [
            {
                title: '数据项',
                dataIndex: 'name',
                width: 150,

                render: (text, record, index) => this.renderColumns6(this.state.data5, index, 'name', text),
            },

            {
                title: '排放因子（kgN2O/TJ）', dataIndex: 'anthracite', width: 550, colSpan: 1,
                render: (text, record, index) => this.renderColumns6(this.state.data5, index, 'anthracite', text),
            },
            {
                title: '编辑',
                dataIndex: 'operation',

                width: 100,

                render: (text, record, index) => {

                    const {editable} = this.state.data5[index].anthracite;
                    return (
                        <div className={styles.editableOperations}>

                            {
                                index == 7
                                    ? <span></span> :
                                    editable ?
                                        <span>
                  <a onClick={() => this.editDone6(index, 'save')}>确认</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone6(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                                        :
                                        <span>
                  <a onClick={() => this.edit6(index)}>编辑</a>
                </span>
                            }

                        </div>
                    );
                },
            }];

        this.columns7 = [
            {
                title: '数据项',
                dataIndex: 'name',
                width: 150,

                render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'name', text),
            },

            {
                title: '烟煤(万吨)', dataIndex: 'bituminousCoal', width: 150,
                render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'bituminousCoal', text),
            }, {
                title: '汽油(万吨)', dataIndex: 'gasoline', width: 150,
                render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'gasoline', text),
            }, {
                title: '煤油(万吨)', dataIndex: 'kerosene', width: 150,
                render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'kerosene', text),
            }, {
                title: '柴油(万吨)', dataIndex: 'diesel', width: 150,
                render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'diesel', text),
            }, {
                title: '燃料油(万吨)', dataIndex: 'fuelOil', width: 170,
                render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'fuelOil', text),
            }, {
                title: '天然气（亿立方米）', dataIndex: 'naturalgas', width: 150,
                render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'naturalgas', text),
            }, {
                title: '液化天然气(万吨)', dataIndex: 'liquifiednaturalgas', width: 170,
                render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'liquifiednaturalgas', text),
            }, {
                title: '液化石油气(万吨)', dataIndex: 'liquefiedpetroleumgas', width: 170,
                render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'liquefiedpetroleumgas', text),
            }, {
                title: '其他品种1(万吨)', dataIndex: 'otherVarieties1', width: 170,
                render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'otherVarieties1', text),
            }, {
                title: '其他品种2(万吨)', dataIndex: 'otherVarieties2', width: 170,
                render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'otherVarieties2', text),
            }, {
                title: '其他品种3（亿立方米）', dataIndex: 'otherVarieties3', width: 170,
                render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'otherVarieties3', text),
            }, {
                title: '其他品种4（亿立方米）', dataIndex: 'otherVarieties4', width: 170,
                render: (text, record, index) => this.renderColumns7(this.state.data6, index, 'otherVarieties4', text),
            },
            {
                title: '编辑',
                dataIndex: 'operation',

                width: 100,

                render: (text, record, index) => {

                    const {editable} = this.state.data6[index].otherVarieties1;
                    return (
                        <div className={styles.editableOperations}>

                            {
                                index == 0 || index == 6
                                    ? <span></span> :
                                    editable ?
                                        <span>
                  <a onClick={() => this.editDone7(index, 'save')}>确认</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone7(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                                        :
                                        <span>
                  <a onClick={() => this.edit7(index)}>编辑</a>
                </span>
                            }

                        </div>
                    );
                },
            }];

        this.columns8 = [
            {
                title: '数据项',
                dataIndex: 'name',
                width: 150,

                render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'name', text),
            },

            {
                title: '烟煤(TJ/万t)', dataIndex: 'bituminousCoal', width: 150,
                render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'bituminousCoal', text),
            }, {
                title: '汽油(TJ/万t)', dataIndex: 'gasoline', width: 150,
                render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'gasoline', text),
            }, {
                title: '煤油(TJ/万t)', dataIndex: 'kerosene', width: 150,
                render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'kerosene', text),
            }, {
                title: '柴油(TJ/万t)', dataIndex: 'diesel', width: 150,
                render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'diesel', text),
            }, {
                title: '燃料油(TJ/万t)', dataIndex: 'fuelOil', width: 170,
                render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'fuelOil', text),
            }, {
                title: '天然气(TJ/亿m³)', dataIndex: 'naturalgas', width: 150,
                render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'naturalgas', text),
            }, {
                title: '液化天然气(TJ/万t)', dataIndex: 'liquifiednaturalgas', width: 170,
                render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'liquifiednaturalgas', text),
            }, {
                title: '液化石油气(TJ/万t)', dataIndex: 'liquefiedpetroleumgas', width: 170,
                render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'liquefiedpetroleumgas', text),
            }, {
                title: '其他品种1(TJ/万t)', dataIndex: 'otherVarieties1', width: 170,
                render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'otherVarieties1', text),
            }, {
                title: '其他品种2(TJ/万t)', dataIndex: 'otherVarieties2', width: 170,
                render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'otherVarieties2', text),
            }, {
                title: '其他品种3(TJ/亿m³)', dataIndex: 'otherVarieties3', width: 170,
                render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'otherVarieties3', text),
            }, {
                title: '其他品种4(TJ/亿m³)', dataIndex: 'otherVarieties4', width: 170,
                render: (text, record, index) => this.renderColumns8(this.state.data7, index, 'otherVarieties4', text),
            },
            {
                title: '编辑',
                dataIndex: 'operation',

                width: 100,

                render: (text, record, index) => {

                    const {editable} = this.state.data7[index].bituminousCoal;
                    return (
                        <div className={styles.editableOperations}>

                            {
                                index == 0 || index == 6
                                    ? <span></span> :
                                    editable ?
                                        <span>
                  <a onClick={() => this.editDone8(index, 'save')}>确认</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone8(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                                        :
                                        <span>
                  <a onClick={() => this.edit8(index)}>编辑</a>
                </span>
                            }

                        </div>
                    );
                },
            }];

        this.columns9 = [
            {
                title: '数据项',
                dataIndex: 'name',
                width: 150,

                render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'name', text),
            },

            {
                title: '烟煤(kgCH4/TJ)', dataIndex: 'bituminousCoal', width: 150,
                render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'bituminousCoal', text),
            }, {
                title: '汽油(kgCH4/TJ)', dataIndex: 'gasoline', width: 150,
                render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'gasoline', text),
            }, {
                title: '煤油(kgCH4/TJ)', dataIndex: 'kerosene', width: 150,
                render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'kerosene', text),
            }, {
                title: '柴油(kgCH4/TJ)', dataIndex: 'diesel', width: 150,
                render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'diesel', text),
            }, {
                title: '燃料油(kgCH4/TJ)', dataIndex: 'fuelOil', width: 170,
                render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'fuelOil', text),
            }, {
                title: '天然气(kgCH4/TJ)', dataIndex: 'naturalgas', width: 150,
                render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'naturalgas', text),
            }, {
                title: '液化天然气(kgCH4/TJ)', dataIndex: 'liquifiednaturalgas', width: 170,
                render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'liquifiednaturalgas', text),
            }, {
                title: '液化石油气(kgCH4/TJ)', dataIndex: 'liquefiedpetroleumgas', width: 170,
                render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'liquefiedpetroleumgas', text),
            }, {
                title: '其他品种1(kgCH4/TJ)', dataIndex: 'otherVarieties1', width: 170,
                render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'otherVarieties1', text),
            }, {
                title: '其他品种2(kgCH4/TJ)', dataIndex: 'otherVarieties2', width: 170,
                render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'otherVarieties2', text),
            }, {
                title: '其他品种3(kgCH4/TJ)', dataIndex: 'otherVarieties3', width: 170,
                render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'otherVarieties3', text),
            }, {
                title: '其他品种4(kgCH4/TJ)', dataIndex: 'otherVarieties4', width: 170,
                render: (text, record, index) => this.renderColumns9(this.state.data8, index, 'otherVarieties4', text),
            },
            {
                title: '编辑',
                dataIndex: 'operation',

                width: 100,

                render: (text, record, index) => {

                    const {editable} = this.state.data8[index].bituminousCoal;
                    return (
                        <div className={styles.editableOperations}>

                            {
                                index == 0 || index == 6
                                    ? <span></span> :
                                    editable ?
                                        <span>
                  <a onClick={() => this.editDone9(index, 'save')}>确认</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone9(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                                        :
                                        <span>
                  <a onClick={() => this.edit9(index)}>编辑</a>
                </span>
                            }

                        </div>
                    );
                },
            }];

        this.columns10 = [
            {
                title: '数据项',
                dataIndex: 'name',
                width: 150,

                render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'name', text),
            },

            {
                title: '烟煤(kgN2O/TJ)', dataIndex: 'bituminousCoal', width: 150,
                render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'bituminousCoal', text),
            }, {
                title: '汽油(kgN2O/TJ)', dataIndex: 'gasoline', width: 150,
                render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'gasoline', text),
            }, {
                title: '煤油(kgN2O/TJ)', dataIndex: 'kerosene', width: 150,
                render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'kerosene', text),
            }, {
                title: '柴油(kgN2O/TJ)', dataIndex: 'diesel', width: 150,
                render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'diesel', text),
            }, {
                title: '燃料油(kgN2O/TJ)', dataIndex: 'fuelOil', width: 170,
                render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'fuelOil', text),
            }, {
                title: '天然气(kgN2O/TJ)', dataIndex: 'naturalgas', width: 150,
                render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'naturalgas', text),
            }, {
                title: '液化天然气(kgN2O/TJ)', dataIndex: 'liquifiednaturalgas', width: 170,
                render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'liquifiednaturalgas', text),
            }, {
                title: '液化石油气(kgN2O/TJ)', dataIndex: 'liquefiedpetroleumgas', width: 170,
                render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'liquefiedpetroleumgas', text),
            }, {
                title: '其他品种1(kgN2O/TJ)', dataIndex: 'otherVarieties1', width: 170,
                render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'otherVarieties1', text),
            }, {
                title: '其他品种2(kgN2O/TJ)', dataIndex: 'otherVarieties2', width: 170,
                render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'otherVarieties2', text),
            }, {
                title: '其他品种3(kgN2O/TJ)', dataIndex: 'otherVarieties3', width: 170,
                render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'otherVarieties3', text),
            }, {
                title: '其他品种4(kgN2O/TJ)', dataIndex: 'otherVarieties4', width: 170,
                render: (text, record, index) => this.renderColumns10(this.state.data9, index, 'otherVarieties4', text),
            },
            {
                title: '编辑',
                dataIndex: 'operation',

                width: 100,

                render: (text, record, index) => {

                    const {editable} = this.state.data9[index].bituminousCoal;
                    return (
                        <div className={styles.editableOperations}>

                            {
                                index == 0 || index == 6
                                    ? <span></span> :
                                    editable ?
                                        <span>
                  <a onClick={() => this.editDone10(index, 'save')}>确认</a>
                  <Popconfirm title="确认取消?" onConfirm={() => this.editDone10(index, 'cancel')}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
                                        :
                                        <span>
                  <a onClick={() => this.edit10(index)}>编辑</a>
                </span>
                            }

                        </div>
                    );
                },
            }];

        this.columns11 = [
            {
                title: '数据项',
                dataIndex: 'name',
                width: 150,

                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'name', text),
            },

            {
                title: '无烟煤(万tC)', dataIndex: 'anthracite', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'anthracite', text),
            }, {
                title: '烟煤(万tC)', dataIndex: 'bituminouscoal', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'bituminouscoal', text),
            }, {
                title: '褐煤(万tC)', dataIndex: 'lignite', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'lignite', text),
            }, {
                title: '洗精煤(万tC)', dataIndex: 'washthecleancoal', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'washthecleancoal', text),
            }, {
                title: '其他洗煤(万tC)', dataIndex: 'othercoalwashing', width: 170,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'othercoalwashing', text),
            }, {
                title: '型煤(万tC)', dataIndex: 'briquette', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'briquette', text),
            }, {
                title: '煤矸石(万tC)', dataIndex: 'coalgangue', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'coalgangue', text),
            }, {
                title: '焦炭(万tC)', dataIndex: 'coke', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'coke', text),
            }, {
                title: '焦炉煤气(万tC)', dataIndex: 'cokeovengas', width: 210,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'cokeovengas', text),
            }, {
                title: '高炉煤气(万tC)', dataIndex: 'blastfurnacegas', width: 200,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'blastfurnacegas', text),
            }, {
                title: '转炉煤气(万tC)', dataIndex: 'onvertergas', width: 200,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'onvertergas', text),
            }, {
                title: '其它煤气(万tC)', dataIndex: 'othergas', width: 200,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'othergas', text),
            }, {
                title: '其它焦化产品(万tC)', dataIndex: 'othercokingproducts', width: 200,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'othercokingproducts', text),
            }, {
                title: '原油(万tC)', dataIndex: 'crudeoil', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'crudeoil', text),
            }, {
                title: '汽油(万tC)', dataIndex: 'gasoline', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'gasoline', text),
            }, {
                title: '煤油(万tC)', dataIndex: 'kerosene', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'kerosene', text),
            }, {
                title: '柴油(万tC)', dataIndex: 'diesel', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'diesel', text),
            }, {
                title: '燃料油(万tC)', dataIndex: 'fueloil', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'fueloil', text),
            }, {
                title: '石脑油(万tC)', dataIndex: 'naphtha', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'naphtha', text),
            }, {
                title: '润滑油(万tC)', dataIndex: 'lubricatingoil', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'lubricatingoil', text),
            }, {
                title: '石蜡(万tC)', dataIndex: 'paraffin', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'paraffin', text),
            }, {
                title: '溶剂油(万tC)', dataIndex: 'solventoil', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'solventoil', text),
            }, {
                title: '石油沥青(万tC)', dataIndex: 'asphalt', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'asphalt', text),
            }, {
                title: '石油焦(万tC)', dataIndex: 'oilcoke', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'oilcoke', text),
            }, {
                title: '液化石油气(万tCe)', dataIndex: 'liquefiedpetroleumgas', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'liquefiedpetroleumgas', text),
            }, {
                title: '炼厂干气(万tC)', dataIndex: 'refinerydrygas', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'refinerydrygas', text),
            }, {
                title: '其他石油制品(万tC)', dataIndex: 'otherpetroleumproducts', width: 150,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'otherpetroleumproducts', text),
            }, {
                title: '天然气(万tC)', dataIndex: 'naturalgas', width: 180,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'naturalgas', text),
            }, {
                title: '液化天然气(万tC)', dataIndex: 'liquifiednaturalgas', width: 180,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'liquifiednaturalgas', text),
            }, {
                title: '其他(万tC)', dataIndex: 'other', width: 180,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'other', text),
            },
            {
                title: '合计(万tC)', dataIndex: 'total', width: 180,
                render: (text, record, index) => this.renderColumns11(this.state.data11, index, 'total', text),
            }
        ];

        this.state = {

            data: [],
            data1: [],
            data2: [],
            data3: [],
            data4: [],
            data5: [],
            data6: [],
            data7: [],
            data8: [],
            data9: [],
            data10: [],
            data11: [],
            loading: true,

            collapsed: false,
            select: 1,
            trigger: true,
            user: [],


            Data1: [],
            Data2: [],
            Data3: [],
            Data4: [],
            Data5: [],
            Data6: [],

            gas: 'a1',
            statistics: 'b1',
            discharge: 'c1',
            breed: '0',
            dataSource: [],
            cs: '活动水平数据',
            csZs: '',

            AllData: [],
            years: '2014',

            A1: [],
            A2: [],
            A3: [],
            A4: [],
            A5: [],
            A6: [],
            A7: [],


        };

        this.query('0', '2014');

        //$("#bodyTable1").hide();

    }

    //co2排放量 固碳量

    renderColumns11(data11, index, key, text) {


        const {editable, status} = data11[index][key];
        if (typeof editable === 'undefined') {
            return text;
        }
        return (

            <EditableCell11
                editable={editable}
                value={text}
                onChange={value => this.handleChange11(key, index, value)}
                status={status}
            />);
    }


    handleChange11(key, index, value) {


        const data11 = [...this.state.data11];
        data11[index][key].value = value;
        this.setState({data11});

        if (key == 'otherVarieties4') {


            //this.updateQueryYdYzN(index,data11,1);

            //console.log(data2)

        }


    }

    edit11(index) {

        const {data11} = this.state;
        Object.keys(data11[index]).forEach((item) => {
            if (data11[index][item] && typeof data11[index][item].editable !== 'undefined') {
                data11[index][item].editable = true;
            }
        });
        this.setState({data11});
    }

    editDone11(index, type) {

        const {data11} = this.state;
        Object.keys(data11[index]).forEach((item) => {
            if (data11[index][item] && typeof data11[index][item].editable !== 'undefined') {
                data11[index][item].editable = false;
                data11[index][item].status = type;
            }
        });
        this.setState({data11}, () => {
            Object.keys(data11[index]).forEach((item) => {
                if (data11[index][item] && typeof data11[index][item].editable !== 'undefined') {
                    delete data11[index][item].status;
                }
            });
        });
    }


    //非co2cH4 2.4 n2o排放因子

    renderColumns10(data9, index, key, text) {


        const {editable, status} = data9[index][key];
        if (typeof editable === 'undefined') {
            return text;
        }
        return (

            <EditableCell10
                editable={editable}
                value={text}
                onChange={value => this.handleChange10(key, index, value)}
                status={status}
            />);
    }


    handleChange10(key, index, value) {


        const data9 = [...this.state.data9];
        data9[index][key].value = value;
        this.setState({data9});

        if (key == 'otherVarieties4') {


            this.updateQueryYdYzN(index, data9, 1);

            //console.log(data2)

        }


    }

    edit10(index) {

        const {data9} = this.state;
        Object.keys(data9[index]).forEach((item) => {
            if (data9[index][item] && typeof data9[index][item].editable !== 'undefined') {
                data9[index][item].editable = true;
            }
        });
        this.setState({data9});
    }

    editDone10(index, type) {

        const {data9} = this.state;
        Object.keys(data9[index]).forEach((item) => {
            if (data9[index][item] && typeof data9[index][item].editable !== 'undefined') {
                data9[index][item].editable = false;
                data9[index][item].status = type;
            }
        });
        this.setState({data9}, () => {
            Object.keys(data9[index]).forEach((item) => {
                if (data9[index][item] && typeof data9[index][item].editable !== 'undefined') {
                    delete data9[index][item].status;
                }
            });
        });
    }


    //非co2cH4 2.3 ch4排放因子

    renderColumns9(data8, index, key, text) {


        const {editable, status} = data8[index][key];
        if (typeof editable === 'undefined') {
            return text;
        }
        return (

            <EditableCell9
                editable={editable}
                value={text}
                onChange={value => this.handleChange9(key, index, value)}
                status={status}
            />);
    }


    handleChange9(key, index, value) {


        const data8 = [...this.state.data8];
        data8[index][key].value = value;
        this.setState({data8});

        if (key == 'otherVarieties4') {


            this.updateQueryYdYzCH4(index, data8, 1);

            //console.log(data2)

        }


    }

    edit9(index) {

        const {data8} = this.state;
        Object.keys(data8[index]).forEach((item) => {
            if (data8[index][item] && typeof data8[index][item].editable !== 'undefined') {
                data8[index][item].editable = true;
            }
        });
        this.setState({data8});
    }

    editDone9(index, type) {

        const {data8} = this.state;
        Object.keys(data8[index]).forEach((item) => {
            if (data8[index][item] && typeof data8[index][item].editable !== 'undefined') {
                data8[index][item].editable = false;
                data8[index][item].status = type;
            }
        });
        this.setState({data8}, () => {
            Object.keys(data8[index]).forEach((item) => {
                if (data8[index][item] && typeof data8[index][item].editable !== 'undefined') {
                    delete data8[index][item].status;
                }
            });
        });
    }


    //非co2cH4 2.2 平均低位热值

    renderColumns8(data7, index, key, text) {


        const {editable, status} = data7[index][key];
        if (typeof editable === 'undefined') {
            return text;
        }
        return (

            <EditableCell8
                editable={editable}
                value={text}
                onChange={value => this.handleChange8(key, index, value)}
                status={status}
            />);
    }


    handleChange8(key, index, value) {


        const data7 = [...this.state.data7];
        data7[index][key].value = value;
        this.setState({data7});

        if (key == 'otherVarieties4') {


            this.updateQueryRzCH4(index, data7, 1);

            //console.log(data2)

        }


    }

    edit8(index) {

        const {data7} = this.state;
        Object.keys(data7[index]).forEach((item) => {
            if (data7[index][item] && typeof data7[index][item].editable !== 'undefined') {
                data7[index][item].editable = true;
            }
        });
        this.setState({data7});
    }

    editDone8(index, type) {

        const {data7} = this.state;
        Object.keys(data7[index]).forEach((item) => {
            if (data7[index][item] && typeof data7[index][item].editable !== 'undefined') {
                data7[index][item].editable = false;
                data7[index][item].status = type;
            }
        });
        this.setState({data7}, () => {
            Object.keys(data7[index]).forEach((item) => {
                if (data7[index][item] && typeof data7[index][item].editable !== 'undefined') {
                    delete data7[index][item].status;
                }
            });
        });
    }


    //非co2cH4 2.1 活动水平数据

    renderColumns7(data6, index, key, text) {


        const {editable, status} = data6[index][key];
        if (typeof editable === 'undefined') {
            return text;
        }
        return (

            <EditableCell7
                editable={editable}
                value={text}
                onChange={value => this.handleChange7(key, index, value)}
                status={status}
            />);
    }


    handleChange7(key, index, value) {


        const data6 = [...this.state.data6];
        data6[index][key].value = value;
        this.setState({data6});

        if (key == 'otherVarieties4') {


            this.updateQueryHdCH4(index, data6, 1);

            //console.log(data2)

        }


    }

    edit7(index) {

        const {data6} = this.state;
        Object.keys(data6[index]).forEach((item) => {
            if (data6[index][item] && typeof data6[index][item].editable !== 'undefined') {
                data6[index][item].editable = true;
            }
        });
        this.setState({data6});
    }

    editDone7(index, type) {

        const {data6} = this.state;
        Object.keys(data6[index]).forEach((item) => {
            if (data6[index][item] && typeof data6[index][item].editable !== 'undefined') {
                data6[index][item].editable = false;
                data6[index][item].status = type;
            }
        });
        this.setState({data6}, () => {
            Object.keys(data6[index]).forEach((item) => {
                if (data6[index][item] && typeof data6[index][item].editable !== 'undefined') {
                    delete data6[index][item].status;
                }
            });
        });
    }


    //非co2 1.3  排放因子

    renderColumns6(data5, index, key, text) {


        const {editable, status} = data5[index][key];
        if (typeof editable === 'undefined') {
            return text;
        }
        return (

            <EditableCell6
                editable={editable}
                value={text}
                onChange={value => this.handleChange6(key, index, value)}
                status={status}
            />);
    }


    handleChange6(key, index, value) {


        const data5 = [...this.state.data5];
        data5[index][key].value = value;
        this.setState({data5});

        if (key == 'anthracite') {


            this.updateQueryYzNO2(index, data5, 1);

            //console.log(data2)

        }


    }

    edit6(index) {

        const {data5} = this.state;
        Object.keys(data5[index]).forEach((item) => {
            if (data5[index][item] && typeof data5[index][item].editable !== 'undefined') {
                data5[index][item].editable = true;
            }
        });
        this.setState({data5});
    }

    editDone6(index, type) {

        const {data5} = this.state;
        Object.keys(data5[index]).forEach((item) => {
            if (data5[index][item] && typeof data5[index][item].editable !== 'undefined') {
                data5[index][item].editable = false;
                data5[index][item].status = type;
            }
        });
        this.setState({data5}, () => {
            Object.keys(data5[index]).forEach((item) => {
                if (data5[index][item] && typeof data5[index][item].editable !== 'undefined') {
                    delete data5[index][item].status;
                }
            });
        });
    }


    //非co2 1.2 平均低位热值

    renderColumns5(data4, index, key, text) {


        const {editable, status} = data4[index][key];
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


        const data4 = [...this.state.data4];
        data4[index][key].value = value;
        this.setState({data4});

        if (key == 'other') {


            this.updateQueryRzNO2(index, data4, 1);

            //console.log(data2)

        }


    }

    edit5(index) {

        const {data4} = this.state;
        Object.keys(data4[index]).forEach((item) => {
            if (data4[index][item] && typeof data4[index][item].editable !== 'undefined') {
                data4[index][item].editable = true;
            }
        });
        this.setState({data4});
    }

    editDone5(index, type) {

        const {data4} = this.state;
        Object.keys(data4[index]).forEach((item) => {
            if (data4[index][item] && typeof data4[index][item].editable !== 'undefined') {
                data4[index][item].editable = false;
                data4[index][item].status = type;
            }
        });
        this.setState({data4}, () => {
            Object.keys(data4[index]).forEach((item) => {
                if (data4[index][item] && typeof data4[index][item].editable !== 'undefined') {
                    delete data4[index][item].status;
                }
            });
        });
    }


    //非co2 1.1 活动水平数据

    renderColumns4(data3, index, key, text) {


        const {editable, status} = data3[index][key];
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


        const data3 = [...this.state.data3];
        data3[index][key].value = value;
        this.setState({data3});

        if (key == 'other') {


            this.updateQueryHdNO2(index, data3, 1);

            //console.log(data2)

        }


    }

    edit4(index) {

        const {data3} = this.state;
        Object.keys(data3[index]).forEach((item) => {
            if (data3[index][item] && typeof data3[index][item].editable !== 'undefined') {
                data3[index][item].editable = true;
            }
        });
        this.setState({data3});
    }

    editDone4(index, type) {

        const {data3} = this.state;
        Object.keys(data3[index]).forEach((item) => {
            if (data3[index][item] && typeof data3[index][item].editable !== 'undefined') {
                data3[index][item].editable = false;
                data3[index][item].status = type;
            }
        });
        this.setState({data3}, () => {
            Object.keys(data3[index]).forEach((item) => {
                if (data3[index][item] && typeof data3[index][item].editable !== 'undefined') {
                    delete data3[index][item].status;
                }
            });
        });
    }


    //co2 1.2

    renderColumns3(data2, index, key, text) {


        const {editable, status} = data2[index][key];
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


        const data2 = [...this.state.data2];
        data2[index][key].value = value;
        this.setState({data2});

        if (key == 'other') {


            this.updateMethod(index, data2, 1);

            //console.log(data2)

        }


    }

    edit3(index) {

        const {data2} = this.state;
        Object.keys(data2[index]).forEach((item) => {
            if (data2[index][item] && typeof data2[index][item].editable !== 'undefined') {
                data2[index][item].editable = true;
            }
        });
        this.setState({data2});
    }

    editDone3(index, type) {

        const {data2} = this.state;
        Object.keys(data2[index]).forEach((item) => {
            if (data2[index][item] && typeof data2[index][item].editable !== 'undefined') {
                data2[index][item].editable = false;
                data2[index][item].status = type;
            }
        });
        this.setState({data2}, () => {
            Object.keys(data2[index]).forEach((item) => {
                if (data2[index][item] && typeof data2[index][item].editable !== 'undefined') {
                    delete data2[index][item].status;
                }
            });
        });
    }


    //co2 1.1

    renderColumns2(data1, index, key, text) {


        const {editable, status} = data1[index][key];
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


        const data1 = [...this.state.data1];
        data1[index][key].value = value;
        this.setState({data1});

        if (key == 'other') {


            this.updateCo2(index, data1, 1);

            //console.log(data1)

        }


    }

    edit2(index) {

        const {data1} = this.state;
        Object.keys(data1[index]).forEach((item) => {
            if (data1[index][item] && typeof data1[index][item].editable !== 'undefined') {
                data1[index][item].editable = true;
            }
        });
        this.setState({data1});
    }

    editDone2(index, type) {

        const {data1} = this.state;
        Object.keys(data1[index]).forEach((item) => {
            if (data1[index][item] && typeof data1[index][item].editable !== 'undefined') {
                data1[index][item].editable = false;
                data1[index][item].status = type;
            }
        });
        this.setState({data1}, () => {
            Object.keys(data1[index]).forEach((item) => {
                if (data1[index][item] && typeof data1[index][item].editable !== 'undefined') {
                    delete data1[index][item].status;
                }
            });
        });
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

        if (key == 'other') {

            if (index < 15 && index > 3) {
                this.update(index, data, 1);
            } else if (index < 54 && index > 15) {
                this.update(index, data, 2);
            } else if (index < 64 && index > 53) {
                this.update(index, data, 3);
            } else if (index == 64) {
                this.update(index, data, 4);
            } else if (index == 65) {
                this.update(index, data, 5);
            } else if (index == 66) {
                this.update(index, data, 6);
            }
            console.log(data)
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


    //非co2排放量-CH4-2.4 移动源N2O排放因子
    queryYdYzN(years) {

        post('/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/mobileSourceCH4AndN2OEmissions/mobileSourceN2OEmissionFactor/list', {
            year: years,

        })
            .then((res) => {

                if (res.code == 0) {


                    var Alldata = res.data;

                    const _Data = []

                    _Data.push('');
                    ;//航空 *******
                    _Data.push(Alldata.tDomesticFlights);//国内航班
                    _Data.push(Alldata.tHongKongAndMacaoFlights);//港澳地区航班
                    _Data.push(Alldata.tInternationalFlights); //国际航班
                    _Data.push(Alldata.highway);//公路
                    _Data.push(Alldata.railway);//铁路
                    _Data.push('');//水运 ******
                    _Data.push(Alldata.inlandRiverInternalCombustionEngine);//内河近海内燃机
                    _Data.push(Alldata.internationalOceanInternalCombustionEngine);//国际远洋内燃机


                    const fossilTitle = [


                        '　航空',
                        '　　国内航班',
                        '　　港澳地区航班',
                        '　　国际航班',
                        '　公路',
                        '　铁路',
                        '　水运',
                        '　　内河近海内燃机',
                        '　　国际远洋内燃机',

                    ]

                    const _a = [];


                    for (var i = 0; i < 9; i++) {
                        if (i == 0 || i == 6) {
                            _a.push({
                                key: i,
                                name: fossilTitle[i],
                                bituminousCoal: '',
                                gasoline: '',
                                kerosene: '',
                                diesel: '',
                                fuelOil: '',
                                naturalgas: '',
                                liquifiednaturalgas: '',
                                liquefiedpetroleumgas: '',
                                otherVarieties1: '',
                                otherVarieties2: '',
                                otherVarieties3: '',
                                otherVarieties4: '',

                            });

                        } else {

                            _a.push({
                                key: i,
                                name: fossilTitle[i],
                                bituminousCoal: _Data[i].bituminousCoal,
                                gasoline: _Data[i].gasoline,
                                kerosene: _Data[i].kerosene,
                                diesel: _Data[i].diesel,
                                fuelOil: _Data[i].fuelOil,
                                naturalgas: _Data[i].naturalgas,
                                liquifiednaturalgas: _Data[i].liquifiednaturalgas,
                                liquefiedpetroleumgas: _Data[i].liquefiedpetroleumgas,
                                otherVarieties1: _Data[i].otherVarieties1,
                                otherVarieties2: _Data[i].otherVarieties2,
                                otherVarieties3: _Data[i].otherVarieties3,
                                otherVarieties4: _Data[i].otherVarieties4,

                            });
                        }

                    }


                    const _b = [];


                    for (var i = 0; i < _a.length; i++) {
                        _b.push({
                                key: _a[i].key,
                                name: {

                                    value: _a[i].name,
                                },
                                bituminousCoal: {
                                    editable: false,
                                    value: _a[i].bituminousCoal,
                                },
                                gasoline: {
                                    editable: false,
                                    value: _a[i].gasoline,
                                },
                                kerosene: {
                                    editable: false,
                                    value: _a[i].kerosene,
                                },
                                diesel: {
                                    editable: false,
                                    value: _a[i].diesel,
                                },
                                fuelOil: {
                                    editable: false,
                                    value: _a[i].fuelOil,
                                },
                                naturalgas: {
                                    editable: false,
                                    value: _a[i].naturalgas,
                                },
                                liquifiednaturalgas: {
                                    editable: false,
                                    value: _a[i].liquifiednaturalgas,
                                },
                                liquefiedpetroleumgas: {
                                    editable: false,
                                    value: _a[i].liquefiedpetroleumgas,
                                },
                                otherVarieties1: {
                                    editable: false,
                                    value: _a[i].otherVarieties1,
                                },
                                otherVarieties2: {
                                    editable: false,
                                    value: _a[i].otherVarieties2,
                                },
                                otherVarieties3: {
                                    editable: false,
                                    value: _a[i].otherVarieties3,
                                },
                                otherVarieties4: {
                                    editable: false,
                                    value: _a[i].otherVarieties4,
                                },


                            }
                        )
                    }

                    console.log(_b);


                    this.setState({data9: _b});
                    this.setState({loading: false});


                } else {
                    message.error('数据错误！');
                }
            });

    }

    //非co2排放量-CH4-2.4  移动源N2O排放因子
    updateQueryYdYzN(index, data9) {
        var data = data9

        const Directory = [
            'aviation',
            'tDomesticFlights',
            'tHongKongAndMacaoFlights',
            'tInternationalFlights',
            'highway',
            'railway',
            'waterTransport',
            'inlandRiverInternalCombustionEngine',
            'internationalOceanInternalCombustionEngine',


        ]

        var DirectoryIndex = Directory[index];

        var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/mobileSourceCH4AndN2OEmissions/mobileSourceN2OEmissionFactor/update'
        var bodyName = 'mobileSourceN2OEmissionFactor'


        var obj = {
            "year": this.state.years
        };

        obj[bodyName] = {}

        obj[bodyName][DirectoryIndex] = {
            "bituminousCoal": data[index].bituminousCoal.value,
            "gasoline": data[index].gasoline.value,
            "kerosene": data[index].kerosene.value,
            "diesel": data[index].diesel.value,
            "fuelOil": data[index].fuelOil.value,
            "naturalgas": data[index].naturalgas.value,
            "liquifiednaturalgas": data[index].liquifiednaturalgas.value,
            "liquefiedpetroleumgas": data[index].liquefiedpetroleumgas.value,
            "otherVarieties1": data[index].otherVarieties1.value,
            "otherVarieties2": data[index].otherVarieties2.value,
            "otherVarieties3": data[index].otherVarieties3.value,
            "otherVarieties4": data[index].otherVarieties4.value,
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


    //非co2排放量-CH4-2.3 移动源CH4排放因子
    queryYdYzCH4(years) {

        post('/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/mobileSourceCH4AndN2OEmissions/mobileSourceCH4EmissionFactor/list', {
            year: years,

        })
            .then((res) => {

                if (res.code == 0) {


                    var Alldata = res.data;

                    const _Data = []

                    _Data.push('');
                    ;//航空 *******
                    _Data.push(Alldata.tDomesticFlights);//国内航班
                    _Data.push(Alldata.tHongKongAndMacaoFlights);//港澳地区航班
                    _Data.push(Alldata.tInternationalFlights); //国际航班
                    _Data.push(Alldata.highway);//公路
                    _Data.push(Alldata.railway);//铁路
                    _Data.push('');//水运 ******
                    _Data.push(Alldata.inlandRiverInternalCombustionEngine);//内河近海内燃机
                    _Data.push(Alldata.internationalOceanInternalCombustionEngine);//国际远洋内燃机


                    const fossilTitle = [


                        '　航空',
                        '　　国内航班',
                        '　　港澳地区航班',
                        '　　国际航班',
                        '　公路',
                        '　铁路',
                        '　水运',
                        '　　内河近海内燃机',
                        '　　国际远洋内燃机',

                    ]

                    const _a = [];


                    for (var i = 0; i < 9; i++) {
                        if (i == 0 || i == 6) {
                            _a.push({
                                key: i,
                                name: fossilTitle[i],
                                bituminousCoal: '',
                                gasoline: '',
                                kerosene: '',
                                diesel: '',
                                fuelOil: '',
                                naturalgas: '',
                                liquifiednaturalgas: '',
                                liquefiedpetroleumgas: '',
                                otherVarieties1: '',
                                otherVarieties2: '',
                                otherVarieties3: '',
                                otherVarieties4: '',

                            });

                        } else {

                            _a.push({
                                key: i,
                                name: fossilTitle[i],
                                bituminousCoal: _Data[i].bituminousCoal,
                                gasoline: _Data[i].gasoline,
                                kerosene: _Data[i].kerosene,
                                diesel: _Data[i].diesel,
                                fuelOil: _Data[i].fuelOil,
                                naturalgas: _Data[i].naturalgas,
                                liquifiednaturalgas: _Data[i].liquifiednaturalgas,
                                liquefiedpetroleumgas: _Data[i].liquefiedpetroleumgas,
                                otherVarieties1: _Data[i].otherVarieties1,
                                otherVarieties2: _Data[i].otherVarieties2,
                                otherVarieties3: _Data[i].otherVarieties3,
                                otherVarieties4: _Data[i].otherVarieties4,

                            });
                        }

                    }


                    const _b = [];


                    for (var i = 0; i < _a.length; i++) {
                        _b.push({
                                key: _a[i].key,
                                name: {

                                    value: _a[i].name,
                                },
                                bituminousCoal: {
                                    editable: false,
                                    value: _a[i].bituminousCoal,
                                },
                                gasoline: {
                                    editable: false,
                                    value: _a[i].gasoline,
                                },
                                kerosene: {
                                    editable: false,
                                    value: _a[i].kerosene,
                                },
                                diesel: {
                                    editable: false,
                                    value: _a[i].diesel,
                                },
                                fuelOil: {
                                    editable: false,
                                    value: _a[i].fuelOil,
                                },
                                naturalgas: {
                                    editable: false,
                                    value: _a[i].naturalgas,
                                },
                                liquifiednaturalgas: {
                                    editable: false,
                                    value: _a[i].liquifiednaturalgas,
                                },
                                liquefiedpetroleumgas: {
                                    editable: false,
                                    value: _a[i].liquefiedpetroleumgas,
                                },
                                otherVarieties1: {
                                    editable: false,
                                    value: _a[i].otherVarieties1,
                                },
                                otherVarieties2: {
                                    editable: false,
                                    value: _a[i].otherVarieties2,
                                },
                                otherVarieties3: {
                                    editable: false,
                                    value: _a[i].otherVarieties3,
                                },
                                otherVarieties4: {
                                    editable: false,
                                    value: _a[i].otherVarieties4,
                                },


                            }
                        )
                    }

                    console.log(_b);


                    this.setState({data8: _b});
                    this.setState({loading: false});


                } else {
                    message.error('数据错误！');
                }
            });

    }

    //非co2排放量-CH4-2.3  移动源CH4排放因子
    updateQueryYdYzCH4(index, data8) {
        var data = data8

        const Directory = [
            'aviation',
            'tDomesticFlights',
            'tHongKongAndMacaoFlights',
            'tInternationalFlights',
            'highway',
            'railway',
            'waterTransport',
            'inlandRiverInternalCombustionEngine',
            'internationalOceanInternalCombustionEngine',


        ]

        var DirectoryIndex = Directory[index];

        var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/mobileSourceCH4AndN2OEmissions/mobileSourceCH4EmissionFactor/update'
        var bodyName = 'mobileSourceCH4EmissionFactor'


        var obj = {
            "year": this.state.years
        };

        obj[bodyName] = {}

        obj[bodyName][DirectoryIndex] = {
            "bituminousCoal": data[index].bituminousCoal.value,
            "gasoline": data[index].gasoline.value,
            "kerosene": data[index].kerosene.value,
            "diesel": data[index].diesel.value,
            "fuelOil": data[index].fuelOil.value,
            "naturalgas": data[index].naturalgas.value,
            "liquifiednaturalgas": data[index].liquifiednaturalgas.value,
            "liquefiedpetroleumgas": data[index].liquefiedpetroleumgas.value,
            "otherVarieties1": data[index].otherVarieties1.value,
            "otherVarieties2": data[index].otherVarieties2.value,
            "otherVarieties3": data[index].otherVarieties3.value,
            "otherVarieties4": data[index].otherVarieties4.value,
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


    //非co2排放量-CH4-2.2平均低位热值
    queryRzCH4(years) {

        post('/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/mobileSourceCH4AndN2OEmissions/averageLowCalorificValue/list', {
            year: years,

        })
            .then((res) => {

                if (res.code == 0) {


                    var Alldata = res.data;

                    const _Data = []

                    _Data.push('');
                    ;//航空 *******
                    _Data.push(Alldata.tDomesticFlights);//国内航班
                    _Data.push(Alldata.tHongKongAndMacaoFlights);//港澳地区航班
                    _Data.push(Alldata.tInternationalFlights); //国际航班
                    _Data.push(Alldata.highway);//公路
                    _Data.push(Alldata.railway);//铁路
                    _Data.push('');//水运 ******
                    _Data.push(Alldata.inlandRiverInternalCombustionEngine);//内河近海内燃机
                    _Data.push(Alldata.internationalOceanInternalCombustionEngine);//国际远洋内燃机


                    const fossilTitle = [


                        '　航空',
                        '　　国内航班',
                        '　　港澳地区航班',
                        '　　国际航班',
                        '　公路',
                        '　铁路',
                        '　水运',
                        '　　内河近海内燃机',
                        '　　国际远洋内燃机',

                    ]

                    const _a = [];


                    for (var i = 0; i < 9; i++) {
                        if (i == 0 || i == 6) {
                            _a.push({
                                key: i,
                                name: fossilTitle[i],
                                bituminousCoal: '',
                                gasoline: '',
                                kerosene: '',
                                diesel: '',
                                fuelOil: '',
                                naturalgas: '',
                                liquifiednaturalgas: '',
                                liquefiedpetroleumgas: '',
                                otherVarieties1: '',
                                otherVarieties2: '',
                                otherVarieties3: '',
                                otherVarieties4: '',

                            });

                        } else {

                            _a.push({
                                key: i,
                                name: fossilTitle[i],
                                bituminousCoal: _Data[i].bituminousCoal,
                                gasoline: _Data[i].gasoline,
                                kerosene: _Data[i].kerosene,
                                diesel: _Data[i].diesel,
                                fuelOil: _Data[i].fuelOil,
                                naturalgas: _Data[i].naturalgas,
                                liquifiednaturalgas: _Data[i].liquifiednaturalgas,
                                liquefiedpetroleumgas: _Data[i].liquefiedpetroleumgas,
                                otherVarieties1: _Data[i].otherVarieties1,
                                otherVarieties2: _Data[i].otherVarieties2,
                                otherVarieties3: _Data[i].otherVarieties3,
                                otherVarieties4: _Data[i].otherVarieties4,

                            });
                        }

                    }


                    const _b = [];


                    for (var i = 0; i < _a.length; i++) {
                        _b.push({
                                key: _a[i].key,
                                name: {

                                    value: _a[i].name,
                                },
                                bituminousCoal: {
                                    editable: false,
                                    value: _a[i].bituminousCoal,
                                },
                                gasoline: {
                                    editable: false,
                                    value: _a[i].gasoline,
                                },
                                kerosene: {
                                    editable: false,
                                    value: _a[i].kerosene,
                                },
                                diesel: {
                                    editable: false,
                                    value: _a[i].diesel,
                                },
                                fuelOil: {
                                    editable: false,
                                    value: _a[i].fuelOil,
                                },
                                naturalgas: {
                                    editable: false,
                                    value: _a[i].naturalgas,
                                },
                                liquifiednaturalgas: {
                                    editable: false,
                                    value: _a[i].liquifiednaturalgas,
                                },
                                liquefiedpetroleumgas: {
                                    editable: false,
                                    value: _a[i].liquefiedpetroleumgas,
                                },
                                otherVarieties1: {
                                    editable: false,
                                    value: _a[i].otherVarieties1,
                                },
                                otherVarieties2: {
                                    editable: false,
                                    value: _a[i].otherVarieties2,
                                },
                                otherVarieties3: {
                                    editable: false,
                                    value: _a[i].otherVarieties3,
                                },
                                otherVarieties4: {
                                    editable: false,
                                    value: _a[i].otherVarieties4,
                                },


                            }
                        )
                    }

                    console.log(_b);


                    this.setState({data7: _b});
                    this.setState({loading: false});


                } else {
                    message.error('数据错误！');
                }
            });

    }

    //非co2排放量-CH4-2.2平均低位热值
    updateQueryRzCH4(index, data7) {
        var data = data7

        const Directory = [
            'aviation',
            'tDomesticFlights',
            'tHongKongAndMacaoFlights',
            'tInternationalFlights',
            'highway',
            'railway',
            'waterTransport',
            'inlandRiverInternalCombustionEngine',
            'internationalOceanInternalCombustionEngine',


        ]

        var DirectoryIndex = Directory[index];

        var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/mobileSourceCH4AndN2OEmissions/averageLowCalorificValue/update'
        var bodyName = 'averageLowCalorificValue'


        var obj = {
            "year": this.state.years
        };

        obj[bodyName] = {}

        obj[bodyName][DirectoryIndex] = {
            "bituminousCoal": data[index].bituminousCoal.value,
            "gasoline": data[index].gasoline.value,
            "kerosene": data[index].kerosene.value,
            "diesel": data[index].diesel.value,
            "fuelOil": data[index].fuelOil.value,
            "naturalgas": data[index].naturalgas.value,
            "liquifiednaturalgas": data[index].liquifiednaturalgas.value,
            "liquefiedpetroleumgas": data[index].liquefiedpetroleumgas.value,
            "otherVarieties1": data[index].otherVarieties1.value,
            "otherVarieties2": data[index].otherVarieties2.value,
            "otherVarieties3": data[index].otherVarieties3.value,
            "otherVarieties4": data[index].otherVarieties4.value,
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


    //非co2排放量-CH4-2.1活动水平数据
    queryHdCH4(years) {

        post('/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/mobileSourceCH4AndN2OEmissions/activityLevelData/list', {
            year: years,

        })
            .then((res) => {

                if (res.code == 0) {


                    var Alldata = res.data;

                    const _Data = []

                    _Data.push('');
                    ;//航空 *******
                    _Data.push(Alldata.tDomesticFlights);//国内航班
                    _Data.push(Alldata.tHongKongAndMacaoFlights);//港澳地区航班
                    _Data.push(Alldata.tInternationalFlights); //国际航班
                    _Data.push(Alldata.highway);//公路
                    _Data.push(Alldata.railway);//铁路
                    _Data.push('');//水运 ******
                    _Data.push(Alldata.inlandRiverInternalCombustionEngine);//内河近海内燃机
                    _Data.push(Alldata.internationalOceanInternalCombustionEngine);//国际远洋内燃机


                    var a = Alldata.tDomesticFlights
                    var a1 = Alldata.tHongKongAndMacaoFlights
                    var b = Alldata.inlandRiverInternalCombustionEngine


                    const fossilTitle = [

                        '　航空',
                        '　　国内航班',
                        '　　港澳地区航班',
                        '　　国际航班',
                        '　公路',
                        '　铁路',
                        '　水运',
                        '　　内河近海内燃机',
                        '　　国际远洋内燃机',

                    ]

                    const _a = [];


                    for (var i = 0; i < 9; i++) {
                        if (i == 0) {
                            _a.push({
                                key: i,
                                name: fossilTitle[i],
                                bituminousCoal: (a.bituminousCoal + a1.bituminousCoal).toFixed(2),
                                gasoline: (a.gasoline + a1.gasoline).toFixed(2),
                                kerosene: (a.kerosene + a1.kerosene).toFixed(2),
                                diesel: (a.diesel + a1.diesel).toFixed(2),
                                fuelOil: (a.fuelOil + a1.fuelOil).toFixed(2),
                                naturalgas: (a.naturalgas + a1.naturalgas).toFixed(2),
                                liquifiednaturalgas: (a.liquifiednaturalgas + a1.liquifiednaturalgas).toFixed(2),
                                liquefiedpetroleumgas: (a.liquefiedpetroleumgas + a1.liquefiedpetroleumgas).toFixed(2),
                                otherVarieties1: (a.otherVarieties1 + a1.otherVarieties1).toFixed(2),
                                otherVarieties2: (a.otherVarieties2 + a1.otherVarieties2).toFixed(2),
                                otherVarieties3: (a.otherVarieties3 + a1.otherVarieties3).toFixed(2),
                                otherVarieties4: (a.otherVarieties4 + a1.otherVarieties4).toFixed(2),

                            });

                        } else if (i == 6) {

                            _a.push({
                                key: i,
                                name: fossilTitle[i],
                                bituminousCoal: b.bituminousCoal,
                                gasoline: b.gasoline,
                                kerosene: b.kerosene,
                                diesel: b.diesel,
                                fuelOil: b.fuelOil,
                                naturalgas: b.naturalgas,
                                liquifiednaturalgas: b.liquifiednaturalgas,
                                liquefiedpetroleumgas: b.liquefiedpetroleumgas,
                                otherVarieties1: b.otherVarieties1,
                                otherVarieties2: b.otherVarieties2,
                                otherVarieties3: b.otherVarieties3,
                                otherVarieties4: b.otherVarieties4,

                            });

                        } else {

                            _a.push({
                                key: i,
                                name: fossilTitle[i],
                                bituminousCoal: _Data[i].bituminousCoal,
                                gasoline: _Data[i].gasoline,
                                kerosene: _Data[i].kerosene,
                                diesel: _Data[i].diesel,
                                fuelOil: _Data[i].fuelOil,
                                naturalgas: _Data[i].naturalgas,
                                liquifiednaturalgas: _Data[i].liquifiednaturalgas,
                                liquefiedpetroleumgas: _Data[i].liquefiedpetroleumgas,
                                otherVarieties1: _Data[i].otherVarieties1,
                                otherVarieties2: _Data[i].otherVarieties2,
                                otherVarieties3: _Data[i].otherVarieties3,
                                otherVarieties4: _Data[i].otherVarieties4,

                            });
                        }

                    }


                    const _b = [];


                    for (var i = 0; i < _a.length; i++) {
                        _b.push({
                                key: _a[i].key,
                                name: {

                                    value: _a[i].name,
                                },
                                bituminousCoal: {

                                    value: _a[i].bituminousCoal,
                                },
                                gasoline: {

                                    value: _a[i].gasoline,
                                },
                                kerosene: {

                                    value: _a[i].kerosene,
                                },
                                diesel: {

                                    value: _a[i].diesel,
                                },
                                fuelOil: {

                                    value: _a[i].fuelOil,
                                },
                                naturalgas: {

                                    value: _a[i].naturalgas,
                                },
                                liquifiednaturalgas: {

                                    value: _a[i].liquifiednaturalgas,
                                },
                                liquefiedpetroleumgas: {

                                    value: _a[i].liquefiedpetroleumgas,
                                },
                                otherVarieties1: {
                                    editable: false,
                                    value: _a[i].otherVarieties1,
                                },
                                otherVarieties2: {
                                    editable: false,
                                    value: _a[i].otherVarieties2,
                                },
                                otherVarieties3: {
                                    editable: false,
                                    value: _a[i].otherVarieties3,
                                },
                                otherVarieties4: {
                                    editable: false,
                                    value: _a[i].otherVarieties4,
                                },


                            }
                        )
                    }

                    console.log(_b);


                    this.setState({data6: _b});
                    this.setState({loading: false});


                } else {
                    message.error('数据错误！');
                }
            });

    }

    //非co2排放量-CH4-2.1活动水平数据
    updateQueryHdCH4(index, data6) {
        var data = data6

        const Directory = [
            'aviation',
            'tDomesticFlights',
            'tHongKongAndMacaoFlights',
            'tInternationalFlights',
            'highway',
            'railway',
            'waterTransport',
            'inlandRiverInternalCombustionEngine',
            'internationalOceanInternalCombustionEngine',


        ]

        var DirectoryIndex = Directory[index];

        var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/mobileSourceCH4AndN2OEmissions/activityLevelData/update'
        var bodyName = 'activityLevelData'


        var obj = {
            "year": this.state.years
        };

        obj[bodyName] = {}

        obj[bodyName][DirectoryIndex] = {

            "otherVarieties1": data[index].otherVarieties1.value,
            "otherVarieties2": data[index].otherVarieties2.value,
            "otherVarieties3": data[index].otherVarieties3.value,
            "otherVarieties4": data[index].otherVarieties4.value,
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


    //非co2排放量-NO2-1.3排放因子
    queryYzNO2(years) {

        post('/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/N2OEmissioFromUtilityBoilers/emissionFactor/list', {
            year: years,

        })
            .then((res) => {

                if (res.code == 0) {


                    var Alldata = res.data;

                    const _Data = []

                    _Data.push(Alldata.coalFiredFluidizedBedBoiler);//燃煤流化床锅炉
                    _Data.push(Alldata.ctherCoalFiredBoilers);//其他燃煤锅炉
                    _Data.push(Alldata.oilFiredBoiler); //燃油锅炉
                    _Data.push(Alldata.gasBoiler);//燃气锅炉


                    const fossilTitle = [


                        '燃煤流化床锅炉',
                        '其他燃煤锅炉',
                        '燃油锅炉',
                        '燃气锅炉',

                    ]

                    const _a = [];


                    for (var i = 0; i < 4; i++) {


                        _a.push({
                            key: i,
                            name: fossilTitle[i],
                            anthracite: _Data[i],


                        });


                    }


                    console.log(_a);

                    const _b = [];


                    for (var i = 0; i < _a.length; i++) {
                        _b.push({
                                key: _a[i].key,
                                name: {

                                    value: _a[i].name,
                                },
                                anthracite: {
                                    editable: false,
                                    value: _a[i].anthracite,
                                }

                            }
                        )
                    }

                    console.log(_b);


                    this.setState({data5: _b});
                    this.setState({loading: false});


                } else {
                    message.error('数据错误！');
                }
            });

    }

    //非co2排放量-NO2-1.3排放因子
    updateQueryYzNO2(index, data5) {


        var data = data5

        const Directory = [
            'coalFiredFluidizedBedBoiler',
            'ctherCoalFiredBoilers',
            'oilFiredBoiler',
            'gasBoiler',


        ]

        var DirectoryIndex = Directory[index];

        var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/N2OEmissioFromUtilityBoilers/emissionFactor/update'
        var bodyName = 'emissionFactor'


        var obj = {
            "year": this.state.years
        };

        obj[bodyName] = {}

        obj[bodyName][DirectoryIndex] =

            data[index].anthracite.value

        post(url, obj)
            .then((res) => {

                if (res.code == 0) {
                    message.success(res.message);

                } else {
                    message.error('数据录入有误，请重新录入！');
                }
            });
    }


    //非co2排放量-NO2-1.2平均低位热值
    queryRzNO2(years) {

        post('/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/N2OEmissioFromUtilityBoilers/averageLowCalorificValue/list', {
            year: years,

        })
            .then((res) => {

                if (res.code == 0) {


                    var Alldata = res.data;

                    const _Data = []

                    _Data.push(Alldata.coalFiredFluidizedBedBoiler);//燃煤流化床锅炉
                    _Data.push(Alldata.ctherCoalFiredBoilers);//其他燃煤锅炉
                    _Data.push(Alldata.oilFiredBoiler); //燃油锅炉
                    _Data.push(Alldata.gasBoiler);//燃气锅炉


                    const fossilTitle = [


                        '燃煤流化床锅炉',
                        '其他燃煤锅炉',
                        '燃油锅炉',
                        '燃气锅炉',

                    ]

                    const _a = [];


                    for (var i = 0; i < 4; i++) {


                        _a.push({
                            key: i,
                            name: fossilTitle[i],
                            anthracite: _Data[i].anthracite,
                            asphalt: _Data[i].asphalt,
                            bituminouscoal: _Data[i].bituminouscoal,
                            blastfurnacegas: _Data[i].blastfurnacegas,
                            briquette: _Data[i].briquette,
                            catelogId: _Data[i].catelogId,
                            coalgangue: _Data[i].coalgangue,
                            coke: _Data[i].coke,
                            cokeovengas: _Data[i].cokeovengas,
                            crudeoil: _Data[i].crudeoil,
                            diesel: _Data[i].diesel,
                            fueloil: _Data[i].fueloil,
                            gasoline: _Data[i].gasoline,
                            kerosene: _Data[i].kerosene,
                            lignite: _Data[i].lignite,
                            liquefiedpetroleumgas: _Data[i].liquefiedpetroleumgas,
                            liquifiednaturalgas: _Data[i].liquifiednaturalgas,
                            lubricatingoil: _Data[i].lubricatingoil,
                            naphtha: _Data[i].naphtha,
                            naturalgas: _Data[i].naturalgas,
                            oilcoke: _Data[i].oilcoke,
                            onvertergas: _Data[i].onvertergas,
                            other: _Data[i].other,
                            othercoalwashing: _Data[i].othercoalwashing,
                            othercokingproducts: _Data[i].othercokingproducts,
                            othergas: _Data[i].othergas,
                            otherpetroleumproducts: _Data[i].otherpetroleumproducts,
                            paraffin: _Data[i].paraffin,
                            refinerydrygas: _Data[i].refinerydrygas,
                            solventoil: _Data[i].solventoil,
                            tffId: _Data[i].tffId,
                            washthecleancoal: _Data[i].washthecleancoal,

                        });


                    }


                    console.log(_a);

                    const _b = [];


                    for (var i = 0; i < _a.length; i++) {
                        _b.push({
                                key: _a[i].key,
                                name: {

                                    value: _a[i].name,
                                },
                                anthracite: {
                                    editable: false,
                                    value: _a[i].anthracite,
                                },
                                asphalt: {
                                    editable: false,
                                    value: _a[i].asphalt,
                                },
                                bituminouscoal: {
                                    editable: false,
                                    value: _a[i].bituminouscoal,
                                },
                                blastfurnacegas: {
                                    editable: false,
                                    value: _a[i].blastfurnacegas,
                                },
                                briquette: {
                                    editable: false,
                                    value: _a[i].briquette,
                                },
                                catelogId: {
                                    editable: false,
                                    value: _a[i].catelogId,
                                },
                                coalgangue: {
                                    editable: false,
                                    value: _a[i].coalgangue,
                                },
                                coke: {
                                    editable: false,
                                    value: _a[i].coke,
                                },
                                cokeovengas: {
                                    editable: false,
                                    value: _a[i].cokeovengas,
                                },
                                crudeoil: {
                                    editable: false,
                                    value: _a[i].crudeoil,
                                },
                                diesel: {
                                    editable: false,
                                    value: _a[i].diesel,
                                },
                                fueloil: {
                                    editable: false,
                                    value: _a[i].fueloil,
                                },
                                gasoline: {
                                    editable: false,
                                    value: _a[i].gasoline,
                                },
                                kerosene: {
                                    editable: false,
                                    value: _a[i].kerosene,
                                },
                                lignite: {
                                    editable: false,
                                    value: _a[i].lignite,
                                },
                                liquefiedpetroleumgas: {
                                    editable: false,
                                    value: _a[i].liquefiedpetroleumgas,
                                },
                                liquifiednaturalgas: {
                                    editable: false,
                                    value: _a[i].liquifiednaturalgas,
                                },
                                lubricatingoil: {
                                    editable: false,
                                    value: _a[i].lubricatingoil,
                                },
                                naphtha: {
                                    editable: false,
                                    value: _a[i].naphtha,
                                },
                                naturalgas: {
                                    editable: false,
                                    value: _a[i].naturalgas,
                                },
                                oilcoke: {
                                    editable: false,
                                    value: _a[i].oilcoke,
                                },
                                onvertergas: {
                                    editable: false,
                                    value: _a[i].onvertergas,
                                },
                                other: {
                                    editable: false,
                                    value: _a[i].other,
                                },
                                othercoalwashing: {
                                    editable: false,
                                    value: _a[i].othercoalwashing,
                                },
                                othercokingproducts: {
                                    editable: false,
                                    value: _a[i].othercokingproducts,
                                },
                                othergas: {
                                    editable: false,
                                    value: _a[i].othergas,
                                },
                                otherpetroleumproducts: {
                                    editable: false,
                                    value: _a[i].otherpetroleumproducts,
                                },
                                paraffin: {
                                    editable: false,
                                    value: _a[i].paraffin,
                                },
                                refinerydrygas: {
                                    editable: false,
                                    value: _a[i].refinerydrygas,
                                },
                                solventoil: {
                                    editable: false,
                                    value: _a[i].solventoil,
                                },
                                tffId: {
                                    editable: false,
                                    value: _a[i].tffId,
                                },
                                washthecleancoal: {
                                    editable: false,
                                    value: _a[i].washthecleancoal,
                                },

                            }
                        )
                    }

                    console.log(_b);


                    this.setState({data4: _b});


                } else {
                    message.error('数据错误！');
                }
            });

    }

    //非co2排放量-NO2-1.2平均低位热值
    updateQueryRzNO2(index, data4) {
        var data = data4

        const Directory = [
            'coalFiredFluidizedBedBoiler',
            'ctherCoalFiredBoilers',
            'oilFiredBoiler',
            'gasBoiler',


        ]

        var DirectoryIndex = Directory[index];

        var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/N2OEmissioFromUtilityBoilers/averageLowCalorificValue/update'
        var bodyName = 'averageLowCalorificValue'


        var obj = {
            "year": this.state.years
        };

        obj[bodyName] = {}

        obj[bodyName][DirectoryIndex] = {
            "naturalgas": data[index].naturalgas.value,
            "diesel": data[index].diesel.value,
            "other": data[index].other.value,
            "othercoalwashing": data[index].othercoalwashing.value,
            "briquette": data[index].briquette.value,
            "paraffin": data[index].paraffin.value,
            "catelogId": data[index].catelogId.value,
            "gasoline": data[index].gasoline.value,
            "solventoil": data[index].solventoil.value,
            "washthecleancoal": data[index].washthecleancoal.value,
            "othercokingproducts": data[index].othercokingproducts.value,
            "refinerydrygas": data[index].refinerydrygas.value,
            "lignite": data[index].lignite.value,
            "liquefiedpetroleumgas": data[index].liquefiedpetroleumgas.value,
            "otherpetroleumproducts": data[index].otherpetroleumproducts.value,
            "lubricatingoil": data[index].lubricatingoil.value,
            "bituminouscoal": data[index].bituminouscoal.value,
            "coke": data[index].coke.value,
            "coalgangue": data[index].coalgangue.value,
            "liquifiednaturalgas": data[index].liquifiednaturalgas.value,
            "onvertergas": data[index].onvertergas.value,
            "asphalt": data[index].asphalt.value,
            "naphtha": data[index].naphtha.value,
            "kerosene": data[index].kerosene.value,
            "cokeovengas": data[index].cokeovengas.value,
            "blastfurnacegas": data[index].blastfurnacegas.value,
            "othergas": data[index].othergas.value,
            "fueloil": data[index].fueloil.value,
            "crudeoil": data[index].crudeoil.value,
            "oilcoke": data[index].oilcoke.value,
            "tffId": data[index].tffId.value,
            "anthracite": data[index].anthracite.value
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


    //非co2排放量-NO2-1.1活动水平数据
    queryHdNO2(years) {

        post('/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/N2OEmissioFromUtilityBoilers/activityLevelData/list', {
            year: years,

        })
            .then((res) => {

                if (res.code == 0) {


                    var Alldata = res.data;

                    const _Data = []

                    _Data.push(Alldata.coalFiredFluidizedBedBoiler);//燃煤流化床锅炉
                    _Data.push(Alldata.ctherCoalFiredBoilers);//其他燃煤锅炉
                    _Data.push(Alldata.oilFiredBoiler); //燃油锅炉
                    _Data.push(Alldata.gasBoiler);//燃气锅炉


                    const fossilTitle = [


                        '燃煤流化床锅炉',
                        '其他燃煤锅炉',
                        '燃油锅炉',
                        '燃气锅炉',

                    ]

                    const _a = [];


                    for (var i = 0; i < 4; i++) {


                        _a.push({
                            key: i,
                            name: fossilTitle[i],
                            anthracite: _Data[i].anthracite,
                            asphalt: _Data[i].asphalt,
                            bituminouscoal: _Data[i].bituminouscoal,
                            blastfurnacegas: _Data[i].blastfurnacegas,
                            briquette: _Data[i].briquette,
                            catelogId: _Data[i].catelogId,
                            coalgangue: _Data[i].coalgangue,
                            coke: _Data[i].coke,
                            cokeovengas: _Data[i].cokeovengas,
                            crudeoil: _Data[i].crudeoil,
                            diesel: _Data[i].diesel,
                            fueloil: _Data[i].fueloil,
                            gasoline: _Data[i].gasoline,
                            kerosene: _Data[i].kerosene,
                            lignite: _Data[i].lignite,
                            liquefiedpetroleumgas: _Data[i].liquefiedpetroleumgas,
                            liquifiednaturalgas: _Data[i].liquifiednaturalgas,
                            lubricatingoil: _Data[i].lubricatingoil,
                            naphtha: _Data[i].naphtha,
                            naturalgas: _Data[i].naturalgas,
                            oilcoke: _Data[i].oilcoke,
                            onvertergas: _Data[i].onvertergas,
                            other: _Data[i].other,
                            othercoalwashing: _Data[i].othercoalwashing,
                            othercokingproducts: _Data[i].othercokingproducts,
                            othergas: _Data[i].othergas,
                            otherpetroleumproducts: _Data[i].otherpetroleumproducts,
                            paraffin: _Data[i].paraffin,
                            refinerydrygas: _Data[i].refinerydrygas,
                            solventoil: _Data[i].solventoil,
                            tffId: _Data[i].tffId,
                            washthecleancoal: _Data[i].washthecleancoal,

                        });


                    }


                    console.log(_a);

                    const _b = [];


                    for (var i = 0; i < _a.length; i++) {
                        _b.push({
                                key: _a[i].key,
                                name: {

                                    value: _a[i].name,
                                },
                                anthracite: {
                                    editable: false,
                                    value: _a[i].anthracite,
                                },
                                asphalt: {
                                    editable: false,
                                    value: _a[i].asphalt,
                                },
                                bituminouscoal: {
                                    editable: false,
                                    value: _a[i].bituminouscoal,
                                },
                                blastfurnacegas: {
                                    editable: false,
                                    value: _a[i].blastfurnacegas,
                                },
                                briquette: {
                                    editable: false,
                                    value: _a[i].briquette,
                                },
                                catelogId: {
                                    editable: false,
                                    value: _a[i].catelogId,
                                },
                                coalgangue: {
                                    editable: false,
                                    value: _a[i].coalgangue,
                                },
                                coke: {
                                    editable: false,
                                    value: _a[i].coke,
                                },
                                cokeovengas: {
                                    editable: false,
                                    value: _a[i].cokeovengas,
                                },
                                crudeoil: {
                                    editable: false,
                                    value: _a[i].crudeoil,
                                },
                                diesel: {
                                    editable: false,
                                    value: _a[i].diesel,
                                },
                                fueloil: {
                                    editable: false,
                                    value: _a[i].fueloil,
                                },
                                gasoline: {
                                    editable: false,
                                    value: _a[i].gasoline,
                                },
                                kerosene: {
                                    editable: false,
                                    value: _a[i].kerosene,
                                },
                                lignite: {
                                    editable: false,
                                    value: _a[i].lignite,
                                },
                                liquefiedpetroleumgas: {
                                    editable: false,
                                    value: _a[i].liquefiedpetroleumgas,
                                },
                                liquifiednaturalgas: {
                                    editable: false,
                                    value: _a[i].liquifiednaturalgas,
                                },
                                lubricatingoil: {
                                    editable: false,
                                    value: _a[i].lubricatingoil,
                                },
                                naphtha: {
                                    editable: false,
                                    value: _a[i].naphtha,
                                },
                                naturalgas: {
                                    editable: false,
                                    value: _a[i].naturalgas,
                                },
                                oilcoke: {
                                    editable: false,
                                    value: _a[i].oilcoke,
                                },
                                onvertergas: {
                                    editable: false,
                                    value: _a[i].onvertergas,
                                },
                                other: {
                                    editable: false,
                                    value: _a[i].other,
                                },
                                othercoalwashing: {
                                    editable: false,
                                    value: _a[i].othercoalwashing,
                                },
                                othercokingproducts: {
                                    editable: false,
                                    value: _a[i].othercokingproducts,
                                },
                                othergas: {
                                    editable: false,
                                    value: _a[i].othergas,
                                },
                                otherpetroleumproducts: {
                                    editable: false,
                                    value: _a[i].otherpetroleumproducts,
                                },
                                paraffin: {
                                    editable: false,
                                    value: _a[i].paraffin,
                                },
                                refinerydrygas: {
                                    editable: false,
                                    value: _a[i].refinerydrygas,
                                },
                                solventoil: {
                                    editable: false,
                                    value: _a[i].solventoil,
                                },
                                tffId: {
                                    editable: false,
                                    value: _a[i].tffId,
                                },
                                washthecleancoal: {
                                    editable: false,
                                    value: _a[i].washthecleancoal,
                                },

                            }
                        )
                    }

                    console.log(_b);


                    this.setState({data3: _b});


                } else {
                    message.error('数据错误！');
                }
            });

    }

    //非co2排放量-NO2-1.1活动水平数据
    updateQueryHdNO2(index, data3) {
        var data = data3

        const Directory = [
            'coalFiredFluidizedBedBoiler',
            'ctherCoalFiredBoilers',
            'oilFiredBoiler',
            'gasBoiler',


        ]

        var DirectoryIndex = Directory[index];

        var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/nonco2/N2OEmissioFromUtilityBoilers/activityLevelData/update'
        var bodyName = 'activityLevelData'


        var obj = {
            "year": this.state.years
        };

        obj[bodyName] = {}

        obj[bodyName][DirectoryIndex] = {
            "naturalgas": data[index].naturalgas.value,
            "diesel": data[index].diesel.value,
            "other": data[index].other.value,
            "othercoalwashing": data[index].othercoalwashing.value,
            "briquette": data[index].briquette.value,
            "paraffin": data[index].paraffin.value,
            "catelogId": data[index].catelogId.value,
            "gasoline": data[index].gasoline.value,
            "solventoil": data[index].solventoil.value,
            "washthecleancoal": data[index].washthecleancoal.value,
            "othercokingproducts": data[index].othercokingproducts.value,
            "refinerydrygas": data[index].refinerydrygas.value,
            "lignite": data[index].lignite.value,
            "liquefiedpetroleumgas": data[index].liquefiedpetroleumgas.value,
            "otherpetroleumproducts": data[index].otherpetroleumproducts.value,
            "lubricatingoil": data[index].lubricatingoil.value,
            "bituminouscoal": data[index].bituminouscoal.value,
            "coke": data[index].coke.value,
            "coalgangue": data[index].coalgangue.value,
            "liquifiednaturalgas": data[index].liquifiednaturalgas.value,
            "onvertergas": data[index].onvertergas.value,
            "asphalt": data[index].asphalt.value,
            "naphtha": data[index].naphtha.value,
            "kerosene": data[index].kerosene.value,
            "cokeovengas": data[index].cokeovengas.value,
            "blastfurnacegas": data[index].blastfurnacegas.value,
            "othergas": data[index].othergas.value,
            "fueloil": data[index].fueloil.value,
            "crudeoil": data[index].crudeoil.value,
            "oilcoke": data[index].oilcoke.value,
            "tffId": data[index].tffId.value,
            "anthracite": data[index].anthracite.value
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


    //co2排放量-参考方法
    queryMethod(years) {

        post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByRef/list', {
            year: years,

        })
            .then((res) => {

                if (res.code == 0) {


                    var Alldata = res.data;


                    const _Data = []

                    _Data.push(Alldata.production);//生产量
                    _Data.push(Alldata.importAmount);//进口量
                    _Data.push(Alldata.exportAmount); //出口量
                    _Data.push(Alldata.transferAmount);//调入量
                    _Data.push(Alldata.callOutTheAmount);//调出量
                    _Data.push(Alldata.internationalFuelTank);//国际燃料舱
                    _Data.push(Alldata.inventoryChanges);//库存变化
                    _Data.push(Alldata.apparentConsumption);//表观消费量


                    const _Data1 = []

                    _Data1.push(Alldata.carbonContent)

                    const fossilTitle = [


                        '生产量',
                        '进口量',
                        '出口量',
                        '调入量',
                        '调出量',
                        '国际燃料仓',
                        '库存变化',
                        '表现消费量',

                    ]

                    const _a = [];


                    for (var i = 0; i < 8; i++) {


                        _a.push({
                            key: i,
                            name: fossilTitle[i],
                            anthracite: _Data[i].anthracite,
                            asphalt: _Data[i].asphalt,
                            bituminouscoal: _Data[i].bituminouscoal,
                            blastfurnacegas: _Data[i].blastfurnacegas,
                            briquette: _Data[i].briquette,
                            catelogId: _Data[i].catelogId,
                            coalgangue: _Data[i].coalgangue,
                            coke: _Data[i].coke,
                            cokeovengas: _Data[i].cokeovengas,
                            crudeoil: _Data[i].crudeoil,
                            diesel: _Data[i].diesel,
                            fueloil: _Data[i].fueloil,
                            gasoline: _Data[i].gasoline,
                            kerosene: _Data[i].kerosene,
                            lignite: _Data[i].lignite,
                            liquefiedpetroleumgas: _Data[i].liquefiedpetroleumgas,
                            liquifiednaturalgas: _Data[i].liquifiednaturalgas,
                            lubricatingoil: _Data[i].lubricatingoil,
                            naphtha: _Data[i].naphtha,
                            naturalgas: _Data[i].naturalgas,
                            oilcoke: _Data[i].oilcoke,
                            onvertergas: _Data[i].onvertergas,
                            other: _Data[i].other,
                            othercoalwashing: _Data[i].othercoalwashing,
                            othercokingproducts: _Data[i].othercokingproducts,
                            othergas: _Data[i].othergas,
                            otherpetroleumproducts: _Data[i].otherpetroleumproducts,
                            paraffin: _Data[i].paraffin,
                            refinerydrygas: _Data[i].refinerydrygas,
                            solventoil: _Data[i].solventoil,
                            tffId: _Data[i].tffId,
                            washthecleancoal: _Data[i].washthecleancoal,

                        });


                    }


                    console.log(_a);

                    const _b = [];


                    for (var i = 0; i < _a.length; i++) {
                        _b.push({
                                key: _a[i].key,
                                name: {

                                    value: _a[i].name,
                                },
                                anthracite: {
                                    editable: false,
                                    value: _a[i].anthracite,
                                },
                                asphalt: {
                                    editable: false,
                                    value: _a[i].asphalt,
                                },
                                bituminouscoal: {
                                    editable: false,
                                    value: _a[i].bituminouscoal,
                                },
                                blastfurnacegas: {
                                    editable: false,
                                    value: _a[i].blastfurnacegas,
                                },
                                briquette: {
                                    editable: false,
                                    value: _a[i].briquette,
                                },
                                catelogId: {
                                    editable: false,
                                    value: _a[i].catelogId,
                                },
                                coalgangue: {
                                    editable: false,
                                    value: _a[i].coalgangue,
                                },
                                coke: {
                                    editable: false,
                                    value: _a[i].coke,
                                },
                                cokeovengas: {
                                    editable: false,
                                    value: _a[i].cokeovengas,
                                },
                                crudeoil: {
                                    editable: false,
                                    value: _a[i].crudeoil,
                                },
                                diesel: {
                                    editable: false,
                                    value: _a[i].diesel,
                                },
                                fueloil: {
                                    editable: false,
                                    value: _a[i].fueloil,
                                },
                                gasoline: {
                                    editable: false,
                                    value: _a[i].gasoline,
                                },
                                kerosene: {
                                    editable: false,
                                    value: _a[i].kerosene,
                                },
                                lignite: {
                                    editable: false,
                                    value: _a[i].lignite,
                                },
                                liquefiedpetroleumgas: {
                                    editable: false,
                                    value: _a[i].liquefiedpetroleumgas,
                                },
                                liquifiednaturalgas: {
                                    editable: false,
                                    value: _a[i].liquifiednaturalgas,
                                },
                                lubricatingoil: {
                                    editable: false,
                                    value: _a[i].lubricatingoil,
                                },
                                naphtha: {
                                    editable: false,
                                    value: _a[i].naphtha,
                                },
                                naturalgas: {
                                    editable: false,
                                    value: _a[i].naturalgas,
                                },
                                oilcoke: {
                                    editable: false,
                                    value: _a[i].oilcoke,
                                },
                                onvertergas: {
                                    editable: false,
                                    value: _a[i].onvertergas,
                                },
                                other: {
                                    editable: false,
                                    value: _a[i].other,
                                },
                                othercoalwashing: {
                                    editable: false,
                                    value: _a[i].othercoalwashing,
                                },
                                othercokingproducts: {
                                    editable: false,
                                    value: _a[i].othercokingproducts,
                                },
                                othergas: {
                                    editable: false,
                                    value: _a[i].othergas,
                                },
                                otherpetroleumproducts: {
                                    editable: false,
                                    value: _a[i].otherpetroleumproducts,
                                },
                                paraffin: {
                                    editable: false,
                                    value: _a[i].paraffin,
                                },
                                refinerydrygas: {
                                    editable: false,
                                    value: _a[i].refinerydrygas,
                                },
                                solventoil: {
                                    editable: false,
                                    value: _a[i].solventoil,
                                },
                                tffId: {
                                    editable: false,
                                    value: _a[i].tffId,
                                },
                                washthecleancoal: {
                                    editable: false,
                                    value: _a[i].washthecleancoal,
                                },

                            }
                        )
                    }


                    const _b1 = [];

                    var total = (_Data1[0].anthracite + _Data1[0].asphalt + _Data1[0].bituminouscoal
                    + _Data1[0].blastfurnacegas
                    + _Data1[0].briquette
                    + _Data1[0].coalgangue
                    + _Data1[0].coke
                    + _Data1[0].cokeovengas
                    + _Data1[0].crudeoil
                    + _Data1[0].diesel
                    + _Data1[0].fueloil
                    + _Data1[0].gasoline
                    + _Data1[0].kerosene
                    + _Data1[0].lignite
                    + _Data1[0].liquefiedpetroleumgas
                    + _Data1[0].liquifiednaturalgas
                    + _Data1[0].lubricatingoil
                    + _Data1[0].naphtha
                    + _Data1[0].naturalgas
                    + _Data1[0].oilcoke
                    + _Data1[0].onvertergas
                    + _Data1[0].other
                    + _Data1[0].othercoalwashing
                    + _Data1[0].othercokingproducts
                    + _Data1[0].paraffin
                    + _Data1[0].refinerydrygas
                    + _Data1[0].solventoil
                    + _Data1[0].washthecleancoal).toFixed(2)


                    _b1.push({
                            key: 1,
                            name: {

                                value: '固碳量',
                            },
                            anthracite: {
                                editable: false,
                                value: _Data1[0].anthracite,
                            },
                            asphalt: {
                                editable: false,
                                value: _Data1[0].asphalt,
                            },
                            bituminouscoal: {
                                editable: false,
                                value: _Data1[0].bituminouscoal,
                            },
                            blastfurnacegas: {
                                editable: false,
                                value: _Data1[0].blastfurnacegas,
                            },
                            briquette: {
                                editable: false,
                                value: _Data1[0].briquette,
                            },
                            catelogId: {
                                editable: false,
                                value: _Data1[0].catelogId,
                            },
                            coalgangue: {
                                editable: false,
                                value: _Data1[0].coalgangue,
                            },
                            coke: {
                                editable: false,
                                value: _Data1[0].coke,
                            },
                            cokeovengas: {
                                editable: false,
                                value: _Data1[0].cokeovengas,
                            },
                            crudeoil: {
                                editable: false,
                                value: _Data1[0].crudeoil,
                            },
                            diesel: {
                                editable: false,
                                value: _Data1[0].diesel,
                            },
                            fueloil: {
                                editable: false,
                                value: _Data1[0].fueloil,
                            },
                            gasoline: {
                                editable: false,
                                value: _Data1[0].gasoline,
                            },
                            kerosene: {
                                editable: false,
                                value: _Data1[0].kerosene,
                            },
                            lignite: {
                                editable: false,
                                value: _Data1[0].lignite,
                            },
                            liquefiedpetroleumgas: {
                                editable: false,
                                value: _Data1[0].liquefiedpetroleumgas,
                            },
                            liquifiednaturalgas: {
                                editable: false,
                                value: _Data1[0].liquifiednaturalgas,
                            },
                            lubricatingoil: {
                                editable: false,
                                value: _Data1[0].lubricatingoil,
                            },
                            naphtha: {
                                editable: false,
                                value: _Data1[0].naphtha,
                            },
                            naturalgas: {
                                editable: false,
                                value: _Data1[0].naturalgas,
                            },
                            oilcoke: {
                                editable: false,
                                value: _Data1[0].oilcoke,
                            },
                            onvertergas: {
                                editable: false,
                                value: _Data1[0].onvertergas,
                            },
                            other: {
                                editable: false,
                                value: _Data1[0].other,
                            },
                            othercoalwashing: {
                                editable: false,
                                value: _Data1[0].othercoalwashing,
                            },
                            othercokingproducts: {
                                editable: false,
                                value: _Data1[0].othercokingproducts,
                            },
                            othergas: {
                                editable: false,
                                value: _Data1[0].othergas,
                            },
                            otherpetroleumproducts: {
                                editable: false,
                                value: _Data1[0].otherpetroleumproducts,
                            },
                            paraffin: {
                                editable: false,
                                value: _Data1[0].paraffin,
                            },
                            refinerydrygas: {
                                editable: false,
                                value: _Data1[0].refinerydrygas,
                            },
                            solventoil: {
                                editable: false,
                                value: _Data1[0].solventoil,
                            },
                            tffId: {
                                editable: false,
                                value: _Data1[0].tffId,
                            },
                            washthecleancoal: {
                                editable: false,
                                value: _Data1[0].washthecleancoal,
                            },
                            total: {
                                editable: false,
                                value: total,
                            },

                        }
                    )


                    console.log(_b);


                    this.setState({data2: _b});
                    this.setState({data11: _b1});
                    this.setState({loading: false});


                } else {
                    message.error('数据错误！');
                }
            });

    }

    //co2排放量-参考方法update
    updateMethod(index, data2) {
        var data = data2

        const Directory = [
            'production',
            'importAmount',
            'exportAmount',
            'transferAmount',
            'callOutTheAmount',
            'internationalFuelTank',
            'inventoryChanges',
            'apparentConsumption',


        ]

        var DirectoryIndex = Directory[index];

        var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByRef/update'
        var bodyName = 'statisticalByRef'


        var obj = {
            "year": this.state.years
        };

        obj[bodyName] = {}

        obj[bodyName][DirectoryIndex] = {
            "naturalgas": data[index].naturalgas.value,
            "diesel": data[index].diesel.value,
            "other": data[index].other.value,
            "othercoalwashing": data[index].othercoalwashing.value,
            "briquette": data[index].briquette.value,
            "paraffin": data[index].paraffin.value,
            "catelogId": data[index].catelogId.value,
            "gasoline": data[index].gasoline.value,
            "solventoil": data[index].solventoil.value,
            "washthecleancoal": data[index].washthecleancoal.value,
            "othercokingproducts": data[index].othercokingproducts.value,
            "refinerydrygas": data[index].refinerydrygas.value,
            "lignite": data[index].lignite.value,
            "liquefiedpetroleumgas": data[index].liquefiedpetroleumgas.value,
            "otherpetroleumproducts": data[index].otherpetroleumproducts.value,
            "lubricatingoil": data[index].lubricatingoil.value,
            "bituminouscoal": data[index].bituminouscoal.value,
            "coke": data[index].coke.value,
            "coalgangue": data[index].coalgangue.value,
            "liquifiednaturalgas": data[index].liquifiednaturalgas.value,
            "onvertergas": data[index].onvertergas.value,
            "asphalt": data[index].asphalt.value,
            "naphtha": data[index].naphtha.value,
            "kerosene": data[index].kerosene.value,
            "cokeovengas": data[index].cokeovengas.value,
            "blastfurnacegas": data[index].blastfurnacegas.value,
            "othergas": data[index].othergas.value,
            "fueloil": data[index].fueloil.value,
            "crudeoil": data[index].crudeoil.value,
            "oilcoke": data[index].oilcoke.value,
            "tffId": data[index].tffId.value,
            "anthracite": data[index].anthracite.value
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


    //co2排放量-非能源利用
    queryCo2(years) {

        post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/nonEnergyUseEmissions/list', {
            year: years,

        })
            .then((res) => {

                if (res.code == 0) {


                    var Alldata = res.data;

                    const _Data = []

                    _Data.push(Alldata.nonEnergyUse);//非能源利用量
                    _Data.push('');
                    _Data.push(Alldata.averageLowCalorificValue); //平均低位热值
                    _Data.push('');
                    _Data.push(Alldata.unitCalorificValueCarbonContent);//单位热值含碳量
                    _Data.push('');
                    _Data.push(Alldata.carbonContent);//固碳量
                    _Data.push('');
                    _Data.push(Alldata.carbonOxidationRate);//碳氧化率
                    _Data.push('');
                    _Data.push(Alldata.emissions);//排放量（万吨）


                    const fossilTitle = [


                        '非能源利用量',
                        '',
                        '平均低位热值',
                        '',
                        '单位热值含碳量',
                        '',
                        '固碳率',
                        '',
                        '碳氧化率',
                        '',
                        '非能源利用排放量',
                        '',
                    ]

                    const _a = [];


                    for (var i = 0; i < 11; i++) {

                        if (i == 1) {
                            _a.push({
                                key: i,
                                name: '数据项',
                                anthracite: '无烟煤(TJ/万t)',
                                bituminouscoal: '烟煤(TJ/万t)',
                                lignite: '褐煤(TJ/万t)',
                                washthecleancoal: '洗精煤(TJ/万t)',
                                othercoalwashing: '其他洗煤(TJ/万t)',
                                briquette: '型煤(TJ/万t)',
                                coalgangue: '煤矸石(TJ/万t)',
                                coke: '焦炭(TJ/万t)',
                                cokeovengas: '焦炉煤气(TJ/亿m3)',
                                blastfurnacegas: '高炉煤气(TJ/亿m3)',
                                onvertergas: '转炉煤气(TJ/亿m3)',
                                othergas: '其他煤气(TJ/亿m3)',
                                othercokingproducts: '其他焦化产品(TJ/万t)',
                                crudeoil: '原油(TJ/万t)',
                                gasoline: '汽油(TJ/万t)',
                                kerosene: '煤油(TJ/万t)',
                                diesel: '柴油(TJ/万t)',
                                fueloil: '燃料油(TJ/万t)',
                                naphtha: '石脑油(TJ/万t)',
                                lubricatingoil: '润滑油(TJ/万t)',
                                paraffin: '石蜡(TJ/万t)',
                                solventoil: '溶剂油(TJ/万t)',
                                asphalt: '石油沥青(TJ/万t)',
                                oilcoke: '石油焦(TJ/万t)',
                                liquefiedpetroleumgas: '液化石油气(TJ/万t)',
                                refinerydrygas: '炼厂干气(TJ/万t)',
                                otherpetroleumproducts: '其他石油制品(TJ/万t)',
                                naturalgas: '天然气(TJ/亿m3)',
                                liquifiednaturalgas: '液化天然气(TJ/万t)',
                                other: '其他(TJ/亿m3)',
                                catelogId: '0',
                                tffId: '0',
                            });
                        } else if (i == 3) {

                            _a.push({
                                key: i,
                                name: '数据项',
                                anthracite: '无烟煤(tC/TJ)',
                                bituminouscoal: '烟煤(tC/TJ)',
                                lignite: '褐煤(tC/TJ)',
                                washthecleancoal: '洗精煤(tC/TJ)',
                                othercoalwashing: '其他洗煤(tC/TJ)',
                                briquette: '型煤(tC/TJ)',
                                coalgangue: '煤矸石(tC/TJ)',
                                coke: '焦炭(tC/TJ)',
                                cokeovengas: '焦炉煤气(tC/TJ)',
                                blastfurnacegas: '高炉煤气(tC/TJ)',
                                onvertergas: '转炉煤气(tC/TJ)',
                                othergas: '其他煤气(tC/TJ)',
                                othercokingproducts: '其他焦化产品(tC/TJ)',
                                crudeoil: '原油(tC/TJ)',
                                gasoline: '汽油(tC/TJ)',
                                kerosene: '煤油(tC/TJ)',
                                diesel: '柴油(tC/TJ)',
                                fueloil: '燃料油(tC/TJ)',
                                naphtha: '石脑油(tC/TJ)',
                                lubricatingoil: '润滑油(tC/TJ)',
                                paraffin: '石蜡(tC/TJ)',
                                solventoil: '溶剂油(tC/TJ)',
                                asphalt: '石油沥青(tC/TJ)',
                                oilcoke: '石油焦(tC/TJ)',
                                liquefiedpetroleumgas: '液化石油气(tC/TJ)',
                                refinerydrygas: '炼厂干气(tC/TJ)',
                                otherpetroleumproducts: '其他石油制品(tC/TJ)',
                                naturalgas: '天然气(tC/TJ)',
                                liquifiednaturalgas: '液化天然气(tC/TJ)',
                                other: '其他(tC/TJ)',
                                catelogId: '0',
                                tffId: '0',
                            });

                        } else if (i == 5 || i == 7) {

                            _a.push({
                                key: i,
                                name: '数据项',
                                anthracite: '无烟煤(%)',
                                bituminouscoal: '烟煤(%)',
                                lignite: '褐煤(%)',
                                washthecleancoal: '洗精煤(%)',
                                othercoalwashing: '其他洗煤(%)',
                                briquette: '型煤(%)',
                                coalgangue: '煤矸石(%)',
                                coke: '焦炭(%)',
                                cokeovengas: '焦炉煤气(%)',
                                blastfurnacegas: '高炉煤气(%)',
                                onvertergas: '转炉煤气(%)',
                                othergas: '其他煤气(%)',
                                othercokingproducts: '其他焦化产品(%)',
                                crudeoil: '原油(%)',
                                gasoline: '汽油(%)',
                                kerosene: '煤油(%)',
                                diesel: '柴油(%)',
                                fueloil: '燃料油(%)',
                                naphtha: '石脑油(%)',
                                lubricatingoil: '润滑油(%)',
                                paraffin: '石蜡(%)',
                                solventoil: '溶剂油(%)',
                                asphalt: '石油沥青(%)',
                                oilcoke: '石油焦(%)',
                                liquefiedpetroleumgas: '液化石油气(%)',
                                refinerydrygas: '炼厂干气(%)',
                                otherpetroleumproducts: '其他石油制品(%)',
                                naturalgas: '天然气(%)',
                                liquifiednaturalgas: '液化天然气(%)',
                                other: '其他(%)',
                                catelogId: '0',
                                tffId: '0',
                            });

                        } else if (i == 9) {

                            _a.push({
                                key: i,
                                name: '数据项',
                                anthracite: '无烟煤(万吨)',
                                bituminouscoal: '烟煤(万吨)',
                                lignite: '褐煤(万吨)',
                                washthecleancoal: '洗精煤(万吨)',
                                othercoalwashing: '其他洗煤(万吨)',
                                briquette: '型煤(万吨)',
                                coalgangue: '煤矸石(万吨)',
                                coke: '焦炭(万吨)',
                                cokeovengas: '焦炉煤气(万吨)',
                                blastfurnacegas: '高炉煤气(万吨)',
                                onvertergas: '转炉煤气(万吨)',
                                othergas: '其他煤气(万吨)',
                                othercokingproducts: '其他焦化产品(万吨)',
                                crudeoil: '原油(万吨)',
                                gasoline: '汽油(万吨)',
                                kerosene: '煤油(万吨)',
                                diesel: '柴油(万吨)',
                                fueloil: '燃料油(万吨)',
                                naphtha: '石脑油(万吨)',
                                lubricatingoil: '润滑油(万吨)',
                                paraffin: '石蜡(万吨)',
                                solventoil: '溶剂油(万吨)',
                                asphalt: '石油沥青(万吨)',
                                oilcoke: '石油焦(万吨)',
                                liquefiedpetroleumgas: '液化石油气(万吨)',
                                refinerydrygas: '炼厂干气(万吨)',
                                otherpetroleumproducts: '其他石油制品(万吨)',
                                naturalgas: '天然气(万吨)',
                                liquifiednaturalgas: '液化天然气(万吨)',
                                other: '其他(万吨)',
                                catelogId: '0',
                                tffId: '0',
                            });

                        } else {

                            _a.push({
                                key: i,
                                name: fossilTitle[i],
                                anthracite: _Data[i].anthracite,
                                asphalt: _Data[i].asphalt,
                                bituminouscoal: _Data[i].bituminouscoal,
                                blastfurnacegas: _Data[i].blastfurnacegas,
                                briquette: _Data[i].briquette,
                                catelogId: _Data[i].catelogId,
                                coalgangue: _Data[i].coalgangue,
                                coke: _Data[i].coke,
                                cokeovengas: _Data[i].cokeovengas,
                                crudeoil: _Data[i].crudeoil,
                                diesel: _Data[i].diesel,
                                fueloil: _Data[i].fueloil,
                                gasoline: _Data[i].gasoline,
                                kerosene: _Data[i].kerosene,
                                lignite: _Data[i].lignite,
                                liquefiedpetroleumgas: _Data[i].liquefiedpetroleumgas,
                                liquifiednaturalgas: _Data[i].liquifiednaturalgas,
                                lubricatingoil: _Data[i].lubricatingoil,
                                naphtha: _Data[i].naphtha,
                                naturalgas: _Data[i].naturalgas,
                                oilcoke: _Data[i].oilcoke,
                                onvertergas: _Data[i].onvertergas,
                                other: _Data[i].other,
                                othercoalwashing: _Data[i].othercoalwashing,
                                othercokingproducts: _Data[i].othercokingproducts,
                                othergas: _Data[i].othergas,
                                otherpetroleumproducts: _Data[i].otherpetroleumproducts,
                                paraffin: _Data[i].paraffin,
                                refinerydrygas: _Data[i].refinerydrygas,
                                solventoil: _Data[i].solventoil,
                                tffId: _Data[i].tffId,
                                washthecleancoal: _Data[i].washthecleancoal,

                            });

                        }


                    }


                    console.log(_a);

                    const _b = [];


                    for (var i = 0; i < _a.length; i++) {
                        _b.push({
                                key: _a[i].key,
                                name: {

                                    value: _a[i].name,
                                },
                                anthracite: {
                                    editable: false,
                                    value: _a[i].anthracite,
                                },
                                asphalt: {
                                    editable: false,
                                    value: _a[i].asphalt,
                                },
                                bituminouscoal: {
                                    editable: false,
                                    value: _a[i].bituminouscoal,
                                },
                                blastfurnacegas: {
                                    editable: false,
                                    value: _a[i].blastfurnacegas,
                                },
                                briquette: {
                                    editable: false,
                                    value: _a[i].briquette,
                                },
                                catelogId: {
                                    editable: false,
                                    value: _a[i].catelogId,
                                },
                                coalgangue: {
                                    editable: false,
                                    value: _a[i].coalgangue,
                                },
                                coke: {
                                    editable: false,
                                    value: _a[i].coke,
                                },
                                cokeovengas: {
                                    editable: false,
                                    value: _a[i].cokeovengas,
                                },
                                crudeoil: {
                                    editable: false,
                                    value: _a[i].crudeoil,
                                },
                                diesel: {
                                    editable: false,
                                    value: _a[i].diesel,
                                },
                                fueloil: {
                                    editable: false,
                                    value: _a[i].fueloil,
                                },
                                gasoline: {
                                    editable: false,
                                    value: _a[i].gasoline,
                                },
                                kerosene: {
                                    editable: false,
                                    value: _a[i].kerosene,
                                },
                                lignite: {
                                    editable: false,
                                    value: _a[i].lignite,
                                },
                                liquefiedpetroleumgas: {
                                    editable: false,
                                    value: _a[i].liquefiedpetroleumgas,
                                },
                                liquifiednaturalgas: {
                                    editable: false,
                                    value: _a[i].liquifiednaturalgas,
                                },
                                lubricatingoil: {
                                    editable: false,
                                    value: _a[i].lubricatingoil,
                                },
                                naphtha: {
                                    editable: false,
                                    value: _a[i].naphtha,
                                },
                                naturalgas: {
                                    editable: false,
                                    value: _a[i].naturalgas,
                                },
                                oilcoke: {
                                    editable: false,
                                    value: _a[i].oilcoke,
                                },
                                onvertergas: {
                                    editable: false,
                                    value: _a[i].onvertergas,
                                },
                                other: {
                                    editable: false,
                                    value: _a[i].other,
                                },
                                othercoalwashing: {
                                    editable: false,
                                    value: _a[i].othercoalwashing,
                                },
                                othercokingproducts: {
                                    editable: false,
                                    value: _a[i].othercokingproducts,
                                },
                                othergas: {
                                    editable: false,
                                    value: _a[i].othergas,
                                },
                                otherpetroleumproducts: {
                                    editable: false,
                                    value: _a[i].otherpetroleumproducts,
                                },
                                paraffin: {
                                    editable: false,
                                    value: _a[i].paraffin,
                                },
                                refinerydrygas: {
                                    editable: false,
                                    value: _a[i].refinerydrygas,
                                },
                                solventoil: {
                                    editable: false,
                                    value: _a[i].solventoil,
                                },
                                tffId: {
                                    editable: false,
                                    value: _a[i].tffId,
                                },
                                washthecleancoal: {
                                    editable: false,
                                    value: _a[i].washthecleancoal,
                                },

                            }
                        )
                    }

                    console.log(_b);


                    this.setState({data1: _b});
                    this.setState({loading: false});


                } else {
                    message.error('数据错误！');
                }
            });

    }

    //co2排放量-非能源利用update
    updateCo2(index, data1, a) {

        var data = data1

        const Directory = [
            'nonEnergyUse',
            '',
            'averageLowCalorificValue',
            '',
            'unitCalorificValueCarbonContent',
            '',
            'carbonContent',
            '',
            'carbonOxidationRate',
            '',
            'emissions',


        ]

        var DirectoryIndex = Directory[index];

        var url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/nonEnergyUseEmissions/update'
        var bodyName = 'nonEnergyUseEmissions'


        var obj = {
            "year": this.state.years
        };

        obj[bodyName] = {}

        obj[bodyName][DirectoryIndex] = {
            "naturalgas": data[index].naturalgas.value,
            "diesel": data[index].diesel.value,
            "other": data[index].other.value,
            "othercoalwashing": data[index].othercoalwashing.value,
            "briquette": data[index].briquette.value,
            "paraffin": data[index].paraffin.value,
            "catelogId": data[index].catelogId.value,
            "gasoline": data[index].gasoline.value,
            "solventoil": data[index].solventoil.value,
            "washthecleancoal": data[index].washthecleancoal.value,
            "othercokingproducts": data[index].othercokingproducts.value,
            "refinerydrygas": data[index].refinerydrygas.value,
            "lignite": data[index].lignite.value,
            "liquefiedpetroleumgas": data[index].liquefiedpetroleumgas.value,
            "otherpetroleumproducts": data[index].otherpetroleumproducts.value,
            "lubricatingoil": data[index].lubricatingoil.value,
            "bituminouscoal": data[index].bituminouscoal.value,
            "coke": data[index].coke.value,
            "coalgangue": data[index].coalgangue.value,
            "liquifiednaturalgas": data[index].liquifiednaturalgas.value,
            "onvertergas": data[index].onvertergas.value,
            "asphalt": data[index].asphalt.value,
            "naphtha": data[index].naphtha.value,
            "kerosene": data[index].kerosene.value,
            "cokeovengas": data[index].cokeovengas.value,
            "blastfurnacegas": data[index].blastfurnacegas.value,
            "othergas": data[index].othergas.value,
            "fueloil": data[index].fueloil.value,
            "crudeoil": data[index].crudeoil.value,
            "oilcoke": data[index].oilcoke.value,
            "tffId": data[index].tffId.value,
            "anthracite": data[index].anthracite.value
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


    //1.1
    query(para, years) {

        post('/activityLevelDataEntry/energyActivity//totalFossilFuels/co2/statisticalByDept/energyProductionAndProcessingConversion/list', {
            year: years,
            para: para

        })
            .then((res) => {

                if (res.code == 0) {

                    var Alldata = res.data;


                    const _Data = []


                    _Data.push(Alldata.cEPowerGenerationBoilers);//1.1.1.1发电锅炉
                    _Data.push(Alldata.cEIndustrialBoilers); //1.1.1.2工业锅炉
                    _Data.push(Alldata.cEOtherEquipment);//1.1.1.3其他设备

                    _Data.push(Alldata.oAPowerGenerationBoilers);//1.1.2.1发电锅炉
                    _Data.push(Alldata.oAIndustrialBoilers);//1.1.2.2工业锅炉
                    _Data.push(Alldata.oAOtherEquipment);//1.1.2.3其他设备

                    _Data.push(Alldata.sFPowerGenerationBoilers);//1.1.3.1发电锅炉
                    _Data.push(Alldata.sFIndustrialBoilers);//1.1.3.2工业锅炉
                    _Data.push(Alldata.sFOtherEquipment);//1.1.3.3其他设备


                    var _A = [] //固体燃料和其他能源工业
                    var _A1 = []  //石油天然气开采与加工业
                    var _A2 = []  //公用电力与热力部门
                    var _A3 = []  //能源生产与加工转换


                    _A.push(Alldata.sFPowerGenerationBoilers.anthracite + Alldata.sFIndustrialBoilers.anthracite + Alldata.sFOtherEquipment.anthracite)
                    _A.push(Alldata.sFPowerGenerationBoilers.asphalt + Alldata.sFIndustrialBoilers.asphalt + Alldata.sFOtherEquipment.asphalt)
                    _A.push(Alldata.sFPowerGenerationBoilers.bituminouscoal + Alldata.sFIndustrialBoilers.bituminouscoal + Alldata.sFOtherEquipment.bituminouscoal)
                    _A.push(Alldata.sFPowerGenerationBoilers.blastfurnacegas + Alldata.sFIndustrialBoilers.blastfurnacegas + Alldata.sFOtherEquipment.blastfurnacegas)
                    _A.push(Alldata.sFPowerGenerationBoilers.briquette + Alldata.sFIndustrialBoilers.briquette + Alldata.sFOtherEquipment.briquette)
                    _A.push(Alldata.sFPowerGenerationBoilers.catelogId + Alldata.sFIndustrialBoilers.catelogId + Alldata.sFOtherEquipment.catelogId)
                    _A.push(Alldata.sFPowerGenerationBoilers.coalgangue + Alldata.sFIndustrialBoilers.coalgangue + Alldata.sFOtherEquipment.coalgangue)
                    _A.push(Alldata.sFPowerGenerationBoilers.coke + Alldata.sFIndustrialBoilers.coke + Alldata.sFOtherEquipment.coke)
                    _A.push(Alldata.sFPowerGenerationBoilers.cokeovengas + Alldata.sFIndustrialBoilers.cokeovengas + Alldata.sFOtherEquipment.cokeovengas)
                    _A.push(Alldata.sFPowerGenerationBoilers.crudeoil + Alldata.sFIndustrialBoilers.crudeoil + Alldata.sFOtherEquipment.crudeoil)
                    _A.push(Alldata.sFPowerGenerationBoilers.diesel + Alldata.sFIndustrialBoilers.diesel + Alldata.sFOtherEquipment.diesel)
                    _A.push(Alldata.sFPowerGenerationBoilers.fueloil + Alldata.sFIndustrialBoilers.fueloil + Alldata.sFOtherEquipment.fueloil)
                    _A.push(Alldata.sFPowerGenerationBoilers.gasoline + Alldata.sFIndustrialBoilers.gasoline + Alldata.sFOtherEquipment.gasoline)
                    _A.push(Alldata.sFPowerGenerationBoilers.kerosene + Alldata.sFIndustrialBoilers.kerosene + Alldata.sFOtherEquipment.kerosene)
                    _A.push(Alldata.sFPowerGenerationBoilers.lignite + Alldata.sFIndustrialBoilers.lignite + Alldata.sFOtherEquipment.lignite)
                    _A.push(Alldata.sFPowerGenerationBoilers.liquefiedpetroleumgas + Alldata.sFIndustrialBoilers.liquefiedpetroleumgas + Alldata.sFOtherEquipment.liquefiedpetroleumgas)
                    _A.push(Alldata.sFPowerGenerationBoilers.liquifiednaturalgas + Alldata.sFIndustrialBoilers.liquifiednaturalgas + Alldata.sFOtherEquipment.liquifiednaturalgas)
                    _A.push(Alldata.sFPowerGenerationBoilers.lubricatingoil + Alldata.sFIndustrialBoilers.lubricatingoil + Alldata.sFOtherEquipment.lubricatingoil)
                    _A.push(Alldata.sFPowerGenerationBoilers.naphtha + Alldata.sFIndustrialBoilers.naphtha + Alldata.sFOtherEquipment.naphtha)
                    _A.push(Alldata.sFPowerGenerationBoilers.naturalgas + Alldata.sFIndustrialBoilers.naturalgas + Alldata.sFOtherEquipment.naturalgas)
                    _A.push(Alldata.sFPowerGenerationBoilers.oilcoke + Alldata.sFIndustrialBoilers.oilcoke + Alldata.sFOtherEquipment.oilcoke)
                    _A.push(Alldata.sFPowerGenerationBoilers.onvertergas + Alldata.sFIndustrialBoilers.onvertergas + Alldata.sFOtherEquipment.onvertergas)
                    _A.push(Alldata.sFPowerGenerationBoilers.other + Alldata.sFIndustrialBoilers.other + Alldata.sFOtherEquipment.other)
                    _A.push(Alldata.sFPowerGenerationBoilers.othercoalwashing + Alldata.sFIndustrialBoilers.othercoalwashing + Alldata.sFOtherEquipment.othercoalwashing)
                    _A.push(Alldata.sFPowerGenerationBoilers.othercokingproducts + Alldata.sFIndustrialBoilers.othercokingproducts + Alldata.sFOtherEquipment.othercokingproducts)
                    _A.push(Alldata.sFPowerGenerationBoilers.othergas + Alldata.sFIndustrialBoilers.othergas + Alldata.sFOtherEquipment.othergas)
                    _A.push(Alldata.sFPowerGenerationBoilers.otherpetroleumproducts + Alldata.sFIndustrialBoilers.otherpetroleumproducts + Alldata.sFOtherEquipment.otherpetroleumproducts)
                    _A.push(Alldata.sFPowerGenerationBoilers.paraffin + Alldata.sFIndustrialBoilers.paraffin + Alldata.sFOtherEquipment.paraffin)
                    _A.push(Alldata.sFPowerGenerationBoilers.refinerydrygas + Alldata.sFIndustrialBoilers.refinerydrygas + Alldata.sFOtherEquipment.refinerydrygas)
                    _A.push(Alldata.sFPowerGenerationBoilers.solventoil + Alldata.sFIndustrialBoilers.solventoil + Alldata.sFOtherEquipment.solventoil)
                    _A.push(Alldata.sFPowerGenerationBoilers.tffId + Alldata.sFIndustrialBoilers.tffId + Alldata.sFOtherEquipment.tffId)
                    _A.push(Alldata.sFPowerGenerationBoilers.washthecleancoal + Alldata.sFIndustrialBoilers.washthecleancoal + Alldata.sFOtherEquipment.washthecleancoal)


                    var a1 = Alldata.oAPowerGenerationBoilers
                    var a2 = Alldata.oAIndustrialBoilers
                    var a3 = Alldata.oAOtherEquipment

                    _A1.push(a1.anthracite + a2.anthracite + a3.anthracite)
                    _A1.push(a1.asphalt + a2.asphalt + a3.asphalt)
                    _A1.push(a1.bituminouscoal + a2.bituminouscoal + a3.bituminouscoal)
                    _A1.push(a1.blastfurnacegas + a2.blastfurnacegas + a3.blastfurnacegas)
                    _A1.push(a1.briquette + a2.briquette + a3.briquette)
                    _A1.push(a1.catelogId + a2.catelogId + a3.catelogId)
                    _A1.push(a1.coalgangue + a2.coalgangue + a3.coalgangue)
                    _A1.push(a1.coke + a2.coke + a3.coke)
                    _A1.push(a1.cokeovengas + a2.cokeovengas + a3.cokeovengas)
                    _A1.push(a1.crudeoil + a2.crudeoil + a3.crudeoil)
                    _A1.push(a1.diesel + a2.diesel + a3.diesel)
                    _A1.push(a1.fueloil + a2.fueloil + a3.fueloil)
                    _A1.push(a1.gasoline + a2.gasoline + a3.gasoline)
                    _A1.push(a1.kerosene + a2.kerosene + a3.kerosene)
                    _A1.push(a1.lignite + a2.lignite + a3.lignite)
                    _A1.push(a1.liquefiedpetroleumgas + a2.liquefiedpetroleumgas + a3.liquefiedpetroleumgas)
                    _A1.push(a1.liquifiednaturalgas + a2.liquifiednaturalgas + a3.liquifiednaturalgas)
                    _A1.push(a1.lubricatingoil + a2.lubricatingoil + a3.lubricatingoil)
                    _A1.push(a1.naphtha + a2.naphtha + a3.naphtha)
                    _A1.push(a1.naturalgas + a2.naturalgas + a3.naturalgas)
                    _A1.push(a1.oilcoke + a2.oilcoke + a3.oilcoke)
                    _A1.push(a1.onvertergas + a2.onvertergas + a3.onvertergas)
                    _A1.push(a1.other + a2.other + a3.other)
                    _A1.push(a1.othercoalwashing + a2.othercoalwashing + a3.othercoalwashing)
                    _A1.push(a1.othercokingproducts + a2.othercokingproducts + a3.othercokingproducts)
                    _A1.push(a1.othergas + a2.othergas + a3.othergas)
                    _A1.push(a1.otherpetroleumproducts + a2.otherpetroleumproducts + a3.otherpetroleumproducts)
                    _A1.push(a1.paraffin + a2.paraffin + a3.paraffin)
                    _A1.push(a1.refinerydrygas + a2.refinerydrygas + a3.refinerydrygas)
                    _A1.push(a1.solventoil + a2.solventoil + a3.solventoil)
                    _A1.push(a1.tffId + a2.tffId + a3.tffId)
                    _A1.push(a1.washthecleancoal + a2.washthecleancoal + a3.washthecleancoal)


                    var a11 = Alldata.cEPowerGenerationBoilers
                    var a22 = Alldata.cEIndustrialBoilers
                    var a33 = Alldata.cEOtherEquipment

                    _A2.push(a11.anthracite + a22.anthracite + a33.anthracite)
                    _A2.push(a11.asphalt + a22.asphalt + a33.asphalt)
                    _A2.push(a11.bituminouscoal + a22.bituminouscoal + a33.bituminouscoal)
                    _A2.push(a11.blastfurnacegas + a22.blastfurnacegas + a33.blastfurnacegas)
                    _A2.push(a11.briquette + a22.briquette + a33.briquette)
                    _A2.push(a11.catelogId + a22.catelogId + a33.catelogId)
                    _A2.push(a11.coalgangue + a22.coalgangue + a33.coalgangue)
                    _A2.push(a11.coke + a22.coke + a33.coke)
                    _A2.push(a11.cokeovengas + a22.cokeovengas + a33.cokeovengas)
                    _A2.push(a11.crudeoil + a22.crudeoil + a33.crudeoil)
                    _A2.push(a11.diesel + a22.diesel + a33.diesel)
                    _A2.push(a11.fueloil + a22.fueloil + a33.fueloil)
                    _A2.push(a11.gasoline + a22.gasoline + a33.gasoline)
                    _A2.push(a11.kerosene + a22.kerosene + a33.kerosene)
                    _A2.push(a11.lignite + a22.lignite + a33.lignite)
                    _A2.push(a11.liquefiedpetroleumgas + a22.liquefiedpetroleumgas + a33.liquefiedpetroleumgas)
                    _A2.push(a11.liquifiednaturalgas + a22.liquifiednaturalgas + a33.liquifiednaturalgas)
                    _A2.push(a11.lubricatingoil + a22.lubricatingoil + a33.lubricatingoil)
                    _A2.push(a11.naphtha + a22.naphtha + a33.naphtha)
                    _A2.push(a11.naturalgas + a22.naturalgas + a33.naturalgas)
                    _A2.push(a11.oilcoke + a22.oilcoke + a33.oilcoke)
                    _A2.push(a11.onvertergas + a22.onvertergas + a33.onvertergas)
                    _A2.push(a11.other + a22.other + a33.other)
                    _A2.push(a11.othercoalwashing + a22.othercoalwashing + a33.othercoalwashing)
                    _A2.push(a11.othercokingproducts + a22.othercokingproducts + a33.othercokingproducts)
                    _A2.push(a11.othergas + a22.othergas + a33.othergas)
                    _A2.push(a11.otherpetroleumproducts + a22.otherpetroleumproducts + a33.otherpetroleumproducts)
                    _A2.push(a11.paraffin + a22.paraffin + a33.paraffin)
                    _A2.push(a11.refinerydrygas + a22.refinerydrygas + a33.refinerydrygas)
                    _A2.push(a11.solventoil + a22.solventoil + a33.solventoil)
                    _A2.push(a11.tffId + a22.tffId + a33.tffId)
                    _A2.push(a11.washthecleancoal + a22.washthecleancoal + a33.washthecleancoal)


                    for (var i = 0; i < _A.length; i++) {
                        _A3.push(_A[i] + _A1[i] + _A2[i])
                    }


                    this.setState({Data1: Alldata});
                    this.setState({A1: _A3});


                    const fossilTitle = [

                        '',
                        '1.化石燃料合计',
                        '　　1.1能源生产与加工转换',
                        '　　　　1.1.1公用电力与热力部门',
                        '　　　　　　1.1.1.1发电锅炉',
                        '　　　　　　1.1.1.2工业锅炉',
                        '　　　　　　1.1.1.3其他设备',
                        '　　　　1.1.2石油天然气开采与加工业',
                        '　　　　　　1.1.2.1发电锅炉',
                        '　　　　　　1.1.2.2工业锅炉',
                        '　　　　　　1.1.2.3其他设备',
                        '　　　　1.1.3固体燃料和其他能源工业',
                        '　　　　　　1.1.3.1发电锅炉',
                        '　　　　　　1.1.3.2工业锅炉',
                        '　　　　　　1.1.3.3其他设备',
                        '　　1.2工业和建筑业',
                        '　　　　1.2.1钢铁',
                        '　　　　　　1.2.1.1发电锅炉',
                        '　　　　　　1.2.1.2工业锅炉',
                        '　　　　　　1.2.1.3高炉',
                        '　　　　　　1.2.1.4其他设备',
                        '　　　　1.2.2有色金属',
                        '　　　　　　1.2.2.1发电锅炉',
                        '　　　　　　1.2.2.2工业锅炉',
                        '　　　　　　1.2.2.3氧化铝回转窑',
                        '　　　　　　1.2.2.4其他设备',
                        '　　　　1.2.3化工',
                        '　　　　　　1.2.3.1发电锅炉',
                        '　　　　　　1.2.3.2工业锅炉',
                        '　　　　　　1.2.3.3合成氨造气炉',
                        '　　　　　　1.2.3.4其他设备',
                        '　　　　1.2.4建材',
                        '　　　　　　1.2.4.1发电锅炉',
                        '　　　　　　1.2.4.2工业锅炉',
                        '　　　　　　1.2.4.3水泥回转窑',
                        '　　　　　　1.2.4.4水泥立窑',
                        '　　　　　　1.2.4.5其他设备',
                        '　　　　1.2.5其他工业部门',
                        '　　　　　　1.2.5.1其他工业部门',
                        '　　　　　　　　1.2.5.1.1设备1',
                        '　　　　　　　　1.2.5.1.2设备2',
                        '　　　　　　　　1.2.5.1.3设备3',
                        '　　　　　　1.2.5.2其他工业部门',
                        '　　　　　　　　1.2.5.2.1设备1',
                        '　　　　　　　　1.2.5.2.2设备2',
                        '　　　　　　　　1.2.5.2.3设备3',
                        '　　　　　　1.2.5.3其他工业部门',
                        '　　　　　　　　1.2.5.3.1设备1',
                        '　　　　　　　　1.2.5.3.2设备2',
                        '　　　　　　　　1.2.5.3.3设备3',
                        '　　　　 1.2.6建筑业',
                        '　　　　　　1.2.6.1发电锅炉',
                        '　　　　　　1.2.6.2工业锅炉',
                        '　　　　　　1.2.6.3其他设备',
                        '　　1.3交通运输',
                        '　　　　1.3.1航空',
                        '　　　　　　1.3.1.1国内航班',
                        '　　　　　　1.3.1.2港澳地区航班',
                        '　　　　　　1.3.1.3国际航班',
                        '　　　　1.3.2公路',
                        '　　　　1.3.3铁路',
                        '　　　　1.3.4水运',
                        '　　　　　　1.3.4.1内河近海内燃机',
                        '　　　　　　1.3.4.2国际远洋内燃机',
                        '　　1.4服务业及其他',
                        '　　1.5居民生活',
                        '　　1.6农、林、牧、渔业',

                    ]

                    const data = [];

                    var fossName;
                    var fossName1;
                    var fossName2;
                    var fossName3;


                    for (var i = 0; i < 15; i++) {

                        if (i == 0) {

                            if (para == 0) {
                                fossName = '万吨'
                                fossName1 = '亿立方米'
                                fossName2 = '万吨/亿立方米'
                            } else if (para == 1) {
                                fossName = 'TJ/万t'
                                fossName1 = 'TJ/亿m3'
                                fossName2 = 'TJ/万t（亿m3)'
                            } else if (para == 2) {
                                fossName = 'tC/TJ'
                                fossName1 = 'tC/TJ'
                                fossName2 = 'tC/TJ'
                            } else if (para == 3) {
                                fossName = '%'
                                fossName1 = '%'
                                fossName2 = '%'
                            }


                            data.push({
                                key: i,
                                name: fossilTitle[i],
                                anthracite: fossName,
                                asphalt: fossName,
                                bituminouscoal: fossName,
                                blastfurnacegas: fossName1,
                                briquette: fossName,
                                catelogId: fossName,
                                coalgangue: fossName,
                                coke: fossName,
                                cokeovengas: fossName1,
                                crudeoil: fossName,
                                diesel: fossName,
                                fueloil: fossName,
                                gasoline: fossName,
                                kerosene: fossName,
                                lignite: fossName,
                                liquefiedpetroleumgas: fossName,
                                liquifiednaturalgas: fossName,
                                lubricatingoil: fossName,
                                naphtha: fossName,
                                naturalgas: fossName1,
                                oilcoke: fossName,
                                onvertergas: fossName1,
                                other: fossName2,
                                othercoalwashing: fossName,
                                othercokingproducts: fossName,
                                othergas: fossName1,
                                otherpetroleumproducts: fossName,
                                paraffin: fossName,
                                refinerydrygas: fossName,
                                solventoil: fossName,
                                tffId: fossName,
                                washthecleancoal: fossName,

                            });

                        } else if (i == 1) {


                            data.push({
                                key: i,
                                name: fossilTitle[i],
                                anthracite: '0',
                                asphalt: '0',
                                bituminouscoal: '0',
                                blastfurnacegas: '0',
                                briquette: '0',
                                catelogId: '0',
                                coalgangue: '0',
                                coke: '0',
                                cokeovengas: '0',
                                crudeoil: '0',
                                diesel: '0',
                                fueloil: '0',
                                gasoline: '0',
                                kerosene: '0',
                                lignite: '0',
                                liquefiedpetroleumgas: '0',
                                liquifiednaturalgas: '0',
                                lubricatingoil: '0',
                                naphtha: '0',
                                naturalgas: '0',
                                oilcoke: '0',
                                onvertergas: '0',
                                other: '0',
                                othercoalwashing: '0',
                                othercokingproducts: '0',
                                othergas: '0',
                                otherpetroleumproducts: '0',
                                paraffin: '0',
                                refinerydrygas: '0',
                                solventoil: '0',
                                tffId: '0',
                                washthecleancoal: '0',

                            });

                        } else if (i == 2) {

                            data.push({
                                key: i,
                                name: fossilTitle[i],
                                anthracite: _A3[0].toFixed(2),
                                asphalt: _A3[1].toFixed(2),
                                bituminouscoal: _A3[2].toFixed(2),
                                blastfurnacegas: _A3[3].toFixed(2),

                                briquette: _A3[4].toFixed(2),
                                catelogId: _A3[5].toFixed(2),
                                coalgangue: _A3[6].toFixed(2),
                                coke: _A3[7].toFixed(2),
                                cokeovengas: _A3[8].toFixed(2),
                                crudeoil: _A3[9].toFixed(2),
                                diesel: _A3[10].toFixed(2),
                                fueloil: _A3[11].toFixed(2),
                                gasoline: _A3[12].toFixed(2),
                                kerosene: _A3[13].toFixed(2),
                                lignite: _A3[14].toFixed(2),
                                liquefiedpetroleumgas: _A3[15].toFixed(2),
                                liquifiednaturalgas: _A3[16].toFixed(2),
                                lubricatingoil: _A3[17].toFixed(2),
                                naphtha: _A3[18].toFixed(2),
                                naturalgas: _A3[19].toFixed(2),
                                oilcoke: _A3[20].toFixed(2),
                                onvertergas: _A3[21].toFixed(2),
                                other: _A3[22].toFixed(2),
                                othercoalwashing: _A3[23].toFixed(2),
                                othercokingproducts: _A3[24].toFixed(2),
                                othergas: _A3[25].toFixed(2),
                                otherpetroleumproducts: _A3[26].toFixed(2),
                                paraffin: _A3[27].toFixed(2),
                                refinerydrygas: _A3[28].toFixed(2),
                                solventoil: _A3[29].toFixed(2),
                                tffId: _A3[30].toFixed(2),
                                washthecleancoal: _A3[31].toFixed(2),

                            });

                        } else if (i == 3) {

                            data.push({
                                key: i,
                                name: fossilTitle[i],
                                anthracite: _A2[0].toFixed(2),
                                asphalt: _A2[1].toFixed(2),
                                bituminouscoal: _A2[2].toFixed(2),
                                blastfurnacegas: _A2[3].toFixed(2),

                                briquette: _A2[4].toFixed(2),
                                catelogId: _A2[5].toFixed(2),
                                coalgangue: _A2[6].toFixed(2),
                                coke: _A2[7].toFixed(2),
                                cokeovengas: _A2[8].toFixed(2),
                                crudeoil: _A2[9].toFixed(2),
                                diesel: _A2[10].toFixed(2),
                                fueloil: _A2[11].toFixed(2),
                                gasoline: _A2[12].toFixed(2),
                                kerosene: _A2[13].toFixed(2),
                                lignite: _A2[14].toFixed(2),
                                liquefiedpetroleumgas: _A2[15].toFixed(2),
                                liquifiednaturalgas: _A2[16].toFixed(2),
                                lubricatingoil: _A2[17].toFixed(2),
                                naphtha: _A2[18].toFixed(2),
                                naturalgas: _A2[19].toFixed(2),
                                oilcoke: _A2[20].toFixed(2),
                                onvertergas: _A2[21].toFixed(2),
                                other: _A2[22].toFixed(2),
                                othercoalwashing: _A2[23].toFixed(2),
                                othercokingproducts: _A2[24].toFixed(2),
                                othergas: _A2[25].toFixed(2),
                                otherpetroleumproducts: _A2[26].toFixed(2),
                                paraffin: _A2[27].toFixed(2),
                                refinerydrygas: _A2[28].toFixed(2),
                                solventoil: _A2[29].toFixed(2),
                                tffId: _A2[30].toFixed(2),
                                washthecleancoal: _A2[31].toFixed(2),

                            });

                        } else if (i == 7) {

                            data.push({
                                key: i,
                                name: fossilTitle[i],
                                anthracite: _A1[0].toFixed(2),
                                asphalt: _A1[1].toFixed(2),
                                bituminouscoal: _A1[2].toFixed(2),
                                blastfurnacegas: _A1[3].toFixed(2),

                                briquette: _A1[4].toFixed(2),
                                catelogId: _A1[5].toFixed(2),
                                coalgangue: _A1[6].toFixed(2),
                                coke: _A1[7].toFixed(2),
                                cokeovengas: _A1[8].toFixed(2),
                                crudeoil: _A1[9].toFixed(2),
                                diesel: _A1[10].toFixed(2),
                                fueloil: _A1[11].toFixed(2),
                                gasoline: _A1[12].toFixed(2),
                                kerosene: _A1[13].toFixed(2),
                                lignite: _A1[14].toFixed(2),
                                liquefiedpetroleumgas: _A1[15].toFixed(2),
                                liquifiednaturalgas: _A1[16].toFixed(2),
                                lubricatingoil: _A1[17].toFixed(2),
                                naphtha: _A1[18].toFixed(2),
                                naturalgas: _A1[19].toFixed(2),
                                oilcoke: _A1[20].toFixed(2),
                                onvertergas: _A1[21].toFixed(2),
                                other: _A1[22].toFixed(2),
                                othercoalwashing: _A1[23].toFixed(2),
                                othercokingproducts: _A1[24].toFixed(2),
                                othergas: _A1[25].toFixed(2),
                                otherpetroleumproducts: _A1[26].toFixed(2),
                                paraffin: _A1[27].toFixed(2),
                                refinerydrygas: _A1[28].toFixed(2),
                                solventoil: _A1[29].toFixed(2),
                                tffId: _A1[30].toFixed(2),
                                washthecleancoal: _A1[31].toFixed(2),

                            });

                        } else if (i == 11) {

                            data.push({
                                key: i,
                                name: fossilTitle[i],
                                anthracite: _A[0].toFixed(2),
                                asphalt: _A[1].toFixed(2),
                                bituminouscoal: _A[2].toFixed(2),
                                blastfurnacegas: _A[3].toFixed(2),

                                briquette: _A[4].toFixed(2),
                                catelogId: _A[5].toFixed(2),
                                coalgangue: _A[6].toFixed(2),
                                coke: _A[7].toFixed(2),
                                cokeovengas: _A[8].toFixed(2),
                                crudeoil: _A[9].toFixed(2),
                                diesel: _A[10].toFixed(2),
                                fueloil: _A[11].toFixed(2),
                                gasoline: _A[12].toFixed(2),
                                kerosene: _A[13].toFixed(2),
                                lignite: _A[14].toFixed(2),
                                liquefiedpetroleumgas: _A[15].toFixed(2),
                                liquifiednaturalgas: _A[16].toFixed(2),
                                lubricatingoil: _A[17].toFixed(2),
                                naphtha: _A[18].toFixed(2),
                                naturalgas: _A[19].toFixed(2),
                                oilcoke: _A[20].toFixed(2),
                                onvertergas: _A[21].toFixed(2),
                                other: _A[22].toFixed(2),
                                othercoalwashing: _A[23].toFixed(2),
                                othercokingproducts: _A[24].toFixed(2),
                                othergas: _A[25].toFixed(2),
                                otherpetroleumproducts: _A[26].toFixed(2),
                                paraffin: _A[27].toFixed(2),
                                refinerydrygas: _A[28].toFixed(2),
                                solventoil: _A[29].toFixed(2),
                                tffId: _A[30].toFixed(2),
                                washthecleancoal: _A[31].toFixed(2),

                            });

                        } else if (i > 7 && i < 11) {

                            var j = 5
                            data.push({
                                key: i,
                                name: fossilTitle[i],
                                anthracite: _Data[i - j].anthracite,
                                asphalt: _Data[i - j].asphalt,
                                bituminouscoal: _Data[i - j].bituminouscoal,
                                blastfurnacegas: _Data[i - j].blastfurnacegas,
                                briquette: _Data[i - j].briquette,
                                catelogId: _Data[i - j].catelogId,
                                coalgangue: _Data[i - j].coalgangue,
                                coke: _Data[i - j].coke,
                                cokeovengas: _Data[i - j].cokeovengas,
                                crudeoil: _Data[i - j].crudeoil,
                                diesel: _Data[i - j].diesel,
                                fueloil: _Data[i - j].fueloil,
                                gasoline: _Data[i - j].gasoline,
                                kerosene: _Data[i - j].kerosene,
                                lignite: _Data[i - j].lignite,
                                liquefiedpetroleumgas: _Data[i - j].liquefiedpetroleumgas,
                                liquifiednaturalgas: _Data[i - j].liquifiednaturalgas,
                                lubricatingoil: _Data[i - j].lubricatingoil,
                                naphtha: _Data[i - j].naphtha,
                                naturalgas: _Data[i - j].naturalgas,
                                oilcoke: _Data[i - j].oilcoke,
                                onvertergas: _Data[i - j].onvertergas,
                                other: _Data[i - j].other,
                                othercoalwashing: _Data[i - j].othercoalwashing,
                                othercokingproducts: _Data[i - j].othercokingproducts,
                                othergas: _Data[i - j].othergas,
                                otherpetroleumproducts: _Data[i - j].otherpetroleumproducts,
                                paraffin: _Data[i - j].paraffin,
                                refinerydrygas: _Data[i - j].refinerydrygas,
                                solventoil: _Data[i - j].solventoil,
                                tffId: _Data[i - j].tffId,
                                washthecleancoal: _Data[i - j].washthecleancoal,

                            });

                        } else if (i > 11) {
                            var j = 6;

                            data.push({
                                key: i,
                                name: fossilTitle[i],
                                anthracite: _Data[i - j].anthracite,
                                asphalt: _Data[i - j].asphalt,
                                bituminouscoal: _Data[i - j].bituminouscoal,
                                blastfurnacegas: _Data[i - j].blastfurnacegas,
                                briquette: _Data[i - j].briquette,
                                catelogId: _Data[i - j].catelogId,
                                coalgangue: _Data[i - j].coalgangue,
                                coke: _Data[i - j].coke,
                                cokeovengas: _Data[i - j].cokeovengas,
                                crudeoil: _Data[i - j].crudeoil,
                                diesel: _Data[i - j].diesel,
                                fueloil: _Data[i - j].fueloil,
                                gasoline: _Data[i - j].gasoline,
                                kerosene: _Data[i - j].kerosene,
                                lignite: _Data[i - j].lignite,
                                liquefiedpetroleumgas: _Data[i - j].liquefiedpetroleumgas,
                                liquifiednaturalgas: _Data[i - j].liquifiednaturalgas,
                                lubricatingoil: _Data[i - j].lubricatingoil,
                                naphtha: _Data[i - j].naphtha,
                                naturalgas: _Data[i - j].naturalgas,
                                oilcoke: _Data[i - j].oilcoke,
                                onvertergas: _Data[i - j].onvertergas,
                                other: _Data[i - j].other,
                                othercoalwashing: _Data[i - j].othercoalwashing,
                                othercokingproducts: _Data[i - j].othercokingproducts,
                                othergas: _Data[i - j].othergas,
                                otherpetroleumproducts: _Data[i - j].otherpetroleumproducts,
                                paraffin: _Data[i - j].paraffin,
                                refinerydrygas: _Data[i - j].refinerydrygas,
                                solventoil: _Data[i - j].solventoil,
                                tffId: _Data[i - j].tffId,
                                washthecleancoal: _Data[i - j].washthecleancoal,

                            });

                        } else {


                            var j = 4
                            data.push({
                                key: i,
                                name: fossilTitle[i],
                                anthracite: _Data[i - j].anthracite,
                                asphalt: _Data[i - j].asphalt,
                                bituminouscoal: _Data[i - j].bituminouscoal,
                                blastfurnacegas: _Data[i - j].blastfurnacegas,
                                briquette: _Data[i - j].briquette,
                                catelogId: _Data[i - j].catelogId,
                                coalgangue: _Data[i - j].coalgangue,
                                coke: _Data[i - j].coke,
                                cokeovengas: _Data[i - j].cokeovengas,
                                crudeoil: _Data[i - j].crudeoil,
                                diesel: _Data[i - j].diesel,
                                fueloil: _Data[i - j].fueloil,
                                gasoline: _Data[i - j].gasoline,
                                kerosene: _Data[i - j].kerosene,
                                lignite: _Data[i - j].lignite,
                                liquefiedpetroleumgas: _Data[i - j].liquefiedpetroleumgas,
                                liquifiednaturalgas: _Data[i - j].liquifiednaturalgas,
                                lubricatingoil: _Data[i - j].lubricatingoil,
                                naphtha: _Data[i - j].naphtha,
                                naturalgas: _Data[i - j].naturalgas,
                                oilcoke: _Data[i - j].oilcoke,
                                onvertergas: _Data[i - j].onvertergas,
                                other: _Data[i - j].other,
                                othercoalwashing: _Data[i - j].othercoalwashing,
                                othercokingproducts: _Data[i - j].othercokingproducts,
                                othergas: _Data[i - j].othergas,
                                otherpetroleumproducts: _Data[i - j].otherpetroleumproducts,
                                paraffin: _Data[i - j].paraffin,
                                refinerydrygas: _Data[i - j].refinerydrygas,
                                solventoil: _Data[i - j].solventoil,
                                tffId: _Data[i - j].tffId,
                                washthecleancoal: _Data[i - j].washthecleancoal,

                            });

                        }


                    }

                    //console.log(data);


                    this.query2(data, para, years);

                } else {
                    message.error('数据错误！');
                }
            });
    }

    //1.2
    query2(data, para, years) {

        post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/industryAndConstruction/list', {
            year: years,
            para: para

        })
            .then((res) => {


                if (res.code == 0) {

                    var Alldata = res.data;


                    const _a = data;

                    const _Data = [];

                    _Data.push(Alldata.sPowerGenerationBoilers);//1.2.1.1发电锅炉
                    _Data.push(Alldata.sIndustrialBoilers);//1.2.1.2工业锅炉
                    _Data.push(Alldata.sBlastFurnace);//1.2.1.3高炉
                    _Data.push(Alldata.sotherEquipment);//1.2.1.4其他设备

                    _Data.push(Alldata.nMPowerGenerationBoilers);//1.2.2.1发电锅炉
                    _Data.push(Alldata.nMIndustrialBoilers);//1.2.2.2工业锅炉
                    _Data.push(Alldata.nMAluminaRotaryKiln);//1.2.2.3氧化铝回转窑
                    _Data.push(Alldata.nMOtherEquipment);//1.2.2.4其他设备

                    _Data.push(Alldata.cMPowerGenerationBoilers);//1.2.3.1发电锅炉
                    _Data.push(Alldata.cMIndustrialBoilers);//1.2.3.2工业锅炉
                    _Data.push(Alldata.cMSyntheticAmmoniaGasFurnace);//1.2.3.3合成氨造气炉
                    _Data.push(Alldata.cMotherEquipment);//1.2.3.4其他设备

                    _Data.push(Alldata.bMPowerGenerationBoilers);//1.2.4.1发电锅炉
                    _Data.push(Alldata.bMIndustrialBoilers);//1.2.4.2工业锅炉
                    _Data.push(Alldata.bMCementRotaryKiln);//1.2.4.3水泥回转窑
                    _Data.push(Alldata.bMCementShaftKiln);//1.2.4.4水泥立窑
                    _Data.push(Alldata.bMOtherEquipment);//1.2.4.5其他设备


                    _Data.push(Alldata.aEquipment1);//1.2.5.1.1设备1
                    _Data.push(Alldata.aEquipment2);//1.2.5.1.1设备2
                    _Data.push(Alldata.aEquipment3);//1.2.5.1.1设备3

                    _Data.push(Alldata.bEquipment1);//1.2.5.2.1设备1
                    _Data.push(Alldata.bEquipment2);//1.2.5.2.2设备2
                    _Data.push(Alldata.bEquipment3);//1.2.5.2.3设备3

                    _Data.push(Alldata.cEquipment1);//1.2.5.3.1设备1
                    _Data.push(Alldata.cEquipment2);//1.2.5.3.2设备2
                    _Data.push(Alldata.cEquipment3);//1.2.5.3.3设备3

                    _Data.push(Alldata.cIPowerGenerationBoilers);//1.2.6.1发电锅炉
                    _Data.push(Alldata.cIIndustrialBoilers);//1.2.6.2工业锅炉
                    _Data.push(Alldata.cIOtherEquipment);//1.2.6.3其他设备


                    const fossilTitle = [

                        '　　1.2工业和建筑业',
                        '　　　　1.2.1钢铁',
                        '　　　　　　1.2.1.1发电锅炉',
                        '　　　　　　1.2.1.2工业锅炉',
                        '　　　　　　1.2.1.3高炉',
                        '　　　　　　1.2.1.4其他设备',
                        '　　　　1.2.2有色金属',
                        '　　　　　　1.2.2.1发电锅炉',
                        '　　　　　　1.2.2.2工业锅炉',
                        '　　　　　　1.2.2.3氧化铝回转窑',
                        '　　　　　　1.2.2.4其他设备',
                        '　　　　1.2.3化工',
                        '　　　　　　1.2.3.1发电锅炉',
                        '　　　　　　1.2.3.2工业锅炉',
                        '　　　　　　1.2.3.3合成氨造气炉',
                        '　　　　　　1.2.3.4其他设备',
                        '　　　　1.2.4建材',
                        '　　　　　　1.2.4.1发电锅炉',
                        '　　　　　　1.2.4.2工业锅炉',
                        '　　　　　　1.2.4.3水泥回转窑',
                        '　　　　　　1.2.4.4水泥立窑',
                        '　　　　　　1.2.4.5其他设备',
                        '　　　　1.2.5其他工业部门',
                        '　　　　　　1.2.5.1其他工业部门',
                        '　　　　　　　　1.2.5.1.1设备1',
                        '　　　　　　　　1.2.5.1.2设备2',
                        '　　　　　　　　1.2.5.1.3设备3',
                        '　　　　　　1.2.5.2其他工业部门',
                        '　　　　　　　　1.2.5.2.1设备1',
                        '　　　　　　　　1.2.5.2.2设备2',
                        '　　　　　　　　1.2.5.2.3设备3',
                        '　　　　　　1.2.5.3其他工业部门',
                        '　　　　　　　　1.2.5.3.1设备1',
                        '　　　　　　　　1.2.5.3.2设备2',
                        '　　　　　　　　1.2.5.3.3设备3',
                        '　　　　 1.2.6建筑业',
                        '　　　　　　1.2.6.1发电锅炉',
                        '　　　　　　1.2.6.2工业锅炉',
                        '　　　　　　1.2.6.3其他设备',
                        '　　1.3交通运输',
                        '　　　　1.3.1航空',
                        '　　　　　　1.3.1.1国内航班',
                        '　　　　　　1.3.1.2港澳地区航班',
                        '　　　　　　1.3.1.3国际航班',
                        '　　　　1.3.2公路',
                        '　　　　1.3.3铁路',
                        '　　　　1.3.4水运',
                        '　　　　　　1.3.4.1内河近海内燃机',
                        '　　　　　　1.3.4.2国际远洋内燃机',
                        '　　1.4服务业及其他',
                        '　　1.5居民生活',
                        '　　1.6农、林、牧、渔业',

                    ]


                    var _A1 = [] //钢铁
                    var _A2 = []
                    var _A3 = []
                    var _A4 = []
                    var _A5 = []
                    var _A6 = []
                    var _A7 = []
                    var _A8 = []
                    var _A9 = []
                    var _A10 = []


                    var a1 = Alldata.sPowerGenerationBoilers
                    var a2 = Alldata.sIndustrialBoilers
                    var a3 = Alldata.sBlastFurnace
                    var a4 = Alldata.sotherEquipment

                    _A1.push(a1.anthracite + a2.anthracite + a3.anthracite + a4.anthracite)
                    _A1.push(a1.asphalt + a2.asphalt + a3.asphalt + a4.asphalt)
                    _A1.push(a1.bituminouscoal + a2.bituminouscoal + a3.bituminouscoal + a4.bituminouscoal)
                    _A1.push(a1.blastfurnacegas + a2.blastfurnacegas + a3.blastfurnacegas + a4.blastfurnacegas)
                    _A1.push(a1.briquette + a2.briquette + a3.briquette + a4.briquette)
                    _A1.push(a1.catelogId + a2.catelogId + a3.catelogId + a4.catelogId)
                    _A1.push(a1.coalgangue + a2.coalgangue + a3.coalgangue + a4.coalgangue)
                    _A1.push(a1.coke + a2.coke + a3.coke + a4.coke)
                    _A1.push(a1.cokeovengas + a2.cokeovengas + a3.cokeovengas + a4.cokeovengas)
                    _A1.push(a1.crudeoil + a2.crudeoil + a3.crudeoil + a4.crudeoil)
                    _A1.push(a1.diesel + a2.diesel + a3.diesel + a4.diesel)
                    _A1.push(a1.fueloil + a2.fueloil + a3.fueloil + a4.fueloil)
                    _A1.push(a1.gasoline + a2.gasoline + a3.gasoline + a4.gasoline)
                    _A1.push(a1.kerosene + a2.kerosene + a3.kerosene + a4.kerosene)
                    _A1.push(a1.lignite + a2.lignite + a3.lignite + a4.lignite)
                    _A1.push(a1.liquefiedpetroleumgas + a2.liquefiedpetroleumgas + a3.liquefiedpetroleumgas + a4.liquefiedpetroleumgas)
                    _A1.push(a1.liquifiednaturalgas + a2.liquifiednaturalgas + a3.liquifiednaturalgas + a4.liquifiednaturalgas)
                    _A1.push(a1.lubricatingoil + a2.lubricatingoil + a3.lubricatingoil + a4.lubricatingoil)
                    _A1.push(a1.naphtha + a2.naphtha + a3.naphtha + a4.naphtha)
                    _A1.push(a1.naturalgas + a2.naturalgas + a3.naturalgas + a4.naturalgas)
                    _A1.push(a1.oilcoke + a2.oilcoke + a3.oilcoke + a4.oilcoke)
                    _A1.push(a1.onvertergas + a2.onvertergas + a3.onvertergas + a4.onvertergas)
                    _A1.push(a1.other + a2.other + a3.other + a4.other)
                    _A1.push(a1.othercoalwashing + a2.othercoalwashing + a3.othercoalwashing + a4.othercoalwashing)
                    _A1.push(a1.othercokingproducts + a2.othercokingproducts + a3.othercokingproducts + a4.othercokingproducts)
                    _A1.push(a1.othergas + a2.othergas + a3.othergas + a4.othergas)
                    _A1.push(a1.otherpetroleumproducts + a2.otherpetroleumproducts + a3.otherpetroleumproducts + a4.otherpetroleumproducts)
                    _A1.push(a1.paraffin + a2.paraffin + a3.paraffin + a4.paraffin)
                    _A1.push(a1.refinerydrygas + a2.refinerydrygas + a3.refinerydrygas + a4.refinerydrygas)
                    _A1.push(a1.solventoil + a2.solventoil + a3.solventoil + a4.solventoil)
                    _A1.push(a1.tffId + a2.tffId + a3.tffId + a3.tffId)
                    _A1.push(a1.washthecleancoal + a2.washthecleancoal + a3.washthecleancoal + a4.washthecleancoal)


                    var b1 = Alldata.nMPowerGenerationBoilers
                    var b2 = Alldata.nMIndustrialBoilers
                    var b3 = Alldata.nMAluminaRotaryKiln
                    var b4 = Alldata.nMOtherEquipment

                    _A2.push(b1.anthracite + b2.anthracite + b3.anthracite + b4.anthracite)
                    _A2.push(b1.asphalt + b2.asphalt + b3.asphalt + b4.asphalt)
                    _A2.push(b1.bituminouscoal + b3.bituminouscoal + b3.bituminouscoal + b4.bituminouscoal)
                    _A2.push(b1.blastfurnacegas + b3.blastfurnacegas + b3.blastfurnacegas + b4.blastfurnacegas)
                    _A2.push(b1.briquette + b2.briquette + b3.briquette + b4.briquette)
                    _A2.push(b1.catelogId + b2.catelogId + b3.catelogId + b4.catelogId)
                    _A2.push(b1.coalgangue + b2.coalgangue + b3.coalgangue + b4.coalgangue)
                    _A2.push(b1.coke + b2.coke + b3.coke + b4.coke)
                    _A2.push(b1.cokeovengas + b2.cokeovengas + b3.cokeovengas + b4.cokeovengas)
                    _A2.push(b1.crudeoil + b2.crudeoil + b3.crudeoil + b4.crudeoil)
                    _A2.push(b1.diesel + b2.diesel + b3.diesel + b4.diesel)
                    _A2.push(b1.fueloil + b2.fueloil + b3.fueloil + b4.fueloil)
                    _A2.push(b1.gasoline + b2.gasoline + b3.gasoline + b4.gasoline)
                    _A2.push(b1.kerosene + b2.kerosene + b3.kerosene + b4.kerosene)
                    _A2.push(b1.lignite + b2.lignite + b3.lignite + b4.lignite)
                    _A2.push(b1.liquefiedpetroleumgas + b2.liquefiedpetroleumgas + b3.liquefiedpetroleumgas + b4.liquefiedpetroleumgas)
                    _A2.push(b1.liquifiednaturalgas + b2.liquifiednaturalgas + b3.liquifiednaturalgas + b4.liquifiednaturalgas)
                    _A2.push(b1.lubricatingoil + b2.lubricatingoil + b3.lubricatingoil + b4.lubricatingoil)
                    _A2.push(b1.naphtha + b2.naphtha + b3.naphtha + b4.naphtha)
                    _A2.push(b1.naturalgas + b2.naturalgas + b3.naturalgas + b4.naturalgas)
                    _A2.push(b1.oilcoke + b2.oilcoke + b3.oilcoke + b4.oilcoke)
                    _A2.push(b1.onvertergas + b2.onvertergas + b3.onvertergas + b4.onvertergas)
                    _A2.push(b1.other + b2.other + b3.other + b4.other)
                    _A2.push(b1.othercoalwashing + b2.othercoalwashing + b3.othercoalwashing + b4.othercoalwashing)
                    _A2.push(b1.othercokingproducts + b2.othercokingproducts + b3.othercokingproducts + b4.othercokingproducts)
                    _A2.push(b1.othergas + b2.othergas + b3.othergas + b4.othergas)
                    _A2.push(b1.otherpetroleumproducts + b2.otherpetroleumproducts + b3.otherpetroleumproducts + b4.otherpetroleumproducts)
                    _A2.push(b1.paraffin + b2.paraffin + b3.paraffin + b4.paraffin)
                    _A2.push(b1.refinerydrygas + b2.refinerydrygas + b3.refinerydrygas + b4.refinerydrygas)
                    _A2.push(b1.solventoil + b2.solventoil + b3.solventoil + b4.solventoil)
                    _A2.push(b1.tffId + b2.tffId + b3.tffId + b3.tffId)
                    _A2.push(b1.washthecleancoal + b2.washthecleancoal + b3.washthecleancoal + b4.washthecleancoal)


                    var c1 = Alldata.cMPowerGenerationBoilers
                    var c2 = Alldata.cMIndustrialBoilers
                    var c3 = Alldata.cMSyntheticAmmoniaGasFurnace
                    var c4 = Alldata.cMotherEquipment

                    _A3.push(c1.anthracite + c2.anthracite + c3.anthracite + c4.anthracite)
                    _A3.push(c1.asphalt + c2.asphalt + c3.asphalt + c4.asphalt)
                    _A3.push(c1.bituminouscoal + c3.bituminouscoal + c3.bituminouscoal + c4.bituminouscoal)
                    _A3.push(c1.blastfurnacegas + c3.blastfurnacegas + c3.blastfurnacegas + c4.blastfurnacegas)
                    _A3.push(c1.briquette + c2.briquette + c3.briquette + c4.briquette)
                    _A3.push(c1.catelogId + c2.catelogId + c3.catelogId + c4.catelogId)
                    _A3.push(c1.coalgangue + c2.coalgangue + c3.coalgangue + c4.coalgangue)
                    _A3.push(c1.coke + c2.coke + c3.coke + c4.coke)
                    _A3.push(c1.cokeovengas + c2.cokeovengas + c3.cokeovengas + c4.cokeovengas)
                    _A3.push(c1.crudeoil + c2.crudeoil + c3.crudeoil + c4.crudeoil)
                    _A3.push(c1.diesel + c2.diesel + c3.diesel + c4.diesel)
                    _A3.push(c1.fueloil + c2.fueloil + c3.fueloil + c4.fueloil)
                    _A3.push(c1.gasoline + c2.gasoline + c3.gasoline + c4.gasoline)
                    _A3.push(c1.kerosene + c2.kerosene + c3.kerosene + c4.kerosene)
                    _A3.push(c1.lignite + c2.lignite + c3.lignite + c4.lignite)
                    _A3.push(c1.liquefiedpetroleumgas + c2.liquefiedpetroleumgas + c3.liquefiedpetroleumgas + c4.liquefiedpetroleumgas)
                    _A3.push(c1.liquifiednaturalgas + c2.liquifiednaturalgas + c3.liquifiednaturalgas + c4.liquifiednaturalgas)
                    _A3.push(c1.lubricatingoil + c2.lubricatingoil + c3.lubricatingoil + c4.lubricatingoil)
                    _A3.push(c1.naphtha + c2.naphtha + c3.naphtha + c4.naphtha)
                    _A3.push(c1.naturalgas + c2.naturalgas + c3.naturalgas + c4.naturalgas)
                    _A3.push(c1.oilcoke + c2.oilcoke + c3.oilcoke + c4.oilcoke)
                    _A3.push(c1.onvertergas + c2.onvertergas + c3.onvertergas + c4.onvertergas)
                    _A3.push(c1.other + c2.other + c3.other + c4.other)
                    _A3.push(c1.othercoalwashing + c2.othercoalwashing + c3.othercoalwashing + c4.othercoalwashing)
                    _A3.push(c1.othercokingproducts + c2.othercokingproducts + c3.othercokingproducts + c4.othercokingproducts)
                    _A3.push(c1.othergas + c2.othergas + c3.othergas + c4.othergas)
                    _A3.push(c1.otherpetroleumproducts + c2.otherpetroleumproducts + c3.otherpetroleumproducts + c4.otherpetroleumproducts)
                    _A3.push(c1.paraffin + c2.paraffin + c3.paraffin + c4.paraffin)
                    _A3.push(c1.refinerydrygas + c2.refinerydrygas + c3.refinerydrygas + c4.refinerydrygas)
                    _A3.push(c1.solventoil + c2.solventoil + c3.solventoil + c4.solventoil)
                    _A3.push(c1.tffId + c2.tffId + c3.tffId + c3.tffId)
                    _A3.push(c1.washthecleancoal + c2.washthecleancoal + c3.washthecleancoal + c4.washthecleancoal)


                    var d1 = Alldata.bMPowerGenerationBoilers
                    var d2 = Alldata.bMIndustrialBoilers
                    var d3 = Alldata.bMCementRotaryKiln
                    var d4 = Alldata.bMCementShaftKiln
                    var d5 = Alldata.bMOtherEquipment

                    _A4.push(d1.anthracite + d2.anthracite + d3.anthracite + d4.anthracite + d5.anthracite)
                    _A4.push(d1.asphalt + d2.asphalt + d3.asphalt + d4.asphalt + d5.asphalt)
                    _A4.push(d1.bituminouscoal + d3.bituminouscoal + d3.bituminouscoal + d4.bituminouscoal + d5.bituminouscoal)
                    _A4.push(d1.blastfurnacegas + d3.blastfurnacegas + d3.blastfurnacegas + d4.blastfurnacegas + d5.blastfurnacegas)
                    _A4.push(d1.briquette + d2.briquette + d3.briquette + d4.briquette + d5.briquette)
                    _A4.push(d1.catelogId + d2.catelogId + d3.catelogId + d4.catelogId + d5.catelogId)
                    _A4.push(d1.coalgangue + d2.coalgangue + d3.coalgangue + d4.coalgangue + d5.coalgangue)
                    _A4.push(d1.coke + d2.coke + d3.coke + d4.coke + d5.coke)
                    _A4.push(d1.cokeovengas + d2.cokeovengas + d3.cokeovengas + d4.cokeovengas + d5.cokeovengas)
                    _A4.push(d1.crudeoil + d2.crudeoil + d3.crudeoil + d4.crudeoil + d5.crudeoil)
                    _A4.push(d1.diesel + d2.diesel + d3.diesel + d4.diesel + d5.diesel)
                    _A4.push(d1.fueloil + d2.fueloil + d3.fueloil + d4.fueloil + d5.fueloil)
                    _A4.push(d1.gasoline + d2.gasoline + d3.gasoline + d4.gasoline + d5.gasoline)
                    _A4.push(d1.kerosene + d2.kerosene + d3.kerosene + d4.kerosene + d5.kerosene)
                    _A4.push(d1.lignite + d2.lignite + d3.kerosene + d4.kerosene + d5.kerosene)
                    _A4.push(d1.liquefiedpetroleumgas + d2.liquefiedpetroleumgas + d3.liquefiedpetroleumgas + d4.liquefiedpetroleumgas + d5.liquefiedpetroleumgas)
                    _A4.push(d1.liquifiednaturalgas + d2.liquifiednaturalgas + d3.liquifiednaturalgas + d4.liquifiednaturalgas + d5.liquifiednaturalgas)
                    _A4.push(d1.lubricatingoil + d2.lubricatingoil + d3.lubricatingoil + d4.lubricatingoil + d5.lubricatingoil)
                    _A4.push(d1.naphtha + d2.naphtha + d3.naphtha + d4.naphtha + d5.naphtha)
                    _A4.push(d1.naturalgas + d2.naturalgas + d3.naturalgas + d4.naturalgas + d5.naturalgas)
                    _A4.push(d1.oilcoke + d2.oilcoke + d3.oilcoke + d4.oilcoke + d5.oilcoke)
                    _A4.push(d1.onvertergas + d2.onvertergas + d3.onvertergas + d4.onvertergas + d5.onvertergas)
                    _A4.push(d1.other + d2.other + d3.other + d4.other + d5.other)
                    _A4.push(d1.othercoalwashing + d2.othercoalwashing + d3.othercoalwashing + d4.othercoalwashing + d5.othercoalwashing)
                    _A4.push(d1.othercokingproducts + d2.othercokingproducts + d3.othercokingproducts + d4.othercokingproducts + d5.othercokingproducts)
                    _A4.push(d1.othergas + d2.othergas + d3.othergas + d4.othergas + d5.othergas)
                    _A4.push(d1.otherpetroleumproducts + d2.otherpetroleumproducts + d3.otherpetroleumproducts + d4.otherpetroleumproducts + d5.otherpetroleumproducts)
                    _A4.push(d1.paraffin + d2.paraffin + d3.paraffin + d4.paraffin + d5.paraffin)
                    _A4.push(d1.refinerydrygas + d2.refinerydrygas + d3.refinerydrygas + d4.refinerydrygas + d5.refinerydrygas)
                    _A4.push(d1.solventoil + d2.solventoil + d3.solventoil + d4.solventoil + d5.solventoil)
                    _A4.push(d1.tffId + d2.tffId + d3.tffId + d3.tffId + d4.tffId + d5.tffId)
                    _A4.push(d1.washthecleancoal + d2.washthecleancoal + d3.washthecleancoal + d4.washthecleancoal + d5.washthecleancoal)


                    var a11 = Alldata.aEquipment1
                    var a22 = Alldata.aEquipment2
                    var a33 = Alldata.aEquipment3


                    _A5.push(a11.anthracite + a22.anthracite + a33.anthracite)
                    _A5.push(a11.asphalt + a22.asphalt + a33.asphalt)
                    _A5.push(a11.bituminouscoal + a22.bituminouscoal + a33.bituminouscoal)
                    _A5.push(a11.blastfurnacegas + a22.blastfurnacegas + a33.blastfurnacegas)
                    _A5.push(a11.briquette + a22.briquette + a33.briquette)
                    _A5.push(a11.catelogId + a22.catelogId + a33.catelogId)
                    _A5.push(a11.coalgangue + a22.coalgangue + a33.coalgangue)
                    _A5.push(a11.coke + a22.coke + a33.coke)
                    _A5.push(a11.cokeovengas + a22.cokeovengas + a33.cokeovengas)
                    _A5.push(a11.crudeoil + a22.crudeoil + a33.crudeoil)
                    _A5.push(a11.diesel + a22.diesel + a33.diesel)
                    _A5.push(a11.fueloil + a22.fueloil + a33.fueloil)
                    _A5.push(a11.gasoline + a22.gasoline + a33.gasoline)
                    _A5.push(a11.kerosene + a22.kerosene + a33.kerosene)
                    _A5.push(a11.lignite + a22.lignite + a33.lignite)
                    _A5.push(a11.liquefiedpetroleumgas + a22.liquefiedpetroleumgas + a33.liquefiedpetroleumgas)
                    _A5.push(a11.liquifiednaturalgas + a22.liquifiednaturalgas + a33.liquifiednaturalgas)
                    _A5.push(a11.lubricatingoil + a22.lubricatingoil + a33.lubricatingoil)
                    _A5.push(a11.naphtha + a22.naphtha + a33.naphtha)
                    _A5.push(a11.naturalgas + a22.naturalgas + a33.naturalgas)
                    _A5.push(a11.oilcoke + a22.oilcoke + a33.oilcoke)
                    _A5.push(a11.onvertergas + a22.onvertergas + a33.onvertergas)
                    _A5.push(a11.other + a22.other + a33.other)
                    _A5.push(a11.othercoalwashing + a22.othercoalwashing + a33.othercoalwashing)
                    _A5.push(a11.othercokingproducts + a22.othercokingproducts + a33.othercokingproducts)
                    _A5.push(a11.othergas + a22.othergas + a33.othergas)
                    _A5.push(a11.otherpetroleumproducts + a22.otherpetroleumproducts + a33.otherpetroleumproducts)
                    _A5.push(a11.paraffin + a22.paraffin + a33.paraffin)
                    _A5.push(a11.refinerydrygas + a22.refinerydrygas + a33.refinerydrygas)
                    _A5.push(a11.solventoil + a22.solventoil + a33.solventoil)
                    _A5.push(a11.tffId + a22.tffId + a33.tffId)
                    _A5.push(a11.washthecleancoal + a22.washthecleancoal + a33.washthecleancoal)


                    var b11 = Alldata.bEquipment1
                    var b22 = Alldata.bEquipment2
                    var b33 = Alldata.bEquipment3


                    _A6.push(b11.anthracite + b22.anthracite + b33.anthracite)
                    _A6.push(b11.asphalt + b22.asphalt + b33.asphalt)
                    _A6.push(b11.bituminouscoal + b22.bituminouscoal + b33.bituminouscoal)
                    _A6.push(b11.blastfurnacegas + b22.blastfurnacegas + b33.blastfurnacegas)
                    _A6.push(b11.briquette + b22.briquette + b33.briquette)
                    _A6.push(b11.catelogId + b22.catelogId + b33.catelogId)
                    _A6.push(b11.coalgangue + b22.coalgangue + b33.coalgangue)
                    _A6.push(b11.coke + b22.coke + b33.coke)
                    _A6.push(b11.cokeovengas + b22.cokeovengas + b33.cokeovengas)
                    _A6.push(b11.crudeoil + b22.crudeoil + b33.crudeoil)
                    _A6.push(b11.diesel + b22.diesel + b33.diesel)
                    _A6.push(b11.fueloil + b22.fueloil + b33.fueloil)
                    _A6.push(b11.gasoline + b22.gasoline + b33.gasoline)
                    _A6.push(b11.kerosene + b22.kerosene + b33.kerosene)
                    _A6.push(b11.lignite + b22.lignite + b33.lignite)
                    _A6.push(b11.liquefiedpetroleumgas + b22.liquefiedpetroleumgas + b33.liquefiedpetroleumgas)
                    _A6.push(b11.liquifiednaturalgas + b22.liquifiednaturalgas + b33.liquifiednaturalgas)
                    _A6.push(b11.lubricatingoil + b22.lubricatingoil + b33.lubricatingoil)
                    _A6.push(b11.naphtha + b22.naphtha + b33.naphtha)
                    _A6.push(b11.naturalgas + b22.naturalgas + b33.naturalgas)
                    _A6.push(b11.oilcoke + b22.oilcoke + b33.oilcoke)
                    _A6.push(b11.onvertergas + b22.onvertergas + b33.onvertergas)
                    _A6.push(b11.other + b22.other + b33.other)
                    _A6.push(b11.othercoalwashing + b22.othercoalwashing + b33.othercoalwashing)
                    _A6.push(b11.othercokingproducts + b22.othercokingproducts + b33.othercokingproducts)
                    _A6.push(b11.othergas + b22.othergas + b33.othergas)
                    _A6.push(b11.otherpetroleumproducts + b22.otherpetroleumproducts + b33.otherpetroleumproducts)
                    _A6.push(b11.paraffin + b22.paraffin + b33.paraffin)
                    _A6.push(b11.refinerydrygas + b22.refinerydrygas + b33.refinerydrygas)
                    _A6.push(b11.solventoil + b22.solventoil + b33.solventoil)
                    _A6.push(b11.tffId + b22.tffId + b33.tffId)
                    _A6.push(b11.washthecleancoal + b22.washthecleancoal + b33.washthecleancoal)

                    var c11 = Alldata.cEquipment1
                    var c22 = Alldata.cEquipment2
                    var c33 = Alldata.cEquipment3


                    _A7.push(c11.anthracite + c22.anthracite + c33.anthracite)
                    _A7.push(c11.asphalt + c22.asphalt + c33.asphalt)
                    _A7.push(c11.bituminouscoal + c22.bituminouscoal + c33.bituminouscoal)
                    _A7.push(c11.blastfurnacegas + c22.blastfurnacegas + c33.blastfurnacegas)
                    _A7.push(c11.briquette + c22.briquette + c33.briquette)
                    _A7.push(c11.catelogId + c22.catelogId + c33.catelogId)
                    _A7.push(c11.coalgangue + c22.coalgangue + c33.coalgangue)
                    _A7.push(c11.coke + c22.coke + c33.coke)
                    _A7.push(c11.cokeovengas + c22.cokeovengas + c33.cokeovengas)
                    _A7.push(c11.crudeoil + c22.crudeoil + c33.crudeoil)
                    _A7.push(c11.diesel + c22.diesel + c33.diesel)
                    _A7.push(c11.fueloil + c22.fueloil + c33.fueloil)
                    _A7.push(c11.gasoline + c22.gasoline + c33.gasoline)
                    _A7.push(c11.kerosene + c22.kerosene + c33.kerosene)
                    _A7.push(c11.lignite + c22.lignite + c33.lignite)
                    _A7.push(c11.liquefiedpetroleumgas + c22.liquefiedpetroleumgas + c33.liquefiedpetroleumgas)
                    _A7.push(c11.liquifiednaturalgas + c22.liquifiednaturalgas + c33.liquifiednaturalgas)
                    _A7.push(c11.lubricatingoil + c22.lubricatingoil + c33.lubricatingoil)
                    _A7.push(c11.naphtha + c22.naphtha + c33.naphtha)
                    _A7.push(c11.naturalgas + c22.naturalgas + c33.naturalgas)
                    _A7.push(c11.oilcoke + c22.oilcoke + c33.oilcoke)
                    _A7.push(c11.onvertergas + c22.onvertergas + c33.onvertergas)
                    _A7.push(c11.other + c22.other + c33.other)
                    _A7.push(c11.othercoalwashing + c22.othercoalwashing + c33.othercoalwashing)
                    _A7.push(c11.othercokingproducts + c22.othercokingproducts + c33.othercokingproducts)
                    _A7.push(c11.othergas + c22.othergas + c33.othergas)
                    _A7.push(c11.otherpetroleumproducts + c22.otherpetroleumproducts + c33.otherpetroleumproducts)
                    _A7.push(c11.paraffin + c22.paraffin + c33.paraffin)
                    _A7.push(c11.refinerydrygas + c22.refinerydrygas + c33.refinerydrygas)
                    _A7.push(c11.solventoil + c22.solventoil + c33.solventoil)
                    _A7.push(c11.tffId + c22.tffId + c33.tffId)
                    _A7.push(c11.washthecleancoal + c22.washthecleancoal + c33.washthecleancoal)


                    for (var i = 0; i < _A7.length; i++) {
                        _A8.push(_A5[i] + _A6[i] + _A7[i])
                    }


                    var d11 = Alldata.cIPowerGenerationBoilers
                    var d22 = Alldata.cIIndustrialBoilers
                    var d33 = Alldata.cIOtherEquipment


                    _A9.push(d11.anthracite + d22.anthracite + d33.anthracite)
                    _A9.push(d11.asphalt + d22.asphalt + d33.asphalt)
                    _A9.push(d11.bituminouscoal + d22.bituminouscoal + d33.bituminouscoal)
                    _A9.push(d11.blastfurnacegas + d22.blastfurnacegas + d33.blastfurnacegas)
                    _A9.push(d11.briquette + d22.briquette + d33.briquette)
                    _A9.push(d11.catelogId + d22.catelogId + d33.catelogId)
                    _A9.push(d11.coalgangue + d22.coalgangue + d33.coalgangue)
                    _A9.push(d11.coke + d22.coke + d33.coke)
                    _A9.push(d11.cokeovengas + d22.cokeovengas + d33.cokeovengas)
                    _A9.push(d11.crudeoil + d22.crudeoil + d33.crudeoil)
                    _A9.push(d11.diesel + d22.diesel + d33.diesel)
                    _A9.push(d11.fueloil + d22.fueloil + d33.fueloil)
                    _A9.push(d11.gasoline + d22.gasoline + d33.gasoline)
                    _A9.push(d11.kerosene + d22.kerosene + d33.kerosene)
                    _A9.push(d11.lignite + d22.lignite + d33.lignite)
                    _A9.push(d11.liquefiedpetroleumgas + d22.liquefiedpetroleumgas + d33.liquefiedpetroleumgas)
                    _A9.push(d11.liquifiednaturalgas + d22.liquifiednaturalgas + d33.liquifiednaturalgas)
                    _A9.push(d11.lubricatingoil + d22.lubricatingoil + d33.lubricatingoil)
                    _A9.push(d11.naphtha + d22.naphtha + d33.naphtha)
                    _A9.push(d11.naturalgas + d22.naturalgas + d33.naturalgas)
                    _A9.push(d11.oilcoke + d22.oilcoke + d33.oilcoke)
                    _A9.push(d11.onvertergas + d22.onvertergas + d33.onvertergas)
                    _A9.push(d11.other + d22.other + d33.other)
                    _A9.push(d11.othercoalwashing + d22.othercoalwashing + d33.othercoalwashing)
                    _A9.push(d11.othercokingproducts + d22.othercokingproducts + d33.othercokingproducts)
                    _A9.push(d11.othergas + d22.othergas + d33.othergas)
                    _A9.push(d11.otherpetroleumproducts + d22.otherpetroleumproducts + d33.otherpetroleumproducts)
                    _A9.push(d11.paraffin + d22.paraffin + d33.paraffin)
                    _A9.push(d11.refinerydrygas + d22.refinerydrygas + d33.refinerydrygas)
                    _A9.push(d11.solventoil + d22.solventoil + d33.solventoil)
                    _A9.push(d11.tffId + d22.tffId + d33.tffId)
                    _A9.push(d11.washthecleancoal + d22.washthecleancoal + d33.washthecleancoal)


                    for (var i = 0; i < _A9.length; i++) {
                        _A10.push(_A1[i] + _A2[i] + _A3[i] + _A4[i] + _A8[i] + _A9[i])
                    }


                    for (var i = 0; i < 39; i++) {

                        if (i == 0) {

                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _A10[0].toFixed(2),
                                asphalt: _A10[1].toFixed(2),
                                bituminouscoal: _A10[2].toFixed(2),
                                blastfurnacegas: _A10[3].toFixed(2),

                                briquette: _A10[4].toFixed(2),
                                catelogId: _A10[5].toFixed(2),
                                coalgangue: _A10[6].toFixed(2),
                                coke: _A10[7].toFixed(2),
                                cokeovengas: _A10[8].toFixed(2),
                                crudeoil: _A10[9].toFixed(2),
                                diesel: _A10[10].toFixed(2),
                                fueloil: _A10[11].toFixed(2),
                                gasoline: _A10[12].toFixed(2),
                                kerosene: _A10[13].toFixed(2),
                                lignite: _A10[14].toFixed(2),
                                liquefiedpetroleumgas: _A10[15].toFixed(2),
                                liquifiednaturalgas: _A10[16].toFixed(2),
                                lubricatingoil: _A10[17].toFixed(2),
                                naphtha: _A10[18].toFixed(2),
                                naturalgas: _A10[19].toFixed(2),
                                oilcoke: _A10[20].toFixed(2),
                                onvertergas: _A10[21].toFixed(2),
                                other: _A10[22].toFixed(2),
                                othercoalwashing: _A10[23].toFixed(2),
                                othercokingproducts: _A10[24].toFixed(2),
                                othergas: _A10[25].toFixed(2),
                                otherpetroleumproducts: _A10[26].toFixed(2),
                                paraffin: _A10[27].toFixed(2),
                                refinerydrygas: _A10[28].toFixed(2),
                                solventoil: _A10[29].toFixed(2),
                                tffId: _A10[30].toFixed(2),
                                washthecleancoal: _A10[31].toFixed(2),

                            });

                        } else if (i == 35) {

                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _A9[0].toFixed(2),
                                asphalt: _A9[1].toFixed(2),
                                bituminouscoal: _A9[2].toFixed(2),
                                blastfurnacegas: _A9[3].toFixed(2),

                                briquette: _A9[4].toFixed(2),
                                catelogId: _A9[5].toFixed(2),
                                coalgangue: _A9[6].toFixed(2),
                                coke: _A9[7].toFixed(2),
                                cokeovengas: _A9[8].toFixed(2),
                                crudeoil: _A9[9].toFixed(2),
                                diesel: _A9[10].toFixed(2),
                                fueloil: _A9[11].toFixed(2),
                                gasoline: _A9[12].toFixed(2),
                                kerosene: _A9[13].toFixed(2),
                                lignite: _A9[14].toFixed(2),
                                liquefiedpetroleumgas: _A9[15].toFixed(2),
                                liquifiednaturalgas: _A9[16].toFixed(2),
                                lubricatingoil: _A9[17].toFixed(2),
                                naphtha: _A9[18].toFixed(2),
                                naturalgas: _A9[19].toFixed(2),
                                oilcoke: _A9[20].toFixed(2),
                                onvertergas: _A9[21].toFixed(2),
                                other: _A9[22].toFixed(2),
                                othercoalwashing: _A9[23].toFixed(2),
                                othercokingproducts: _A9[24].toFixed(2),
                                othergas: _A9[25].toFixed(2),
                                otherpetroleumproducts: _A9[26].toFixed(2),
                                paraffin: _A9[27].toFixed(2),
                                refinerydrygas: _A9[28].toFixed(2),
                                solventoil: _A9[29].toFixed(2),
                                tffId: _A9[30].toFixed(2),
                                washthecleancoal: _A9[31].toFixed(2),

                            });

                        } else if (i == 22) {

                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _A8[0].toFixed(2),
                                asphalt: _A8[1].toFixed(2),
                                bituminouscoal: _A8[2].toFixed(2),
                                blastfurnacegas: _A8[3].toFixed(2),

                                briquette: _A8[4].toFixed(2),
                                catelogId: _A8[5].toFixed(2),
                                coalgangue: _A8[6].toFixed(2),
                                coke: _A8[7].toFixed(2),
                                cokeovengas: _A8[8].toFixed(2),
                                crudeoil: _A8[9].toFixed(2),
                                diesel: _A8[10].toFixed(2),
                                fueloil: _A8[11].toFixed(2),
                                gasoline: _A8[12].toFixed(2),
                                kerosene: _A8[13].toFixed(2),
                                lignite: _A8[14].toFixed(2),
                                liquefiedpetroleumgas: _A8[15].toFixed(2),
                                liquifiednaturalgas: _A8[16].toFixed(2),
                                lubricatingoil: _A8[17].toFixed(2),
                                naphtha: _A8[18].toFixed(2),
                                naturalgas: _A8[19].toFixed(2),
                                oilcoke: _A8[20].toFixed(2),
                                onvertergas: _A8[21].toFixed(2),
                                other: _A8[22].toFixed(2),
                                othercoalwashing: _A8[23].toFixed(2),
                                othercokingproducts: _A8[24].toFixed(2),
                                othergas: _A8[25].toFixed(2),
                                otherpetroleumproducts: _A8[26].toFixed(2),
                                paraffin: _A8[27].toFixed(2),
                                refinerydrygas: _A8[28].toFixed(2),
                                solventoil: _A8[29].toFixed(2),
                                tffId: _A8[30].toFixed(2),
                                washthecleancoal: _A8[31].toFixed(2),

                            });

                        } else if (i == 31) {

                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _A7[0].toFixed(2),
                                asphalt: _A7[1].toFixed(2),
                                bituminouscoal: _A7[2].toFixed(2),
                                blastfurnacegas: _A7[3].toFixed(2),

                                briquette: _A7[4].toFixed(2),
                                catelogId: _A7[5].toFixed(2),
                                coalgangue: _A7[6].toFixed(2),
                                coke: _A7[7].toFixed(2),
                                cokeovengas: _A7[8].toFixed(2),
                                crudeoil: _A7[9].toFixed(2),
                                diesel: _A7[10].toFixed(2),
                                fueloil: _A7[11].toFixed(2),
                                gasoline: _A7[12].toFixed(2),
                                kerosene: _A7[13].toFixed(2),
                                lignite: _A7[14].toFixed(2),
                                liquefiedpetroleumgas: _A7[15].toFixed(2),
                                liquifiednaturalgas: _A7[16].toFixed(2),
                                lubricatingoil: _A7[17].toFixed(2),
                                naphtha: _A7[18].toFixed(2),
                                naturalgas: _A7[19].toFixed(2),
                                oilcoke: _A7[20].toFixed(2),
                                onvertergas: _A7[21].toFixed(2),
                                other: _A7[22].toFixed(2),
                                othercoalwashing: _A7[23].toFixed(2),
                                othercokingproducts: _A7[24].toFixed(2),
                                othergas: _A7[25].toFixed(2),
                                otherpetroleumproducts: _A7[26].toFixed(2),
                                paraffin: _A7[27].toFixed(2),
                                refinerydrygas: _A7[28].toFixed(2),
                                solventoil: _A7[29].toFixed(2),
                                tffId: _A7[30].toFixed(2),
                                washthecleancoal: _A7[31].toFixed(2),

                            });

                        } else if (i == 27) {

                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _A6[0].toFixed(2),
                                asphalt: _A6[1].toFixed(2),
                                bituminouscoal: _A6[2].toFixed(2),
                                blastfurnacegas: _A6[3].toFixed(2),

                                briquette: _A6[4].toFixed(2),
                                catelogId: _A6[5].toFixed(2),
                                coalgangue: _A6[6].toFixed(2),
                                coke: _A6[7].toFixed(2),
                                cokeovengas: _A6[8].toFixed(2),
                                crudeoil: _A6[9].toFixed(2),
                                diesel: _A6[10].toFixed(2),
                                fueloil: _A6[11].toFixed(2),
                                gasoline: _A6[12].toFixed(2),
                                kerosene: _A6[13].toFixed(2),
                                lignite: _A6[14].toFixed(2),
                                liquefiedpetroleumgas: _A6[15].toFixed(2),
                                liquifiednaturalgas: _A6[16].toFixed(2),
                                lubricatingoil: _A6[17].toFixed(2),
                                naphtha: _A6[18].toFixed(2),
                                naturalgas: _A6[19].toFixed(2),
                                oilcoke: _A6[20].toFixed(2),
                                onvertergas: _A6[21].toFixed(2),
                                other: _A6[22].toFixed(2),
                                othercoalwashing: _A6[23].toFixed(2),
                                othercokingproducts: _A6[24].toFixed(2),
                                othergas: _A6[25].toFixed(2),
                                otherpetroleumproducts: _A6[26].toFixed(2),
                                paraffin: _A6[27].toFixed(2),
                                refinerydrygas: _A6[28].toFixed(2),
                                solventoil: _A6[29].toFixed(2),
                                tffId: _A6[30].toFixed(2),
                                washthecleancoal: _A6[31].toFixed(2),

                            });

                        } else if (i == 23) {

                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _A5[0].toFixed(2),
                                asphalt: _A5[1].toFixed(2),
                                bituminouscoal: _A5[2].toFixed(2),
                                blastfurnacegas: _A5[3].toFixed(2),

                                briquette: _A5[4].toFixed(2),
                                catelogId: _A5[5].toFixed(2),
                                coalgangue: _A5[6].toFixed(2),
                                coke: _A5[7].toFixed(2),
                                cokeovengas: _A5[8].toFixed(2),
                                crudeoil: _A5[9].toFixed(2),
                                diesel: _A5[10].toFixed(2),
                                fueloil: _A5[11].toFixed(2),
                                gasoline: _A5[12].toFixed(2),
                                kerosene: _A5[13].toFixed(2),
                                lignite: _A5[14].toFixed(2),
                                liquefiedpetroleumgas: _A5[15].toFixed(2),
                                liquifiednaturalgas: _A5[16].toFixed(2),
                                lubricatingoil: _A5[17].toFixed(2),
                                naphtha: _A5[18].toFixed(2),
                                naturalgas: _A5[19].toFixed(2),
                                oilcoke: _A5[20].toFixed(2),
                                onvertergas: _A5[21].toFixed(2),
                                other: _A5[22].toFixed(2),
                                othercoalwashing: _A5[23].toFixed(2),
                                othercokingproducts: _A5[24].toFixed(2),
                                othergas: _A5[25].toFixed(2),
                                otherpetroleumproducts: _A5[26].toFixed(2),
                                paraffin: _A5[27].toFixed(2),
                                refinerydrygas: _A5[28].toFixed(2),
                                solventoil: _A5[29].toFixed(2),
                                tffId: _A5[30].toFixed(2),
                                washthecleancoal: _A5[31].toFixed(2),

                            });

                        } else if (i == 16) {

                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _A4[0].toFixed(2),
                                asphalt: _A4[1].toFixed(2),
                                bituminouscoal: _A4[2].toFixed(2),
                                blastfurnacegas: _A4[3].toFixed(2),

                                briquette: _A4[4].toFixed(2),
                                catelogId: _A4[5].toFixed(2),
                                coalgangue: _A4[6].toFixed(2),
                                coke: _A4[7].toFixed(2),
                                cokeovengas: _A4[8].toFixed(2),
                                crudeoil: _A4[9].toFixed(2),
                                diesel: _A4[10].toFixed(2),
                                fueloil: _A4[11].toFixed(2),
                                gasoline: _A4[12].toFixed(2),
                                kerosene: _A4[13].toFixed(2),
                                lignite: _A4[14].toFixed(2),
                                liquefiedpetroleumgas: _A4[15].toFixed(2),
                                liquifiednaturalgas: _A4[16].toFixed(2),
                                lubricatingoil: _A4[17].toFixed(2),
                                naphtha: _A4[18].toFixed(2),
                                naturalgas: _A4[19].toFixed(2),
                                oilcoke: _A4[20].toFixed(2),
                                onvertergas: _A4[21].toFixed(2),
                                other: _A4[22].toFixed(2),
                                othercoalwashing: _A4[23].toFixed(2),
                                othercokingproducts: _A4[24].toFixed(2),
                                othergas: _A4[25].toFixed(2),
                                otherpetroleumproducts: _A4[26].toFixed(2),
                                paraffin: _A4[27].toFixed(2),
                                refinerydrygas: _A4[28].toFixed(2),
                                solventoil: _A4[29].toFixed(2),
                                tffId: _A4[30].toFixed(2),
                                washthecleancoal: _A4[31].toFixed(2),

                            });

                        } else if (i == 11) {

                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _A3[0].toFixed(2),
                                asphalt: _A3[1].toFixed(2),
                                bituminouscoal: _A3[2].toFixed(2),
                                blastfurnacegas: _A3[3].toFixed(2),

                                briquette: _A3[4].toFixed(2),
                                catelogId: _A3[5].toFixed(2),
                                coalgangue: _A3[6].toFixed(2),
                                coke: _A3[7].toFixed(2),
                                cokeovengas: _A3[8].toFixed(2),
                                crudeoil: _A3[9].toFixed(2),
                                diesel: _A3[10].toFixed(2),
                                fueloil: _A3[11].toFixed(2),
                                gasoline: _A3[12].toFixed(2),
                                kerosene: _A3[13].toFixed(2),
                                lignite: _A3[14].toFixed(2),
                                liquefiedpetroleumgas: _A3[15].toFixed(2),
                                liquifiednaturalgas: _A3[16].toFixed(2),
                                lubricatingoil: _A3[17].toFixed(2),
                                naphtha: _A3[18].toFixed(2),
                                naturalgas: _A3[19].toFixed(2),
                                oilcoke: _A3[20].toFixed(2),
                                onvertergas: _A3[21].toFixed(2),
                                other: _A3[22].toFixed(2),
                                othercoalwashing: _A3[23].toFixed(2),
                                othercokingproducts: _A3[24].toFixed(2),
                                othergas: _A3[25].toFixed(2),
                                otherpetroleumproducts: _A3[26].toFixed(2),
                                paraffin: _A3[27].toFixed(2),
                                refinerydrygas: _A3[28].toFixed(2),
                                solventoil: _A3[29].toFixed(2),
                                tffId: _A3[30].toFixed(2),
                                washthecleancoal: _A3[31].toFixed(2),

                            });

                        } else if (i == 6) {

                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _A2[0].toFixed(2),
                                asphalt: _A2[1].toFixed(2),
                                bituminouscoal: _A2[2].toFixed(2),
                                blastfurnacegas: _A2[3].toFixed(2),

                                briquette: _A2[4].toFixed(2),
                                catelogId: _A2[5].toFixed(2),
                                coalgangue: _A2[6].toFixed(2),
                                coke: _A2[7].toFixed(2),
                                cokeovengas: _A2[8].toFixed(2),
                                crudeoil: _A2[9].toFixed(2),
                                diesel: _A2[10].toFixed(2),
                                fueloil: _A2[11].toFixed(2),
                                gasoline: _A2[12].toFixed(2),
                                kerosene: _A2[13].toFixed(2),
                                lignite: _A2[14].toFixed(2),
                                liquefiedpetroleumgas: _A2[15].toFixed(2),
                                liquifiednaturalgas: _A2[16].toFixed(2),
                                lubricatingoil: _A2[17].toFixed(2),
                                naphtha: _A2[18].toFixed(2),
                                naturalgas: _A2[19].toFixed(2),
                                oilcoke: _A2[20].toFixed(2),
                                onvertergas: _A2[21].toFixed(2),
                                other: _A2[22].toFixed(2),
                                othercoalwashing: _A2[23].toFixed(2),
                                othercokingproducts: _A2[24].toFixed(2),
                                othergas: _A2[25].toFixed(2),
                                otherpetroleumproducts: _A2[26].toFixed(2),
                                paraffin: _A2[27].toFixed(2),
                                refinerydrygas: _A2[28].toFixed(2),
                                solventoil: _A2[29].toFixed(2),
                                tffId: _A2[30].toFixed(2),
                                washthecleancoal: _A2[31].toFixed(2),

                            });

                        } else if (i == 1) {

                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _A1[0].toFixed(2),
                                asphalt: _A1[1].toFixed(2),
                                bituminouscoal: _A1[2].toFixed(2),
                                blastfurnacegas: _A1[3].toFixed(2),

                                briquette: _A1[4].toFixed(2),
                                catelogId: _A1[5].toFixed(2),
                                coalgangue: _A1[6].toFixed(2),
                                coke: _A1[7].toFixed(2),
                                cokeovengas: _A1[8].toFixed(2),
                                crudeoil: _A1[9].toFixed(2),
                                diesel: _A1[10].toFixed(2),
                                fueloil: _A1[11].toFixed(2),
                                gasoline: _A1[12].toFixed(2),
                                kerosene: _A1[13].toFixed(2),
                                lignite: _A1[14].toFixed(2),
                                liquefiedpetroleumgas: _A1[15].toFixed(2),
                                liquifiednaturalgas: _A1[16].toFixed(2),
                                lubricatingoil: _A1[17].toFixed(2),
                                naphtha: _A1[18].toFixed(2),
                                naturalgas: _A1[19].toFixed(2),
                                oilcoke: _A1[20].toFixed(2),
                                onvertergas: _A1[21].toFixed(2),
                                other: _A1[22].toFixed(2),
                                othercoalwashing: _A1[23].toFixed(2),
                                othercokingproducts: _A1[24].toFixed(2),
                                othergas: _A1[25].toFixed(2),
                                otherpetroleumproducts: _A1[26].toFixed(2),
                                paraffin: _A1[27].toFixed(2),
                                refinerydrygas: _A1[28].toFixed(2),
                                solventoil: _A1[29].toFixed(2),
                                tffId: _A1[30].toFixed(2),
                                washthecleancoal: _A1[31].toFixed(2),

                            });

                        } else if (i > 6 && i < 11) {
                            var j = 3
                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _Data[i - j].anthracite,
                                asphalt: _Data[i - j].asphalt,
                                bituminouscoal: _Data[i - j].bituminouscoal,
                                blastfurnacegas: _Data[i - j].blastfurnacegas,
                                briquette: _Data[i - j].briquette,
                                catelogId: _Data[i - j].catelogId,
                                coalgangue: _Data[i - j].coalgangue,
                                coke: _Data[i - j].coke,
                                cokeovengas: _Data[i - j].cokeovengas,
                                crudeoil: _Data[i - j].crudeoil,
                                diesel: _Data[i - j].diesel,
                                fueloil: _Data[i - j].fueloil,
                                gasoline: _Data[i - j].gasoline,
                                kerosene: _Data[i - j].kerosene,
                                lignite: _Data[i - j].lignite,
                                liquefiedpetroleumgas: _Data[i - j].liquefiedpetroleumgas,
                                liquifiednaturalgas: _Data[i - j].liquifiednaturalgas,
                                lubricatingoil: _Data[i - j].lubricatingoil,
                                naphtha: _Data[i - j].naphtha,
                                naturalgas: _Data[i - j].naturalgas,
                                oilcoke: _Data[i - j].oilcoke,
                                onvertergas: _Data[i - j].onvertergas,
                                other: _Data[i - j].other,
                                othercoalwashing: _Data[i - j].othercoalwashing,
                                othercokingproducts: _Data[i - j].othercokingproducts,
                                othergas: _Data[i - j].othergas,
                                otherpetroleumproducts: _Data[i - j].otherpetroleumproducts,
                                paraffin: _Data[i - j].paraffin,
                                refinerydrygas: _Data[i - j].refinerydrygas,
                                solventoil: _Data[i - j].solventoil,
                                tffId: _Data[i - j].tffId,
                                washthecleancoal: _Data[i - j].washthecleancoal,

                            });

                        } else if (i > 11 && i < 16) {
                            var j = 4

                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _Data[i - j].anthracite,
                                asphalt: _Data[i - j].asphalt,
                                bituminouscoal: _Data[i - j].bituminouscoal,
                                blastfurnacegas: _Data[i - j].blastfurnacegas,
                                briquette: _Data[i - j].briquette,
                                catelogId: _Data[i - j].catelogId,
                                coalgangue: _Data[i - j].coalgangue,
                                coke: _Data[i - j].coke,
                                cokeovengas: _Data[i - j].cokeovengas,
                                crudeoil: _Data[i - j].crudeoil,
                                diesel: _Data[i - j].diesel,
                                fueloil: _Data[i - j].fueloil,
                                gasoline: _Data[i - j].gasoline,
                                kerosene: _Data[i - j].kerosene,
                                lignite: _Data[i - j].lignite,
                                liquefiedpetroleumgas: _Data[i - j].liquefiedpetroleumgas,
                                liquifiednaturalgas: _Data[i - j].liquifiednaturalgas,
                                lubricatingoil: _Data[i - j].lubricatingoil,
                                naphtha: _Data[i - j].naphtha,
                                naturalgas: _Data[i - j].naturalgas,
                                oilcoke: _Data[i - j].oilcoke,
                                onvertergas: _Data[i - j].onvertergas,
                                other: _Data[i - j].other,
                                othercoalwashing: _Data[i - j].othercoalwashing,
                                othercokingproducts: _Data[i - j].othercokingproducts,
                                othergas: _Data[i - j].othergas,
                                otherpetroleumproducts: _Data[i - j].otherpetroleumproducts,
                                paraffin: _Data[i - j].paraffin,
                                refinerydrygas: _Data[i - j].refinerydrygas,
                                solventoil: _Data[i - j].solventoil,
                                tffId: _Data[i - j].tffId,
                                washthecleancoal: _Data[i - j].washthecleancoal,

                            });

                        } else if (i > 16 && i < 22) {
                            var j = 5

                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _Data[i - j].anthracite,
                                asphalt: _Data[i - j].asphalt,
                                bituminouscoal: _Data[i - j].bituminouscoal,
                                blastfurnacegas: _Data[i - j].blastfurnacegas,
                                briquette: _Data[i - j].briquette,
                                catelogId: _Data[i - j].catelogId,
                                coalgangue: _Data[i - j].coalgangue,
                                coke: _Data[i - j].coke,
                                cokeovengas: _Data[i - j].cokeovengas,
                                crudeoil: _Data[i - j].crudeoil,
                                diesel: _Data[i - j].diesel,
                                fueloil: _Data[i - j].fueloil,
                                gasoline: _Data[i - j].gasoline,
                                kerosene: _Data[i - j].kerosene,
                                lignite: _Data[i - j].lignite,
                                liquefiedpetroleumgas: _Data[i - j].liquefiedpetroleumgas,
                                liquifiednaturalgas: _Data[i - j].liquifiednaturalgas,
                                lubricatingoil: _Data[i - j].lubricatingoil,
                                naphtha: _Data[i - j].naphtha,
                                naturalgas: _Data[i - j].naturalgas,
                                oilcoke: _Data[i - j].oilcoke,
                                onvertergas: _Data[i - j].onvertergas,
                                other: _Data[i - j].other,
                                othercoalwashing: _Data[i - j].othercoalwashing,
                                othercokingproducts: _Data[i - j].othercokingproducts,
                                othergas: _Data[i - j].othergas,
                                otherpetroleumproducts: _Data[i - j].otherpetroleumproducts,
                                paraffin: _Data[i - j].paraffin,
                                refinerydrygas: _Data[i - j].refinerydrygas,
                                solventoil: _Data[i - j].solventoil,
                                tffId: _Data[i - j].tffId,
                                washthecleancoal: _Data[i - j].washthecleancoal,

                            });

                        } else if (i > 23 && i < 27) {
                            var j = 7

                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _Data[i - j].anthracite,
                                asphalt: _Data[i - j].asphalt,
                                bituminouscoal: _Data[i - j].bituminouscoal,
                                blastfurnacegas: _Data[i - j].blastfurnacegas,
                                briquette: _Data[i - j].briquette,
                                catelogId: _Data[i - j].catelogId,
                                coalgangue: _Data[i - j].coalgangue,
                                coke: _Data[i - j].coke,
                                cokeovengas: _Data[i - j].cokeovengas,
                                crudeoil: _Data[i - j].crudeoil,
                                diesel: _Data[i - j].diesel,
                                fueloil: _Data[i - j].fueloil,
                                gasoline: _Data[i - j].gasoline,
                                kerosene: _Data[i - j].kerosene,
                                lignite: _Data[i - j].lignite,
                                liquefiedpetroleumgas: _Data[i - j].liquefiedpetroleumgas,
                                liquifiednaturalgas: _Data[i - j].liquifiednaturalgas,
                                lubricatingoil: _Data[i - j].lubricatingoil,
                                naphtha: _Data[i - j].naphtha,
                                naturalgas: _Data[i - j].naturalgas,
                                oilcoke: _Data[i - j].oilcoke,
                                onvertergas: _Data[i - j].onvertergas,
                                other: _Data[i - j].other,
                                othercoalwashing: _Data[i - j].othercoalwashing,
                                othercokingproducts: _Data[i - j].othercokingproducts,
                                othergas: _Data[i - j].othergas,
                                otherpetroleumproducts: _Data[i - j].otherpetroleumproducts,
                                paraffin: _Data[i - j].paraffin,
                                refinerydrygas: _Data[i - j].refinerydrygas,
                                solventoil: _Data[i - j].solventoil,
                                tffId: _Data[i - j].tffId,
                                washthecleancoal: _Data[i - j].washthecleancoal,

                            });

                        } else if (i > 27 && i < 31) {
                            var j = 8

                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _Data[i - j].anthracite,
                                asphalt: _Data[i - j].asphalt,
                                bituminouscoal: _Data[i - j].bituminouscoal,
                                blastfurnacegas: _Data[i - j].blastfurnacegas,
                                briquette: _Data[i - j].briquette,
                                catelogId: _Data[i - j].catelogId,
                                coalgangue: _Data[i - j].coalgangue,
                                coke: _Data[i - j].coke,
                                cokeovengas: _Data[i - j].cokeovengas,
                                crudeoil: _Data[i - j].crudeoil,
                                diesel: _Data[i - j].diesel,
                                fueloil: _Data[i - j].fueloil,
                                gasoline: _Data[i - j].gasoline,
                                kerosene: _Data[i - j].kerosene,
                                lignite: _Data[i - j].lignite,
                                liquefiedpetroleumgas: _Data[i - j].liquefiedpetroleumgas,
                                liquifiednaturalgas: _Data[i - j].liquifiednaturalgas,
                                lubricatingoil: _Data[i - j].lubricatingoil,
                                naphtha: _Data[i - j].naphtha,
                                naturalgas: _Data[i - j].naturalgas,
                                oilcoke: _Data[i - j].oilcoke,
                                onvertergas: _Data[i - j].onvertergas,
                                other: _Data[i - j].other,
                                othercoalwashing: _Data[i - j].othercoalwashing,
                                othercokingproducts: _Data[i - j].othercokingproducts,
                                othergas: _Data[i - j].othergas,
                                otherpetroleumproducts: _Data[i - j].otherpetroleumproducts,
                                paraffin: _Data[i - j].paraffin,
                                refinerydrygas: _Data[i - j].refinerydrygas,
                                solventoil: _Data[i - j].solventoil,
                                tffId: _Data[i - j].tffId,
                                washthecleancoal: _Data[i - j].washthecleancoal,

                            });

                        } else if (i > 31 && i < 35) {
                            var j = 9

                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _Data[i - j].anthracite,
                                asphalt: _Data[i - j].asphalt,
                                bituminouscoal: _Data[i - j].bituminouscoal,
                                blastfurnacegas: _Data[i - j].blastfurnacegas,
                                briquette: _Data[i - j].briquette,
                                catelogId: _Data[i - j].catelogId,
                                coalgangue: _Data[i - j].coalgangue,
                                coke: _Data[i - j].coke,
                                cokeovengas: _Data[i - j].cokeovengas,
                                crudeoil: _Data[i - j].crudeoil,
                                diesel: _Data[i - j].diesel,
                                fueloil: _Data[i - j].fueloil,
                                gasoline: _Data[i - j].gasoline,
                                kerosene: _Data[i - j].kerosene,
                                lignite: _Data[i - j].lignite,
                                liquefiedpetroleumgas: _Data[i - j].liquefiedpetroleumgas,
                                liquifiednaturalgas: _Data[i - j].liquifiednaturalgas,
                                lubricatingoil: _Data[i - j].lubricatingoil,
                                naphtha: _Data[i - j].naphtha,
                                naturalgas: _Data[i - j].naturalgas,
                                oilcoke: _Data[i - j].oilcoke,
                                onvertergas: _Data[i - j].onvertergas,
                                other: _Data[i - j].other,
                                othercoalwashing: _Data[i - j].othercoalwashing,
                                othercokingproducts: _Data[i - j].othercokingproducts,
                                othergas: _Data[i - j].othergas,
                                otherpetroleumproducts: _Data[i - j].otherpetroleumproducts,
                                paraffin: _Data[i - j].paraffin,
                                refinerydrygas: _Data[i - j].refinerydrygas,
                                solventoil: _Data[i - j].solventoil,
                                tffId: _Data[i - j].tffId,
                                washthecleancoal: _Data[i - j].washthecleancoal,

                            });

                        } else if (i > 35 && i < 39) {
                            var j = 10

                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _Data[i - j].anthracite,
                                asphalt: _Data[i - j].asphalt,
                                bituminouscoal: _Data[i - j].bituminouscoal,
                                blastfurnacegas: _Data[i - j].blastfurnacegas,
                                briquette: _Data[i - j].briquette,
                                catelogId: _Data[i - j].catelogId,
                                coalgangue: _Data[i - j].coalgangue,
                                coke: _Data[i - j].coke,
                                cokeovengas: _Data[i - j].cokeovengas,
                                crudeoil: _Data[i - j].crudeoil,
                                diesel: _Data[i - j].diesel,
                                fueloil: _Data[i - j].fueloil,
                                gasoline: _Data[i - j].gasoline,
                                kerosene: _Data[i - j].kerosene,
                                lignite: _Data[i - j].lignite,
                                liquefiedpetroleumgas: _Data[i - j].liquefiedpetroleumgas,
                                liquifiednaturalgas: _Data[i - j].liquifiednaturalgas,
                                lubricatingoil: _Data[i - j].lubricatingoil,
                                naphtha: _Data[i - j].naphtha,
                                naturalgas: _Data[i - j].naturalgas,
                                oilcoke: _Data[i - j].oilcoke,
                                onvertergas: _Data[i - j].onvertergas,
                                other: _Data[i - j].other,
                                othercoalwashing: _Data[i - j].othercoalwashing,
                                othercokingproducts: _Data[i - j].othercokingproducts,
                                othergas: _Data[i - j].othergas,
                                otherpetroleumproducts: _Data[i - j].otherpetroleumproducts,
                                paraffin: _Data[i - j].paraffin,
                                refinerydrygas: _Data[i - j].refinerydrygas,
                                solventoil: _Data[i - j].solventoil,
                                tffId: _Data[i - j].tffId,
                                washthecleancoal: _Data[i - j].washthecleancoal,

                            });


                        } else {

                            var j = 2

                            _a.push({
                                key: i + 15,
                                name: fossilTitle[i],
                                anthracite: _Data[i - j].anthracite,
                                asphalt: _Data[i - j].asphalt,
                                bituminouscoal: _Data[i - j].bituminouscoal,
                                blastfurnacegas: _Data[i - j].blastfurnacegas,
                                briquette: _Data[i - j].briquette,
                                catelogId: _Data[i - j].catelogId,
                                coalgangue: _Data[i - j].coalgangue,
                                coke: _Data[i - j].coke,
                                cokeovengas: _Data[i - j].cokeovengas,
                                crudeoil: _Data[i - j].crudeoil,
                                diesel: _Data[i - j].diesel,
                                fueloil: _Data[i - j].fueloil,
                                gasoline: _Data[i - j].gasoline,
                                kerosene: _Data[i - j].kerosene,
                                lignite: _Data[i - j].lignite,
                                liquefiedpetroleumgas: _Data[i - j].liquefiedpetroleumgas,
                                liquifiednaturalgas: _Data[i - j].liquifiednaturalgas,
                                lubricatingoil: _Data[i - j].lubricatingoil,
                                naphtha: _Data[i - j].naphtha,
                                naturalgas: _Data[i - j].naturalgas,
                                oilcoke: _Data[i - j].oilcoke,
                                onvertergas: _Data[i - j].onvertergas,
                                other: _Data[i - j].other,
                                othercoalwashing: _Data[i - j].othercoalwashing,
                                othercokingproducts: _Data[i - j].othercokingproducts,
                                othergas: _Data[i - j].othergas,
                                otherpetroleumproducts: _Data[i - j].otherpetroleumproducts,
                                paraffin: _Data[i - j].paraffin,
                                refinerydrygas: _Data[i - j].refinerydrygas,
                                solventoil: _Data[i - j].solventoil,
                                tffId: _Data[i - j].tffId,
                                washthecleancoal: _Data[i - j].washthecleancoal,

                            });

                        }


                    }

                    //console.log(_a)

                    this.setState({Data2: Alldata});
                    this.setState({A2: _A10});


                    this.query3(_a, para, years);

                } else {
                    message.error('数据错误！');
                }
            });
    }

    //1.3
    query3(data, para, years) {

        post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/transportation/list', {
            year: years,
            para: para

        })
            .then((res) => {


                if (res.code == 0) {

                    var Alldata = res.data;


                    const _a = data;

                    const _A1 = [];
                    const _A2 = [];
                    const _A3 = [];
                    const _A4 = [];
                    const _A5 = [];
                    const _Data = [];


                    _Data.push(Alldata.tDomesticFlights);//1.3.1.1国内航班
                    _Data.push(Alldata.tHongKongAndMacaoFlights);//1.3.1.2港澳地区航班
                    _Data.push(Alldata.tInternationalFlights);//1.3.1.3国际航班

                    _Data.push(Alldata.highway);//1.3.2公路
                    _Data.push(Alldata.railway);//1.3.3铁路

                    _Data.push(Alldata.inlandRiverInternalCombustionEngine);//1.3.4.1内河近海内燃机
                    _Data.push(Alldata.internationalOceanInternalCombustionEngine);//1.3.4.2国际远洋内燃机


                    var a11 = Alldata.tDomesticFlights
                    var a22 = Alldata.tHongKongAndMacaoFlights


                    _A1.push(a11.anthracite + a22.anthracite)
                    _A1.push(a11.asphalt + a22.asphalt)
                    _A1.push(a11.bituminouscoal + a22.bituminouscoal)
                    _A1.push(a11.blastfurnacegas + a22.blastfurnacegas)
                    _A1.push(a11.briquette + a22.briquette)
                    _A1.push(a11.catelogId + a22.catelogId)
                    _A1.push(a11.coalgangue + a22.coalgangue)
                    _A1.push(a11.coke + a22.coke)
                    _A1.push(a11.cokeovengas + a22.cokeovengas)
                    _A1.push(a11.crudeoil + a22.crudeoil)
                    _A1.push(a11.diesel + a22.diesel)
                    _A1.push(a11.fueloil + a22.fueloil)
                    _A1.push(a11.gasoline + a22.gasoline)
                    _A1.push(a11.kerosene + a22.kerosene)
                    _A1.push(a11.lignite + a22.lignite)
                    _A1.push(a11.liquefiedpetroleumgas + a22.liquefiedpetroleumgas)
                    _A1.push(a11.liquifiednaturalgas + a22.liquifiednaturalgas)
                    _A1.push(a11.lubricatingoil + a22.lubricatingoil)
                    _A1.push(a11.naphtha + a22.naphtha)
                    _A1.push(a11.naturalgas + a22.naturalgas)
                    _A1.push(a11.oilcoke + a22.oilcoke)
                    _A1.push(a11.onvertergas + a22.onvertergas)
                    _A1.push(a11.other + a22.other)
                    _A1.push(a11.othercoalwashing + a22.othercoalwashing)
                    _A1.push(a11.othercokingproducts + a22.othercokingproducts)
                    _A1.push(a11.othergas + a22.othergas)
                    _A1.push(a11.otherpetroleumproducts + a22.otherpetroleumproducts)
                    _A1.push(a11.paraffin + a22.paraffin)
                    _A1.push(a11.refinerydrygas + a22.refinerydrygas)
                    _A1.push(a11.solventoil + a22.solventoil)
                    _A1.push(a11.tffId + a22.tffId)
                    _A1.push(a11.washthecleancoal + a22.washthecleancoal)


                    var b11 = Alldata.inlandRiverInternalCombustionEngine


                    _A2.push(b11.anthracite)
                    _A2.push(b11.asphalt)
                    _A2.push(b11.bituminouscoal)
                    _A2.push(b11.blastfurnacegas)
                    _A2.push(b11.briquette)
                    _A2.push(b11.catelogId)
                    _A2.push(b11.coalgangue)
                    _A2.push(b11.coke)
                    _A2.push(b11.cokeovengas)
                    _A2.push(b11.crudeoil)
                    _A2.push(b11.diesel)
                    _A2.push(b11.fueloil)
                    _A2.push(b11.gasoline)
                    _A2.push(b11.kerosene)
                    _A2.push(b11.lignite)
                    _A2.push(b11.liquefiedpetroleumgas)
                    _A2.push(b11.liquifiednaturalgas)
                    _A2.push(b11.lubricatingoil)
                    _A2.push(b11.naphtha)
                    _A2.push(b11.naturalgas)
                    _A2.push(b11.oilcoke)
                    _A2.push(b11.onvertergas)
                    _A2.push(b11.other)
                    _A2.push(b11.othercoalwashing)
                    _A2.push(b11.othercokingproducts)
                    _A2.push(b11.othergas)
                    _A2.push(b11.otherpetroleumproducts)
                    _A2.push(b11.paraffin)
                    _A2.push(b11.refinerydrygas)
                    _A2.push(b11.solventoil)
                    _A2.push(b11.tffId)
                    _A2.push(b11.washthecleancoal)


                    var c11 = Alldata.highway


                    _A3.push(c11.anthracite)
                    _A3.push(c11.asphalt)
                    _A3.push(c11.bituminouscoal)
                    _A3.push(c11.blastfurnacegas)
                    _A3.push(c11.briquette)
                    _A3.push(c11.catelogId)
                    _A3.push(c11.coalgangue)
                    _A3.push(c11.coke)
                    _A3.push(c11.cokeovengas)
                    _A3.push(c11.crudeoil)
                    _A3.push(c11.diesel)
                    _A3.push(c11.fueloil)
                    _A3.push(c11.gasoline)
                    _A3.push(c11.kerosene)
                    _A3.push(c11.lignite)
                    _A3.push(c11.liquefiedpetroleumgas)
                    _A3.push(c11.liquifiednaturalgas)
                    _A3.push(c11.lubricatingoil)
                    _A3.push(c11.naphtha)
                    _A3.push(c11.naturalgas)
                    _A3.push(c11.oilcoke)
                    _A3.push(c11.onvertergas)
                    _A3.push(c11.other)
                    _A3.push(c11.othercoalwashing)
                    _A3.push(c11.othercokingproducts)
                    _A3.push(c11.othergas)
                    _A3.push(c11.otherpetroleumproducts)
                    _A3.push(c11.paraffin)
                    _A3.push(c11.refinerydrygas)
                    _A3.push(c11.solventoil)
                    _A3.push(c11.tffId)
                    _A3.push(c11.washthecleancoal)


                    var d11 = Alldata.railway


                    _A4.push(d11.anthracite)
                    _A4.push(d11.asphalt)
                    _A4.push(d11.bituminouscoal)
                    _A4.push(d11.blastfurnacegas)
                    _A4.push(d11.briquette)
                    _A4.push(d11.catelogId)
                    _A4.push(d11.coalgangue)
                    _A4.push(d11.coke)
                    _A4.push(d11.cokeovengas)
                    _A4.push(d11.crudeoil)
                    _A4.push(d11.diesel)
                    _A4.push(d11.fueloil)
                    _A4.push(d11.gasoline)
                    _A4.push(d11.kerosene)
                    _A4.push(d11.lignite)
                    _A4.push(d11.liquefiedpetroleumgas)
                    _A4.push(d11.liquifiednaturalgas)
                    _A4.push(d11.lubricatingoil)
                    _A4.push(d11.naphtha)
                    _A4.push(d11.naturalgas)
                    _A4.push(d11.oilcoke)
                    _A4.push(d11.onvertergas)
                    _A4.push(d11.other)
                    _A4.push(d11.othercoalwashing)
                    _A4.push(d11.othercokingproducts)
                    _A4.push(d11.othergas)
                    _A4.push(d11.otherpetroleumproducts)
                    _A4.push(d11.paraffin)
                    _A4.push(d11.refinerydrygas)
                    _A4.push(d11.solventoil)
                    _A4.push(d11.tffId)
                    _A4.push(d11.washthecleancoal)


                    for (var i = 0; i < _A4.length; i++) {
                        _A5.push(_A1[i] + _A2[i] + _A3[i] + _A4[i])
                    }


                    const fossilTitle = [

                        '　　1.3交通运输',
                        '　　　　1.3.1航空',
                        '　　　　　　1.3.1.1国内航班',
                        '　　　　　　1.3.1.2港澳地区航班',
                        '　　　　　　1.3.1.3国际航班',
                        '　　　　1.3.2公路',
                        '　　　　1.3.3铁路',
                        '　　　　1.3.4水运',
                        '　　　　　　1.3.4.1内河近海内燃机',
                        '　　　　　　1.3.4.2国际远洋内燃机',
                        '　　1.4服务业及其他',
                        '　　1.5居民生活',
                        '　　1.6农、林、牧、渔业',

                    ]


                    for (var i = 0; i < 10; i++) {

                        if (i == 0) {
                            _a.push({
                                key: i + 54,
                                name: fossilTitle[i],
                                anthracite: _A5[0].toFixed(2),
                                asphalt: _A5[1].toFixed(2),
                                bituminouscoal: _A5[2].toFixed(2),
                                blastfurnacegas: _A5[3].toFixed(2),

                                briquette: _A5[4].toFixed(2),
                                catelogId: _A5[5],
                                coalgangue: _A5[6].toFixed(2),
                                coke: _A5[7].toFixed(2),
                                cokeovengas: _A5[8].toFixed(2),
                                crudeoil: _A5[9].toFixed(2),
                                diesel: _A5[10].toFixed(2),
                                fueloil: _A5[11].toFixed(2),
                                gasoline: _A5[12].toFixed(2),
                                kerosene: _A5[13].toFixed(2),
                                lignite: _A5[14].toFixed(2),
                                liquefiedpetroleumgas: _A5[15].toFixed(2),
                                liquifiednaturalgas: _A5[16].toFixed(2),
                                lubricatingoil: _A5[17].toFixed(2),
                                naphtha: _A5[18].toFixed(2),
                                naturalgas: _A5[19].toFixed(2),
                                oilcoke: _A5[20].toFixed(2),
                                onvertergas: _A5[21].toFixed(2),
                                other: _A5[22].toFixed(2),
                                othercoalwashing: _A5[23].toFixed(2),
                                othercokingproducts: _A5[24].toFixed(2),
                                othergas: _A5[25].toFixed(2),
                                otherpetroleumproducts: _A5[26].toFixed(2),
                                paraffin: _A5[27].toFixed(2),
                                refinerydrygas: _A5[28].toFixed(2),
                                solventoil: _A5[29].toFixed(2),
                                tffId: _A5[30],
                                washthecleancoal: _A5[31].toFixed(2),

                            });

                        } else if (i == 7) {

                            _a.push({
                                key: i + 54,
                                name: fossilTitle[i],
                                anthracite: _A2[0],
                                asphalt: _A2[1],
                                bituminouscoal: _A2[2],
                                blastfurnacegas: _A2[3],

                                briquette: _A2[4],
                                catelogId: _A2[5],
                                coalgangue: _A2[6],
                                coke: _A2[7],
                                cokeovengas: _A2[8],
                                crudeoil: _A2[9],
                                diesel: _A2[10],
                                fueloil: _A2[11],
                                gasoline: _A2[12],
                                kerosene: _A2[13],
                                lignite: _A2[14],
                                liquefiedpetroleumgas: _A2[15],
                                liquifiednaturalgas: _A2[16],
                                lubricatingoil: _A2[17],
                                naphtha: _A2[18],
                                naturalgas: _A2[19],
                                oilcoke: _A2[20],
                                onvertergas: _A2[21],
                                other: _A2[22],
                                othercoalwashing: _A2[23],
                                othercokingproducts: _A2[24],
                                othergas: _A2[25],
                                otherpetroleumproducts: _A2[26],
                                paraffin: _A2[27],
                                refinerydrygas: _A2[28],
                                solventoil: _A2[29],
                                tffId: _A2[30],
                                washthecleancoal: _A2[31],

                            });

                        } else if (i == 1) {

                            _a.push({
                                key: i + 54,
                                name: fossilTitle[i],
                                anthracite: _A1[0].toFixed(2),
                                asphalt: _A1[1].toFixed(2),
                                bituminouscoal: _A1[2].toFixed(2),
                                blastfurnacegas: _A1[3].toFixed(2),

                                briquette: _A1[4].toFixed(2),
                                catelogId: _A1[5].toFixed(2),
                                coalgangue: _A1[6].toFixed(2),
                                coke: _A1[7].toFixed(2),
                                cokeovengas: _A1[8].toFixed(2),
                                crudeoil: _A1[9].toFixed(2),
                                diesel: _A1[10].toFixed(2),
                                fueloil: _A1[11].toFixed(2),
                                gasoline: _A1[12].toFixed(2),
                                kerosene: _A1[13].toFixed(2),
                                lignite: _A1[14].toFixed(2),
                                liquefiedpetroleumgas: _A1[15].toFixed(2),
                                liquifiednaturalgas: _A1[16].toFixed(2),
                                lubricatingoil: _A1[17].toFixed(2),
                                naphtha: _A1[18].toFixed(2),
                                naturalgas: _A1[19].toFixed(2),
                                oilcoke: _A1[20].toFixed(2),
                                onvertergas: _A1[21].toFixed(2),
                                other: _A1[22].toFixed(2),
                                othercoalwashing: _A1[23].toFixed(2),
                                othercokingproducts: _A1[24].toFixed(2),
                                othergas: _A1[25].toFixed(2),
                                otherpetroleumproducts: _A1[26].toFixed(2),
                                paraffin: _A1[27].toFixed(2),
                                refinerydrygas: _A1[28].toFixed(2),
                                solventoil: _A1[29].toFixed(2),
                                tffId: _A1[30].toFixed(2),
                                washthecleancoal: _A1[31].toFixed(2),

                            });

                        } else if (i > 7) {
                            var j = 3
                            _a.push({
                                key: i + 54,
                                name: fossilTitle[i],
                                anthracite: _Data[i - j].anthracite,
                                asphalt: _Data[i - j].asphalt,
                                bituminouscoal: _Data[i - j].bituminouscoal,
                                blastfurnacegas: _Data[i - j].blastfurnacegas,
                                briquette: _Data[i - j].briquette,
                                catelogId: _Data[i - j].catelogId,
                                coalgangue: _Data[i - j].coalgangue,
                                coke: _Data[i - j].coke,
                                cokeovengas: _Data[i - j].cokeovengas,
                                crudeoil: _Data[i - j].crudeoil,
                                diesel: _Data[i - j].diesel,
                                fueloil: _Data[i - j].fueloil,
                                gasoline: _Data[i - j].gasoline,
                                kerosene: _Data[i - j].kerosene,
                                lignite: _Data[i - j].lignite,
                                liquefiedpetroleumgas: _Data[i - j].liquefiedpetroleumgas,
                                liquifiednaturalgas: _Data[i - j].liquifiednaturalgas,
                                lubricatingoil: _Data[i - j].lubricatingoil,
                                naphtha: _Data[i - j].naphtha,
                                naturalgas: _Data[i - j].naturalgas,
                                oilcoke: _Data[i - j].oilcoke,
                                onvertergas: _Data[i - j].onvertergas,
                                other: _Data[i - j].other,
                                othercoalwashing: _Data[i - j].othercoalwashing,
                                othercokingproducts: _Data[i - j].othercokingproducts,
                                othergas: _Data[i - j].othergas,
                                otherpetroleumproducts: _Data[i - j].otherpetroleumproducts,
                                paraffin: _Data[i - j].paraffin,
                                refinerydrygas: _Data[i - j].refinerydrygas,
                                solventoil: _Data[i - j].solventoil,
                                tffId: _Data[i - j].tffId,
                                washthecleancoal: _Data[i - j].washthecleancoal,

                            });

                        } else {

                            var j = 2

                            _a.push({
                                key: i + 54,
                                name: fossilTitle[i],
                                anthracite: _Data[i - j].anthracite,
                                asphalt: _Data[i - j].asphalt,
                                bituminouscoal: _Data[i - j].bituminouscoal,
                                blastfurnacegas: _Data[i - j].blastfurnacegas,
                                briquette: _Data[i - j].briquette,
                                catelogId: _Data[i - j].catelogId,
                                coalgangue: _Data[i - j].coalgangue,
                                coke: _Data[i - j].coke,
                                cokeovengas: _Data[i - j].cokeovengas,
                                crudeoil: _Data[i - j].crudeoil,
                                diesel: _Data[i - j].diesel,
                                fueloil: _Data[i - j].fueloil,
                                gasoline: _Data[i - j].gasoline,
                                kerosene: _Data[i - j].kerosene,
                                lignite: _Data[i - j].lignite,
                                liquefiedpetroleumgas: _Data[i - j].liquefiedpetroleumgas,
                                liquifiednaturalgas: _Data[i - j].liquifiednaturalgas,
                                lubricatingoil: _Data[i - j].lubricatingoil,
                                naphtha: _Data[i - j].naphtha,
                                naturalgas: _Data[i - j].naturalgas,
                                oilcoke: _Data[i - j].oilcoke,
                                onvertergas: _Data[i - j].onvertergas,
                                other: _Data[i - j].other,
                                othercoalwashing: _Data[i - j].othercoalwashing,
                                othercokingproducts: _Data[i - j].othercokingproducts,
                                othergas: _Data[i - j].othergas,
                                otherpetroleumproducts: _Data[i - j].otherpetroleumproducts,
                                paraffin: _Data[i - j].paraffin,
                                refinerydrygas: _Data[i - j].refinerydrygas,
                                solventoil: _Data[i - j].solventoil,
                                tffId: _Data[i - j].tffId,
                                washthecleancoal: _Data[i - j].washthecleancoal,

                            });

                        }


                    }

                    //console.log(_a);


                    this.setState({Data3: Alldata});
                    this.setState({A3: _A5});


                    this.query4(_a, para, years);

                } else {
                    message.error('数据错误！');
                }
            });
    }

    //1.4
    query4(data, para, years) {

        post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/servicesAndOthers/list', {
            year: years,
            para: para

        })
            .then((res) => {


                if (res.code == 0) {

                    var Alldata = res.data;

                    const _a = data;

                    const _Data = [];

                    _Data.push(Alldata.servicesAndOthers);//1.4服务业及其他


                    const fossilTitle = [


                        '　　1.4服务业及其他',
                        '　　1.5居民生活',
                        '　　1.6农、林、牧、渔业',

                    ]

                    var b11 = Alldata.servicesAndOthers


                    var _A2 = []


                    _A2.push(b11.anthracite)
                    _A2.push(b11.asphalt)
                    _A2.push(b11.bituminouscoal)
                    _A2.push(b11.blastfurnacegas)
                    _A2.push(b11.briquette)
                    _A2.push(b11.catelogId)
                    _A2.push(b11.coalgangue)
                    _A2.push(b11.coke)
                    _A2.push(b11.cokeovengas)
                    _A2.push(b11.crudeoil)
                    _A2.push(b11.diesel)
                    _A2.push(b11.fueloil)
                    _A2.push(b11.gasoline)
                    _A2.push(b11.kerosene)
                    _A2.push(b11.lignite)
                    _A2.push(b11.liquefiedpetroleumgas)
                    _A2.push(b11.liquifiednaturalgas)
                    _A2.push(b11.lubricatingoil)
                    _A2.push(b11.naphtha)
                    _A2.push(b11.naturalgas)
                    _A2.push(b11.oilcoke)
                    _A2.push(b11.onvertergas)
                    _A2.push(b11.other)
                    _A2.push(b11.othercoalwashing)
                    _A2.push(b11.othercokingproducts)
                    _A2.push(b11.othergas)
                    _A2.push(b11.otherpetroleumproducts)
                    _A2.push(b11.paraffin)
                    _A2.push(b11.refinerydrygas)
                    _A2.push(b11.solventoil)
                    _A2.push(b11.tffId)
                    _A2.push(b11.washthecleancoal)


                    for (var i = 0; i < 1; i++) {


                        var j = 0

                        _a.push({
                            key: i + 64,
                            name: fossilTitle[i],
                            anthracite: _Data[i - j].anthracite,
                            asphalt: _Data[i - j].asphalt,
                            bituminouscoal: _Data[i - j].bituminouscoal,
                            blastfurnacegas: _Data[i - j].blastfurnacegas,
                            briquette: _Data[i - j].briquette,
                            catelogId: _Data[i - j].catelogId,
                            coalgangue: _Data[i - j].coalgangue,
                            coke: _Data[i - j].coke,
                            cokeovengas: _Data[i - j].cokeovengas,
                            crudeoil: _Data[i - j].crudeoil,
                            diesel: _Data[i - j].diesel,
                            fueloil: _Data[i - j].fueloil,
                            gasoline: _Data[i - j].gasoline,
                            kerosene: _Data[i - j].kerosene,
                            lignite: _Data[i - j].lignite,
                            liquefiedpetroleumgas: _Data[i - j].liquefiedpetroleumgas,
                            liquifiednaturalgas: _Data[i - j].liquifiednaturalgas,
                            lubricatingoil: _Data[i - j].lubricatingoil,
                            naphtha: _Data[i - j].naphtha,
                            naturalgas: _Data[i - j].naturalgas,
                            oilcoke: _Data[i - j].oilcoke,
                            onvertergas: _Data[i - j].onvertergas,
                            other: _Data[i - j].other,
                            othercoalwashing: _Data[i - j].othercoalwashing,
                            othercokingproducts: _Data[i - j].othercokingproducts,
                            othergas: _Data[i - j].othergas,
                            otherpetroleumproducts: _Data[i - j].otherpetroleumproducts,
                            paraffin: _Data[i - j].paraffin,
                            refinerydrygas: _Data[i - j].refinerydrygas,
                            solventoil: _Data[i - j].solventoil,
                            tffId: _Data[i - j].tffId,
                            washthecleancoal: _Data[i - j].washthecleancoal,

                        });


                    }

                    //console.log(_a);

                    this.setState({AllData: _a});
                    this.setState({A4: _A2});

                    this.setState({Data4: Alldata})

                    this.query5(_a, para, years);

                } else {
                    message.error('数据错误！');
                }
            });
    }

    //1.5
    query5(data, para, years) {

        post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/residentsLiving/list', {
            year: years,
            para: para

        })
            .then((res) => {


                if (res.code == 0) {

                    var Alldata = res.data;


                    const _a = data;

                    const _Data = [];

                    _Data.push(Alldata.residentsLiving);//1.5居民生活

                    var b11 = Alldata.residentsLiving


                    var _A2 = []


                    _A2.push(b11.anthracite)
                    _A2.push(b11.asphalt)
                    _A2.push(b11.bituminouscoal)
                    _A2.push(b11.blastfurnacegas)
                    _A2.push(b11.briquette)
                    _A2.push(b11.catelogId)
                    _A2.push(b11.coalgangue)
                    _A2.push(b11.coke)
                    _A2.push(b11.cokeovengas)
                    _A2.push(b11.crudeoil)
                    _A2.push(b11.diesel)
                    _A2.push(b11.fueloil)
                    _A2.push(b11.gasoline)
                    _A2.push(b11.kerosene)
                    _A2.push(b11.lignite)
                    _A2.push(b11.liquefiedpetroleumgas)
                    _A2.push(b11.liquifiednaturalgas)
                    _A2.push(b11.lubricatingoil)
                    _A2.push(b11.naphtha)
                    _A2.push(b11.naturalgas)
                    _A2.push(b11.oilcoke)
                    _A2.push(b11.onvertergas)
                    _A2.push(b11.other)
                    _A2.push(b11.othercoalwashing)
                    _A2.push(b11.othercokingproducts)
                    _A2.push(b11.othergas)
                    _A2.push(b11.otherpetroleumproducts)
                    _A2.push(b11.paraffin)
                    _A2.push(b11.refinerydrygas)
                    _A2.push(b11.solventoil)
                    _A2.push(b11.tffId)
                    _A2.push(b11.washthecleancoal)


                    const fossilTitle = [


                        '　　1.5居民生活',
                        '　　1.6农、林、牧、渔业',

                    ]


                    for (var i = 0; i < 1; i++) {


                        var j = 0

                        _a.push({
                            key: i + 65,
                            name: fossilTitle[i],
                            anthracite: _Data[i - j].anthracite,
                            asphalt: _Data[i - j].asphalt,
                            bituminouscoal: _Data[i - j].bituminouscoal,
                            blastfurnacegas: _Data[i - j].blastfurnacegas,
                            briquette: _Data[i - j].briquette,
                            catelogId: _Data[i - j].catelogId,
                            coalgangue: _Data[i - j].coalgangue,
                            coke: _Data[i - j].coke,
                            cokeovengas: _Data[i - j].cokeovengas,
                            crudeoil: _Data[i - j].crudeoil,
                            diesel: _Data[i - j].diesel,
                            fueloil: _Data[i - j].fueloil,
                            gasoline: _Data[i - j].gasoline,
                            kerosene: _Data[i - j].kerosene,
                            lignite: _Data[i - j].lignite,
                            liquefiedpetroleumgas: _Data[i - j].liquefiedpetroleumgas,
                            liquifiednaturalgas: _Data[i - j].liquifiednaturalgas,
                            lubricatingoil: _Data[i - j].lubricatingoil,
                            naphtha: _Data[i - j].naphtha,
                            naturalgas: _Data[i - j].naturalgas,
                            oilcoke: _Data[i - j].oilcoke,
                            onvertergas: _Data[i - j].onvertergas,
                            other: _Data[i - j].other,
                            othercoalwashing: _Data[i - j].othercoalwashing,
                            othercokingproducts: _Data[i - j].othercokingproducts,
                            othergas: _Data[i - j].othergas,
                            otherpetroleumproducts: _Data[i - j].otherpetroleumproducts,
                            paraffin: _Data[i - j].paraffin,
                            refinerydrygas: _Data[i - j].refinerydrygas,
                            solventoil: _Data[i - j].solventoil,
                            tffId: _Data[i - j].tffId,
                            washthecleancoal: _Data[i - j].washthecleancoal,

                        });


                    }

                    //console.log(_a);

                    this.setState({AllData: _a});
                    this.setState({A5: _A2});

                    this.setState({Data5: Alldata})

                    this.query6(_a, para, years);

                } else {
                    message.error('数据错误！');
                }
            });
    }

    //1.6
    query6(data, para, years) {


        post('/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/agricultureForestryAnimalHusbandryAndFishery/list', {
            year: years,
            para: para

        })
            .then((res) => {


                if (res.code == 0) {

                    var Alldata = res.data;

                    const _a = data;

                    const _Data = [];

                    _Data.push(Alldata.agricultureForestryAnimalHusbandryAndFishery);//1.6农、林、牧、渔业


                    var b11 = Alldata.agricultureForestryAnimalHusbandryAndFishery


                    var _A2 = []


                    _A2.push(b11.anthracite)
                    _A2.push(b11.asphalt)
                    _A2.push(b11.bituminouscoal)
                    _A2.push(b11.blastfurnacegas)
                    _A2.push(b11.briquette)
                    _A2.push(b11.catelogId)
                    _A2.push(b11.coalgangue)
                    _A2.push(b11.coke)
                    _A2.push(b11.cokeovengas)
                    _A2.push(b11.crudeoil)
                    _A2.push(b11.diesel)
                    _A2.push(b11.fueloil)
                    _A2.push(b11.gasoline)
                    _A2.push(b11.kerosene)
                    _A2.push(b11.lignite)
                    _A2.push(b11.liquefiedpetroleumgas)
                    _A2.push(b11.liquifiednaturalgas)
                    _A2.push(b11.lubricatingoil)
                    _A2.push(b11.naphtha)
                    _A2.push(b11.naturalgas)
                    _A2.push(b11.oilcoke)
                    _A2.push(b11.onvertergas)
                    _A2.push(b11.other)
                    _A2.push(b11.othercoalwashing)
                    _A2.push(b11.othercokingproducts)
                    _A2.push(b11.othergas)
                    _A2.push(b11.otherpetroleumproducts)
                    _A2.push(b11.paraffin)
                    _A2.push(b11.refinerydrygas)
                    _A2.push(b11.solventoil)
                    _A2.push(b11.tffId)
                    _A2.push(b11.washthecleancoal)


                    const fossilTitle = [


                        '　　1.6农、林、牧、渔业',

                    ]


                    for (var i = 0; i < 1; i++) {


                        var j = 0

                        _a.push({
                            key: i + 66,
                            name: fossilTitle[i],
                            anthracite: _Data[i - j].anthracite,
                            asphalt: _Data[i - j].asphalt,
                            bituminouscoal: _Data[i - j].bituminouscoal,
                            blastfurnacegas: _Data[i - j].blastfurnacegas,
                            briquette: _Data[i - j].briquette,
                            catelogId: _Data[i - j].catelogId,
                            coalgangue: _Data[i - j].coalgangue,
                            coke: _Data[i - j].coke,
                            cokeovengas: _Data[i - j].cokeovengas,
                            crudeoil: _Data[i - j].crudeoil,
                            diesel: _Data[i - j].diesel,
                            fueloil: _Data[i - j].fueloil,
                            gasoline: _Data[i - j].gasoline,
                            kerosene: _Data[i - j].kerosene,
                            lignite: _Data[i - j].lignite,
                            liquefiedpetroleumgas: _Data[i - j].liquefiedpetroleumgas,
                            liquifiednaturalgas: _Data[i - j].liquifiednaturalgas,
                            lubricatingoil: _Data[i - j].lubricatingoil,
                            naphtha: _Data[i - j].naphtha,
                            naturalgas: _Data[i - j].naturalgas,
                            oilcoke: _Data[i - j].oilcoke,
                            onvertergas: _Data[i - j].onvertergas,
                            other: _Data[i - j].other,
                            othercoalwashing: _Data[i - j].othercoalwashing,
                            othercokingproducts: _Data[i - j].othercokingproducts,
                            othergas: _Data[i - j].othergas,
                            otherpetroleumproducts: _Data[i - j].otherpetroleumproducts,
                            paraffin: _Data[i - j].paraffin,
                            refinerydrygas: _Data[i - j].refinerydrygas,
                            solventoil: _Data[i - j].solventoil,
                            tffId: _Data[i - j].tffId,
                            washthecleancoal: _Data[i - j].washthecleancoal,

                        });


                    }


                    var a1 = this.state.A1
                    var a2 = this.state.A2
                    var a3 = this.state.A3
                    var a4 = this.state.A4
                    var a5 = this.state.A5
                    var a6 = _A2


                    var totalA = []

                    for (var i = 0; i < a1.length; i++) {
                        totalA.push(a1[i] + a2[i] + a3[i] + a4[i] + a5[i] + a6[i])
                    }


                    const _b = [];


                    if (para == 0) {
                        for (var i = 0; i < _a.length; i++) {
                            if (i == 0) {
                                _b.push({
                                        key: _a[i].key,
                                        name: {

                                            value: _a[i].name,
                                        },
                                        anthracite: {
                                            editable: false,
                                            value: _a[i].anthracite,
                                        },
                                        asphalt: {
                                            editable: false,
                                            value: _a[i].asphalt,
                                        },
                                        bituminouscoal: {
                                            editable: false,
                                            value: _a[i].bituminouscoal,
                                        },
                                        blastfurnacegas: {
                                            editable: false,
                                            value: _a[i].blastfurnacegas,
                                        },
                                        briquette: {
                                            editable: false,
                                            value: _a[i].briquette,
                                        },
                                        catelogId: {
                                            editable: false,
                                            value: _a[i].catelogId,
                                        },
                                        coalgangue: {
                                            editable: false,
                                            value: _a[i].coalgangue,
                                        },
                                        coke: {
                                            editable: false,
                                            value: _a[i].coke,
                                        },
                                        cokeovengas: {
                                            editable: false,
                                            value: _a[i].cokeovengas,
                                        },
                                        crudeoil: {
                                            editable: false,
                                            value: _a[i].crudeoil,
                                        },
                                        diesel: {
                                            editable: false,
                                            value: _a[i].diesel,
                                        },
                                        fueloil: {
                                            editable: false,
                                            value: _a[i].fueloil,
                                        },
                                        gasoline: {
                                            editable: false,
                                            value: _a[i].gasoline,
                                        },
                                        kerosene: {
                                            editable: false,
                                            value: _a[i].kerosene,
                                        },
                                        lignite: {
                                            editable: false,
                                            value: _a[i].lignite,
                                        },
                                        liquefiedpetroleumgas: {
                                            editable: false,
                                            value: _a[i].liquefiedpetroleumgas,
                                        },
                                        liquifiednaturalgas: {
                                            editable: false,
                                            value: _a[i].liquifiednaturalgas,
                                        },
                                        lubricatingoil: {
                                            editable: false,
                                            value: _a[i].lubricatingoil,
                                        },
                                        naphtha: {
                                            editable: false,
                                            value: _a[i].naphtha,
                                        },
                                        naturalgas: {
                                            editable: false,
                                            value: _a[i].naturalgas,
                                        },
                                        oilcoke: {
                                            editable: false,
                                            value: _a[i].oilcoke,
                                        },
                                        onvertergas: {
                                            editable: false,
                                            value: _a[i].onvertergas,
                                        },
                                        other: {
                                            editable: false,
                                            value: _a[i].other,
                                        },
                                        othercoalwashing: {
                                            editable: false,
                                            value: _a[i].othercoalwashing,
                                        },
                                        othercokingproducts: {
                                            editable: false,
                                            value: _a[i].othercokingproducts,
                                        },
                                        othergas: {
                                            editable: false,
                                            value: _a[i].othergas,
                                        },
                                        otherpetroleumproducts: {
                                            editable: false,
                                            value: _a[i].otherpetroleumproducts,
                                        },
                                        paraffin: {
                                            editable: false,
                                            value: _a[i].paraffin,
                                        },
                                        refinerydrygas: {
                                            editable: false,
                                            value: _a[i].refinerydrygas,
                                        },
                                        solventoil: {
                                            editable: false,
                                            value: _a[i].solventoil,
                                        },
                                        tffId: {
                                            editable: false,
                                            value: _a[i].tffId,
                                        },
                                        washthecleancoal: {
                                            editable: false,
                                            value: _a[i].washthecleancoal,
                                        },

                                    }
                                )

                            } else if (i == 1) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: totalA[0].toFixed(2),
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: totalA[1].toFixed(2),
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: totalA[2].toFixed(2),
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: totalA[3].toFixed(2),
                                    },
                                    briquette: {
                                        editable: false,
                                        value: totalA[4].toFixed(2),
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: totalA[5],
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: totalA[6].toFixed(2),
                                    },
                                    coke: {
                                        editable: false,
                                        value: totalA[7].toFixed(2),
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: totalA[8].toFixed(2),
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: totalA[9].toFixed(2),
                                    },
                                    diesel: {
                                        editable: false,
                                        value: totalA[10].toFixed(2),
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: totalA[11].toFixed(2),
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: totalA[12].toFixed(2),
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: totalA[13].toFixed(2),
                                    },
                                    lignite: {
                                        editable: false,
                                        value: totalA[14].toFixed(2),
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: totalA[15].toFixed(2),
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: totalA[16].toFixed(2),
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: totalA[17].toFixed(2),
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: totalA[18].toFixed(2),
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: totalA[19].toFixed(2),
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: totalA[20].toFixed(2),
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: totalA[21].toFixed(2),
                                    },
                                    other: {
                                        editable: false,
                                        value: totalA[22].toFixed(2),
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: totalA[23].toFixed(2),
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: totalA[24].toFixed(2),
                                    },
                                    othergas: {
                                        editable: false,
                                        value: totalA[25].toFixed(2),
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: totalA[26].toFixed(2),
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: totalA[27].toFixed(2),
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: totalA[28].toFixed(2),
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: totalA[29].toFixed(2),
                                    },
                                    tffId: {
                                        editable: false,
                                        value: totalA[30],
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: totalA[31].toFixed(2),
                                    },

                                })
                            } else {
                                _b.push({
                                        key: _a[i].key,
                                        name: {

                                            value: _a[i].name,
                                        },
                                        anthracite: {
                                            editable: false,
                                            value: _a[i].anthracite,
                                        },
                                        asphalt: {
                                            editable: false,
                                            value: _a[i].asphalt,
                                        },
                                        bituminouscoal: {
                                            editable: false,
                                            value: _a[i].bituminouscoal,
                                        },
                                        blastfurnacegas: {
                                            editable: false,
                                            value: _a[i].blastfurnacegas,
                                        },
                                        briquette: {
                                            editable: false,
                                            value: _a[i].briquette,
                                        },
                                        catelogId: {
                                            editable: false,
                                            value: _a[i].catelogId,
                                        },
                                        coalgangue: {
                                            editable: false,
                                            value: _a[i].coalgangue,
                                        },
                                        coke: {
                                            editable: false,
                                            value: _a[i].coke,
                                        },
                                        cokeovengas: {
                                            editable: false,
                                            value: _a[i].cokeovengas,
                                        },
                                        crudeoil: {
                                            editable: false,
                                            value: _a[i].crudeoil,
                                        },
                                        diesel: {
                                            editable: false,
                                            value: _a[i].diesel,
                                        },
                                        fueloil: {
                                            editable: false,
                                            value: _a[i].fueloil,
                                        },
                                        gasoline: {
                                            editable: false,
                                            value: _a[i].gasoline,
                                        },
                                        kerosene: {
                                            editable: false,
                                            value: _a[i].kerosene,
                                        },
                                        lignite: {
                                            editable: false,
                                            value: _a[i].lignite,
                                        },
                                        liquefiedpetroleumgas: {
                                            editable: false,
                                            value: _a[i].liquefiedpetroleumgas,
                                        },
                                        liquifiednaturalgas: {
                                            editable: false,
                                            value: _a[i].liquifiednaturalgas,
                                        },
                                        lubricatingoil: {
                                            editable: false,
                                            value: _a[i].lubricatingoil,
                                        },
                                        naphtha: {
                                            editable: false,
                                            value: _a[i].naphtha,
                                        },
                                        naturalgas: {
                                            editable: false,
                                            value: _a[i].naturalgas,
                                        },
                                        oilcoke: {
                                            editable: false,
                                            value: _a[i].oilcoke,
                                        },
                                        onvertergas: {
                                            editable: false,
                                            value: _a[i].onvertergas,
                                        },
                                        other: {
                                            editable: false,
                                            value: _a[i].other,
                                        },
                                        othercoalwashing: {
                                            editable: false,
                                            value: _a[i].othercoalwashing,
                                        },
                                        othercokingproducts: {
                                            editable: false,
                                            value: _a[i].othercokingproducts,
                                        },
                                        othergas: {
                                            editable: false,
                                            value: _a[i].othergas,
                                        },
                                        otherpetroleumproducts: {
                                            editable: false,
                                            value: _a[i].otherpetroleumproducts,
                                        },
                                        paraffin: {
                                            editable: false,
                                            value: _a[i].paraffin,
                                        },
                                        refinerydrygas: {
                                            editable: false,
                                            value: _a[i].refinerydrygas,
                                        },
                                        solventoil: {
                                            editable: false,
                                            value: _a[i].solventoil,
                                        },
                                        tffId: {
                                            editable: false,
                                            value: _a[i].tffId,
                                        },
                                        washthecleancoal: {
                                            editable: false,
                                            value: _a[i].washthecleancoal,
                                        },

                                    }
                                )
                            }
                        }
                    } else {
                        for (var i = 0; i < _a.length; i++) {
                            if (i == 0) {
                                _b.push({
                                        key: _a[i].key,
                                        name: {

                                            value: _a[i].name,
                                        },
                                        anthracite: {
                                            editable: false,
                                            value: _a[i].anthracite,
                                        },
                                        asphalt: {
                                            editable: false,
                                            value: _a[i].asphalt,
                                        },
                                        bituminouscoal: {
                                            editable: false,
                                            value: _a[i].bituminouscoal,
                                        },
                                        blastfurnacegas: {
                                            editable: false,
                                            value: _a[i].blastfurnacegas,
                                        },
                                        briquette: {
                                            editable: false,
                                            value: _a[i].briquette,
                                        },
                                        catelogId: {
                                            editable: false,
                                            value: _a[i].catelogId,
                                        },
                                        coalgangue: {
                                            editable: false,
                                            value: _a[i].coalgangue,
                                        },
                                        coke: {
                                            editable: false,
                                            value: _a[i].coke,
                                        },
                                        cokeovengas: {
                                            editable: false,
                                            value: _a[i].cokeovengas,
                                        },
                                        crudeoil: {
                                            editable: false,
                                            value: _a[i].crudeoil,
                                        },
                                        diesel: {
                                            editable: false,
                                            value: _a[i].diesel,
                                        },
                                        fueloil: {
                                            editable: false,
                                            value: _a[i].fueloil,
                                        },
                                        gasoline: {
                                            editable: false,
                                            value: _a[i].gasoline,
                                        },
                                        kerosene: {
                                            editable: false,
                                            value: _a[i].kerosene,
                                        },
                                        lignite: {
                                            editable: false,
                                            value: _a[i].lignite,
                                        },
                                        liquefiedpetroleumgas: {
                                            editable: false,
                                            value: _a[i].liquefiedpetroleumgas,
                                        },
                                        liquifiednaturalgas: {
                                            editable: false,
                                            value: _a[i].liquifiednaturalgas,
                                        },
                                        lubricatingoil: {
                                            editable: false,
                                            value: _a[i].lubricatingoil,
                                        },
                                        naphtha: {
                                            editable: false,
                                            value: _a[i].naphtha,
                                        },
                                        naturalgas: {
                                            editable: false,
                                            value: _a[i].naturalgas,
                                        },
                                        oilcoke: {
                                            editable: false,
                                            value: _a[i].oilcoke,
                                        },
                                        onvertergas: {
                                            editable: false,
                                            value: _a[i].onvertergas,
                                        },
                                        other: {
                                            editable: false,
                                            value: _a[i].other,
                                        },
                                        othercoalwashing: {
                                            editable: false,
                                            value: _a[i].othercoalwashing,
                                        },
                                        othercokingproducts: {
                                            editable: false,
                                            value: _a[i].othercokingproducts,
                                        },
                                        othergas: {
                                            editable: false,
                                            value: _a[i].othergas,
                                        },
                                        otherpetroleumproducts: {
                                            editable: false,
                                            value: _a[i].otherpetroleumproducts,
                                        },
                                        paraffin: {
                                            editable: false,
                                            value: _a[i].paraffin,
                                        },
                                        refinerydrygas: {
                                            editable: false,
                                            value: _a[i].refinerydrygas,
                                        },
                                        solventoil: {
                                            editable: false,
                                            value: _a[i].solventoil,
                                        },
                                        tffId: {
                                            editable: false,
                                            value: _a[i].tffId,
                                        },
                                        washthecleancoal: {
                                            editable: false,
                                            value: _a[i].washthecleancoal,
                                        },

                                    }
                                )

                            } else if (i == 1) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else if (i == 2) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else if (i == 3) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else if (i == 7) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else if (i == 11) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else if (i == 15) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else if (i == 16) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else if (i == 21) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else if (i == 26) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else if (i == 31) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else if (i == 37) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else if (i == 38) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else if (i == 42) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else if (i == 46) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else if (i == 50) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else if (i == 54) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else if (i == 55) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else if (i == 61) {
                                _b.push({
                                    key: _a[i].key,
                                    name: {

                                        value: _a[i].name,
                                    },
                                    anthracite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    asphalt: {
                                        editable: false,
                                        value: '-',
                                    },
                                    bituminouscoal: {
                                        editable: false,
                                        value: '-',
                                    },
                                    blastfurnacegas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    briquette: {
                                        editable: false,
                                        value: '-',
                                    },
                                    catelogId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coalgangue: {
                                        editable: false,
                                        value: '-',
                                    },
                                    coke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    cokeovengas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    crudeoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    diesel: {
                                        editable: false,
                                        value: '-',
                                    },
                                    fueloil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    gasoline: {
                                        editable: false,
                                        value: '-',
                                    },
                                    kerosene: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lignite: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquefiedpetroleumgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    liquifiednaturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    lubricatingoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naphtha: {
                                        editable: false,
                                        value: '-',
                                    },
                                    naturalgas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    oilcoke: {
                                        editable: false,
                                        value: '-',
                                    },
                                    onvertergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    other: {
                                        editable: false,
                                        value: '-'
                                    },
                                    othercoalwashing: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othercokingproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    othergas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    otherpetroleumproducts: {
                                        editable: false,
                                        value: '-',
                                    },
                                    paraffin: {
                                        editable: false,
                                        value: '-',
                                    },
                                    refinerydrygas: {
                                        editable: false,
                                        value: '-',
                                    },
                                    solventoil: {
                                        editable: false,
                                        value: '-',
                                    },
                                    tffId: {
                                        editable: false,
                                        value: '-',
                                    },
                                    washthecleancoal: {
                                        editable: false,
                                        value: '-',
                                    },

                                })
                            } else {
                                _b.push({
                                        key: _a[i].key,
                                        name: {

                                            value: _a[i].name,
                                        },
                                        anthracite: {
                                            editable: false,
                                            value: _a[i].anthracite,
                                        },
                                        asphalt: {
                                            editable: false,
                                            value: _a[i].asphalt,
                                        },
                                        bituminouscoal: {
                                            editable: false,
                                            value: _a[i].bituminouscoal,
                                        },
                                        blastfurnacegas: {
                                            editable: false,
                                            value: _a[i].blastfurnacegas,
                                        },
                                        briquette: {
                                            editable: false,
                                            value: _a[i].briquette,
                                        },
                                        catelogId: {
                                            editable: false,
                                            value: _a[i].catelogId,
                                        },
                                        coalgangue: {
                                            editable: false,
                                            value: _a[i].coalgangue,
                                        },
                                        coke: {
                                            editable: false,
                                            value: _a[i].coke,
                                        },
                                        cokeovengas: {
                                            editable: false,
                                            value: _a[i].cokeovengas,
                                        },
                                        crudeoil: {
                                            editable: false,
                                            value: _a[i].crudeoil,
                                        },
                                        diesel: {
                                            editable: false,
                                            value: _a[i].diesel,
                                        },
                                        fueloil: {
                                            editable: false,
                                            value: _a[i].fueloil,
                                        },
                                        gasoline: {
                                            editable: false,
                                            value: _a[i].gasoline,
                                        },
                                        kerosene: {
                                            editable: false,
                                            value: _a[i].kerosene,
                                        },
                                        lignite: {
                                            editable: false,
                                            value: _a[i].lignite,
                                        },
                                        liquefiedpetroleumgas: {
                                            editable: false,
                                            value: _a[i].liquefiedpetroleumgas,
                                        },
                                        liquifiednaturalgas: {
                                            editable: false,
                                            value: _a[i].liquifiednaturalgas,
                                        },
                                        lubricatingoil: {
                                            editable: false,
                                            value: _a[i].lubricatingoil,
                                        },
                                        naphtha: {
                                            editable: false,
                                            value: _a[i].naphtha,
                                        },
                                        naturalgas: {
                                            editable: false,
                                            value: _a[i].naturalgas,
                                        },
                                        oilcoke: {
                                            editable: false,
                                            value: _a[i].oilcoke,
                                        },
                                        onvertergas: {
                                            editable: false,
                                            value: _a[i].onvertergas,
                                        },
                                        other: {
                                            editable: false,
                                            value: _a[i].other,
                                        },
                                        othercoalwashing: {
                                            editable: false,
                                            value: _a[i].othercoalwashing,
                                        },
                                        othercokingproducts: {
                                            editable: false,
                                            value: _a[i].othercokingproducts,
                                        },
                                        othergas: {
                                            editable: false,
                                            value: _a[i].othergas,
                                        },
                                        otherpetroleumproducts: {
                                            editable: false,
                                            value: _a[i].otherpetroleumproducts,
                                        },
                                        paraffin: {
                                            editable: false,
                                            value: _a[i].paraffin,
                                        },
                                        refinerydrygas: {
                                            editable: false,
                                            value: _a[i].refinerydrygas,
                                        },
                                        solventoil: {
                                            editable: false,
                                            value: _a[i].solventoil,
                                        },
                                        tffId: {
                                            editable: false,
                                            value: _a[i].tffId,
                                        },
                                        washthecleancoal: {
                                            editable: false,
                                            value: _a[i].washthecleancoal,
                                        },

                                    }
                                )
                            }
                        }
                    }


                    this.setState({data: _b});

                    /*    const dataSource = _b.map((item) => {
                     const obj = {};
                     Object.keys(item).forEach((key) => {
                     obj[key] = key === 'key' ? item[key] : item[key].value;
                     });
                     return obj;
                     });

                     this.setState({dataSource:dataSource});*/


                    //this.setState({AllData:_a});


                    //this.setState({Data6:Alldata})
                    this.setState({loading: false});

                } else {
                    message.error('数据错误！');
                }
            });
    }

    //1.1 更新
    update(index, data, j) {


        const Directory = [
            '',
            '',
            '',
            '',
            'cEPowerGenerationBoilers',
            'cEIndustrialBoilers',
            'cEOtherEquipment',
            '',
            'oAPowerGenerationBoilers',
            'oAIndustrialBoilers',
            'oAOtherEquipment',
            '',
            'sFPowerGenerationBoilers',
            'sFIndustrialBoilers',
            'sFOtherEquipment',
            '',
            '',
            'sPowerGenerationBoilers',
            'sIndustrialBoilers',
            'sBlastFurnace',
            'sotherEquipment',
            '',
            'nMPowerGenerationBoilers',
            'nMIndustrialBoilers',
            'nMAluminaRotaryKiln',
            'nMOtherEquipment',
            '',
            'cMPowerGenerationBoilers',
            'cMIndustrialBoilers',
            'cMSyntheticAmmoniaGasFurnace',
            'cMotherEquipment',
            '',
            'bMPowerGenerationBoilers',
            'bMIndustrialBoilers',
            'bMCementRotaryKiln',
            'bMCementShaftKiln',
            'bMOtherEquipment',
            '',
            '',
            'aEquipment1',
            'aEquipment2',
            'aEquipment3',
            '',
            'bEquipment1',
            'bEquipment2',
            'bEquipment3',
            '',
            'cEquipment1',
            'cEquipment2',
            'cEquipment3',
            '',
            'cIPowerGenerationBoilers',
            'cIIndustrialBoilers',
            'cIOtherEquipment',
            '',
            '',
            'tDomesticFlights',
            'tHongKongAndMacaoFlights',
            'tInternationalFlights',
            'highway',
            'railway',
            '',
            'inlandRiverInternalCombustionEngine',
            'internationalOceanInternalCombustionEngine',
            'servicesAndOthers',
            'residentsLiving',
            'agricultureForestryAnimalHusbandryAndFishery',


        ]
        var url = [], bodyName = [];
        var DirectoryIndex = Directory[index];

        if (j == 1) {
            url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/energyProductionAndProcessingConversion/update'
            bodyName = 'energyProductionAndProcessingConversion'
        } else if (j == 2) {
            url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/industryAndConstruction/update'
            bodyName = 'industryAndConstruction'
        } else if (j == 3) {
            url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/transportation/update'
            bodyName = 'transportation'
        } else if (j == 4) {
            url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/servicesAndOthers/update'
            bodyName = 'servicesAndOthers'
        } else if (j == 5) {
            url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/residentsLiving/update'
            bodyName = 'residentsLiving'
        } else if (j == 6) {
            url = '/activityLevelDataEntry/energyActivity/totalFossilFuels/co2/statisticalByDept/agricultureForestryAnimalHusbandryAndFishery/update'
            bodyName = 'agricultureForestryAnimalHusbandryAndFishery'
        }


        var obj = {
            "para": this.state.breed,
            "year": this.state.years
        };

        obj[bodyName] = {}

        obj[bodyName][DirectoryIndex] = {
            "naturalgas": data[index].naturalgas.value,
            "diesel": data[index].diesel.value,
            "other": data[index].other.value,
            "othercoalwashing": data[index].othercoalwashing.value,
            "briquette": data[index].briquette.value,
            "paraffin": data[index].paraffin.value,
            "catelogId": data[index].catelogId.value,
            "gasoline": data[index].gasoline.value,
            "solventoil": data[index].solventoil.value,
            "washthecleancoal": data[index].washthecleancoal.value,
            "othercokingproducts": data[index].othercokingproducts.value,
            "refinerydrygas": data[index].refinerydrygas.value,
            "lignite": data[index].lignite.value,
            "liquefiedpetroleumgas": data[index].liquefiedpetroleumgas.value,
            "otherpetroleumproducts": data[index].otherpetroleumproducts.value,
            "lubricatingoil": data[index].lubricatingoil.value,
            "bituminouscoal": data[index].bituminouscoal.value,
            "coke": data[index].coke.value,
            "coalgangue": data[index].coalgangue.value,
            "liquifiednaturalgas": data[index].liquifiednaturalgas.value,
            "onvertergas": data[index].onvertergas.value,
            "asphalt": data[index].asphalt.value,
            "naphtha": data[index].naphtha.value,
            "kerosene": data[index].kerosene.value,
            "cokeovengas": data[index].cokeovengas.value,
            "blastfurnacegas": data[index].blastfurnacegas.value,
            "othergas": data[index].othergas.value,
            "fueloil": data[index].fueloil.value,
            "crudeoil": data[index].crudeoil.value,
            "oilcoke": data[index].oilcoke.value,
            "tffId": data[index].tffId.value,
            "anthracite": data[index].anthracite.value
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


    //参数选择
    selesctYears(years, i, j, k, s) {


        this.setState({loading: true});
        this.setState({years: years});

        if (k == 'a1') {
            this.setState({gas: k});

            $("#tjF").show();
            $("#pfF").hide();
            $("#ckff").show();
            $("#noCoTable").hide();
            $("#noCoTable1").hide();


            if (j == 'b1' || j == 'b2' || j == 'b3') {
                if (j == 'b1') {

                    if (i == 0) {
                        this.setState({cs: '活动水平数据'});
                        this.setState({csZs: ''});
                    } else if (i == 1) {
                        this.setState({cs: '平均低位热值'});
                        this.setState({csZs: ''});
                    } else if (i == 2) {
                        this.setState({cs: '单位热值含碳量'});
                        this.setState({csZs: ''});
                    } else if (i == 3) {
                        this.setState({cs: '碳氧化率'});
                        this.setState({csZs: '（若某燃料固碳率98%，在此表的数就填98%或0.98）'});
                    }


                    this.setState({statistics: j});
                    this.query(i, years)
                    $("#ckff").show();
                    $("#bodyTable").show();
                    $("#bodyTable1").hide();
                    $("#bodyTable2").hide();
                    this.setState({breed: i});


                } else if (j == 'b2') {


                    this.setState({statistics: j});
                    $("#ckff").hide();
                    $("#bodyTable").hide();
                    $("#bodyTable1").show();
                    $("#bodyTable2").hide();

                    this.queryCo2(years)

                } else {
                    this.setState({statistics: j});

                    $("#ckff").hide();
                    $("#bodyTable").hide();
                    $("#bodyTable1").hide();
                    $("#bodyTable2").show();

                    this.queryMethod(years)
                }

            }


        } else {


            this.setState({gas: k});
            $("#tjF").hide();
            $("#pfF").show();
            $("#ckff").hide();
            $("#bodyTable").hide();
            $("#bodyTable1").hide();
            $("#bodyTable2").hide();


            if (s == 'c1') {

                $("#noCoTable").show();
                $("#noCoTable1").hide();
                this.setState({discharge: s});

                this.queryHdNO2(years);
                this.queryRzNO2(years);
                this.queryYzNO2(years);


            } else {
                $("#noCoTable").hide();
                $("#noCoTable1").show();
                this.setState({discharge: s});

                this.queryHdCH4(years);
                this.queryRzCH4(years);
                this.queryYdYzCH4(years);
                this.queryYdYzN(years);

            }


        }


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

        //co2 1.1
        const {data1} = this.state;
        const dataSource1 = data1.map((item) => {
            const obj = {};
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
        });

        //co2 1.2
        const {data2} = this.state;
        const dataSource2 = data2.map((item) => {
            const obj = {};
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
        });

        //非co2 1.1
        const {data3} = this.state;
        const dataSource3 = data3.map((item) => {
            const obj = {};
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
        });

        //非co2 1.2
        const {data4} = this.state;
        const dataSource4 = data4.map((item) => {
            const obj = {};
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
        });

        //非co2 1.3
        const {data5} = this.state;
        const dataSource5 = data5.map((item) => {
            const obj = {};
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
        });

        //非co2 2.1
        const {data6} = this.state;
        const dataSource6 = data6.map((item) => {
            const obj = {};
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
        });

        //非co2 2.2
        const {data7} = this.state;
        const dataSource7 = data7.map((item) => {
            const obj = {};
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
        });

        //非co2 2.3
        const {data8} = this.state;
        const dataSource8 = data8.map((item) => {
            const obj = {};
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
        });

        //非co2 2.3
        const {data9} = this.state;
        const dataSource9 = data9.map((item) => {
            const obj = {};
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
        });


        //非co2 2.3
        const {data11} = this.state;
        const dataSource11 = data11.map((item) => {
            const obj = {};
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
        });


        const columns = this.columns;
        const columns2 = this.columns2;
        const columns3 = this.columns3;
        const columns4 = this.columns4;
        const columns5 = this.columns5;
        const columns6 = this.columns6;
        const columns7 = this.columns7;
        const columns8 = this.columns8;
        const columns9 = this.columns9;
        const columns10 = this.columns10;
        const columns11 = this.columns11;


        return (
            <div className={styles.normal}>
                <div className={styles.title}>
                    <span className={styles.title_span}>化石燃料燃烧</span>
                </div>

                <div className={styles.select}>
                    <div className={styles.targetChoose}>
                        <span className={styles.selectH1}>数据年份:</span>
                        <ul>
                            <li id="li1" className={'2005' == this.state.years ? styles.li_focus : styles.eee}
                                onClick={() => {
                                    this.selesctYears('2005', this.state.breed, this.state.statistics, this.state.gas, this.state.discharge)
                                }}>2005
                            </li>
                            <li id="li2" className={'2010' == this.state.years ? styles.li_focus : styles.eee}
                                onClick={() => {
                                    this.selesctYears('2010', this.state.breed, this.state.statistics, this.state.gas, this.state.discharge)
                                }}>2010
                            </li>
                            <li id="li3" className={'2012' == this.state.years ? styles.li_focus : styles.eee}
                                onClick={() => {
                                    this.selesctYears('2012', this.state.breed, this.state.statistics, this.state.gas, this.state.discharge)
                                }}>2012
                            </li>
                            <li id="li4" className={'2014' == this.state.years ? styles.li_focus : styles.eee}
                                onClick={() => {
                                    this.selesctYears('2014', this.state.breed, this.state.statistics, this.state.gas, this.state.discharge)
                                }}>2014
                            </li>
                        </ul>
                    </div>

                    <div className={styles.targetChoose}>
                        <span className={styles.selectH1}>气体分类:</span>
                        <ul>
                            <li id="li5" className={'a1' == this.state.gas ? styles.li_focus : styles.eee}
                                onClick={() => {
                                    this.selesctYears(this.state.years, this.state.breed, this.state.statistics, 'a1', this.state.discharge)
                                }}>CO2排放量
                            </li>
                            <li id="li6" className={'a2' == this.state.gas ? styles.li_focus : styles.eee}
                                onClick={() => {
                                    this.selesctYears(this.state.years, this.state.breed, this.state.statistics, 'a2', this.state.discharge)
                                }}>非CO2排放量
                            </li>
                        </ul>
                    </div>

                    <div className={styles.targetChoose} id="tjF">
                        <span className={styles.selectH1}>统计方法:</span>
                        <ul>
                            <li id="li7" className={'b1' == this.state.statistics ? styles.li_focus : styles.eee}
                                onClick={() => {
                                    this.selesctYears(this.state.years, this.state.breed, 'b1', this.state.gas, this.state.discharge)
                                }}>部门方法
                            </li>
                            <li id="li8" style={{width: 150}}
                                className={'b2' == this.state.statistics ? styles.li_focus : styles.eee}
                                onClick={() => {
                                    this.selesctYears(this.state.years, this.state.breed, 'b2', this.state.gas, this.state.discharge)
                                }}>非能源利用排放量
                            </li>
                            <li id="li8" className={'b3' == this.state.statistics ? styles.li_focus : styles.eee}
                                onClick={() => {
                                    this.selesctYears(this.state.years, this.state.breed, 'b3', this.state.gas, this.state.discharge)
                                }}>参考方法
                            </li>
                        </ul>
                    </div>

                    <div className={styles.targetChoose} style={{display: 'none'}} id="pfF">
                        <span className={styles.selectH1}>排放分类:</span>
                        <ul>
                            <li id="li7" style={{width: 150}}
                                className={'c1' == this.state.discharge ? styles.li_focus : styles.eee} onClick={() => {
                                this.selesctYears(this.state.years, this.state.breed, this.state.statistics, this.state.gas, 'c1')
                            }}>电站锅炉N2O排放
                            </li>
                            <li id="li8" style={{width: 150}}
                                className={'c2' == this.state.discharge ? styles.li_focus : styles.eee} onClick={() => {
                                this.selesctYears(this.state.years, this.state.breed, this.state.statistics, this.state.gas, 'c2')
                            }}>移动源CH4和N2O排放
                            </li>
                        </ul>
                    </div>

                    <div className={styles.targetChoose} id="ckff">
                        <span className={styles.selectH1}>参&#x3000;&#x3000;数:</span>
                        <ul>
                            <li id="li9" className={'0' == this.state.breed ? styles.li_focus : styles.eee}
                                onClick={() => {
                                    this.selesctYears(this.state.years, '0', this.state.statistics, this.state.gas, this.state.discharge)
                                }}>活动水平数据
                            </li>
                            <li id="li10" className={'1' == this.state.breed ? styles.li_focus : styles.eee}
                                onClick={() => {
                                    this.selesctYears(this.state.years, '1', this.state.statistics, this.state.gas, this.state.discharge)
                                }}>平均低位热值
                            </li>
                            <li id="li11" className={'2' == this.state.breed ? styles.li_focus : styles.eee}
                                onClick={() => {
                                    this.selesctYears(this.state.years, '2', this.state.statistics, this.state.gas, this.state.discharge)
                                }}>单位热值含碳量
                            </li>
                            <li id="li12" className={'3' == this.state.breed ? styles.li_focus : styles.eee}
                                onClick={() => {
                                    this.selesctYears(this.state.years, '3', this.state.statistics, this.state.gas, this.state.discharge)
                                }}>碳氧化率
                            </li>
                        </ul>
                        <span className={styles.selectH2}>(分部门分能源品种)</span>
                    </div>

                </div>


                <div className={styles.entryBody} id="bodyTable">
                    <p>{this.state.cs}<span className={styles.csZhushi}>{this.state.csZs}</span></p>
                    <Spin spinning={this.state.loading} delay={500}>
                        <Table size="small" pagination={false} bordered={true} columns={columns} dataSource={dataSource}
                               scroll={{x: 4000, y: 620}}
                               rowClassName={(record, index) => index % 2 === 0 ? '' : styles.columnsC }/>
                    </Spin>
                </div>


                <div className={styles.entryBody} id="bodyTable1" style={{display: 'none'}}>
                    <p>非能源利用排放量</p>
                    <Spin spinning={this.state.loading}>
                        <Table size="small" pagination={false} bordered={true} columns={columns2}
                               dataSource={dataSource1} scroll={{x: 4500, y: 820}}
                               rowClassName={(record, index) => index % 2 === 0 ? '' : styles.columnsC1 }/>
                    </Spin>
                </div>

                <div id="bodyTable2" style={{display: 'none'}}>
                    <Spin spinning={this.state.loading}>
                        <div className={styles.entryBody}>
                            <p>活动水平数据</p>

                            <Table size="small" pagination={false} bordered={true} columns={columns3}
                                   dataSource={dataSource2} scroll={{x: 5500, y: 620}}
                                   rowClassName={(record, index) => index % 2 === 0 ? '' : styles.columnsC }/>

                        </div>

                        <div className={styles.entryBody}>
                            <p>固碳量</p>

                            <Table size="small" pagination={false} bordered={true} columns={columns11}
                                   dataSource={dataSource11} scroll={{x: 4000, y: 620}}
                                   rowClassName={(record, index) => index % 2 === 0 ? '' : styles.columnsC }/>

                        </div>
                    </Spin>
                </div>

                <div id="noCoTable" style={{display: 'none'}}>
                    <Spin spinning={this.state.loading}>
                        <div className={styles.entryBody}>
                            <p>活动水平数据</p>
                            <Table size="small" pagination={false} bordered={true} columns={columns4}
                                   dataSource={dataSource3} scroll={{x: 5500, y: 620}}
                                   rowClassName={(record, index) => index % 2 === 0 ? '' : styles.columnsC }/>
                        </div>

                        <div className={styles.entryBody}>
                            <p>平均低位热值</p>
                            <Table size="small" pagination={false} bordered={true} columns={columns5}
                                   dataSource={dataSource4} scroll={{x: 5500, y: 620}}
                                   rowClassName={(record, index) => index % 2 === 0 ? '' : styles.columnsC }/>
                        </div>

                        <div className={styles.entryBody}>
                            <p>排放因子</p>
                            <Table size="small" pagination={false} bordered={true} columns={columns6}
                                   dataSource={dataSource5} scroll={{x: 800, y: 620}}
                                   rowClassName={(record, index) => index % 2 === 0 ? '' : styles.columnsC }/>
                        </div>
                    </Spin>
                </div>


                <div id="noCoTable1" style={{display: 'none'}}>
                    <Spin spinning={this.state.loading}>
                        <div className={styles.entryBody}>
                            <p>活动水平数据</p>
                            <Table size="small" pagination={false} bordered={true} columns={columns7}
                                   dataSource={dataSource6} scroll={{x: 2000, y: 620}}
                                   rowClassName={(record, index) => index % 2 === 0 ? '' : styles.columnsC }/>
                        </div>

                        <div className={styles.entryBody}>
                            <p>平均低位热值</p>
                            <Table size="small" pagination={false} bordered={true} columns={columns8}
                                   dataSource={dataSource7} scroll={{x: 2000, y: 620}}
                                   rowClassName={(record, index) => index % 2 === 0 ? '' : styles.columnsC }/>
                        </div>

                        <div className={styles.entryBody}>
                            <p>移动源CH4排放因子</p>
                            <Table size="small" pagination={false} bordered={true} columns={columns9}
                                   dataSource={dataSource8} scroll={{x: 2000, y: 620}}
                                   rowClassName={(record, index) => index % 2 === 0 ? '' : styles.columnsC }/>
                        </div>


                        <div className={styles.entryBody}>
                            <p>移动源NO2排放因子</p>
                            <Table size="small" pagination={false} bordered={true} columns={columns10}
                                   dataSource={dataSource9} scroll={{x: 2000, y: 620}}
                                   rowClassName={(record, index) => index % 2 === 0 ? '' : styles.columnsC }/>
                        </div>
                    </Spin>
                </div>


            </div>
        );

    }
}


export default Form.create()(EditableTable);

