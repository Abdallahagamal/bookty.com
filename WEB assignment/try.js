function saveUserData(event) {
    event.preventDefault();

    const userType = document.querySelector('input[name="choice"]:checked').id;

    const firstName = document.querySelector('.name-fields input[placeholder="First Name"]').value;
    const lastName = document.querySelector('.name-fields input[placeholder="Last Name"]').value;
    const email = document.querySelector('.name-fields2 input[placeholder="Email"]').value;
    const password = document.querySelector('.name-fields2 input[placeholder="Password"]').value;
    const confirmPassword = document.querySelector('.name-fields2 input[placeholder="Confirm Password"]').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
        
    }
    else{

        const userData = {
            firstName,
            lastName,
            email,
            password
        };

       
        const userInfo = {
            type: userType,
            data: userData
        };

        localStorage.setItem('userInfo', JSON.stringify(userInfo));
        window.location.href = 'login.html'; 

}
return false; 
}
