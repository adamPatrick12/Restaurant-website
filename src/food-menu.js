const foodPage = function () {
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
     img.src = " ../src/images/background2.jpg"
     img.classList.add("bg")

     const div = document.createElement("div")
     div.classList.add("container")
          
     const div1 = document.createElement("div")
     div1.classList.add("img")
     const img1 = document.createElement("img")
     img1.src = " ../src/images/seafood-stew.jpg"
     img1.classList.add("food-pic")
     div1.appendChild(img1)
     
     const divB = document.createElement("div")
     divB.classList.add("imgC")
     const h6 = document.createElement("h6")
     h6.textContent = "Shrip and Clam Stew"
     divB.appendChild(h6)
     div1.appendChild(divB)

     const div2 = document.createElement("div")
     div2.classList.add("img")
     const img2 = document.createElement("img")
     img2.src = "../src/images/pizza.jpg"
     img2.classList.add("food-pic")
     div2.appendChild(img2)

     const divB1 = document.createElement("div")
     divB1.classList.add("imgC")
     const h62 = document.createElement("h6")
     h62.textContent = "Pepperoni Pizza"
     divB1.appendChild(h62)
     div2.appendChild(divB1)

     const div3 = document.createElement("div")
     div3.classList.add("img")
     const img3 = document.createElement("img")
     img3.src = "../src/images/home-made-BeefBurger.jpg"
     img3.classList.add("food-pic")
     div3.appendChild(img3)

     const divB2 = document.createElement("div")
     divB2.classList.add("imgC")
     const h63 = document.createElement("h6")
     h63.textContent = "Home Made Beed Burger"
     divB2.appendChild(h63)
     div3.appendChild(divB2)

     const div4 = document.createElement("div")
     div4.classList.add("img")
     const img4 = document.createElement("img")
     img4.src = "../src/images/Vegtable diner.jpg"
     img4.classList.add("food-pic")
     div4.appendChild(img4)

     const divB3 = document.createElement("div")
     divB3.classList.add("imgC")
     const h64 = document.createElement("h6")
     h64.textContent = "Tiramisu"
     divB3.appendChild(h64)
     div4.appendChild(divB3)

     const div5 = document.createElement("div")
     div5.classList.add("img")
     const img5 = document.createElement("img")
     img5.src = "../src/images/ribeye.jpg"
     img5.classList.add("food-pic")
     div5.appendChild(img5)

     const divC = document.createElement("div")
     divC.classList.add("imgB")
     const h65 = document.createElement("h6")
     h65.textContent = "Rib Eye Steak"
     divC.appendChild(h65)
     div5.appendChild(divC)

     const div6 = document.createElement("div")
     div6.classList.add("img")
     const img6 = document.createElement("img")
     img6.src = "../src/images/fired-icecream.jpg"
     img6.classList.add("food-pic")
     div6.appendChild(img6)

     const divC1 = document.createElement("div")
     divC1.classList.add("imgB")
     const h66 = document.createElement("h6")
     h66.textContent = "Fried Icecream"
     divC1.appendChild(h66)
     div6.appendChild(divC1)

     const div7 = document.createElement("div")
     div7.classList.add("img")
     const img7 = document.createElement("img")
     img7.src = "../src/images/apricot-cake.jpg"
     img7.classList.add("food-pic")
     div7.appendChild(img7)

     const divC2 = document.createElement("div")
     divC2.classList.add("imgB")
     const h67 = document.createElement("h6")
     h67.textContent = "Apricot Cake"
     divC2.appendChild(h67)
     div7.appendChild(divC2)
     
     const div8 = document.createElement("div")
     div8.classList.add("img")
     const img8 = document.createElement("img")
     img8.src = "../src/images/sweet-potatoe.jpg"
     img8.classList.add("food-pic")
     div8.appendChild(img8)

     const divC3 = document.createElement("div")
     divC3.classList.add("imgB")
     const h68 = document.createElement("h6")
     h68.textContent = "Sweet Potatoe Stew"
     divC3.appendChild(h68)
     div8.appendChild(divC3)
     
     mainDiv.appendChild(header)
     mainDiv.appendChild(img)
     mainDiv.appendChild(div)
     div.appendChild(div1)
     div.appendChild(div2)
     div.appendChild(div3)
     div.appendChild(div4)
     div.appendChild(div5)
     div.appendChild(div6)
     div.appendChild(div7)
     div.appendChild(div8)

     return mainDiv
}

export default foodPage;