//alert("Loding");
function addNewWEField() {
//console.log("adding new field");


let newnode = document.createElement("textarea");
newnode.classList.add("form-control");
newnode.classList.add("weField");
newnode.classList.add("mt-2")

newnode.setAttribute("rows" , 2);
newnode.setAttribute("placeholder" , "Enter here")


let weOb = document.getElementById("we");
let weAddButtonOb=document.getElementById("weAddButton");

weOb.insertBefore(newnode,weAddButtonOb);
}

function addNewAQField()
{
    let newnode = document.createElement("textarea");
    newnode.classList.add("form-control");
    newnode.classList.add("eqField");
    newnode.classList.add("mt-2")
    
    newnode.setAttribute("rows" , 2);
    newnode.setAttribute("placeholder" , "Enter here")
    
    
    let aqOb = document.getElementById("aq");
    let aqAddButtonOb=document.getElementById("aqAddButton");
    
    aqOb.insertBefore(newnode,aqAddButtonOb);
}
//genrating resume
function generateresume()
{
//console.log("Generate Resume");  
let nameField = document.getElementById("nameField").value;

let nameT1 = document.getElementById("nameT1");

nameT1.innerHTML = nameField;

// direct

document.getElementById("nameT2").innerHTML = nameField;

//contact
document.getElementById("contactT").innerHTML=document.getElementById(
   "contactField"
    ).value;
//address
document.getElementById("addressT").innerHTML=document.getElementById(
    "addressField"
    ).value;
    document.getElementById("fbT").innerHTML=document.getElementById(
        "fbField"
        ).value;
        document.getElementById("instaT").innerHTML=document.getElementById(
            "instaField"
            ).value;
            document.getElementById("linkedT").innerHTML=document.getElementById(
                "linkedField"
                ).value;


//objective

document.getElementById("objectiveT").innerHTML=document.getElementById(
    "objectiveField"
    ).value


//we
let wes = document.getElementsByClassName("weField");
let str="";

for(let e of wes)
{
    str=str+`<li> ${e.value} </li>`;
}
document.getElementById("weT").innerHTML = str;

//aq

let aqs = document.getElementsByClassName("eqField");

let str1 ="";

for(let e of aqs)
{
    str1+= `<li> ${e.value} <li>`;
}
document.getElementById("aqT").innerHTML = str1;

//code for setting image

let file=document.getElementById("imgField").files[0];

console.log(file);

let reader=new FileReader();

reader.readAsDataURL(file);

console.log(reader.result);


//set the image in template

reader.onloadend=function()
{
document.getElementById("imgTemplate").src=reader.result;
};


document.getElementById("resume-form").style.display="none";
document.getElementById("resume-template").style.display="block";
}

// print cv
function printresume(){
    window.print();
}
