// pages name
let first_name_page = document.querySelector(".first-player-name-page");
let first_num_page = document.querySelector(".first-player-number-page");
let second_name_page = document.querySelector(".second-player-name-page");
let second_num_page = document.querySelector(".second-player-number-page");

// result show page
let result_show = document.querySelector(".result-show-page");

// heading items
let player_one_heading = document.querySelector(".player-one-heading");
let player_two_heading = document.querySelector(".player-two-heading");

// input items
let first_player_name_input = document.querySelector(
  ".first-player-name-input"
);
let first_player_number_input = document.querySelector(
  ".first-player-number-input"
);
let second_player_name_input = document.querySelector(
  ".second-player-name-input"
);
let second_player_number_input = document.querySelector(
  ".second-player-number-input"
);

// error items
let first_name_input_error = document.querySelector(".first-name-input-error");
let first_number_input_error = document.querySelector(
  ".first-number-input-error"
);
let second_name_input_error = document.querySelector(
  ".second-name-input-error"
);
let second_number_input_error = document.querySelector(
  ".second-number-input-error"
);

// button items
let player_one_name_btn = document.querySelector(".player-one-name-btn");
let player_one_number_btn = document.querySelector(".player-one-number-btn");
let player_two_name_btn = document.querySelector(".player-two-name-btn");
let confirm_btn = document.querySelector(".confirm-btn");

let chance_left = document.querySelector(".chance-left");

// win result show
let player_one_win = document.querySelector(".player-one-win-result");
let player_two_win = document.querySelector(".player-two-win-result");

// result box
let player_one_result_box = document.querySelector(".player-one-result-box");
let player_two_result_box = document.querySelector(".player-two-result-box");

// chance
let chance = 5;

// player one name button
player_one_name_btn.addEventListener("click", () => {
  if (first_player_name_input.value == "") {
    first_name_input_error.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please enter a name`;
  } else {
    first_name_input_error.innerHTML = "";
    first_name_page.style.display = "none";
    first_num_page.style.display = "flex";
    player_one_heading.innerHTML = first_player_name_input.value;
  }
});

// player one number button
player_one_number_btn.addEventListener("click", () => {
  if (
    first_player_number_input.value > 0 &&
    first_player_number_input.value <= 10
  ) {
    first_num_page.style.display = "none";
    second_name_page.style.display = "flex";
    first_number_input_error.innerHTML = "";
  } else {
    first_number_input_error.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please enter a number between 0 - 10`;
  }
});

// player two name button
player_two_name_btn.addEventListener("click", () => {
  if (second_player_name_input.value == "") {
    second_name_input_error.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please enter a name`;
  } else {
    second_name_input_error.innerHTML = "";
    second_name_page.style.display = "none";
    second_num_page.style.display = "flex";
    player_two_heading.innerHTML = second_player_name_input.value;
  }
});

// confirm button
confirm_btn.addEventListener("click", () => {
  if (second_player_number_input.value == "") {
    second_number_input_error.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> Please enter a number`;
  } else {
    second_number_input_error.innerHTML = "";
  }

  if (first_player_number_input.value == second_player_number_input.value) {
    player_two_win.innerHTML = `${second_player_name_input.value} win the game`;
    second_num_page.style.display = "none";
    player_two_result_box.style.display = "flex";
  } else {
    chance--;
    chance_left.innerHTML = `Chance left ${chance}`;
    second_player_number_input.value = "";
    if (chance == 0) {
      player_one_win.innerHTML = `${first_player_name_input.value} win the game`;
      second_num_page.style.display = "none";
      player_one_result_box.style.display = "flex";
    }
  }
});
