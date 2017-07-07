import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from '../components/header'
import Footer from '../components/Footer'
import { connect } from 'react-redux';
class App extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    componentDidMount(){
    }
    render() {
        return (
            <div>
               <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }

    // redux--react
    
}

export default App;