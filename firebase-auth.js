var firebaseConfig = {
    apiKey: "AIzaSyDtGUFVjZyT5URaga0tClNb0J5q6dzFZjk",
    authDomain: "login-authentic-406102.firebaseapp.com",
    databaseURL: "https://login-authentic-406102-default-rtdb.firebaseio.com",
    projectId: "login-authentic-406102",
    storageBucket: "login-authentic-406102.appspot.com",
    messagingSenderId: "278651212178",
    appId: "1:278651212178:web:92a00dca8f99699e8b714b"
  };

// Ubah ke firebase real-time database jika Anda membutuhkannya.
// Ubah ke alamat proyek Firebase Anda.
var databaseURL = 'https://login-authentic-406102-default-rtdb.firebaseio.com';

// Ubah menjadi sesuai dengan kebutuhan otentikasi Anda.
var googleRedirectURI = 'http://localhost/redirect';

// Pastikan Firebase sudah diinisialisasi
if (firebaseConfig) {
    // TODO: Tambahkan logika otentikasi di sini
    // Misalnya, periksa apakah pengguna sudah masuk atau belum.
}
// Pastikan Firebase sudah diinisialisasi
if (firebaseConfig) {
    // TODO: Tambahkan logika otentikasi di sini
    // Misalnya, periksa apakah pengguna sudah masuk atau belum.
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            // Pengguna sudah masuk
            console.log("User is signed in:", user);
        } else {
            // Pengguna belum masuk
            console.log("User is signed out");
        }
    });
}

