const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
const cars = ['audi', 'bmw', 'mersedes', 'porshe'];

const techEl = document.querySelector('.list');

// function createList(options) {
//     options.map((technology) =>
//     `<li>${technology}</li>`)
//         .join('');
//     console.log(options);

// };

const markUpTech = technologies
    .map((technology) =>`<li>${technology}</li>`)
    .join('');


techEl.innerHTML=markUpTech;





