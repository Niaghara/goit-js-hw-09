!function(){"use strict";var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.querySelector("body");t.addEventListener("click",(function(){timerId=setInterval((function(){n.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),t.disabled=!0,e.disabled=!1})),e.addEventListener("click",(function(){clearInterval(timerId),t.disabled=!1,e.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.e7cf5b7b.js.map
