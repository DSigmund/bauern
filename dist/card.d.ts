import Suit from './suits.enum';
import Value from './values.enum';
declare class Card {
    private Suit;
    private Value;
    constructor(suit: Suit, value: Value);
    toString(): string;
}
export default Card;
