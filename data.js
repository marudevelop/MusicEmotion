var musicList = ['sokodomo - 회전목마.mp3',
'숀(SHAUN) - Way Back Home.mp3',
'AKMU(악뮤) - 후라이의꿈.mp3',
'DAY6(데이식스) - 한 페이지가 될 수 있게.mp3',
'박재정 - 헤어지자 말해요.mp3',
'10cm - 그라데이션.mp3',
'홍진영 - 산다는 건.mp3',
'장윤정 - 초혼.mp3',
'창모(CHANGMO) - Selfmade Orange.mp3',
'YB(윤도현밴드) - 나는 나비.mp3',
'이클립스 - 소나기.mp3',
'10cm - 봄눈.mp3',
'TWS (투어스) - 첫 만남은 계획대로 되지 않아.mp3',
'너드커넥션 - 그대만 있다면.mp3',
'Xdinary Heroes - 소년만화.mp3',
'멜로망스 - 취중고백.mp3',
'2NE1 - Come Back Home.mp3',
'나상현씨밴드 - FILM.mp3',
'우효 - 민들레.mp3',
'aespa - Supernova.mp3',
'QWER - 고민중독.mp3',
'ILLIT(아일릿) - Magnetic.mp3',
'Crush - 미안해 미워해 사랑해.mp3',
'로이킴 - 봄봄봄.mp3',
'부석순(SEVENTEEN) - 파이팅 해야지.mp3',
'지코 (ZICO) - SPOT!.mp3',
'태양(TAEYANG) - 눈, 코, 입.mp3',
'MINO(송민호) - 로켓.mp3',
'10cm - 부동의 첫사랑.mp3',
'박현빈 - 곤드레만드레.mp3',
'BIGBANG(빅뱅) - IF YOU.mp3',
'에디킴 - 너사용법.mp3',
'NewJeans (뉴진스) - How Sweet.mp3',
'잔나비 - 주저하는 연인들을 위해.mp3',
'BE_O (비오) - Counting Stars (Feat.mp3',
'비비(BIBI) - 밤양갱.mp3',
'으뜨거따시(하하, 자이언티) - 스폰서.mp3',
'시나위 - 크게 라디오를 켜고.mp3',
'10cm, BIG Naughty(서동현) - 딱 10cm만.mp3',
'볼빨간사춘기 - 여행.mp3',
'BIG Naughty(서동현) - 사랑이라 믿었던 것들은.mp3',
'AKMU(악뮤) - DINOSAUR.mp3',
'BLACKPINK - Lovesick Girls.mp3',
'Glen Check - 60_s Cardin.mp3',
'다이나믹듀오 - 불면증.mp3',
'박효신 - 흩어진 나날들.mp3',
'볼빨간사춘기 - Love story.mp3',
'영탁 - 찐이야.mp3',
'아이유(IU) - Love wins all.mp3',
'손준희(지환) - 슬픈 초대장.mp3'];

var id;

var selectedPN;
var selectedPNE;

var emoziP = ['<p id="emoticon" style="margin: 0px; font-size: 60px;">😊</p>행복', '<p id="emoticon" style="margin: 0px; font-size: 60px;">😍</p>사랑', '<p id="emoticon" style="margin: 0px; font-size: 60px;">😆</p>신남'];
var emoziN = ['<p id="emoticon" style="margin: 0px; font-size: 60px;">😢</p>슬픔', '<p id="emoticon" style="margin: 0px; font-size: 60px;">😨</p>불안', '<p id="emoticon" style="margin: 0px; font-size: 60px;">😡</p>분노'];

var selectedEmotion;
var selectedEmotionE;

var selectedLike;
var selectedLikeE;

var atmosphere = [0, 0, 0];

var firstIndex;
var nowIndex;

var savedData = [];