function render(){
    var regEx = /\{\S+\}/g;
    var vars = document.body.innerHTML.match(regEx);
    for(var i = 0; i < vars.length; i++){
        var input = eval("info." + vars[i].substr(1, vars[i].length - 2));
        if(input){
            document.body.innerHTML = document.body.innerHTML.replace(vars[i], input);
        }
        else{
            document.body.innerHTML = document.body.innerHTML.replace(vars[i], "");
        }
    }
}