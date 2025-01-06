const otps = document.querySelectorAll('.otp');

otps[0].focus()

otps.forEach((otp, index) => {
  otp.addEventListener('keydown', (event) => {
    if (event.key >= 0 && event.key <= 9) {
      otp.value = '';
      setTimeout(() => otps[index + 1].focus(), 10);
    } else if (event.key === 'Backspace') {
      setTimeout(() => otps[index - 1].focus(), 10);
    }
  });
});