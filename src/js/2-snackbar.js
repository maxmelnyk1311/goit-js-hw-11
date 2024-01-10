import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const delayInput = document.querySelector("input[name='delay']");
const fullfilledInput = document.querySelector("input[value='fulfilled']");
const rejectedInput = document.querySelector("input[value='rejected']");
const submitButton = document.querySelector('button');

submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    const delay = Number(delayInput.value);
    const inputsArr = Array.from(document.querySelectorAll("input[name='state']"));
    const clickedInput = inputsArr.find((item) => item.checked);

    function createPromise(inputValue, delay) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                switch(inputValue) {
                    case 'fulfilled':
                        resolve();
                        break;
                    case 'rejected':
                        reject();
                        break;
                    default:
                        console.log("Something is wrong!");
                }
            }, delay)
        })
    }

    createPromise(clickedInput.value, delay)
    .then(() =>
    iziToast.success({
        position: "topRight",
        message: `✅ Fullfilled promise in ${delay}ms`,
        backgroundColor: "green",
    }))
    .catch(() =>
    iziToast.error({
        position: 'topRight',
        message: `❌ Rejected promise in ${delay}ms`,
        backgroundColor: "red",
    }));

    clickedInput.checked = false;
})