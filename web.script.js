$(document).ready(function(){
    $(".leftin").waypoint(function() {
        $(".leftin").addClass("animate__animated animate__fadeInLeft");
       
    }, { offset: "80%" });
})

$(document).ready(function(){
    $(".delay").waypoint(function() {
        $(".delay").addClass("animate__animated animate__fadeInRight");
       
    }, { offset: "70%" });
})


$(document).ready(function(){
    $(".rightin").waypoint(function() {
        $(".rightin").addClass("animate__animated animate__fadeInRight");
       
    }, { offset: "90%" });
})

$(document).ready(function(){
    $(".delay2").waypoint(function() {
        $(".delay2").addClass("animate__animated animate__fadeInLeft");
       
    }, { offset: "60%" });
})
/*window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.shake');
        for (var i = 0; i <reveals.length; i++){

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 120;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');

            }

            else{
                reveals[i].classList.remove('active');
            }
        }
    
}*/

window.addEventListener('scroll', function()
{
    var headnav = document.querySelector('.navlinks');
    var scrollPosition = window.scrollY;
    var scrollThreshold = 100;

    if (scrollPosition > scrollThreshold)
    {
        headnav .classList.add('scrolled');

    }
    else{
        headnav.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', function () {
    var navhe = document.querySelector('.navhe');
    var scrollPosition = window.scrollY;
    var scrollThreshold = 100;

    if (scrollPosition > scrollThreshold) {
        navhe.classList.add('scrolled');
    } else {
        navhe.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
        for (var i = 0; i <reveals.length; i++){

            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 120;

            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');

            }

            else{
                reveals[i].classList.remove('active');
            }
        }
    
}

const menuicon = document.querySelector('.menuicon');
const navlinks = document.querySelector('.navlinks');

menuicon.addEventListener('click', () => {
    navlinks.classList.toggle('mobile-menu');
});


function clearContent(element) {
    element.textContent = '';
}
function clearContent(id) {
    document.getElementById(id).textContent = '';
}
// Get all service name elements
const serviceNames = document.querySelectorAll('.service-name');

// Add click event listener to each service name
serviceNames.forEach(serviceName => {
    serviceName.addEventListener('click', () => {
        // Toggle visibility of dropdown content
        const dropdownContent = serviceName.nextElementSibling;
        dropdownContent.classList.toggle('hidden');
    });
});


const serviceInfos = document.querySelectorAll('.service-info');

// Add click event listener to each service name
serviceInfos.forEach(serviceInfo => {
    serviceInfo.addEventListener('click', () => {
        // Toggle visibility of the image
        const dropdownIcon = serviceInfo.querySelector('.dropdown-icon');
        dropdownIcon.classList.toggle('hidden');
    });
});


window.addEventListener('scroll', reveal);

function reveal() {
    var reveals = document.querySelectorAll('.reveal');
    var windowheight = window.innerHeight; // Calculate window height outside the loop for efficiency

    for (var i = 0; i < reveals.length; i++) {
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 80;

        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var faqLinks = document.querySelectorAll('.faq a');
    faqLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            var faqListItem = this.closest('.faq'); // Get the closest ancestor with the 'faq' class
            console.log(faqListItem); // Output the faqListItem to console for debugging
            // Now you can access properties or modify the faqListItem as needed
        });
    });
});

