
export class ProductImage {

  constructor(
    public id: number,
    public name: string,
    public alt: string,
    public position: number,
    public src: string
  ){}

  srcThumbnail(): string {
    return this.srcSize('-150x150');
  }

  srcMedium(): string {
    return this.srcSize('-300x300');
  }

  srcLarge(): string {
    return this.srcSize('-600x600');
  }
  
  private srcSize(size: string): string {
    let periodIndex = this.src.lastIndexOf('.');
    let srcBase = this.src.substr(0, periodIndex);
    let srcExtension = this.src.substring(periodIndex);

    return srcBase + size + srcExtension;
  }
  
  static fromJson({id, name, alt, position, src}): ProductImage {
    return new ProductImage(id, name, alt, position, src);
  }

  static fromJsonArray(json: any[]): ProductImage[] {
    return json.map(ProductImage.fromJson);
  }

}
