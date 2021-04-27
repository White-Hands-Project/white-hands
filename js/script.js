'use strict'
//refrence https://www.youtube.com/watch?v=o1yMqPyYeAo

const date= new Date();  //built-in date object
console.log(date);
let firstDayIndex;
let prevLastDay;
//lets convert the index number of date.getMonth() to month name
let months = ['January','February','March','April','May','June','July','August','September','October','November','December']
let month;
function renderCalendar(){
    date.setDate(1);//Sets the numeric day-of-the-month value of the Date object using local time meaning to tell the getday which day to show index for, first day or second
    //console.log(date.getDay());//get the index number of the first day of the month according to the cuurent month
    console.log(date);
    firstDayIndex= date.getDay();
    
     month= date.getMonth(); //method gets the month according to browser
    // console.log(date.getMonth());
    // const currentDate = date.toDateString();
    // console.log(currentDate);
    
    
    
    //let us assign the values of the p and h in the calender with changing date
    document.querySelector('.date h1').innerHTML = months[month]; 
    console.log(months[month]);//queryselector select the first element that is the descendant of that selector, innerhtml The innerHTML property is used to get or set the HTML content of an element node
    
    document.querySelector('.date p').innerHTML = new Date().toDateString(); //method will get the current date
    
    //getting the monthdays
    
    const monthDays= document.querySelector('.days');
    
    //making sure the last day is according to the year
    let currentYear = date.getFullYear();
    const lastDayDate = new Date(currentYear,month+1,0); //will show the last day of the current month in the current year
    const lastDay = lastDayDate.getDate();//Gets the day-of-the-month, using local timev
    console.log(lastDay);
    prevLastDay =new Date(currentYear,month,0).getDate();//will show the last day of the prev month in the current year
    console.log(prevLastDay);
    
    const lastDayIndex = lastDayDate.getDay();//will get the index of the last day of the current month
    console.log(lastDayIndex);
    
    const nextDays = 7-lastDayIndex -1;
    
    const currentDay = new Date().getDate();
    console.log(new Date().getDate());
    const currentMonth= new Date().getMonth();
    console.log(currentMonth);
    let days= "";
    
    for(let x=firstDayIndex;x>0;x--){// to set the dates to the correct order of the days
        days+= `<div id='${x}p' class="prev-date">${prevLastDay-x +1}</div>`
    }
    
    for(let i=1 ;i<=lastDay ;i++){
        if(i===currentDay && month ===currentMonth){
            days+= `<div class='today'>${i}</div>`
        } else{
        days += `<div id='${i}'>${i}</div>`;
        console.log(days);
        monthDays.innerHTML = days;
        }
    }
    
    for(let j=1;j<=nextDays;j++){
        days+= `<div id='${j}n' class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
}


document.querySelector('.prev').addEventListener('click',handleClick);

function handleClick (){
    date.setMonth(date.getMonth()-1);
    console.log(date.getMonth()-1);
    renderCalendar();
    
}

document.querySelector('.next').addEventListener('click',handleClickNext);

function handleClickNext(){
    date.setMonth(date.getMonth()+1);
    renderCalendar();
}

renderCalendar();

document.querySelector('.days').addEventListener('click',handleDaysClick);

// function savingToLs(){

// }
let dayReg=[];

let patientInput=[];
let element;
let currentItem;


        function savingToLs() {
            localStorage.setItem('input-day',JSON.stringify(dayReg));
            // localStorage.setItem('input-Date',JSON.stringify(months[month]));
            localStorage.setItem('input-Value',JSON.stringify(patientInput));

        }
function handleDaysClick (event){
    console.log(event.target.childNodes[0].data);
    console.log(event);
    console.log(event.target.classList[0]);
    if(event.target.classList[0] ==='prev-date'){
        
            for(let x=firstDayIndex;x>0;x--){
           
            if(parseInt(event.target.childNodes[0].data) === prevLastDay-x +1){
    //         console.log(firstDayIndex);
            // event.target.id=event.target.childNodes[0].data;
            console.log(event.target.id);
            currentItem= document.getElementById(event.target.id);
            element =document.createElement('p');
            currentItem.appendChild(element);
            //console.log(prevLastDay-x +1); 
          
        let input= prompt('Please, Enter the wanted Hour:');
        currentItem.style.color='crimson';
        element.style.color= 'crimson';
        element.style.fontSize='10px';
        element.style.fontWeight='bold';
        // element.style.position='absolute';
        element.style.bottom='0';
        element.style.zIndex='1';
        //element.style.position=
         patientInput.push(element.textContent=`${input}:00 o'clock`);
        // console.log(patientInput);
        // console.log(months[month]);
        dayReg.push(event.target.id);
        // console.log(dayReg);
        console.log(currentItem);
        console.log(element);
         savingToLs();
            }
            }
            
       
}
  else if (event.target.classList[0] === 'next-date') {
    // event.target.id=event.target.childNodes[0].data;
            console.log(event.target.id);
            let currentItem= document.getElementById(event.target.id);
            let element =document.createElement('p');
            currentItem.appendChild(element);
            //console.log(prevLastDay-x +1); 
            
            let input= prompt('Please, Enter the wanted Hour:');
            currentItem.style.color='crimson';
            element.style.color= 'crimson';
            element.style.fontSize='10px';
            element.style.fontWeight='bold';
            // element.style.position='absolute';
            element.style.bottom='0';
            element.style.zIndex='1';
            //element.style.position=
            element.textContent=`${input}:00 o'clock`;
            patientInput.push(element.textContent=`${input}:00 o'clock`);
            // console.log(patientInput);
            // console.log(months[month]);
            dayReg.push(event.target.id);
            // console.log(dayReg);
            console.log(currentItem);
            console.log(element);
             savingToLs();
       
    
} else {
        for(let x=1;x<=31;x++){
           
        if(parseInt(event.target.childNodes[0].data) === x){
            console.log(firstDayIndex);
            // event.target.id=event.target.childNodes[0].data;
            console.log(event.target.id);
            let currentItem= document.getElementById(event.target.id);
            element =document.createElement('p');
            currentItem.appendChild(element);
            //console.log(prevLastDay-x +1); 
          
        let input= prompt('Please, Enter the wanted Hour:');
        currentItem.style.color='crimson';
        // element.style.backgroundColor='black';
        element.style.color= 'crimson';
        element.style.fontSize='10px';
        element.style.fontWeight='bold';
        // element.style.position='absolute';
        element.style.bottom='0';
        element.style.zIndex='1';
        //element.style.position=
        element.textContent=`${input}:00 o'clock`;
        patientInput.push(element.textContent=`${input}:00 o'clock`);
        // console.log(patientInput);
        // console.log(months[month]);
        dayReg.push(event.target.id);
        // console.log(dayReg);
        console.log(currentItem);
        console.log(element);
         savingToLs();
        }
    

    
}

}

//console.log(savingToLs());
}
    

function gettingFromLocal() {
// let returnedObj = localStorage.getItem('input-Month');
let returnedInp = JSON.parse(localStorage.getItem('input-Value'));
let returnedD= JSON.parse(localStorage.getItem('input-day'));
console.log(returnedInp);
//console.log(dayReg);
if(returnedInp){
    for(let i=0;i<returnedInp.length;i++){
currentItem= document.getElementById(`${returnedD[i]}`);
element =document.createElement('p');
console.log(currentItem);
// element.setAttribute('id',)
// console.log(element);
currentItem.appendChild(element);
// console.log(currentItem);

// JSON.parse(returnedObj);
//  JSON.parse(returnedInp);
currentItem.style.color='crimson';
// element.style.backgroundColor='black';
        element.style.color= 'crimson';
        element.style.fontSize='10px';
        element.style.fontWeight='bold';
        // element.style.position='absolute';
        element.style.bottom='0';
        element.style.zIndex='1';
//         
        element.textContent= `${returnedInp[i]}`;
    }
} 
}
gettingFromLocal();