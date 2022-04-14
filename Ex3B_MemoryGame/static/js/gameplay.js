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

// Game Info Handlers

function handleTimeout() {
    window.alert("Time Up!");
}

function updateTimer(intervalObj) {
    var timerNode = document.getElementById('Main__timerText');
    timerNode.textContent = parseInt(timerNode.textContent) - 1;
    if (parseInt(timerNode.textContent) == 0) {
        clearInterval(intervalObj);
        handleTimeout();
    }
}

function changeScoreByValue(delta) {
    var scoreNode = document.getElementById('Main__scoreText');
    scoreNode.textContent = parseInt(scoreNode.textContent) + delta;
}


// Layout Functions

function flipCardsIfOverLimit(img_path, card_words_idx) {
    var card_node_ids = getExposedUnmatchedCardIds();
    // Not over limit
    if (card_node_ids.length < 2) {
        return;
    }
    else {
        if (card_node_ids.length == 2) {
            handleNonMatchingPair(card_node_ids, img_path, card_words_idx);
        }
        else {
            flipAllCards(card_node_ids, img_path, card_words_idx);
        }
    }
}

function handleExposedCards(img_path, card_words_idx) {
    var exposed_card_node_ids = getExposedUnmatchedCardIds();
    if (exposed_card_node_ids.length < 2) {
        return;
    }
    else if (exposed_card_node_ids.length == 2) {
        if (isMatchingPair(exposed_card_node_ids, card_words_idx)) {
            handleMatchingPair(exposed_card_node_ids, img_path, card_words_idx)
        }
        else {
            handleNonMatchingPair(exposed_card_node_ids, img_path, card_words_idx);
        }
    }
    else {
        flipCardsIfOverLimit(img_path, card_words_idx);
    }
}

function isMatchingPair(card_node_ids, card_words_idx) {
    var card_1_id = document.getElementById(card_node_ids[0]).getAttribute('card_id');
    var card_2_id = document.getElementById(card_node_ids[1]).getAttribute('card_id');
    return (card_words_idx[card_1_id] == card_words_idx[card_2_id]);
}

function handleMatchingPair(card_node_ids) {
    for (var nid of card_node_ids) {
        var cardNode = document.getElementById(nid);
        // Clone it to remove all event listeners
        var newCardNode = cardNode.cloneNode(true);
        newCardNode.classList.add('Main__matchedCard');
        cardNode.parentNode.replaceChild(newCardNode, cardNode);
    }
    changeScoreByValue(15);
}

function handleNonMatchingPair(card_node_ids, img_path, card_words_idx) {
    /* Highlight non-match and flip back */
    setTimeout(function () {
        var card_nodes = [];
        for (var nid of card_node_ids) {
            var cardNode = document.getElementById(nid);
            if (cardNode) {
                card_nodes.push(cardNode);
                cardNode.classList.add('Main__nonMatchCards');
            }
        }
        // Flip all exposed unmatched cards
        if (card_node_ids.length == 2) {
            setTimeout(function () {
                for (var cardNode of card_nodes) {
                    if (cardNode.parentNode) {
                        cardNode.classList.remove('Main__nonMatchCards');
                        flipWordCard(cardNode, img_path, card_words_idx);
                    }
                }
            }, 1400);
        }
    }, 600);
}

function flipAllCards(card_node_ids, img_path, card_words_idx) {
    for (var nid of card_node_ids) {
        var cardNode = document.getElementById(nid);
        if (cardNode.parentNode) {
            // two cards would already be flipped
            flipWordCard(cardNode, img_path, card_words_idx);
        }
    }
}

function getExposedUnmatchedCardIds() {
    var exposedWords = [];
    document.querySelectorAll('.Main__cardWord:not(.Main__matchedCard').forEach(
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
    var text = document.createElement('span');
    text.innerHTML = WordBag[card_words_idx[card_id]];
    var word_id = 'Main__cardWord' + card_id;
    var para = document.createElement('p');
    para.setAttribute('id', word_id);
    para.setAttribute('card_id', card_id);
    para.setAttribute('class', 'Main__cardWord');
    para.appendChild(text);
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
    changeScoreByValue(-1);
    handleExposedCards(card_img_path, card_words_idx);
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


function renderGame(to_level) {
    // remove start button
    var startButton = document.getElementById('Main__startButton');
    if (startButton) {
        startButton.parentNode.removeChild(startButton);
    }
    // difficulty => Number of Pairs to Identify
    var url_string = window.location.href;
    var url = new URL(url_string);
    var num_words = (url.searchParams.get("difficulty") != null ? url.searchParams.get("difficulty") : 4);
    var num_cards = (num_words > WordBag.length ? WordBag.length * 2 : num_words * 2);
    num_words = num_cards / 2;
    var card_img_path = 'assets/card_front.png';
    // sample the words
    var game_words_idx = randomSampleIdx(WordBag, num_words);
    var card_words_idx = randomSample(game_words_idx.concat(game_words_idx), num_cards);
    // create layout
    var cardArea = document.getElementById("Main__cardArea");
    for (var i = 0; i < num_cards; i++) {
        var card = wrapCard(i, createImageCard(i, card_img_path, card_words_idx));
        cardArea.appendChild(card);
    }
    // Set Game Info
    var game_level = (to_level != null ? to_level : 1);
    game_level = (game_level > 3 ? 3 : game_level);
    game_level = (game_level < 1 ? 1 : game_level);
    var game_duration = num_words * (10 - (game_level * 2));
    document.getElementById('Main__timerText').textContent = game_duration;
    document.getElementById('Main__levelText').textContent = game_level;
    document.getElementById('Main__scoreText').textContent = 0;
    var timerInterval = setInterval(
        function () {
            updateTimer(timerInterval)
        }, 1000);
}



function renderStartPage(to_level) {
    var startButton = document.createElement('button');
    startButton.textContent = (to_level == 1 ? "Start Game" : "Next Level");
    startButton.setAttribute('id', "Main__startButton");
    startButton.setAttribute('onclick', `renderGame(${to_level});`);
    var cardArea = document.getElementById("Main__cardArea");
    cardArea.appendChild(startButton);
}

function renderGameOverPage() {

}

/*
TODO: 
- Timer
- Scorecard
- 3 Levels
*/