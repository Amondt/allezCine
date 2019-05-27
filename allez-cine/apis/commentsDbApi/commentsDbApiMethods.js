/* eslint-disable no-console */
const url = 'http://localhost:8888/test-php/back-end/';

export function getComments (filmId) {
    const req = new XMLHttpRequest()
    req.open('GET', `${url}getdata.php?filmId=${filmId}`, false)
    req.send(null)

    if (req.status === 200) {
        return JSON.parse(req.response)
    } else {
        return console.log("Status de la réponse: %d (%s)", req.status, req.statusText)
    }
}

export function createComment (filmId, title, comment) {
    const req = new XMLHttpRequest()
    req.open('GET', `${url}addComment.php?filmId=${filmId}&title=${title}&comment=${comment}`, false)
    req.send(null)

    if (req.status === 200) {
        return JSON.parse(req.response)
    } else {
        return console.log("Status de la réponse: %d (%s)", req.status, req.statusText)
    }
}

export function deleteComment (commentId) {
    const req = new XMLHttpRequest()
    req.open('GET', `${url}remComment.php?id=${commentId}`, false)
    req.send(null)

    if (req.status === 200) {
        return JSON.parse(req.response)
    } else {
        return console.log("Status de la réponse: %d (%s)", req.status, req.statusText)
    }
}