//Pre Loader
$(window).on("load", function () {
    $(".lds-spinner").fadeOut(1500);
});

// ****************** Hanburger Start ****************
// Onclick mobile menu hide
$('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
});

function openNav() {
    document.getElementById('navbarSupportedContent').classList.toggle("open");
}

function toggleMenu() {
    document.getElementsByClassName('navbar-toggler')[0].getElementsByTagName('input')[0].checked = !document
        .getElementsByClassName('navbar-toggler')[0].getElementsByTagName('input')[0].checked;
    openNav();
}

// ****************** Hanburger End *******************

// ************** Scroll Top  **********************
//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 320) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
// ************** Scroll Top End **********************


//footer current year with this following
// document.getElementById("year").innerHTML = new Date().getFullYear();