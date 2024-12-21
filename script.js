document.getElementById('upload-audio').addEventListener('change', handleFileUpload);
document.getElementById('split-button').addEventListener('click', splitAudio);

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        alert(`You uploaded: ${file.name}`);
    }
}

function splitAudio() {
    alert("Audio splitting in progress...");
    // Here, you can implement audio splitting functionality or a placeholder message
}

document.getElementById('upload-beat').addEventListener('click', uploadBeat);

function uploadBeat() {
    alert("Upload your beat and get feedback!");
    // Here, you can implement beat upload functionality
}
