const imgUploaded = document.querySelector('#upload');
const displayerImg = document.querySelector('#display-image');

imgUploaded.addEventListener( 'change' , ()=>{
  const [picture] = imgUploaded.files
  if (picture) {
    displayerImg.src = URL.createObjectURL(picture)
  }
})