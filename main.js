function bgFunction() {
  var x, message;
  x = document.getElementById("input").value;

  if (x == "") {
    alert("Input is empty. Please enter a positive 2 digit number.");
  } else if (isNaN(x)) {
    alert("Input is not a number. Please enter a positive 2 digit number.");
  } else if (x >= 1 && x <= 9) {
    alert("Input is too low. Please enter a positive 2 digit number.");
  } else if (x > 99) {
    alert("Input is too high. Please enter a positive 2 digit number.");
  } else if (x == 00) {
    alert("Input is not valid, 00 is not a positive number. Please enter a positive 2 digit number.");
  } else {
    message = "";
    for (i = 1; i < x; i += 2) {
      message += i + " ";
    }
    document.getElementById("r").innerHTML = message;
  }
}

function bpFunction() {
    var x, message;
    document.getElementById("r").innerHTML = "";
    x = document.getElementById("input").value;


         for(a=2;a<=x;a++){
                ct=0;
                 for(j=2;j<a;j++){
                      if(a%j==0){   //checking whether num is dvisible by j
                         ct=1;  
                         break;
                         }
                    }
            if(ct==0){   //if num is divisible by 2 numbers,then it is prime
                 var r = $('#r').html(); 
                 $('#r').html(r+' '+j); 
            }
         }
  
  }

  function myFunction() {
    var x, message;
    document.getElementById("r").innerHTML = "";
    x = document.getElementById("input").value;

    var number = x;
    r = [],
    sNumber = number.toString();
    for (var i = 0, len = sNumber.length; i < len; i += 1) {
        r.push(+sNumber.charAt(i));
    }
                 $('#r').html(r+'</ br>'); 
  }