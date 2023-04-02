
document.querySelector("body").insertAdjacentHTML("beforeend", '<div class="loader"><span class="bar"></span><span class="bar"></span><span class="bar"></span></div>');

window.addEventListener("load", function () {
  document.querySelector(".loader").remove();
});


const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 50) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

const shareButton = document.getElementById("shareBtn");
const message = "Check out This website For Cybercafe Related Works";
const title = window.document.title;
const url = window.document.location.href;
shareButton.addEventListener("click", () => {
  if (navigator.share) {
    navigator
      .share({ message, title: `${title}`, url: `${url}` })
      .then(() => {

        console.log("Thanks For sharing!");
      })
      .catch(console.error);
  } else {
    if (confirm("Sorry, your browser or device does not support sharing URLs. \n Do you want to copy the URL to your clipboard instead?")) {
      navigator.clipboard.writeText(url);
      alert("Link copied to clipboard!");
  }
  }
});

 $('.service-item').click(function(){
    $('.modal').toggleClass("show");
    $('.morepp').toggleClass("show");
    $('service-item').addClass("disabled");
  });
  $('.close-icon').click(function(){
    $('.modal').toggleClass("show");
    $('service-item').removeClass("disabled");
    $('.morepp').removeClass("show");
  });
  $('.close-btn').click(function(){
    $('.modal').toggleClass("show");
    $('service-item').removeClass("disabled");
    $('.morepp').removeClass("show");
  });

