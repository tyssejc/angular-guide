export class Ingredient {
    constructor(public name: string, public amount: number) {}
}

/* ======================================
 * Above is a shortcut for the following:
 * ======================================
 export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number) {
        this.name = name;
        this.amount = amount;
    }
}*/