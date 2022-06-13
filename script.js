import product from "./products.js";

const name = document.querySelector(".name");
const desc = document.querySelector(".desc");
const image = document.querySelector(".image");
const price = document.querySelector(".price");
const form = document.querySelector("form");
const show = document.querySelector(".show-data");

const productArray = [];

image.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    product.productImage = uploaded_image;
  });
  reader.readAsDataURL(this.files[0]);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let productObject = new product(
    name.value,
    desc.value,
    product.productImage,
    price.value
  );

  productArray.push(productObject);
  console.log(productArray);

  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  productArray.forEach((item) => {
    const content = `
      <div class="product-card__header">
        <div class="header__title">${item.productTitle}</div>
        <div class="header__price">₹${item.productPrice}</div>
      </div>
      <div class="product-card__image-container">
        <!-- Make Image Slider -->
        <img src="${item.productImage}" class="upload_image" />
      </div>
      <div class="product-card__description">${item.productDescription}</div>
        `;

    productCard.innerHTML = content;
    show.append(productCard);

    name.value = "";
    desc.value = "";
    price.value = "";
    image.value = "";
  });
});
