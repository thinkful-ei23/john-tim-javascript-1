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
    if (typeof name === 'undefined' || typeof age === 'undefined'){
        throw console.error("Arguments not valid");
    } 
    else if( typeof name != 'string' || typeof age != 'integer'){
        throw console.error('Arguments are not valid2')
    } 
     else{  
       console.log("Hi my name is Tim and i am 29 years old");
        console.log(`I was born in ${yob}`); 
    }

        
    
}


try{
    whoAmI(45,2 );
    
}
catch(e){

}
    
