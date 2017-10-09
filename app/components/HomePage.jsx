
import React from "react";

import {BrowserRouter as Router,Route,Link} from "react-router-dom";

import style from "./common.css";

import logo from "../../images/logo.png";
import user from "../../images/user.png";
import unregister from "../../images/unregister.png";
import register from "../../images/register.png";

import banner1 from "../../images/banner1.png";
import course1 from "../../images/course1.png";
import course2 from "../../images/course2.png";
import course3 from "../../images/course3.png";
import course4 from "../../images/course4.png";
import course6 from "../../images/course6.png";
import course7 from "../../images/course7.png";
import course8 from "../../images/course8.png";
import boshimao from "../../images/boshimao.png";
import JDshow from "../../images/JDshow.png";
import pwdIconsNew from "../../images/pwd-icons-new.png";

import {Carousel,Grid,Row,Col,Thumbnail,Button,Modal,Tabs,Tab} from "react-bootstrap";

//父组件
var HomePage=React.createClass({
    render:function(){
        return(
            <div className="lyb_container">
                <HeadNav/>
                <Banner/>
                <CourseClassifyFinance/>
                <CourseClassifyMath/>
                <CourseClassifyQuantified/>
                <PageFooter/>
            </div>
        )
    }
})

//子组件---顶部导航及登录框弹出层
var HeadNav=React.createClass({
    getInitialState(){
      return {showModal:false};
    },
    open(){
        this.setState({showModal:true});
    },
    close(){
      this.setState({showModal:false});
    },
    render:function(){

        return(
            <div className="clearfix">
                <a className="logoBack" href="#首页">
                    <img src={logo} alt=""/>
                    <p>金融建模实验云教学平台</p>
                </a>
                <ul className="tabNav">
                    <li className="fl"><a href="#首页">首页</a></li>
                    <li className="fl"><a href="#课程">课程</a></li>
                    <li className="fl"><a href="#教师">教师</a></li>
                    <li className="fl"><a href="#企业招聘">企业招聘</a></li>
                    <li className="fl"><a href="#社区">社区</a></li>
                    <li className="fl"><a href="#相关平台">相关平台</a></li>
                </ul>
                <span className="userHead">
                    <a href="#个人中心" style={{display:"none"}}>
                         <img src={user} alt=""/>
                    </a>
                    <a href="#未登录状态" className="unregister" onClick={this.open}>
                        <img src={unregister} alt="" />
                        登录
                    </a>
                    <Modal show={this.state.showModal} onHide={this.close}>
                        <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                            <Tab eventKey={1} title="扫码登录">
                                <img src={JDshow} alt="京东二维码"/>
                                <p style={{marginTop:"20px"}}>扫码登录，方便快捷</p>
                            </Tab>
                            <Tab eventKey={2} title="账户登录">
                                <div className="username">
                                    <span className="userIcon"></span>
                                    <input type="text" placeholder="邮箱/用户名/手机号"/>
                                </div>
                                <div className="password">
                                    <span className="passwordIcon"></span>
                                    <input type="password" placeholder="请输入密码"/>
                                </div>
                                <div>
                                    <input type="checkbox"/>
                                    <label style={{verticalAlign:"sub"}}>记住我</label>
                                </div>
                                <Button>
                                    登录
                                </Button>
                                <div style={{marginTop:"10px"}}>
                                    <a href="#忘记密码" style={{color:"#008c99",float:"left",paddingLeft:"30px"}}>忘记密码？</a>
                                    <a href="#立即注册" style={{color:"#008c99",float:"right",paddingRight:"30px"}}>立即注册>></a>
                                </div>
                            </Tab>
                        </Tabs>
                    </Modal>
                </span>
            </div>
        )
    }
})

//子组件-----轮播图
var Banner=React.createClass({
    render:function(){
        return(
            <Carousel>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={banner1}/>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={banner1}/>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={banner1}/>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
})

//子组件-----金融分类
var CourseClassifyFinance=React.createClass({
    render:function(){
        return(
            <Grid className="containerBottom">
                <div className="partingLine">
                    <h2 className="finance">金融类</h2>
                    <img src={boshimao} alt=""/>
                </div>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course1} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course2} alt="242x200">
                            <h4>行为金融</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course3} alt="242x200">
                            <h4>金融事件序列建模分析</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course4} alt="242x200">
                            <h4>金融建模与投资管理...</h4>
                        </Thumbnail>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course4} alt="242x200">
                            <h4>金融建模与投资管理...</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course6} alt="242x200">
                            <h4>金融建模</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course7} alt="242x200">
                            <h4>金融财务建模与计算</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course8} alt="242x200">
                            <h4>金融事件序列建模分析</h4>
                        </Thumbnail>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button bsSize="large" block>更多课程</Button>
                    </Col>
                </Row>
            </Grid>

        )
    }
})

//子组件----数学分类
var CourseClassifyMath=React.createClass({
    render:function(){
        return(
            <Grid className="containerBottom">
                <div className="partingLine">
                    <h2 className="finance">数学类</h2>
                    <img src={boshimao} alt=""/>
                </div>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course1} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course2} alt="242x200">
                            <h4>行为金融</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course3} alt="242x200">
                            <h4>金融事件序列建模分析</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course4} alt="242x200">
                            <h4>金融建模与投资管理...</h4>
                        </Thumbnail>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course4} alt="242x200">
                            <h4>金融建模与投资管理...</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course6} alt="242x200">
                            <h4>金融建模</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course7} alt="242x200">
                            <h4>金融财务建模与计算</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course8} alt="242x200">
                            <h4>金融事件序列建模分析</h4>
                        </Thumbnail>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button bsSize="large" block>更多课程</Button>
                    </Col>
                </Row>
            </Grid>

        )
    }
})

//子组件----量化分类
var CourseClassifyQuantified=React.createClass({
    render:function(){
        return(
            <Grid className="containerBottom">
                <div className="partingLine">
                    <h2 className="finance">量化类</h2>
                    <img src={boshimao} alt=""/>
                </div>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course1} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course2} alt="242x200">
                            <h4>行为金融</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course3} alt="242x200">
                            <h4>金融事件序列建模分析</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course4} alt="242x200">
                            <h4>金融建模与投资管理...</h4>
                        </Thumbnail>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course4} alt="242x200">
                            <h4>金融建模与投资管理...</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course6} alt="242x200">
                            <h4>金融建模</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course7} alt="242x200">
                            <h4>金融财务建模与计算</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course8} alt="242x200">
                            <h4>金融事件序列建模分析</h4>
                        </Thumbnail>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button bsSize="large" block>更多课程</Button>
                    </Col>
                </Row>
            </Grid>

        )
    }
})

//子组件----页脚
var PageFooter=React.createClass({
    render:function(){
        return(
            <footer className="pageFooter">
                <h3>Copyright ©2017 广东金融学院 电话：020-37215062</h3>
            </footer>
        )
    }
})


export default HomePage;