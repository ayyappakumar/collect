// JavaScript Document

//(function(){
var validateme =  function(option) {
//var x = document.getElementsById(this);
//var x = document.forms[this];

for (var z=0;z<option;z++){
  
//var val = validateme(z);
x = document.forms[z];
var a = z+1;
//alert(x)
var formimpo = x.getAttribute('data-form');
if(x.hasAttribute('data-form')){
if(formimpo === 'ayya'){
for (var i=0;i<x.length;i++)
  {
//  alert(x.elements[i].value);
  console.log(x.elements[i].getAttribute('data-num'));
  var brand = x.elements[i].getAttribute('data-num');
  if(brand === 'number'){
  x.elements[i].setAttribute('id','numclass');
  
  x.elements[i].setAttribute('onblur','validateme('+a+')');
//  alert(i)
  } 
  if(brand === 'text'){
  x.elements[i].setAttribute('class','textclass1');
  x.elements[i].setAttribute('name','textclass');
 
email(x)
  }
  }
}
}
 }
//function callfn(){
//document.getElementById("textclass").onblur = email();
//}
var abc=false;
function email(z) {
  alert(z);
  var email1 = z.elements["textclass"];
  var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   

    if (!filter.test(email1.value) ) 
    {
    alert('Please provide a valid email address');
		abc=false;
     }else
     {
       alert('email address is valid');
			 abc=true;
     }
}
}
//})();


