/**
 * Renders the html of the specified target object.
 * @param   {String}    target    A string which will be rendered.
 * @param   {Object}    source    The source object whose information will be rendered into the target string.
 * @return  {String}    Returns the rendered string.
 */
function render(target, source) {
	"use strict";
    var regEx = /\{\w+\}/g,
		vars = target.match(regEx),
		targetString = target;
    for (var i in vars) {
        var input = source[vars[i].substr(1, vars[i].length - 2)];
        if (input) {
            targetString = targetString.replace(vars[i], input);
        }
		else {
            targetString = targetString.replace(vars[i], "");
        }
    }
    return targetString;
}