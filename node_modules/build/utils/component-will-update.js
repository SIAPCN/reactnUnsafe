"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var methods_1 = require("../methods");
exports.componentWillUpdatePrototype = function (that) {
    var proto = Object.getPrototypeOf(that);
    if (Object.prototype.hasOwnProperty.call(proto, 'UNSAFE_componentWillUpdate')) {
        that.UNSAFE_componentWillUpdate = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            methods_1.ReactNComponentWillUpdate(that);
            proto.UNSAFE_componentWillUpdate.bind(that).apply(void 0, __spread(args));
        };
        return true;
    }
    if (Object.prototype.hasOwnProperty.call(proto, 'componentWillUpdate')) {
        that.componentWillUpdate = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            methods_1.ReactNComponentWillUpdate(that);
            proto.componentWillUpdate.bind(that).apply(void 0, __spread(args));
        };
        return true;
    }
    return false;
};
