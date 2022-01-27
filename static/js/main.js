$(document).ready(function () {
    $('selector').flickity()
    $('.scroll-up-btn').click(function () {
    $('html').animate({
        scrollTop: 0
        });
    });
    AOS.init({
    duration: 800,
    });
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });
});

// Flickity
$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true
  });

// W3school
function myFunction(x) {
    x.classList.toggle("change");
}

const triggers = document.querySelectorAll('.menu-trigger'),
    activeClass = 'active';
triggers.forEach((trigger) => {
    trigger.addEventListener('click', (e) => {
        e.currentTarget.classList.toggle(activeClass);
    });
});


// Custom function that toggles a heart icon
function myWishList(){
    var addList  = document.getElementById("addList");
    addList.style.display = "block";
    console.log("add to wishlist");
}

function addwishList(){
    var addList  = document.getElementById("addList");
        addList.style.display = "none"
        console.log("remove from wishlist");
    }

    
function openNav() {
    document.getElementById("myNav").style.width = "90%"; 
}
  
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}


