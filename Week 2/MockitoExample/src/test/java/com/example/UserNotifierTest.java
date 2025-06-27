package com.example;

import static org.mockito.Mockito.*;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;

public class UserNotifierTest {

    @Test
    public void testVerifyInteraction() {
        // Step 1: Create mock
        NotificationService mockService = Mockito.mock(NotificationService.class);

        // Step 2: Use UserNotifier with mock
        UserNotifier notifier = new UserNotifier(mockService);
        notifier.notifyUser("Welcome!");

        // Step 3: Verify interaction
        verify(mockService).sendNotification("Welcome!");
    }
}
