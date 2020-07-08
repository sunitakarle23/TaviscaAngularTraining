let  products = [{ 
  productId: 101,
  productName: "Sony",
  category: "TV",
  manufacturer: "Japan",
  description: "Sony Brevia, 55 inc",
  price: 125000
},{ 
  productId: 102,
  productName: "OLG",
  category: "TV",
  manufacturer: "India",
  description: "LG, 45 inc",
  price: 100000
},{ 
  productId: 103,
  productName: "Videocon",
  category: "TV",
  manufacturer: "India",
  description: "Videocon, 45 inc",
  price: 75000
},{ 
  productId: 104,
  productName: "Samsung",
  category: "TV",
  manufacturer: "Koria",
  description: "Samsung, 65 inc",
  price: 87000
}
]

export class Product {
  constructor(
    public productId: number,
    public productName: string,
    public category: string,
    public manufacturer: string,
    public description: string,
    public price: number
    ) {

  }
  

}

export class Products {
  products:Array<Product>
  constructor(){
    this.products = products;
  }
  getProducts():Array<Product> {
    return this.products;
  }
  addProduct(product: Product){
    return this.validateProduct(product);
  }

  validateProduct(product:Product) {
    let existingProduct = this.products.filter((prod) => {
      return prod.productId === product.productId;
    });

    if(existingProduct.length) {
      return {error: "Product already exists"};
    } else if(product.description.length > 100){
      return {error: "Please enter product description less than 100 char"};
    }else if(product.price <0){
      return {error: "Price should not be negative"};
    } else {
      this.products.push(product);
      return {message: "Product added successfully"};
    }
  }
}