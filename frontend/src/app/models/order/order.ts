export class Order {
  _id: string;
  userId: string;
  username: string;
  orderSum: number;
  orderPlacedOn: Date;
  isDelivered: boolean;
  orderDeliveredOn: Date;
  cart: any[];

  constructor(username: string, userId: string, orderSum: number, cart: any[]) {
    this.userId = userId;
    this.username = username;
    this.orderSum = orderSum;
    this.cart = cart;
  }
}
