import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, ModalStyle } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  // Component DidMount
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // Component Will Unmount
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // Handle Key Down
  handleKeyDown = event => {
    if (event.key === 'Escape') {
      this.props.onClose();
    }
  };

  // On Clic Overlay
  onClicOverlay = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { url } = this.props;
    return createPortal(
      <Overlay onClick={this.onClicOverlay}>
        <ModalStyle src={url} />
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};
