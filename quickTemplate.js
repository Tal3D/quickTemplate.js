/**
 * Renders the html of the specified target object.
 * @param   {String}    target    A string which will be rendered.
 * @param   {Object}    source    The source object whose information will be rendered into the target string.
 * @return  {String}    Returns the rendered string.
 */
function render(target, source) {
	"use strict";
	var regEx = /\{[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*\}/g,
		vars = target.match(regEx),
		targetString = target;
	for (var i in vars) {
		var variable = vars[i].substr(1, vars[i].length - 2);
		var subvars = variable.match(/[a-zA-Z0-9]+/g);
		var input = source[subvars[0]];
		for(var j = 1; j < subvars.length; j++)
		{
			input = input[subvars[j]];
		}
		if (input) {
			targetString = targetString.replace(vars[i], input);
		}
		else {
			targetString = targetString.replace(vars[i], "");
		}
	}
	return targetString;
}