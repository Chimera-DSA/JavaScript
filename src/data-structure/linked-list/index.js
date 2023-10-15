class LNode {
  data;
  next;
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const head = new LNode();
const Node1 = new LNode(1);
const Node2 = new LNode(2);
const Node3 = new LNode(3);
const Node4 = new LNode(4);
const Node5 = new LNode(5);

head.next = Node1;
Node1.next = Node2;
Node2.next = Node3;
Node3.next = Node4;
Node4.next = Node5;

function re(root) {
  let head = root.next;
  let nums = 1;
  while (head != null && nums !== 2) {
    // console.log(temp.data)
    head = head.next;
    nums++;
  }
  console.log(head.data)
}

function re2(root) {
  let nums = 1;
  while (root !== null && nums !== 2) {
    root = root.next;
    nums++;
  }
  console.log(root.data);
}

re(head);
// re2(Node1);
