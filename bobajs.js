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
                console.log(i);
                objKey = Object.getOwnPropertyNames(lang)[i];
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