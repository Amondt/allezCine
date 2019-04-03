/* eslint-disable no-console */
export function getComments (filmId) {
    let req = new XMLHttpRequest('GET', `10.20.1.37/allez-cine/getdata.php?filmId=${filmId}`, false)
    req.send(null)

    if (req.status === 200) {
        return JSON.parse(req.response)
    } else {
        return console.log("Status de la réponse: %d (%s)", req.status, req.statusText)
    }
}

export function createComment (filmId, title, comment) {
    let req = new XMLHttpRequest('GET', `10.20.1.37/allez-cine/addComment.php?filmId=${filmId}&title=${title}&comment=${comment}`, false)
    req.send(null)

    if (req.status === 200) {
        return JSON.parse(req.response)
    } else {
        return console.log("Status de la réponse: %d (%s)", req.status, req.statusText)
    }
}