package com.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class MathOperationsTest {

    private MathOperations mathOps;

    @Before
    public void setUp() {
        mathOps = new MathOperations(); // Arrange
        System.out.println("Setup complete.");
    }

    @After
    public void tearDown() {
        mathOps = null;
        System.out.println("Teardown complete.");
    }

    @Test
    public void testMultiply() {
        // Act
        int result = mathOps.multiply(3, 4);
        // Assert
        assertEquals(12, result);
    }

    @Test
    public void testDivide() {
        int result = mathOps.divide(10, 2);
        assertEquals(5, result);
    }

    @Test(expected = IllegalArgumentException.class)
    public void testDivideByZero() {
        mathOps.divide(10, 0);
    }
}

