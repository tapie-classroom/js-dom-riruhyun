let wins = 0;
let losses = 0;
let draws = 0;
let isInf = false,
  interval;

function play(playerChoice) {
  const choices = ["가위", "바위", "보"];
  const emoji = ["✌️", "✊", "✋"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  // 결과 판정
  if (playerChoice === computerChoice) {
    result = "무승부!";
    draws++;
  } else if (
    (playerChoice === "가위" && computerChoice === "보") ||
    (playerChoice === "바위" && computerChoice === "가위") ||
    (playerChoice === "보" && computerChoice === "바위")
  ) {
    result = "승리!";
    wins++;
    createSnowEffect();
  } else {
    result = "패배!";
    losses++;
  }

  // 결과 표시
  document.getElementById("result").innerHTML = `당신: ${
    emoji[choices.indexOf(playerChoice)]
  } vs 컴퓨터: ${emoji[choices.indexOf(computerChoice)]}<br>${result}`;

  // 점수 업데이트
  document.getElementById(
    "score"
  ).innerHTML = `승: ${wins} | 패: ${losses} | 무: ${draws}`;
}

function createSnowEffect() {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const snowflake = document.createElement("div");
      snowflake.className = "snow";
      snowflake.textContent = "승리!";
      snowflake.style.left = Math.random() * 100 + "vw";
      snowflake.style.animationDuration = Math.random() * 2 + 2 + "s"; // 2-4초 사이의 랜덤한 시간
      document.body.appendChild(snowflake);

      snowflake.addEventListener("animationend", () => {
        snowflake.remove();
      });
    }, i * 200);
  }
}

function clickInf() {
  isInf = !isInf;
  const button = document.getElementById("clickInf");

  if (isInf) {
    interval = setInterval(() => {
      document.getElementsByTagName("button")[0].click();
    }, 20);
    button.textContent = "중지";
  } else {
    clearInterval(interval);
    button.textContent = "과연 가위바위보는 진짜 33%인가";
  }
}
