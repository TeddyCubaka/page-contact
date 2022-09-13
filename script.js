const imgUploaded = document.querySelector('#upload');
const displayerImg = document.querySelector('#display-image');

imgUploaded.addEventListener( 'change' , ()=>{
  const [picture] = imgUploaded.files
  if (picture) {
    displayerImg.src = URL.createObjectURL(picture)
  }
})

let firstName = ""; 
let secondName = ""; 
let groupe = ""; 
let bio = ""; 

function valuesSelector (){
  firstName = document.querySelector("#prénom").value; 
  secondName = document.querySelector("#nom").value; 
  groupe = document.querySelector("#groupe").value; 
  bio = document.querySelector("#zoneDuBio").value;
}

document.querySelector("#blueBtn").addEventListener('click',() =>{
  valuesSelector();
})

// let userFirstName = "";
// let userSecondName = "";
// let userGroupe = ""
// function seter(){

// }