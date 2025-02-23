import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ onUpload }) => {
    const [files, setFiles] = useState([]);
    const [message, setMessage] = useState('');
  
    const handleFileChange = (e) => {
        setFiles([...e.target.files]);
    };
  
    const handleUpload = async () => {
        const formData = new FormData();
        files.forEach((file) => formData.append('file', file));

        try {
            const response = await axios.post('http://127.0.0.1:8000/appointment/upload/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage(response.data.message);
            onUpload();  
        } catch (error) {
            setMessage(error.response?.data?.error || 'An error occurred during upload.');
        }
    };
    
    return (
        <div>
            <h2>Upload CSV Files</h2>
            <input type="file" multiple onChange={handleFileChange} />
            <button onClick={handleUpload}>Upload</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default FileUpload;