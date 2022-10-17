class StackNode<T> {
  value: T | null;
  prev: StackNode<T> | null;
  next: StackNode<T> | null;

  constructor(value: T | null) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class Stack<T> {
  private _size: number = 0;
  private _head: StackNode<T> | null;
  private _tail: StackNode<T> | null;

  constructor() {
    this._head = null;
    this._tail = null;
  }

  get size() {
    return this._size;
  }

  push = (value: T | null) => {
    this._size += 1;
    // console.log('before push', this.data());
    if (!this._head) {
      this._head = new StackNode(value);
      this._tail = this._head;
    } else {
      if (!this._tail) {
        this._tail = new StackNode(value);
        this._head.next = this._tail;
        this._tail.prev = this._head;
      } else {
        const prev = this._tail;
        prev.next = new StackNode(value);
        if (prev.next) {
          prev.next.prev = prev;
          this._tail = prev.next;
        }
      }
    }
    // console.log('after push', this.data());
  };

  pop = () => {
    this._size -= 1;
    let value: T | null = null;
    // console.log('before pop', this.data());
    if (this._tail) {
      value = this._tail.value;
      const prev = this._tail.prev;
      if (prev) {
        prev.next = null;
        this._tail = prev;
      } else {
        this._head = null;
        this._tail = null;
      }
    } else {
      if (this._head) {
        value = this._head.value;
        this._head = null;
      }
    }

    // console.log('after pop', this.data());

    return value;
  };

  peek = () => {
    let value: T | null = null;
    if (this._tail) {
      value = this._tail.value;
    } else {
      if (this._head) {
        value = this._head.value;
      }
    }

    return value;
  };

  empty = () => this.size === 0;

  data = () => {
    const result: (T | null)[] = [];
    let prev = this._tail;
    while (prev) {
      result.push(prev.value);
      prev = prev.prev;
    }

    return result;
  };
}
