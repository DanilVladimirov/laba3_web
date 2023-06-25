"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCall = exports.Phone = void 0;
var Phone = /** @class */ (function () {
    function Phone(n) {
        this.name = n;
    }
    return Phone;
}());
exports.Phone = Phone;
function call(phone) {
    console.log("Make a call by", phone.name);
}
exports.makeCall = call;
