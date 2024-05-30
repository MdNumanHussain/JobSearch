function processForm() {
    console.log('Match button clicked');
    const fileInput = document.getElementById('cv');
    const jobDescription = document.getElementById('job_description').value;
    console.log('Job description:', jobDescription);

    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        console.log('CV file selected:', file.name);

        const reader = new FileReader();
        reader.onload = function(event) {
            const arrayBuffer = event.target.result;

            mammoth.extractRawText({ arrayBuffer: arrayBuffer })
                .then(function(result) {
                    const text = result.value;
                    document.getElementById('cv_content').textContent = text;
                    displayResults();
                })
                .catch(function(err) {
                    console.error('Error reading DOCX file:', err);
                    displayResults();
                });
        };
        reader.readAsArrayBuffer(file);
    } else {
        displayResults();
    }

    document.getElementById('job_description_content').textContent = jobDescription;
    console.log('Job description content set');
}

function displayResults() {
    console.log('Displaying results');
    document.getElementById('result-section').style.display = 'flex';
}
