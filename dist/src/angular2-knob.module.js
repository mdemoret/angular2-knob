"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var angular2_knob_directive_1 = require("./angular2-knob.directive");
var KnobModule = (function () {
    function KnobModule() {
    }
    KnobModule.decorators = [
        { type: core_1.NgModule, args: [{
                    exports: [angular2_knob_directive_1.Ng2KnobDirective],
                    declarations: [angular2_knob_directive_1.Ng2KnobDirective]
                },] },
    ];
    /** @nocollapse */
    KnobModule.ctorParameters = function () { return []; };
    return KnobModule;
}());
exports.KnobModule = KnobModule;
//# sourceMappingURL=angular2-knob.module.js.map