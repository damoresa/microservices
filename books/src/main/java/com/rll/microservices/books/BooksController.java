package com.rll.microservices.books;

import com.rll.microservices.books.dao.BookDAO;
import com.rll.microservices.books.model.Author;
import com.rll.microservices.books.model.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.context.config.annotation.RefreshScope;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

@RefreshScope
@RestController
public class BooksController {

    @Autowired
    RestTemplate restTemplate;

    @Autowired
    private AuthorsClient authorsClient;
    @Autowired
    private BookDAO bookDAO;

    @RequestMapping("/books/init")
    void initBooks() {

        Book book1 = new Book("1", "ISO-331", "This is a test book", "The test book was written for test purposes", "1");
        Book book2 = new Book("2", "ISO-332", "This is the second test book", "The second test book was written for test purposes", "1");
        Book book3 = new Book("3", "ISO-333", "This is the third test book", "The third test book was written for test purposes", "2");

        bookDAO.save(Arrays.asList(book1, book2, book3));
    }

    @RequestMapping("/books/{isbn}")
    Book getBook(@PathVariable("isbn") String isbn) {
        return bookDAO.findByIsbn(isbn);
    }

    @RequestMapping("/books")
    List<Book> getBooks() {

        List<Book> books = bookDAO.findAll();

        for (Book book : books)
        {
            Author author = authorsClient.getAuthorData(book);

            String authorName = author.name + " " + author.lastname;
            book.author = authorName;
        }

        return books;
    }
}
