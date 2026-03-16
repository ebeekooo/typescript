"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
(() => {
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
    console.log(ladybug.getName?.());
})();
