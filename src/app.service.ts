import { Injectable } from "@nestjs/common";

@Injectable()
export class BookService {
  addBook(): string {
    return 'This will add Book';
  }
  updateBook(): string {
    return 'This will update Book';
  }
  deleteBook(): string {
    return 'This will delete Book';
  }
  findBooks(): string {
    return 'This will find all Book';
  }
}
