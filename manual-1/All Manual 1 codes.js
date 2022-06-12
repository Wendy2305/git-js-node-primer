//Basic Arithmetic in JavaScript
{
console.log("Code segment: Arithmetic Operations")
a = 10;
b = 20;

console.log("a=10; b=20;")
console.log(`a+b: ${a+b}`);
console.log(`a-b: ${a-b}`);
console.log(`a*b: ${a*b}`);
console.log(`a/b: ${a/b}`);
console.log(`a**2: ${a**2}`);
a++
b--
console.log(`a++: ${a}`);
console.log(`b--: ${b}`);
console.log(" ");
}

//String Operations
{
    console.log("Code Segment: String Operations");
    console.log("Here I am concatenating my firstname and lastname.")
    lastname ="Nweje";
    firstname ="Chinwendu";
    fullname = firstname+" "+lastname; //‘+’ is used to concatenate strings
    console.log(fullname)
    console.log(" ")
}

//Comparison Operators
{
    console.log("Code Segment: Comparison Operators")
    a =23;
    b = 5;
    console.log("a=23, b=5")
    console.log(`a > b: ${a > b}`) //Returns True
    console.log(`a < b: ${a < b}`) //Returns False
    console.log(`a >= b: ${a >= b}`)//Returns True
    console.log(`a <= b: ${a <= b}`)//Returns False
    console.log(`a==b: ${a==b}`) // '==' is used to compare only the values
    console.log(`a!=b: ${a!=b}`) 
    console.log(`a===b: ${a===b}`) // '===' is used to compare both value and datatype
    console.log(`a!==b: ${a!==b}`)
    console.log(" ")
}

{
    console.log("Code Segment: Logical Operators")
    console.log("a=23, b=5")
    a =23;
    b = 5;
    console.log(`a<30 && b>2: ${a<30 && b>2}`) //Logical AND
    console.log(`a<15 || b>2: ${a<15 || b>2}`) //Logical OR
    console.log(`a<15 || !(b>2): ${a<15 || !(b>2)}`) //Logical NOT
    console.log(" ")
}
// Tenary Conditional Operator
{
    console.log("Code Segment: Tenary Conditional Statements");
    console.log(`The tenary operator is used for conditions without making use of if-else`);
    console.log(`The format is : var_name =(conditions)? value_for_true : value_for_false`)
    console.log('voting_age = 18');
    voting_age = 18;
    eligibe_candidate = (voting_age > 15)? "Yes": "No";
    console.log(`eligibe_candidate = (voting_age > 15)? "Yes": "No"`);
    console.log(eligibe_candidate);
    console.log(" ");
}
// If-Else Conditional Statement
{
    console.log("Code Segment: If-else condition")
    var presidency_age = 35;
    var current_age = 49;
    console.log("presidency_age = 35");
    console.log("current_age = 19");
    if(current_age>=presidency_age){
        console.log("Dont worry love, you can run for presidency.");
    }
    else{
        console.log("Sorry hon, you can't run for presidency yet.");
    }
    console.log(" ")
}

//Switch Conditional Statement
{
    console.log("Code Segment: Switch Conditional Statement")
    grade = 53;
    switch(true){ //When checking a range of values, we use true as the value passed (see the code).
        case ((grade>=71) && (grade<=100)):
            console.log("You got an A");
            break;
        case ((grade>=61) && (grade<=70)):
            console.log("You got a B");
            break;
        case ((grade>=51) && (grade<=60)):
            console.log("You got a C");
            break;
        case ((grade>=41) && (grade<=50)):
            console.log("You got a D");
            break;
        case(grade<=40):
            console.log("You failed kiddo. See you next year for your carryover");
            break;
        default:
            console.log("Invalid Output")
    }
        console.log(" ")
}

//For loop
{
    console.log("Code Segment: For loop")
    for( var i=0; i<11; ++i){
        console.log(i);
    }
}

//While loop
{
    console.log("Code Segment: While loop");
    var n = 0;
    while(n!=5){
        n = Math.floor((Math.random()*10));
        console.log(n)
    }
}

//Do-while loop 
{
    console.log("Code Segment: Do-While loop");
    var x =0;
    do{
        x+=1;
        console.log(x);
    }while(x<10)
}
/*
//Readline statement using while loop
{
    console.log("Code Segment: readline statement");
    var readlineSync = require('readline-sync'); //make the module just installed avaliable for use in our program
    var answer; //declare variable named answer
    do{
        //use question() function to read input and assign the value to answer
        answer = readlineSync.question('What should I do? [Type "exit" for me to quit]:');
        console.log(`You asked me to ` + answer)
    }while(answer !='exit')
    console.log(" ")
}

//Async Readline using function and not while loop.
{
    console.log("Code Segment: Asynchronous read line which cannot be used with do-while loop");
    var readline = require('readline'); //load the readline module into the runtime environment 
    //Next, create the input/output interface as required by readline module. 
    var readlineAsync = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
    }); 
    //Next, declare and define a function named recursiveReadLineAsync 
    function recursiveReadLineAsync() { 
    readlineAsync.question('What should I do? [Type "exit" for me to quit]: ', function (answer){ 
    console.log('You asked me to ' + answer) 
    if (answer == 'exit') //Condition for terminating further self call 
    return readlineAsync.close(); //quit the function if answer == exit 
    recursiveReadLineAsync(); //No exit yet. Call self again to ask another question. 
    }); 
}; 
//Finally, invoke the defined function to start the recursion 
recursiveReadLineAsync(); 
}
*/
//Functions
{
    console.log("Code Segment: Function Declaration")
    //By direct declaration 
    function addTwoNumbersA(number1, number2){ 
        return number1 + number2; //Add the two numbers passed when function is called 
    } 

    //By expression 
    var addTwoNumbersB = function(number1, number2){ 
    return number1 + number2; 
    }

    console.log(addTwoNumbersA(20,30)); //Call addTwoNumbersA and print return value (50). 
    console.log(addTwoNumbersB(60,40)); //Call addTwoNumbersB and print return value (100). 
}

//Capturing Arguments as arrays within the function
{
    console.log("Code Segmnt: Capturing Arguments as arrays within the function");
    function multiplier(){
        var product = 1;
        for (var x=0; x<arguments.length; x++){
            product = product * arguments[x];
        }
        return product;
    }

    console.log(`The product of 2,5,6,8,9 is`)
    console.log(multiplier(2,5,6,8,9));
    console.log(multiplier(2,3,4));
}

//Array Literals
{
    console.log("Code Segment: Array Literals")
    mylist = ['cow', 2+5, 35, true, 4.97, 'Chinwendu']
    mylist[5] = 'Wendy' ///this changes the elemnt in ndex 5 to 'Wendy'
    for( i=0; i<6; ++i){
        console.log(mylist[i]);
    }
    console.log(" ")
}

// Object Literals
{
    console.log("Code Segment: Object Literal ");
    my_object = {
        fname: "Chinwendu",
        lname: "Nweje",
        age: 19,
        fav_color: "Purple"
    }
    console.log(my_object.fav_color)
    console.log(" ")
}

//Complex Object Literal
{
    console.log("Code Segment: Complex Object Literal");
    mycomplex_object ={
        name: {
            fname: "Chinwendu",
            lname: "Nweje"
        },
        courses: {
            gst204: "Ethics",
            csc204: "Data Structures",
            mth204: "Linear Algebra"
        },
        occupation: "Student",
        age: 19
    }
    console.log(mycomplex_object.name.fname)
    console.log(mycomplex_object['name']['fname']) //another way of calling data from the object literal
    console.log(mycomplex_object.courses.gst204)
    console.log(mycomplex_object.age)
    mycomplex_object.Major = "Computer Science"; //adding a new object where the key is 'major' and the data is 'Computer Science'
    delete mycomplex_object.age; //This deletes the key 'age' and its data;
    console.log(mycomplex_object)
    console.log(" ")
}

// Object Oriented Programming
{
    console.log("Code Segment: Object Oriented Programming")
    function Human_life(fname, lname, age, fave_color){
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.fave_color = fave_color;
    }
    person1 = new Human_life("Chinwendu", "Nweje", 19, "Purple");
    person2 = new Human_life("Olisaemeka", "Nweje", 15, "Blue");
    console.log(person1); //Prints all the details of person 1
    console.log(person2);
    console.log(person1.constructor); //This gives us the name of the constructor which is Human Life [Function: Human_Life]
    Human_life.prototype.nationality = "Nigerian" ;//using prototype, I've created a new instance, nationality which is nigerian and is default for everyone
    person2.nationality = "German";
}

//String literal Vs String Object
{
    //A string literal is anything wrapped in single or double notation.
    //Astring Object is that instantiated using the new keyboard.
    var a = 'This is a string literal';
    var y = new String('This is a string object');
    console.log(a);
    console.log(y);
    console.log(y.toString());
    console.log(x.length); //This gives us the length of the string.
}
