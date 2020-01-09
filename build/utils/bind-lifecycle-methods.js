"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var methods_1 = require("../methods");
var component_will_unmount_1 = require("./component-will-unmount");
var component_will_update_1 = require("./component-will-update");
function bindLifecycleMethods(that) {
    if (!component_will_unmount_1.componentWillUnmountPrototype(that)) {
        that.componentWillUnmount = function () {
            methods_1.ReactNComponentWillUnmount(that);
        };
    }
    if (!component_will_update_1.componentWillUpdatePrototype(that)) {
        var isDeprecated = parseInt(React.version.split('.')[0]) > 16 ||
            (parseInt(React.version.split('.')[0]) == 16 && parseInt(React.version.split('.')[1]) >= 3);
        if (isDeprecated) {
            that.UNSAFE_componentWillUpdate = function () {
                methods_1.ReactNComponentWillUpdate(that);
            };
        }
        else {
            that.componentWillUpdate = function () {
                methods_1.ReactNComponentWillUpdate(that);
            };
        }
    }
}
exports.default = bindLifecycleMethods;
;
