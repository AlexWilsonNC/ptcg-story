const yr24 = document.querySelectorAll(".year-2024");
const yr23 = document.querySelectorAll(".year-2023");
const yr22 = document.querySelectorAll(".year-2022");
const yr21 = document.querySelectorAll(".year-2021");
const yr20 = document.querySelectorAll(".year-2020");
const yr19 = document.querySelectorAll(".year-2019");
const yr18 = document.querySelectorAll(".year-2018");
const yr17 = document.querySelectorAll(".year-2017");
const yr16 = document.querySelectorAll(".year-2016");
const yr15 = document.querySelectorAll(".year-2015");
const yr14 = document.querySelectorAll(".year-2014");
const yr13 = document.querySelectorAll(".year-2013");
const yr12 = document.querySelectorAll(".year-2012");
const yr11 = document.querySelectorAll(".year-2011");
const yr10 = document.querySelectorAll(".year-2010");
const yr09 = document.querySelectorAll(".year-2009");
const yr08 = document.querySelectorAll(".year-2008");
const yr07 = document.querySelectorAll(".year-2007");
const yr06 = document.querySelectorAll(".year-2006");
const yr05 = document.querySelectorAll(".year-2005");
const yr04 = document.querySelectorAll(".year-2004");
const yr03 = document.querySelectorAll(".year-2003");
const yr02 = document.querySelectorAll(".year-2002");
const yr01 = document.querySelectorAll(".year-2001");
const yr00 = document.querySelectorAll(".year-2000");
// const yr99 = document.querySelectorAll(".year-1999");

function filterEventsByTime() {
    var x = document.getElementById("mySelect2").value;
    if (x === "all") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'table-row';
            yr24.classList.remove('new-red-bg');
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'table-row';
            yr23.classList.remove('new-red-bg');
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'table-row';
            yr22.classList.add('new-red-bg');
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'table-row';
            yr21.classList.remove('new-red-bg');
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'table-row';
            yr20.classList.add('new-red-bg');
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'table-row';
            yr19.classList.add('new-red-bg');
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'table-row';
            yr18.classList.add('new-red-bg');
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'table-row';
            yr17.classList.add('new-red-bg');
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'table-row';
            yr16.classList.add('new-red-bg');
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'table-row';
            yr15.classList.add('new-red-bg');
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'table-row';
            yr14.classList.add('new-red-bg');
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'table-row';
            yr13.classList.add('new-red-bg');
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'table-row';
            yr12.classList.add('new-red-bg');
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'table-row';
            yr11.classList.add('new-red-bg');
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'table-row';
            yr10.classList.add('new-red-bg');
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'table-row';
            yr09.classList.add('new-red-bg');
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'table-row';
            yr08.classList.add('new-red-bg');
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'table-row';
            yr07.classList.add('new-red-bg');
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'table-row';
            yr06.classList.add('new-red-bg');
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'table-row';
            yr05.classList.add('new-red-bg');
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'table-row';
            yr04.classList.add('new-red-bg');
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'table-row';
            yr03.classList.add('new-red-bg');
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'table-row';
            yr02.classList.add('new-red-bg');
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'table-row';
            yr01.classList.add('new-red-bg');
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'table-row';
            yr00.classList.add('new-red-bg');
        });
    } else if (x === "2024") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'table-row';
            yr24.classList.remove('new-red-bg');
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2023") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'table-row';
            yr23.classList.add('new-red-bg');
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2022") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'table-row';
            yr22.classList.add('new-red-bg');
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2021") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'table-row';
            yr21.classList.remove('new-red-bg');
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2020") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'table-row';
            yr20.classList.add('new-red-bg');
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2019") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'table-row';
            yr19.classList.add('new-red-bg');
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2018") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'table-row';
            yr18.classList.add('new-red-bg');
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2017") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'table-row';
            yr17.classList.add('new-red-bg');
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2016") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'table-row';
            yr16.classList.add('new-red-bg');
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2015") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'table-row';
            yr15.classList.add('new-red-bg');
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2014") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'table-row';
            yr14.classList.add('new-red-bg');
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2013") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'table-row';
            yr13.classList.add('new-red-bg');
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2012") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'table-row';
            yr12.classList.add('new-red-bg');
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2011") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'table-row';
            yr11.classList.add('new-red-bg');
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2010") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'table-row';
            yr10.classList.add('new-red-bg');
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2009") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'table-row';
            yr09.classList.add('new-red-bg');
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2008") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'table-row';
            yr08.classList.add('new-red-bg');
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2007") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'table-row';
            yr07.classList.add('new-red-bg');
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2006") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'table-row';
            yr06.classList.add('new-red-bg');
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2005") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'table-row';
            yr05.classList.add('new-red-bg');
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2004") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'table-row';
            yr04.classList.add('new-red-bg');
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2003") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'table-row';
            yr03.classList.add('new-red-bg');
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2002") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'table-row';
            yr02.classList.add('new-red-bg');
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2001") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'table-row';
            yr01.classList.add('new-red-bg');
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'none';
        });
    } else if (x === "2000") {
        yr24.forEach((yr24) => {
            yr24.style.display = 'none';
        });
        yr23.forEach((yr23) => {
            yr23.style.display = 'none';
        });
        yr22.forEach((yr22) => {
            yr22.style.display = 'none';
        });
        yr21.forEach((yr21) => {
            yr21.style.display = 'none';
        });
        yr20.forEach((yr20) => {
            yr20.style.display = 'none';
        });
        yr19.forEach((yr19) => {
            yr19.style.display = 'none';
        });
        yr18.forEach((yr18) => {
            yr18.style.display = 'none';
        });
        yr17.forEach((yr17) => {
            yr17.style.display = 'none';
        });
        yr16.forEach((yr16) => {
            yr16.style.display = 'none';
        });
        yr15.forEach((yr15) => {
            yr15.style.display = 'none';
        });
        yr14.forEach((yr14) => {
            yr14.style.display = 'none';
        });
        yr13.forEach((yr13) => {
            yr13.style.display = 'none';
        });
        yr12.forEach((yr12) => {
            yr12.style.display = 'none';
        });
        yr11.forEach((yr11) => {
            yr11.style.display = 'none';
        });
        yr10.forEach((yr10) => {
            yr10.style.display = 'none';
        });
        yr09.forEach((yr09) => {
            yr09.style.display = 'none';
        });
        yr08.forEach((yr08) => {
            yr08.style.display = 'none';
        });
        yr07.forEach((yr07) => {
            yr07.style.display = 'none';
        });
        yr06.forEach((yr06) => {
            yr06.style.display = 'none';
        });
        yr05.forEach((yr05) => {
            yr05.style.display = 'none';
        });
        yr04.forEach((yr04) => {
            yr04.style.display = 'none';
        });
        yr03.forEach((yr03) => {
            yr03.style.display = 'none';
        });
        yr02.forEach((yr02) => {
            yr02.style.display = 'none';
        });
        yr01.forEach((yr01) => {
            yr01.style.display = 'none';
        });
        yr00.forEach((yr00) => {
            yr00.style.display = 'table-row';
            yr00.classList.add('new-red-bg');
        });
    }
}