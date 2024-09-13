## 💧🌚 Use Dropzone Upload Images On Cloudinary 


⚡️This project involves a React frontend and an Express backend for image uploading with Cloudinary integration. The frontend allows users to drag and drop images for upload, and the backend handles uploading images to Cloudinary and saving their metadata to MongoDB.


## 🖥️ Tech Stack 💻

- React: For building the user interface.
- CSS: For styling and responsive design.
- react-dropzone: For handling file uploads.
- Axios: For making HTTP requests to the backend.

## ⚙️ Setup Project ⚙🔨
**Step 1 Creates Project **
   

     npm create vite@latest my-project -- --template react

**Step 2 : Install React Drop Zone  **

    npm i --save react-dropzone
  
  **Step 3 : Install axios **
  
    npm i axios


## 🎉🎉🎉 Usage

 1. Uploading Images
    	   •	Navigate to the frontend URL.
    	   •	Drag and drop images into the dropzone area.
    	   •	Click the “Upload Images” button to upload the images to the server.
    
 2. Deleting Images
        	   •	To delete images, send a request to the backend with the image’s public ID.
