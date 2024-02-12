
// var StockSpanner = function() {
//     let st = []
    
    
// };


class StockSpanner {
    st = [];
    next(price) {
        let i=this.st.length > 0 ? this.st.length-1 : 0
        // console.log('====== price : ', price)
        // console.log('this.st : ', this.st)  
        while(i >= 0 && this.st[i]<=price) {
            // console.log('i : ', i)
            i--
        }

        // console.log('final i : ', i)

        // this.st = this.st.slice(i)
        const answer = this.st.length - i === 0 ? 1 : this.st.length - i
        // console.log('price : ', price)
        this.st.push(price)
        // console.log('after this.st : ', this.st)    
        return answer
    }
}

// /** 
//  * @param {number} price
//  * @return {number}
//  */
// StockSpanner.prototype.next = function(price) {
//     let st = []
//     let i=st.length > 0 ? st.length-1 : 0
//     console.log('====== price : ', price)
//     while(i > 0 && st[i]>price) {
//         console.log('i : ', i)
//         i--
//     }
    
//     console.log('i : ', i)
    
//     st = st.slice(i)
//     console.log('st : ', st)    
//     const answer = st.length - i + 1
//     st.push(price)
//     return answer
// };

// /** 
//  * Your StockSpanner object will be instantiated and called as such:
//  * var obj = new StockSpanner()
//  * var param_1 = obj.next(price)
//  */