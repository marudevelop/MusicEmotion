var feelingList = ["😄", "🙂", "😪", "😡", "🤔", "😵‍💫", "😢", "😒", "😱", "😷"];
var atmosphereList = ["경쾌한", "우울한", "슬픈", "로맨틱한", "긴장감 있는", "편안한", "신나는", "어두운", "몽환적인", "희망적인", "강렬한", "행복한", "차분한", "웅장한", "고요한"];

var todayList = document.querySelector('.today-list');
for (var i = 0; i < feelingList.length; i++) {
    todayList.innerHTML += '<button class="today-feeling">' + feelingList[i] + '</button>';
}

var musicList = document.querySelector('.music-list');
for (var i = 0; i < atmosphereList.length; i++) {
    musicList.innerHTML += '<button class="music-atmosphere">' + atmosphereList[i] + '</button>';
}

var selectedFeelings = [];
var feelings = document.querySelectorAll('.today-feeling');

function clickFeelingHandler() {
    if (this.classList.length > 1){
        this.classList.remove('today-feeling-active');
        selectedFeelings.pop(this)
    } else {
        this.classList.add('today-feeling-active');
        selectedFeelings.push(this)
    }
}

for (var i = 0; i < feelings.length; i++) {
    feelings[i].addEventListener('click', clickFeelingHandler);        
}

var selectedLike;
var likes = document.querySelectorAll('.music-like');

function clickLikeHandler() {
    if (selectedLike){
        selectedLike.classList.remove('music-like-active');  
    }   
    this.classList.add('music-like-active');
    selectedLike = this;
}

for (var i = 0; i < likes.length; i++) {
    likes[i].addEventListener('click', clickLikeHandler);        
}

var selectedAtmospheres = [];
var atmospheres = document.querySelectorAll('.music-atmosphere');

function clickAtmosphereHandler() {
    if (this.classList.length > 1){
        this.classList.remove('music-atmosphere-active');
        selectedAtmospheres.pop(this);
    } else {
        this.classList.add('music-atmosphere-active');
        selectedAtmospheres.push(this);
    }
}

for (var i = 0; i < atmospheres.length; i++) {
    atmospheres[i].addEventListener('click', clickAtmosphereHandler);        
}

function todayNext() {
    if (selectedFeelings.length > 0) {
        document.getElementById('today').style.display = "none";
        document.getElementById('music').style.display = "block";
        document.getElementById('like').style.display = "block";
        document.getElementById('atmosphere').style.display = "none";
        document.getElementById('song').play();
    }
}

function likePrev() {
    document.getElementById('today').style.display = "block";
    document.getElementById('music').style.display = "none";
    document.getElementById('like').style.display = "none";
    document.getElementById('atmosphere').style.display = "none";
    audio = document.getElementById('song');
    audio.pause();
    audio.currentTime = 0;
}

function likeNext() {
    if (selectedLike) {
        document.getElementById('today').style.display = "none";
        document.getElementById('music').style.display = "block";
        document.getElementById('like').style.display = "none";
        document.getElementById('atmosphere').style.display = "block";
    }
}

function atmospherePrev() {
    document.getElementById('today').style.display = "none";
    document.getElementById('music').style.display = "block";
    document.getElementById('like').style.display = "block";
    document.getElementById('atmosphere').style.display = "none";
}

function atmosphereNext() {
    // TODO
}