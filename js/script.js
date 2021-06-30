// When the user scrolls down 1800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // scroll to top button
  if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
    document.getElementById("myBtn").style.display = 'block';
  } else {
    document.getElementById("myBtn").style.display = 'none';
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ReWork Content Scroll and Button to work together
// function testScroll() {
//   // professional experience
//   // if (window.pageYOffset > 150) alert('User has scrolled to professional experience!');
//   var contentFour = document.querySelector('.content_4')
//   if (window.pageYOffset > 150) {
//     contentFour.style.display = 'block';
//   } else {
//     contentFour.style.display = 'none';
//   }
  
//   // education
//   // if (window.pageYOffset > 850) alert('User has scrolled to education!');
//   var contentFive= document.querySelector('.content_5')
//   if (window.pageYOffset > 850) {
//     contentFive.style.display = 'block';
//   } else {
//     contentFive.style.display = 'none';
//   }

//   // projects
//   // if (window.pageYOffset > 1150) alert('User has scrolled to projects!');
//   var contentSix= document.querySelector('.content_6')
//   if (window.pageYOffset > 1150) {
//     contentSix.style.display = 'block';
//   } else {
//     contentSix.style.display = 'none';
//   }

//   // scroll to top button
//   // if (window.pageYOffset > 1800) alert('User has scrolled at least 1800 px!');
//   if (window.pageYOffset > 1800) {
//     document.getElementById('myBtn').style.display = 'block';
//   } else {
//     document.getElementById('myBtn').style.display = 'none';
//   }

//   // accomplishments
//   // if (window.pageYOffset > 2550) alert('User has scrolled to accomplishments!');
//   var contentSeven= document.querySelector('.content_7')
//   var contentEight= document.querySelector('.content_8')
//   if (window.pageYOffset > 2650) {
//     contentSeven.style.display = 'block';
//     contentEight.style.display = 'none';
//   } else {
//     contentSeven.style.display = 'none';
//   }

//   // content 8
//   // if (window.pageYOffset > 2550) alert('User has scrolled to content 8!');
//   // var contentEight= document.querySelector('.content_8')
//   // if (window.pageYOffset > 2650) {
//   //   contentEight.style.display = 'block';
//   // } else {
//   //   contentEight.style.display = 'none';
//   // }
// }
// window.onscroll = testScroll