
// ### MVP

// #### Episode 1

// ============================= Episode 1===================================
// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Library',
//   weapon: 'Rope'
// }

// const declareMurderer = function() {
//    return `The murderer is ${scenario.murderer}.`;
//  }
//  const verdict = declareMurderer();
//  console.log(verdict);
// ===========================Predict=====================================

// output: The murderer is Miss Scarlet.
// ================================================================



// ==============================Episode 2==================================

// const murderer = 'Professor Plum';
// const changeMurderer = function() {
//    murderer = 'Mrs. Peacock';
//  }
//  const declareMurderer = function() {
//    return `The murderer is ${murderer}.`;
//   }
//   changeMurderer();
//   const verdict = declareMurderer();
//   console.log(verdict);
// ===========================Predict=====================================
//const variabled cannot be changed

// ==============================changed code below:==================================

  //  change const to let---->
  // let murderer = 'Professor Plum';
  // let changeMurderer = function() {
  //    murderer = 'Mrs. Peacock';
  //  }
   
  //  let declareMurderer = function() {
  //    return `The murderer is ${murderer}.`;
  //   }
    
  //   changeMurderer();
  //   let verdict = declareMurderer();
  //   console.log(verdict);
// ================================================================

// ================================Episode 3================================

// let murderer = 'Professor Plum';

// const declareMurderer = function() {
//   let murderer = 'Mrs. Peacock';
//   return `The murderer is ${murderer}.`;
// }

// const firstVerdict = declareMurderer();
// console.log('First Verdict: ', firstVerdict);
// ===========================Predict=====================================
//The murder is Mrs. Peacock

// const secondVerdict = `The murderer is ${murderer}.`;
// console.log('Second Verdict: ', secondVerdict);
// ===========================Predict=====================================
//The murder is Professor Plum



// ================================Episode 4================================

// let suspectOne = 'Miss Scarlet';
// let suspectTwo = 'Professor Plum';
// let suspectThree = 'Mrs. Peacock';

// const declareAllSuspects = function() {
//   let suspectThree = 'Colonel Mustard';
//   return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
// }
// const suspects = declareAllSuspects();
// console.log(suspects);

// ===========================Predict=====================================
// The suspects are Miss Scarlet, Professor Plum, Colonel Mustard.
// console.log(`Suspect three is ${suspectThree}.`);

// ===========================Predict=====================================
// Suspect three is Mrs. Peacock.



// ================================Episode 5================================


// const scenario = {
//   murderer: 'Miss Scarlet',
//   room: 'Kitchen',
//   weapon: 'Candle Stick'
// };

// const changeWeapon = function(newWeapon) {
//   scenario.weapon = newWeapon;
// }

// const declareWeapon = function() {
//   return `The weapon is the ${scenario.weapon}.`;
// }

// changeWeapon('Revolver');
// const verdict = declareWeapon();
// console.log(verdict);
// ================================Predict================================
// The weapon is the Revolver


// ================================Episode 6================================

// let murderer = 'Colonel Mustard';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     murderer = 'Mrs. White';
//   }

//   plotTwist();
// }

// const declareMurderer = function () {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);

// ================================Predict================================
// The murderer is Mrs. White.




// ================================Episode 7================================

// let murderer = 'Professor Plum';

// const changeMurderer = function() {
//   murderer = 'Mr. Green';

//   const plotTwist = function() {
//     let murderer = 'Colonel Mustard';

//     const unexpectedOutcome = function() {
//     murderer = 'Miss Scarlet';
//     }

//   unexpectedOutcome();
  
//   }
  
//   plotTwist();
 
// }

// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// changeMurderer();
// const verdict = declareMurderer();
// console.log(verdict);
// ================================Predict================================

// The murderer is Miss Scarlet.
//correct answer: Mr.Green

// ================================Episode 8================================
// const scenario = {
//   murderer: 'Mrs. Peacock',
//   room: 'Conservatory',
//   weapon: 'Lead Pipe'
// };

// const changeScenario = function() {
//   scenario.murderer = 'Mrs. Peacock';
//   scenario.room = 'Dining Room';

//   const plotTwist = function(room) {
//     if (scenario.room === room) {
//       scenario.murderer = 'Colonel Mustard';
//     }

//     const unexpectedOutcome = function(murderer) {
//       if (scenario.murderer === murderer) {
//         scenario.weapon = 'Candle Stick';
//       }
//     }

//     unexpectedOutcome('Colonel Mustard');
//   }

//   plotTwist('Dining Room');
// }

// const declareWeapon = function() {
//   return `The weapon is ${scenario.weapon}.`
// }

// changeScenario();
// const verdict = declareWeapon();
// console.log(verdict);
// ================================Predict================================
// The weapon is Candle Stick.


// ================================Episode 9================================
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';}


// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }

// const verdict = declareMurderer();
// console.log(verdict);


// ================================Predict================================
// The weapon is Mrs. Peacock.
// correction: The murderer is Professor Plum.


// ================================Extensions================================
// let murderer = 'Professor Plum';

// if (murderer === 'Professor Plum') {
//   let murderer = 'Mrs. Peacock';


// const declareMurderer = function() {
//   return `The murderer is ${murderer}.`;
// }


// console.log(declareMurderer())
// }

//The murderer is Mrs. Peacock.


// 3 suspects 
// who steal the diamond
// neighbour driver husband
// if murder can prove non-presence in crime scene, pass(neighbour)
//if murder drinks no alcohol,pass
// if icecube is floating, pass

let victim={
  name:'Shay',
  sleep_at:22,
  diamond_lost:true
}

let friend={
  name:'Lucy',
  sleep_at:20,
  alcholic:true
}
let driver={
  name:'Ken',
  sleep_at:22,
  alcholic:false
}
let husband={
  name:'John',
  sleep_at:24,
  alcholic:true
}


function findSuspects(victim, suspects) {

  let left_suspect=[];
  for (let suspect of suspects){
    if (suspect.sleep_at>=victim.sleep_at){
      left_suspect.push(suspect.name)
    }
  }
  // return left_suspect;

  // let final_suspect=[];
  for (let left_suspect of suspect)
  if (left_suspect.alcholic==true){
    console.log(`murder is ${left_suspect.name}`)

  }

}

let suspects = [friend, driver, husband];
let left_suspects = findSuspects(victim, suspects);





console.log(`there are ${left_suspects.length} suspects left: ${left_suspects.join(' , ')}`)


// console.log(suspects)
// for (let name in suspect.name){
//   console.log(name)
//   }