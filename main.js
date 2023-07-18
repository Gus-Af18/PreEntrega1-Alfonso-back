class ProductManager {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(product) {
    if (!this.isProductValid(product)) {
      console.log("Error: El producto no es valido");
      return;
    }
    if (this.iscodeDuplicate(product.code)) {
      console.log("Error: El codigo del producto ya fue utilizado");
      return;
    }
    product.id = this.nextId++;
    this.products.push(product);
  }

  getProducts() {
    return this.products;
  }

  getProductsById(id) {
    const product = this.products.find((p) => p.id == id);
    if (product) {
      return product;
    } else {
      console.log("Error: Not found product");
    }
  }

  isProductValid(product) {
    return (
      product.title &&
      product.description &&
      product.price &&
      product.thumbnail &&
      product.code &&
      product.stock !== undefined
    );
  }

  iscodeDuplicate(code) {
    return this.products.some((p) => p.code === code);
  }
}
//productManager
const productManager = new ProductManager();

//Agregar products
productManager.addProduct({
  title: "Lacoste red",
  description: "perfume la cost",
  price: 350,
  thumbnail:
    "./https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT3Z3owEc78t0X7u4zaST7p14EbFdPouXIOXTerb5O8oOrq3_9Mwnepd5IN8k_kITWDD9udGL2eDRTPrcctnVE1ffeS6__T0aAy0fqXguXFDJ_C9vttDj3P4w&usqp=CAE",
  code: "p001",
  stock: 10,
});

productManager.addProduct({
  title: "Lacoste white",
  description: "perfume la cost",
  price: 450,
  thumbnail:
    "/https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSCLA6vBfK6qda0hmMarpoq1T0UIaaUf-f77XH--pdJqmXK_d612aBHE334aV0QdhwC7jh-WTRrgrj7DZtNX-t2qKpbuLnuHF0xN36Ddbv3hmLxkDBXaLvd0A&usqp=CAE",
  code: "p002",
  stock: 18,
});

//Obtain products
const products = productManager.getProducts();
console.log(products);

//obtain products by ID
const productId = productManager.getProductsById();
console.log(productId);
//Obtain products inessential
const noProduct = productManager.getProductsById(5);
console.log(noProduct);
