importScripts(
  "https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCLI4LT2iUD_DUXWgVAlFCwk9qUJPisq7Y",
  authDomain: "acrchpat.firebaseapp.com",
  projectId: "acrchpat",
  storageBucket: "acrchpat.firebasestorage.app",
  messagingSenderId: "173272763733",
  appId: "1:173272763733:web:3b5f987f253ab23924b3dc",
  measurementId: "G-HYM3E24SP2",
});
const messaging = firebase.messaging();

messaging.onBackgroundMessage(({ notification }) => {
  self.registration.showNotification(notification.title, {
    body: notification.body,
    icon: "/favicon.ico",
  });
});
