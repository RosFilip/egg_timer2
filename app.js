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

let timeoutID = "";
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
        timer_dom: document.querySelector("#timer"),
        minutes_input: document.querySelector("#minutes"),
        seconds_input: document.querySelector("#seconds"),
        start_button: document.querySelector("#start_button"),
        pause_button: document.querySelector("#pause_button"),
        egg_sizes: document.querySelectorAll(".egg_size"),
        slider: document.querySelector("#slider"),
        temp_selectors: document.querySelectorAll("#temp_selector_container .temp_selector"),
        guide_button: document.querySelector("#guide_button"),
    }
}

const { timer_dom, minutes_input, seconds_input, start_button, pause_button, egg_sizes, slider, temp_selectors, guide_button } = start_app();


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
            if (input < 10 && input > -1 && input) { minutes_input.value = `0${input}`; }
            if (input === 0) { minutes_input.value = `00`; }
            if (input === undefined || isNaN(input) || input > 59) {
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
        function check() {
            if (input < 10 && input > 0 && input) { seconds_input.value = `0${input}`; }
            if (input === 0) { seconds_input.value = `00`; }
            if (input === undefined || isNaN(input) || input > 59) {
                timer.set_seconds(start_value);
                seconds_input.removeEventListener("focusout", check);
                return
            }

        }

    },
    start_timer: (minutes, seconds) => {
        minutes_input.setAttribute("disabled", true);
        seconds_input.setAttribute("disabled", true);
        if (timer.pause) { timer.pause_timer(); return }
        if (seconds === 0 && minutes === 0) { timer.finished();return }
        if (seconds === 0 ) { seconds = 60 }

        timeoutID = setTimeout(() => {
        if (timer.pause) { timer.pause_timer(); return }

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
    pause: false,
    pause_timer: ()=>{
        timer.pause = true;
        pause_button.querySelector("p").textContent = "RESUME";
        timer_dom.querySelectorAll("input").forEach(input =>{input.classList.add("pause")})
        timer_dom.querySelector("#semi_colon").classList.add("pause");
        pause_button.querySelector(".pause_icon").classList.add("resume_icon");
        pause_button.removeEventListener("click", timer.pause_timer);
        pause_button.addEventListener("click", timer.resume_timer);
    },
    resume_timer: ()=>{
        timer.pause = false;
        pause_button.querySelector("p").textContent = "PAUSE";
        timer_dom.querySelectorAll("input").forEach(input =>{input.classList.remove("pause")})
        timer_dom.querySelector("#semi_colon").classList.remove("pause");
        pause_button.querySelector(".pause_icon").classList.remove("resume_icon");
        pause_button.addEventListener("click", timer.pause_timer);
        pause_button.removeEventListener("click", timer.resume_timer);
        timer.start_timer(minutes_input.value, seconds_input.value);
    },
    finished: ()=>{
        document.querySelector(".potContainer").style.display = "none";
        document.querySelector(".finishedEgg").style.display = "flex";
        const alarm_sound = new Audio("/media/alarm.mp3");
        alarm_sound.loop = true;
        alarm_sound.play();

        start_button.addEventListener("click", ()=>{ timer.stop_alarm(alarm_sound); });
    },
    stop_alarm: (alarm_sound)=>{
        alarm_sound.loop = false;
        alarm_sound.muted = true;
    },

    startValues: {
        minutes: "",
        seconds: "",
    },

    
}

// add events
function add_event_listeners(params) {
    minutes_input.addEventListener("focus", () => {
        const start_value = parseInt(minutes_input.value);
        timer.minutes_input_check(start_value);
    });
    seconds_input.addEventListener("focus", () => {
        const start_value = parseInt(seconds_input.value);
        timer.seconds_input_check(start_value);
    });

    start_button.addEventListener("click", (e) => {
        const selectionContainer = document.querySelector("#selection_container");
        const countdownContainer = document.querySelector(".countdown_container");
        const timerBtn = document.querySelector("#start_button p");
        const minutes = parseInt(minutes_input.value);
        const seconds = parseInt(seconds_input.value);

        if (timerBtn.textContent === "START") {
            timer.pause = false;
            timer.startValues.minutes = minutes;
            timer.startValues.seconds = seconds;
            selectionContainer.style.left = "100vw";
            countdownContainer.style.right = "0vw";
            timerBtn.textContent = "STOP";
            document.querySelector("#start_button .timer_icon").classList.add("stop_icon");
            document.querySelector("#start_button").classList.remove("big");
            document.querySelector("#pause_button").style.display = "flex";
            timer.start_timer(minutes, seconds);

            pause_button.addEventListener("click", timer.pause_timer);
        } else {
            selectionContainer.style.left = "0vw";
            countdownContainer.style.right = "100vw";
            timerBtn.textContent = "START";
            document.querySelector("#start_button .timer_icon").classList.remove("stop_icon");
            document.querySelector("#start_button").classList.add("big");
            document.querySelector(".potContainer").style.display = "block";
            document.querySelector(".finishedEgg").style.display = "none";
            document.querySelector("#pause_button").style.display = "none";

            clearTimeout(timeoutID);
            timer.set_minutes(timer.startValues.minutes);
            timer.set_seconds(timer.startValues.seconds);
            minutes_input.removeAttribute("disabled");
            seconds_input.removeAttribute("disabled");
        }
    });

    guide_button.addEventListener("click", () => {
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

        guide_dom.querySelector("#close_button").addEventListener("click", () => {
            guide_dom.remove();
        })
        document.body.append(guide_dom);

    });

}

add_event_listeners();