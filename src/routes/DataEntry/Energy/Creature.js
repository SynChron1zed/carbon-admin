/**
 * Created by dixu on 2017/10/12.
 */
/**
 * Created by dixu on 2017/10/10.
 */
import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch  } from 'antd';

import ReactDOM from 'react-dom'
import styles from './Biological.less';
import createReactClass from 'create-react-class';
import { post } from '../../../utils/carbonRequest';

class EditableCell extends React.Component {
  state = {
    value: this.props.value,
    editable: this.props.editable || false,
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.editable !== this.state.editable || nextProps.value !== this.state.value) {
      this.setState({ editable: nextProps.editable, value: nextProps.value });
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

class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: 'name',
      dataIndex: 'name',
      width: '25%',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'name', text),
    }, {
      title: 'age',
      dataIndex: 'age',
      width: '15%',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'age', text),
    }, {
      title: 'address',
      dataIndex: 'address',
      width: '40%',
      render: (text, record, index) => this.renderColumns(this.state.data, index, 'address', text),
    }, {
      title: 'operation',
      dataIndex: 'operation',
      render: (text, record, index) => {
        debugger;
        const { editable } = this.state.data[index].name;
        return (
          <div className="editable-row-operations">
            {
              editable ?
                <span>
                  <a onClick={() => this.editDone(index, 'save')}>Save</a>
                  <Popconfirm title="Sure to cancel?" onConfirm={() => this.editDone(index, 'cancel')}>
                    <a>Cancel</a>
                  </Popconfirm>
                </span>
                :
                <span>
                  <a onClick={() => this.edit(index)}>Edit</a>
                </span>
            }
          </div>
        );
      },
    }];
    this.state = {
      data: [{
        key: '0',
        name: {
          editable: false,
          value: 'Edward King 0',
        },
        age: {
          editable: false,
          value: '32',
        },
        address: {
          value: 'London, Park Lane no. 0',
        },
      },{
        key: '1',
        name: {
          editable: false,
          value: 'Edward King 0',
        },
        age: {
          editable: false,
          value: '32',
        },
        address: {
          value: 'London, Park Lane no. 0',
        },
      }],
    };
  }
  renderColumns(data, index, key, text) {
    debugger;

    const { editable, status } = data[index][key];
    if (typeof editable === 'undefined') {
      return text;
    }
    return (<EditableCell
      editable={editable}
      value={text}
      onChange={value => this.handleChange(key, index, value)}
      status={status}
    />);
  }

  handleChange(key, index, value) {
    const { data } = this.state;
    data[index][key].value = value;
    this.setState({ data });
  }

  selesctYears(){
    alert(1);
    var aaa =
        [{
          key: '0',
          name: {
            editable: false,
            value: '0000',
          },
          age: {

            value: '111',
          },
          address: {
            value: '2222',
          },
        }]

      this.setState({data:aaa})
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
  render() {
    debugger;
    const { data } = this.state;
    const dataSource = data.map((item) => {
      const obj = {};
      Object.keys(item).forEach((key) => {
        obj[key] = key === 'key' ? item[key] : item[key].value;
      });
      return obj;
    });
    const columns = this.columns;
    return (<div style={{marginTop:200}}><li onClick={()=>{this.selesctYears(1)}}>11</li> <Table bordered dataSource={dataSource} columns={columns} /></div>);
  }
}


export default Form.create()(EditableTable);
