import homePage from './main-menu';
import foodPage from './food-menu';
import aboutPage from './about-menu';
import test from './about-menu';


document.body.appendChild(homePage())

menu.addEventListener('click', function(){
    document.body.appendChild(foodPage())
})




// document.body.appendChild(aboutPage())