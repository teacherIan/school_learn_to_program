const visualStudio = document.querySelector('.lesson__install__visual');
const node = document.querySelector('.lesson__install__node');
const check = document.querySelector('.lesson__install__check');
const text = document.getElementById('information');

import './installVisual.css';
import './webDevelopment.css';

console.log(visualStudio);
console.log(node);
console.log(check);

const addActiveNode = (event) => {
  node.classList.add('active');
  check.classList.remove('active');
  visualStudio.classList.remove('active');
  console.log('From add active Node');

  text.innerHTML = `Prerequisites
    <div>
        <ul class='list'>
            <li>Install visual studio code </li>
        </ul>
     </div>
    
    `;
};

const addActiveVisualStudio = (event) => {
  visualStudio.classList.add('active');
  check.classList.remove('active');
  node.classList.remove('active');

  text.innerHTML = `Prerequisites
    <div>
        <ul class='list'>
            <li>None</li>
        </ul>
     </div>
    
    `;
  console.log('From add active visual studio ');
};

const addActiveCheck = (event) => {
  check.classList.add('active');
  node.classList.remove('active');
  visualStudio.classList.remove('active');

  text.innerHTML = `Prerequisites
    <div>
        <ul class='list'>
            <li>Install visual studio code </li>
            <li>Install Node.js </li>

        </ul>
     </div>
    
    `;

  console.log('From add active active Check');
};

node.addEventListener('click', addActiveNode);
check.addEventListener('click', addActiveCheck);
visualStudio.addEventListener('click', addActiveVisualStudio);
