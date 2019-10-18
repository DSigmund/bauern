"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const suits_enum_1 = require("./suits.enum");
const values_enum_1 = require("./values.enum");
class Card {
    constructor(suit, value) {
        this.Suit = suit;
        this.Value = value;
    }
    toString() {
        return suits_enum_1.default[this.Suit] + ' ' + values_enum_1.default[this.Value];
    }
}
exports.default = Card;
//# sourceMappingURL=card.js.map