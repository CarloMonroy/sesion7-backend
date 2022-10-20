"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
const BookController_1 = require("./controller/BookController");
const bookController = new BookController_1.BookController();
exports.resolvers = {
    Query: {
        getAllBooks: async () => {
            return await bookController.getBooks();
        },
        getBook: async (_, { asin }) => {
            return await bookController.getBook(asin);
        },
    },
    Mutation: {
        insertBook: (_, { asin, title, author, pages }, { token }) => {
            return bookController.saveBook(asin, title, author, pages);
        },
        updateBook: (_, { asin, title, author, pages }, { token }) => {
            return bookController.updateBook(asin, title, author, pages);
        },
    },
};
