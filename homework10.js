// 1
class Author {
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }

    get getName() {
        return this.name;
    }

    get getEmail() {
        return this.email;
    }

    get getGender() {
        return this.gender;
    }

    toString() {
        return `Author: ${this.name}, Email: ${this.email}, Gender: ${this.gender}`;
    }
}

class Book {
    constructor(title, author, price, quantity) {
        this.title = title;
        this.author = author;
        this.price = price;
        this.quantity = quantity;
    }

    get getTitle() {
        return this.title;
    }

    set setTitle(title) {
        this.title = title;
    }

    get getAuthor() {
        return this.author;
    }

    get getPrice() {
        return this.price;
    }

    set setPrice(price) {
        this.price = price;
    }

    get getQuantity() {
        return this.quantity;
    }

    set setQuantity(quantity) {
        this.quantity = quantity;
    }

    getProfit() {
        return this.price * this.quantity;
    }

    toString() {
        return `Book: ${this.title}, Author: ${this.author.getName}, Price: ${this.price}, Quantity: ${this.quantity}, Profit: ${this.getProfit()}`;
    }
}
