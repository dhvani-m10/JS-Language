class Book {
    #author;
    #price;
    #rentalPrice;
    #copiesAvailable;
    constructor(title, author, price, rentalPrice, copiesAvailable) {
        this.title = title;
        this.#author = author;
        this.#price = price;
        this.#rentalPrice = rentalPrice;
        this.#copiesAvailable = copiesAvailable;
    }

    getAuthor() {
        return this.#author;
    }

    setAuthor() {
        this.#author = author;
    }

    getPrice() {
        return this.#price;
    }

    setPrice() {
        this.#price = price;
    }

    getRentalprice() {
        return this.#rentalPrice;
    }

    setRentalprice() {
        this.#rentalPrice = rentalPrice;
    }

    getcopiesAvailable() {
        return this.#copiesAvailable;
    }

    setCopiesAvailable() {
        this.#copiesAvailable = copiesAvailable;
    }

    buyBook() {
        if (this.#copiesAvailable > 0) {
            this.#copiesAvailable = this.#copiesAvailable - 1
            console.log(`BOOK PURCHASED : ${this.title}`);
        } else {
            console.log(`Sorry,This Book is out of stock`);
        }
    }

    rentBook() {
        if (this.#copiesAvailable > 0) {
            this.#copiesAvailable -= 1
            console.log(`BOOK RENTED : ${this.title}`);
        } else {
            console.log(`Sorry,This Book is out of stock`);
        }
    }

    returnBook() {
        this.#copiesAvailable += 1;
        console.log(`BOOK RETURNED : ${this.title}`);
    }

    checkAvailability() {
        console.log(`Copies available of ${this.title} is: ${this.#copiesAvailable}`);
    }

}
const b1 = new Book('The Outsiders', 'SE Hinton', 500, 250, 50);
console.log("AUTHOR NAME : ",b1.getAuthor()); // ABC

b1.buyBook(); 
b1.checkAvailability(); 

b1.rentBook(); 
b1.checkAvailability(); 

b1.returnBook(); 
b1.checkAvailability(); 
