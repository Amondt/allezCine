/* eslint-disable no-console */
export function getData(type, lang, sort, page) {
    let req = new XMLHttpRequest('GET', `https://api.themoviedb.org/3/discover/${type}?api_key=ef3e4f89ddaa5395bacf44e7e324e0e9&language=${lang}&sort_by=${sort}&page=${page}`, false)
    req.send(null)

    if (req.status === 200) {
        return JSON.parse(req.response)
    } else {
        return console.log("Status de la réponse: %d (%s)", req.status, req.statusText)
    }
}

export function getDetails(type, id, lang) {
    let req = new XMLHttpRequest('GET', `https://api.themoviedb.org/3/${type}/${id}?api_key=ef3e4f89ddaa5395bacf44e7e324e0e9&language=${lang}`, false)
    req.send(null)

    if (req.status === 200) {
        return JSON.parse(req.response)
    } else {
        return console.log("Status de la réponse: %d (%s)", req.status, req.statusText)
    }
}