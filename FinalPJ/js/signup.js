
// function signup() {
//     const username = document.getElementById("Username").value;
//     const password = document.getElementById("Password").value;
//     if (username.trim() === "" || password.trim() === "") {
//         alert("Vui lòng điền đầy đủ tên người dùng và mật khẩu.");
//         return;
//     }
//     localStorage.setItem("username", username);
//     localStorage.setItem("password", password);
//     window.location.href = '../html/landing.html';

   
// }



        function signup() {
            const username = document.getElementById("Username").value;
            const password = document.getElementById("Password").value;
            var UserData = {
                name:  username,
                password: password

            }
            localStorage.setItem('userData', JSON.stringify(UserData));
            if (username.trim() === "" || password.trim() === "") {
        alert("Vui lòng điền đầy đủ tên người dùng và mật khẩu.");
        return;
    }
            localStorage.setItem("username", username);
            localStorage.setItem("password", password);
            window.location.href = '../html/login.html';
        }
