document.addEventListener("DOMContentLoaded", () => {
  // Các div bên trái
  const dangKyTrai = document.getElementById("dangKyTrai");
  const yeuCauDangNhap = document.getElementById("yeuCauDangNhap");
  const divChonGiaiChay = document.getElementById("divChonGiaiChay");
  const chonGiaiChay = document.getElementById("chonGiaiChay");
  const divChonCuLyChay = document.getElementById("divChonCuLyChay");
  const divNhapThongTin = document.getElementById("divNhapThongTin");

  // Các div bên phải

  const dangKyPhai = document.getElementById("dangKyPhai");
  const showInfo_full = document.getElementById("showInfo_full");
  const showInfo_name = document.getElementById("showInfo_name");
  const showInfo_location_date = document.getElementById(
    "showInfo_location_date"
  );
  const showInfo_date = document.getElementById("showInfo_date");
  const showInfo_location = document.getElementById("showInfo_location");
  const showInfo_thaoTac = document.getElementById("showInfo_thaoTac");
  const showInfo_distance = document.getElementById("showInfo_distance");
  const showInfo_price = document.getElementById("showInfo_price");
  const showInfo_Username = document.getElementById("showInfo_Username");
  const showInfo_email = document.getElementById("showInfo_email");
  const showInfo_cancuoc = document.getElementById("showInfo_cancuoc");

  const soDoCuLyChay = document.getElementById("soDoCuLyChay");

  // Hàm setDisplay
  const setDisplay = (divName, display) => {
    divName.style.display = display;
  };

  // Start bằng cách ẩn các div bên phải, chọn cự ly, nhập thông tin
  setDisplay(dangKyPhai, "none");
  setDisplay(divChonCuLyChay, "none");
  setDisplay(divNhapThongTin, "none");

  // Gọi axios và tạo giao diện cho CHỌN GIẢI CHẠY
  // GỌI API VÀ SHOW LÊN GIAO DIỆN CÁC OPTION GIẢI CHẠY
  axios
    .get("https://664968164032b1331bede1c9.mockapi.io/dataBib")
    .then((response) => {
      const events = response.data;
      chonGiaiChay.innerHTML = "<option selected>Chọn giải chạy</option>"; // Reset options
      events.forEach((event) => {
        const option = document.createElement("option");
        option.value = event.id;
        option.textContent = event.name;
        chonGiaiChay.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error fetching events:", error);
    });

  // Xử lý khi click cự ly chạy
  const handleClickCuLyChay = () => {
    let SSkmItem = document.querySelectorAll(".SSkmItem");
    SSkmItem.forEach((item) => {
      item.addEventListener("click", function () {
        // Xóa class "SSkmActive" khỏi tất cả các thẻ SSkmItem
        SSkmItem.forEach((otherItem) => {
          otherItem.classList.remove("SSkmActive");
        });
        // Thêm class "SSkmActive" cho thẻ SSkmItem được click
        this.classList.add("SSkmActive");
        const distance = this.getAttribute("data-distance");
        const price = this.getAttribute("data-price");
        showInfo_distance.innerText = distance;
        showInfo_price.innerText = price;
      });
    });
  };

  // Tạo ra mấy cái div chọn cự ly item
  const createDivCuLyChay = (dataSelectedItem) => {
    divChonCuLyChay.innerHTML = `
           <p class="text-lg font-medium mb-2">Chọn cự ly chạy</p>
            <p class="text-center italic text-orange-500 my-2">
              Giá Early Bird (trước ngày 15/07)
            </p>
        <div class="flex flex-row flex-wrap gap-8 p-4 xl:p-0 justify-center uppercase">
            ${dataSelectedItem.distances
              .map(
                (distanceItem) => `
                <div class="SSkmItem shadow-md"
                data-distance="${distanceItem.distance}" data-price="${
                  distanceItem.price
                }" data-distance-value=${distanceItem.distance}>
                    <div class="p-4 bg-white rounded-t-lg">
                        <p class="font-black text-6xl">${
                          distanceItem.distance.split("km")[0]
                        }<span class="text-xl">km</span></p>
                        <p class="line-through text-stone-500">${
                          distanceItem.realPrice
                        }</p>
                        <p class="font-bold text-xl">${distanceItem.price}</p>
                    </div>
                    
                    <div class="CuLyHien py-2 text-white">
                        <span>Chọn mua</span>
                    </div>
                    <div class="CuLyAn py-2 text-white">
                        <i class="fa-solid fa-circle-check"></i>
                    <span>Đã chọn</span>
                    </div>
                </div>
            `
              )
              .join("")}
        </div>
        `;
    handleClickCuLyChay();
  };

  //   Xử lý khi click chọn nhóm máu
  const handleClickNhomMau = () => {
    let NhomMauItem = document.querySelectorAll(".NhomMauItem");
    NhomMauItem.forEach((item) => {
      item.addEventListener("click", function () {
        NhomMauItem.forEach((otherItem) => {
          otherItem.classList.remove("NhomMauActive");
        });

        this.classList.add("NhomMauActive");
      });
    });
  };
  handleClickNhomMau();

  //   Xử lý khi click chọn giới tính
  const handleClickGioiTinh = () => {
    let GioiTinhItem = document.querySelectorAll(".GioiTinhItem");
    GioiTinhItem.forEach((item) => {
      item.addEventListener("click", function () {
        GioiTinhItem.forEach((otherItem) => {
          otherItem.classList.remove("GioiTinhActive");
        });

        this.classList.add("GioiTinhActive");
      });
    });
  };
  handleClickGioiTinh();

  //   Xu ly khi click chon loai ao
  const handleClickLoaiAo = () => {
    let LoaiAoItem = document.querySelectorAll(".LoaiAoItem");

    LoaiAoItem.forEach((item) => {
      item.addEventListener("click", function () {
        LoaiAoItem.forEach((otherItem) => {
          otherItem.classList.remove("LoaiAoActive");
        });

        this.classList.add("LoaiAoActive");
      });
    });
  };
  handleClickLoaiAo();

  //   xử lý khi click chọn size áo
  const handleClickSizeAo = () => {
    let SizeAoItem = document.querySelectorAll(".SizeAoItem");

    SizeAoItem.forEach((item) => {
      item.addEventListener("click", function () {
        SizeAoItem.forEach((otherItem) => {
          otherItem.classList.remove("SizeAoActive");
        });

        this.classList.add("SizeAoActive");
      });
    });
  };

  handleClickSizeAo();

  chonGiaiChay.addEventListener("change", (event) => {
    const selectedValue = chonGiaiChay.value;
    if (selectedValue !== "Chọn giải chạy") {
      axios
        .get(
          `https://664968164032b1331bede1c9.mockapi.io/dataBib/${selectedValue}`
        )
        .then((response) => {
          const dataSelectedItem = response.data;
          console.log(event);
          if (dataSelectedItem.id === "TC") {
            setDisplay(divChonCuLyChay, "none");
            setDisplay(divNhapThongTin, "none");
            setDisplay(dangKyPhai, "block");
            setDisplay(showInfo_full, "block");
            showInfo_name.innerText = "Giải chưa bắt đầu, trở lại sau ";
            setDisplay(showInfo_name, "block");
            setDisplay(showInfo_location_date, "none");
            setDisplay(showInfo_thaoTac, "none");
            setDisplay(soDoCuLyChay, "none");
          } else {
            setDisplay(divChonCuLyChay, "block");
            setDisplay(divNhapThongTin, "block");
            setDisplay(dangKyPhai, "block");
            setDisplay(showInfo_full, "block");
            showInfo_name.innerText = dataSelectedItem.name;
            setDisplay(showInfo_name, "block");
            setDisplay(showInfo_location_date, "block");
            showInfo_date.innerText = dataSelectedItem.date;
            showInfo_location.innerText = dataSelectedItem.location;
            setDisplay(showInfo_thaoTac, "block");
            setDisplay(soDoCuLyChay, "block");
            createDivCuLyChay(dataSelectedItem);
          }
        });
    } else {
      setDisplay(divChonCuLyChay, "none");
      setDisplay(divNhapThongTin, "none");
      setDisplay(dangKyPhai, "none");
      setDisplay(showInfo_full, "none");
      setDisplay(showInfo_name, "none");
      setDisplay(showInfo_location_date, "none");
      setDisplay(showInfo_thaoTac, "none");
      setDisplay(soDoCuLyChay, "none");
    }
  });

  flatpickr("#birthDateInputRegister", {
    dateFormat: "d/m/Y",
    altInput: true,
    altFormat: "d/m/Y",
    allowInput: true,
  });

  //   Call API lấy quốc tịch
  const selectElement = document.getElementById("QuocTichInputRegister");
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((countries) => {
      countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
      countries.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.cca2; // Mã quốc gia
        option.textContent = country.name.common; // Tên quốc gia
        selectElement.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error fetching country data:", error);
    });
  //   Call API lấy quốc tịch và validate

  //   VALIDATE CALL
  //   1. Hàm validateFullName
  document
    .getElementById("nameInputRegister")
    .addEventListener("input", validateFullName);

  //   2. Hàm validateNameBib
  document
    .getElementById("nameBIBInputRegister")
    .addEventListener("input", validateNameBib);

  // 2. Hàm validate email
  document
    .getElementById("emailInputRegister")
    .addEventListener("input", validateEmailRegister);
  // 3.validate phone
  document
    .getElementById("sdtInputRegister")
    .addEventListener("input", validatePhone);
  // 4. validate ngay thang nam sinh
  document
    .getElementById("birthDateInputRegister")
    .addEventListener("input", validateDate);
  // 5. validate quoc tich
  document
    .getElementById("QuocTichInputRegister")
    .addEventListener("change", validateNationality);

  // 6. validate cmt
  document
    .getElementById("textIDInputRegister")
    .addEventListener("input", validateCanCuoc);

  // Change the value of showInfo_Username when the value of showInfo_name changes
  document
    .getElementById("nameInputRegister")
    .addEventListener("input", function () {
      document.getElementById("showInfo_Username").innerText = this.value;
    });
  // Email
  document
    .getElementById("emailInputRegister")
    .addEventListener("input", function () {
      document.getElementById("showInfo_email").innerText = this.value;
    });

  document
    .getElementById("textIDInputRegister")
    .addEventListener("input", function () {
      document.getElementById("showInfo_cancuoc").innerText = this.value;
    });

  const formInputSubmitRegister = document.getElementById(
    "formInputSubmitRegister"
  );
  formInputSubmitRegister.addEventListener("click", () => {
    const formData = {
      fullName: document.getElementById("nameInputRegister").value,
    };
    axios
      .post(
        "https://664968164032b1331bede1c9.mockapi.io/dataUserDangKy",
        formData
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching country data:", error);
      });
  });
});

function validateFullName() {
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

function validateNameBib() {
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

function validateEmailRegister() {
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

function validatePhone() {
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

function validateDate() {
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

function validateNationality() {
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

function validateCanCuoc() {
  const canCuoc = document.getElementById("textIDInputRegister").value.trim();
  const canCuocError = document.getElementById("textIDInputRegister-error");
  if (canCuoc === "") {
    canCuocError.textContent = "Tên trên bib không được bỏ trống";
    return false;
  } else {
    canCuocError.textContent = "";
    return true;
  }
}
