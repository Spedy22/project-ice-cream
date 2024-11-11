  function validateSelection() {
    const checkboxes = document.querySelectorAll('input[name="products"]');
    const isChecked = Array.from(checkboxes).some(checkbox => checkbox.checked);
    
    if (!isChecked) {
      alert("Будь ласка, оберіть хоча б один товар.");
      return false; // зупиняє надсилання форми
    }
    return true;
  }