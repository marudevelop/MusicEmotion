import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDhC3uheUH8hs4Flw8ugTb04b3OYqpQntc",
    authDomain: "music-emotion-b5263.firebaseapp.com",
    projectId: "music-emotion-b5263",
    storageBucket: "music-emotion-b5263.appspot.com",
    messagingSenderId: "671988490688",
    appId: "1:671988490688:web:e4e5fbb6e520322bcea825"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.querySelector('#firstMusic').addEventListener('click', firstMusic)
document.querySelector('#addInfo').addEventListener('click', addInfo)
document.querySelector('#addData').addEventListener('click', addData)

async function firstMusic() {
    id = document.getElementById('id').value
    if (id != "") {
        if (!id.startsWith('@') && id.includes('@') && id.includes('.') && !id.endsWith('.')) {
            const docRef0 = doc(db, id, "info");
            const docSnap0 = await getDoc(docRef0);

            if (docSnap0.exists()) {
                musicList = docSnap0.data()["list"];
            }

            if (firstIndex == null) {
                firstIndex = 0;
                nowIndex = 0;

                for (var i = 0; i < musicList.length; i++) {
                    const docRef = doc(db, id, String(i));
                    const docSnap = await getDoc(docRef);
        
                    if (!docSnap.exists()) break;

                    firstIndex++;
                    nowIndex++;
                }

                const docRef1 = doc(db, id, "info");
                const docSnap1 = await getDoc(docRef1);
    
                if (docSnap1.exists()) {
                    if (nowIndex == musicList.length) {
                        document.getElementById('home').style.display = "none";
                        document.getElementById('today').style.display = "none";
                        document.getElementById('music').style.display = "none";
                        document.getElementById('end').style.display = "block";
                    } else {
                        document.getElementById('home').style.display = "none";
                        document.getElementById('today').style.display = "block";
                    }
                } else {
                    document.getElementById('login').style.display = "none";
                    document.getElementById('info').style.display = "block";
                }
            } else {
                document.getElementById('home').style.display = "none";
                document.getElementById('today').style.display = "block";
            }
        } else {
            alert("이메일 형식으로 입력해주세요.");
        }
    } else {
        alert("이메일을 입력해주세요.");
    }
}

async function addInfo() {

    const num = document.getElementById('num').value;
    const name = document.getElementById('name').value;

    if (num != "" && name != "") {
        musicList.sort(() => Math.random() - 0.5);

        await setDoc(doc(db, id, "info"), {
            num: num,
            name: name,
            list: musicList
        });
        
        document.getElementById('home').style.display = "none";
        document.getElementById('today').style.display = "block";
    } else {
        alert("정보를 모두 입력해주세요.")
    }
}

async function addData() {
    await setDoc(doc(db, id, String(nowIndex)), {
        emotion: selectedEmotionE,
        like: selectedLikeE,
        atmosphere: atmosphere
    });

    if (nowIndex == 49) {
        document.getElementById('home').style.display = "none";
        document.getElementById('today').style.display = "none";
        document.getElementById('music').style.display = "none";

        document.getElementById('end').style.display = "block";
        audio = document.getElementById('$audio');
        audio.pause();
        audio.currentTime = 0;
    } else {
        nowIndex++;

        document.querySelector('.head').innerHTML = "곡 현황 " + String(nowIndex+1) + " / 50";

        document.getElementById('like').style.display = "block";
        document.getElementById('atmosphere').style.display = "none";

        if (savedData.length > nowIndex) {
            console.log(savedData.length);
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
        } else {
            selectedLike = null;
            atmosphere = [0, 0, 0];
            $atm1.value = atmosphere[0];
            $atm2.value = atmosphere[1];
            $atm3.value = atmosphere[2];
            document.querySelector(".goodbad").innerHTML = "";
            likes = document.querySelectorAll('.music-like');
            for (var i = 0; i < likes.length; i++) {
                if (likes[i].classList.length > 1) {
                    likes[i].classList.remove('music-like-active');
                }
            }
        }

        audio = document.getElementById('$audio');
        audio.pause();
        audio.src = './music/' + musicList[nowIndex];
        audio.currentTime = 0;
        audio.play();
    }
}