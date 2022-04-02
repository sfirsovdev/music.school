(() => {
    const refs = {
        openModalBtn: document.querySelectorAll('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.forEach(btn => {
        btn.addEventListener('click', toggleModal);
    })
    refs.closeModalBtn.addEventListener('click', toggleModal);
    

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
    }



    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        if (error === 0) {

        } else {
            alert('Заполните обязательные поля');
        }
    
        function formValidate(form) {
            let.error = 0;
            let formReq = document.querySelectorAll('._req');

            for (let index = 0; index < formReq.length; index++) {
                const input = formReq[index];
                formRemoveError(input);

                if (input.classList.contains('_phone')) {
                    if (phoneTest(input)) {
                        formAddError(input);
                        error++;
                    }
                } else if (input.getAttribute("Type") === "checkbox" && input.checked === false) {
                    formAddError(input);
                    error++;
                } else {
                    if (input.value === '') {
                        formAddError(input);
                        error++;
                    }
                }

            }
        }
        function formAddError(input) {
            input.parentElement.classList.add('_error');
            input.classList.add('_error');
        }

        function formRemoveError(input) {
            input.parentElement.classList.remove('_error');
            input.classList.remove('_error');
        }
        function phoneTest(input) {
            return !/:;|\*+/.test(input.value);
}


    }
})();





