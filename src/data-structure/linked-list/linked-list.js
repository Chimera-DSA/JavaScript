class Node {
  data;
  next;
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

/**
 * 头指针链表类
 * @class
 */
class LinkedList {
  head;
  constructor() {
    this.head = null;
  }

  /**
   * 尾插法创建单链表
   * @param {number} data 结点的数据域
   */
  append(data) {
    const newNode = new Node(data);
    if (this.head === null) this.head = newNode;
    else {
      let tail = this.head;
      while (tail.next !== null) {
        tail = tail.next;
      }
      tail.next = newNode;
    }
  }

  /**
   * 头插法创建单链表
   * @param {number} data
   */
  prepend(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }
}

/**
 * 头结点链表类
 * @class
 */
class LinkedListWithHead {
  head;
  tail;
  constructor() {
    this.head = new Node(null);
    this.tail = null;
  }

  append(val) {
    const node = new Node(val);
    let head = this.head;
    while (head.next != null) {
      head = head.next;
    }
    head.next = node;
  }
}

/**
 * @description
 * 牛客题目：BM10 - 两个链表的第一个公共结点 - 简单
 *
 * Leetcode题目：面试题 02.07. 链表相交 - 简单
 *
 * 考研真题：2012统考真题
 *
 * 时间复杂度：O（m + n）
 *  m：链表一的长度
 *  n：链表二的长度
 *
 * 空间复杂度：O（1）
 *
 * @param {LinkedNode} head1 链表一的头指针
 * @param {LinkedNode} head2 链表二的头指针
 * @returns {LinkedNode} 第一个公共结点
 */
function findFirstCommonNode(head1, head2) {
  let h1 = head1;
  let h2 = head2;

  while (h1 !== h2) {
    h1 === null ? (h1 = head2) : (h1 = h1.next);
    h2 === null ? (h2 = head1) : (h2 = h2.next);
  }

  return h1;
}

/**
 * @description
 * Leetcode题目：面试题 02.02. 返回倒数第 k 个节点 - 简单
 *
 * 考研真题：2009统考真题
 *
 * @param {LinkedNode} head 链表的头指针
 * @param {number} k 倒数第k个结点
 * @returns {number} 第k个结点的值
 */
function kthToLast(head, k) {
  let newHead = reverseList(head);
  let count = 1;

  while (newHead !== null) {
    if (count === k) {
      return newHead.val;
    }
    count += 1;
    newHead = newHead.next;
  }
}

/**
 * @description
 * Leetcode题目：LCR 024. 反转链表 - 简单
 *
 * @param {LinkedNode} head 链表头结点
 * @returns {LinkedNode} 新的链表头结点
 */
function reverseList(head) {
  let pre = null;
  while (head !== null) {
    let next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
}

/**
 * @description
 * Leetcode题目：143. 重排链表 - 中等
 *
 * 考研真题：2019年统考真题
 *
 * @param {LinkedNode} head 链表头指针
 * @returns {LinkedNode} 新的头指针
 */
function reorderList(head) {}

/**
 * 链表模块
 * @module
 */
export {
  Node,
  LinkedList,
  LinkedListWithHead,
  findFirstCommonNode,
  reverseList,
  kthToLast,
  reorderList,
};
