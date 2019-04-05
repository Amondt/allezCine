/* eslint-disable no-console */
export function getDataTmdbMov(lang, sort, page) {

    const req = new XMLHttpRequest()
    req.open('GET', `https://api.themoviedb.org/3/discover/movie?api_key=ef3e4f89ddaa5395bacf44e7e324e0e9&language=${lang}&sort_by=${sort}&page=${page}`, false)
    req.send(null)
    if (req.status === 200) {
        let res = []
        JSON.parse(req.response).results.forEach(function(film) {
            res.push(film)
        })
        return res
    } else {
        return req.status;
    }
}

export function getDataTmdbSer(lang, sort, page) {

    const req = new XMLHttpRequest()
    req.open('GET', `https://api.themoviedb.org/3/discover/tv?api_key=ef3e4f89ddaa5395bacf44e7e324e0e9&language=${lang}&sort_by=${sort}&page=${page}`, false)
    req.send(null)

    if (req.status === 200) {
        let res = []
        JSON.parse(req.response).results.forEach(function(film) {
            if (film.poster_path !== null) {
                res.push(film)
            }
        })
        return res
    } else {
        return console.log("Status de la réponse: %d (%s)", req.status, req.statusText)
    }
}

export function getDetailsTmdb(type, id, lang) {
    const req = new XMLHttpRequest()
    req.open('GET', `https://api.themoviedb.org/3/${type}/${id}?api_key=ef3e4f89ddaa5395bacf44e7e324e0e9&language=${lang}`, false)
    req.send(null)

    if (req.status === 200) {
        return JSON.parse(req.response)
    } else {
        return req.status;
    }
}