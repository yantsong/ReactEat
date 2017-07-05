import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getHomeData} from './../../fetch/home/home.js'
import Carousel from './../../components/carousel/carousel.jsx'
import WillShow from './willShow/willShow.jsx'
import LoadMore from '../../components/loadMore/loadMore'
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
           data: this.state.data.concat(js)
       }) 
   })
}
getData(){
   let result = getHomeData();
   this.resultHandle(result);

}
componentDidMount(){
this.getData();
console.log(document.body.clientHeight,document.body.scrollTop,document.body.offsetHeight,window.innerHeight);
window.addEventListener('scroll',function(){
    //窗口高度
    let inHt = window.innerHeight;
    //卷起高度
    let sHt = document.body.scrollTop;
    //可用高度
    let cHt = document.body.scrollHeight;

    console.log(inHt,sHt,cHt);
    if( inHt + sHt >= cHt){
        console.log(inHt,sHt,cHt);
        this.getData();
    }

}.bind(this))
}
     render() {
        return (
            <div>
              <Carousel></Carousel>
              <div className="container"><WillShow courseNow={this.state.data}></WillShow></div>
              <LoadMore loading={this.state.isLoading}></LoadMore>
            </div>
        )
    }
}




// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default Home
module.exports = Home