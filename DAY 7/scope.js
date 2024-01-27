
let global_letiable = 20;
 
function main_function() {

    let local_letiable = 30;
 
    let nested_function = function () {
 

        console.log(local_letiable);
    }
 
    let another_nested_function = function () {
 

        console.log(global_letiable);
    }
 
    nested_function();
    another_nested_function();
}
 
main_function();