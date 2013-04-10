
//(function(){
var nameval = false,
    emailval = false,
    timeval = false,
    phoneval = false,
    datesval = false,
    codeval = false;
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
            //            x.elements[i].setAttribute('id','numclass'); 
            x.elements[i].setAttribute('name','numclass'); 
            x.elements[i].setAttribute('onblur','email('+ a +')');
          } 
          if(brand === 'text') {
            //            x.elements[i].setAttribute('class','textclass1');
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
          if(brand === 'dates') {
            //            x.elements[i].setAttribute('class','textclass1');
            x.elements[i].setAttribute('name','dateclass'); 
            x.elements[i].setAttribute('onblur','isValidDate('+ a +')');
          }
          if(brand === 'submit') {
            //            x.elements[i].setAttribute('class','textclass1');
            x.elements[i].setAttribute('name','submitclass'); 
            x.elements[i].setAttribute('onclick','formsubmit('+ a +')');
          }
        }
      }
    }
  }
}

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
  var uname = z.elements["textclass"].value;
  var letters = /^[a-zA-Z\.\'\-\s]+$/;
  if(!letters.test(uname)) {  
    alert("Name must have alphabet characters only");
    nameval = false;
  }else {
    alert(" VALID alphabet characters only");
    nameval = true;
  } 
}  

function formtime(d) {
  var z = document.forms[d];
  var times = z.elements["timeclass"].value,
  time=/^[0-2]{0,1}[0-9]{0,1}:[0-9]{2}\s?(AM|am|PM|pm)?$/;
  if(times.match(time)) {
    var sub=times.length-2,
    strs= times.substr(sub,2),
    splittime = times.split(":"),
    minpatt=/\d{2}/g,
    mins =splittime[1].match(minpatt), 
    minute=parseInt(mins); 
    if(minute>59) {
      alert("Check Minute is Not Above 60");
      nameval = false;
    }
    if(splittime[0] < 24) {
      if(splittime[0] < 12 && splittime[0] > 0) {
        if(strs==="AM" ||strs==="PM" ||strs==="am" ||strs==="pm") {
          nameval = true;
        }else {
          alert("Please Enter  AM/PM");
          nameval = false;
        }
      }else if(splittime[0] <= 23 && splittime[0] >= 12 ) {
        if(strs==="AM" ||strs==="PM" ||strs==="am" ||strs==="pm") {
          alert("AM/PM not allowed in 24 hours");
          nameval = false;
        }
        else {
          nameval = true;
        }
      }
    } else {
      alert("Check Hour is Not Above 23 ");
      nameval = false;
    }
  } else {
    alert('Please Enter a valid time format eg."HH:MM PM/AM"');
    nameval = false;
  }
}

function telephone_vali(d) {
  var z = document.forms[d];
  var telno = z.elements["phoneclass"].value,
  pattern1=/^(([0-9]|[\+])?)[0-9]{10}/;
  var t = pattern1.test(telno);
  if(telno === " "  || telno === null) {
    alert('Phone number cannot be left blank'); 
    phoneval = false;
  }else if(!t) {
    alert('Please enter valid phone number'); 
    phoneval = false;
  }
  phoneval = true;
}

function pinnum_vali(d) {
  var z = document.forms[d];
  var codeno = z.elements["codeclass"].value,
  pattern=/^(([0-9]|[\+])?)[0-9]{6}/;
  var m = pattern.test(codeno);
  codeval = true;
  if(codeno === " "  || codeno === null) {
    alert('Pincode number cannot be left blank');
    codeval = false;
  }else if(!m) {
    alert('Please enter valid Pincode number'); 
    codeval = false;
  }
}

function isValidDate(d) {
  datesval = true; 
  var z = document.forms[d];
  var dateStr = z.elements["dateclass"].value;
  var datePat = /^(\d{1,2})(\/|-|.)(\d{1,2})\2(\d{2}|\d{4})$/;
  var matchArray =  dateStr.match(datePat); 
  if (matchArray === null) {
    alert("Date is not in a valid format.");
    datesval = false;
  }else {
  var day = matchArray[1],
  month = matchArray[3],
  year = matchArray[4];
  if (month < 1 || month > 12) { 
    alert("Month must be between 1 and 12.");
    datesval = false;
  }
  if (day < 1 || day > 31) {
    alert("Day must be between 1 and 31.");
    datesval = false;
  }
  if ((month==4 || month==6 || month==9 || month==11) && day==31) {
    alert("Month " + month + " doesn't have 31 days! ");
    datesval = false;
  }
  if (month == 2) { 
    var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
    if (day>29 || (day==29 && !isleap)) {
      alert("February " + year + " doesn't have " + day + " days!");
      datesval = false;
    }
  }
  }
}

function formsubmit(a){
  if (datesval == false || codeval == false || phoneval == false || nameval == false || emailval == false || phoneval == false) {
    name_validation(a);
    telephone_vali(a);
    email(a);
    pinnum_vali(a);
    isValidDate(a);  
    formtime(a);
  }else{
    alert('success')
  }
}

//})();


