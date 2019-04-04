/* eslint-disable no-console */
export function getDataTmdb(type, lang, sort, page) {

    const req = new XMLHttpRequest()
    req.open('GET', `https://api.themoviedb.org/3/discover/${type}?api_key=ef3e4f89ddaa5395bacf44e7e324e0e9&language=${lang}&sort_by=${sort}&page=${page}`, false)
    req.send(null)

    if (req.status === 200) {
        console.log(req.response)
        return JSON.parse(req.response).results
    } else {
        return console.log("Status de la réponse: %d (%s)", req.status, req.statusText)
    }
}

export function getDetailsTmdb(type, id, lang) {
    const req = new XMLHttpRequest('GET', `https://api.themoviedb.org/3/${type}/${id}?api_key=ef3e4f89ddaa5395bacf44e7e324e0e9&language=${lang}`, false)
    req.send(null)

    if (req.status === 200) {
        return JSON.parse(req.response)
    } else {
        return console.log("Status de la réponse: %d (%s)", req.status, req.statusText)
    }
}