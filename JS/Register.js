// ĐỔI MÀU KHI CLICK Ở TRANG MUA BIB

// Thẻ chọn cự ly
let SSkmItem = document.querySelectorAll(".SSkmItem");

SSkmItem.forEach((item) => {
  item.addEventListener("click", function () {
    // Xóa class "SSkmActive" khỏi tất cả các thẻ SSkmItem
    SSkmItem.forEach((otherItem) => {
      otherItem.classList.remove("SSkmActive");
    });

    // Thêm class "SSkmActive" cho thẻ SSkmItem được click
    this.classList.add("SSkmActive");
  });
});

// Thẻ chọn giới tính
let GioiTinhItem = document.querySelectorAll(".GioiTinhItem");

GioiTinhItem.forEach((item) => {
  item.addEventListener("click", function () {
    GioiTinhItem.forEach((otherItem) => {
      otherItem.classList.remove("GioiTinhActive");
    });

    this.classList.add("GioiTinhActive");
  });
});

// Thẻ chọn Nhóm máu
let NhomMauItem = document.querySelectorAll(".NhomMauItem");

NhomMauItem.forEach((item) => {
  item.addEventListener("click", function () {
    NhomMauItem.forEach((otherItem) => {
      otherItem.classList.remove("NhomMauActive");
    });

    this.classList.add("NhomMauActive");
  });
});

// Thẻ chọn Loại áo
let LoaiAoItem = document.querySelectorAll(".LoaiAoItem");

LoaiAoItem.forEach((item) => {
  item.addEventListener("click", function () {
    LoaiAoItem.forEach((otherItem) => {
      otherItem.classList.remove("LoaiAoActive");
    });

    this.classList.add("LoaiAoActive");
  });
});

// Thẻ chọn Size áo
let SizeAoItem = document.querySelectorAll(".SizeAoItem");

SizeAoItem.forEach((item) => {
  item.addEventListener("click", function () {
    SizeAoItem.forEach((otherItem) => {
      otherItem.classList.remove("SizeAoActive");
    });

    this.classList.add("SizeAoActive");
  });
});
