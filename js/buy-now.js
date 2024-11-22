function validateSelection() {
  const checkboxes = document.querySelectorAll('input[name="products"]');
  const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
  
  if (!isChecked) {
    alert("Будь ласка, оберіть хоча б один товар.");
    return false; // Зупиняє надсилання форми
  }
  return true;
}

document.querySelector('.location__button').addEventListener('click', () => {
  window.open(
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d53009.66240784024!2d-118.4694952!3d33.8612131!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b3794b0a4aa3%3A0xd9e02c90b095cfca!2sCapri%20Gelato%20%26%20Coffee%20Bar!5e0!3m2!1sru!2sua!4v1732033587637!5m2!1sru!2sua",
    "_blank"
  );
});
