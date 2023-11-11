function  myfunc() {
    let searchval = document.getElementById("inp").value.toUpperCase();
    let table = document.getElementsByTagName("table");
    let tr = document.getElementsByTagName("tr");
    console.log(searchval);
    let front = document.querySelector(".main");

    for(let i = 0;i<tr.length;i++){
        let td = tr[i].getElementsByTagName("td")[0];
        if(td){
            let text = td.innerText;
            if(text.toLocaleUpperCase().indexOf(searchval)>-1){
                tr[i].style.display ="";
                front.style.display="none";
            }
            else{
                tr[i].style.display="none";
            }
        }
    }
    if(searchval ==""){
        front.style.display ="";
    }
}

function Nav(e) {
    let nav = document.querySelector(".nav");
    let login = document.querySelector(".login");
    // nav.style.display="block";
    if(nav.style.display==="none" ){
        nav.style.display="block";
    }
    else{
        nav.style.display="none";
    }
    login.style.display="none";
}

function Login() {
    let login = document.querySelector(".login");
    let nav = document.querySelector(".nav");
    // login.style.display="block";
    if(login.style.display==="none" ){
        login.style.display="block";
    }
    else{
        login.style.display="none";
    }
    nav.style.display="none";
    
}

let slide = document.querySelectorAll(".customer");
console.log(slide);
count=0;

slide.forEach(function (customer,index) {
    customer.style.left=`${index*100}%`;
})

function next() {
    count++;
    if(count== slide.length){
        count=0;
    }
    bar();
}

function pre(){
    count--;
    if(count==-1){
        count=slide.length-1
    }
    bar();
}

function bar() {
    slide.forEach(function (customer) {
        customer.style.transform = `translateX(-${count*100}%)`
    })
}
