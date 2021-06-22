import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget-header">
            <h3 className="widget-header__title">Your Options</h3>
            <button 
                className="button button--link"
                onClick={props.handleDeleteOptions}
            >
                Remove All Items
            </button>
        </div>


        {props.options.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
        {props.options.map((val, index) => {
            return <Option
                handleDeleteOption={props.handleDeleteOption}
                key={index}
                optionText={val}
                indexKey={index}
                count={index + 1} 
                >
                </Option>
        })}
    </div>
);


export default Options;