function main() {

    const readline = require("readline");

    const interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })

    let myTask = "";
    let letters=[];
    let close = false;

    
    interface.question("What is my next task? ", (myTask) => {

        console.log(myTask);
        // Close the interface.
        interface.question("Continue? ", (answer) =>{
            if(answer === "No"){
                close = true;
                interface.close();
            }
        })
    });  
}

main()