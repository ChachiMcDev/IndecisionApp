import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss'; 



//stateless functional

const Layout = (props)=>{
    return (
    <div>
        <p>HEADER HEADS</p>
        {props.children}
        <p>FOOTER FOOTS</p>
    </div>
    );
};


const template = (
    <div>
        <h1>Page Title</h1>
        <p>This is my page yo yo</p>
    </div>
);

ReactDOM.render((<IndecisionApp />), document.getElementById('app'))

//ReactDOM.render((
//    <Layout>
//        <p>this is inline</p>
//    </Layout>
//    ), document.getElementById('app'));
//











//
//class OldSyntax {
//    constructor(){
//        this.me = 'me me mem em mememem ';
//    } 
//}
//
//const oldsin = new OldSyntax();
//console.log(oldsin)
//
//
//class NewSyntax {
//    meow = 'memmealmfwowom ';
//    getMeow = ()=> `herror ${this.meow}`
//}
//
//const newsintax = new NewSyntax();
//const newmeowgreeting = newsintax.getMeow();
//console.log(newmeowgreeting)
//

//App.js is bootstrapping the rest of the app


//class Header extends React.Component {
//    render() {
//
//        return (
//            <div>
//                <h1>{this.props.title}</h1>
//                <h2>{this.props.subTitle}</h2>
//            </div>
//        );
//    }
//}
//



//class Action extends React.Component {
//
//    render() {
//        return (<div>
//            <button
//                onClick={this.props.handlePick}
//                disabled={!this.props.hasOptions}
//                className="button">What Should I do?
//             </button>
//        </div>);
//    }
//}
//


//class Options extends React.Component {
//
//    render() {
//
//        return (<div>
//            <button onClick={this.props.handleDeleteOptions}>Remove All items</button>
//            {this.props.options.map((val, index) => {
//                return <Option key={index} optionText={val} />
//            })}
//
//        </div>)
//
//    }
//}
//

//class Option extends React.Component {
//    remove() {
//        alert('remove line item')
//    }
//    render() {
//        return (
//            <div>
//                <p>{this.props.optionText}</p>
//                <button onClick={this.remove}>Remove</button>
//            </div>
//
//
//        )
//
//    }
//}
//


//
//const User = (props)=>{
//    return(
//        <div>
//            <p>Name: {props.name}</p>
//            <p>Age: {props.age} </p>
//        </div>
//    );
//};
//
//




