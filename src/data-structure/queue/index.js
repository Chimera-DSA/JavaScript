class CircularQueueWithArray {
  front;
  rear;
  maxSize;
  queue;
  constructor(maxSize) {
    this.front = 0;
    this.rear = 0;
    this.maxSize = maxSize;
    this.queue = [];
  }

  isFull() {
    return (this.rear + 1) % this.maxSize === this.front;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  size() {
    return (this.rear + this.maxSize - this.front) % this.maxSize;
  }

  enQueue(data) {
    if (this.isFull()) {
      console.log("队列满了，不能再入队！");
      return;
    }
    this.queue[this.rear] = data;
    this.rear = (this.rear + 1) % this.maxSize;
  }

  deQueue() {
    if (this.isEmpty()) {
      console.log("队列为空，没有可出队元素！");
      return;
    }
    const temp = this.queue[this.front];
    this.front = (this.front + 1) % this.maxSize;
    return temp;
  }

  Front() {
    return this.queue[this.front];
  }

  Rear() {
    return this.queue[(this.rear - 1 + this.maxSize) % this.maxSize];
  }

  showQueue() {
    if (this.isEmpty()) {
      console.log("队列为空，没有元素！");
      return;
    }
    for (let i = this.front; i < this.front + this.size(); i++) {
      console.log(i % this.maxSize, this.queue[i % this.maxSize]);
    }
  }
}



const circularQueue = new CircularQueueWithArray(6);
circularQueue.enQueue("a");
circularQueue.enQueue("b");
circularQueue.enQueue("c");
circularQueue.deQueue();
circularQueue.enQueue("d");
circularQueue.enQueue("e");
circularQueue.enQueue("f");
circularQueue.deQueue();
circularQueue.enQueue("g");
circularQueue.deQueue();
circularQueue.enQueue("h");

console.log(circularQueue);
circularQueue.showQueue();
console.log(circularQueue.Rear())
