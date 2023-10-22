/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // git book icon change color when hovers git book icon
    const gitBookIcon = document.querySelector('#git-book-icon');
    gitBookIcon.addEventListener('mouseenter', function() {
        this.src = './assets/img/gitbook-icon-hover.svg'
    })
    gitBookIcon.addEventListener('mouseleave', function() {
        this.src = './assets/img/gitbook-icon.svg'
    })


    // change the navBar color on Roadmap
    const navBarColorChange = () => {
        const navbarCollapsible = document.querySelector('#mainNav');
        const navLinks = document.querySelectorAll('.nav-link');
        
        const activeLink = Array.from(navLinks).find(link => link.classList.contains('active'));
        if (activeLink) {
            const activeLinkCheck =  activeLink.textContent !== 'About';        
            navbarCollapsible.classList.toggle('navbar-color-update', activeLinkCheck );
            
            navLinks.forEach(link => {
                link.classList.toggle('navba-a-color-fff', activeLinkCheck);
            });
        
            if (!activeLinkCheck) {
                navbarShrink();
            }
        }
        
    };

    navBarColorChange();
    document.addEventListener('scroll', navBarColorChange);

});
// Discord Modal
function myFunction(){
    var answerOne = document.querySelector('#recipient-name').value.toUpperCase();

    if (answerOne === "BASED") { 
      document.querySelector('#incorrect').innerHTML = "Correct!";
      $("#next").text("Proceed");
      $("#next").attr("class", "btn btn-success");
      $("#next").attr("data-bs-target", "#exampleModalToggle2");
      $("#next").attr("data-bs-toggle", "modal");
      $("#result2").html("</br> To reveal your Discord link, copy and decode the following text:</br><strong> Uhw xlnea 46/Ka5/6319 Uldocwpopr 6r esi5o rg swgrod telmocx ipr teqls </strong> </br></br> Note</br>  Key: BASED </br> Alphabet: ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 </br> <em> Hint: Blaise de Vigenère would be Based.</em></br> Paste your Answer in the box below and click 'Submit'")
      }
   else if (answerOne !== "BASED") {
      document.querySelector('#incorrect').innerHTML = "INCORRECT! Try again.";

    };
  }

  function myFunction2(){
    var answerTwo = document.querySelector('#recipient-name2').value;

    if (answerTwo === "The times 03/Jan/2009 Chancellor on brink of second bailout for banks") { 
      document.querySelector('#incorrect').innerHTML = "Correct!";
      $("#next").text("Proceed");
      $("#next").attr("class", "btn btn-success");
      $("#next").attr("data-bs-target", "#exampleModalToggle2");
      $("#next").attr("data-bs-toggle", "modal");
      $("#final").attr("data-bs-dismiss","modal");
      $("#final").attr("class","btn btn-dark");
      $("#final").text("Close");
      $("#level2").text("CONGRATULATIONS!");
      $("#result2").html("</br> JOIN OUR DISCORD USING THE LINK BELOW:</br> <a>https://discord.gg/QGmX68MFs</a>");
      $("#result2 a").attr("href","https://discord.gg/QGmX68MFs");
      $("#result2 a").attr("id","discord-link");
      $("#recipient-name2").hide();
      $("#incorrect2").hide();

      }
   else if (answerTwo !== "The times 03/Jan/2009 Chancellor on brink of second bailout for banks") {
      document.querySelector('#incorrect2').innerHTML = "INCORRECT! Try again.";

    };
  };
