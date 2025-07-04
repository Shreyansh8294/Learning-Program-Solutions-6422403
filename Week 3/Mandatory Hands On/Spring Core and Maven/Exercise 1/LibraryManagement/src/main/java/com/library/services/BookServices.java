package com.library.services;

import com.library.repository.BookRepository;

public class BookServices {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void printBookTitle() {
        System.out.println("Book: " + bookRepository.getBookTitle());
    }
}
