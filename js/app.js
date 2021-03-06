'use strict';

let volunForm = document.getElementById('volunForm');
let Volunteerlist = document.getElementById('volunteerlist');

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
  new volunteer(name, mobileNumber, date, startTime, endTime);
  saveToLs();
  Swal.fire('Thank you for your time');


}


function saveToLs(){
  let lsArr = JSON.stringify(volunteer.arrOfObject);
  localStorage.setItem('volSaved' , lsArr);

}

function rederList() {
  Volunteerlist.textContent = null;
  for (let i = 0; i < volunteer.arrOfObject.length; i++) {
    const voldiv = document.createElement('div');
    voldiv.setAttribute('id' , 'myDiv');
    Volunteerlist.appendChild(voldiv);
    let ul = document.createElement('ul');
    voldiv.appendChild(ul);
    const liName = document.createElement('li');
    ul.appendChild(liName);
    liName.textContent = `Name: ${volunteer.arrOfObject[i].name}`;

    const liNumber = document.createElement('li');
    ul.appendChild(liNumber);
    liNumber.textContent = `Number : ${volunteer.arrOfObject[i].mobileNumber}`;

    const liDate = document.createElement('li');
    ul.appendChild(liDate);
    liDate.textContent = `avialable date : ${volunteer.arrOfObject[i].date}`;

    const listartTime = document.createElement('li');
    ul.appendChild(listartTime);
    listartTime.textContent = `avialable from: ${volunteer.arrOfObject[i].startTime}`;

    const liendTime = document.createElement('li');
    ul.appendChild(liendTime);
    liendTime.textContent = `avialable to:  ${volunteer.arrOfObject[i].endTime}`;

  }

}


// imported from w3school with edit

function myFunction() {
  let counter=0;
  let input, filter, divv, ull, lii, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  divv = document.getElementById('volunteerlist');
  ull = divv.getElementsByTagName('ul');
  for (i = 0; i < ull.length; i++) {

    lii = ull[i].getElementsByTagName('li')[2];
    if (lii) {
      txtValue = lii.textContent || lii.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        ull[i].style.display = '';
      } else {
        ull[i].style.display = 'none';
        counter++;
      }
    }
  }

  if (counter===i){

    Swal.fire('Unfortunately, No volunteers for this date');

  }


}

volunForm.addEventListener('submit', handleSubmit);


