import React, { Component } from 'react';
import './carousel.scss'

class Carousel extends Component {
    render() {
        return (
            <div>
                <div className="carousel slide" id="carousel" data-interval="5000" data-ride="carousel" data-pause="hover">
                    <ol className="carousel-indicators">
                        <li data-target="#carousel" data-slide-to="0" className="active"></li>
                        <li data-target="#carousel" data-slide-to="1"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="item active"><img src="http://wx.jledu.com.cn/images/upload/image/20161220/1482229429656.jpg" alt=""/></div>
                        <div className="item"><img src="http://wx.jledu.com.cn/images/upload/image/20161201/1480559338591.jpg" alt=""/></div>
                    </div>
                    <a href="#carousel" className="carright" data-slide="next"></a>
                    <a href="#carousel" className="carleft" data-slide="prev"></a>
                </div>
            </div>
        );
    }
}

export default Carousel;