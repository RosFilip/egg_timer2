//  addEventListener()=>{
    // vilken storlek
    // boiled type
    // temp på ägget
  
    // loop med massa object, där varje objekt är en egg kombo
    // for of, egg of egg_combinations
    // egg.find(egg_obj => {
    // 
    // })
  // 3}


const egg_combinations = [
    {
        size: "S",
        boiled_type: "runny",
        stored_temp: "cold",
        time: (60 * 3 + 39) * 1000,
        minutes: 3,
        seconds: 39,

    },
    {
        size: "S",
        boiled_type: "soft",
        stored_temp: "cold",
        time: (60 * 6 + 11) * 1000,
        minutes: 6,
        seconds: 11,
    },
    {
        size: "S",
        boiled_type: "hard",
        stored_temp: "cold",
        time: (60 * 7 + 6) * 1000,
        minutes: 7,
        seconds: 6,
    },
    {
        size: "S",
        boiled_type: "firm",
        stored_temp: "cold",
        time: (60 * 9 + 7) * 1000,
        minutes: 9,
        seconds: 7,
    },
    {
        size: "S",
        boiled_type: "runny",
        stored_temp: "cold",
        time: (60 * 2 + 22) * 1000,
        minutes: 2,
        seconds: 22,
    },
    {
        size: "S",
        boiled_type: "soft",
        stored_temp: "cold",
        time: (60 * 4 + 54) * 1000,
        minutes: 4,
        seconds: 54,
    },
    {
        size: "S",
        boiled_type: "hard",
        stored_temp: "cold",
        time: (60 * 5 + 49) * 1000,
        minutes: 5,
        seconds: 49,
    },
    {
        size: "S",
        boiled_type: "firm",
        stored_temp: "room",
        time: (60 * 7 + 50) * 1000,
        minutes: 7,
        seconds: 50,
    },
    


    {
        size: "M",
        boiled_type: "runny",
        stored_temp: "cold",
        time: (60 * 3 + 58) * 1000,
        minutes: 3,
        seconds: 58,
    },
    {
        size: "M",
        boiled_type: "soft",
        stored_temp: "cold",
        time: (60 * 6 + 43) * 1000,
        minutes: 6,
        seconds: 43,
    },
    {
        size: "M",
        boiled_type: "hard",
        stored_temp: "cold",
        time: (60 * 7 + 43) * 1000,
        minutes: 7,
        seconds: 43,
    },
    {
        size: "M",
        boiled_type: "firm",
        stored_temp: "cold",
        time: (60 * 9 + 56) * 1000,
        minutes: 9,
        seconds: 56,
    },
    {
        size: "M",
        boiled_type: "runny",
        stored_temp: "cold",
        time: (60 * 2 + 34) * 1000,
        minutes: 2,
        seconds: 34,
    },
    {
        size: "M",
        boiled_type: "soft",
        stored_temp: "cold",
        time: (60 * 5 + 20) * 1000,
        minutes: 5,
        seconds: 20,
    },
    {
        size: "M",
        boiled_type: "hard",
        stored_temp: "cold",
        time: (60 * 6 + 20) * 1000,
        minutes: 6,
        seconds: 20,
    },
    {
        size: "M",
        boiled_type: "firm",
        stored_temp: "room",
        time: (60 * 8 + 33) * 1000,
        minutes: 8,
        seconds: 33,
    },





    {
        size: "L",
        boiled_type: "runny",
        stored_temp: "cold",
        time: (60 * 4 + 24) * 1000,
        minutes: 4,
        seconds: 24,
    },
    {
        size: "L",
        boiled_type: "soft",
        stored_temp: "cold",
        time: (60 * 7 + 28) * 1000,
        minutes: 7,
        seconds: 28,
    },
    {
        size: "L",
        boiled_type: "hard",
        stored_temp: "cold",
        time: (60 * 8 + 35) * 1000,
        minutes: 8,
        seconds: 35,
    },
    {
        size: "L",
        boiled_type: "firm",
        stored_temp: "cold",
        time: (60 * 11 + 3) * 1000,
        minutes: 11,
        seconds: 3,
    },
    {
        size: "L",
        boiled_type: "runny",
        stored_temp: "cold",
        time: (60 * 2 + 51) * 1000,
        minutes: 2,
        seconds: 51,
    },
    {
        size: "L",
        boiled_type: "soft",
        stored_temp: "cold",
        time: (60 * 5 + 55) * 1000,
        minutes: 5,
        seconds: 55,
    },
    {
        size: "L",
        boiled_type: "hard",
        stored_temp: "cold",
        time: (60 * 7 + 2) * 1000,
        minutes: 7,
        seconds: 2,
    },
    {
        size: "L",
        boiled_type: "firm",
        stored_temp: "room",
        time: (60 * 9 + 30) * 1000,
        minutes: 9,
        seconds: 30,
    },


    {
        size: "XL",
        boiled_type: "runny",
        stored_temp: "cold",
        time: (60 * 4 + 49) * 1000,
        minutes: 4,
        seconds: 49,
    },
    {
        size: "XL",
        boiled_type: "soft",
        stored_temp: "cold",
        time: (60 * 8 + 11) * 1000,
        minutes: 8,
        seconds: 11,
    },
    {
        size: "XL",
        boiled_type: "hard",
        stored_temp: "cold",
        time: (60 * 9 + 24) * 1000,
        minutes: 9,
        seconds: 24,
    },
    {
        size: "XL",
        boiled_type: "firm",
        stored_temp: "cold",
        time: (60 * 12 + 6) * 1000,
        minutes: 12,
        seconds: 6,
    },
    {
        size: "XL",
        boiled_type: "runny",
        stored_temp: "cold",
        time: (60 * 3 + 7) * 1000,
        minutes: 3,
        seconds: 7,
    },
    {
        size: "XL",
        boiled_type: "soft",
        stored_temp: "cold",
        time: (60 * 6 + 29) * 1000,
        minutes: 6,
        seconds: 29,
    },
    {
        size: "XL",
        boiled_type: "hard",
        stored_temp: "cold",
        time: (60 * 7 + 42) * 1000,
        minutes: 7,
        seconds: 42,
    },
    {
        size: "XL",
        boiled_type: "firm",
        stored_temp: "room",
        time: (60 * 10 + 24) * 1000,
        minutes: 10,
        seconds: 24,
    },
];

const minutes_input = document.querySelector("#minutes");
const seconds_input = document.querySelector("#seconds");
const start_button = document.querySelector("#start_button");
const egg_sizes = document.querySelectorAll(".egg_size");
const slider = document.querySelector("#slider");

egg_sizes.forEach(egg_size =>{
    egg_size.addEventListener("click", (e)=>{
        egg_sizes.forEach(egg =>{egg.classList.remove("selected")});
        e.target.classList.add("selected");
        find_selection();

    })
})

slider.addEventListener("scrollend", (e)=>{
    const egg_slides = Array.from(document.querySelector("#slider").children);
    const window_middle = window.innerWidth / 2;
    const window_size_percentage = window.innerWidth / 100;
    const selection_area_start = window_size_percentage * 30;
    const selection_area_end = window_size_percentage * 70;
    egg_slides.forEach(egg => {
        egg.classList.remove("selected")
        const egg_x_pos = egg.getBoundingClientRect().right - (egg.getBoundingClientRect().width / 2);
        if (egg_x_pos > selection_area_start && egg_x_pos < selection_area_end) {
            egg.classList.add("selected");
        }
    });

    find_selection();
})

function find_selection(egg) {
    const size = document.querySelector(".egg_size.selected").id;
    const boiled_type = document.querySelector("#slider .selected").id
    console.log(boiled_type);
    console.log(size);
}

add_event_listeners();

const timer = {
    set_minutes: (minutes) => {
        console.log(minutes);
        if (minutes < 10) {
            minutes = `0${minutes}`
        }
        minutes_input.value = minutes;
    },
    set_seconds: (seconds) => {
            if (seconds < 10) {
                seconds = `0${seconds}`
            }
        seconds_input.value = seconds;
    },

    minutes_input_check: (start_value)=> {
        let input;
        minutes_input.addEventListener("keyup", (e)=>{  
            input = parseInt(minutes_input.value);
        });
        minutes_input.addEventListener("focusout", check)
        function check() {
            if (input < 10 && input > 0 && input) {  minutes_input.value = `0${input}`; }
            if (input === undefined || isNaN(input) || input > 59 ) {
                console.log("input not allowed");
                timer.set_minutes(start_value);
                minutes_input.removeEventListener("focusout", check);
                return 
            }
            
        }
    },
    seconds_input_check: (start_value)=> {
        let input;
        seconds_input.addEventListener("keyup", (e)=>{  
            input = parseInt(seconds_input.value);
        });
        seconds_input.addEventListener("focusout", check)
        console.log("test");
        function check() {
            if (input < 10 && input > 0 && input) {  seconds_input.value = `0${input}`; }
            if (input === undefined || isNaN(input) || input > 59 ) {
                console.log("input not allowed");
                timer.set_seconds(start_value);
                seconds_input.removeEventListener("focusout", check);
                return 
            }
            
        }

    },
    start_timer: (minutes, seconds) => {
        if (seconds === 0 && minutes === 0) {
            // timer finished
            console.log("finished");
            return
        }
        setTimeout(()=>{
            seconds -= 1
            if (seconds === 0 && minutes > 0) {
                minutes -= 1;
                seconds = 59;
            }

            timer.set_minutes(minutes)
            timer.set_seconds(seconds);
            timer.start_timer(minutes, seconds);
        }, 1000)
    },
}



function add_event_listeners(params) {
    minutes_input.addEventListener("focus", ()=>{
        const start_value = parseInt(minutes_input.value);
        timer.minutes_input_check(start_value);
    })
    seconds_input.addEventListener("focus", ()=>{
        console.log("test");
        const start_value = parseInt(seconds_input.value);
        timer.seconds_input_check(start_value);
    })

    start_button.addEventListener("click", (e)=>{
        console.log("start timer");
        const minutes = parseInt(minutes_input.value);
        const seconds = parseInt(seconds_input.value);
        timer.start_timer(minutes, seconds);
    });
}