/**
 * Created by Administrator on 2016/12/27.
 */
import React from 'react';
import {Link} from 'dva/router';
import styles from './Layouty.less';
import {Layout, Menu, Breadcrumb, Icon} from 'antd';
const {SubMenu} = Menu;
const {Header, Content, Sider, Footer} = Layout;


import createReactClass from 'create-react-class';


var Layouty = createReactClass({


    getInitialState(){


        var a, b;
        const location = this.props.location.pathname.split('/').slice(1)[0];

        if (location) {

            a = [location.substring(0, 1), location.substring(0, 2)]
            b = [location.substring(0, 3)]
        }

        return {
            collapsed: false,
            select: 1,
            trigger: true,
            user: [],
            MeunOpenKeys: a,
            MeunSelectedKeys: b,
            rootSubmenuKeys: ['a', 'b', 'g', 'k'],
            openKeys: a,

        }

    },


    componentDidMount(){


    },


    userexit(){

        this.context.router.push('/login');
        sessionStorage.removeItem('Access_Token');

    },

    onselct(item, key, selectedKeys){

        sessionStorage.setItem("Meunkey", item.key);

    },

    contextTypes: {
        router: React.PropTypes.object
    },

    onOpenChange  (openKeys){

        var opkeys = openKeys.length - 1
        const latestOpenKey = openKeys[opkeys]
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({openKeys});
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    },


    render() {


        const {children} = this.props;

        return (
            <Layout style={{height: 100 + '%'}}>

                <Sider width={210} style={{background: '#404040'}}>
                    <div className={styles.logo}></div>
                    <Menu
                        mode="inline"
                        theme="dark"
                        openKeys={this.state.openKeys}
                        onOpenChange={this.onOpenChange}
                        defaultSelectedKeys={this.state.MeunSelectedKeys}
                        inlineCollapsed={true}
                        style={{height: '100%', borderRight: 0}}
                        onSelect={this.onselct}
                    >
                        <SubMenu key="a" title={<span><Icon type="edit"/>清单基础数据录入</span>}>

                            <SubMenu key="ar" title={<span>能源活动</span>}>
                                <Menu.Item key="ar1">
                                    <Link to="/ar1biological">化石燃料燃烧</Link>
                                </Menu.Item>
                                <Menu.Item key="ar2">
                                    <Link to="/ar2biomass">生物质燃烧</Link>
                                </Menu.Item>
                                <Menu.Item key="ar3" title="煤炭开采 矿后活动逃逸">
                                    <Link to="/ar3coalmine">煤炭开采 矿后活动逃逸</Link>
                                </Menu.Item>
                                <Menu.Item key="ar4">
                                    <Link to="/ar4oilgas">油气系统逃逸</Link>
                                </Menu.Item>
                                <Menu.Item key="ar5">
                                    <Link to="/ar5electric">电力调入调出</Link>
                                </Menu.Item>
                                <Menu.Item key="ar6">
                                    <Link to="/ar6noenergy">不确定性计算</Link>
                                </Menu.Item>
                            </SubMenu>


                            <SubMenu key="ae" title={<span>工业生产过程</span>}>
                                <Menu.Item key="ae1">
                                    <Link to="/ae1greenhousegas">工业生产过程</Link>
                                </Menu.Item>
                                <Menu.Item key="ae2">
                                    <Link to="/ae2noindustry">不确定性计算</Link>
                                </Menu.Item>
                            </SubMenu>


                            <SubMenu key="aw" title={<span>农业</span>}>
                                <Menu.Item key="aw1">
                                    <Link to="/aw1rice">稻田</Link>
                                </Menu.Item>
                                <Menu.Item key="aw2">
                                    <Link to="/aw2agricultural">农用地</Link>
                                </Menu.Item>
                                <Menu.Item key="aw3">
                                    <Link to="/aw3animalgut">动物肠道发酵</Link>
                                </Menu.Item>
                                <Menu.Item key="aw4">
                                    <Link to="/aw4animalwaste">动物粪便管理</Link>
                                </Menu.Item>
                                <Menu.Item key="aw5">
                                    <Link to="/aw5noagriculture">不确定性计算</Link>
                                </Menu.Item>

                            </SubMenu>


                            <SubMenu key="at" title={<span>土地利用变化和林业</span>}>
                                <Menu.Item key="at1">
                                    <Link to="/at1thearbor">乔木林</Link>
                                </Menu.Item>
                                <Menu.Item key="at2">
                                    <Link to="/at2scatteredwood">散生木、四旁树、疏林</Link>
                                </Menu.Item>
                                <Menu.Item key="at3">
                                    <Link to="/at3economicforest">经济林、竹林、灌木林</Link>
                                </Menu.Item>
                                <Menu.Item key="at4">
                                    <Link to="/at4theforest">森林转化温室气体排放</Link>
                                </Menu.Item>
                            </SubMenu>


                            <SubMenu key="aq" title={<span>废弃物处理</span>}>
                                <Menu.Item key="aq1">
                                    <Link to="/aq1waste">废弃物处理</Link>
                                </Menu.Item>
                                <Menu.Item key="aq2">
                                    <Link to="/aq2nowaste">不确定性计算</Link>
                                </Menu.Item>
                            </SubMenu>


                        </SubMenu>

                        <SubMenu key="b" title={<span><Icon type="file-text"/>清单结果总汇查询</span>}>

                            <SubMenu key="br" title={<span>能源活动</span>}>
                                <Menu.Item key="br1">
                                    <Link to="/br1egwp">GWP及关键排放指标</Link>
                                </Menu.Item>
                                <Menu.Item key="br2">
                                    <Link to="/br2eresults">清单结果</Link>
                                </Menu.Item>

                            </SubMenu>


                            <SubMenu key="be" title={<span>工业生产过程</span>}>
                                <Menu.Item key="be1">
                                    <Link to="/be1igwp">GWP及关键排放指标</Link>
                                </Menu.Item>
                                <Menu.Item key="be2">
                                    <Link to="/be2iresults">清单结果</Link>
                                </Menu.Item>

                            </SubMenu>


                            <SubMenu key="bw" title={<span>农业</span>}>
                                <Menu.Item key="bw1">
                                    <Link to="/bw1agwp">GWP及关键排放指标</Link>
                                </Menu.Item>
                                <Menu.Item key="bw2">
                                    <Link to="/bw2aresults">清单结果</Link>
                                </Menu.Item>

                            </SubMenu>


                            <SubMenu key="bp" title={<span>土地利用变化和林业</span>}>
                                <Menu.Item key="bp1">
                                    <Link to="/bp1lgwp">GWP及关键排放指标</Link>
                                </Menu.Item>
                                <Menu.Item key="bp2">
                                    <Link to="/bp2lresults">清单结果</Link>
                                </Menu.Item>

                            </SubMenu>


                            <SubMenu key="bq" title={<span>废弃物处理</span>}>
                                <Menu.Item key="bq1">
                                    <Link to="/bq1wgwp">GWP及关键排放指标</Link>
                                </Menu.Item>
                                <Menu.Item key="bq2">
                                    <Link to="/bq2wresults">清单结果</Link>
                                </Menu.Item>

                            </SubMenu>

                        </SubMenu>


                        <SubMenu key="g" title={<span><Icon type="line-chart"/>数据报表分析</span>}>


                            <Menu.Item key="gq1">
                                <Link to="/gq1gasanalysis">温室气体年度分析</Link>
                            </Menu.Item>

                            <Menu.Item key="gq2">
                                <Link to="/gq2gasoverview">温室气体排放总览</Link>
                            </Menu.Item>

                            <Menu.Item key="gq3">
                                <Link to="/gq3gasother">其他指标</Link>
                            </Menu.Item>

                            <Menu.Item key="gq4">
                                <Link to="/gq4dataupdater">数据更新</Link>
                            </Menu.Item>


                        </SubMenu>


                        <SubMenu key="k" title={<span><Icon type="setting"/>系统设置</span>}>

                            <Menu.Item key="kq1">
                                <Link to="/kq1help">帮助中心</Link>
                            </Menu.Item>
                        </SubMenu>

                    </Menu>
                </Sider>


                <Layout>
                    <Header style={{
                        background: '#fff',
                        width: 100 + '%',
                        position: 'fixed',
                        zIndex: '999',
                        paddingLeft: 30 + 'px'
                    }}>
                        <h1>湖南省省级温室气体清单数据库系统</h1>
                    </Header>
                    <Content >
                        <div >

                            {children}
                        </div>
                    </Content>
                    <Footer style={{textAlign: 'center'}}>
                        湖南省发改委 ©2018 Created by DasuanV
                    </Footer>
                </Layout>
            </Layout>
        );
    }


});


export default Layouty;
