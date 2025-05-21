
let divElement = document.createElement('div');
let paragraph = document.createElement('p');


paragraph.textContent = 'le premier texte';


divElement.appendChild(paragraph);


document.body.appendChild(divElement);


paragraph.textContent = 'texte revise';


paragraph.style.backgroundColor = 'rgb(150, 124, 91)';
paragraph.style.textAlign = 'center';
paragraph.style.padding = '20px';


divElement.addEventListener('click', function() {
    paragraph.textContent = 'puis reveler!';
});