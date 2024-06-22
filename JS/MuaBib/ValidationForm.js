// 1.Validate xem có chọn cự ly chưa
export const validateCuLyChaySelected = () => {
  let SSkmItem = document.querySelectorAll(".SSkmItem");
  let selected = false;
  SSkmItem.forEach((item) => {
    if (item.classList.contains("SSkmActive")) {
      selected = true;
    }
  });
  return selected;
};
// 2. validate full name
export function validateFullName() {
  const fullName = document.getElementById("nameInputRegister").value.trim();
  const fullNameError = document.getElementById("nameInputRegister-error");

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
// 3. tên trên bib không đc bỏ trống
export function validateNameBib() {
  const nameBib = document.getElementById("nameBIBInputRegister").value.trim();
  const nameBibError = document.getElementById("nameBIBInputRegister-error");
  if (nameBib === "") {
    nameBibError.textContent = "Tên trên bib không được bỏ trống";
    return false;
  } else {
    nameBibError.textContent = "";
    return true;
  }
}
// 4. validate email
export function validateEmailRegister() {
  const email = document.getElementById("emailInputRegister").value.trim();
  const emailError = document.getElementById("emailInputRegister-error");
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
// 5. validate phone
export function validatePhone() {
  const phone = document.getElementById("sdtInputRegister").value.trim();
  const phoneError = document.getElementById("sdtInputRegister-error");
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
// 6. validate căn cước
export function validateCanCuoc() {
  const canCuoc = document.getElementById("textIDInputRegister").value.trim();
  const canCuocError = document.getElementById("textIDInputRegister-error");
  if (canCuoc === "") {
    canCuocError.textContent = "Căn cước không được bỏ trống";
    return false;
  } else {
    canCuocError.textContent = "";
    return true;
  }
}
// 7. validate quốc tịch
export function validateNationality() {
  const selectElement = document.getElementById("QuocTichInputRegister");
  const errorElement = document.getElementById("QuocTichInputRegister-error");

  if (selectElement.value === "Chọn Quốc Tịch") {
    errorElement.textContent = "Vui lòng chọn quốc tịch";
    return false;
  } else {
    errorElement.textContent = "";
    return true;
  }
}
// 8. validate ngày sinh
export function validateDate() {
  const dateInput = document
    .getElementById("birthDateInputRegister")
    .value.trim();
  const dateError = document.getElementById("birthDateInputRegister-error");
  const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  if (dateInput === "") {
    dateError.textContent = "Ngày tháng năm sinh không được bỏ trống";
    return false;
  }

  const match = dateInput.match(dateRegex);
  if (!match) {
    dateError.textContent = "Định dạng ngày tháng năm sinh không hợp lệ";
    return false;
  }

  const day = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const year = parseInt(match[3], 10);

  if (month < 1 || month > 12) {
    dateError.textContent = "Tháng không hợp lệ";
    return false;
  }

  if (day < 1 || day > 31) {
    dateError.textContent = "Ngày không hợp lệ";
    return false;
  }

  if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
    dateError.textContent = "Tháng này chỉ có 30 ngày";
    return false;
  }

  if (month === 2) {
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    if (day > 29 || (day === 29 && !isLeap)) {
      dateError.textContent = "Tháng 2 không có ngày này";
      return false;
    }
  }

  dateError.textContent = "";
  return true;
}

// 9. validate nhóm máu
export const validateBloodGroup = () => {
  let NhomMauList = document.querySelectorAll(".NhomMauItem");
  let selected = false;
  NhomMauList.forEach((NhomMauItem) => {
    if (NhomMauItem.classList.contains("NhomMauActive")) {
      selected = true;
    }
  });
  return selected;
};

// 10.validate giới tính
export const validateGender = () => {
  let GenderList = document.querySelectorAll(".GioiTinhItem");
  let selected = false;
  GenderList.forEach((GioiTinhItem) => {
    if (GioiTinhItem.classList.contains("GioiTinhActive")) {
      selected = true;
    }
  });
  return selected;
};

// 11.validate loại áo
export const validateLoaiAo = () => {
  let ListLoaiAo = document.querySelectorAll(".LoaiAoItem");
  let selected = false;
  ListLoaiAo.forEach((LoaiAoItem) => {
    if (LoaiAoItem.classList.contains("LoaiAoActive")) {
      selected = true;
    }
  });
  return selected;
};

// 12.validate size áo
export const validateSizeAo = () => {
  let ListSizeAo = document.querySelectorAll(".SizeAoItem");
  let selected = false;
  ListSizeAo.forEach((SizeAoItem) => {
    if (SizeAoItem.classList.contains("SizeAoActive")) {
      selected = true;
    }
  });
  return selected;
};

// 13. bệnh lý free

// 14.KS free

// Validate all form 1

const showErrorMessage = (message) => {
  Swal.fire({
    icon: "error",
    title: "Lỗi",
    text: message,
  });
};
// Hàm kiểm tra tất cả các điều kiện
export const validateAll = () => {
  // 1
  const isvalidateCuLyChaySelected = validateCuLyChaySelected();
  // 2
  const isvalidateFullName = validateFullName();
  // 3
  const isvalidateNameBib = validateNameBib();
  // 4
  const isvalidateEmailRegister = validateEmailRegister();
  // 5
  const isvalidatePhone = validatePhone();
  // 6
  const isvalidateCanCuoc = validateCanCuoc();
  // 7
  const isvalidateNationality = validateNationality();
  // 8
  const isvalidateDate = validateDate();
  // 9
  const isvalidateBloodGroup = validateBloodGroup();
  // 10
  const isvalidateGender = validateGender();
  // 11
  const isvalidateLoaiAo = validateLoaiAo();
  // 12
  const isvalidateSizeAo = validateSizeAo();

  let allValid = true;
  // 1
  if (!isvalidateCuLyChaySelected) {
    allValid = false;
    showErrorMessage("Bạn chưa chọn cự ly chạy. Vui lòng chọn cự ly chạy.");
    return;
  }
  // 2
  if (!isvalidateFullName) {
    allValid = false;
    showErrorMessage("Họ và tên không hợp lệ. Vui lòng nhập lại.");
    return;
  }
  // 3
  if (!isvalidateNameBib) {
    allValid = false;
    showErrorMessage("Tên trên bib không hợp lệ. Vui lòng nhập lại.");
    return;
  }
  // 4
  if (!isvalidateEmailRegister) {
    allValid = false;
    showErrorMessage("Email không hợp lệ. Vui lòng nhập lại.");
    return;
  }
  // 5
  if (!isvalidatePhone) {
    allValid = false;
    showErrorMessage("Số điện thoại không hợp lệ. Vui lòng nhập lại.");
    return;
  }
  // 6
  if (!isvalidateCanCuoc) {
    allValid = false;
    showErrorMessage("Căn cước không hợp lệ. Vui lòng nhập lại.");
    return;
  }
  // 7
  if (!isvalidateNationality) {
    allValid = false;
    showErrorMessage("Quốc tịch không hợp lệ. Vui lòng chọn lại.");
    return;
  }
  // 8
  if (!isvalidateDate) {
    allValid = false;
    showErrorMessage("Ngày tháng năm sinh không hợp lệ. Vui lòng nhập lại.");
    return;
  }
  // 9
  if (!isvalidateBloodGroup) {
    allValid = false;
    showErrorMessage("Bạn chưa chọn nhóm máu. Vui lòng chọn lại.");
    return;
  }
  // 10
  if (!isvalidateGender) {
    allValid = false;
    showErrorMessage("Bạn chưa chọn giới tính. Vui lòng chọn lại.");
    return;
  }
  // 11
  if (!isvalidateLoaiAo) {
    allValid = false;
    showErrorMessage("Bạn chưa chọn loại áo. Vui lòng chọn lại.");
    return;
  }
  // 12
  if (!isvalidateSizeAo) {
    allValid = false;
    showErrorMessage("Bạn chưa chọn size áo. Vui lòng chọn lại.");
    return;
  }
  return allValid;
};


// Gắn sự kiện click vào nút đăng ký
const formInputSubmitRegister = document.getElementById(
  "formInputSubmitRegister"
);
formInputSubmitRegister.addEventListener("click", (event) => {
  // Ngăn chặn hành động mặc định của button nếu có lỗi
  if (!validateAll()) {
    event.preventDefault();
  } else {
    // Nếu tất cả đều hợp lệ, tiến hành bước tiếp theo
    Swal.fire({
      title: "Thành công!",
      text: "Bạn đã điền thông tin cá nhân chính xác, hãy điền thêm thông tin người thân nữa nhé!",
      icon: "success",
    });

    document.getElementById("divMienTruFull").style.display = "block";
    document.getElementById("divTrai_full").style.display = "none";
  }
});

export function validateFullNameNguoiLienLac() {
  const fullName = document.getElementById("tenNguoiLienLac").value.trim();
  const fullNameError = document.getElementById("tenNguoiLienLac-error");

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

export function validatePhoneNguoiLienLac() {
  const phone = document.getElementById("soDienThoaiNguoiLienLac").value.trim();
  const phoneError = document.getElementById("soDienThoaiNguoiLienLac-error");
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

export function validateStartDate() {
  const dateInput = document
    .getElementById("startDayInputRegister")
    .value.trim();
  const dateError = document.getElementById("startDayInputRegister-error");
  const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  if (dateInput === "") {
    dateError.textContent = "Ngày tháng không được bỏ trống";
    return false;
  }

  const match = dateInput.match(dateRegex);
  if (!match) {
    dateError.textContent = "Định dạng ngày tháng không hợp lệ";
    return false;
  }

  const day = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const year = parseInt(match[3], 10);

  if (month < 1 || month > 12) {
    dateError.textContent = "Tháng không hợp lệ";
    return false;
  }

  if (day < 1 || day > 31) {
    dateError.textContent = "Ngày không hợp lệ";
    return false;
  }

  if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
    dateError.textContent = "Tháng này chỉ có 30 ngày";
    return false;
  }

  if (month === 2) {
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    if (day > 29 || (day === 29 && !isLeap)) {
      dateError.textContent = "Tháng 2 không có ngày này";
      return false;
    }
  }

  dateError.textContent = "";
  return true;
}

export function validateEndDate() {
  const dateInput = document.getElementById("endDayInputRegister").value.trim();
  const dateError = document.getElementById("endDayInputRegister-error");
  const dateRegex = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  if (dateInput === "") {
    dateError.textContent = "Ngày tháng không được bỏ trống";
    return false;
  }

  const match = dateInput.match(dateRegex);
  if (!match) {
    dateError.textContent = "Định dạng ngày tháng không hợp lệ";
    return false;
  }

  const day = parseInt(match[1], 10);
  const month = parseInt(match[2], 10);
  const year = parseInt(match[3], 10);

  if (month < 1 || month > 12) {
    dateError.textContent = "Tháng không hợp lệ";
    return false;
  }

  if (day < 1 || day > 31) {
    dateError.textContent = "Ngày không hợp lệ";
    return false;
  }

  if ((month === 4 || month === 6 || month === 9 || month === 11) && day > 30) {
    dateError.textContent = "Tháng này chỉ có 30 ngày";
    return false;
  }

  if (month === 2) {
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    if (day > 29 || (day === 29 && !isLeap)) {
      dateError.textContent = "Tháng 2 không có ngày này";
      return false;
    }
  }

  dateError.textContent = "";
  return true;
}

export const validateCheckbox = () => {
  const checkbox = document.getElementById("checkboxDieuKhoan");
  if (!checkbox.checked) {
    Swal.fire({
      icon: "error",
      title: "Lỗi",
      text: "Bạn chưa đồng ý với điều khoản của chúng tôi",
    });
  }
  return checkbox.checked;
};

export const validateDangKy = () => {
  let allValid = true;
  // 1
  if (!validateFullNameNguoiLienLac()) {
    allValid = false;
    showErrorMessage(
      "Họ và tên người liên lạc không hợp lệ. Vui lòng nhập lại."
    );
    return;
  }
  if (!validatePhoneNguoiLienLac()) {
    allValid = false;
    showErrorMessage(
      "Số điện thoại người liên lạc không hợp lệ. Vui lòng nhập lại."
    );
    return;
  }
  if (!validateCheckbox()) {
    allValid = false;
    showErrorMessage("Bạn chưa đồng ý với điều khoản của chúng tôi");
    return;
  }
  return allValid;
};




