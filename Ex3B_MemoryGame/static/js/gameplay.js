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

function createImageCard(id_num, img_path, word) {
    var img_id = 'Main__cardImage' + id_num;
    var img = document.createElement('img');
    img.setAttribute('id', img_id);
    img.setAttribute('card_id', id_num);
    img.setAttribute('class', 'Main__cardImage');
    img.setAttribute('src', img_path);
    img.setAttribute('onclick', `flipImageCard("${img_id}", "${word}", "${img_path}")`);
    return img;
}

function createWordCard(id_num, word, img_path) {
    var word_id = 'Main__cardWord' + id_num;
    var para = document.createElement('p');
    para.setAttribute('id', word_id);
    para.setAttribute('card_id', id_num);
    para.setAttribute('class', 'Main__cardWord');
    para.innerHTML = word;
    para.setAttribute('onclick', `flipWordCard("${word_id}", "${img_path}", "${word}")`);
    console.log(para);
    return para;
}

function wrapCard(id_num, contentNode) {
    var cardWrapper = document.createElement('div');
    cardWrapper.setAttribute('id', 'Main__cardWrapper' + id_num);
    cardWrapper.setAttribute('class', 'Main__cardWrapper');
    cardWrapper.appendChild(contentNode);
    return cardWrapper;
}

function flipImageCard(img_id, word, img_path) {
    var imgCard = document.getElementById(img_id);
    imgCard.parentNode.replaceChild(
        createWordCard(
            imgCard.getAttribute('card_id'),
            word,
            img_path
        ),
        imgCard
    );
}

function flipWordCard(word_id, img_path, word) {
    var wordCard = document.getElementById(word_id);
    wordCard.parentNode.replaceChild(
        createImageCard(
            wordCard.getAttribute('card_id'),
            img_path,
            word
        ),
        wordCard
    );
}


function renderGame() {
    // difficult => Number of Pairs to Identify
    var url_string = window.location.href;
    var url = new URL(url_string);
    var num_words = (url.searchParams.get("difficulty") != null ? url.searchParams.get("difficulty") : 4);
    var num_cards = (num_words > WordBag.length ? WordBag.length * 2 : num_words * 2);
    num_words = num_cards / 2;
    var card_img_path = 'assets/card_front.png';
    // sample the words
    var game_words = randomSample(WordBag, num_words);
    var card_words = randomSample(game_words.concat(game_words), num_cards);
    // create layout
    var cardArea = document.getElementById("Main__cardArea");
    for (var i = 0; i < num_cards; i++) {
        var card = wrapCard(i, createImageCard(i, card_img_path, card_words[i]));
        cardArea.appendChild(card);
    }
}