async function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const file = fileInput.files[0];
    console.log("file",file);
    

    if (!file) {
        alert("Please select a file before uploading.");
        return;
    }

    const formData = new FormData();
    formData.append('file', file);
    console.log("formdata",formData);
    

    try {
        const response = await fetch('http://localhost:3000/validate-file', {
            method: 'POST',
            body: formData
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('responseMessage').textContent = result.message;
        } else {
            document.getElementById('responseMessage').textContent = `Error: ${result.message}`;
        }
    } catch (error) {
        document.getElementById('responseMessage').textContent = `Error: ${error.message}`;
    }
}
