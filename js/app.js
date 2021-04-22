'use strict';

const volun = document.getElementById('volunForm');
const Volunteerlist = document.getElementById('volunteerlist');


function volunteer(name,mobileNumber,date,startTime,endTime) {
    this.name = name;
    this.mobileNumber = mobileNumber;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    volunteer.arrOfObject.push(this);
}

volunteer.arrOfObject = [];

function handleSubmit (event){
    event.preventDefault();
   
    
    const first = event.target;
    const name = first.name.value;
    const mobileNumber = first.mobileNumber.value;
    const date = first.date.value;
    const startTime = first.startTime.value;
    const endTime = first.endTime.value;

    new volunteer(name,mobileNumber,date,startTime,endTime)
    rederList();
};


function rederList(){
    Volunteerlist.textContent= '';
    for (let i=0 ; i<volunteer.arrOfObject.length; i++){
        const voldiv = document.createElement('div')
        Volunteerlist.appendChild(voldiv); 
       let ul = document.createElement('ul');
       voldiv.appendChild(ul);
       for (let i =0 ; i < volunteer.arrOfObject.length; i++){
        let li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `Name: ${volunteer.arrOfObject[i].name}`;
       
       }
    }
    
}


console.log(volunteer.arrOfObject);
volunForm.addEventListener('submit', handleSubmit);
