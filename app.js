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
        stored_temp: "room",
        time: (60 * 2 + 22) * 1000,
        minutes: 2,
        seconds: 22,
    },
    {
        size: "S",
        boiled_type: "soft",
        stored_temp: "room",
        time: (60 * 4 + 54) * 1000,
        minutes: 4,
        seconds: 54,
    },
    {
        size: "S",
        boiled_type: "hard",
        stored_temp: "room",
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
        stored_temp: "room",
        time: (60 * 2 + 34) * 1000,
        minutes: 2,
        seconds: 34,
    },
    {
        size: "M",
        boiled_type: "soft",
        stored_temp: "room",
        time: (60 * 5 + 20) * 1000,
        minutes: 5,
        seconds: 20,
    },
    {
        size: "M",
        boiled_type: "hard",
        stored_temp: "room",
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
        stored_temp: "room",
        time: (60 * 2 + 51) * 1000,
        minutes: 2,
        seconds: 51,
    },
    {
        size: "L",
        boiled_type: "soft",
        stored_temp: "room",
        time: (60 * 5 + 55) * 1000,
        minutes: 5,
        seconds: 55,
    },
    {
        size: "L",
        boiled_type: "hard",
        stored_temp: "room",
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
        stored_temp: "room",
        time: (60 * 3 + 7) * 1000,
        minutes: 3,
        seconds: 7,
    },
    {
        size: "XL",
        boiled_type: "soft",
        stored_temp: "room",
        time: (60 * 6 + 29) * 1000,
        minutes: 6,
        seconds: 29,
    },
    {
        size: "XL",
        boiled_type: "hard",
        stored_temp: "room",
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
start_app();
function start_app() {
    const saved_settings = JSON.parse(localStorage.getItem("saved_settings"));
    if (saved_settings) {
        const { size, boiled_type, stored_temp } = saved_settings;
        document.querySelector(`.egg_size#${size}`).classList.add("selected");
        document.querySelector(`#slider #${boiled_type}`).classList.add("selected");
        document.querySelector(`#slider #${boiled_type}`).scrollIntoView();
        document.querySelector(`#temp_selector_container #${stored_temp}`).classList.add("selected");
    } else {
        document.querySelector(`.egg_size#M`).classList.add("selected");
        document.querySelector(`#slider #soft`).classList.add("selected");
        document.querySelector(`#slider #soft`).scrollIntoView();
        document.querySelector(`#temp_selector_container #cold`).classList.add("selected");
    }

    return {
        minutes_input:  document.querySelector("#minutes"),
        seconds_input:  document.querySelector("#seconds"),
        start_button:   document.querySelector("#start_button"),
        egg_sizes:      document.querySelectorAll(".egg_size"),
        slider:         document.querySelector("#slider"),
        temp_selectors:  document.querySelectorAll("#temp_selector_container .temp_selector"),
        guide_button: document.querySelector("#guide_button"),
    }
}

const {minutes_input, seconds_input, start_button, egg_sizes, slider, temp_selectors, guide_button} = start_app();


// Selection functions
temp_selectors.forEach(temp_selector => {
    temp_selector.addEventListener("click", (e) => {
        temp_selectors.forEach(selector => {
            selector.classList.remove("selected")
        })
        e.target.classList.add("selected");
        set_egg_settings()
    })
});

egg_sizes.forEach(egg_size => {
    egg_size.addEventListener("click", (e) => {
        egg_sizes.forEach(egg => { egg.classList.remove("selected") });
        e.target.classList.add("selected");
        set_egg_settings();

    })
})

slider.addEventListener("scrollend", (e) => {
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

    set_egg_settings();
})

function set_egg_settings(egg) {
    const size = document.querySelector(".egg_size.selected").id;
    const boiled_type = document.querySelector("#slider .selected").id;
    const temp = document.querySelector("#temp_selector_container .selected").id;

    const egg_setting = egg_combinations.find(x =>
        x.size === size &&
        x.boiled_type === boiled_type &&
        x.stored_temp === temp);

    timer.set_minutes(egg_setting.minutes);
    timer.set_seconds(egg_setting.seconds)
    localStorage.setItem("saved_settings", JSON.stringify(egg_setting));
}
// timer
const timer = {
    set_minutes: (minutes) => {
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

    minutes_input_check: (start_value) => {
        let input;
        minutes_input.addEventListener("keyup", (e) => {
            input = parseInt(minutes_input.value);
        });
        minutes_input.addEventListener("focusout", check)
        function check() {
            if (input < 10 && input > 0 && input) { minutes_input.value = `0${input}`; }
            if (input === undefined || isNaN(input) || input > 59) {
                console.log("input not allowed");
                timer.set_minutes(start_value);
                minutes_input.removeEventListener("focusout", check);
                return
            }

        }
    },
    seconds_input_check: (start_value) => {
        let input;
        seconds_input.addEventListener("keyup", (e) => {
            input = parseInt(seconds_input.value);
        });
        seconds_input.addEventListener("focusout", check)
        console.log("test");
        function check() {
            if (input < 10 && input > 0 && input) { seconds_input.value = `0${input}`; }
            if (input === undefined || isNaN(input) || input > 59) {
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
        setTimeout(() => {
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
// add events
function add_event_listeners(params) {
    minutes_input.addEventListener("focus", () => {
        const start_value = parseInt(minutes_input.value);
        timer.minutes_input_check(start_value);
    })
    seconds_input.addEventListener("focus", ()=>{
        const start_value = parseInt(seconds_input.value);
        timer.seconds_input_check(start_value);
    })

    start_button.addEventListener("click", (e) => {
        console.log("start timer");
        document.querySelector("#selection_container").style.left = "100vw";
        document.querySelector(".countdown_container").style.right = "0vw";
        const minutes = parseInt(minutes_input.value);
        const seconds = parseInt(seconds_input.value);
        timer.start_timer(minutes, seconds);
    });

    guide_button.addEventListener("click", ()=>{
        const guide_dom = document.createElement("div");
        guide_dom.id = "guide_container";
        guide_dom.innerHTML = `
        <div id="guide">
            <button id="close_button"></button>
            <div>
                <h2>How to</h2>
                    <br>
                <p class="step">1: choose size!</p>
                    <br>
                        <p class="text">Start with choosing your estimated egg size based on its weight in grams</p>
                    <br>
                    <br>
                <p class="step">2: choose how you like your egg</p>
                    <br>
                        <p class="text">Do you like em runny or perhaps you simply hate consuming any form of moisture then choose the firm option</p>
                    <br>
                    <br>
                <p class="step">3: cold or not? How do you store your eggs?</p>
                    <br>
                        <p class="text">Choose how you store your eggs, are they kept in the fridge or simply on your kitchen counter</p>
                    <br>
                    <br>
                <p class="step">4: Skip all previous steps!</p>
                    <br>
                        <p class="text">Maybe you hate authority and being told what to do, simply choose your own time and skip the previous steps</p>
                    <br>
                    <br>
                <p class="step">5: start the timer!</p>
                    <br>
                        <p class="text">Time to cook!</p>
                    <br>
            </div>
            <div id="egg_boy"></div>
        </div>
        `

        guide_dom.querySelector("#close_button").addEventListener("click", ()=>{
            guide_dom.remove();
        })
        document.body.append(guide_dom);

    })
}

add_event_listeners();