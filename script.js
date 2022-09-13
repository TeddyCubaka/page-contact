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

function contactsCreator (){
  const contactDetails = document.createElement("div");
  contactDetails.classList.add("contactInformation")

  const image = document.createElement('img');
  image.classList.add('contactIcon');
  contactList[0].image !== "" ? image.src = contactList[0].image : image.src = document.querySelector('#display-image').src;

  const names = document.createElement("div");
  names.classList.add("contactNames");
  names.innerHTML = `${contactList[0].firstName} ${contactList[0].firstName}`;
  contactDetails.appendChild(names)


  const groupe = document.createElement("div");
  groupe.classList.add("contactGroupe");
  groupe.innerHTML = contactList[0].groupe;
  contactDetails.appendChild(groupe)

  const bio = document.createElement("div");
  bio.classList.add("contactBio");
  bio.innerHTML = contactList[0].bio;
  contactDetails.appendChild(bio);

  
  const contact = document.createElement('div');
  contact.classList.add("contactDiv")
  contact.appendChild(image);
  contact.appendChild(contactDetails)
  document.querySelector('#répertoire').appendChild(contact);

}

document.querySelector("#blueBtn").addEventListener('click',() =>{
  valuesSelector();
  seter();
  console.log(contactList[0].image)
  contactsCreator();
})