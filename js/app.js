'use strict';

const volun = document.getElementById('volunForm');
const Volunteerlist = document.getElementById('volunteerlist');


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
    rederList();
};


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

console.log(volunteer.arrOfObject);
volunForm.addEventListener('submit', handleSubmit);
