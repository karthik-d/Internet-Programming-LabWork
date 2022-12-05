function populateResults(slug, xhr) {
    var xml_doc = xhr.responseXML;
    var countryNodes = xml_doc.getElementsByTagName('country');
    var resultNode = document.getElementById('selectResults');
    resultNode.innerHTML = "";
    for (var country of countryNodes) {
        var regex = new RegExp('^' + slug + '*');
        if (regex.test(country.children[0].nodeValue)) {
            resultNode.innerHTML += country;
        }
    }
}

function autocomp(event) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            populateResults(document.getElementById('selectBox').innerHTML, this);
        }
    }
    xhr.open('GET', 'countries.xml', true);
    xhr.send();
}