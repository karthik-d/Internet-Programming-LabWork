const WordBag = [
    "Vase",
    "Teapot",
    "Tiger",
    "Camera",
    "Book",
    "Ice Cream",
    "Cushion",
    "Spade",
    "Piano",
    "House",
    "Hat",
    "Orange"
]


function randomSample(array, count) {
    // Perform Fischer-Yates
    var shuffled = array.slice(0);
    for (i = 0; i < array.length; i++) {
        idx = Math.floor((i + 1) * Math.random());
        temp = shuffled[idx];
        shuffled[idx] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, count);
}


// Layout Functions

function createCard(id_num) {
    var img = document.createElement('img');
    img.setAttribute('id', 'Main__cardImage' + id_num);
    img.setAttribute('class', 'Main__cardImage');
    img.setAttribute('src', 'assets/card_front.png');

    var cardWrapper = document.createElement('div');
    cardWrapper.setAttribute('id', 'Main__cardWrapper' + id_num);
    cardWrapper.setAttribute('class', 'Main__cardWrapper');
    cardWrapper.appendChild(img);

    return cardWrapper;
}


function renderGame() {
    // difficult => Number of Pairs to Identify
    var url_string = window.location.href;
    var url = new URL(url_string);
    var num_words = (url.searchParams.get("difficulty") != null ? url.searchParams.get("difficulty") : 4);
    num_cards = (num_words > WordBag.length ? WordBag.length * 2 : num_words * 2);
    num_words = num_cards / 2;
    // create layout
    var cardArea = document.getElementById("Main__cardArea");
    for (var i = 0; i < num_cards; i++) {
        var card = createCard(i);
        cardArea.appendChild(card);
    }
    // sample the words
    game_words = randomSample(WordBag, num_words);
    console.log(game_words);
}