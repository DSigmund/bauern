import Suit from './suits.enum'
import Value from './values.enum'

class Card {
  private Suit: Suit
  private Value: Value

  constructor (suit: Suit, value: Value) {
    this.Suit = suit
    this.Value = value
  }

  public toString (): string {
    return Suit[this.Suit] + ' ' + Value[this.Value]
  }
}
export default Card
