// 미리보기 로직
function previewBox(previewType) {
    // debugger;
    // 값 가져오기
    const inputValueTop = document.getElementById("inputValue_top").value; // 배경지도 = 지오서버에서 가져옴 
    const inputValueBottom = document.getElementById("inputValue_bottom").value; // 영상지도 = 지오서버에서 가져옴

    // SHP라는게 어떻게 동작하는지 원리를 봐야함!

    // 미리보기
    const preview = document.getElementById("preview");
    const imageInput = document.getElementById('inputValue_top');
    const selectedImage = imageInput.files[0];
    
    if (previewType === "preview1") {
        if (selectedImage) {
            const reader = new FileReader();

            reader.onload = function (e) {
                preview.innerHTML = `<div class="topContainer"><img src="${e.target.result}" alt="Image Preview"></div>`;
            };

            reader.readAsDataURL(selectedImage);
        }
    } else if (previewType === "preview2") {
        preview.innerHTML += `<div class="bottomContainer">${inputValueBottom}</div>`;
    }

    console.log("inputValueTop:", inputValueTop);
    console.log("inputValueBottom:", inputValueBottom);

}

// 저장 기능 로직
// function save() {
//     // 서버에 데이터 전송
//     const inputValueTop = document.getElementById('inputValue_top').value;
//     const inputValueBottom = document.getElementById('inputValue_bottom').value;

//     // AJAX를 사용하여 서버로 데이터 전송
//     const xhr = new XMLHttpRequest();
//     const url = '';
    
//     xhr.open('POST', url, true);
//     xhr.setRequestHeader('Content-Type', 'application/json');

//     xhr.onreadystatechange = function() {
//         if (xhr.readyState == 4 && xhr.status == 200) {
//             console.log('데이터가 성공적으로 전송되었습니다.');
//         }
//     };

//     const data = {
//         inputValueTop: inputValueTop,
//         inputValueBottom: inputValueBottom
//     };

//     xhr.send(JSON.stringify(data));
// }

