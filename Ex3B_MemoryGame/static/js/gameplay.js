function render_game() {
    // difficult => Number of Pairs to Identify
    var url_string = window.location.href;
    var url = new URL(url_string);
    var num_cards = (url.searchParams.get("difficulty") != null ? url.searchParams.get("difficulty") : 4) * 2;

    var cardArea = document.getElementById("Main__cardArea");
    for (var i = 0; i < num_cards; i++) {
        var img = document.createElement('img');
        img.setAttribute('id', 'Main__cardImage' + i);
        img.setAttribute('class', 'Main__cardImage');
        img.setAttribute('src', 'assets/card_front.png');

        var imgWrapper = document.createElement('div');
        imgWrapper.setAttribute('id', 'Main__cardWrapper' + i);
        imgWrapper.setAttribute('class', 'Main__cardWrapper');
        imgWrapper.appendChild(img);

        cardArea.appendChild(imgWrapper);
    }
}