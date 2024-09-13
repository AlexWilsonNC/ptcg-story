const worlds = document.querySelectorAll(".worlds");
const internationals = document.querySelectorAll(".internationals");
const regionals = document.querySelectorAll(".regionals");
const asiaEvent = document.querySelectorAll(".asia-event");
// const koreanLeague = document.querySelectorAll(".korean-league");
const regionalLeague = document.querySelectorAll(".regional-league-event");
const countryChampionships = document.querySelectorAll(".country-championships");
const championsLeague = document.querySelectorAll(".champions-league");
const playersCup = document.querySelectorAll(".players-cup");
const nationals = document.querySelectorAll(".nationals");
const stadiumChallenge = document.querySelectorAll(".stadium-challenge");
const superTrainerShowdown = document.querySelectorAll(".super-trainer-showdown");
const specialEvent = document.querySelectorAll(".special-event");
const retroEvent = document.querySelectorAll(".retro-event");
const worldstwo = document.querySelectorAll(".worlds-oh-two");

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
            championsLeague.style.display = 'table-row';
            championsLeague.classList.remove('new-red-bg');
        });
        retroEvent.forEach((retroEvent) => {
            retroEvent.style.display = 'table-row';
            retroEvent.classList.remove('new-red-bg');
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
        countryChampionships.forEach((countryChampionships) => {
            countryChampionships.style.display = 'table-row';
            countryChampionships.classList.remove('new-red-bg');
        });
    }

    if (x === "all-tpci") {
        worlds.forEach((worlds) => {
            worlds.style.display = 'table-row';
            worlds.classList.add('new-red-bg');
        });
        internationals.forEach((internationals) => {
            internationals.style.display = 'table-row';
            internationals.classList.add('new-red-bg');
        });
        championsLeague.forEach((championsLeague) => {
            championsLeague.style.display = 'none';
        });
        regionals.forEach((regionals) => {
            regionals.style.display = 'table-row';
            regionals.classList.add('new-red-bg');
        });
        asiaEvent.forEach((asiaEvent) => {
            asiaEvent.style.display = 'none';
        });
        retroEvent.forEach((retroEvent) => {
            retroEvent.style.display = 'none';
        });
        regionalLeague.forEach((regionalLeague) => {
            regionalLeague.style.display = 'none';
        });
        countryChampionships.forEach((countryChampionships) => {
            countryChampionships.style.display = 'none';
        });
        playersCup.forEach((playersCup) => {
            playersCup.style.display = 'table-row';
            playersCup.classList.add('new-red-bg');
        });
        nationals.forEach((nationals) => {
            nationals.style.display = 'table-row';
            nationals.classList.add('new-red-bg');
        });
        stadiumChallenge.forEach((stadiumChallenge) => {
            stadiumChallenge.style.display = 'table-row';
            stadiumChallenge.classList.add('new-red-bg');
        });
        superTrainerShowdown.forEach((superTrainerShowdown) => {
            superTrainerShowdown.style.display = 'table-row';
            superTrainerShowdown.classList.add('new-red-bg');
        });
        specialEvent.forEach((specialEvent) => {
            specialEvent.style.display = 'table-row';
            specialEvent.classList.add('new-red-bg');
        });
    }

    if (x === "all-wotc") {
        internationals.forEach((internationals) => {
            internationals.style.display = 'none';
        });
        worlds.forEach((worlds) => {
            worlds.style.display = 'none';
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
        retroEvent.forEach((retroEvent) => {
            retroEvent.style.display = 'none';
        });
        regionalLeague.forEach((regionalLeague) => {
            regionalLeague.style.display = 'none';
        });
        countryChampionships.forEach((countryChampionships) => {
            countryChampionships.style.display = 'none';
        });
        playersCup.forEach((playersCup) => {
            playersCup.style.display = 'none';
        });
        nationals.forEach((nationals) => {
            nationals.style.display = 'none';
        });
        specialEvent.forEach((specialEvent) => {
            specialEvent.style.display = 'none';
        });
        stadiumChallenge.forEach((stadiumChallenge) => {
            stadiumChallenge.style.display = 'table-row';
            stadiumChallenge.classList.add('new-red-bg');
        });
        superTrainerShowdown.forEach((superTrainerShowdown) => {
            superTrainerShowdown.style.display = 'table-row';
            superTrainerShowdown.classList.add('new-red-bg');
        });
        worldstwo.forEach((worldstwo) => {
            worldstwo.style.display = 'table-row';
            worldstwo.classList.add('new-red-bg');
        });
    }

    else if (x === "worlds") {
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
        retroEvent.forEach((retroEvent) => {
            retroEvent.style.display = 'none';
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
        countryChampionships.forEach((countryChampionships) => {
            countryChampionships.style.display = 'none';
        });
    }

    else if (x === "internationals") {
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
        retroEvent.forEach((retroEvent) => {
            retroEvent.style.display = 'none';
        });
        countryChampionships.forEach((countryChampionships) => {
            countryChampionships.style.display = 'none';
        });
    }

    else if (x === "regionals") {
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
        retroEvent.forEach((retroEvent) => {
            retroEvent.style.display = 'none';
        });
        countryChampionships.forEach((countryChampionships) => {
            countryChampionships.style.display = 'none';
        });
    }

    else if (x === "asia-event") {
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
        retroEvent.forEach((retroEvent) => {
            retroEvent.style.display = 'none';
        });
    }

    // else if (x === "korean-league") {
    // worlds.forEach((worlds) => {
    //     worlds.style.display = 'none';
    // });
    // internationals.forEach((internationals) => {
    //     internationals.style.display = 'none';
    // });
    // asiaEvent.forEach((asiaEvent) => {
    //     asiaEvent.style.display = 'none';
    // });
    // championsLeague.forEach((championsLeague) => {
    //     championsLeague.style.display = 'none';
    // });
    // koreanLeague.forEach((koreanLeague) => {
    //     koreanLeague.style.display = 'table-row';
    //     koreanLeague.classList.add('new-red-bg');
    // });
    // regionals.forEach((regionals) => {
    //     regionals.style.display = 'none';
    // });
    // regionalLeague.forEach((regionalLeague) => {
    //     regionalLeague.style.display = 'none';
    // });
    // playersCup.forEach((playersCup) => {
    //     playersCup.style.display = 'none';
    // });
    // nationals.forEach((nationals) => {
    //     nationals.style.display = 'none';
    // });
    // stadiumChallenge.forEach((stadiumChallenge) => {
    //     stadiumChallenge.style.display = 'none';
    // });
    // superTrainerShowdown.forEach((superTrainerShowdown) => {
    //     superTrainerShowdown.style.display = 'none';
    // });
    // specialEvent.forEach((specialEvent) => {
    //     specialEvent.style.display = 'none';
    // });
    // retroEvent.forEach((retroEvent) => {
    //     retroEvent.style.display = 'none';
    // });
    // countryChampionships.forEach((countryChampionships) => {
    //     countryChampionships.style.display = 'none';
    // });
    // }

    else if (x === "champions-league") {
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
        retroEvent.forEach((retroEvent) => {
            retroEvent.style.display = 'none';
        });
        countryChampionships.forEach((countryChampionships) => {
            countryChampionships.style.display = 'none';
        });
    }

    else if (x === "regional-league-event") {
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
        retroEvent.forEach((retroEvent) => {
            retroEvent.style.display = 'none';
        });
        countryChampionships.forEach((countryChampionships) => {
            countryChampionships.style.display = 'none';
        });
    }

    else if (x === "country-championships") {
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
        countryChampionships.forEach((countryChampionships) => {
            countryChampionships.style.display = 'table-row';
            countryChampionships.classList.add('new-red-bg');
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
        retroEvent.forEach((retroEvent) => {
            retroEvent.style.display = 'none';
        });
    }

    else if (x === "players-cup") {
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
        retroEvent.forEach((retroEvent) => {
            retroEvent.style.display = 'none';
        });
        countryChampionships.forEach((countryChampionships) => {
            countryChampionships.style.display = 'none';
        });
    }

    else if (x === "nationals") {
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
        retroEvent.forEach((retroEvent) => {
            retroEvent.style.display = 'none';
        });
        countryChampionships.forEach((countryChampionships) => {
            countryChampionships.style.display = 'none';
        });
    }

    else if (x === "stadium-challenge") {
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
        retroEvent.forEach((retroEvent) => {
            retroEvent.style.display = 'none';
        });
        countryChampionships.forEach((countryChampionships) => {
            countryChampionships.style.display = 'none';
        });
    }

    else if (x === "super-trainer-showdown") {
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
        retroEvent.forEach((retroEvent) => {
            retroEvent.style.display = 'none';
        });
        countryChampionships.forEach((countryChampionships) => {
            countryChampionships.style.display = 'none';
        });
    }

    else if (x === "special-event") {
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
        retroEvent.forEach((retroEvent) => {
            retroEvent.style.display = 'none';
        });
        countryChampionships.forEach((countryChampionships) => {
            countryChampionships.style.display = 'none';
        });
        specialEvent.forEach((specialEvent) => {
            specialEvent.style.display = 'table-row';
            specialEvent.classList.add('new-red-bg');
        });
    }

    else if (x === "retro-event") {
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
            specialEvent.style.display = 'none';
        });
        countryChampionships.forEach((countryChampionships) => {
            countryChampionships.style.display = 'none';
        });
        retroEvent.forEach((retroEvent) => {
            retroEvent.style.display = 'table-row';
            retroEvent.classList.add('new-red-bg');
        });
    }
}

const eventFlags = document.querySelectorAll(".tournament-flags");

eventFlags.forEach(flag => {
    const hoveredFlag = flag.closest('.tournament-flags-container').querySelector('.country-name-tournaments');

    flag.closest('.tournament-flags-container').addEventListener('mouseenter", function() {
        if (flag.getAttribute('src').includes('argentina')) {
            hoveredFlag.textContent = 'Argentina (Latin America)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('australia')) {
            hoveredFlag.textContent = 'Australia (Oceania)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('austria')) {
            hoveredFlag.textContent = 'Austria (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('belarus')) {
            hoveredFlag.textContent = 'Belarus (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('belgium')) {
            hoveredFlag.textContent = 'Belgium (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('brazil')) {
            hoveredFlag.textContent = 'Brazil (Latin America)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('canada')) {
            hoveredFlag.textContent = 'Canada (North America)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('chile')) {
            hoveredFlag.textContent = 'Chile (Latin America)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('china')) {
            hoveredFlag.textContent = 'China (Asia-Pacific)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('colombia')) {
            hoveredFlag.textContent = 'Colombia (Latin America)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('croatia')) {
            hoveredFlag.textContent = 'Croatia (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('czech-republic')) {
            hoveredFlag.textContent = 'Czechia (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('denmark')) {
            hoveredFlag.textContent = 'Denmark (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('el-salvador')) {
            hoveredFlag.textContent = 'El Salvador (Latin America)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('finland')) {
            hoveredFlag.textContent = 'Finland (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('france')) {
            hoveredFlag.textContent = 'France (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('germany')) {
            hoveredFlag.textContent = 'Germany (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('greece')) {
            hoveredFlag.textContent = 'Greece (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('hong-kong')) {
            hoveredFlag.textContent = 'Hong Kong (Asia-Pacific)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('indonesia')) {
            hoveredFlag.textContent = 'Indonesia (Asia-Pacific)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('ireland')) {
            hoveredFlag.textContent = 'Ireland (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('isreal')) {
            hoveredFlag.textContent = 'Israel (Middle East-South Africa)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('italy')) {
            hoveredFlag.textContent = 'Italy (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('japan')) {
            hoveredFlag.textContent = 'Japan (Asia-Pacific)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('korea')) {
            hoveredFlag.textContent = 'South Korea (Asia-Pacific)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('malaysia')) {
            hoveredFlag.textContent = 'Malaysia (Asia-Pacific)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('malta')) {
            hoveredFlag.textContent = 'Malta (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('mexico')) {
            hoveredFlag.textContent = 'Mexico (Latin America)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('moroco')) {
            hoveredFlag.textContent = 'Moroco (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('netherlands')) {
            hoveredFlag.textContent = 'Netherlands (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('new-zealand')) {
            hoveredFlag.textContent = 'New Zealand (Oceania)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('nicaragua')) {
            hoveredFlag.textContent = 'Nicaragua (Latin America)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('norway')) {
            hoveredFlag.textContent = 'Norway (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('peru')) {
            hoveredFlag.textContent = 'Peru (Latin America)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('philippines')) {
            hoveredFlag.textContent = 'Philippines (Asia-Pacific)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('poland')) {
            hoveredFlag.textContent = 'Poland (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('portugal')) {
            hoveredFlag.textContent = 'Portugal (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('puerto-rico')) {
            hoveredFlag.textContent = 'Puerto Rico (North America)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('russia')) {
            hoveredFlag.textContent = 'Russia (Russia)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('singapore')) {
            hoveredFlag.textContent = 'Singapore (Asia-Pacific)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('slovakia')) {
            hoveredFlag.textContent = 'Slovakia (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('south-africa')) {
            hoveredFlag.textContent = 'South Africa (Middle East-South Africa)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('spain')) {
            hoveredFlag.textContent = 'Spain (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('sweden')) {
            hoveredFlag.textContent = 'Sweden (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('switzerland')) {
            hoveredFlag.textContent = 'Switzerland (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('taiwan')) {
            hoveredFlag.textContent = 'Taiwan (Asia-Pacific)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('thailand')) {
            hoveredFlag.textContent = 'Thailand (Asia-Pacific)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('uk')) {
            hoveredFlag.textContent = 'United Kingdom (Europe)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('usa')) {
            hoveredFlag.textContent = 'USA (North America)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('unknown')) {
            hoveredFlag.textContent = 'Unknown';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('wifi')) {
            hoveredFlag.textContent = 'Online (PTCGO)';
            hoveredFlag.style.display = 'block';
        }
        if (flag.getAttribute('src').includes('globe')) {
            hoveredFlag.textContent = 'Global Events';
            hoveredFlag.style.display = 'block';
        }
    });

    flag.closest('.tournament-flags-container').addEventListener('mouseleave", function() {
        hoveredFlag.style.display = 'none';
    });
})