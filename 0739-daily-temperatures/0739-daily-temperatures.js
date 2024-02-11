/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
// var dailyTemperatures = function(temperatures) {
//     let left=0, right=1;
//     const answer = Array(temperatures.length).fill(0)
//     while(left < temperatures.length-1) {
//         if(temperatures[left] < temperatures[right]) {
//             answer[left] = right-left
//             right = ++left
//             continue
//         }
//         if(right < temperatures.length) {
//             right++
//         } else {
//             right = ++left
//         }
//     }
    
//     return answer
// };
var dailyTemperatures = function(temperatures) {
    const ans = Array(temperatures.length).fill(0)
    const stack=[]
    
    for(let i=temperatures.length-1;i>=0;i--) {
        while(stack.length > 0 && temperatures[stack[0]] <= temperatures[i]) {
              stack.shift()
        }
        
        if(stack.length === 0) {
            ans[i] = 0
        } else {
            ans[i]=stack[0]-i
        }
        
        stack.unshift(i)
    }
    return ans
}



// var dailyTemperatures = function(temperatures) {
//     const stack = [];
//     const result = new Array(temperatures.length).fill(0);

//     for (let i = temperatures.length - 1; i >= 0; --i) {
//         console.log('===== i ',i)
//         while (stack.length > 0 && temperatures[i] >= temperatures[stack[0]]) {
//             console.log('stack : ', stack)
//             stack.shift();
//         }

//         if (stack.length === 0) {
//             result[i] = 0;
//         } else {
//             result[i] = stack[0] - i;
//         }
        
//         // console.log('result : ', result )

//         stack.unshift(i);
//         // console.log('stack : ', stack)
//     }

//     return result;
// };