var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a-b);
    let counter = 0;
    let i = 0;
    let j =people.length-1;
    while(i <= j){
        if(people[i] + people[j] <= limit){
            i++;
            j--;
        }
        else {
            j--;
        }
          counter++;  
        }
    
  return counter;
};
