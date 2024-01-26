// Global letiable
let global_letiable = 20;
 
function main_function() {
    // Local letiable
    let local_letiable = 30;
 
    let nested_function = function () {
 
        // Display the value inside the local letiable
        console.log(local_letiable);
    }
 
    let another_nested_function = function () {
 
        // Displays the value inside the global letiable
        console.log(global_letiable);
    }
 
    nested_function();
    another_nested_function();
}
 
main_function();