$.fn.outerHTML = function() {
    return $('<div />').append(this.eq(0).clone()).html();
};