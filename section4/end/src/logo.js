import small from '../assets/small.jpg';
import '../styles/logo.css';

export default () => {
  const imgSmall = document.createElement('img');
  imgSmall.src = small;

  document.body.prepend(imgSmall);
}
