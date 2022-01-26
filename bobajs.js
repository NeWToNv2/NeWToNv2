var myClosed = document.getElementById("closed");
var myOpen = document.getElementById("open");
function doAnything(myTime){
    myTime = new Date().toLocaleTimeString([] , {hour: "numeric" , minute: 'numeric' , second: 'numeric'} , {hour12: false}); 
    myHour = parseInt(myTime.substring(0,2));   
    if(myHour > 10 && myHour < 22){
        myClosed.style.display = "none";
        myOpen.style.display = "block";
    }
    else{
        myClosed.style.display = "block";
        myOpen.style.display = "none";
    }
};
doAnything();
//Get the button
var mybutton = document.getElementById("ScrollToTopBtn");

//button appearance and disappearance
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// after click button its srcoll page to top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function FunAboutUsBtn() {
    window.scroll(0,1980); // Scroll to About us pannel
}

function FunContacts() {
    window.scroll(0,2800); // Scroll to Contacts pannel
}
function FunMenuBtn() {
    window.scroll(0,650 ); // Scroll to Menu button
}

/*change language*/ 
function changeLang(lang) {
        lengthObj = Object.getOwnPropertyNames(lang).length;
            for (var i = 0; i <= lengthObj - 1; i++) {
                objKey = Object.getOwnPropertyNames(lang)[i];
                console.log(objKey);
                document.getElementById(objKey).innerText = func(objKey);
            }

function func(_objKey) {
    for (key in lang) {
        if (key == _objKey) {
            return (lang[key]);
        }
    }
    }
}


