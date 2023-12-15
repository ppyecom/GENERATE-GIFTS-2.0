

const getGifts2 = async(category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=8l4Zf6eAP4CKe0UIOslRJRa4WjB9ZA4R&q=${category}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifts = data.map((datogift)=> 
        ({
            id: datogift.id,
            title: datogift.title,
            user_create: datogift.type,
            url: datogift.images.downsized_medium.url
        }));

    return gifts;
}

export default getGifts2