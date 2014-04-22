/**
 * Renders the html of the specified target object.
 * @param   {String}    target    A string which will be rendered.
 * @param   {Object}    source    The source object whose information will be rendered into the target string.
 * @return  {String}    Returns the rendered string.
 */
function render(target, source){
    var regEx = /\{\S+\}/g;
    var vars = target.match(regEx);
    var targetString = target;
    for(var i = 0; i < vars.length; i++){
        var input = eval("source." + vars[i].substr(1, vars[i].length - 2));
        if(input){
            targetString = targetString.replace(vars[i], input);
        }
        else{
            targetString = targetString.replace(vars[i], "");
        }
    }
    return targetString;
}