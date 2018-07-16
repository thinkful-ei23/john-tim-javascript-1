function yearOfBirth(age){
    if(age <=0){
        throw console.error('Age cannot be negative')
    }
    else{
        return 2018 - age;
    }
}



function whoAmI(name, age) {
    const yob = yearOfBirth(age);

        console.log("Hi my name is Tim and i am 29 years old");
        console.log(`I was born in ${yob}`);
    
}


try{
    whoAmI("Tim", -5);
    
}
catch(e){

}
    
