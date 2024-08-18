const documentElement = document.documentElement;
console.log({documentElement});

console.log('body', document.body);
console.log('head', document.head);

const container = document.getElementById('container');

const heading = document.getElementById('container-heading');
heading.innerHTML = "Document Object Model";
heading.style.color = 'Blue';


const newChild = document.createElement('p');
container.appendChild(newChild);
newChild.innerHTML = 'The Document Object Model is a programming interface for web documents that allows programming languages to manipulate the content and style of web pages.';



const button = document.getElementById('button');
button.style.border = 'none';
button.style.padding ='10px 15px';
button.style.borderRadius = '5px';
button.style.background = '#4169E1';
button.style.cursor ="pointer";
button.style.color = "#ffffff";

button.addEventListener('click', function(){
    button.innerHTML = "Clicked!";
    button.style.background = "#50C878";

})

button.addEventListener()
