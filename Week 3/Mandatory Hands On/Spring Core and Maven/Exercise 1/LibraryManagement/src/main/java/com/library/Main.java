package com.library;

import com.library.services.BookServices;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class Main {
    public static void main(String[] args) {
        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        BookServices bookService = (BookServices) context.getBean("bookService");
        bookService.printBookTitle();
    }
}
