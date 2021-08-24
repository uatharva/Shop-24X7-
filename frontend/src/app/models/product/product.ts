export class Product {
  _id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  sold: number;
  department: string;

  constructor(
    _id: string,
    image: string,
    title: string,
    description: string,
    price: number,
    sold: number,
    department: string
  ) {
    this._id = _id;
    this.image = image;
    this.title = title;
    this.description = description;
    this.price = price;
    this.sold = sold;
    this.department = department;
  }
}
