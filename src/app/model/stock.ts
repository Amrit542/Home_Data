export class Stock {
  favorite: boolean = false;
  notabePeople: Person[];

  constructor(
    public name: string,
    public code: string,
    public price: number,
    public previousPrice: number,
    public exchange: string
  ) {
    this.notabePeople = [];
  }

  isPositiveChange(): boolean {
    if (this.price && this.previousPrice) {
      return this.price >= this.previousPrice;
    }
    return false;
  }
}

export class Person {
  name: string;
  title: string;
}
