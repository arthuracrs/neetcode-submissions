class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }

    push(val) {
        if (
            this.min.length === 0 ||
            val <= this.min[this.min.length - 1]
        ) {
            this.min.push(val);
        }

        this.stack.push(val);
    }

    pop() {
        const val = this.stack.pop();

        if (val === this.min[this.min.length - 1]) {
            this.min.pop();
        }
    }

    top() {
        return this.stack[this.stack.length - 1];
    }

    getMin() {
        return this.min[this.min.length - 1];
    }
}