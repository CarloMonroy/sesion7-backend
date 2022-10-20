"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const apollo_server_errors_1 = require("apollo-server-errors");
const Book_1 = __importDefault(require("../db/model/Book"));
class BookController {
    async getBooks() {
        return await Book_1.default.findAll();
    }
    async getBook(asin) {
        return await Book_1.default.findOne({ where: { asin } });
    }
    async saveBook(asin, title, author, pages) {
        return await Book_1.default.create({ asin, title, author, pages });
    }
    async updateBook(asin, title, author, pages) {
        const book = Book_1.default.findOne({
            where: { asin },
        });
        if (book) {
            await Book_1.default.update({ asin, title, author, pages }, {
                where: { asin },
            });
            return await Book_1.default.findOne({ where: { asin } });
        }
        else {
            throw new apollo_server_errors_1.ApolloError("Book not found", "ERR003");
        }
    }
}
exports.BookController = BookController;
