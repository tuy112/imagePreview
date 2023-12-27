// 배경지도 가져오기 (지오서버에서 )


// 영상지도 가져오기 (SHP 형태로 가져와야함)



// 미리보기 로직
function previewBox(previewType) {
    // 값 가져오기
    const inputValueTop = document.getElementById("inputValue_top").value; // 배경지도 = 이미지 파일 URL로 가정
    const inputValueBottom = document.getElementById("inputValue_bottom").value; // 영상지도 = 이미지 파일 URL로 가정

    // 미리보기
    const preview = document.getElementById("preview");
    const imageInputTop = document.getElementById('inputValue_top');
    const imageInputBottom = document.getElementById('inputValue_bottom');
    const selectedImageTop = imageInputTop.files[0];
    const selectedImageBottom = imageInputBottom.files[0];

    // 공통으로 사용할 FileReader 객체
    const reader = new FileReader();

    reader.onload = function (e) {
        if (previewType === "preview1" && selectedImageTop) {
            preview.innerHTML = `<div class="topContainer"><img class="img1" src="${e.target.result}" alt="Image Preview"></div>`;
        } else if (previewType === "preview2" && selectedImageBottom) {
            preview.innerHTML += `<div class="bottomContainer"><img class="img2" src="${e.target.result}" alt="Image Preview"></div>`;
        }
    };

    // 선택된 이미지를 읽어옴
    if (previewType === "preview1" && selectedImageTop) {
        reader.readAsDataURL(selectedImageTop);
    } else if (previewType === "preview2" && selectedImageBottom) {
        reader.readAsDataURL(selectedImageBottom);
    }

    console.log("inputValueTop:", inputValueTop);
    console.log("inputValueBottom:", inputValueBottom);
}

// 저장 기능 로직
function save() {
    $.ajax({
        type:"POST",
        url:"",
        data:data,
        success: function(data) {
            console.log(data);
            alert("미리보기 저장 성공");
        }
    })
}

// '미리보기 저장 데이터'를 웹맵에서 그대로 get할 수 있어야함
