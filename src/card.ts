type Suit = "HEARTS" | "TILES" | "CLOVERS" | "PIKES";
type Point =
  | "A"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "J"
  | "Q"
  | "K";

class Card {
  suit: Suit;
  point: Point;

  constructor(suit: Suit, point: Point) {
    this.suit = suit;
    this.point = point;
  }
}

