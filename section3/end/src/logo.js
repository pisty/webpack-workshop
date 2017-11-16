import large from '../assets/large.jpg';
import small from '../assets/small.jpg';
import '../styles/logo.css';

const imgLarge = document.createElement('img');
imgLarge.src = large;

document.body.prepend(imgLarge);

const imgSmall = document.createElement('img');
imgSmall.src = small;

document.body.prepend(imgSmall);
