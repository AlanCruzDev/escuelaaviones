import React,{useState} from 'react'

export const Openclosemodal = () => {

  const [state,setState]=useState({show:false});

  const showModal = () => {
    setState({ show: true });
  };

  const hideModal = () => {
    setState({
      show:false
    });
  };

  return {
    state,
    showModal,
    hideModal
  }

}
