/**
 * @param {number[]} fruits
 * @return {number}
 */
/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    
    
    let unique = 0;
    let j = 0;
    let map = {};
    let max = 0;
    for(let i=0;i<fruits.length;i++){
        
        if(!(fruits[i] in map)){ unique +=1  }
        addMap(fruits[i],map);
        while(unique > 2 && j < i ){
            if(map[fruits[j]] <= 1){
                unique -=1;
            }
            rmMap(fruits[j],map)
            j++; 
        }
        
         max = Math.max(max,i-j+1) 
    }
   
    
    return max
    
};


const addMap = (num,map)=>{
    let count = map[num] || 0
    map[num] = count +1 
}

const rmMap = (num,map)=>{
    let count = map[num] || 1
    if(count <= 1){
        delete map[num]
        return
    }
    map[num] = count -1
}