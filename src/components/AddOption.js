import React from 'react';
const path = require('path');


export default class AddOption extends React.Component {
    state = {
        error: undefined
    };
   
    handleAddOption = (event) => {
        event.preventDefault();
        const option = event.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if (!error) {
            event.target.elements.option.value = '';
        };
    };

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleAddOption}>
                    <input className="add-option__input" type="text" name="option" />
                    <button className="button">Add Option</button>
                </form>
            </div>

        );
    };
};


//    constructor(props) {
//        super(props)
//        this.handleAddOption = this.handleAddOption.bind(this)
//
//    }
//


//
   // handleAddOption(event) {
   //    // event.preventDefault();
   //    // console.log(path.resolve(__dirname, 'public'));
   //   //  const option = event.target.elements.option.value.trim();
   //   //  const error = this.props.handleAddOption(option);
//
   //     //shorthand for returning object with key name same as value variable name
   //     this.setState(() => ({ error }));
//
   //     if (!error) {
   //         event.target.elements.option.value = '';
   //     }
   // }

//
//class NewSyntax {
//    meow = 'memmealmfwowom ';
//    getMeow = ()=> `herror ${this.meow}`
//}
//












