const api_key = "L5wogDgEtaD3RkbFSGR4LNe9Bp0RjZQr"
const limit = 20

export const getGifs = async (category) => {
    try {
        const resp = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limit}`)
        const { data } = await resp.json()

        const gifs = data.map(gif => ({
            id: gif.id,
            title: gif.title,
            url: gif.images.downsized_medium.url
        }))

        return gifs

    } catch (error) {
        console.err
    }
}