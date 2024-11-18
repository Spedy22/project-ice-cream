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
})();