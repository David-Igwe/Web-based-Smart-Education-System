// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if(form.elements.rePassword){
          if(!(form.elements.password.value === form.elements.rePassword.value)){
            form.elements.rePassword.value = ""
            const feedback = document.querySelector('#rePasswordFeedback');
            feedback.textContent = "Passwords do not match"
          }
        }
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
})()