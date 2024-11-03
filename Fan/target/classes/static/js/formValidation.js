const forms=document.querySelectorAll('form');

Array.from(forms).forEach(form => {
    form.addEventListener('submit', e => {
        if (!form.checkValidity()) {
            e.preventDefault()
            e.stopPropagation()
        }

        form.classList.add('was-validated')
        form.reset()

    }, false)
    showMessage()
    })
function  showMessage() {
    var success=true;
    if(true){
         alert("Grazie per averci contatto. Ti risponderemo il prima possibile");
         alert.remove();
    }
}

