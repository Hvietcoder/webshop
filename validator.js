// đối tượng 'Valitor'
function Validator(options) {
    var formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach(function(rule) {
            var inputElement = formElement.querySelector(rule.selector);
            if (inputElement) {
                inputElement.onblur = function() {
                    console.log('blur ' + rule.selector);
                }

            }
        });
    }
}

// định nghĩa các rule
Validator.isEmail = function(selector) {
    return {
        selector: selector,
        test: function() {}
    };
}
Validator.isPassword = function(selector) {
    return {
        selector: selector,
        test: function() {}
    };
}
Validator.isRpassword = function(selector) {
    return {
        selector: selector,
        test: function() {}
    };
}