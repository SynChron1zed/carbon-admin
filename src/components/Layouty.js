/**
 * Created by Administrator on 2016/12/27.
 */
import React from 'react';
import { Link } from 'dva/router';
import styles from './Layouty.less';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider,Footer } = Layout;


import createReactClass from 'create-react-class';




var Layouty = createReactClass ({


  getInitialState(){



    return {
      collapsed: false,
      select:1,
      trigger:true,
      user:[]
    }

  },









  componentDidMount(){





  },




  userexit(){

    this.context.router.push('/login');
    sessionStorage.removeItem('Access_Token');

  },







  contextTypes: {
    router: React.PropTypes.object
  },

  render() {





    const {children} = this.props;

    return (
      <Layout style={{ height: 100+'%' }}>

        <Sider width={210} style={{ background: '#fff' }}>
          <div className={styles.logo}></div>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu key="sub1" title={<span><Icon type="edit" />活动水平数据录入</span>}>

              <SubMenu key="subA1" title={<span><Icon  />能源活动</span>}>
                <Menu.Item key="/carbon">
                  <Link to="/biological"><Icon  />化石燃料燃烧</Link>
                </Menu.Item>
                <Menu.Item key="subA13">
                  <Link to="/"><Icon  />生物质燃烧</Link>
                </Menu.Item>
                <Menu.Item key="subA14">煤炭开采 矿后活动逃逸</Menu.Item>
                <Menu.Item key="subA15">油气系统逃逸</Menu.Item>
                <Menu.Item key="subA16">非能源利用</Menu.Item>
                <Menu.Item key="subA17">电力调入调出</Menu.Item>
              </SubMenu>
              <SubMenu key="subA2" title={<span><Icon  />工业生产过程</span>}>
                <Menu.Item key="subA22">option5</Menu.Item>
                <Menu.Item key="subA23">option6</Menu.Item>
                <Menu.Item key="subA24">option7</Menu.Item>
                <Menu.Item key="subA25">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="subA3" title={<span><Icon  />农业</span>}>
                <Menu.Item key="subA32">option5</Menu.Item>
                <Menu.Item key="subA33">option6</Menu.Item>
                <Menu.Item key="subA34">option7</Menu.Item>
                <Menu.Item key="subA35">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="subA5" title={<span><Icon  />土地利用变化和林业</span>}>
                <Menu.Item key="subA52">option5</Menu.Item>
                <Menu.Item key="subA53">option6</Menu.Item>
                <Menu.Item key="subA54">option7</Menu.Item>
                <Menu.Item key="subA55">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="subA4" title={<span><Icon  />废弃物处理</span>}>
                <Menu.Item key="subA42">option5</Menu.Item>
                <Menu.Item key="subA43">option6</Menu.Item>
                <Menu.Item key="subA44">option7</Menu.Item>
                <Menu.Item key="subA45">option8</Menu.Item>
              </SubMenu>


            </SubMenu>

            <SubMenu key="sub2" title={<span><Icon type="file-text" />清单结果总汇查询</span>}>
              <SubMenu key="subA2" title={<span><Icon type="file-text" />清单</span>}>
                <Menu.Item key="subA21">option5</Menu.Item>
                <Menu.Item key="subA22">option6</Menu.Item>
                <Menu.Item key="subA23">option7</Menu.Item>
                <Menu.Item key="subA24">option8</Menu.Item>
              </SubMenu>
              <Menu.Item key="subA25">option5</Menu.Item>
              <Menu.Item key="subA26">option6</Menu.Item>
              <Menu.Item key="subA27">option7</Menu.Item>
              <Menu.Item key="subA28">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="subA3" title={<span><Icon type="line-chart" />数据报表分析</span>}>
              <Menu.Item key="subA31">option9</Menu.Item>
              <Menu.Item key="subA32">option10</Menu.Item>
              <Menu.Item key="subA33">option11</Menu.Item>
              <Menu.Item key="subA3">option12</Menu.Item>
            </SubMenu>
            <SubMenu key="subA4" title={<span><Icon type="setting" />系统设置</span>}>
              <Menu.Item key="subA41">option9</Menu.Item>
              <Menu.Item key="subA42">option10</Menu.Item>
              <Menu.Item key="subA43">option11</Menu.Item>
              <Menu.Item key="subA44">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>






        <Layout>
          <Header style={{ background: '#fff', width:100+'%',position:'fixed' }} >
            <h1>湖南省省级温室气体清单数据库系统</h1>
          </Header>
          <Content >
            <div >
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            湖南省发改委 ©2017 Created by DasuanV
          </Footer>
        </Layout>
      </Layout>
    );
  }


});



export default Layouty;
