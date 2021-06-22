import React from 'react';

import AddOption  from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {

    state = {
        options: [],
        selectedOption: undefined
    }

    handleDeleteOptions = () => this.setState(() => ({ options: [] }));
        
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState)=>({options: prevState.options.filter((option)=>{
            return optionToRemove !== option
        })}));
    };

    handlePick = ()=>{
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        //alert(option);
        this.setState(()=>({
            selectedOption: option
        }));
    };

    handleCloseModal = ()=>{
        this.setState(()=>({
            selectedOption: undefined
        }));
    };

    handleAddOption = (option)=>{
        if (!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists!';
        }
        this.setState((prevState)=> ({options: prevState.options.concat(option)}));
    };

    //lifecycle component
    //lifecycle only available to classes not stateless functions
    componentDidMount(prevProps, prevState){
        try {
            const options = JSON.parse(localStorage.getItem('OPTIONS'));
            
            if(options){
                this.setState(()=>({options}));
            }

        } catch(e){
            //do nothing
        }           
    };

    componentDidUpdate(prevProps, prevState){
        console.log('saving data');
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('OPTIONS', json);
        }
    };

    componentWillUnmount(){
        console.log('componentWillUnmount')
    };

    render() {

        const subTitle = 'Put  your life in the hands of the computer yo yo!';

        return (
            <div>
                <Header subTitle={subTitle} />
                <div className="container">
                    <Action 
                        handlePick={this.handlePick} 
                        hasOptions={this.state.options.length > 0} 
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}

                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption} 
                        />
                    </div>
                </div>

                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />

            </div>);
    };
};

IndecisionApp.defaultProps = {
    options: []
};
