let disply=document.querySelector(".res");
let his=document.querySelector(".his");
disply.innerText="";

//click a buttton
let btn=document.querySelectorAll(".inpt");
btn.forEach(x=>{
   x.addEventListener("click",()=>{
        disply.innerText+=x.innerText;
        
    });
})

// Double click delete button clear all
btn[13].addEventListener('dblclick',()=>{
    his.innerText="";
    disply.innerText="";
});
// document.querySelector('button').addEventListener('dblclick',()=>{console.log("hello world")});

// Click equal button display result
document.querySelector('.rslt').addEventListener('click',()=>{
    his.innerText=disply.innerText;
    disply.innerText=eval(disply.innerText);


});


