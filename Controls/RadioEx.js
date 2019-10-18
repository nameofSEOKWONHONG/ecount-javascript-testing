// 'use strict'

// class RadioEx extends Control {
//     constructor(options) {
//         super(options);
//     }

//     getTemplate() {
//         var html = [];

//         //case 1 스코프를 이용한 방식
//         var self = this;
//         this.options.items.forEach(function (item) {
//             html.push(`<input type="radio" id="${self.options.id}" name="${self.options.name}" value="${item.value}" /><label>${item.text}</label>`);
//         });

//         //case 2 바인드를 이용한 방식 (클로저)
//         // this.options.items.forEach(function (item) {
//         //     html.push(`<input type="radio" id="${this.options.id}" name="${this.options.name}" value="${item.value}" /><label>${item.text}</label>`);
//         // }.bind(this));
//         return html.join('');
//     }
// }
