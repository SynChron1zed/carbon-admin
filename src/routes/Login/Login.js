/**
 * Created by dixu on 2017/12/10.
 */

import React, { Component, PropTypes } from 'react';
import style from './Login.less';
import fetch from 'dva/fetch';
import {message,button} from 'antd';
import { post } from '../../utils/carbonRequest';
import $ from 'jquery';
import wenzi from '../../assets/wenzi.png'

var Login = React.createClass({

  getInitialState: function () {//登陆初始化
    return {
      Number:[],
      Name:[],
      Password:[]
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

    var userIf =localStorage.getItem("user");
    if(localStorage.getItem("JZpassword")=="1" && userIf!=null){

      //this.setState({Number: userIf.en});
      this.setState({Name: userIf});
      this.setState({Password: localStorage.getItem("Password")});
      var items = document.getElementsByName("Password");
      items[0].checked=true;
    }



    window.addEventListener('keydown', this.onKeyDown)
      this.newData();


  },


  dataall(){


    /*setTimeout(function () {
     this.context.router.push('/itemplay');
     }.bind(this), 1000);*/


  },



  handleChangeNumber(event) {
    this.setState({Number: event.target.value});
  },

  handleChangeName(event) {
    this.setState({Name: event.target.value});
  },

  handleChangeNamePassword(event) {
    this.setState({Password: event.target.value});
  },

  JZpassword(event){//清除密码

    var items = document.getElementsByName("Password");
    if (items[0].checked) {
      localStorage.setItem("JZpassword",'1');
    }else{
      localStorage.setItem("JZpassword",'0');
      this.setState({Number: ""});
      this.setState({Name: ""});
      this.setState({Password: ""});
    }
  },

  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {//登陆




    /*  alert('A name was submitted: ' + this.state.Number + this.state.Name +this.state.Password);*/


    if(this.state.Name==""){
      message.error('请输入用户名');
      return false;
    }else if(this.state.Password==""){
      message.error('请输入密码');
      return false;
    }else{

      if((this.state.Name=='admin'||this.state.Name=='user') && this.state.Password=="123456"){
        setTimeout(function () {
          this.context.router.push('/gq1gasanalysis');
        }.bind(this), 1000);
        message.success('登录成功！');
          localStorage.setItem("admin",this.state.Name);

      }else{
        message.error('账号或密码错误！');
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
    newData:function () {

        $(document).ready(function(){
            $('body').css({
                background:'#e9e9e9'
            });
            var ratio = $(window).width()/(1920||$('body').width());
            $('#cybody').css({
                transform: "scale("+ratio+")",
                transformOrigin: "left top",
                width: '1920px',
                height: '1080px',
            });
            $(window).resize(function() {
                var ratio = $(window).width()/(1920||$('body').width());
                $('#cybody').css({
                    transform: "scale("+ratio+")",
                    transformOrigin: "left top",
                    width: '1920px',
                    height: '1080px',
                });

                $('body').css({
                    background:'#e9e9e9'
                });
            });

        });
    },

  render: function() {
    return (
      <div className={style.container}>
        <div className={style.contentio} id="cybody" >



          <div className={style.logo_box}>



            <div className={style.lgBody}>
              <div className={style.input_outer}>
                <span className={style.u_user}></span>
                <label>
                  <input  className={style.text} value={this.state.Name} onChange={this.handleChangeName} placeholder="请输入用户名" type="text"/>

                </label>
              </div>
              <div className={style.input_outer}>
                <span className={style.us_uer}></span>
                <label>
                  <input  className={style.text} placeholder="请输入密码" type="password" value={this.state.Password} onChange={this.handleChangeNamePassword} />
                </label>
              </div>
              <div className={style.lgbody} >

                <button  className={style.loginQuery} type="primary" onClick={this.handleSubmit} ><span className={style.newLogin}>登　　录</span></button>

              </div>



            </div>

          </div>
        </div>
      </div>



    )
  }

});

export default Login;

