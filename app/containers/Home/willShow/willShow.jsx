import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import './willShow.scss'
import NavTab from '../../../components/navTab/navtab'
import CourseThumb from '../../../components/courseThumb/courseThumb.jsx'

class WillShow extends Component {
   constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            title:'即将展播',
            tips:'更多'
        }
    }
    render() {
        return (
            <div className="clearfix">
                <NavTab title={this.state.title} tips={this.state.tips}></NavTab>
                {this.props.courseNow.map( (item,index) => {
                    return   <div key={index} className="clearfix col-md-3">
                    <CourseThumb data = {item}></CourseThumb>
                    </div>
                })}
            </div>
        );
    }
}

export default WillShow;