function submitData() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const subject = document.getElementById("subject").value;
  const message = document.getElementById("message").value;
  const emailReceiver = "febrilanianurislami@gmail.com";
  let a = document.createElement("a");
  a.href = `mailto:${email}?subject=${subject}&body=${message}`;
  a.click();
}
