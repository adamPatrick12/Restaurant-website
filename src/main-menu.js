import foodPage from './food-menu';
import aboutPage from './about-menu';

const homePage = () => {
    const mainDiv = document.createElement("div")
     document.body.appendChild(mainDiv)
    
     const header = document.createElement("div")
     header.classList.add("header")
     
     const logo = document.createElement("h1")
     logo.textContent = "Food"
     header.appendChild(logo)
 
     const home = document.createElement("h2")
     home.textContent = "Home"
     header.appendChild(home)
 
     const menu = document.createElement("h2")
     menu.textContent = "Menu"
     header.appendChild(menu)
     
     const about = document.createElement("h2")
     about.textContent = "About"
     header.appendChild(about)

     const headBtn = document.createElement("button")
     headBtn.classList.add('headerBtn')
     headBtn.textContent = "Book Your Table";
     header.appendChild(headBtn);
 
     const img = document.createElement("img")
     img.src = "../src/images/background.jpg"
     img.classList.add("bg")
 
     const text1 = document.createElement("div")
     text1.id = 'enjoy'
     const enjoy = document.createElement("h4")
     enjoy.textContent = "ENJOY YOUR HEALTHY DELICIOUS MEAL"
     text1.appendChild(enjoy)
 
     const text2 = document.createElement("div")
     text2.id = 'treat'
     const treat = document.createElement("h3")
     treat.textContent = "Treat Yourself"
     text2.appendChild(treat)
 
     const text3 = document.createElement("div")
     text3.id = 'Lorem'
     const Lorem = document.createElement("h5")
     Lorem.textContent = "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat."
     text3.appendChild(Lorem)
 
     const divbtn = document.createElement("button")
     divbtn.id = 'explore'
     divbtn.textContent = "Explore"
     
     
     mainDiv.appendChild(header)
     mainDiv.appendChild(img)
     mainDiv.appendChild(text1)
     mainDiv.appendChild(text2)
     mainDiv.appendChild(text3)
     mainDiv.appendChild(divbtn)
  
    menu.addEventListener("click", function (){
        while (mainDiv.firstChild) {
            mainDiv.removeChild(mainDiv.firstChild);
        }
        document.body.appendChild(foodPage())
    })

    about.addEventListener('click', function(){
        while (mainDiv.firstChild) {
            mainDiv.removeChild(mainDiv.firstChild);
        }
        document.body.appendChild(aboutPage())
    })

    divbtn.addEventListener("click", function(){
        while (mainDiv.firstChild) {
            mainDiv.removeChild(mainDiv.firstChild);
        }
        document.body.appendChild(foodPage())
    })
 }
 
 export default homePage;
 
 