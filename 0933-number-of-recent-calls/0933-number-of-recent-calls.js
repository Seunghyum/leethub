
class RecentCounter {
    constructor() {
        this.range = []
    }

    ping(t){
        this.range.push(t)
        
        while (this.range[0]  < t - 3000) {
            this.range.shift()
        }
            
        return this.range.length
    }
}