document.addEventListener("DOMContentLoaded", () => {
  const showRegisterLink = document.getElementById("show-register");
  const showLoginLink = document.getElementById("show-login");
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");

  showRegisterLink.addEventListener("click", () => {
    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");
  });

  showLoginLink.addEventListener("click", () => {
    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");
  });

  // Add input event listeners for register form fields
  document
    .getElementById("full-name")
    .addEventListener("input", validateFullName);
  document.getElementById("phone").addEventListener("input", validatePhone);
  document
    .getElementById("email-register")
    .addEventListener("input", validateEmailRegister);
  document
    .getElementById("password-register")
    .addEventListener("input", validatePasswordRegister);
  document
    .getElementById("confirm-password")
    .addEventListener("input", validateConfirmPassword);

  // Add submit event listener for register form
  document.getElementById("register").addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateRegisterForm()) {
      alert("Đăng ký thành công!");
    }
  });

  // Add input event listeners for login form fields
  document
    .getElementById("email-login")
    .addEventListener("input", validateEmailLogin);
  document
    .getElementById("password-login")
    .addEventListener("input", validatePasswordLogin);

  // Add submit event listener for login form
  document.getElementById("login").addEventListener("submit", (event) => {
    event.preventDefault();
    if (validateLoginForm()) {
      alert("Đăng nhập thành công!");
    }
  });
});

function validateFullName() {
  const fullName = document.getElementById("full-name").value.trim();
  const fullNameError = document.getElementById("full-name-error");

  if (fullName === "") {
    fullNameError.textContent = "Họ và tên không được bỏ trống";
    return false;
  } else if (/\d/.test(fullName)) {
    fullNameError.textContent = "Họ và tên không được có kí tự số";
    return false;
  } else {
    fullNameError.textContent = "";
    return true;
  }
}

function validatePhone() {
  const phone = document.getElementById("phone").value.trim();
  const phoneError = document.getElementById("phone-error");
  const phoneRegex = /((09|03|07|08|05)+([0-9]{8})\b)/g;

  if (phone === "") {
    phoneError.textContent = "Số điện thoại không được bỏ trống";
    return false;
  } else if (!phoneRegex.test(phone)) {
    phoneError.textContent = "Số điện thoại không hợp lệ";
    return false;
  } else {
    phoneError.textContent = "";
    return true;
  }
}

function validateEmailRegister() {
  const email = document.getElementById("email-register").value.trim();
  const emailError = document.getElementById("email-register-error");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    emailError.textContent = "Email không được bỏ trống";
    return false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Email không hợp lệ";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePasswordRegister() {
  const password = document.getElementById("password-register").value.trim();
  const passwordError = document.getElementById("password-register-error");

  if (password === "") {
    passwordError.textContent = "Mật khẩu không được bỏ trống";
    return false;
  } else if (password.length < 6) {
    passwordError.textContent = "Mật khẩu phải có ít nhất 6 ký tự";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

function validateConfirmPassword() {
  const confirmPassword = document
    .getElementById("confirm-password")
    .value.trim();
  const password = document.getElementById("password-register").value.trim();
  const confirmPasswordError = document.getElementById(
    "confirm-password-error"
  );

  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Nhập lại mật khẩu không được bỏ trống";
    return false;
  } else if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Mật khẩu nhập lại không khớp";
    return false;
  } else {
    confirmPasswordError.textContent = "";
    return true;
  }
}

function validateRegisterForm() {
  return (
    validateFullName() &
    validatePhone() &
    validateEmailRegister() &
    validatePasswordRegister() &
    validateConfirmPassword()
  );
}

function validateEmailLogin() {
  const email = document.getElementById("email-login").value.trim();
  const emailError = document.getElementById("email-login-error");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    emailError.textContent = "Email không được bỏ trống";
    return false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "Email không hợp lệ";
    return false;
  } else {
    emailError.textContent = "";
    return true;
  }
}

function validatePasswordLogin() {
  const password = document.getElementById("password-login").value.trim();
  const passwordError = document.getElementById("password-login-error");

  if (password === "") {
    passwordError.textContent = "Mật khẩu không được bỏ trống";
    return false;
  } else {
    passwordError.textContent = "";
    return true;
  }
}

function validateLoginForm() {
  return validateEmailLogin() & validatePasswordLogin();
}
