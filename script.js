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
