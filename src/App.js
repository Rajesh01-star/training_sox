import React, { useState } from 'react';
import './App.css';

function App() {
  const [uploadedImage, setUploadedImage] = useState(null);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const fileInput = document.getElementById('imageUpload');
    const selectedFile = fileInput.files[0];

    console.log('Selected file:', selectedFile);

    setUploadedImage(URL.createObjectURL(selectedFile));
  };

  return (
    <div className="container">
      <h1>Upload Image Form</h1>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="imageUpload">Select an image:</label>
          <input type="file" id="imageUpload" accept="image/*" />
        </div>
        <button type="submit">Upload</button>
      </form>
      {uploadedImage && (
        <div className="uploaded-image">
          <h2>Uploaded Image:</h2>
          <img src={uploadedImage} alt="Uploaded" />
        </div>
      )}
    </div>
  );
}

export default App;
