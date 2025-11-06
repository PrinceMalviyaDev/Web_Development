function createThumbnail(imgadd, dure, card){
    let thumbNail = document.createElement("div");
    thumbNail.setAttribute("class", "image");

    let image = document.createElement("img");
    image.setAttribute("src", imgadd);
    image.setAttribute("alt", "thumbnail");

    let duration = document.createElement("span");
    duration.setAttribute("class", "duration");

    duration.innerText = dure;

    thumbNail.append(image, duration);
    card.append(thumbNail);
}

function createDetails(ttl, cName, views, monthsOld, card){
    let details = document.createElement("div");
    details.setAttribute("class", "details");

    let title = document.createElement("div");
    title.setAttribute("class", "title");
    title.innerText = ttl;

    let extraDetails = document.createElement("div");
    extraDetails.setAttribute("class", "extra-details");

    let channelName = document.createElement("span");
    channelName.innerText = cName;
    let view = document.createElement("span");
    view.innerText = views;
    let old = document.createElement("span");
    old.innerText = monthsOld;

    extraDetails.append(channelName, view, old);

    details.append(title, extraDetails);

    card.append(details);
}

function createCard(img, duration, title, cName, views, monthsOld){
    let card = document.createElement("div");
    card.setAttribute("class", "card");

    createThumbnail(img, duration, card);

    createDetails(title, cName, views, monthsOld, card);

    document.body.append(card);
}

createCard("image.jpeg", "33:03", "This video is really amazing, I swear you will not be disappointed", "CodeWithSrishti", "27K", "3 months ago");

createCard("image.jpeg", "20:34", "This video is not a good video, you can forget it..", "CodeWithPrince", "20K", "2 years ago");