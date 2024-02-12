class StockSpanner {
    stack = [];
    
    next(price) {
        let cur = { price, span: 1}
        while(this.stack.length && this.stack[this.stack.length-1].price <= price) {
            const prev = this.stack.pop()
            cur.span += prev.span
        }
        
        this.stack.push(cur)
        
        return cur.span
    }
}

/**

class StockSpanner {
    st = [];
    next(price) {
        let i=this.st.length > 0 ? this.st.length-1 : 0
        while(i >= 0 && this.st[i]<=price) {
            i--
        }
        const answer = this.st.length - i === 0 ? 1 : this.st.length - i
        this.st.push(price)   
        return answer
    }
}

*/