const originalHeroes = [
  { name: "Tugev Tom", role: "tank", hp: 120, power: 25 },
  { name: "Kaitsev Kai", role: "tank", hp: 110, power: 20 },
  { name: "Ravi-Riina", role: "raviarst", hp: 80, power: 10 },
  { name: "Sära-Siim", role: "raviarst", hp: 75, power: 12 },
  { name: "Noole-Naima", role: "ründaja", hp: 90, power: 30 },
  { name: "Mõõga-Mari", role: "ründaja", hp: 95, power: 35 },
];

const originalBoss = {
  name: "Varju-Kuningas",
  hp: 200,
  maxHp: 200,
};

const heroListEl = document.getElementById("heroList");
const heroCountEl = document.getElementById("heroCount");
const teamPowerEl = document.getElementById("teamPower");
const logEl = document.getElementById("log");
const roleSelect = document.getElementById("roleSelect");
const bossNameEl = document.getElementById("bossName");
const bossHpEl = document.getElementById("bossHp");
const bossBarInner = document.getElementById("bossBarInner");

appendLog(message + "\n")
logEl.scrollTop = logEl.scrollHeight;
function appendLog(message) {
    TODO
}

renderHeroes(list)