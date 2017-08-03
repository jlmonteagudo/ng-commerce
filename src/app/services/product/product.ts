import { ProductImage } from './product.image';

export class Product {

  constructor(
    public id: number,
    public name: string,
    public images: ProductImage[] ,
    public priceHtml: string,
    public shortDescription: string,
    public description: string,
    public inStock: boolean
  ) {}

  static fromJson({id, name, images, price_html, short_description, description, in_stock}): Product {
    let productImages: ProductImage[] = ProductImage.fromJsonArray(images);
    return new Product(id, name, productImages, price_html, short_description, description, in_stock);
  }

  static fromJsonArray(json: any[]): Product[] {
    return json.map(Product.fromJson);
  }

}
