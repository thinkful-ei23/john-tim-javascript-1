function yearOfBirth(age){
    return 2018 - age;
    
}



function whoAmI(name, age) {
    const yob = yearOfBirth(age);
    if (age <= 0){
        throw new Error('Age cannot be negative')
    }
    else{
        console.log("Hi my name is Tim and i am 29 years old");
        console.log(`I was born in ${yob}`);
    }
}


try{
    whoAmI("Tim", -5);
}
catch(e){
    console.log(e.messsage)
}
    
