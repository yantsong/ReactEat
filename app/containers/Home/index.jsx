import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'

import {getHomeData} from './../../fetch/home/home.js'
import Carousel from './../../components/carousel/carousel.jsx'
import WillShow from './willShow/willShow.jsx'
import LoadMore from '../../components/loadMore/loadMore'
import { connect } from 'react-redux'
import {getCourse} from '../../redux/actions/action.js'
import {getDouBanApi} from '../../fetch/home/home.js'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
         this.state={
            data:[],
            isLoading:false
        }
}
resultHandle(result){
 result.then( res => {
       return res.json()
   }).then( js => {
       this.setState({
           data: this.state.data.concat(js),
           isLoading:false
       }) 
       this.props.getDataActions(this.state.data)
   })
}
getData(){
    this.setState({
        isLoading:true
    })
   let result = getHomeData();
   this.resultHandle(result);
}
componentDidMount(){
  let dou = getDouBanApi();
  dou.then(function(response) {
            return response.json()
        }).then(function(json) {
            console.log('parsed json1', json)
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
this.getData();
let gdfc
window.addEventListener('scroll',function(){
    //节流,每次都会清除上一次定时器，直到没有新的动作,计时器才会执行
    clearTimeout(gdfc)
    gdfc = setTimeout( () => {
    let inHt = window.innerHeight;
    //卷起高度
    let sHt = document.body.scrollTop;
    //可用高度
    let cHt = document.body.scrollHeight;

    if( inHt + sHt == cHt){
        this.getData();
    }
   },1000)
   
    //窗口高度
   

}.bind(this))
}
     render() {
        return (
            <div className="main">
              <Carousel></Carousel>
              <div className="container"><WillShow courseNow={this.state.data}></WillShow></div>
              <LoadMore loading={this.state.isLoading}></LoadMore>
            </div>
        )
    }
}
//redux-react

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getDataActions: bindActionCreators(getCourse, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)