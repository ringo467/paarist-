// -------------------------------------------------------------
// Andmed: kangelased (objektid massiivis) ja boss
// -------------------------------------------------------------
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

// Mängu jooksul muutuvad andmed:
let heroes = []; // täidetakse resetTeam() sees
let boss = { ...originalBoss }; // koopia bossist

// -------------------------------------------------------------
// Viited DOM elementidele
// -------------------------------------------------------------
const heroListEl = document.getElementById("heroList");
const heroCountEl = document.getElementById("heroCount");
const teamPowerEl = document.getElementById("teamPower");
const logEl = document.getElementById("log");
const roleSelect = document.getElementById("roleSelect");
const bossNameEl = document.getElementById("bossName");
const bossHpEl = document.getElementById("bossHp");
const bossBarInner = document.getElementById("bossBarInner");

// -------------------------------------------------------------
// ÕPILANE: kirjuta allolevate funktsioonide sisu
// -------------------------------------------------------------

// appendLog(message)
//  - lisa logEl lõppu uus rida (message + "\n")
//  - võid pärast lisamist kerida logi alla: logEl.scrollTop = logEl.scrollHeight;
function appendLog(message) {
  logEl.textContent += message + "\n";
  logEl.scrollTop = logEl.scrollHeight;
}

// renderHeroes(list)
//  - tühjenda heroListEl (innerHTML = "")
//  - kasuta list.forEach(hero => { ... });
//    - loo iga kangelase jaoks div.hero-card nt  const card = document.createElement("div");
//    - lisa sinna nimi, roll, hp ja power nt  card.className = "hero-card";
// - kui kõik osad on loodud tuleb need lisada üksteise sisse
// nt        statsEl.appendChild(hpSpan);
//   statsEl.appendChild(powerSpan);
//   card.appendChild(nameEl);
//   card.appendChild(roleEl);
//   card.appendChild(statsEl);
//  - heroCountEl.textContent = list.length;
function renderHeroes(list) {
  heroListEl.innerHTML = "";
  list.forEach(hero => {

  })
}

// renderBoss()
//  - uuenda bossNameEl.textContent = boss.name;
//  - uuenda bossHpEl.textContent = "HP: " + boss.hp;
//  - arvuta protsent: (boss.hp / boss.maxHp) * 100
//  - sea  bossBarInner.style.width = Math.max(0, Math.min(100, percent)) + "%";
//  - kui boss.hp <= 0 → võid lisada logisse „Boss on alistatud!”
function renderBoss() {
  // TODO
}

// showAllHeroes()
//  - heroes = koopia originalHeroes-st (näiteks originalHeroes.map(hero => ({...hero})))
//  - renderHeroes(heroes)
//  - renderBoss()
//  - appendLog("Kuvame kõik kangelased")
function showAllHeroes() {
  // TODO
}

// filterByRole()
//  - const value = roleSelect.value;
//  - kui value === "all" → kutsu showAllHeroes()
//  - muidu:
//      const filtered = heroes.filter(hero => hero.role === value);
//      renderHeroes(filtered);
//      appendLog("Filtreerime rolli järgi: " + value);
function filterByRole() {
  // TODO
}

// boostTeam()
//  - suurenda iga heroes elemendi hp väärtust 10 võrra (forEach)
//  - seejärel renderHeroes(heroes)
//  - appendLog("Lisatud +10 HP kõigile kangelastele");
function boostTeam() {
  // TODO
}

// calcTeamPower(list)
//  - kasuta reduce, et liita kokku list[] power väärtused
//  - kui list on tühi, tagasta 0
function calcTeamPower(list) {
  // TODO
}

// showTeamPower()
//  - arvuta kogujõud heroes massiivist kasutades calcTeamPower(heroes)
//  - kuva teamPowerEl elemendis
//  - appendLog("Meeskonna kogujõud: " + power);
function showTeamPower() {
  // TODO
}

// resetTeam()
//  - taasta heroes koopia originalHeroes-st
//  - taasta boss = koopia originalBoss-st
//  - teamPowerEl.textContent = "0";
//  - logEl.textContent = "";
//  - renderHeroes(heroes);
//  - renderBoss();
//  - appendLog("Taastasime algse meeskonna ja bossi");
function resetTeam() {
  // TODO
}

// attackBoss()
//  - leia ründajad: const attackers = heroes.filter(h => h.role === "ründaja");
//  - leia nende kogujõud: kasuta calcTeamPower(attackers)
//  - vähenda boss.hp väärtust selle kogujõu võrra (mitte alla 0)
//  - kutsu renderBoss()
//  - appendLog("Ründajad tegid bossile " + dmg + " kahju");
function attackBoss() {
  // TODO
}

// healTanks()
//  - käi heroes läbi forEach-iga
//  - kui hero.role === "tank" → hero.hp = hero.hp + 15;
//  - renderHeroes(heroes);
//  - appendLog("Raviarstid ravisid tanke (+15 HP)");
function healTanks() {
  // TODO
}

// -------------------------------------------------------------
// Soovi korral: automaatne algseis
// -------------------------------------------------------------
// Õpetaja võib jätta lahti, et õpilane kutsub ise resetTeam(),
// või kohe mängu alguses aktiveerida:
//
// resetTeam();