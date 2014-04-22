/**
 * Renders the html of the specified target object.
 * @param   {String}    target    A string which will be rendered.
 * @param   {Object}    source    The source object whose information will be rendered into the target string.
 * @return  {String}    Returns the rendered string.
 */
function render(target, source){
    var regEx = /\{\S+\}/g;
    var vars = target.match(regEx);
    for(var i = 0; i < vars.length; i++){
        var input = eval("source." + vars[i].substr(1, vars[i].length - 2));
        if(input){
            target = target.replace(vars[i], input);
        }
        else{
            target = target.replace(vars[i], "");
        }
    }
    return target;
}