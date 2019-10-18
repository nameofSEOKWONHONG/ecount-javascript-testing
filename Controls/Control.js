'use strict'

class Control {
    constructor(options) {
        this.options = options;
        this.template = this.getTemplate();
    }

    getHtml() {
        return $(this.domElement).outerHTML();
    }

    render(root) {
        this.domElement = $(this.template);

        if(root === null) return null;
        
        var rootEle = $(root)[0].domElement;
        if(rootEle !== null && rootEle !== undefined) {
           $(rootEle).append(this.domElement);
        }
        else {
            $(root).append(this.domElement);
        }
        
        return this;
    }

    removeDomElement() {
        $(this.domElement).remove();
    }
    registerEvent(eventType, func) {
        $(this.domElement).bind(eventType, func);
        return this;
    }

    getDomElement() {
        return this.domElement;
    }

    getTemplate() {
        return "";
    }
}

class Div extends Control {
    constructor(options) {
        super(options);
        this.controlName = 'div';
    }

    getTemplate(){
        return `<div class="${this.options.class}">${this.options.text}</div>`;
    }    
}

class Button extends Control {
    constructor(options) {
        super(options);
        this.controlName = 'button';
    }

    getTemplate(){
        return `<button id="${this.options.id}" name="${this.options.name}">${this.options.text}</button>`;
    }    
}

class Label extends Control {
    constructor(options) {
        super(options);
        this.controlName = 'label';
    }

    getTemplate() {        
        return `<label>${this.options.text}</label>`;
    }
}

class Input extends Control {
    constructor(options) {
        super(options);
        this.controlName = 'input';
    }
    //render 필요 정보
    //id, name, value
    getTemplate(){
        return `<input type="${this.options.type}" id="${this.options.id}" name="${this.options.name}" value="${this.options.value}"/>`;
    }
};

class Radio extends Control {
    constructor(options) {
        super(options);
        this.controlName = 'radio';
    }

    getTemplate(){
        return `<input type="radio" id="${this.options.id}" name="${this.options.name}" value="${this.options.value}" /><label>${this.options.text}</label>`;
    }
}

class RadioEx extends Control {
    constructor(options) {
        super(options);
        this.controlName = 'radio';
    }

    getTemplate() {
        var html = [];

        //case 1 스코프를 이용한 방식
        var self = this;
        this.options.items.forEach(function (item) {
            html.push(`<input type="radio" id="${self.options.id}" name="${self.options.name}" value="${item.value}" /><label>${item.text}</label>`);
        });

        //case 2 바인드를 이용한 방식 (클로저)
        // this.options.items.forEach(function (item) {
        //     html.push(`<input type="radio" id="${this.options.id}" name="${this.options.name}" value="${item.value}" /><label>${item.text}</label>`);
        // }.bind(this));
        return html.join('');
    }
}

class TableData extends Control {
    constructor(options){
        super(options);
        this.controlName = 'td';
    }
    
    getTemplate() {
        return `<td></td>`;
    }
}

class TableRow extends Control {
    constructor(options){
        super(options);
        this.controlName = 'tr';
    }

    getTemplate() {
        return '<tr></tr>';
    }
}

class Table extends Control {
    constructor(options) {
        super(options);
        this.controlName = 'table';
    }

    getTemplate() {
        return `<table class="${this.options.class}"></table>`;
    }    
}

