import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmazBM70lDeth9gx82VozGF1DvmHGbFl0",
  authDomain: "newbiz-b8f76.firebaseapp.com",
  projectId: "newbiz-b8f76",
  storageBucket: "newbiz-b8f76.firebasestorage.app",
  messagingSenderId: "285657167072",
  appId: "1:285657167072:web:d6c284d50d419236b7cc85",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };

//Contact Data
const contactForm = document.querySelector(".contact-form");
const name = document.querySelector(".full-name");
const email = document.querySelector(".email-address");
const message = document.querySelector(".message");
const subject = document.querySelector(".subject");
const submit = document.querySelector(".submit-form");
const module = document.querySelector(".module-wrap");
const close = document.querySelector(".module-close");

submit.addEventListener("click", async (e) => {
  e.preventDefault();
  try {
    await addDoc(collection(db, "contact-form"), {
      name: name.value,
      email: email.value,
      message: message.value,
      subject: subject.value,
    });
    contactForm.reset();
    module.classList.toggle("display-none");
  } catch (error) {
    console.error("Error adding document: ", error);
  }
});

close.addEventListener("click", () => {
  module.classList.toggle("display-none");
});
