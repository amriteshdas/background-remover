const dropZone = document.getElementById('drop-zone');
const fileInput = document.getElementById('file-input');
const uploadProgress = document.getElementById('upload-progress');
const processProgress = document.getElementById('process-progress');
const result = document.getElementById('result');
const outputImage = document.getElementById('output-image');
const downloadBtn = document.getElementById('download-btn');

dropZone.addEventListener('click', () => fileInput.click());

dropZone.addEventListener('dragover', e => {
  e.preventDefault();
  dropZone.style.background = 'rgba(255, 255, 255, 0.04)';
});

dropZone.addEventListener('dragleave', () => {
  dropZone.style.background = 'rgba(255, 255, 255, 0.02)';
});

dropZone.addEventListener('drop', e => {
  e.preventDefault();
  dropZone.style.background = 'rgba(255, 255, 255, 0.02)';
  const file = e.dataTransfer.files[0];
  uploadImage(file);
});

fileInput.addEventListener('change', () => {
  const file = fileInput.files[0];
  uploadImage(file);
});

function uploadImage(file) {
  const formData = new FormData();
  formData.append('image', file);

  uploadProgress.classList.remove('hidden');
  processProgress.classList.add('hidden');
  result.style.display = 'none';

  fetch('/remove-bg', {
    method: 'POST',
    body: formData
  })
  .then(res => {
    uploadProgress.classList.add('hidden');
    processProgress.classList.remove('hidden');
    return res.blob();
  })
  .then(blob => {
    processProgress.classList.add('hidden');
    const url = URL.createObjectURL(blob);
    outputImage.src = url;
    downloadBtn.href = url;
    result.style.display = 'block';
  })
  .catch(err => {
    alert('Something went wrong!');
    console.error(err);
  });
}
