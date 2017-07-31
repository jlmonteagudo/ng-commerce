
export class Category {

  constructor(
    public id: number,
    public name: string,
    public slug: string,
    public description: string,
  ) {}

  static fromJson({id, name, slug, description}): Category {
    return new Category(id, name, slug, description);
  }

  static fromJsonArray(json: any[]): Category[] {
    return json.map(Category.fromJson);
  }

}
