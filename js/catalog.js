const catalogContainer = document.querySelector(".catalog-container");

const catalog = [
  {
    id: "el1",
    img: "img/catalog-1.jpg",
    name: "ellery x m'o capsule",
    text: "Known for her sculptural takes on traditional tailoring",
    price: 58.0,
  },
  {
    id: "el2",
    img: "img/catalog-2.jpg",
    name: "ellery x m'o capsule",
    text: "Known for her sculptural takes on traditional tailoring",
    price: 95.0,
  },
  {
    id: "el3",
    img: "img/catalog-3.jpg",
    name: "ellery x m'o capsule",
    text: "Known for her sculptural takes on traditional tailoring",
    price: 76.0,
  },
  {
    id: "el4",
    img: "img/catalog-4.jpg",
    name: "ellery x m'o capsule",
    text: "Known for her sculptural takes on traditional tailoring",
    price: 58.0,
  },
  {
    id: "el5",
    img: "img/catalog-5.jpg",
    name: "ellery x m'o capsule",
    text: "Known for her sculptural takes on traditional tailoring",
    price: 95.0,
  },
  {
    id: "el6",
    img: "img/catalog-6.jpg",
    name: "ellery x m'o capsule",
    text: "Known for her sculptural takes on traditional tailoring",
    price: 76.0,
  },
  {
    id: "el7",
    img: "img/catalog-7.jpg",
    name: "ellery x m'o capsule",
    text: "Known for her sculptural takes on traditional tailoring",
    price: 58.0,
  },
  {
    id: "el8",
    img: "img/catalog-8.jpg",
    name: "ellery x m'o capsule",
    text: "Known for her sculptural takes on traditional tailoring",
    price: 95.0,
  },
  {
    id: "el9",
    img: "img/catalog-9.jpg",
    name: "ellery x m'o capsule",
    text: "Known for her sculptural takes on traditional tailoring",
    price: 76.0,
  },
];

class Products {
  render() {
    let htmlCatalog = "";
    catalog.forEach(({ id, img, name, text, price }) => {
      htmlCatalog += `
      <li class="catalog-item" id="${id}">
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
              <button class="catalog-btn">
                <svg width="32" height="29">
                  <use xlink:href="img/svg/basket.svg#basket"></use>
                </svg>
                <span>Add to Cart</span>
              </button>
            </li>`;
    });
    const html = `<ul class="catalog-list"> ${htmlCatalog} </ul>`;
    catalogContainer.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();

// Калькулятор
function calcPrice() {
  s = 0;
  catalog.forEach(function (item) {
    sum = s += item.price;
  });
  console.log(sum + " - сумма всех товаров");
};
calcPrice();

class Basket{
  addProduct(){}
  removeProduct(){}
  changeProduct(){}
  render(){}
}

class ElementBasket{
  render(){}
}
