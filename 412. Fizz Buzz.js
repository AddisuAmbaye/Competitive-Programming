var fizzBuzz = function(n) {
    let num = [];
   

let nums = [];
for(let i = 0;i < n;i++){
    num[0]=1;

        if(num[i]%3==0 && num[i]%5==0){
                        nums.push('FizzBuzz');
                    }
        else if(num[i]%3==0){
                        nums.push('Fizz');
                    }

        else if (num[i]%5==0){

                        nums.push('Buzz');

                    }           

        else
            nums.push(num[i].toString());
                             
   num[i+1] = num[i]+1;
                    }
    return nums;
};
