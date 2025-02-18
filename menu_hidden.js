document.addEventListener("DOMContentLoaded", function () {
    let formWrapper = document.querySelector(".form-wrapper");
    let formContainer = document.querySelector(".form-container");

    if (!formWrapper || !formContainer) {
        console.error("❌ 요소를 찾을 수 없습니다! .form-wrapper 또는 .form-container 확인 필요.");
        return;
    }

    console.log("✅ .form-wrapper, .form-container 찾음! 이벤트 리스너 등록 시작");

    formContainer.addEventListener("click", function () {
        formWrapper.classList.toggle("active");
        console.log("📌 빠른 예약 폼 상태 변경: ", formWrapper.classList.contains("active") ? "열림" : "닫힘");
    });
});

console.log(document.querySelector(".form-wrapper"));
console.log(document.querySelector(".form-container"));