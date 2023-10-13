class Queue {
  front;
  rear;
  size;
  queue;
  constructor(size) {
    this.front = 0;
    this.rear = 0;
    this.size = size;
    this.queue = [];
  }

  isFull() {
    return this.rear === this.size;
  }

  isEmpty() {
    return this.front === this.rear;
  }

  enQueue(element) {
    if (this.isFull()) {
      console.log("队列满了，不能继续入队！");
      return;
    }
    this.queue[this.rear] = element;
    this.rear += 1;
  }

  deQueue() {
    if (this.isEmpty()) {
      console.log("队列空了，不能继续出队！");
      return;
    }
    const res = this.queue[this.front];
    this.front += 1;
    return;
  }
}

const queue = new Queue(3);
console.log(queue.isEmpty());
queue.enQueue(1);
queue.enQueue(3);
queue.enQueue(2);
queue.enQueue(2);

queue.deQueue();
queue.deQueue();
queue.deQueue();
queue.deQueue();
console.log(queue);

queue.enQueue(1);
