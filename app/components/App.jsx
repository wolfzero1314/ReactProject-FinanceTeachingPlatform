
import React from "react";

import {
    BrowserRouter as Router,
    Route,
    Link,Redirect,IndexRoute
    } from "react-router-dom";

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
import lulei from "../../images/u1499.png";

import {Carousel,Grid,Row,Col,Thumbnail,Button,Modal,Tabs,Tab,Pagination,Media} from "react-bootstrap";

//父组件
var App=React.createClass({
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
            <Router>
                <div className="lyb_container">
                    <div className="clearfix">
                        <Link to="/" className="logoBack">
                            <img src={logo} alt=""/>
                            <p>金融建模实验云教学平台</p>
                        </Link>
                        <ul className="tabNav">
                            <li className="fl"><Link to="/">首页</Link></li>
                            <li className="fl"><Link to="/courses">课程</Link></li>
                            <li className="fl"><Link to="/teachers">教师</Link></li>
                            <li className="fl"><Link to="/wanted">企业招聘</Link></li>
                            <li className="fl"><Link to="/community">社区</Link></li>
                            <li className="fl"><Link to="/related">相关平台</Link></li>
                        </ul>

                        <span className="userHead">
                            <Link to="/personal" style={{display:"none"}}>
                                <img src={user} alt=""/>
                            </Link>
                            <a href="javascript:" className="unregister" onClick={this.open} style={{display:"block"}}>
                                <img src={unregister} alt="" />
                                登录
                            </a>
                            <Route path="/personal" component={Personal}/>
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

                    <Route exact path="/" component={HomePage}/>
                    <Route path="/courses" component={Courses}/>
                    <Route path="/teachers" component={Teachers}/>
                    <Route path="/wanted" component={Wanted}/>
                    <Route path="/community" component={Community}/>
                    <Route path="/related" component={Related}/>

                    <footer className="pageFooter">
                        <h3>Copyright ©2017 广东金融学院 电话：020-37215062</h3>
                    </footer>
                </div>
            </Router>
        )
    }
})
//单一课程展示模块
var SingleCourse=React.createClass({
    render(){
        const courseW={
            xs:6,
            md:3
        }
        return(
            <div>
                <Col xs={courseW.xs} md={courseW.md}>
                    <Thumbnail src={course1} alt="242x200">
                        <h4 className="courseBack">金融教学</h4>
                        <div className="coopration">
                            <p>校企</p>
                            <p>联合</p>
                        </div>
                        <div className="recommand">
                            <p>推荐</p>
                        </div>
                    </Thumbnail>
                </Col>
            </div>
        )
    }
})

//首页
var HomePage=React.createClass({
    render(){
        return(
            <div>
                <Banner/>
                <CourseClassifyFinance/>
                <CourseClassifyMath/>
                <CourseClassifyQuantified/>
            </div>
        )
    }
})
//首页子组件-----轮播图
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

//首页子组件-----金融分类
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

//首页子组件----数学分类
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

//首页子组件----量化分类
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

//课程页
var Courses=React.createClass({
    render(){
        return(
            <Router>
                <div style={{border:"1px solid #DDDDDD"}}>
                    <div className="course-head">
                        <span className="course-head-span1"></span>
                        <span className="course-head-span2">课程</span>
                        <select name="courseKinds" id="courseKinds" className="fr" style={{marginRight:"20px",height:"25px",marginTop:"10px"}}>
                            <option value="全部">全部</option>
                            <option value="推荐">推荐</option>
                            <option value="校企联合">校企联合</option>
                        </select>
                    </div>
                    <div style={{backgroundColor:"#DDDDDD"}} className="clearfix">
                        <ul className="course-left-nav">
                            <li><Link to="/finance">金融类</Link></li>
                            <li><Link to="/maths">数学类</Link></li>
                            <li><Link to="/manage">管理类</Link></li>
                            <li><Link to="/quantify">量化类</Link></li>
                        </ul>
                        <div className="course-right-courses">
                           <Route path="/finance" component={Finance}/>
                           <Route path="/maths" component={Maths}/>
                           <Route path="/manage" component={Manage}/>
                           <Route path="/quantify" component={Quantify}/>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
})

//金融类
var Finance=React.createClass({
    getInitialState(){
        return{
            activePage:1
        };
    },
    handleSelect(eventKey){
        this.setState({
            activeKey:eventKey
        })
    },
    render(){
        return(
            <div>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course1} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                            <div className="coopration">
                                <p>校企</p>
                                <p>联合</p>
                            </div>
                            <div className="recommand">
                                <p>推荐</p>
                            </div>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course2} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                            <div className="recommand">
                                <p>推荐</p>
                            </div>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course3} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                            <div className="recommand">
                                <p>推荐</p>
                            </div>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course3} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                        </Thumbnail>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course4} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                            <div className="coopration">
                                <p>校企</p>
                                <p>联合</p>
                            </div>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course6} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course7} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course3} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                        </Thumbnail>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course8} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                            <div className="coopration">
                                <p>校企</p>
                                <p>联合</p>
                            </div>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course1} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course2} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course3} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                        </Thumbnail>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course8} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course1} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course2} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                        </Thumbnail>
                    </Col>
                    <Col xs={6} md={3}>
                        <Thumbnail src={course2} alt="242x200">
                            <h4 className="courseBack">金融教学</h4>
                        </Thumbnail>
                    </Col>
                </Row>
                <Pagination
                    prev
                    next
                    ellipsis
                    items={3}
                    maxButtons={3}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect} />
            </div>
        )
    }
})
//数学类
var Maths=React.createClass({
    render(){
        return(
            <div>
                <h2>Maths</h2>
            </div>
        )
    }
})
//管理类
var Manage=React.createClass({
    render(){
        return(
            <div>
                <h2>Manage</h2>
            </div>
        )
    }
})
//量化类
var Quantify=React.createClass({
    render(){
        return(
            <div>
                <h2>Quantify</h2>
            </div>
        )
    }
})


//教师页
var Teachers=React.createClass({
    getInitialState(){
        return{
            activePage:1
        }
    },
    handleSelect(eventKey){
        this.setState({
            activeKey:eventKey
        })
    },
    render(){
        return(
            <Router>
                <div style={{border:"1px solid #DDDDDD"}}>
                    <div className="course-head">
                        <span className="course-head-span1"></span>
                        <span className="course-head-span2">教师</span>
                    </div>
                    <div className="teachers-introduction">
                        <Grid>
                            <Row>
                                <Col xs={12} md={5}>
                                    <a href="#1">
                                        <Media>
                                            <Media.Left>
                                                <img width={130} height={130} src={lulei} alt="Image"/>
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading>陆磊</Media.Heading>
                                                <p>经济学博士，研究员，特聘教授，国务院政府特殊津贴专家，现任广东金融学院党委副书记，院长，金融学科带头人。</p>
                                            </Media.Body>
                                        </Media>
                                    </a>
                                </Col>
                                <Col xs={12} md={5}>
                                    <a href="#2">
                                        <Media>
                                            <Media.Left>
                                                <img width={130} height={130} src={lulei} alt="Image"/>
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading>陆磊</Media.Heading>
                                                <p>经济学博士，研究员，特聘教授，国务院政府特殊津贴专家，现任广东金融学院党委副书记，院长，金融学科带头人。</p>
                                            </Media.Body>
                                        </Media>
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={5}>
                                    <a href="#3">
                                        <Media>
                                            <Media.Left>
                                                <img width={130} height={130} src={lulei} alt="Image"/>
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading>陆磊</Media.Heading>
                                                <p>经济学博士，研究员，特聘教授，国务院政府特殊津贴专家，现任广东金融学院党委副书记，院长，金融学科带头人。</p>
                                            </Media.Body>
                                        </Media>
                                    </a>
                                </Col>
                                <Col xs={12} md={5}>
                                    <a href="#4">
                                        <Media>
                                            <Media.Left>
                                                <img width={130} height={130} src={lulei} alt="Image"/>
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading>陆磊</Media.Heading>
                                                <p>经济学博士，研究员，特聘教授，国务院政府特殊津贴专家，现任广东金融学院党委副书记，院长，金融学科带头人。</p>
                                            </Media.Body>
                                        </Media>
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={5}>
                                    <a href="#5">
                                        <Media>
                                            <Media.Left>
                                                <img width={130} height={130} src={lulei} alt="Image"/>
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading>陆磊</Media.Heading>
                                                <p>经济学博士，研究员，特聘教授，国务院政府特殊津贴专家，现任广东金融学院党委副书记，院长，金融学科带头人。</p>
                                            </Media.Body>
                                        </Media>
                                    </a>
                                </Col>
                                <Col xs={12} md={5}>
                                    <a href="#6">
                                        <Media>
                                            <Media.Left>
                                                <img width={130} height={130} src={lulei} alt="Image"/>
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading>陆磊</Media.Heading>
                                                <p>经济学博士，研究员，特聘教授，国务院政府特殊津贴专家，现任广东金融学院党委副书记，院长，金融学科带头人。</p>
                                            </Media.Body>
                                        </Media>
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={5}>
                                    <a href="#7">
                                        <Media>
                                            <Media.Left>
                                                <img width={130} height={130} src={lulei} alt="Image"/>
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading>陆磊</Media.Heading>
                                                <p>经济学博士，研究员，特聘教授，国务院政府特殊津贴专家，现任广东金融学院党委副书记，院长，金融学科带头人。</p>
                                            </Media.Body>
                                        </Media>
                                    </a>
                                </Col>
                                <Col xs={12} md={5}>
                                    <a href="#8">
                                        <Media>
                                            <Media.Left>
                                                <img width={130} height={130} src={lulei} alt="Image"/>
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading>陆磊</Media.Heading>
                                                <p>经济学博士，研究员，特聘教授，国务院政府特殊津贴专家，现任广东金融学院党委副书记，院长，金融学科带头人。</p>
                                            </Media.Body>
                                        </Media>
                                    </a>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={5}>
                                    <a href="#9">
                                        <Media>
                                            <Media.Left>
                                                <img width={130} height={130} src={lulei} alt="Image"/>
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading>陆磊</Media.Heading>
                                                <p>经济学博士，研究员，特聘教授，国务院政府特殊津贴专家，现任广东金融学院党委副书记，院长，金融学科带头人。</p>
                                            </Media.Body>
                                        </Media>
                                    </a>
                                </Col>
                                <Col xs={12} md={5}>
                                    <a href="#10">
                                        <Media>
                                            <Media.Left>
                                                <img width={130} height={130} src={lulei} alt="Image"/>
                                            </Media.Left>
                                            <Media.Body>
                                                <Media.Heading>陆磊</Media.Heading>
                                                <p>经济学博士，研究员，特聘教授，国务院政府特殊津贴专家，现任广东金融学院党委副书记，院长，金融学科带头人。</p>
                                            </Media.Body>
                                        </Media>
                                    </a>
                                </Col>
                            </Row>
                        </Grid>
                        <Pagination
                            prev
                            next
                            ellipsis
                            items={3}
                            maxButtons={3}
                            activePage={this.state.activePage}
                            onSelect={this.handleSelect} />
                    </div>
                </div>
            </Router>
        )
    }
})

//招聘页
var Wanted=React.createClass({
    render(){
        return(
            <div>
                <h2>Wanted</h2>
            </div>
        )
    }
})

//社区页
var Community=React.createClass({
    render(){
        return(
            <div>
                <h2>Community</h2>
            </div>
        )
    }
})

//其他平台
var Related=React.createClass({
    render(){
        return(
            <div>
                <h2>Related</h2>
            </div>
        )
    }
})

//个人中心
var Personal=React.createClass({
    render(){
        return(
            <div>
                <h2>Personal</h2>
            </div>
        )
    }
})

var Unregister=React.createClass({
    render(){
        return(
            <div>
                <h2>Unregister</h2>
            </div>
        )
    }
})
export default App;