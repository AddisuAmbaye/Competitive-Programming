var maxOperations = function(nums, k) {

    nums.sort((a,b)=>a-b);
    let counter = 0;
    let i = 0;
    let j = nums.length - 1;
    while(i<j){
         if(nums[i] + nums[j] > k) {
             j--;
         }
         else if(nums[i] + nums[j] < k) {
            i++;
         }
              
         else {
                 i++;
                    j--;
                    counter++;
         }
             
    }
    return counter;

};
