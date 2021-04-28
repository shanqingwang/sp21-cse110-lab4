part1x-questionY-z.js 
# Part 1a
1. values added: 20
2. final result: 20
3. values added: 20
4. error, result only exists within the scope of the if, there is no result for the function
5. never reaches, error trying to change const value in line 7
6. same as above

# Part 1b
1. 3 is printed. i is incremented until it is equal to length of prices, scope is allowed since var has no scope
2. 150 is printed. the last value of discountedPrice is printed, which is last element in prices * 0.5, var declaration allows it to be reached
3. 150 is printed. last final price caculation is returned, which is 150 * 100 / 100. Round only rounds to nearest integery
4. [50, 100, 150], works as expected
5. error. i is only in for loop scope
6. error. discountedPrice is only in for loop scope
7. 150, same reason as 3, this works since finalPrice is in function scope
8. [50, 100, 150], works as expected
9. error, tries to print i, out of scope of function
10. 3 is printed, length is in scope, and length of prices is 3
11. [50, 100, 150], function works as expected. since you are not changing discounted, pushing to it works as expected
12. A. student.name  
    B. student["Grad Year"]  
    C. student.greeting()  
    D. student["Favorite Teacher].name  
    E. student.courseLoad[0]  
13. A. 32, 2 converted to string, addition favors concatenation   
    B. 1, subtraction favors numerical  
    C. 3, in numberic conversion, null is 0  
    D. 3null, null coverts to string
    E. 4, true becomes 1 as numerical  
    F. 0, false and null both are 0 numerically  
    G. 3undefined, undefined gets stringified  
    H. NaN, undefined has no numerical value  
14. A. true, string converted to number when number present  
    B. false, lexographical order compared with two strings  
    C. true, string converted  
    D. false, comparison without conversion  
    E. false, true equal to 1  
    F. true, Boolean() is true for anything non-empty  
15. == tests for equality after conversion, === checks before conversion  
16. in part1b-question16.js  
17. [2,4,6]. the for loop runs for each element in array. in each iteration, the value array[i] * 2 is pushed to the newArr, which gets returned after the loop ends.
18. in part1b-question18.js  
19. 1432, calling setTimeout schedules the command for the next cycle, even if the delay is 0  