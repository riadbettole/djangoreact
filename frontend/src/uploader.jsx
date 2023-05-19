import Uppy, { debugLogger } from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import XHRUpload from '@uppy/xhr-upload';
import Webcam from "@uppy/webcam";
import DropTarget from "@uppy/drop-target";

import React, { useEffect, useRef } from 'react';

import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";
import "@uppy/image-editor/dist/style.css";

const readFileAsBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

const MyUploader = ({updateUserImageState}) => {
    useEffect(() => {
      const uppy = new Uppy()
        .use(Dashboard, {
          inline: true,
          target: '#uppy-dashboard',
          showProgressDetails: true,
          proudlyDisplayPoweredByUppy: false,
        })
        .use(Webcam, {
          target: Dashboard,
          showVideoSourceDropdown: true,
          showRecordingLength: true
        })
        .use(DropTarget, {
          target: document.body
        });
  
        uppy.on('complete', async (result) => {
            if (result.successful.length > 0) {
                const uploadedFiles = result.successful;
        const file = uploadedFiles[0].data; // Access the uploaded file object

        // Read the file and convert it to a Base64 string
        const base64Image = await readFileAsBase64(file);
                console.log(base64Image)
        updateUserImageState(base64Image); 
          } else {
            console.warn('Upload failed');
          }
        });
  
      return () => {
        uppy.close();
      };
    }, []);
  
    return <div id="uppy-dashboard" />;
  };

  export default MyUploader;