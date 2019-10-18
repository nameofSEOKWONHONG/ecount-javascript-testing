'use strict'

class ESA002M extends Page {
    constructor(root) {
        super(root);
    }

    createHeader() {
        var toolbar = new Div({class:"toolbar", text:""});
        toolbar.render(this.header);
        var control1 = new Div({class:"control", text:"거래처등록"});
        var control2 = new Div({class:"control", text:""});
        control1.render(toolbar);
        control2.render(toolbar);
        var option = new Input({"id":"t5", "name":"t5", "value":"asdfas", "type":"button", "func":function (e) {
            console.log('111');
        }});
        option.render(control2);
    }

    createContents() {
        var table = new Table({class:"form"});
        table.render(this.contents);
        var tablerow = new TableRow();
        tablerow.render(table);
        var tabledata = new TableData({
            type:"text",
            text:"거래처코드",
        });
        var tabledata2 = new TableData({
            type:"input",
            element:new Div({class:"control", text:""})
        });        
        tabledata.render(tablerow);
    }

    createFooter() {
        
    }
}