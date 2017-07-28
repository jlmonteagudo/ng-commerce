import { ProductImage } from './product.image';

export class Product {

  constructor(
    public id: number,
    public name: string,
    public images: ProductImage[] ,
    public priceHtml: string,
  ) {}

  static fromJson({id, name, images, price_html}): Product {
    let productImages: ProductImage[] = ProductImage.fromJsonArray(images);
    return new Product(id, name, productImages, price_html);
  }

  static fromJsonArray(json: any[]): Product[] {
    return json.map(Product.fromJson);
  }

}
