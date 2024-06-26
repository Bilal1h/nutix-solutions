document.addEventListener("DOMContentLoaded", function() {
  const subbut = document.getElementById("subbut");
  subbut.addEventListener("click", subsend);

  function subsend() {
    const subemail = document.getElementById("subscribeinput").value;
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "haiderbilal1h@gmail.com",
      Password : "25597062E921C4F092EE0C4EACFA2DDF896F",
      To : "muhammadbilalhaider0@gmail.com",
      From : "haiderbilal1h@gmail.com",
      Subject : "New subscriber",
      Body : `Another Subscriber test`
    }).then(function(message) {
      if (message=="OK"){
        alert("Sent successfully");
      } else {
        alert("An error occurred.");
      }
    });
  }
});
