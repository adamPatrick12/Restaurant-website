import foodPage from './food-menu';
import homePage from './main-menu';

const aboutPage = function () {
    const test = 0;
    
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
     img.src = " ../src/images/background3.jpg"
     img.classList.add("bg")

     const container2 = document.createElement("div")
     container2.classList.add("container2")
     
     const infodiv = document.createElement("div")
     infodiv.classList.add("info")
     container2.appendChild(infodiv);

     const infoTitle = document.createElement("span")
     infoTitle.classList.add("info-title")
     infoTitle.textContent = "MEET OUR CHEF"
     const p = document.createElement("p")
     p.textContent = "Nunc commodo vel purus quis rutrum. Morbi tempor quam sem, id euismod magna sollicitudin et. Duis pulvinar vestibulum felis sit amet pellentesque. Integer viverra sem sit amet dui pretium fringilla. Nulla ornare est eu libero aliquam pretium. Nam nec metus ac est porttitor efficitur id id ipsum. Suspendisse scelerisque dui at neque vulputate imperdiet. Vestibulum congue porttitor augue at tincidunt. Quisque pharetra dui mi, ut condimentum nibh varius ac. Sed ut quam a nibh accumsan tincidunt. Suspendisse laoreet dictum nulla, ut hendrerit nisl. In euismod ut tellus nec imperdiet. Etiam sit amet est vel ante pellentesque rutrum vel at arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ipsum augue, fermentum vel ornare eu, egestas ac lacus."
     infodiv.appendChild(infoTitle)
     infodiv.appendChild(p)

     const chef = document.createElement("div")
     chef.classList.add("chef")
     container2.appendChild(chef)

     const chefImg = document.createElement("img")
     chefImg.src = "../src/images/chef.jpg"
     chefImg.classList.add("food-pic")
     chef.appendChild(chefImg)
     

     
     mainDiv.appendChild(header)
     mainDiv.append(img)
     mainDiv.appendChild(container2)

     home.addEventListener("click", function (){
        while (mainDiv.firstChild) {
            mainDiv.removeChild(mainDiv.firstChild);
        }
        document.body.appendChild(homePage())
    })

    menu.addEventListener("click", function (){
        while (mainDiv.firstChild) {
            mainDiv.removeChild(mainDiv.firstChild);
        }
        document.body.appendChild(foodPage())
    })
}

export default aboutPage;

