// A hero is on his way to the castle to complete his mission. However, 
// he's been told that the castle is surrounded with a couple of powerful dragons! 
// each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets
//  he should carry.. Assuming he's gonna grab a specific given number of
//   bullets and move forward to fight another specific given number of dragons, will he survive?

// Return true if yes, false otherwise :)

// **Params**
// each dragon takes 2 bullets to defeat
// we need to know how many 
// **examples**
// if 2 dragons, he will need 4 bullets, he has 5 bullets, true
// if 5 dragons, he will need 10 bullets; he has 4 bullets, false
// **pseudo**
// take number of dragons and multiple that by two
// set that number to a new variable, lets call it bulletsNeeded
// if bulletsNeeded is less than bullets he has, return false
// if bulletsNeeded is greater than or equal to bullets he has, return true


// My solution
function hero(bullets, dragons){
    let bulletsNeeded = dragons * 2
    
    if(bullets >= bulletsNeeded){
      return true
    }else{
        return false
      }
    }
  
  

    // Refactor into a single line

function hero(bullets, dragons){
   return bullets >= dragons * 2;
}