const button = document.createElement('button');
button.innerText = 'Click';
button.onclick = () => {
  System.import('./logo').then(module => {
    console.log(module);
    module.default();
  });
};

document.body.appendChild(button);
