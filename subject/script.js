// NOTE: 
// This is the starter file for a blog post "How to build a calculator". You can follow the lesson at https://zellwk.com/blog/calculator-part-1

// # START EDITING YOUR JAVASCRIPT HERE
// ===============
function printTargetContent(event) {
    let screen = document.getElementsByClassName("calculator__display")[0];
    
    if (screen.textContent == "0") {screen.textContent = event.target.textContent}
    else {screen.textContent += event.target.textContent}
    
    switch (event.target.textContent){
        case "AC": 
            screen.textContent = "0";
            break;
        }
    }


function getAction(event) {
    
    switch (event.target.dataset.action){
        case "multiply":
            operation='*';
            break;
        case "add":
            operation='+';
            break;
        case "divide":
            operation="/";
            break;
        case "subtract":
            operation="-";
            break;
    }
    console.log(operation)
    }


function operation (event) {
    if (event.target.textContent == "=") {
        console.log('coucou');
        action = 0;
        L = [];
        let number = [''];
        i = 0;
        while (['='].includes(liste[i]) == false) {

            while (action == 0){
                if (["+","*","/","-"].includes(liste[i]) == true) {

                    console.log('youhou');
                    console.log(number);
                    number
                    action+=1;
                    number.push('')
                    i+=1}
                else {
                    number[-1] =number[number.length-1] + liste[i];
                    i+=1;
                    console.log("hey");
                    console.log(number)}
                }}
            
        }   }

window.addEventListener("load", () =>{
    let special_buttons = document.getElementsByClassName("key--operator");
    for (let button of special_buttons) {
        button.addEventListener("click", getAction )}
    })
window.addEventListener("load", () =>{
    let buttons = document.getElementsByTagName("button");
    for (let button of buttons) {
        button.addEventListener("click", printTargetContent);
        button.addEventListener('click', agregate);
        button.addEventListener("click", operation);}

})
liste = []
function agregate (event) {
    switch (event.target.dataset.action){
        case "multiply":
            liste.push('*');
            break;
        case "add":
            liste.push('+');
            break;
        case "divide":
            liste.push("/");
            break;
        case "subtract":
            liste.push("-");
            break;
        default:
            liste.push(event.target.textContent);
    console.log(liste);
}}



