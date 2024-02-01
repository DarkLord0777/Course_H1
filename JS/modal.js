(() => { 
    const refs = { 
      openModalBtn: document.querySelector("[data-modal-open]"), 
      closeModalBtn: document.querySelector("[data-modal-close]"), 
      modal: document.querySelector("[data-modal]"), 
    }; 
   
    refs.openModalBtn.addEventListener("click", toggleModal); 
    refs.closeModalBtn.addEventListener("click", toggleModal); 
    document.addEventListener("keydown", handleKeyPress);
   
    function toggleModal() { 
      refs.modal.classList.toggle("is-hidden"); 
    } 
    function handleKeyPress(event) {
        if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
            toggleModal();
        }
    }

  })();