import Card from './card';
declare class Deck {
    private _cards;
    private _suits;
    private _values;
    constructor();
    Shuffle(): void;
    Draw(): Card | undefined;
    AddTop(card: Card): void;
    AddBottom(card: Card): void;
    toString(): string;
}
export default Deck;
