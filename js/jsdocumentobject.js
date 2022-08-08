let val;

val = document;
vla = document.doctype;
val = document.head;
val = document.body;
val = document.URL;

val = document.links; //HTMLCOLLECTION (array)
val = document.links[0];
val = document.links[3];
val = document.links[0].id;
val = document.links[0].className;
val = document.links[0].classList; //DOMTOKENLIST (array)
val = document.links[0].classList[1];
val = document.links[0].classList[0];

val = document.forms; //HTMLCOLLECTION (array)
val = document.forms[0];
val = document.forms[0].id;
val = document.forms[0].className;
val = document.forms[0].classList; //DOMTOKENLIST (array)
val = document.forms[0].classList[0];
val = document.forms[0].action;
val = document.forms[0].method;

val = document.images;
val = document.images[0];
val = document.images[0].src;
val = document.images[0].className;
val = document.images[0].classList;
val = document.images[0].classList[0];
val = document.images[0].alt;
val = document.images[0].getAttribute('abc');

val = document.scripts;
val = document.scripts[0];
val = document.scripts[0].src;
val = document.scripts[0].type;
val = document.scripts[0].getAttribute('src');
val = document.scripts[0].getAttribute('type');

// console.log(val); 

//change Styling

document.getElementById("tasktitle").style.background = "grey";
// document.getElementById("tasktitle").style.color="#fff";
document.getElementById("tasktitle").style.padding="5px";


//change content

// document.getElementById("tasktitle").textContent = "My List";
// document.getElementById("tasktitle").innerText = "My Tasks";
 document.getElementById("tasktitle").innerHTML =`<span style="color:yellow">My Job</span>`;


// call to class Name

let lis = document.getElementsByClassName("list-group-item"); //HTML collection

// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color="blue";
// lis[1].textContent = "Have to Visit";

//call to Tag

let litags=document.getElementsByTagName("li"); //HTML collection
// console.log(litags);
// console.log(litags[0]);
// litags[0].style.color = "red";
// litags[1].innerText = "Have to cook";


//querySelector note:queryselector ka ta ku pal shi tar ko pal call lo ya thi
// console.log(document.querySelector("#tasktitle"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h3"));

console.log(document.querySelector("li"));
// document.querySelector("li").style.color="red";
// document.querySelector("ul li").style.color="blue";
// document.querySelector("ul li:nth-child(odd)").style.color="silver";
// document.querySelector("ul li:nth-child(even)").style.color="grey";
// document.querySelector("ul li:nth-child(5)").style.color = "green";
// document.querySelector("ul li:nth-of-type(3)").style.color = "silver";


const listitems = document.querySelector("ul").getElementsByClassName("list-group-item");
// console.log(listitems);


// document.querySelector("ul li:nth-child(odd)").style.color="silver";
// document.querySelector("ul li:nth-child(even)").style.color="grey";

//console.log(typeof listitems);
let arritems = Array.from(listitems);
console.log(arritems);

// arritems.forEach(function(arritem,index){
    // console.log(arritem);
    // arritem.textContent = "hello";
//     arritem.innerText = `${index} : hello`;
// });


//querySelectorAll

// let its = document.querySelector('ul.list-group li.list-group-item');
// console.log(its);

// let itms = document.querySelectorAll('ul.list-group li.list-group-item');
// console.log(itms); //Note list 
// console.log(itms[0]);

// itms.forEach(function(itm,index){
    // console.log(index);

    // itm.textContent="hello";
//     itm.innerHTML = `${index} : Hello World`;
// });


const liodd = document.querySelectorAll("li:nth-child(odd)");
const lieven = document.querySelectorAll('li:nth-child(even)');

// liodd.forEach(function(li,index){
//     // console.log(li);
//     li.style.background = "gold";
// });

// for(let i=0; i<lieven.length; i++){
    // console.log(i);
    // console.log(lieven[i]);

    // lieven[i].style.background = "silver";
// }


// children

let chl;

const getul = document.querySelector('ul.list-group');
// console.log(getul);

const getli = document.querySelector('li.list-group-item:first-child');
// console.log(getli);

// chl = getul.children; //HTML Collection
// console.log(chl);
// console.log(chl[0]);
// chl = getul.children[1];
// console.log(chl);

// getul.children[1].innerText = "have to read";
// getul.children[1].innerHTML = `Have To read<a href="#" id="delete-item1" class="delete-item delete-me"><i class="fa-solid fa-trash-can"></i></a></li>`


//Children of Children

chl = getul.children[1].children; //HTML collection
chl = getul.children[1].children[0];
chl = getul.children[1].children[0].id;
chl = getul.children[1].children[0].className;
chl = getul.children[1].children[0].classList; //DOM Token List
chl = getul.children[1].children[0].href;
chl = getul.children[1].children[0].getAttribute('href');

chl =getul.children[1].children[0].children;
chl =getul.children[1].children[0].children[0];

//FirstElementChild
chl = getul.firstElementChild;

//LastElementChild
chl = getul.lastElementChild;

//child Element Count
chl = getul.children.length;
chl = getul.childElementCount;

chl = getul.children[0].childElementCount;
chl = getul.children[0].children[0].childElementCount;



// console.log(chl); 


//parent Element

const getfirstli = document.querySelector('li.list-group-item:first-child');

let par = getfirstli.parentElement;
// console.log(par);

//Next Element Sibling

let sbl = getfirstli.nextElementSibling;
sbl = getfirstli.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling;

// console.log(sbl);

let psbl = getfirstli.nextElementSibling.nextElementSibling.previousElementSibling;
// console.log(psbl);


// Create Element

const newli=document.createElement('li');
// console.log(newli);

//Add ID
newli.id = 'new-itme';

//Add Class
newli.className = 'list-group-item';

// Add Attribute (qualifiedname,value)
newli.setAttribute('title','newitem');

// newli.textContent = 'hay';
// newli.innerText = 'hi';
// newli.innerHTML =`List Item6<a href="#" id="delete-item5" class="delete-item"><i class="fa-solid fa-trash-can"></i></a>`


//create Text Node

newli.appendChild(document.createTextNode('Save Myanmar'));




const newlink = document.createElement('a');

newlink.href = "#";

//Add Class
newlink.className = 'delete-item';

//Add Id
newlink.id = 'delete-itme6';

newlink.innerHTML =`<i class="fa-solid fa-trash-can"></i>`;

// console.log(newlink);


newli.appendChild(newlink);

const newel =document.querySelector('ul.list-group').appendChild(newli);


console.log(newel);


//Replace Element

const newtitle = document.createElement('h2');
newtitle.id = "tasktitle";

//create text node
newtitle.appendChild(document.createTextNode('ALL My list'));

// console.log(newtitle);

const oldtitle = document.getElementById('tasktitle');
// console.log(oldtitle);

const getcardaction = document.querySelector('.card-action');

//replace child (new,old)
getcardaction.replaceChild(newtitle,oldtitle);

console.log(newtitle);

//Remove Element

const getlis = document.querySelectorAll('li');//Node List
// console.log(getlis);
// console.log(getlis[0]);

// getlis[0].remove();
// getlis[4].remove();


//Remove Element Child

const getfirstul = document.querySelector('ul');
// console.log(getfirstul);
// console.log(getlis[0]);

// getfirstul.removeChild(getlis[0]);
// getfirstul.removeChild(getlis[5]);



//className vs classList

const firstli = document.querySelector('li:first-child');
//console.log(firstli);
// const firstlink = firstli.children;//HTML collection
const firstlink = firstli.children[0];
//console.log(firstlink);

let firstlnk;
firstlnk = firstlink.className;
// console.log(firstlnk);

// firstlink.className = 'delete-myself';
// firstlink.className = 'delete-item delete-myself';
// fistlink.className = 'delete-item delete-me delete-myself';



firstlnk = firstlink.classList; //DOM Token List
// console.log(firstlnk);
// console.log(firstlnk[0]);
// console.log(firstlnk[1]);

// firstlink.classList.add('delete-ourserve');
// firstlink.classList.add('delete-myself');
// firstlink.classList.add('delete-myself','delete-ourserve')

// firstlink.classList.remove('delete-item');
// firstlink.classList.remove('delete-me','delete-myself');

//Replace(old,new)
// firstlink.classList.replace('delete-ourserve','delete-delete');


// if(firstlink.classList.contains('delete-me')){
//     console.log('yes');
// }else{
//     console.log('no');
// }


//Attribute
let getatt = firstlink.getAttribute('href');
// console.log(getatt);

firstlink.setAttribute('href','https://google.com');
getatt =firstlink.hasAttribute('href');
console.log(getatt); //true
getatt =firstlink.hasAttribute('title');
console.log(getatt);//false

// note:HTML collection so yin array ko change p ma loop pat lo ya thi
    
// querySelectorAll so tin NOTE LIST so te array ne output pya thi



//addEventListener(eventtype,callbackfunction)

const clearbtn = document.querySelector('.clear-tasks');

//Method1
// clearbtn.addEventListener('click',function(e){
//     console.log('hay i am working');

//     e.preventDefault();
// });

//  Method2

clearbtn.addEventListener('click',myclick);

function myclick(e){

    // console.log('hay i am my click');


    let val;
    val = e;
     //Event Target element
     val = e.target;
     val = e.target.id;
     val = e.target.className;
     val = e.target.classList; //DOM TOKEN list

     e.target.innerText = 'finished';

     //event type

     val = e.type;
        //coordinate event - relative to the window
     //val = e.clientX;
     // val = e.clientY;
        //coordinate event - relative to the element
    val = e.offsetX;
    val = e.offsetY;

     console.log(val);

    e.preventDefault();
}

// MouseEvent

const clbtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h2');
// console.log(heading);

//single click
// clbtn.addEventListener('click',mouseeventtype);

//double click
// clbtn.addEventListener('dblclick',mouseeventtype);

//mousedown
// clbtn.addEventListener('mousedown',mouseeventtype);

//mouseup
//clbtn.addEventListener('mouseup',mouseeventtype);

//mouseenter
// card.addEventListener('mouseenter',mouseeventtype);

//mouseleave
// card.addEventListener('mouseleave',mouseeventtype);



//mouseover
// card.addEventListener('mouseover',mouseeventtype);

//mousemove
// card.addEventListener('mousemove',mouseeventtype);

// function mouseeventtype(e){
//     console.log(`event type = ${e.type}`);

//     e.preventDefault();
// }


// const formel = document.querySelector('form');

// formel.addEventListener('submit',inputeventtype);

// function inputeventtype(e){
    // console.log(`Event type = ${e.type}`);
    // console.log(e.target);
    // console.log(inputtask.value);

    // e.preventDefault();
// }

// const inputtask = document.getElementById('task');

// const geth2 = document.querySelector('h2');

// function inputevntype(e){
//     console.log(`Event Type =${e.type}`);
//     console.log(e.target.value);

//     geth2.textContent = e.target.value;

    // e.preventDefault();
// }





document.querySelector("form").addEventListener('submit',function(){
    console.log("hay i am working")
})










