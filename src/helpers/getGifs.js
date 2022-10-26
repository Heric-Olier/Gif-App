export const getGifs = async (categories) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=BjKocXGEGRfk7DfJ0XOz28ZGS67az2AL&q=${encodeURI(categories)}&limit=20`;
    const resp = await fetch(url); // fetch es una promesa
    const {data} = await resp.json(); // desestructuramos la data
    console.log({data});
    console.log(data.length);

    const gifs = data.map((img) => { // extraemos la información que necesitamos
      return {
        id: img.id, // id
        titile: img.title, // titulo
        url: img.images?.downsized_medium.url, // url
        link: img.url, // link
      };
    });
    return gifs;
  }

