/**
 * @license MIT
 * @author codewithsadee <mohammadsadee24@gmail.com>
 * @copyright codewithsadee 2023
 */

"use strict";

const $html = /* {nodeElemet} */ document.documentElement;
const $isDark = /*bolean*/ window.matchMedia(
    "(prefers-color-scheme: dark)"
).matches;

if (sessionStorage.getItem("theme")) {
    $html.dataset.theme = sessionStorage.getItem("theme");
} else {
    $html.dataset.theme = $isDark ? "dark" : "light";
}

let isPressed = false;

const changeTheme = function () {
    isPressed = isPressed ? false : true;

    this.setAttribute("aria-presse", isPressed);

    $html.setAttribute(
        "data-theme",
        $html.dataset.theme == "light" ? "dark" : "light"
    );
    sessionStorage.setItem("theme", $html.dataset.theme);
};

window.addEventListener("load", function () {
    const $themeBtn = this.document.querySelector("[data-theme-btn]");
    $themeBtn.addEventListener("click", changeTheme);
});
