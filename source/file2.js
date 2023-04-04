
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
    if (confirm("Sorry, your browser or device does not support sharing URLs. \nDo you want to copy the URL to your clipboard instead?")) {
      navigator.clipboard.writeText(window.document.location.href);;
      alert("Link copied to clipboard!");
  }
  }
});

var docLists = {
  "RTO": [
    {name: "Adhaar Card", img: "adhaar.jpg"},
    {name: "Passport Size Photo : 1", img: "person.gif"},
    {name: "Mobile Number", img: "number.png"}
  ],
  "GOV Forms": [
    {name: "Doc Name 2", img: "logo.png"},
    {name: "Doc Name 3", img: "logo.png"}
  ],
  "PF Forms": [
    {name: "UAN Number", img: "number.png"},
    {name: "Adhar Card", img: "adhaar.jpg"},
    {name: "Passbook", img: "passbook.png"},
    {name: "Mobile Number", img: "number.png"}

  ],
  "passport": [
    {name: "Adhar Card", img: "adhaar.jpg"},
    {name: "Living Certificate", img: "certy.png"},
    {name: "Birth Certificate", img: "certy.png"},
    {name: "Mobile Number", img: "number.png"}

  ],
 
};

$(document).ready(function() {
  $('.service-item,.project-item').click(function() {
    var docs = $(this).data('docs');
    if (!docs || typeof docs !== 'string') {
      console.error('Invalid value for data-docs attribute:', docs);
      return;
    }
    var docList = docLists[docs];
    if (!docList || !Array.isArray(docList) || docList.length === 0) {
      console.error('No doc list found for value:', docs);
      return;
    }
    var html = '<h3>Required Docs For '+ docs +'</h3>';
    for (var i = 0; i < docList.length; i++) {
      var docName = docList[i].name;
      var imgSrc = './imges/' + docList[i].img;
      html += '<div class="list">' +
              '<div class="liImg"><img src="' + imgSrc + '" alt="' + docName + '"></div>' +
              '<div class="content">' +
              '<h4>Original or xerox</h4>' +
              '<p>' + docName + '</p>' +
              '</div>'+
              '</div>';
    }
    $('#weblist .box').html(html);
    $('.modal').addClass('show');
    $('.morepp').addClass('show');
    $('.service-item').addClass('disabled');
    $('.close-icon, .close-btn').click(function() {
      $('.modal').removeClass('show');
      $('.morepp').removeClass('show');
      $('.service-item').removeClass('disabled');
    });
  });
});

