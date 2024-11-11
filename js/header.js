// (() => {
//   const refs = {
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),
//   };

//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }
// })();

// (() => {
//   const refs = {
//     // Для першого модального вікна
//     openModalBtn: document.querySelector("[data-modal-open]"),
//     closeModalBtn: document.querySelector("[data-modal-close]"),
//     modal: document.querySelector("[data-modal]"),

//     // Для другого модального вікна
//     openModalBtn2: document.querySelector("[data-modal-open-2]"),
//     closeModalBtn2: document.querySelector("[data-modal-close-2]"),
//     modal2: document.querySelector(".buy-now__header-backdrop"), // Потрібно використовувати клас для другого модального вікна
//   };

//   // Відкриття/закриття першого модального вікна
//   refs.openModalBtn.addEventListener("click", toggleModal);
//   refs.closeModalBtn.addEventListener("click", toggleModal);

//   // Відкриття/закриття другого модального вікна
//   refs.openModalBtn2.addEventListener("click", toggleModal2);
//   refs.closeModalBtn2.addEventListener("click", toggleModal2);

//   // Функція для першого модального вікна
//   function toggleModal() {
//     refs.modal.classList.toggle("is-hidden");
//   }

//   // Функція для другого модального вікна
//   function toggleModal2() {
//     refs.modal2.classList.toggle("is-hidden");
//   }
// })();

(() => {
  const refs = {
    // Для першого модального вікна
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),

    // Для другого модального вікна (новий дескриптор для другої кнопки)
    openModalBtn2: document.querySelector("[data-modal-open-2]"), // перша кнопка
    openModalBtn2Another: document.querySelector("[data-modal-open-2-another]"), // друга кнопка
    closeModalBtn2: document.querySelector("[data-modal-close-2]"),
    modal2: document.querySelector("[data-modal-2]"), // друге модальне вікно
  };

  // Відкриття/закриття першого модального вікна
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  // Відкриття другого модального вікна
  refs.openModalBtn2.addEventListener("click", toggleModal2);
  refs.openModalBtn2Another.addEventListener("click", toggleModal2); // друга кнопка для відкриття
  refs.closeModalBtn2.addEventListener("click", toggleModal2);

  // Функція для першого модального вікна
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }

  // Функція для другого модального вікна
  function toggleModal2() {
    refs.modal2.classList.toggle("is-hidden");
  }
})();
