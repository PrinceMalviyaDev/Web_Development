let cont = document.querySelector(".container");

cont.insertAdjacentHTML("afterend", "<b>afterend</b>");

cont.insertAdjacentHTML("beforeend", "<b>beforeend</b>");

cont.insertAdjacentHTML("afterbegin", "<b>afterbegin</b>");

cont.insertAdjacentHTML("beforebegin", "<b>beforebegin</b>");


/* Same goes for :
    1) insertAdjacentHTML
    2) insertAdjacentText
    3) insertAdjacentElement
*/