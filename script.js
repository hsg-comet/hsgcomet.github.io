var money = 50000; // 기본 돈
var summonCost = 1000; // 소환 비용
var hallOfFame = []; // 명예의 전당

// 확률 설정 (0 ~ 1)
var probabilities = {
    1: 0.1432178333, // image1.jpg
    2: 0.1432178333, // image2.jpg
    3: 0.1432178333, // image3.jpg
    4: 0.1432178333,  // image4.jpg
    5: 0.1432178333,
    6: 0.00003,
    7: 0.00003,
    8: 0.0111,
    9: 0.01019,
    10: 0.01019,
    11: 0.1432178333,
    12: 0.000021,
    13: 0.0111,
    14: 0.00413,
    15: 0.000015,
    16: 0.0111,
    17: 0.0111,
    18: 0.01019,
    19: 0.00413,
    20: 0.01019,
    21: 0.01019,
    22: 0.000021,
    23: 0.00413,
    24: 0.01019,
    25: 0.000015,
    26: 0.000015,
    27: 0.0111,
    28: 0.0111,
    29: 0.000021,
    32: 0.00003,
    33: 0.000079,
    34: 0.000079,
    36: 0.00017,
    37: 0.00003,
    40: 0.000021,
    41: 0.000001
};

// 이미지 제목
var titles = {
    1: "혜성이의 그림",
    2: "혜성이의 코딩",
    3: "혜성이의 학원 영어책",
    4: "혜성이가 찍은 하늘",
    5: "혜성이의 그림1",
    6: "사촌동생이 찍어준 사진",
    7: "내가 찍어준 사촌동생 사진",
    8: "졸업선물",
    9: "버스정류장에서 한 컷!",
    10: "제주도 물 조심!",
    11: "제주도 어딘가 찰칵!",
    12: "난타시간 배 볼록!",
    13: "떡볶이 우웩",
    14: "에버랜드에서 찰칵!",
    15: "인생한컷",
    16: "디저트39~",
    17: "휘적휘적",
    18: "존맛탱",
    19: "인생이란..",
    20: "중복사진",
    21: "만화책",
    22: "산타멍",
    23: "광기",
    24: "빙수 냠",
    25: "제주도에서 찰칵",
    26: "제주도에서 찰칵1",
    27: "중복사진 1",
    28: "중복사진 2",
    29: "흑화한 뽀로로",
    32: "콱 씨",
    33: "에버랜드에서 찰칵",
    34: "인생네컷에서 한 장",
    36: "학원에서 딴 짓",
    37: "혜성..?",
    40: "빗 쌥쳐서 찰칵",
    41: "졸귀멍"
};

// 이미지 등급
var grades = {
    1: "기본",
    2: "기본",
    3: "기본",
    4: "기본",
    5: "기본",
    6: "에픽",
    7: "에픽",
    8: "희귀",
    9: "레어",
    10: "레어",
    11: "기본",
    12: "신화",
    13: "희귀",
    14: "슈퍼레어",
    15: "슈퍼에픽",
    16: "희귀",
    17: "희귀",
    18: "레어",
    19: "슈퍼레어",
    20: "레어",
    21: "레어",
    22: "신화",
    23: "슈퍼레어",
    24: "레어",
    25: "슈퍼에픽",
    26: "슈퍼에픽",
    27: "희귀",
    28: "희귀",
    29: "신화",
    32: "에픽",
    33: "슈퍼영웅",
    34: "슈퍼영웅",
    36: "영웅",
    37: "에픽",
    40: "신화",
    41: "레전더리",
};

// 이미지 설명
var descriptions = {
    1: "혜성이가 그림판으로 그린 졸라맨이다",
    2: "혜성이가 가져와서 쓴 코드이다",
    3: "혜성이가 시험기간때 찍어둔 것이다",
    4: "학원 가는길에 찍었던것 같다. 정말이쁘다",
    5: "에이블 학원에서 그린 그림이다",
    6: "사촌동생이 찍어준 사진인데 사진편집 안했으면 안 이뻤다",
    7: "사진은 잘 나왔는데.. 인물이 개별로다",
    8: "졸업하고 받은 선물이다. 롤링페이퍼,편지 등이있다",
    9: "빅소원이 버스정류장에서 찍은 혜성이다",
    10: "바다 위 돌 건너는 중이다 빠지면 옷 다 젖음 ㅋㅋ 참고 : 빠진애 봤음",
    11: "제주도인데 저기가 어디지..",
    12: "난타시간에 폰하고 있다 배 볼록볼록",
    13: "김예준 : ㅈㄴ 맛없네 우욱",
    14: "엌ㅋㅋ 남자는 포즈 브이 국룰이지 ㅋㅋㅋㅋ",
    15: "저 사진이 제일 잘 나옴 ㅋ",
    16: "다음엔 어떤 음료를 조지지..?",
    17: "휘적휘적",
    18: "이걸 안 먹노 내가 다 처 먹음 ㅅㄱ",
    19: "인생이란.. 먹고 먹고 먹는거다.. -김예준",
    20: "중복사진인데 이거빼면 사진이름 싹 다 재수정해야된다",
    21: "이번엔 이 종이를 먹어볼까?",
    22: "산책나갔을 때 우리집 강아지다",
    23: "아무리 뜨거워도 다 먹을거야",
    24: "숟가락도 먹어버릴까..?",
    25: "비행기 타고 내려서 바로 찍은 사진 ㅈㄴ 피곤해 보이네",
    26: "제주도에서 박소원이 찍어준 사진 나름 잘 나왔다 생각함",
    27: "중복사진 이거빼면 처음부터 다시해야됨 다음엔 잘 보고 해야겠다",
    28: "아니 뭔 중복사진이 3개야 개열받네",
    29: "아니 뭐 저렇게 찍힘 ㅋㅋㅋㅋ 개웃기네 ㅋㅋㅋㅋ",
    32: "에버랜드에서 찍은 잼민짤",
    33: "잘 찍은거 같긴한데.. 너무 멀리서 찍었다",
    34: "에버랜드에 인생네컷에서 나 혼자 셀카!",
    36: "박소원이 그린 박소원,박은정,정혜성이다 저게 머너",
    37: "저거 나 닮았다는데 맞는거냐??",
    40: "이예은 빗 쌥쳐서 찍은 사진 지금은 별로 안 친하다 나름 잘 찍힌듯?",
    41: "저 땐 귀여웠는데 지금은 뚱뚱해짐 ㅋㅋ 와중에 레전더리 뽑은거 ㅊㅊ"


    
    
};

// 페이지가 로드될 때 실행되는 함수
window.onload = function() {
    // 닉네임 설정 함수 호출
    setNickname();
    // 플레이 시간 표시 함수 호출
    displayPlayTime();
    // 현재 돈 표시 함수 호출
    displayMoney();
    // 명예의 전당 표시 함수 호출
    displayHallOfFame();
};

// 닉네임 설정 함수
function setNickname() {
    // 로컬 스토리지에서 닉네임 가져오기
    var nickname = localStorage.getItem("nickname");
    
    // 만약 로컬 스토리지에 닉네임이 없으면
    if (!nickname) {
        // 닉네임을 입력받음
        nickname = prompt("닉네임을 입력하세요:");
        
        // 입력받은 닉네임을 로컬 스토리지에 저장
        localStorage.setItem("nickname", nickname);
    }
    
    // 닉네임을 화면에 출력
    document.getElementById("nickname").textContent = "안녕하세요, " + nickname + "님!";
    // 관리자인지 확인 후 처리
    if (nickname === "hsgcomet0629") {
        money = Infinity;
        displayMoney();
    }
}

// 플레이 시간 표시 함수
function displayPlayTime() {
    var startTime = localStorage.getItem("startTime");
    if (!startTime) {
        startTime = new Date().getTime(); // 페이지에 처음 접속한 시간을 저장
        localStorage.setItem("startTime", startTime);
    }
    var currentTime = new Date().getTime();
    var playTime = currentTime - startTime;
    var hours = Math.floor(playTime / (1000 * 60 * 60));
    var minutes = Math.floor((playTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((playTime % (1000 * 60)) / 1000);
    var formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
    document.getElementById("playTime").textContent = "플레이 시간: " + formattedTime;
    setTimeout(displayPlayTime, 1000); // 1초마다 갱신
}

// 현재 돈 표시 함수
function displayMoney() {
    document.getElementById("moneyDisplay").textContent = "현재 돈: " + (isFinite(money) ? money.toLocaleString() : "무한") + "원";
}

// 명예의 전당 표시 함수
function displayHallOfFame() {
    var sortedHallOfFame = hallOfFame.slice().sort((a, b) => b.grade - a.grade); // 등급이 높은 순서로 정렬
    var hallOfFameList = document.getElementById("hallOfFame");
    hallOfFameList.innerHTML = "<b>명예의 전당:</b>";
    for (var i = 0; i < sortedHallOfFame.length; i++) {
        var listItem = document.createElement("li");
        listItem.textContent = "[" + grades[sortedHallOfFame[i].grade] + "] " + sortedHallOfFame[i].title + " (중복: " + sortedHallOfFame[i].count + "회)";
        hallOfFameList.appendChild(listItem);
    }
}

// 소환 버튼 클릭 시 실행되는 함수
function summon() {
    if (money >= summonCost) {
        money -= summonCost; // 소환 비용 차감
        displayMoney(); // 현재 돈 표시 갱신
        var randomNumber = Math.random();
        var imageNumber = 1;
        var cumulativeProbability = 0;
        for (var key in probabilities) {
            cumulativeProbability += probabilities[key];
            if (randomNumber <= cumulativeProbability) {
                imageNumber = key;
                break;
            }
        }
        var imageTitle = titles[imageNumber];
        var imageGrade = grades[imageNumber];
        var existingEntryIndex = hallOfFame.findIndex(entry => entry.title === imageTitle);
        if (existingEntryIndex !== -1) {
            hallOfFame[existingEntryIndex].count++;
        } else {
            hallOfFame.push({ title: imageTitle, grade: imageNumber, count: 0 });
        }
        displayHallOfFame();
        var imageDescription = descriptions[imageNumber];
        var imageSource = "image" + imageNumber + ".jpg";
        document.getElementById("summonedImage").src = imageSource;
        document.getElementById("imageDescription").textContent = "[" + imageGrade + "] " + imageTitle + " - " + imageDescription;
        document.getElementById("summonedImage").style.display = "block";
        document.getElementById("imageDescription").style.display = "block";
        saveGameState(); // 게임 상태 저장
    } else {
        alert("소환에 필요한 돈이 부족합니다."); // 돈이 부족할 때 알림 메시지
    }
}

// 게임 상태 저장 함수
function saveGameState() {
    localStorage.setItem("money", money);
    localStorage.setItem("hallOfFame", JSON.stringify(hallOfFame));
}

// 게임 상태 불러오기 함수
function loadGameState() {
    money = parseInt(localStorage.getItem("money"));
    hallOfFame = JSON.parse(localStorage.getItem("hallOfFame"));
    displayMoney();
    displayHallOfFame();
}

// 시간 형식화 함수
function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

// 2분마다 돈 추가 함수
setInterval(function() {
    money += 20000;
    displayMoney();
}, 120000); // 2분(120000밀리초)마다 실행

// 닉네임 리셋 함수
function resetNickname() {
    // 로컬 스토리지에서 닉네임 제거
    localStorage.removeItem("nickname");
    // 새로고침하여 새로운 닉네임 입력
    location.reload();
}
