import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getHomeData} from './../../fetch/home/home.js'
import Carousel from './../../components/carousel/carousel.jsx'
import NowLive from './nowLive/nowLive.jsx'
class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
         this.state={
            data:[]
        }
}
componentDidMount(){
   let result = getHomeData();
   result.then( res => {
       return res.json()
   }).then( js => {
       console.log(js);
       this.setState({
           data:js
       }
       ) 
   }
   )
}
     render() {
        return (
            <div>
              <Carousel></Carousel>
              <NowLive courseNow={this.state.data}></NowLive>
            </div>
        )
    }
}




// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default Home
module.exports = Home