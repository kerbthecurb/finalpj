// function login() {
//     const username = document.getElementById("Username").value;
//     const password = document.getElementById("Password").value;
  
//     const savedUsername = localStorage.getItem("username");
//     const savedPassword = localStorage.getItem("uassword");
  
//     if (username === savedUsername && password === savedPassword) {
    
//       console.log("Login successful!");
//       window.location.href = "../html/landing.html";
      
//     } else {
//       // Failed login
//       console.log("Login failed. Invalid username or password.");
//       alert("Wrong Username / Password")
//     }
//   }
localStorage.getItem('userData')
function login() {
    // Lấy giá trị từ trường tên người dùng và mật khẩu
    const username = document.getElementById("Username").value;
    const password = document.getElementById("Password").value;

    // Lấy thông tin từ Local Storage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    // Kiểm tra tên người dùng và mật khẩu
    if (username === storedUsername && password === storedPassword) {
        alert("Đăng nhập thành công!");
        // Thực hiện chuyển hướng đến trang chính hoặc trang khác
        window.location.href = "./main.html";
    } else {
        alert("Tên người dùng hoặc mật khẩu không chính xác!");
    }
}
