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