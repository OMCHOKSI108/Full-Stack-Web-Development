// Dashboard functionality
document.addEventListener('DOMContentLoaded', function () {
    checkAuth();

    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
        document.getElementById('userName').textContent = userData.name;
        document.getElementById('userEmail').textContent = userData.email;
        document.getElementById('userMobile').textContent = userData.mobile;
        document.getElementById('userAddress').textContent = userData.address;
    }
});
