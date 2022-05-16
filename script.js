// les codes javascript pour afficher l'image selectionnée

function handleFiles(files) {
     //cette fonction nous servira de visualisation de l'image à selectioner
   const imageType = /^image\//;
    // cette constiable est déclarer pour definir le type d'image
   for (const i = 0; i < files.length; i++) {
   const file = files[i];
    //cette variable selectionne l'image
   if (!imageType.test(file.type)) {
       //dans cette on compare le type d'image; s'ils sont de même type. Si le fichier selectionner n'est pas une image il renvoie ceci n'est pas une image, dans un message alert.
     alert("veuillez sélectionner une image");
   }else{
       // Si le type selectionner est la même que le type image alors la fonction fera ce qui suit.
     if(i == 0){
        //cette boucle dit :"s'il n'y a aucune selection alors le contenu sera vide"
       preview.innerHTML = '';
     }
     //les codes qui suivent definissent le comportement de l'image selectionner 
     const img = document.createElement("img");   //ceci crée une nouvelle balise img, où sera sera stocké l'image.
     img.classList.add("obj");    //on lui attribut une class
     img.file = file;      //on lui donne le type de file qui est le contenu de la variable 'file' déclarer si haut.
     preview.appendChild(img);  //ici on importe l'image dans la balise div > label > span. Qui était initialement vide.
     const reader = new FileReader();
     // cette balise va nous permettre d'afficher notre image.
     reader.onload = ( function(aImg) { 
     return function(e) { 
     aImg.src = e.target.result; 
   }; 
  })(img);

 reader.readAsDataURL(file);
 }
 
 }
}




// const upload = document.querySelector("#upload");

// upload.addEventListener("change", function() {
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//     const uploaded_image = reader.result;
//     document.querySelector(".preview").src = uploaded_image;
//   });
//   reader.readAsDataURL(this.files[0]);
// });



// commençons par cibler les blocks parents


let repertory = document.querySelector("#répertoire");
const contactDiv = document.querySelector(".contactDiv");
const formulary = document.querySelector("form");

let imgDelete = document.querySelector(".imgDelete");

// ajoutons au formulaire un évnement

formulary.addEventListener("submit", function (event){
    event.preventDefault();  //empêchons de se réunitialiser lors de l'actualisations de la page.

    //tirons maintenant nos éléments du formulaires

    let nomData = formulary[1].value;
    let prenomData = formulary[0].value;
    let groupeData = formulary[2].value;
    let bioData = formulary[3].value;
    let iconData = document.querySelector("#display-image");
    let iconSrc = iconData.src;

    // créons les balises où seront stoqués nos données qu'on a importer, en même temps attribuons-les des classes pour nous permettre de réalise une mise facile.
    let contactDiv = document.createElement("div");
    contactDiv.classList.add("contactDiv");


    let contactIcon = document.createElement("img");
    contactIcon.classList.add("contactIcon");
    contactIcon.src = iconSrc;
    contactDiv.appendChild(contactIcon);


    let contactData = document.createElement("div");
    contactData.classList.add("contactInformation");


    let contactNames = document.createElement("div");
    contactNames.classList.add("contactNames");
    contactNames.textContent = prenomData + " " + nomData;
    contactData.appendChild(contactNames);

    let contactGroupe = document.createElement("div");
    contactGroupe.classList.add("contactGroupe");
    contactGroupe.textContent = groupeData;
    contactData.appendChild(contactGroupe);

    let contactBio = document.createElement("div");
    contactBio.classList.add("contactBio");
    contactBio.textContent = bioData;
    contactData.appendChild(contactBio);

    let imgDeleteValue  = imgDelete.src;
    let cleanContactBtn = document.createElement("button");
    cleanContactBtn.classList.add("btnDelete");
    let deleteIcon = document.createElement("img");
    deleteIcon.classList.add("imgDelete");
    deleteIcon.src = imgDeleteValue;
    cleanContactBtn.appendChild(deleteIcon);
    cleanContactBtn.addEventListener("click", function (){
      contactDiv.remove();
    })
    
    let changeBtn = document.createElement("button");
    let changeIcon = document.createElement("img");
    changeBtn.classList.add("btnDelete");
    changeIcon.classList.add("imgDelete");
    changeIcon.src = "changeIcon.png";
    changeBtn.appendChild(changeIcon);
    changeBtn.id = "changeBtn";
    contactDiv.appendChild(contactData);
    contactDiv.appendChild(cleanContactBtn);
    contactDiv.appendChild(changeBtn);
    repertory.appendChild(contactDiv);

    
    
    
    
    
    // maintenant modifions le contact.
    const changeButton = document.querySelector("#changeBtn");
    changeButton.onclick = function (newEvent){
    let divToChange = document.querySelector(".contactDiv");
    let form = document.querySelector("form");
    
    let iconChange = divToChange[0];
    return iconChange; 
    }
    

});