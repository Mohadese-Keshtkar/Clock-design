const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")

function setDate(){
  const now = new Date();
  const timezoneOffset = -210; // تفاوت زمانی ایران با گرینویچ به دقیقه
  const iranTime = new Date(now.getTime() + (timezoneOffset * 60 * 1000)); // محاسبه زمان ایرانی با توجه به تفاوت زمانی

  const getSecond = iranTime.getSeconds();
  const getMinute = iranTime.getMinutes();
  const getHour = iranTime.getHours();

  const secondDegree = (getSecond / 60) * 360;
  const minuteDegree = (getMinute / 60) * 360;
  const hourDegree = ((getHour % 12) / 12) * 360;

  second.style.transform = `rotate(${secondDegree}deg)`;
  minute.style.transform = `rotate(${minuteDegree}deg)`;
  hour.style.transform = `rotate(${hourDegree}deg)`;
}

setInterval(setDate,1000);
