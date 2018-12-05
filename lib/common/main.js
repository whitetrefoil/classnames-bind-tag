"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bind_1 = __importDefault(require("classnames/bind"));
function bindCss(styles) {
    var cx = bind_1.default.bind(styles);
    function c(strings) {
        if (strings != null && strings.raw != null && strings.raw.length > 0) {
            return cx(strings.raw[0].split(' '));
        }
        return '';
    }
    return { cx: cx, c: c };
}
exports.default = bindCss;
//# sourceMappingURL=main.js.map