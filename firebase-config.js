// ===================================================================
// COLE AQUI a configuração que o Firebase te deu ao criar o app Web.
// Vá em: Firebase Console > Configurações do Projeto > Seus apps > Web
// Substitua TODO o objeto abaixo pelo que o Firebase te forneceu.
// ===================================================================
const firebaseConfig = {
    apiKey: "AIzaSyC6NCqgDfUkfrHP0lKI1FZ53aPNZs5oefc",
    authDomain: "unmatched-draft.firebaseapp.com",
    databaseURL: "https://unmatched-draft-default-rtdb.firebaseio.com",
    projectId: "unmatched-draft",
    storageBucket: "unmatched-draft.firebasestorage.app",
    messagingSenderId: "796102008697",
    appId: "1:796102008697:web:9458c95af521e3795819a8",
    measurementId: "G-1GZ1VFEHLX"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();
