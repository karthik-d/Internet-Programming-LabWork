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

function randomSampleIdx(array, count) {
    // Samples Index Positions
    // Perform Fischer-Yates
    var shuffled = [...Array(array.length).keys()];
    for (i = 0; i < array.length; i++) {
        idx = Math.floor((i + 1) * Math.random());
        temp = shuffled[idx];
        shuffled[idx] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, count);
}


// Layout Functions

function checkCardMatch() {
    console.log("card match check...");
}

function flipCardsIfOverLimit(img_path, card_words_idx) {
    var card_node_ids = getExposedUnmatchedCardIds();
    // Not over limit
    if (card_node_ids.length < 2) {
        return;
    }
    else {
        var card_nodes = [];
        for (var nid of card_node_ids) {
            var cardNode = document.getElementById(nid);
            card_nodes.push(cardNode);
            cardNode.classList.add('Main__nonMatchCards');
        }
        // Flip all exposed unmatched cards
        if (card_node_ids.length == 2) {
            setTimeout(function () {
                for (var cardNode of card_nodes) {
                    flipWordCard(cardNode, img_path, card_words_idx);
                }
            }, 1500);
        }
        else {
            for (var nid of card_node_ids) {
                var cardNode = document.getElementById(nid);
                flipWordCard(cardNode, img_path, card_words_idx);
            }
        }
    }
}

function getExposedUnmatchedCardIds() {
    var exposedWords = [];
    document.querySelectorAll('.Main__cardWord:not(.Main__matchedCardWord').forEach(
        function (node) {
            exposedWords.push(node.id);
        }
    );
    return exposedWords;
}

function createImageCard(card_id, img_path, card_words_idx) {
    var img_id = 'Main__cardImage' + card_id;
    var img = document.createElement('img');
    img.setAttribute('id', img_id);
    img.setAttribute('card_id', card_id);
    img.setAttribute('class', 'Main__cardImage');
    img.setAttribute('src', img_path);
    img.addEventListener(
        "click",
        function (event) {
            flipImageCard(event.target, card_words_idx);
        }
    );
    return img;
}

function createWordCard(card_id, img_path, card_words_idx) {
    var word_id = 'Main__cardWord' + card_id;
    var para = document.createElement('p');
    para.setAttribute('id', word_id);
    para.setAttribute('card_id', card_id);
    para.setAttribute('class', 'Main__cardWord');
    para.innerHTML = WordBag[card_words_idx[card_id]];
    para.addEventListener(
        "click",
        function (event) {
            flipWordCard(event.target, img_path, card_words_idx);
        }
    )
    return para;
}

function wrapCard(card_id, contentNode) {
    var cardWrapper = document.createElement('div');
    cardWrapper.setAttribute('id', 'Main__cardWrapper' + card_id);
    cardWrapper.setAttribute('class', 'Main__cardWrapper');
    cardWrapper.appendChild(contentNode);
    return cardWrapper;
}

function flipImageCard(imgCard, card_words_idx) {
    var wordCard = createWordCard(
        imgCard.getAttribute('card_id'),
        imgCard.getAttribute('src'),
        card_words_idx
    );
    var card_img_path = imgCard.getAttribute('src');
    imgCard.parentNode.replaceChild(
        createWordCard(
            imgCard.getAttribute('card_id'),
            card_img_path,
            card_words_idx
        ),
        imgCard
    );
    checkCardMatch();
    flipCardsIfOverLimit(card_img_path, card_words_idx);
}

function flipWordCard(wordCard, img_path, card_words_idx) {
    wordCard.parentNode.replaceChild(
        createImageCard(
            wordCard.getAttribute('card_id'),
            img_path,
            card_words_idx
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
    var game_words_idx = randomSampleIdx(WordBag, num_words);
    var card_words_idx = randomSample(game_words_idx.concat(game_words_idx), num_cards);
    console.log(card_words_idx);
    // create layout
    var cardArea = document.getElementById("Main__cardArea");
    for (var i = 0; i < num_cards; i++) {
        var card = wrapCard(i, createImageCard(i, card_img_path, card_words_idx));
        cardArea.appendChild(card);
    }
}