var targetIndices = function(nums, target) {
    nums.sort(function(a, b){return a - b});
arr = [];

for(i = 0; i < nums.length; i++){
    
     if(nums[i] == target){
        arr.push(i) ;
     }
    
}
  return arr ;
};
