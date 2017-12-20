/**
 * Created by dixu on 2017/9/26.
 */
import { hashHistory } from 'react-router';
import { message } from 'antd';

export default function request (method, url, body)  {


  method = method.toUpperCase();
  if (method === 'GET') {

    // fetch的GET不允许有body，参数只能放在url中
    body = undefined;
  } else {
    body = body && JSON.stringify(body);
  }




  if(localStorage.getItem("admin")=='user'){
      if(url.indexOf("update")==-1){

         }else{

          console.log(2)
          message.error('此账户没有权限');
          url = '';
       }
     }else {

     }



  return fetch('http://dadads.hz.taeapp.com'+url,{//192.168.88.239   120.76.194.221
    method,
    mode: "cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body
  })
    .then((res) => {

      if (res.status === 500) {
        message.error('数据错误！');
      }if(res.status === 401) {
        message.error('请重新登录！');
        //hashHistory.push('/login');
        return Promise.reject('Unauthorized.');
      } else {

        //const token = res.headers.get('Access-Token');
       return res.json()

      }
    });
}

export const get = url => request('GET', url);
export const post = (url, body) => request('POST', url, body);
export const put = (url, body) => request('PUT', url, body);
export const del = (url, body) => request('DELETE', url, body);
