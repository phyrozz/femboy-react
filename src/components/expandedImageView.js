// ExpandedImageView.js
import React from 'react';
import '../App.css';

function ExpandedImageView({ imageUrl, onClose }) {
  return (
    <div className="expanded-image-view">
      <div className="overlay" onClick={onClose}></div>
      <img src={imageUrl} alt="" className="expanded-image" />
      <button className="close-button" onClick={onClose}>Close</button>
    </div>
  );
}

export default ExpandedImageView;
