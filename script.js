const imgUploaded = document.querySelector('#upload');
const displayerImg = document.querySelector('#display-image');
let count = 0;

imgUploaded.addEventListener( 'change' , ()=>{
  const [picture] = imgUploaded.files;
  if (picture)displayerImg.src = URL.createObjectURL(picture);
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
let contactArray = [];
let str = "";
function seter(){
  let contact = {};
  contact.id = count;
  contact.firstName = firstName;
  contact.secondName = secondName;
  contact.groupe = groupe;
  contact.bio = bio;
  contact.image = displayerImg.src;
  contactList.push(contact)
}

function callBack (para, element){
  document.querySelector("#prénom").value = element.firstName;
  document.querySelector("#nom").value = element.secondName;
  document.querySelector("#groupe").value = element.groupe;
  document.querySelector("#zoneDuBio").value = element.bio;
  document.querySelector('#display-image').src = element.image;
  document.querySelector("#blueBtn").addEventListener('click', ()=>{

  })
}

function contactsCreator (element){
    const contactDetails = document.createElement("div");
    contactDetails.classList.add("contactInformation")
    
    const image = document.createElement('img');
    image.classList.add('contactIcon');
    element.image !== "" ? image.src = element.image : image.src = document.querySelector('#display-image').src;
    
    const names = document.createElement("div");
    names.classList.add("contactNames");
    names.innerHTML = `${element.firstName} ${element.firstName}`;
    contactDetails.appendChild(names)


    const groupe = document.createElement("div");
    groupe.classList.add("contactGroupe");
    groupe.innerHTML = element.groupe;
    contactDetails.appendChild(groupe)
    
    const bio = document.createElement("div");
    bio.classList.add("contactBio");
    bio.innerHTML = element.bio;
    contactDetails.appendChild(bio);
    
    
    const contact = document.createElement('div');
    contact.classList.add("contactDiv")
    contact.appendChild(image);
    contact.appendChild(contactDetails)
    document.querySelector('#répertoire').appendChild(contact);

    contactArray.push(contact);
    contact.addEventListener( 'click', ()=>{
      callBack(contact, element)
    });
}

document.querySelector("#blueBtn").addEventListener('click',() =>{
  count++;
  valuesSelector();
  seter();
  contactsCreator(contactList[contactList.length-1]);
})