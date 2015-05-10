
function Queue() {
    this.ingoing = [];
    this.outgoing = [];
}

Queue.prototype.enqueue = function(item) {
    this.ingoing.push(item);
}

Queue.prototype.dequeue = function() {
    if(this.outgoing.length === 0) {
        do {
            var item = this.ingoing.pop();
            this.outgoing.push(item);
        } while(this.ingoing.length > 0)
    }
    return this.outgoing.pop();
}

var testQ = new Queue();
testQ.enqueue(1);
testQ.enqueue(2);
testQ.enqueue(3);
testQ.enqueue(4);

console.log(testQ.dequeue(), testQ.dequeue(), testQ.dequeue(), testQ.dequeue())
