/**
 * Created by dixu on 2017/12/10.
 */

import React, {Component, PropTypes} from 'react';
import styled from 'styled-components';
import style from './Login.less';
import fetch from 'dva/fetch';
import {message, button,Select} from 'antd';
import {post} from '../../utils/carbonRequest';
import $ from 'jquery';
const Option = Select.Option;


const Selected = styled(Select)`
       
  .ant-select-selection--single {
  height: 28px;
  position: relative;
  cursor: pointer;
  border: none;
  background: none;
  font-size:16px;
  
}
    `;


var Login = React.createClass({

    getInitialState: function () {//登陆初始化
        return {
            Number: [],
            Name: ['hiecc'],
            Password: []
        }


    },

    // onKeyDown(){
    //
    //   if (event.keyCode==13) {
    //     this.handleSubmit()
    //
    //   }//回车键的键值为13
    //
    // },

    componentDidMount() {//记住密码


        window.addEventListener('keydown', this.onKeyDown)
        this.newData();


    },


    handleChangeNumber(event) {
        this.setState({Number: event.target.value});
    },

    handleChangeName(event) {
        debugger;
        this.setState({Name: event});
    },

    handleChangeNamePassword(event) {
        this.setState({Password: event.target.value});
    },

    contextTypes: {
        router: React.PropTypes.object
    },

    //登陆
    handleSubmit(event) {

        if (this.state.Name == "") {
            message.error('请输入用户名');
            return false;
        } else if (this.state.Password == "") {
            message.error('请输入密码');
            return false;
        } else {

            if ((this.state.Name == 'hiecc' && this.state.Password == "Hiecc123456" )|| (this.state.Name == 'hnfgw'&& this.state.Password == "Hnfgw123456") ) {
                setTimeout(function () {
                    this.context.router.push('/gq1gasanalysis');
                }.bind(this), 1000);
                message.success('登录成功！');
                localStorage.setItem("admin", this.state.Name);

            } else {
                message.error('密码错误！');
            }


            // post('/login', {
            //
            //
            //   "username":this.state.Name,
            //
            //   "password":this.state.Password,
            //
            //
            // })
            //
            //   .then((res) => {
            //
            //     if (res) {
            //
            //       if(res.code==11){
            //         message.error('用户名不存在！');
            //       } else if(res.code==12){
            //         message.error('密码错误！');
            //       }else if(res.code==0){
            //         message.success('登录成功！');
            //
            //         const token = res.data.token;
            //         if (token) {
            //           sessionStorage.setItem('Access_Token', token);
            //         }
            //
            //         var data1=JSON.stringify(res.data);
            //         localStorage.setItem("shop-content",data1);
            //         this.dataall();
            //         sessionStorage.setItem('Select_code', '1');
            //         localStorage.setItem("user",this.state.Name);
            //         localStorage.setItem("Password",this.state.Password);
            //
            //       }
            //
            //     } else {
            //       message.error('登录失败！');
            //     }
            //   });


        }


    },


    //适配
    newData: function () {

        $(document).ready(function () {
            $('body').css({
                background: '#e9e9e9'
            });
            var ratio = $(window).width() / (1920 || $('body').width());
            $('#cybody').css({
                transform: "scale(" + ratio + ")",
                transformOrigin: "left top",
                width: '1920px',
                height: '1080px',
            });
            $(window).resize(function () {
                var ratio = $(window).width() / (1920 || $('body').width());
                $('#cybody').css({
                    transform: "scale(" + ratio + ")",
                    transformOrigin: "left top",
                    width: '1920px',
                    height: '1080px',
                });

                $('body').css({
                    background: '#e9e9e9'
                });
            });

        });
    },

    render: function () {
        return (
            <div className={style.container}>
                <div className={style.contentio} id="cybody">


                    <div className={style.logo_box}>


                        <div className={style.lgBody}>


                            <div className={style.input_outer}>
                                <span className={style.u_user}></span>
                                <Selected className={style.userSelect} defaultValue="hiecc" size="large" onChange={this.handleChangeName} dropdownClassName={style.userSelect1}>
                                    <Option value="hiecc">hiecc</Option>
                                    <Option value="hnfgw">hnfgw</Option>
                                </Selected>
                            </div>

                            <div className={style.input_outer}>
                                <span className={style.us_uer}></span>
                                <label>
                                    <input className={style.text} placeholder="请输入密码" type="password"
                                           value={this.state.Password} onChange={this.handleChangeNamePassword}/>
                                </label>
                            </div>
                            <div className={style.lgbody}>

                                <button className={style.loginQuery} type="primary" onClick={this.handleSubmit}><span
                                    className={style.newLogin}>登　　录</span></button>

                            </div>


                        </div>

                    </div>
                </div>
            </div>



        )
    }


});



export default Login;

