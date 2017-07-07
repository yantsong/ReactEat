import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
    render() {
        return (
            <div id="head">
              <header>
                <div className="container">
                    <div className="row">
                          <div className="col-md-2 col-sm-3">
                            <h1 className="logo">
                                 <a href="javascript:;"><img src="/assets/images/1492383281510.png" alt="吉教云校Logo"/></a>
                            </h1>
                            </div>
                            <div className="head-Right clearfix">
                                <div className="col-md-5 col-sm-4">
                                    <ul className="head-nav">
                                        <li>
                                            <a>首页</a>
                                        </li>
                                        <li>
                                            <a>课程</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-5 col-sm-5">
                                    <div className="row">
                                      <div className="head-Rall">
                                        <div className="head-serch">
                                            <form>
                                                <label className="serch-box">
                                                    <input type="text"  placeholder="搜索..."/>
                                                        <button className="head-btn" type="submit">
                                                            <em className="head-icon"></em>
                                                        </button>
                                                </label>
                                            </form>
                                         </div>
                                        <ul className="head-login">
                                            <li>
                                                <a href="javascript:;">
                                                    <em className="login-icon"></em>
                                                    <span className="txt-login">登录</span>
                                                </a>
                                            </li>
                                            <li className="login-one" style={{display:'none'}}>
                                                <a href="javascript:;">
                                                    <em className="email-icon"></em>
                                                </a>
                                            </li>
                                            <li style={{display:'none'}}>
                                                <a href="javascript:;">
                                                    <img src="/assets/images/avatar-boy.gif" width="30" height="30" alt=""/>>
                                                    <span id="userName">test01@jledu.com</span>
                                                </a>
                                            </li>
                                            <li  style={{display:'none'}}>
                                                <a href="javascript:;">
                                                    <span>帮助</span>
                                                </a>
                                            </li>
                                            <li  style={{display:'none'}}>
                                                <a href="javascript:;">
                                                    <span>退出</span>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
              </header>
              <div className="head-moblie-mask"></div>
                <div className="head-mobile">
                    <div className="head-mobile-box">
                        <section className="cleafix">
                            <div className="pic-icon">
                                <img src="/assets/images/avatar-boy.gif" width="60" height="60" alt=""/>>
                            </div>
                            <h4>
                                <span>test01@jledu.com</span>
                            </h4>
                            <div className="shop-car">
                                <a href="javascript:;">
                            购物车
                        </a>
                            </div>
                        </section>
                        <nav className="mn-nav ">
                            <ul className="clearfix">
                                <li><a href="javascript:;">首页</a></li>
                                <li><a href="javascript:;">课程</a></li>
                            </ul>
                        </nav>
                        <section className="person-msg">
                            <ul>
                                <li><a href="javascript:;">我的课程</a></li>
                                <li><a href="javascript:;">我的笔记</a></li>
                                <li><a href="javascript:;">课程收藏</a></li>
                                <li><a href="javascript:;">订单中心</a></li>
                                <li><a href="javascript:;">我的提问</a></li>
                                <li><a href="javascript:;">我的回答</a></li>
                                <li><a href="javascript:;">个人资料</a></li>
                                <li><a href="javascript:;">密码设置</a></li>
                                <li><a href="javascript:;">消息中心</a></li>
                            </ul>
                            <div className="exit">
                                <a href="javascript:;" className="login-out">退出登录</a>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
          )
    }
}

export default Header