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


let userFirstName = "";
let userSecondName = "";
let userGroupe = "";
let userBio = "";
let userIcon = "";
let contactList = [];

function seter(){
  let contact = {};
  contact.firstName = firstName;
  contact.secondName = secondName;
  contact.groupe = groupe;
  contact.bio = bio;
  contact.image = displayerImg.src;
  contactList.push(contact)
}

function contactCreator (){
  contactList.map((contact)=>{
    
  })
}

document.querySelector("#blueBtn").addEventListener('click',() =>{
  valuesSelector();
  seter();
  console.log(contactList)
})