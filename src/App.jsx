import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import axiosInstance from './utils/axiosInstance';
import './App.css';

const App = () => {
    const [images, setImages] = useState([]);

    const handleUpload = () => {
        console.log('uploading files');
        axiosInstance
            .post('/upload', { images })
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.error('Upload failed:', err.response.data);
            });
    };

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                setImages((prevState) => [...prevState, reader.result]);
            };
            reader.readAsDataURL(file);
        });
        console.log('acceptedFiles', acceptedFiles);
        console.log('rejectedFiles', rejectedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': ['.jpeg', '.jpg'],
            'image/png': ['.png'],
        }
    });

    useEffect(() => {
        console.log(images);
        return () => { };
    }, [images]);

    return (
        <div className='App'>
            <div className='dropzone' {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? "Drop the files here..." : "Drag 'n' drop some files here, or click to select files"}
            </div>
            {images.length > 0 && (
                <div>
                    {images.map((image, index) => (
                        <img className='selected-image' key={index} src={image} alt={`Selected preview ${index}`} />
                    ))}
                </div>
            )}
            {images.length > 0 && (
                <button onClick={handleUpload}>Upload Images</button>
            )}
        </div>
    );
};

export default App;
