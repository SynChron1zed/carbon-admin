/**
 * 帮助设置Created by dixu on 2017/12/19.
 */


import React from 'react';
import { Table, Input, Form, Popconfirm,message,Spin, Alert, Switch ,Radio ,Checkbox,Button,Row, Col} from 'antd';

import ReactDOM from 'react-dom'
import styles from './Help.less';
import createReactClass from 'create-react-class';
import { post } from '../../utils/carbonRequest';
import echarts from 'echarts';
import $ from 'jquery';
const RadioGroup = Radio.Group;

const CheckboxGroup = Checkbox.Group;

import help1 from '../../assets/1.jpg'
import help2 from '../../assets/2.jpg'
import help3 from '../../assets/3.jpg'
import help4 from '../../assets/4.jpg'
import help5 from '../../assets/5.jpg'
import help6 from '../../assets/6.jpg'
import help7 from '../../assets/7.jpg'
import help8 from '../../assets/8.jpg'
import help9 from '../../assets/9.jpg'
import help10 from '../../assets/10.jpg'
import help11 from '../../assets/11.jpg'
import help12 from '../../assets/12.jpg'
import help13 from '../../assets/13.jpg'
import help14 from '../../assets/14.jpg'
import help15 from '../../assets/15.jpg'

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

        this.state = {

            Data: [],
            Data1: [],
            loading: true ,

            collapsed: false,
            select:1,
            trigger:true,
            user:[],


            AllData:[],
            years:'a1',
            a1:[],
            a2:[],
            a3:[],
            a4:[],
            a5:[],
            checkedValues:[0,1],
            sum2005:[],
            sum2010:[],
            sum2012:[],
            sum2014:[],
            newsum2005:[],
            newsum2010:[],
            newsum2012:[],
            newsum2014:[],

        };



        //$("#bodyTable1").hide();

    }





    render() {


        return (
            <div className={styles.normal}>
                <div className={styles.title}>
                    <span className={styles.title_span}>帮助中心</span>
                </div>



                <div className={styles.content3}>

                    <h2>用户操作手册</h2><br />
                    <h3>一、清单基础数据录入</h3><br />
                    <span>　　1、录入数据前，需先分别在“数据年份”、“气体分类”、“统计方法”、“参数”类别中选择相应的参数。</span><br />
                    <span>　　2、点击数据录入表格中的“编辑”按钮可填入相应数据，填写完一行数据，点击“完成”本行数据录入完成。</span><br />
                    <span>　　3、注意录入的数据仅支持带小数点的阿拉伯数字，如输入特殊符号、中英文字符、空格等，系统会报错提示“录入格式有误，请重新录入”；数据录入仅支持单行录入，多行同时录入数据时系统仅保存最近一次的数据行。</span><br /><br />
                    <h4>　　示例：（化石燃料燃烧数据录入）</h4>
                    <span>　　以清单基础数据录入－能源活动－化石燃料燃烧－数据年份－气体分类－统计方法－参数－编辑－保存</span><br />
                    <img src={help1}  className={styles.helpImg}/>
                    <img src={help2}  className={styles.helpImg}/>
                    <img src={help3}  className={styles.helpImg}/>

                    <h3>二、清单结果总汇查询</h3><br />
                    <span>　　1、点击任一部门，选择任一数据年份，即可查阅所选年份的清单总汇结果</span><br />
                    <h4>　　示例：（能源活动清单结果）</h4>
                    <span>　　清单结果总汇查询－清单结果－数据年份－参数－清单结果</span><br />
                    <img src={help4}  className={styles.helpImg}/>
                    <h3>三、数据报表分析</h3><br />
                    <span>　　1、在修改完基础数据后，需要在数据更新里更新数据，否则数据无法自动更新。</span><br />
                    <h4>　　示例：数据报表分析－数据更新</h4>
                    <img src={help5}  className={styles.helpImg}/>
                    <span>　　2、点击“温室气体年度分析”，可直接查看温室气体排放年度对比趋势和占比分析，“温室气体年度对比分析”任选两年可查看年度排放量对比分析，不支持两年以上的数据对比分析。</span><br />
                    <h4>　　示例：数据报表分析－温室气体年度分析</h4>
                    <img src={help6}  className={styles.helpImg}/>
                    <img src={help7}  className={styles.helpImg}/>
                    <img src={help8}  className={styles.helpImg}/>
                    <img src={help9}  className={styles.helpImg}/>
                    <span>　　3、点击“温室气体排放总览”，选择年份选择“温室气体排放总览”，温室气体排放总览中分别列举了包含林业和不包含林业两种情况下，二氧化碳CO2、甲烷CH4、含氟气体HFC、氧化亚氮N2O在相应年度的排放量和占比。</span><br />
                    <h4>　　示例：数据报表分析－温室气体排放总览－温室气体排放总量</h4>
                    <img src={help10}  className={styles.helpImg}/>
                    <img src={help11}  className={styles.helpImg}/>
                    <img src={help12}  className={styles.helpImg}/>
                    <img src={help13}  className={styles.helpImg}/>
                    <span>　　4、点击“温室气体排放总览”，选择年份选择“温室气体分类分析”，可查看二氧化碳（包括／不包括土地利用变化和林业）、甲烷、氧化亚氮按部门分类排放量和占比可视化图表，以及详细数据列表。</span><br />
                    <h4>　　示例：数据报表分析－温室气体排放总览－温室气体分类分析</h4>
                    <img src={help14}  className={styles.helpImg}/>
                    <img src={help15}  className={styles.helpImg}/>
                    <span>　　5、点击“温室气体排放总览”，选择年份选择“温室气体清单总汇”，可查看各排放气体按部门排放量可视化柱状图及详细数据列表。</span><br />
                    <span>　　6、点击“其他指标”，可直接查阅温室气体增温潜值、不确定计算、关键指标等数据。</span><br />

                </div>


            </div>
        );

    }

}


export default Form.create()(ElectricTable);
