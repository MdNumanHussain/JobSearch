function processForm() {
    const fileInput = document.getElementById('cv');
    const jobDescription = document.getElementById('job_description').value;

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        
        mammoth.extractRawText({ arrayBuffer: file }).then(function(result) {
            const text = result.value;
            document.getElementById('cv_content').textContent = text;
        }).catch(function(err) {
            console.error('Error reading DOCX file:', err);
        });
    }

    document.getElementById('job_description_content').textContent = jobDescription;
}
