const worlds = document.querySelectorAll(".worlds");
const internationals = document.querySelectorAll(".internationals");
const regionals = document.querySelectorAll(".regionals");
const asiaEvent = document.querySelectorAll(".asia-event");
const koreanLeague = document.querySelectorAll(".korean-league");
const regionalLeague = document.querySelectorAll(".regional-league-event");
const jpChamps = document.querySelectorAll(".jp-championships");
const championsLeague = document.querySelectorAll(".champions-league");
const playersCup = document.querySelectorAll(".players-cup");
const nationals = document.querySelectorAll(".nationals");
const stadiumChallenge = document.querySelectorAll(".stadium-challenge");
const superTrainerShowdown = document.querySelectorAll(".super-trainer-showdown");
const specialEvent = document.querySelectorAll(".special-event");

function filterEvents() {
    var x = document.getElementById("mySelect").value;
    if (x === "all") {
    worlds.forEach((worlds) => {
        worlds.style.display = 'table-row';
        worlds.classList.remove('new-red-bg');
    });
    internationals.forEach((internationals) => {
        internationals.style.display = 'table-row';
        internationals.classList.remove('new-red-bg');
    });
    championsLeague.forEach((championsLeague) => {
        championsLeague.style.display = 'none';
    });
    regionals.forEach((regionals) => {
        regionals.style.display = 'table-row';
        regionals.classList.remove('new-red-bg');
    });
    asiaEvent.forEach((asiaEvent) => {
        asiaEvent.style.display = 'table-row';
        asiaEvent.classList.remove('new-red-bg');
    });
    playersCup.forEach((playersCup) => {
        playersCup.style.display = 'table-row';
        playersCup.classList.remove('new-red-bg');
    });
    nationals.forEach((nationals) => {
        nationals.style.display = 'table-row';
        nationals.classList.remove('new-red-bg');
    });
    stadiumChallenge.forEach((stadiumChallenge) => {
        stadiumChallenge.style.display = 'table-row';
        stadiumChallenge.classList.remove('new-red-bg');
    });
    superTrainerShowdown.forEach((superTrainerShowdown) => {
        superTrainerShowdown.style.display = 'table-row';
        superTrainerShowdown.classList.remove('new-red-bg');
    });
    specialEvent.forEach((specialEvent) => {
        specialEvent.style.display = 'table-row';
        specialEvent.classList.remove('new-red-bg');
    });
    regionalLeague.forEach((regionalLeague) => {
        regionalLeague.style.display = 'table-row';
        regionalLeague.classList.remove('new-red-bg');
    });
    } else if (x === "worlds") {
    worlds.forEach((worlds) => {
        worlds.style.display = 'table-row';
        worlds.classList.add('new-red-bg');
    });
    internationals.forEach((internationals) => {
        internationals.style.display = 'none';
    });
    regionalLeague.forEach((regionalLeague) => {
        regionalLeague.style.display = 'none';
    });
    championsLeague.forEach((championsLeague) => {
        championsLeague.style.display = 'none';
    });
    regionals.forEach((regionals) => {
        regionals.style.display = 'none';
    });
    asiaEvent.forEach((asiaEvent) => {
        asiaEvent.style.display = 'none';
    });
    playersCup.forEach((playersCup) => {
        playersCup.style.display = 'none';
    });
    nationals.forEach((nationals) => {
        nationals.style.display = 'none';
    });
    stadiumChallenge.forEach((stadiumChallenge) => {
        stadiumChallenge.style.display = 'none';
    });
    superTrainerShowdown.forEach((superTrainerShowdown) => {
        superTrainerShowdown.style.display = 'none';
    });
    specialEvent.forEach((specialEvent) => {
        specialEvent.style.display = 'none';
    });
    } else if (x === "internationals") {
    worlds.forEach((worlds) => {
        worlds.style.display = 'none';
    });
    internationals.forEach((internationals) => {
        internationals.style.display = 'table-row';
        internationals.classList.add('new-red-bg');
    });
    regionals.forEach((regionals) => {
        regionals.style.display = 'none';
    });
    regionalLeague.forEach((regionalLeague) => {
        regionalLeague.style.display = 'none';
    });
    championsLeague.forEach((championsLeague) => {
        championsLeague.style.display = 'none';
    });
    asiaEvent.forEach((asiaEvent) => {
        asiaEvent.style.display = 'none';
    });
    playersCup.forEach((playersCup) => {
        playersCup.style.display = 'none';
    });
    nationals.forEach((nationals) => {
        nationals.style.display = 'none';
    });
    stadiumChallenge.forEach((stadiumChallenge) => {
        stadiumChallenge.style.display = 'none';
    });
    superTrainerShowdown.forEach((superTrainerShowdown) => {
        superTrainerShowdown.style.display = 'none';
    });
    specialEvent.forEach((specialEvent) => {
        specialEvent.style.display = 'none';
    });
    } else if (x === "regionals") {
    worlds.forEach((worlds) => {
        worlds.style.display = 'none';
    });
    internationals.forEach((internationals) => {
        internationals.style.display = 'none';
    });
    regionals.forEach((regionals) => {
        regionals.style.display = 'table-row';
        regionals.classList.add('new-red-bg');
    });
    championsLeague.forEach((championsLeague) => {
        championsLeague.style.display = 'none';
    });
    asiaEvent.forEach((asiaEvent) => {
        asiaEvent.style.display = 'none';
    });
    regionalLeague.forEach((regionalLeague) => {
        regionalLeague.style.display = 'none';
    });
    playersCup.forEach((playersCup) => {
        playersCup.style.display = 'none';
    });
    nationals.forEach((nationals) => {
        nationals.style.display = 'none';
    });
    stadiumChallenge.forEach((stadiumChallenge) => {
        stadiumChallenge.style.display = 'none';
    });
    superTrainerShowdown.forEach((superTrainerShowdown) => {
        superTrainerShowdown.style.display = 'none';
    });
    specialEvent.forEach((specialEvent) => {
        specialEvent.style.display = 'none';
    });
    } else if (x === "asia-event") {
    worlds.forEach((worlds) => {
        worlds.style.display = 'none';
    });
    internationals.forEach((internationals) => {
        internationals.style.display = 'none';
    });
    asiaEvent.forEach((asiaEvent) => {
        asiaEvent.style.display = 'table-row';
        asiaEvent.classList.add('new-red-bg');
    });
    regionals.forEach((regionals) => {
        regionals.style.display = 'none';
    });
    playersCup.forEach((playersCup) => {
        playersCup.style.display = 'none';
    });
    nationals.forEach((nationals) => {
        nationals.style.display = 'none';
    });
    stadiumChallenge.forEach((stadiumChallenge) => {
        stadiumChallenge.style.display = 'none';
    });
    superTrainerShowdown.forEach((superTrainerShowdown) => {
        superTrainerShowdown.style.display = 'none';
    });
    specialEvent.forEach((specialEvent) => {
        specialEvent.style.display = 'none';
    });
    } else if (x === "korean-league") {
    worlds.forEach((worlds) => {
        worlds.style.display = 'none';
    });
    internationals.forEach((internationals) => {
        internationals.style.display = 'none';
    });
    asiaEvent.forEach((asiaEvent) => {
        asiaEvent.style.display = 'none';
    });
    championsLeague.forEach((championsLeague) => {
        championsLeague.style.display = 'none';
    });
    koreanLeague.forEach((koreanLeague) => {
        koreanLeague.style.display = 'table-row';
        koreanLeague.classList.add('new-red-bg');
    });
    regionals.forEach((regionals) => {
        regionals.style.display = 'none';
    });
    regionalLeague.forEach((regionalLeague) => {
        regionalLeague.style.display = 'none';
    });
    playersCup.forEach((playersCup) => {
        playersCup.style.display = 'none';
    });
    nationals.forEach((nationals) => {
        nationals.style.display = 'none';
    });
    stadiumChallenge.forEach((stadiumChallenge) => {
        stadiumChallenge.style.display = 'none';
    });
    superTrainerShowdown.forEach((superTrainerShowdown) => {
        superTrainerShowdown.style.display = 'none';
    });
    specialEvent.forEach((specialEvent) => {
        specialEvent.style.display = 'none';
    });
    } else if (x === "champions-league") {
    worlds.forEach((worlds) => {
        worlds.style.display = 'none';
    });
    internationals.forEach((internationals) => {
        internationals.style.display = 'none';
    });
    asiaEvent.forEach((asiaEvent) => {
        asiaEvent.style.display = 'none';
    });
    regionalLeague.forEach((regionalLeague) => {
        regionalLeague.style.display = 'none';
    });
    championsLeague.forEach((championsLeague) => {
        championsLeague.style.display = 'table-row';
        championsLeague.classList.add('new-red-bg');
    });
    regionals.forEach((regionals) => {
        regionals.style.display = 'none';
    });
    playersCup.forEach((playersCup) => {
        playersCup.style.display = 'none';
    });
    nationals.forEach((nationals) => {
        nationals.style.display = 'none';
    });
    stadiumChallenge.forEach((stadiumChallenge) => {
        stadiumChallenge.style.display = 'none';
    });
    superTrainerShowdown.forEach((superTrainerShowdown) => {
        superTrainerShowdown.style.display = 'none';
    });
    specialEvent.forEach((specialEvent) => {
        specialEvent.style.display = 'none';
    });
    } else if (x === "regional-league-event") {
    worlds.forEach((worlds) => {
        worlds.style.display = 'none';
    });
    internationals.forEach((internationals) => {
        internationals.style.display = 'none';
    });
    asiaEvent.forEach((asiaEvent) => {
        asiaEvent.style.display = 'none';
    });
    championsLeague.forEach((championsLeague) => {
        championsLeague.style.display = 'none';
    });
    regionalLeague.forEach((regionalLeague) => {
        regionalLeague.style.display = 'table-row';
        regionalLeague.classList.add('new-red-bg');
    });
    regionals.forEach((regionals) => {
        regionals.style.display = 'none';
    });
    playersCup.forEach((playersCup) => {
        playersCup.style.display = 'none';
    });
    nationals.forEach((nationals) => {
        nationals.style.display = 'none';
    });
    stadiumChallenge.forEach((stadiumChallenge) => {
        stadiumChallenge.style.display = 'none';
    });
    superTrainerShowdown.forEach((superTrainerShowdown) => {
        superTrainerShowdown.style.display = 'none';
    });
    specialEvent.forEach((specialEvent) => {
        specialEvent.style.display = 'none';
    });
    } else if (x === "jp-championships") {
    worlds.forEach((worlds) => {
        worlds.style.display = 'none';
    });
    internationals.forEach((internationals) => {
        internationals.style.display = 'none';
    });
    asiaEvent.forEach((asiaEvent) => {
        asiaEvent.style.display = 'none';
    });
    championsLeague.forEach((championsLeague) => {
        championsLeague.style.display = 'none';
    });
    jpChamps.forEach((jpChamps) => {
        jpChamps.style.display = 'table-row';
        jpChamps.classList.add('new-red-bg');
    });
    regionals.forEach((regionals) => {
        regionals.style.display = 'none';
    });
    playersCup.forEach((playersCup) => {
        playersCup.style.display = 'none';
    });
    nationals.forEach((nationals) => {
        nationals.style.display = 'none';
    });
    stadiumChallenge.forEach((stadiumChallenge) => {
        stadiumChallenge.style.display = 'none';
    });
    superTrainerShowdown.forEach((superTrainerShowdown) => {
        superTrainerShowdown.style.display = 'none';
    });
    specialEvent.forEach((specialEvent) => {
        specialEvent.style.display = 'none';
    });
    } else if (x === "players-cup") {
    worlds.forEach((worlds) => {
        worlds.style.display = 'none';
    });
    internationals.forEach((internationals) => {
        internationals.style.display = 'none';
    });
    championsLeague.forEach((championsLeague) => {
        championsLeague.style.display = 'none';
    });
    regionals.forEach((regionals) => {
        regionals.style.display = 'none';
    });
    regionalLeague.forEach((regionalLeague) => {
        regionalLeague.style.display = 'none';
    });
    asiaEvent.forEach((asiaEvent) => {
        asiaEvent.style.display = 'none';
    });
    playersCup.forEach((playersCup) => {
        playersCup.style.display = 'table-row';
        playersCup.classList.add('new-red-bg');
    });
    nationals.forEach((nationals) => {
        nationals.style.display = 'none';
    });
    stadiumChallenge.forEach((stadiumChallenge) => {
        stadiumChallenge.style.display = 'none';
    });
    superTrainerShowdown.forEach((superTrainerShowdown) => {
        superTrainerShowdown.style.display = 'none';
    });
    specialEvent.forEach((specialEvent) => {
        specialEvent.style.display = 'none';
    });
    } else if (x === "nationals") {
    worlds.forEach((worlds) => {
        worlds.style.display = 'none';
    });
    internationals.forEach((internationals) => {
        internationals.style.display = 'none';
    });
    regionalLeague.forEach((regionalLeague) => {
        regionalLeague.style.display = 'none';
    });
    championsLeague.forEach((championsLeague) => {
        championsLeague.style.display = 'none';
    });
    regionals.forEach((regionals) => {
        regionals.style.display = 'none';
    });
    asiaEvent.forEach((asiaEvent) => {
        asiaEvent.style.display = 'none';
    });
    playersCup.forEach((playersCup) => {
        playersCup.style.display = 'none';
    });
    nationals.forEach((nationals) => {
        nationals.style.display = 'table-row';
        nationals.classList.add('new-red-bg');
    });
    stadiumChallenge.forEach((stadiumChallenge) => {
        stadiumChallenge.style.display = 'none';
    });
    superTrainerShowdown.forEach((superTrainerShowdown) => {
        superTrainerShowdown.style.display = 'none';
    });
    specialEvent.forEach((specialEvent) => {
        specialEvent.style.display = 'none';
    });
    } else if (x === "stadium-challenge") {
    worlds.forEach((worlds) => {
        worlds.style.display = 'none';
    });
    internationals.forEach((internationals) => {
        internationals.style.display = 'none';
    });
    regionalLeague.forEach((regionalLeague) => {
        regionalLeague.style.display = 'none';
    });
    championsLeague.forEach((championsLeague) => {
        championsLeague.style.display = 'none';
    });
    regionals.forEach((regionals) => {
        regionals.style.display = 'none';
    });
    asiaEvent.forEach((asiaEvent) => {
        asiaEvent.style.display = 'none';
    });
    playersCup.forEach((playersCup) => {
        playersCup.style.display = 'none';
    });
    nationals.forEach((nationals) => {
        nationals.style.display = 'none';
    });
    stadiumChallenge.forEach((stadiumChallenge) => {
        stadiumChallenge.style.display = 'table-row';
        stadiumChallenge.classList.add('new-red-bg');
    });
    superTrainerShowdown.forEach((superTrainerShowdown) => {
        superTrainerShowdown.style.display = 'none';
    });
    specialEvent.forEach((specialEvent) => {
        specialEvent.style.display = 'none';
    });
    } else if (x === "super-trainer-showdown") {
    worlds.forEach((worlds) => {
        worlds.style.display = 'none';
    });
    regionalLeague.forEach((regionalLeague) => {
        regionalLeague.style.display = 'none';
    });
    internationals.forEach((internationals) => {
        internationals.style.display = 'none';
    });
    championsLeague.forEach((championsLeague) => {
        championsLeague.style.display = 'none';
    });
    regionals.forEach((regionals) => {
        regionals.style.display = 'none';
    });
    asiaEvent.forEach((asiaEvent) => {
        asiaEvent.style.display = 'none';
    });
    playersCup.forEach((playersCup) => {
        playersCup.style.display = 'none';
    });
    nationals.forEach((nationals) => {
        nationals.style.display = 'none';
    });
    stadiumChallenge.forEach((stadiumChallenge) => {
        stadiumChallenge.style.display = 'none';
    });
    superTrainerShowdown.forEach((superTrainerShowdown) => {
        superTrainerShowdown.style.display = 'table-row';
        superTrainerShowdown.classList.add('new-red-bg');
    });
    specialEvent.forEach((specialEvent) => {
        specialEvent.style.display = 'none';
    });
    } else if (x === "special-event") {
    worlds.forEach((worlds) => {
        worlds.style.display = 'none';
    });
    regionalLeague.forEach((regionalLeague) => {
        regionalLeague.style.display = 'none';
    });
    internationals.forEach((internationals) => {
        internationals.style.display = 'none';
    });
    championsLeague.forEach((championsLeague) => {
        championsLeague.style.display = 'none';
    });
    regionals.forEach((regionals) => {
        regionals.style.display = 'none';
    });
    asiaEvent.forEach((asiaEvent) => {
        asiaEvent.style.display = 'none';
    });
    playersCup.forEach((playersCup) => {
        playersCup.style.display = 'none';
    });
    nationals.forEach((nationals) => {
        nationals.style.display = 'none';
    });
    stadiumChallenge.forEach((stadiumChallenge) => {
        stadiumChallenge.style.display = 'none';
    });
    superTrainerShowdown.forEach((superTrainerShowdown) => {
        superTrainerShowdown.style.display = 'none';
    });
    specialEvent.forEach((specialEvent) => {
        specialEvent.style.display = 'table-row';
        specialEvent.classList.add('new-red-bg');
    });
    }
}