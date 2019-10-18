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

        var option = new Input({id:"option", name:"option", value:"Option", type:"button"});
        option.render(control2)
              .registerEvent('click', function(e){ 
                  alert(this.name);
              });
    }

    createContents() {
        var table = new Table({class:"form"});
        table.render(this.contents);
        
        var tablerow = new TableRow();
        tablerow.render(table);
        
        var label = new Label({text:"거래처코드"});
        label.render(null);
        var tdLabel = new TableData({});
        tdLabel.render(tablerow);
        label.render(tdLabel);
        var input =new Input({id:"t", name:"t", value:"asdfas", type:"text"});
        var div = new Div({class:"control", text:""});
        div.render(null);
        var tdDiv = new TableData({});
        tdDiv.render(tablerow);
        div.render(tdDiv);
        input.render(div)
            .registerEvent('focusout', function(e) {
                this.style = 'background-color:yellow;';
            })
             .registerEvent('focusin', function(e) {
                this.style = 'background-color:gray;';
            });
        // input.registerEvent('focusin', function(e) {
        //     this.style = 'background-color:gray;';
        // });
    }

    createFooter() {
        
    }
}