document.addEventListener("DOMContentLoaded", function() {
    fetch("/header.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector('.header').innerHTML = data;

            const $menu = document.querySelector('.menu');
            const $sub_menu_container = document.querySelector('.sub_menu_container');
            const $sub_menu = document.querySelector('.sub_menu');

            // 메뉴 위에 마우스가 올라갔을 때
            $menu.addEventListener('mouseover', function () {
                $sub_menu_container.classList.add('visible');
            });

            // 메뉴에서 마우스가 벗어났을 때
            $menu.addEventListener('mouseout', function () {
                $sub_menu_container.classList.remove('visible');
            });

            $sub_menu.addEventListener('mouseover', function () {
                $sub_menu_container.classList.add('visible');
            });

            $sub_menu.addEventListener('mouseout', function () {
                $sub_menu_container.classList.remove('visible');
            });

        });

    fetch("/footer.html")
        .then(response => response.text())
        .then(data => {
            document.querySelector(".footer").innerHTML = data;
        });
});