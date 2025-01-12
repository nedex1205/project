 // Password Strength Checker
 const passwordInput = document.getElementById('password');
 const passwordStrength = document.getElementById('password-strength');

 passwordInput.addEventListener('input', () => {
     const value = passwordInput.value;
     let strength = '';
     if (value.length < 6) {
         strength = 'Weak';
         passwordStrength.className = 'strength-weak';
     } else if (value.match(/[A-Za-z]/) && value.match(/[0-9]/)) {
         strength = 'Medium';
         passwordStrength.className = 'strength-medium';
     } else if (value.match(/[A-Za-z]/) && value.match(/[0-9]/) && value.match(/[@$!%*?&]/)) {
         strength = 'Strong';
         passwordStrength.className = 'strength-strong';
     }
     passwordStrength.textContent = `Strength: ${strength}`;
 });

 // Bootstrap Validation
 (() => {
     const forms = document.querySelectorAll('.needs-validation');

     forms.forEach(form => {
         form.addEventListener('submit', event => {
             if (!form.checkValidity()) {
                 event.preventDefault();
                 event.stopPropagation();
             }
             form.classList.add('was-validated');
         }, false);
     });
 })();