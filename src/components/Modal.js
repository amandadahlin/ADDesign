import React from 'react';
import PropTypes from 'prop-types';

type Props = {
    onClose: Function,
    children: any
}

class Modal extends React.Component<Props> {
  render() {
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50,
      zIndex: 10
    };

    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: 30,
      zIndex: 100,
    };

    const buttonStyles = {
        float: 'right',
        padding: '10px',
        backgroundColor: 'transparent'
    }

    const full = {
        width: '100%'
    }

    const childStyle = {
        display: 'flex',
        adjustContent: 'center'
    }

    return (
      <div style={backdropStyle}>
            
            <div style={modalStyle}>    
                <button style={buttonStyles} onClick={this.props.onClose}>X</button>
                <div style={childStyle}>{this.props.children}</div>
            </div>
      </div>
    );
  }
}

export default Modal;