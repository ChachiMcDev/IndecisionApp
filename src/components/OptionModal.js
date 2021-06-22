import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


//stateless functional component....doesn't need to manage state
//
//const customStyles = {
//    content : {
//      background: '#464b53',
//      color: 'white',
//      maxWidth: '30rem',
//      outline: 'none',
//      padding: '3.2rem',
//      textAlign: 'center'
//      
//    }
//  };
//
//     style={customStyles}

const OptionModal = (props) => (
    <Modal
    isOpen={!!props.selectedOption}
    contentLabel="Selected Option"
    closeTimeoutMS={200}
    onRequestClose={props.handleCloseModal}
    className="modal"
    > 
        <h3 className="modal__title">Selected Option: </h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>} 
        <button className="button" onClick={props.handleCloseModal}>Obie Kabie</button>   
    </Modal>
);


export default OptionModal;