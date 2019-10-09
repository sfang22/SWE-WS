const url = "https://ron-swanson-quotes.herokuapp.com/v2/quotes"
document.getElementById('click').addEventListener('click', () => {
    fetch(url, {method: 'GET'}).then(
        response => response.json()
    ).then(
        resp => {
            document.getElementById('funny_quote').innerHTML = resp[0];
    })
});