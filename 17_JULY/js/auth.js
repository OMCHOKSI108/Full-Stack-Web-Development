// Common authentication functions

function login(email, password) {
    const userData = localStorage.getItem('user');
    if (!userData) {
        return false;
    }
    const user = JSON.parse(userData);
    return user.email === email && user.password === password;
}

function logout() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = '../login.html';
}

function isAuthenticated() {
    return sessionStorage.getItem('isLoggedIn') === 'true';
}

function checkAuth() {
    if (!isAuthenticated()) {
        window.location.href = '../login.html';
    }
}
