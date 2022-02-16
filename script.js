let myTask = "";
let letters=[];

myTask = "Get user input via JavaScript";

for (let char = 0; char < myTask.length; char++){
    let myChar = myTask[char];
    letters.push(myChar);
}

console.log(letters);