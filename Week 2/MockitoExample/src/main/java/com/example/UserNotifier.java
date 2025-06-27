package com.example;

public class UserNotifier {
    private NotificationService service;

    public UserNotifier(NotificationService service) {
        this.service = service;
    }

    public void notifyUser(String message) {
        service.sendNotification(message);
    }
}
