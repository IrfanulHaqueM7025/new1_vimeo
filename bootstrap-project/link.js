var on = document.getElementById("on");
var off = document.getElementById("off");
  
function myFunction() {  
  if (on.style.display === "none") {  
    off.style.display = "none";
    on.style.display = "block";
  } else {
    off.style.display = "block";
    on.style.display = "none";
  }
}
function login(showhide){
  if(showhide == "show"){
      document.getElementById('popupbox').style.visibility="visible";
  }else if(showhide == "hide"){
      document.getElementById('popupbox').style.visibility="hidden"; 
  }
  }

  function toggleSignIn() {
    var signInPopup = document.getElementById('signInPopup');
    signInPopup.style.display = (signInPopup.style.display === 'none') ? 'block' : 'none';
  }

  var div = document.getElementsById("aa1c");
  var display = 0;
  function footerClick(){
    if(display == 0){
      document.getElementsById("aa1c").style.display  = "contents";
      display = 1;
    }
    else(display == 1)
    {
      div.style.display = "none"; 
      display = 0;
    }
       
  }
