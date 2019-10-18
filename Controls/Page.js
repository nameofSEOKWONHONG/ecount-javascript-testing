'use strict'

class Page {
    constructor(root) {
        this.root = root;
        
        var $header = $('<div class="header"></div>');
        this.root.append($header);
        this.header = $('.header');
        
        var $contents = $('<div class="contents"></div>');
        this.root.append($contents);
        this.contents = $('.contents');
        
        var $footer = $('<div class="footer"></div>');
        this.root.append($footer);
        this.footer = $('.footer');
    }
}