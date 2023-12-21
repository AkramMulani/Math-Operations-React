import React from 'react';

const Modal = ({ show, onClose, children }) => {
  const modalStyles = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    zIndex: '1000',
    display: show ? 'block' : 'none',
  };

  const backdropStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: '1000',
    display: show ? 'block' : 'none',
  };

  return (
    <>
      <div style={modalStyles}>
        <button onClick={onClose} style={{ float: 'right', cursor: 'pointer' }}>
          Close
        </button>
        {children}
      </div>
      <div style={backdropStyles} onClick={onClose} />
    </>
  );
};

export default Modal;
