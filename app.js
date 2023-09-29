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
const allowed_symbols = ["0","1","2","3","4","5","6","7","8","9", "Backspace", "ArrowRight", "ArrowLeft"];
const start_button = document.querySelector("#start_button");


minutes_input.addEventListener("keyup", (e)=>{
    const start_value = minutes_input.value;
    console.log(start_value);
    minutes_input.value = start_value;
    if (!allowed_symbols.includes(e.key)) {
        console.log(start_value);
        console.log("key not allowed");
        minutes_input.value = "";
        minutes_input.value = start_value;
    }
})

start_button.addEventListener("click", (e)=>{

    start_timer(minutes, seconds);
})


function timer() {
    const minutes = parseInt(document.querySelector("#minutes").value);
    const seconds = parseInt(document.querySelector("#seconds").value);
    setTimeout(()=>{
        minutes_input.value = minutes - 1;
        seconds_input.value = seconds - 1;
    }, 1000)
}

start_timer()

