const catalogContainer = document.querySelector(".catalog-container");

const catalog = [
  {
    id : "el1",
    img : "img/catalog-1.jpg",
    name : "ellery x m'o capsule",
    text : "Known for her sculptural takes on traditional tailoring",
    price : "58.00"
  },
  {
    id : "el2",
    img : "img/catalog-2.jpg",
    name : "ellery x m'o capsule",
    text : "Known for her sculptural takes on traditional tailoring",
    price : "95.00"
  },
  {
    id : "el3",
    img : "img/catalog-3.jpg",
    name : "ellery x m'o capsule",
    text : "Known for her sculptural takes on traditional tailoring",
    price : "76.00"
  },
  {
    id : "el1",
    img : "img/catalog-4.jpg",
    name : "ellery x m'o capsule",
    text : "Known for her sculptural takes on traditional tailoring",
    price : "58.00"
  },
  {
    id : "el2",
    img : "img/catalog-5.jpg",
    name : "ellery x m'o capsule",
    text : "Known for her sculptural takes on traditional tailoring",
    price : "95.00"
  },
  {
    id : "el3",
    img : "img/catalog-6.jpg",
    name : "ellery x m'o capsule",
    text : "Known for her sculptural takes on traditional tailoring",
    price : "76.00"
  },
  {
    id : "el1",
    img : "img/catalog-7.jpg",
    name : "ellery x m'o capsule",
    text : "Known for her sculptural takes on traditional tailoring",
    price : "58.00"
  },
  {
    id : "el2",
    img : "img/catalog-8.jpg",
    name : "ellery x m'o capsule",
    text : "Known for her sculptural takes on traditional tailoring",
    price : "95.00"
  },
  {
    id : "el3",
    img : "img/catalog-9.jpg",
    name : "ellery x m'o capsule",
    text : "Known for her sculptural takes on traditional tailoring",
    price : "76.00"
  },
];

class Products {
  render() {
    let htmlCatalog = "";
    catalog.forEach(({ id, img, name, text, price }) => {
      console.log(id, img, name, text, price);
      htmlCatalog += `
      <li class="catalog-item" data-id="01">
              <img class="catalog-img" src="${img}" alt="" />
              <div class="catalog-item-content">
                <h3 class="catalog-item-title">${name}</h3>
                <p class="catalog-item-text">
                ${text}
                </p>
                <span class="catalog-item-price">$
                  <span class="catalog-price-num">${price}</span>
                </span>
              </div>
              <button data-cart class="catalog-btn">
                <svg data-cart width="32" height="29">
                  <use xlink:href="img/svg/basket.svg#basket"></use>
                </svg>
                <span data-cart>Add to Cart</span>
              </button>
            </li>`;
    });
    const html = `<ul class="catalog-list"> ${htmlCatalog} </ul>`;
    catalogContainer.innerHTML = html;
  }
};

const productsPage = new Products();
productsPage.render();