import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const input = document.querySelector('input[type="text"]');

const startButton = document.querySelector('[data-start]');
startButton.disabled = true;

const daysCount = document.querySelector('[data-days]');
const hoursCount = document.querySelector('[data-hours]');
const minutesCount = document.querySelector('[data-minutes]');
const secondsCount = document.querySelector('[data-seconds]');

let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const timeRightNow = Date.now();
    if (userSelectedDate.getTime() <= timeRightNow) {
      startButton.disabled = true;
      iziToast.warning({
        message: 'Please choose date in the future',
        position: 'topRight',
        backgroundColor: 'red',
      });
    } else {
      startButton.disabled = false;
    }
  },
};
flatpickr(input, options);

startButton.addEventListener("click", (event) => {
  event.preventDefault();
  let timeRemaining = userSelectedDate - Date.now();

  function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const days = Math.floor(ms / day);
    const hours = Math.floor((ms % day) / hour);
    const minutes = Math.floor(((ms % day) % hour) / minute);
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
    
    return { days, hours, minutes, seconds };
  }
  
  const countdown = setInterval(() => {
    timeRemaining -= 1000;
    console.log(timeRemaining / 1000);

    let timeCounter = convertMs(timeRemaining);

    function addLeadingZero(value) {
      return String(value).padStart(2, "0");
    }
    daysCount.textContent = addLeadingZero(timeCounter.days);
    hoursCount.textContent = addLeadingZero(timeCounter.hours);
    minutesCount.textContent = addLeadingZero(timeCounter.minutes);
    secondsCount.textContent = addLeadingZero(timeCounter.seconds);

    if ((timeRemaining / 1000) < 1) {
      clearInterval(countdown);
    }
  }, 1000);
});







