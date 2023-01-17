/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
     count = 0
     i = 0
   while(students.length > count){
       if(students[i] == sandwiches[i]){
           students.shift()
           sandwiches.shift()
           count = 0
          
       }
       else{
           val = students.shift()
           students.push(val)
           count++
           }
        
    }
    return count
};
