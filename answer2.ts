//withoutRecursion: I think the code is clearer but longer.
//Recursion: Much shorter to write. The recursion is more efficient.
interface INode {
    name: string;
    children: INode[];
}

interface IStack<INode> {
    push(item: INode): void;
    pop(): INode | undefined;
    peek(): INode | undefined;
    size(): number;
}

class Stack<INode> implements IStack<INode> {
    private storage: INode[] = [];

    constructor(private capacity: number = Infinity) { }

    push(item: INode): void {
        if (this.size() === this.capacity) {
            throw Error("Stack has reached max capacity, you cannot add more items");
        }
        this.storage.push(item);
    }

    pop(): INode | undefined {
        return this.storage.pop();
    }

    peek(): INode {
        return this.storage[this.size() - 1];
    }

    size(): number {
        return this.storage.length;
    }
}

const withoutRecursion = (node: INode) => {
    let stack = new Stack<INode>();
    let n: INode | undefined = {
        name: "",
        children: []
    };
    stack.push(node);
    while (stack.size() > 0) {
        console.log(stack.peek().name);
        n = stack.pop();
        n?.children.forEach(c => stack.push(c));
    }

}

const recursion = (node: INode) => {
    console.log(node.name);
    if (node.children.length === 0)
        return;
    for (let i = 0; i < node.children.length; i++) {
        recursion(node.children[i]);
    }
}


