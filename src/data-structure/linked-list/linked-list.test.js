import {
  Node,
  LinkedList,
  LinkedListWithHead,
  findFirstCommonNode,
  reorderList,
  reverseList,
  kthToLast,
} from "./linked-list";

const Node1 = new Node(1);
const Node2 = new Node(2);
const Node3 = new Node(3);
const Node4 = new Node(4);
const Node5 = new Node(5);
const Node6 = new Node(6);
const Node7 = new Node(7);

Node1.next = Node2;
Node2.next = Node3;
Node3.next = Node6;
Node4.next = Node5;
Node5.next = Node6;
Node6.next = Node7;

describe("链表题目集", () => {
  test("111", () => {});

  // test("两个链表的第一个公共结点", () => {
  //   expect(findFirstCommonNode(Node1, Node4)).toEqual(Node6);
  // });

  // test("返回倒数第 k 个节点的值", () => {
  //   expect(kthToLast(Node1, 2));
  // });

  // test("反转链表", () => {
  //   const linkedList1 = new LinkedList();
  //   [1, 2, 3, 4, 5].forEach((item) => linkedList1.append(item));
  //   const linkedList2 = new LinkedList();
  //   [5, 4, 3, 2, 1].forEach((item) => linkedList1.append(item));

  //   expect(reverseList(linkedList1)).toEqual(linkedList2);
  // });
});
