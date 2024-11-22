(() => {
  const refs = {
    // Для першої модалки
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),

    // Для другої модалки
    openModalBtn2: document.querySelector("[data-modal-open-2]"),
    openModalBtn2Another: document.querySelector("[data-modal-open-2-another]"),
    closeModalBtn2: document.querySelector("[data-modal-close-2]"),
    modal2: document.querySelector("[data-modal-2]"),

    // Для третьої модалки
    openModalBtn3: document.querySelector("[data-modal-info-1-open]"),
    closeModalBtn3: document.querySelector("[data-modal-info-1-close]"),
    modal3: document.querySelector("[data-modal-info-1]"),

    // Для четвертої модалки
    openModalBtn4: document.querySelector("[data-modal-info-2-open]"),
    closeModalBtn4: document.querySelector("[data-modal-info-2-close]"),
    modal4: document.querySelector("[data-modal-info-2]"),

    // Для п'ятої модалки
    openModalBtn5: document.querySelector("[data-modal-info-3-open]"),
    closeModalBtn5: document.querySelector("[data-modal-info-3-close]"),
    modal5: document.querySelector("[data-modal-info-3]"),

    // Для шостої модалки (відео)
    openModalBtn6: document.querySelector("[data-modal-video-open]"),
    closeModalBtn6: document.querySelector("[data-modal-video-close]"),
    modal6: document.querySelector("[data-modal-video]"),

    // Для сьомої модалки (локація)
    openModalBtn7: document.querySelector("[data-modal-location-open]"),
    closeModalBtn7: document.querySelector("[data-modal-location-close]"),
    modal7: document.querySelector("[data-modal-location]"),

    // Для восьмої модалки (франшиза)
    openModalBtn8: document.querySelector("[data-modal-franchise-open]"),
    closeModalBtn8: document.querySelector("[data-modal-franchise-close]"),
    modal8: document.querySelector("[data-modal-franchise]"),
  };

  // Перша модалка
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // Друга модалка
  refs.openModalBtn2.addEventListener("click", toggleModal2);
  if (refs.openModalBtn2Another) {
    refs.openModalBtn2Another.addEventListener("click", toggleModal2);
  }
  refs.closeModalBtn2.addEventListener("click", toggleModal2);

  // Третя модалка
  refs.openModalBtn3.addEventListener("click", toggleModal3);
  refs.closeModalBtn3.addEventListener("click", toggleModal3);

  // Четверта модалка
  refs.openModalBtn4.addEventListener("click", toggleModal4);
  refs.closeModalBtn4.addEventListener("click", toggleModal4);

  // П'ята модалка
  refs.openModalBtn5.addEventListener("click", toggleModal5);
  refs.closeModalBtn5.addEventListener("click", toggleModal5);

  // Шоста модалка (відео)
  refs.openModalBtn6.addEventListener("click", toggleModal6);
  refs.closeModalBtn6.addEventListener("click", toggleModal6);

   // Сьома модалка (локація)
  refs.openModalBtn7.addEventListener("click", toggleModal7);
  refs.closeModalBtn7.addEventListener("click", toggleModal7);

  // Восьма модалка (франшиза)
  refs.openModalBtn8.addEventListener("click", toggleModal8);
  refs.closeModalBtn8.addEventListener("click", toggleModal8);

  // Функція для першої модалки
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  // Функція для другої модалки
  function toggleModal2() {
    refs.modal2.classList.toggle("is-hidden");
  }

  // Функція для третьої модалки
  function toggleModal3() {
    refs.modal3.classList.toggle("is-hidden");
  }

  // Функція для четвертої модалки
  function toggleModal4() {
    refs.modal4.classList.toggle("is-hidden");
  }

  // Функція для п'ятої модалки
  function toggleModal5() {
    refs.modal5.classList.toggle("is-hidden");
  }

  // Функція для шостої модалки (відео)
  function toggleModal6() {
    refs.modal6.classList.toggle("is-hidden");
  }

   // Функція для сьомої модалки (локація)
  function toggleModal7() {
    refs.modal7.classList.toggle("is-hidden");
  }

  // Функція для восьмої модалки (франшиза)
  function toggleModal8() {
    refs.modal8.classList.toggle("is-hidden");
  }
})();

(() => {
  const refs = {
    modal: document.querySelector("[data-modal]"), // Ваша модалка
    modalLinks: document.querySelectorAll('.modal-header__link'), // Посилання в модалці
  };

  // Функція закриття модалки
  function closeModal() {
    if (!refs.modal.classList.contains("is-hidden")) {
      refs.modal.classList.add("is-hidden");
    }
  }

  // Додаємо обробник подій до кожного посилання
  refs.modalLinks.forEach(link => {
    link.addEventListener("click", (event) => {
      closeModal(); // Закриваємо модалку
    });
  });
})();
