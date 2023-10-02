//  addEventListener()=>{
    // vilken storlek
    // boiled type
    // temp på ägget
  
    // loop med massa object, där varje objekt 
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
        time: (60 * 3 + 39) * 1000
    },
    {
        size: "S",
        boiled_type: "soft boiled",
        stored_temp: "cold",
        time: (60 * 6 + 11) * 1000
    },
    {
        size: "S",
        boiled_type: "hard boiled",
        stored_temp: "cold",
        time: (60 * 7 + 6) * 1000
    },
    {
        size: "S",
        boiled_type: "solid",
        stored_temp: "cold",
        time: (60 * 9 + 7) * 1000
    },
    {
        size: "S",
        boiled_type: "runny",
        stored_temp: "cold",
        time: (60 * 2 + 22) * 1000
    },
    {
        size: "S",
        boiled_type: "soft boiled",
        stored_temp: "cold",
        time: (60 * 4 + 54) * 1000
    },
    {
        size: "S",
        boiled_type: "hard boiled",
        stored_temp: "cold",
        time: (60 * 5 + 49) * 1000
    },
    {
        size: "S",
        boiled_type: "solid",
        stored_temp: "room",
        time: (60 * 7 + 50) * 1000
    },
    


    {
        size: "M",
        boiled_type: "runny",
        stored_temp: "cold",
        time: (60 * 3 + 58) * 1000
    },
    {
        size: "M",
        boiled_type: "soft boiled",
        stored_temp: "cold",
        time: (60 * 6 + 43) * 1000
    },
    {
        size: "M",
        boiled_type: "hard boiled",
        stored_temp: "cold",
        time: (60 * 7 + 43) * 1000
    },
    {
        size: "M",
        boiled_type: "solid",
        stored_temp: "cold",
        time: (60 * 9 + 56) * 1000
    },
    {
        size: "M",
        boiled_type: "runny",
        stored_temp: "cold",
        time: (60 * 2 + 34) * 1000
    },
    {
        size: "M",
        boiled_type: "soft boiled",
        stored_temp: "cold",
        time: (60 * 5 + 20) * 1000
    },
    {
        size: "M",
        boiled_type: "hard boiled",
        stored_temp: "cold",
        time: (60 * 6 + 20) * 1000
    },
    {
        size: "M",
        boiled_type: "solid",
        stored_temp: "room",
        time: (60 * 8 + 33) * 1000
    },





    {
        size: "L",
        boiled_type: "runny",
        stored_temp: "cold",
        time: (60 * 4 + 24) * 1000
    },
    {
        size: "L",
        boiled_type: "soft boiled",
        stored_temp: "cold",
        time: (60 * 7 + 28) * 1000
    },
    {
        size: "L",
        boiled_type: "hard boiled",
        stored_temp: "cold",
        time: (60 * 8 + 35) * 1000
    },
    {
        size: "L",
        boiled_type: "solid",
        stored_temp: "cold",
        time: (60 * 11 + 3) * 1000
    },
    {
        size: "L",
        boiled_type: "runny",
        stored_temp: "cold",
        time: (60 * 2 + 51) * 1000
    },
    {
        size: "L",
        boiled_type: "soft boiled",
        stored_temp: "cold",
        time: (60 * 5 + 55) * 1000
    },
    {
        size: "L",
        boiled_type: "hard boiled",
        stored_temp: "cold",
        time: (60 * 7 + 2) * 1000
    },
    {
        size: "L",
        boiled_type: "solid",
        stored_temp: "room",
        time: (60 * 9 + 30) * 1000
    },

    {
        size: "XL",
        boiled_type: "runny",
        stored_temp: "cold",
        time: (60 * 4 + 49) * 1000
    },
    {
        size: "XL",
        boiled_type: "soft boiled",
        stored_temp: "cold",
        time: (60 * 8 + 11) * 1000
    },
    {
        size: "XL",
        boiled_type: "hard boiled",
        stored_temp: "cold",
        time: (60 * 9 + 24) * 1000
    },
    {
        size: "XL",
        boiled_type: "solid",
        stored_temp: "cold",
        time: (60 * 12 + 6) * 1000
    },
    {
        size: "XL",
        boiled_type: "runny",
        stored_temp: "cold",
        time: (60 * 3 + 7) * 1000
    },
    {
        size: "XL",
        boiled_type: "soft boiled",
        stored_temp: "cold",
        time: (60 * 6 + 29) * 1000
    },
    {
        size: "XL",
        boiled_type: "hard boiled",
        stored_temp: "cold",
        time: (60 * 7 + 42) * 1000
    },
    {
        size: "XL",
        boiled_type: "solid",
        stored_temp: "room",
        time: (60 * 10 + 24) * 1000
    },
]
const minutes_input = document.querySelector("#minutes");
const seconds_input = document.querySelector("#seconds");
const start_button = document.querySelector("#start_button");

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



/*
const test = document.querySelector("#slider");

test.addEventListener("touchmove", (e)=>{
    console.log(e.touches);

}, {passive: false})
*/