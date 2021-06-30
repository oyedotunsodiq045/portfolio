// EXAMINE THE DOCUMENT OBJECT //

console.dir(document)
// console.dir(document.domain)
// console.dir(document.URL)
// console.dir(document.title)
// // document.title = 123
// console.dir(document.doctype)
// console.dir(document.head)
// console.dir(document.body)
// console.dir(document.all) 
// console.dir(document.all[18])
// // document.all[18].textContent = "Abiodun Gbolahan"
// console.dir(document.forms)
// console.dir(document.links)
// console.dir(document.images)
// document.images[0].style.filter = "blur(0)"

// GET ELEMENT BY ID //
// console.log(document.getElementById('hackName'))
// var hackName = document.getElementById('hackName')
// console.log(hackName)
// hackName.textContent = 'Hello' // Doesn't pay attention to the style
// hackName.innerText = 'Hello1' // Pays attention to the style
// hackName.innerHTML = '<i>Hello 3</i>'
// hackName.style.borderBottom = 'solid 3px #000'

// GET ELEMENT BY CLASSNAME //
// var faJava = document.getElementsByClassName('fa-java')
// var makeGrey = document.getElementsByClassName('a')
// console.log(faJava)
// faJava[0].style.color = 'blue'

// for (let i = 0; i < makeGrey.length; i++) {
//     makeGrey[i].style.backgroundColor = '#f4f4f4'
// }

// GET ELEMENT BY TAGNAME //
// var li = document.getElementsByTagName('li')
// console.log(li)
// li[0].textContent = 'Hello'
// li[0].style.fontWeight = 'bold'
// li[0].style.color = 'blue'

// for (let i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4'
// }

// QUERY SELECTOR //
var firstChild = document.querySelector('li')
var lastChild = document.querySelector('li:last-child')
var underline = document.querySelectorAll('#underline')

console.log(underline);
console.log(firstChild);
console.log(lastChild);

underline.style.borderBottom = 'solid 4px'
firstChild.style.color = "red"
lastChild.style.color = "green"

// QUERY SELECTOR ALL //