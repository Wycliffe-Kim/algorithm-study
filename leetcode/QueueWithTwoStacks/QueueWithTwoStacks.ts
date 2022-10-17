import { Stack } from '../Stack';

export class QueueWithTwoStacks<T> {
  private _mainStack: Stack<T>;
  private _subStack: Stack<T>;

  constructor() {
    this._mainStack = new Stack<T>();
    this._subStack = new Stack<T>();
  }

  push = (x: T) => {
    while (!this._mainStack.empty()) {
      this._subStack.push(this._mainStack.pop());
    }
    this._mainStack.push(x);
    while (!this._subStack.empty()) {
      this._mainStack.push(this._subStack.pop());
    }
  };

  pop = () => this._mainStack.pop();

  peek = () => this._mainStack.peek();

  empty = () => this._mainStack.empty();

  data = () => this._mainStack.data();
}
