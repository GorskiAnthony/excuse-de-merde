import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const displayUpVote = () => {
  Toastify({
    text: "Aller merci d'avoir voté 💪 !",
    duration: 3000,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    backgroundColor: "linear-gradient(to right, #34D399, #059669)",
    stopOnFocus: true, // Prevents dismissing of toast on hover
  }).showToast();
};

export const displayDownVote = () => {
  Toastify({
    text: "Ok, on va voir ce que l'on peut faire 😅",
    duration: 3000,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    backgroundColor: "linear-gradient(to right, #F87171, #DC2626)",
    stopOnFocus: true, // Prevents dismissing of toast on hover
  }).showToast();
};

export const displayDefault = () => {
  Toastify({
    text: "Un cas particulier là",
    duration: 3000,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    backgroundColor: "linear-gradient(to right, #6366F1, #7C3AED)",
    stopOnFocus: true, // Prevents dismissing of toast on hover
  }).showToast();
};

export const displayCopy = () => {
  Toastify({
    text: "C'est bien copiée !",
    duration: 3000,
    gravity: "top", // `top` or `bottom`
    position: "right", // `left`, `center` or `right`
    backgroundColor: "linear-gradient(to right, #6366F1, #7C3AED)",
    stopOnFocus: true, // Prevents dismissing of toast on hover
  }).showToast();
};
