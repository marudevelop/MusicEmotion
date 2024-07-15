$audio.onloadedmetadata = () => $seekbar.max = $audio.duration
$seekbar.onchange = () => $audio.currentTime = $seekbar.value
$audio.ontimeupdate = () => $seekbar.value = $audio.currentTime

$atm1.onchange = () => {
    atmosphere[0] = $atm1.value;
    savedData[nowIndex] = {
        selectedLikeE: selectedLikeE,
        atmosphere: atmosphere
    }
}
$atm2.onchange = () => {
    atmosphere[1] = $atm2.value;
    savedData[nowIndex] = {
        selectedLikeE: selectedLikeE,
        atmosphere: atmosphere
    }
}
$atm3.onchange = () => {
    atmosphere[2] = $atm3.value;
    savedData[nowIndex] = {
        selectedLikeE: selectedLikeE,
        atmosphere: atmosphere
    }
}

//--------------------------------------------------------------------------------------------//

var feelings = document.querySelectorAll('.pn-feeling');

function clickPNHandler() {
    if (selectedPN){
        selectedPN.classList.remove('pn-feeling-active');  
    }   
    this.classList.add('pn-feeling-active');
    selectedPN = this;
    selectedPNE = selectedPN.querySelector('p').textContent;
    selectedEmotionE = null;
    document.querySelector('.emozi').innerHTML = selectedPNE;
}

for (var i = 0; i < feelings.length; i++) {
    feelings[i].addEventListener('click', clickPNHandler);        
}

//--------------------------------------------------------------------------------------------//

var likes = document.querySelectorAll('.music-like');

function clickLikeHandler() {
    if (selectedLike){
        selectedLike.classList.remove('music-like-active');  
    }   
    this.classList.add('music-like-active');
    selectedLike = this;
    selectedLikeE = selectedLike.innerText;
    document.querySelector('.goodbad').innerHTML = selectedLikeE;
    savedData[nowIndex] = {
        selectedLikeE: selectedLikeE,
        atmosphere: atmosphere
    }
}

for (var i = 0; i < likes.length; i++) {
    likes[i].addEventListener('click', clickLikeHandler);        
}

//--------------------------------------------------------------------------------------------//

function openingNext() {
    document.getElementById('opening').style.display = "none";
    document.getElementById('login').style.display = "block";
}

function pnPrev() {
    document.getElementById('home').style.display = "block";
    document.getElementById('today').style.display = "none";
}

function pnNext() {
    if (selectedPN) {
        if (selectedPNE == '😐') {
            selectedEmotionE = '😐'
            emotionNext();
        } else {
            if (selectedPNE == '🙁') {
                var emotionList = document.querySelector('.emotion-list');
                emotionList.innerHTML = '';
                for (var i = 0; i < emoziN.length; i++) {
                    emotionList.innerHTML += '<button class="emotion-feeling">' + emoziN[i] + '</button>';
                }
            } else {
                var emotionList = document.querySelector('.emotion-list');
                emotionList.innerHTML = '';
                for (var i = 0; i < emoziP.length; i++) {
                    emotionList.innerHTML += '<button class="emotion-feeling">' + emoziP[i] + '</button>';
                }
            }
            var emotions = document.querySelectorAll('.emotion-feeling');

            function clickEmotionHandler() {
                if (selectedEmotion){
                    selectedEmotion.classList.remove('emotion-feeling-active');  
                }   
                this.classList.add('emotion-feeling-active');
                selectedEmotion = this;
                selectedEmotionE = selectedEmotion.querySelector('p').textContent;
                document.querySelector('.emozi').innerHTML = selectedEmotionE;
            }

            for (var i = 0; i < emotions.length; i++) {
                emotions[i].addEventListener('click', clickEmotionHandler);        
            }
            
            document.getElementById('pn').style.display = "none";
            document.getElementById('emotion').style.display = "block";
        }
    }
}

function emotionPrev() {
    document.getElementById('pn').style.display = "block";
    document.getElementById('emotion').style.display = "none";
    selectedEmotionE = null;
}

function emotionNext() {
    if (selectedEmotionE) {
        document.querySelector('.head').innerHTML = "곡 현황 " + String(nowIndex+1) + " / 50";
        document.querySelector('.todayE').innerHTML = "음악이 오늘 기분 " + selectedEmotionE + "에 잘 맞나요";
        document.getElementById('today').style.display = "none";
        document.getElementById('music').style.display = "block";
        document.getElementById('like').style.display = "block";
        document.getElementById('atmosphere').style.display = "none";
        audio = document.getElementById('$audio');
        audio.src = './music/' + musicList[nowIndex];
        audio.currentTime = 0;
        audio.play();
    }
}

function likePrev() {
    if (nowIndex == firstIndex) {
        document.getElementById('today').style.display = "block";
        document.getElementById('music').style.display = "none";
        document.getElementById('like').style.display = "none";
        document.getElementById('atmosphere').style.display = "none";
        audio = document.getElementById('$audio');
        audio.pause();
        audio.currentTime = 0;
        document.getElementById("icon").src = './image/pause.svg';
    } else {
        nowIndex--;

        document.querySelector('.head').innerHTML = "곡 현황 " + String(nowIndex+1) + " / 50";

        selectedLikeE = savedData[nowIndex]["selectedLikeE"];
        atmosphere = savedData[nowIndex]["atmosphere"];
        $atm1.value = atmosphere[0];
        $atm2.value = atmosphere[1];
        $atm3.value = atmosphere[2];
        document.querySelector(".goodbad").innerHTML = selectedLikeE;
        likes = document.querySelectorAll('.music-like');
        for (var i = 0; i < likes.length; i++) {
            if (likes[i].classList.length > 1) {
                likes[i].classList.remove('music-like-active');
            }
            if (likes[i].innerText == selectedLikeE) {
                likes[i].classList.add('music-like-active');
                selectedLike = likes[i];
            }
        }

        document.getElementById('like').style.display = "none";
        document.getElementById('atmosphere').style.display = "block";
        audio = document.getElementById('$audio');
        audio.pause();
        audio.src = './music/' + musicList[nowIndex];
        audio.currentTime = 0;
        audio.play();
        document.getElementById("icon").src = './image/pause.svg';
    }
}

function likeNext() {
    if (selectedLike) {
        document.getElementById('like').style.display = "none";
        document.getElementById('atmosphere').style.display = "block";
    }
}

function atmospherePrev() {
    document.getElementById('like').style.display = "block";
    document.getElementById('atmosphere').style.display = "none";
}

//--------------------------------------------------------------------------------------------//

function playPause() {
    if (isPlay) {
        isPlay = false;
        audio = document.getElementById('$audio');
        audio.pause();
        document.getElementById("icon").src = './image/play.svg';
    } else {
        isPlay = true;
        audio = document.getElementById('$audio');
        audio.play();
        document.getElementById("icon").src = './image/pause.svg';
    }
}