export function getComments (filmId) {
    let req = new XMLHttpRequest('GET', `localhost:8888/test-php/back-end/getdata.php?filmId=${filmId}`, false)
    req.send(null)

    if (req.status === 200) {
        return JSON.parse(req.response)
    } else {
        return console.log("Status de la réponse: %d (%s)", req.status, req.statusText)
    }
}