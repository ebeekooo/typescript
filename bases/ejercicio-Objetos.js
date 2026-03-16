define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (() => {
        var _a;
        let ladybug = {
            name: 'Marinette',
            age: 15,
            powers: ['Amuleto', 'Reiniciar']
        };
        ladybug = {
            name: 'Alya',
            age: 15,
            powers: ['ilusion', 'velocidad'],
            getName() {
                return this.name;
            }
        };
        console.log((_a = ladybug.getName) === null || _a === void 0 ? void 0 : _a.call(ladybug));
    })();
});
//# sourceMappingURL=ejercicio-Objetos.js.map