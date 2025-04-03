document.getElementById("myButton").addEventListener("click", function () {
  Swal.fire({
    title: '* *:･ﾟ✧꜀(^. .^꜀  )꜆੭✧･ﾟ: *✧',
    confirmButtonText: 'Bye!'
  });

  confetti({
    particleCount: 200,
    spread: 120,
    origin: { y: 0.6 }
  });
});