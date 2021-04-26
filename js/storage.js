
 Volunteerlist = document.getElementById('volunteerlist');


function getFromLs(){
    let data = localStorage.getItem('volSaved');

    let order = JSON.parse(data);

    if (order){
        volunteer.arrOfObject =order;
    }
    rederList();
    
}

getFromLs();