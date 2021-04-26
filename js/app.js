'use strict';

var volunForm = document.getElementById('volunForm');

var Volunteerlist = document.getElementById('volunteerlist');


function volunteer(name, mobileNumber, date, startTime, endTime) {
    this.name = name;
    this.mobileNumber = mobileNumber;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    volunteer.arrOfObject.push(this);
    
}

volunteer.arrOfObject = [];

function handleSubmit(event) {
    event.preventDefault();

    const first = event.target;
    const name = first.name.value;
    const mobileNumber = first.mobileNumber.value;
    const date = first.date.value;
    const startTime = first.startTime.value;
    const endTime = first.endTime.value;
    
    new volunteer(name, mobileNumber, date, startTime, endTime)
    saveToLs();
     
};



function saveToLs(){
    let lsArr = JSON.stringify(volunteer.arrOfObject)
    localStorage.setItem('volSaved' , lsArr)
   
     console.log(lsArr);
}

// function getFromLs(){
//     let data = localStorage.getItem('volSaved');

//     let order = JSON.parse(data);

//     if (order){
//         volunteer.arrOfObject =order;
//     }
//     rederList();
    
// }



function rederList() {
    Volunteerlist.textContent = null;
    for (let i = 0; i < volunteer.arrOfObject.length; i++) {
        const voldiv = document.createElement('div')
        Volunteerlist.appendChild(voldiv);
        let ul = document.createElement('ul');
        voldiv.appendChild(ul);
        const liName = document.createElement('li')
        ul.appendChild(liName);
        liName.textContent = `Name: ${volunteer.arrOfObject[i].name}`;

        const liNumber = document.createElement('li')
        ul.appendChild(liNumber);
        liNumber.textContent = `Number : ${volunteer.arrOfObject[i].mobileNumber}`;

        const liDate = document.createElement('li')
        ul.appendChild(liDate);
        liDate.textContent = `avialable date : ${volunteer.arrOfObject[i].date}`;

        const listartTime = document.createElement('li')
        ul.appendChild(listartTime);
        listartTime.textContent = `avialable hour from: ${volunteer.arrOfObject[i].startTime}`;

        const liendTime = document.createElement('li')
        ul.appendChild(liendTime);
        liendTime.textContent = `avialable hour to:  ${volunteer.arrOfObject[i].endTime}`;
      
        }
     
}


// imported from w3school with edit
function myFunction() {
  var input, filter, divv, ull, lii, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  divv = document.getElementById("volunteerlist");
  divv.style.display ="flex"
  ull = divv.getElementsByTagName("ul");
  for (i = 0; i < ull.length; i++) {
    lii = ull[i].getElementsByTagName("li")[2];
    if (lii) {
      txtValue = lii.textContent || lii.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        ull[i].style.display = "";
      } else {
        ull[i].style.display = "none";
      }
    }       
  }
}

volunForm.addEventListener('submit', handleSubmit);






