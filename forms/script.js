
//(function(){

var validateme =  function(option) {
  for (var z=0;z<option;z++) {
    var x = document.forms[z];
    var a = z;
    var formimpo = x.getAttribute('data-form');
    if(x.hasAttribute('data-form')) {
      if(formimpo === 'valiform') {
        for (var i=0;i<x.length;i++) {
          console.log(x.elements[i].getAttribute('data-num'));
          var brand = x.elements[i].getAttribute('data-num');
          if(brand === 'number') {
            x.elements[i].setAttribute('id','numclass'); 
            x.elements[i].setAttribute('name','numclass'); 
            x.elements[i].setAttribute('onblur','email('+ a +')');
          } 
          if(brand === 'text') {
            x.elements[i].setAttribute('class','textclass1');
            x.elements[i].setAttribute('name','textclass'); 
            x.elements[i].setAttribute('onblur','name_validation('+ a +')');
          }
          if(brand === 'time') {
            //            x.elements[i].setAttribute('class','textclass1');
            x.elements[i].setAttribute('name','timeclass'); 
            x.elements[i].setAttribute('onblur','formtime('+ a +')');
          }
          if(brand === 'phone') {
            //            x.elements[i].setAttribute('class','textclass1');
            x.elements[i].setAttribute('name','phoneclass'); 
            x.elements[i].setAttribute('onblur','telephone_vali('+ a +')');
          }
          if(brand === 'pincode') {
            //            x.elements[i].setAttribute('class','textclass1');
            x.elements[i].setAttribute('name','codeclass'); 
            x.elements[i].setAttribute('onblur','pinnum_vali('+ a +')');
          }
        }
      }
    }
  }
}

var emailval=false;
function email(d) {
  var z = document.forms[d];
  var email1 = z.elements["numclass"].value;
  var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;   
  if (!filter.test(email1)) {
    alert('Please provide a valid email address');
    emailval = false;
  }else {
    alert('email address is valid');
    emailval = true;
  }
}

function name_validation(d){    
  var z = document.forms[d];
  //  alert(z);
  var uname = z.elements["textclass"].value;
  //  alert(uname)
  var letters = /^[a-zA-Z\.\'\-\s]+$/;
  if(!letters.test(uname)) {  
    alert("Name must have alphabet characters only");
  }else {
    alert(" VALID alphabet characters only");
  } 
}  

function formtime(d) {
  var z = document.forms[d];
  //  alert(z);
  var times = z.elements["timeclass"].value;
  //  alert(times)
  var time=/^[0-2]{0,1}[0-9]{0,1}:[0-9]{2}\s?(AM|am|PM|pm)?$/;
  if(times.match(time)) {
    var sub=times.length-2,
    strs= times.substr(sub,2),
    splittime = times.split(":"),
    minpatt=/\d{2}/g,
    mins =splittime[1].match(minpatt), 
    minute=parseInt(mins); 
    if(minute>59) {
      alert("Check Minute is Not Above 60");
    }
    if(splittime[0] < 24) {
      if(splittime[0] < 12 && splittime[0] > 0) {
        if(strs==="AM" ||strs==="PM" ||strs==="am" ||strs==="pm") {
          
        }else {
          alert("Please Enter  AM/PM");
         
        }
      }else if(splittime[0] <= 23 && splittime[0] >= 12 ) {
        if(strs==="AM" ||strs==="PM" ||strs==="am" ||strs==="pm") {
          alert("AM/PM not allowed in 24 hours");
         
        }
        else {
         
        }
      }
    } else {
      alert("Check Hour is Not Above 23 ");
    }
  } else {
    alert('Please Enter a valid time format eg."HH:MM PM/AM"');
  }
}

function telephone_vali(d)
{
  var z = document.forms[d];
     alert(z);
  var telno = z.elements["phoneclass"].value,
  pattern1=/^(([0-9]|[\+])?)[0-9]{10}/;
 
 alert(telno);
  var t = pattern1.test(telno);
  alert(t)
  if(telno === " "  || telno === null) {
    alert('Phone number cannot be left blank'); 
  }else if(!t) {
    alert('Please enter valid phone number');    
  }
}

function pinnum_vali(d)
{
  var z = document.forms[d];
//  alert(z);
  var codeno = z.elements["codeclass"].value,
   pattern=/^(([0-9]|[\+])?)[0-9]{6}/;
  var m = pattern.test(codeno);
//  alert(m)
  if(codeno === " "  || codeno === null) {
    alert('Pincode number cannot be left blank');
  }else if(!m) {
    alert('Please enter valid Pincode number'); 
  }
}

//})();


