import React, { useEffect } from 'react'
import './App.css';
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import axiosInstance from './utils/axiosInstance';

const App = () => {

    const [images, setImages] = useState([]);

    const handleUpload = () => {
        console.log('uploading files')
        axiosInstance
            .post('/upload', { images })
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => {
                console.error('Upload failed:', err.response.data);
            });
    };

    const onDrop = useCallback((acceptedFiles, rejectedFiles) => {
        acceptedFiles.forEach((file) => {
            //แปลงไฟล์เป็น Data URL
            const reader = new FileReader();
            reader.onload = () => {
                // `reader.result` should be a Base64 string
                setImages((prevState) => [...prevState, reader.result]);
            };

            // Read the file as Data URL
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

    })

    useEffect(() => {
        console.log(images)
        return () => {

        }
    }), [images]
    // console.log(getInputProps(), getRootProps())
    return (
        <div className='App'>
            <div className='dropzone' {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? "Drag Active" : "you can drop your files here"}
            </div>
            {images.length > 0 && (<div>
                {images.map((image, index) => <img className='selected-image' key={index} src={image} />)}
            </div>
            )}
            {images.length > 0 && (
                <button onClick={handleUpload}>Upload Images</button>
            )}

        </div>
    )
}

export default App
