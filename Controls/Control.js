'use strict'

class Control {
    constructor(options) {
        this.options = options;
        this.template = this.getTemplate();
    }
    render(root) {
        this.$element = $(this.template);
        var rootEle = $(root)[0].$element;
        if(rootEle !== null && rootEle !== undefined) {
           $(rootEle).append(this.$element);
        }
        else {
            $(root).append(this.$element);
        }

        if(this.options === undefined) return false;
        if(this.options.type === 'button') {
            if(this.options.func !== null) {
                this.$element.bind('click', this.options.func);
            }
        }
    }

    getTemplate() {
        return "";
    }
}

class Div extends Control {
    constructor(options) {
        super(options);
    }

    getTemplate(){
        return `<div class="${this.options.class}">${this.options.text}</div>`;
    }    
}

class Button extends Control {
    constructor(options) {
        super(options);
    }
    getTemplate(){
        return `<button id="${this.options.id}" name="${this.options.name}">${this.options.text}</button>`;
    }    
}

class Input extends Control {
    constructor(options) {
        super(options);
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
    }

    getTemplate(){
        return `<input type="radio" id="${this.options.id}" name="${this.options.name}" value="${this.options.value}" /><label>${this.options.text}</label>`;
    }
}

class RadioEx extends Control {
    constructor(options) {
        super(options);
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
    }

    getTemplate() {
        if(this.options.type === 'text') {
            return `<td>${this.options.text}</td>`;
        }
        else if(this.options.type === 'div') {
            return `<td></td>`;
        }
    }
}

class TableRow extends Control {
    constructor(options){
        super(options);
    }

    getTemplate() {
        return '<tr></tr>';
    }
}

class Table extends Control {
    constructor(options) {
        super(options);
    }

    getTemplate() {
        return `<table class="${this.options.class}"></table>`;
    }    
}

jQuery.fn.outerHTML = function() {
    return jQuery('<div />').append(this.eq(0).clone()).html();
};