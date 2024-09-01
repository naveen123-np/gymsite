const cardContainer = document.querySelector(".card-container");

export const showContainer = (products) => {
    if (!products) {
        return false;
    }
    for (let a = 0; a < products.length; a++) {
        cardContainer.innerHTML += `
        <div class="card border" id="${products[a].id}">

         <div class="name">
                   ${products[a].name}
                     </div>
                <div class="product-image">
                    <span> <img src="${products[a].productimage}" alt=""> </span>
                </div>
                <span class="ratting">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>

                </span>
                <p class="description font-size">
                    ${products[a].description}
                </p>
                <span class="stocks font-size">
                    Stocks Available :${products[a].stocks}
                </span>
                <div class="rates">
                    <span class="rate ">
                        ${products[a].rate}
                    </span>
                    <span class="actual-rate ">
                       ${products[a].actualrate}
                    </span>
                </div>
                <div class="cart-amount ">
                    <span class="add-cart font-size border">
                        Add Cart <i class="fa-solid fa-cart-plus"></i>
                    </span>
                    <span class="amount border">
                        <span> <i class="fa-solid fa-plus"></i> </span>
                        <span> 1 </span>
                        <span> <i class="fa-solid fa-minus"></i></span>

              </div>
        </div>`;
       
    }
};

// const button = document.querySelector(".button")

//     button.addEventListener("click",changeBackground,true);
// button.removeEventListener("click",changeBackground,false);

// const cloneTemplate = document.importNode(template.Content, true);
// cloneTemplate.querySelector(".name").textcontent=name;
// cloneTemplate.querySelector(".product-image").textcontent=productimage;
// cloneTemplate.querySelector(".description").textcontent=description;
// cloneTemplate.querySelector(".stocks").textcontent=stocks;
// cloneTemplate.querySelector(".rate").textcontent=rate;
// cloneTemplate.querySelector(".actual-rate").textcontent=actualrate;
// cloneTemplate.querySelector(".id").textcontent=id;
// cardContainer.append(cloneTemplate);
