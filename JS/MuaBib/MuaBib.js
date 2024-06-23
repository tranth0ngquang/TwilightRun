import { http } from "./configAPI.js";
import {
  handleClickCuLyChay,
  handleClickKhachSan,
  showTongTien,
  handleClickNhomMau,
  handleClickGioiTinh,
  handleClickSizeAo,
  handleClickLoaiAo,
} from "./XuLyCacTacVuKhiClick.js";
import {
  validateFullName,
  validateNameBib,
  validateEmailRegister,
  validatePhone,
  validateDate,
  validateNationality,
  validateCanCuoc,
  validateStartDate,
  validateEndDate,
  validateFullNameNguoiLienLac,
  validatePhoneNguoiLienLac,
} from "./ValidationForm.js";

import { setGlobalData, getGlobalData } from "./globalVar.js";

export const getEle = (id) => document.getElementById(id);
export const setDisplay = (divName, display) => {
  divName.style.display = display;
};

document.addEventListener("DOMContentLoaded", async function () {
  // Khu vực khai báo biến
  const chonGiaiChay = getEle("chonGiaiChay");
  const fullForm = getEle("fullForm");
  const fullForm__chuaBatDau = getEle("fullForm__chuaBatDau");
  const divTrai_divChonCuLyChay = getEle("divTrai_divChonCuLyChay");
  const divPhai_showInfo_tenGiaiChay = getEle("divPhai_showInfo_tenGiaiChay");
  const divPhai_showInfo_dateGiayChay = getEle("divPhai_showInfo_dateGiayChay");
  const divPhai_showInfo_locationGiayChay = getEle(
    "divPhai_showInfo_locationGiayChay"
  );
  const divPhai_showInfo_cuLy = getEle("divPhai_showInfo_cuLy");
  const divPhai_showInfo_giaBib = getEle("divPhai_showInfo_giaBib");
  let startDayInputRegister = getEle("startDayInputRegister");
  let endDayInputRegister = getEle("endDayInputRegister");
  let tongSoNgayDatPhong = getEle("tongSoNgayDatPhong");
  let soNgayDatPhong = 0;
  let infoStartDate = getEle("infoStartDate");
  let infoEndDate = getEle("infoEndDate");
  let listTournament = [];
  let divMienTruFull = getEle("divMienTruFull");
  const divTrai_full = getEle("divTrai_full");
  const buttonQuayLai = getEle("buttonQuayLai");
  // form post variable

  // Khu vực khai báo biến END
  setDisplay(divMienTruFull, "none");

  // Gọi API lấy danh sách chạy
  const fetchListTournament = async () => {
    try {
      const res = await http.get("dataBib");
      listTournament = res.data;
      console.log(listTournament);
      updateTournamentDropdown();
    } catch (error) {
      console.log(error);
    }
  };
  const updateTournamentDropdown = () => {
    chonGiaiChay.innerHTML = "<option value=0 selected>Chọn giải chạy</option>"; // Reset options
    listTournament.forEach((tournamentItem) => {
      const option = document.createElement("option");
      option.value = tournamentItem.id;
      option.textContent = tournamentItem.name;
      chonGiaiChay.appendChild(option);
    });
  };
  await fetchListTournament();
  // Gọi API lấy danh sách chạy END

  // Sự kiện chọn giải chạy
  chonGiaiChay.addEventListener("change", () => {
    const tournamentId = chonGiaiChay.value;
    if (tournamentId == 0) {
      setDisplay(fullForm, "none");
      setDisplay(fullForm__chuaBatDau, "none");
      setDisplay(divMienTruFull, "none");

      return;
    }
    if (tournamentId == 2) {
      setDisplay(fullForm, "none");
      setDisplay(fullForm__chuaBatDau, "block");
      setDisplay(divMienTruFull, "none");

      return;
    }
    const dataSelectedItem = listTournament[tournamentId - 1];

    createDivCuLyChay(dataSelectedItem);

    setGlobalData("running_id", dataSelectedItem.id);
    console.log("running_id", getGlobalData("running_id"));

    divPhai_showInfo_tenGiaiChay.innerText = dataSelectedItem.name;
    divPhai_showInfo_dateGiayChay.innerText = dataSelectedItem.running_day;
    divPhai_showInfo_locationGiayChay.innerText = dataSelectedItem.location;
    setDisplay(fullForm, "block");
    setDisplay(divMienTruFull, "none");
    setDisplay(divTrai_full, "block");

    createDivKhachSan(dataSelectedItem.hotels);
  });
  // Sự kiện chọn giải chạy END

  // tạo mấy cái div để chọn cự ly chạy
  const createDivCuLyChay = (dataSelectedItem) => {
    divTrai_divChonCuLyChay.innerHTML = `
           <p class="text-lg font-medium bg-stone-500 text-white rounded-lg text-center py-2 mb-1">Chọn cự ly chạy</p>
            <p class="italic text-orange-500 text-center my-2">
              Giá Early Bird (trước ngày 15/07)
            </p>
        <div class="flex flex-row flex-wrap gap-8 p-4 xl:p-0 justify-center uppercase">
            ${dataSelectedItem.distances
              .map(
                (distanceItem) => `
                <div class="SSkmItem shadow-md"
                data-distance="${distanceItem.distance}" data-distance-id="${distanceItem.id}" data-price="${distanceItem.discount_price}">
                    <div class="w-44 p-4 bg-white rounded-t-lg">
                        <p class="font-black text-6xl">${distanceItem.distance}<span class="text-xl">km</span></p>
                        <p class="line-through text-stone-500">${distanceItem.real_price}</p>
                        <p class="font-bold text-xl">${distanceItem.discount_price}</p>
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
  // tạo mấy cái div để chọn cự ly chạy END

  // tạo mấy cái div khách sạn
  const createDivKhachSan = (dataSelectedItem) => {
    const divTrai_divChonKhachSan_full = document.getElementById(
      "divTrai_divChonKhachSan_full"
    );
    divTrai_divChonKhachSan_full.innerHTML = "";
    dataSelectedItem.map((hotelItem) => {
      const divKhachSanItem = document.createElement("div");
      divKhachSanItem.classList.add(
        "grid",
        "grid-cols-2",
        "lg:grid-cols-1",
        "items-center",
        "w-full",
        "shadow",
        "mb-4",
        "khachSanItem"
      );
      divKhachSanItem.setAttribute("data-hotel-id", hotelItem.id);

      divKhachSanItem.innerHTML = `
        <div
          class="h-full lg:h-40 duration-500 bg-center bg-cover rounded-l-lg lg:rounded-none lg:rounded-t-lg bg-local bg-stone-50 bg-blend-multiply hover:bg-stone-300"
          style="
            background-image: url(../../../../img/KhachSan/ks-01.png);
          "
        ></div>
        <div class="">
          <div class="bg-black p-2">
            <h5 class="text-xl md:text-2xl font-bold" data-name-hotel="${hotelItem.name}">
              ${hotelItem.name}
            </h5>
            <p>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </p>
          </div>
          <div class="text-sm text-white py-4">
            <p class="mb-2">${hotelItem.address}</p>
            <p class="mb-2">Phòng share: ${hotelItem.rooms[0].price} VNĐ /đêm</p>
            <p class="mb-2">Phòng riêng: ${hotelItem.rooms[1].price} VNĐ /đêm</p>
            <hr class="mb-2" />
            <p>Tiện ích: Ăn sáng, bể bơi, gym,...</p>
            <p>Khu biển riêng, spa, nhà hàng,...</p>
          </div>
        </div>
      `;
      document
        .getElementById("divTrai_divChonKhachSan_full")
        .appendChild(divKhachSanItem);
    });
    handleClickKhachSan(dataSelectedItem);
  };
  // tạo mấy cái div khách sạn END

  //  Lấy danh sách quốc gia từ API và thêm vào select
  const QuocTichInputRegister = getEle("QuocTichInputRegister");
  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((countries) => {
      countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
      countries.forEach((country) => {
        const option = document.createElement("option");
        option.value = country.cca2; // Mã quốc gia
        option.textContent = country.name.common; // Tên quốc gia
        QuocTichInputRegister.appendChild(option);
      });
    })
    .catch((error) => {
      console.error("Error fetching country data:", error);
    });
  //  Lấy danh sách quốc gia từ API và thêm vào select END

  // fomat ngày tháng năm sinh

  const formatDay = (day) => {
    flatpickr(day, {
      dateFormat: "d/m/Y",
      altInput: true,
      altFormat: "d/m/Y",
      allowInput: true,
    });
  };

  formatDay("#birthDateInputRegister");
  formatDay("#startDayInputRegister");
  formatDay("#endDayInputRegister");
  // show họ tên qua bảng fixed
  document
    .getElementById("nameInputRegister")
    .addEventListener("input", function () {
      document.getElementById("divPhai_showInfo_hoTenUser").innerText =
        this.value;
      setGlobalData("name", this.value);
      console.log("name", getGlobalData("name"));
    });

  // showTongTien();

  //   VALIDATE CALL
  //   1. Hàm validateFullName
  document.getElementById("nameInputRegister").addEventListener("input", () => {
    validateFullName();
  });

  //   2. Hàm validateNameBib
  document
    .getElementById("nameBIBInputRegister")
    .addEventListener("input", function () {
      validateNameBib();
      setGlobalData("nick_name_bib", this.value);
      console.log("nick_name_bib", getGlobalData("nick_name_bib"));
    });

  // 2. Hàm validate email
  document
    .getElementById("emailInputRegister")
    .addEventListener("input", function () {
      validateEmailRegister();
      setGlobalData("email", this.value);
      console.log("email", getGlobalData("email"));
    });
  // 3.validate phone
  document
    .getElementById("sdtInputRegister")
    .addEventListener("input", function () {
      validatePhone();
      setGlobalData("phone", this.value);
      console.log("phone", getGlobalData("phone"));
    });
  // 4. validate ngay thang nam sinh

  document
    .getElementById("birthDateInputRegister")
    .addEventListener("input", function () {
      const isValid = validateDate();
      if (isValid) {
        setGlobalData("birth_date", this.value);
        console.log("birth_date", getGlobalData("birth_date"));
      }
    });

  document
    .getElementById("startDayInputRegister")
    .addEventListener("change", validateStartDate);

  getEle("medical_history").addEventListener("input", function () {
    setGlobalData("medical_history", this.value);
    console.log("medical_history", getGlobalData("medical_history"));
  });

  document
    .getElementById("endDayInputRegister")
    .addEventListener("change", validateEndDate);
  // 5. validate quoc tich
  document
    .getElementById("QuocTichInputRegister")
    .addEventListener("change", function () {
      validateNationality();
      const selectedCountryName = this.options[this.selectedIndex].text;
      // Set the global data
      setGlobalData("nationality", selectedCountryName);

      // Log to verify
      console.log("nationality", getGlobalData("nationality"));
    });

  // 6. validate cmt
  document
    .getElementById("textIDInputRegister")
    .addEventListener("input", function () {
      validateCanCuoc();
      setGlobalData("identity_number", this.value);
      console.log("identity_number", getGlobalData("identity_number"));
    });

  // 7.validate tên và sdt người bảo hô
  document
    .getElementById("tenNguoiLienLac")
    .addEventListener("input", function () {
      validateFullNameNguoiLienLac();
      setGlobalData("name_guarantor", this.value);
      console.log("name_guarantor", getGlobalData("name_guarantor"));
    });
  document
    .getElementById("soDienThoaiNguoiLienLac")
    .addEventListener("input", function () {
      validatePhoneNguoiLienLac();
      setGlobalData("phone_guarantor", this.value);
      console.log("phone_guarantor", getGlobalData("phone_guarantor"));
    });

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    return date.toLocaleDateString("vi-VN", options);
  };

  // tính số ngày đặt phòng
  const calculateDays = () => {
    const startDate = new Date(
      startDayInputRegister.value.split("/").reverse().join("-")
    );
    const endDate = new Date(
      endDayInputRegister.value.split("/").reverse().join("-")
    );

    if (startDate && endDate && !isNaN(startDate) && !isNaN(endDate)) {
      const timeDiff = endDate.getTime() - startDate.getTime();
      const daysDiff = timeDiff / (1000 * 3600 * 24);
      soNgayDatPhong = Math.max(daysDiff, 0);
      tongSoNgayDatPhong.innerText = `${soNgayDatPhong} ngày`;
      tongSoNgayDatPhong.setAttribute("data-soNgayO", soNgayDatPhong);
      infoStartDate.innerText = `14:00 ngày ${formatDate(startDate)}`;
      infoEndDate.innerText = `12:00 ngày ${formatDate(endDate)}`;
      showTongTien();
    } else {
      tongSoNgayDatPhong.innerText = "0 ngày";
      soNgayDatPhong = 0;
      tongSoNgayDatPhong.setAttribute("data-soNgayO", soNgayDatPhong);
      showTongTien();
    }
  };

  console.log(soNgayDatPhong);
  startDayInputRegister.addEventListener("change", calculateDays);
  endDayInputRegister.addEventListener("change", calculateDays);

  handleClickNhomMau();
  handleClickGioiTinh();
  handleClickSizeAo();
  handleClickLoaiAo();

  buttonQuayLai.addEventListener("click", () => {
    setDisplay(fullForm, "block");
    setDisplay(divMienTruFull, "none");
    setDisplay(divTrai_full, "block");
  });
});
