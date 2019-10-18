"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const card_1 = require("./card");
const suits_enum_1 = require("./suits.enum");
const values_enum_1 = require("./values.enum");
class Deck {
    constructor() {
        this._suits = [suits_enum_1.default.Eichel, suits_enum_1.default.Gras, suits_enum_1.default.Herz, suits_enum_1.default.Schelln];
        this._values = [values_enum_1.default.Sechs, values_enum_1.default.Sieben, values_enum_1.default.Acht, values_enum_1.default.Neun, values_enum_1.default.Zehn, values_enum_1.default.Unter, values_enum_1.default.Ober, values_enum_1.default.König, values_enum_1.default.Ass];
        this._cards = [];
        this._suits.forEach(suit => {
            this._values.forEach(value => {
                this._cards.push(new card_1.default(suit, value));
            });
        });
    }
    Shuffle() {
        let currentIndex = this._cards.length;
        let temporaryValue;
        let randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = this._cards[currentIndex];
            this._cards[currentIndex] = this._cards[randomIndex];
            this._cards[randomIndex] = temporaryValue;
        }
    }
    Draw() {
        if (this._cards.length > 0) {
            return this._cards.pop();
        }
        else {
            return undefined;
        }
    }
    AddTop(card) {
        this._cards.push(card);
    }
    AddBottom(card) {
        this._cards.unshift(card);
    }
    toString() {
        let out = 'Number of Cards: ' + this._cards.length + '\n';
        this._cards.forEach(card => {
            out += card.toString() + '\n';
        });
        return out;
    }
}
exports.default = Deck;
//# sourceMappingURL=deck.js.map