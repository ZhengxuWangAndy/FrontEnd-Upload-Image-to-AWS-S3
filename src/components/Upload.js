import React, { useState, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { DropzoneDialog } from 'material-ui-dropzone';
import generateUploadUrl from '../s3';
window.Buffer = window.Buffer || require("buffer").Buffer;
function Upload(notshow) {


  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => { handleUpload(selectedFile) }, [selectedFile]);

  const handleFileInput = async (file) => {

    console.log(file);

    setSelectedFile(file[0]);
    console.log("handleFileInput called");
    console.log(file);
    const url = await generateUploadUrl(file[0].name);
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "multipart/form-data"
      },
      body: file[0]
    })
    return { url: "https://httpbin.org/post" }
  };

  const handleUpload = async (file) => {

  }
  if (notshow) {
    return null;
  }

  return (
    <div>
      <Button variant="contained" color="primary" onClick={() => setSelectedFile(true)}>
        Add Image
      </Button>

      <DropzoneDialog
        acceptedFiles={['image/*']}
        cancelButtonText={"cancel"}
        submitButtonText={"submit"}
        maxFileSize={5000000}
        open={selectedFile}
        onClose={() => setSelectedFile(false)}
        onSave={(files) => {
          // console.log('Files:', files);
          setSelectedFile(false);
          handleFileInput(files);
        }}
        showPreviews={true}
        showFileNamesInPreview={true}
      />
    </div>
  );

}
export default Upload;
