// CLICK CỰ LU CHẠY LÀM CÁI GÌ
import { getGlobalData, setGlobalData } from "./globalVar.js";

export const handleClickCuLyChay = () => {
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
      const distance_id = this.getAttribute("data-distance-id");
      setGlobalData("distance_id", distance_id);
      console.log("distance_id", getGlobalData("distance_id"));

      divPhai_showInfo_cuLy.innerText = distance;
      divPhai_showInfo_giaBib.innerText = price;
      showTongTien();
    });
  });
};

const createDivChonLoaiPhong = (hotelItem) => {
  const divTrai_divChonLoaiPhong = document.getElementById(
    "divTrai_divChonLoaiPhong"
  );
  divTrai_divChonLoaiPhong.innerHTML = `
    <div class="room-selection">
      <label class="block my-1 text-sm font-medium text-stone-900" for="roomType"><i class="fa-solid fa-circle-exclamation text-red-800"></i> Loại phòng</label>
      <select id="roomType" class="roomTypeSelect bg-stone-50 border border-stone-400 text-stone-900 text-sm rounded-lg block w-full p-2">
        <option value="" id="status_stay" selected>Chọn loại phòng</option>
        ${hotelItem.rooms
          .map(
            (room) => `
          <option data-status-stay="${room.type}" value="${room.price}">${
              room.type === 1 ? "Ở ghép" : "Ở riêng"
            }</option>
        `
          )
          .join("")}
      </select>
    </div>
  `;

  // Thêm sự kiện change cho dropdown chọn loại phòng
  document.getElementById("roomType").addEventListener("change", function () {
    const selectedPrice = this.value;
    let value_status_stay =
      this.options[this.selectedIndex].getAttribute("data-status-stay");

    setGlobalData("status_stay", value_status_stay);
    console.log("status_stay", getGlobalData("status_stay"));
    document.getElementById("divPhai_showInfo_giaKhachSan").innerText =
      selectedPrice + " VNĐ";
    showTongTien();
  });
};

export const handleClickKhachSan = (dataSelectedItem) => {
  let khachSanItem = document.querySelectorAll(".khachSanItem");
  khachSanItem.forEach((item, index) => {
    item.addEventListener("click", function () {
      // Xóa class "khachSanActive" khỏi tất cả các thẻ khachSanItem
      khachSanItem.forEach((otherItem) => {
        otherItem.classList.remove("khachSanActive");
      });
      setGlobalData("hotel_id", dataSelectedItem[index].id);
      console.log("hotel_id", getGlobalData("hotel_id"));
      // Thêm class "khachSanActive" cho thẻ khachSanItem được click
      this.classList.add("khachSanActive");
      // Cập nhật dropdown chọn loại phòng theo khách sạn được chọn
      createDivChonLoaiPhong(dataSelectedItem[index]);
      document.getElementById("divPhai_showInfo_tenKhachSan").innerText =
        dataSelectedItem[index].name;

      document.getElementById("divPhai_showInfo_giaKhachSan").innerText = 0;
      showTongTien();
    });
  });
};

export const showTongTien = () => {
  const giaBib =
    parseInt(document.getElementById("divPhai_showInfo_giaBib").innerText) || 0;
  const giaKhachSan =
    parseInt(
      document.getElementById("divPhai_showInfo_giaKhachSan").innerText
    ) || 0;

  const soLuongPhongInputRegister = document.getElementById(
    "soLuongPhongInputRegister"
  ).value;
  const soNgayO = document
    .getElementById("tongSoNgayDatPhong")
    .getAttribute("data-soNgayO");
  const totalGiaKhachSan = giaKhachSan * soLuongPhongInputRegister * soNgayO;

  const tongTien = document.getElementById("divPhai_showInfo_tongTien");
  tongTien.innerText = (giaBib + totalGiaKhachSan).toLocaleString() + " VNĐ";
};

document
  .getElementById("soLuongPhongInputRegister")
  .addEventListener("input", showTongTien);

// KHI CLICK NHÓM MÁU
export const handleClickNhomMau = () => {
  let NhomMauItem = document.querySelectorAll(".NhomMauItem");
  NhomMauItem.forEach((item) => {
    item.addEventListener("click", function () {
      NhomMauItem.forEach((otherItem) => {
        otherItem.classList.remove("NhomMauActive");
      });
      setGlobalData("blood_group", this.getAttribute("data-bloodGroup"));
      console.log("blood_group", getGlobalData("blood_group"));
      this.classList.add("NhomMauActive");
    });
  });
};

// CLICK GIỚI TÍNH
export const handleClickGioiTinh = () => {
  let GioiTinhItem = document.querySelectorAll(".GioiTinhItem");
  GioiTinhItem.forEach((item) => {
    item.addEventListener("click", function () {
      GioiTinhItem.forEach((otherItem) => {
        otherItem.classList.remove("GioiTinhActive");
      });
      setGlobalData("gender", this.getAttribute("data-gender"));
      console.log("gender", getGlobalData("gender"));

      this.classList.add("GioiTinhActive");
    });
  });
};

//   xử lý khi click chọn size áo
export const handleClickSizeAo = () => {
  let SizeAoItem = document.querySelectorAll(".SizeAoItem");

  SizeAoItem.forEach((item) => {
    item.addEventListener("click", function () {
      SizeAoItem.forEach((otherItem) => {
        otherItem.classList.remove("SizeAoActive");
      });

      setGlobalData("shirt_size", this.getAttribute("data-sizeAo"));
      console.log("shirt_size", getGlobalData("shirt_size"));

      this.classList.add("SizeAoActive");
    });
  });
};

export const handleClickLoaiAo = () => {
  let LoaiAoItem = document.querySelectorAll(".LoaiAoItem");

  LoaiAoItem.forEach((item) => {
    item.addEventListener("click", function () {
      LoaiAoItem.forEach((otherItem) => {
        otherItem.classList.remove("LoaiAoActive");
      });

      setGlobalData("shirt_type", this.getAttribute("data-typeAo"));
      console.log("shirt_type", getGlobalData("shirt_type"));

      this.classList.add("LoaiAoActive");
    });
  });
};

import { validateDangKy } from "./ValidationForm.js";
const nutDangKy = document.getElementById("nutDangKy");

nutDangKy.addEventListener("click", (event) => {
  if (!validateDangKy()) {
    event.preventDefault();
    Swal.fire({
      title: "Lỗi!",
      text: "Vui lòng kiểm tra lại thông tin và đảm bảo rằng tất cả các trường đều được nhập chính xác.",
      icon: "error",
    });
  } else {
    const formFields = {
      distance_id: getGlobalData("distance_id"),
      running_id: getGlobalData("running_id"),
      user_id: "123", // Bạn cần cập nhật giá trị này
      hotel_id: getGlobalData("hotel_id"),
      name: getGlobalData("name"),
      nick_name_bib: getGlobalData("nick_name_bib"),
      email: getGlobalData("email"),
      phone: getGlobalData("phone"),
      identity_number: getGlobalData("identity_number"),
      nationality: getGlobalData("nationality"),
      blood_group: getGlobalData("blood_group"),
      gender: getGlobalData("gender"),
      shirt_size: getGlobalData("shirt_size"),
      shirt_type: getGlobalData("shirt_type"),
      medical_history: getGlobalData("medical_history"),
      name_guarantor: getGlobalData("name_guarantor"),
      phone_guarantor: getGlobalData("phone_guarantor"),
      days_stay: getGlobalData("days_stay"),
      status_stay: getGlobalData("status_stay"),
    };

    console.log("formfield", formFields);
    const formData = new FormData();
    for (let key in formFields) {
      formData.append(key, formFields[key]);
    }

    console.log("formData", formData);

    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     Accept: "application/json",
    //   },
    //   body: formData,
    //   redirect: "follow",
    // };

    // fetch("http://localhost:3000/regform", requestOptions)
    //   .then((response) => response.text())
    //   .then((result) => {
    //     console.log(result);
    //     Swal.fire({
    //       title: "Thành công!",
    //       text: "Bạn đã điền thông tin cá nhân chính xác, giờ thì thanh toán nữa là xong!",
    //       icon: "success",
    //     });
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //     Swal.fire({
    //       title: "Lỗi!",
    //       text: "Đã có lỗi xảy ra trong quá trình gửi dữ liệu. Vui lòng thử lại.",
    //       icon: "error",
    //     });
    //   });
  }
});
