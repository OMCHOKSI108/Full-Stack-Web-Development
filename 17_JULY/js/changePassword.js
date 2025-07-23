function changePassword() {
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const userData = JSON.parse(localStorage.getItem('user'));

    if (!userData || userData.password !== currentPassword) {
        alert('Current password is incorrect!');
        return;
    }

    if (newPassword !== confirmPassword) {
        alert('New passwords do not match!');
        return;
    }

    userData.password = newPassword;
    localStorage.setItem('user', JSON.stringify(userData));
    alert('Password changed successfully!');
    window.location.href = 'dashboard.html';
}
