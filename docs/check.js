document.addEventListener('DOMContentLoaded', function() {
    const $check_detail = document.querySelector('.check_detail');
    const $check_detail_contents = document.querySelector('.check_detail_contents');

    // close 버튼 클릭 이벤트 리스너
    function addCloseEvent() {
        const $close = document.querySelector('.close');
        if ($close) {
            $close.addEventListener('click', function () {
                $check_detail.classList.remove('fade_in');
                $check_detail_contents.classList.remove('slide_up');
                console.log('클릭');
            });
        }
    }

    // openDetail 함수
    window.openDetail = function(td) {
        const row = td.parentElement; // 클릭한 td의 부모 tr 요소
        const location = row.cells[2].innerText; // 보관 장소
        const date = row.cells[1].innerText; // 보관 일자
        const number = row.cells[0].innerText; // 수화물 번호
        const price = row.cells[3].innerText; // 가격
        const stat = row.cells[4].innerText; // 상태

        $check_detail_contents.innerHTML = `
            <span class="close">&times;</span>
            <h1>조회 상세 정보</h1>
            <span>${stat}</span>
            <span style="font-size: 1.3rem;">보관 장소 : ${location}</span>
            <span>보관 일자 : ${date}</span>
            <span>수화물 번호 : ${number}</span>
            <ul>가격
                <li>소형 1개 1000원</li>
                <li>중형 1개 2000원</li>
                <li>대형 1개 3000원</li>
            </ul>
            <hr>
            <p>총합<span>${price}원</span></p>
        `;
        $check_detail.classList.add('fade_in');
        $check_detail_contents.classList.add('slide_up');

        // close 버튼 이벤트 리스너 추가
        addCloseEvent();
    };
});