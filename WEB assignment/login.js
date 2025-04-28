function loginUser(event) {
    event.preventDefault();

    const email = document.querySelector('input[placeholder="Email"]').value;
    const password = document.querySelector('input[placeholder="Password"]').value;

    const savedUserInfo = localStorage.getItem('userInfo');

    if (!savedUserInfo) {
        alert("No user data found. Please sign up first.");
        return false;
    }

    const userInfo = JSON.parse(savedUserInfo);

    if (userInfo.data.email === email && userInfo.data.password === password) {
        if (userInfo.type === 'speed') {
            console.log("Speed user logged in:");
            window.location.href = 'dadofinal/main-admin.html'; 
        } else if (userInfo.type === 'quality') {
            window.location.href = 'web_category/gad.html';
        } 
    } else {
        alert("Invalid email or password.");
    }

    return false; 

}