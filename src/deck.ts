import Card from './card'
import Suit from './suits.enum'
import Value from './values.enum'

class Deck {
  private _cards: Card[]

  private _suits: Suit[] = [Suit.Eichel, Suit.Gras, Suit.Herz, Suit.Schelln]
  private _values: Value[] = [Value.Sechs, Value.Sieben, Value.Acht, Value.Neun, Value.Zehn, Value.Unter, Value.Ober, Value.König, Value.Ass]

  constructor () {
    this._cards = []
    this._suits.forEach(suit => {
      this._values.forEach(value => {
        this._cards.push(new Card(suit, value))
      })
    })
  }

  public Shuffle (): void {
    let currentIndex = this._cards.length
    let temporaryValue
    let randomIndex

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex -= 1

      // And swap it with the current element.
      temporaryValue = this._cards[currentIndex]
      this._cards[currentIndex] = this._cards[randomIndex]
      this._cards[randomIndex] = temporaryValue
    }
  }

  public Draw (): Card | undefined {
    if (this._cards.length > 0) {
      return this._cards.pop()
    } else {
      return undefined
    }
  }

  public AddTop (card: Card): void {
    this._cards.push(card)
  }

  public AddBottom (card: Card): void {
    this._cards.unshift(card)
  }

  public toString (): string {
    let out = 'Number of Cards: ' + this._cards.length + '\n'
    this._cards.forEach(card => {
      out += card.toString() + '\n'
    })
    return out
  }
}
export default Deck
