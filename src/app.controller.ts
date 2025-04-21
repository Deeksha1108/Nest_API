import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BookService } from './app.service';

@Controller('book')
export class BookController {
  // public bookService : BookService = new BookService();
  constructor(private bookService: BookService) {}

  // add book
  @Post('/add')
  addBook(): string {
    // return 'This will add book';
    return this.bookService.addBook();
  }
  // delete book
  @Delete('/delete')
  deleteBook(): string {
    // return 'This will delete book';
    return this.bookService.deleteBook();
  }
  // update book
  @Put('/update')
  updateBook(): string {
    // return 'This will update book';
    return this.bookService.updateBook();
  }
  // find all books
  @Get('/findAll')
  findAllBooks(): string {
    // return 'This will find all books';
    return this.bookService.findBooks();
  }
  // find Book by Id
    @Get('/findBookById/:bookId')
    findBookById(@Param() params): string {
      console.log(params.id);
      return `This will find a book of id #${params.bookId}`;
    }
}
