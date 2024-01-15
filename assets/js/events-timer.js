
// // Script for countdown in Event cards

// let days = document.getElementById('days');
// let hours = document.getElementById('hours');
// let minutes = document.getElementById('minutes');
// let seconds = document.getElementById('seconds');

// let dd = document.getElementById('dd');
// let hh = document.getElementById('hh');
// let mm = document.getElementById('mm');
// let ss = document.getElementById('ss');

// let day_dot = document.querySelector('.day_dot');
// let hr_dot = document.querySelector('.hr_dot');
// let min_dot = document.querySelector('.min_dot');
// let sec_dot = document.querySelector('.sec_dot');

// let endDate = '03/21/2023 5:00:00';
// // date format mm/dd/yyyy

// let x = setInterval(function () {
//     let now = new Date(endDate).getTime();
//     let countDown = new Date().getTime();
//     let distance = now - countDown;



//     //time calculation for days,hours,minutes and seconds

//     let d = Math.floor(distance / (1000 * 60 * 60 * 24));
//     let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     let s = Math.floor((distance % (1000 * 60)) / (1000));

//     //output the result in id

//     days.innerHTML = d + "<br><span>Days</span>";
//     hours.innerHTML = h + "<br><span>Hours</span>";
//     minutes.innerHTML = m + "<br><span>Mins</span>";
//     seconds.innerHTML = s + "<br><span>Sec</span>";

//     //animate stroke

//     dd.style.strokeDashoffset = 440 - (440 * d) / 30;
//     //365 days in a year
//     hh.style.strokeDashoffset = 440 - (440 * h) / 24;
//     //24 hr in a day
//     mm.style.strokeDashoffset = 440 - (440 * m) / 60;
//     //60min a day
//     ss.style.strokeDashoffset = 440 - (440 * s) / 60;
//     //60sec a seconds

//     //animate circle dots
//     day_dot.style.transform = `rotateZ(${d * 12}deg) `;
//     //360deg / 30days = 12
//     hr_dot.style.transform = `rotateZ(${h * 15}deg)`;
//     //360deg / 24hrs = 15
//     min_dot.style.transform = `rotateZ(${m * 6}deg)`;
//     //360deg / 60minutes = 6
//     sec_dot.style.transform = `rotateZ(${s * 6}deg)`;
//     //360deg / 60seconds = 6

//     //  if countdown is over 
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("time").style.display = 'none';
//         document.querySelector(".register").style.display = "none";
//         document.getElementById("line2").style.display="none";
        
//     }
// })


//  for card 2

// for second card


//  change id of days hours minutes and seconds in html as well as js file

let days1 = document.getElementById('days1');
let hours1 = document.getElementById('hours1');
let minutes1 = document.getElementById('minutes1');
let seconds1 = document.getElementById('seconds1');

let day_dot1 = document.querySelector('.day_dot1');
let hr_dot1 = document.querySelector('.hr_dot1');
let min_dot1 = document.querySelector('.min_dot1');
let sec_dot1 = document.querySelector('.sec_dot1');



let endDate1 = '04/14/2023 00:00:00';
// date format mm/dd/yyyy


// change x1

let x1 = setInterval(function () {
    let now = new Date(endDate1).getTime();
    let countDown = new Date().getTime();
    let distance = now - countDown;


    //time calculation for days,hours,minutes and seconds

    let d = Math.floor(distance / (1000 * 60 * 60 * 24));
    let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((distance % (1000 * 60)) / 1000);


    days1.innerHTML = d + "<br><span>Days</span>";
    hours1.innerHTML = h + "<br><span>Hours</span>";
    minutes1.innerHTML = m + "<br><span>Mins</span>";
    seconds1.innerHTML = s + "<br><span>Sec</span>";

    //animate stroke


    // change id of dd hh mm ss

    dd1.style.strokeDashoffset = 440 - (440 * d) / 30;
    //365 days in a year
    hh1.style.strokeDashoffset = 440 - (440 * h) / 24;
    //24 hr in a day
    mm1.style.strokeDashoffset = 440 - (440 * m) / 60;
    //60min a day
    ss1.style.strokeDashoffset = 440 - (440 * s) / 60;
    //60sec a seconds
    //animate circle dots
    day_dot1.style.transform = `rotateZ(${d * 12}deg) `;
    //360deg / 30days = 12
    hr_dot1.style.transform = `rotateZ(${h * 15}deg)`;
    //360deg / 24hrs = 15
    min_dot1.style.transform = `rotateZ(${m * 6}deg)`;
    //360deg / 60minutes = 6
    sec_dot1.style.transform = `rotateZ(${s * 6}deg)`;
    //360deg / 60seconds = 6

    if (distance < 0) {
        clearInterval(x1);

        //  use querry selector instead of getelementbyid and add a class name with id ( time)
        document.querySelector(".time2").style.display = 'none';
        // document.querySelector(".newyear").style.display = 'block';
        document.querySelector("#line2").style.display="none";

    }

})