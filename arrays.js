/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.

*/

let kenobiAttack = 20

let anakinAttack = 30

if (anakinAttack > kenobiAttack){
    console.log("Anakin is stronger")
}
else if(kenobiAttack > anakinAttack){
    console.log("Kenobi is stronger")
}
else {
    console.log("They are matched")
}

let kenobiHealth = 100

let kenobiDefence = 0

if (kenobiHealth > anakindAttack){
    kenobiHealth -= anakinAttack
    console.log('Kenobis Health is low')
}    else {
        console.log('Kenobi was slain')
    }

    kenobiDefense += 25
    
    for(let i = 0; i < 5; i++){
        let damage = anakinAttack - kenobiDefence
    kenobiHealth -= damage
    console.log('Kenobis Health is now ${KenobiHealth}')
}

while(kenobiHealth > 0){
    let damage = anakinAttack - kenobiDefence
    kenobiHealth -= damage
    
    if(kenobiHealth > 0){
             console.log('Kenobis Health is now ${KenobiHealth}')
    } else {
        console.log('Kenobi has been slain')
    }
}   
