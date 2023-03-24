import { createApi } from "unsplash-js";

const getArrayOfPhotos = async () => {
  const unsplash = createApi({
    accessKey: "",
  });
  var photos = null;
  try {
    photos = await unsplash.photos.getRandom({
      count: 30,
    });
  } catch (err) {
    console.log(err.message);
  }
  photos = require(`./dummyData/data${Math.floor(Math.random() * 5)}.json`);
  return photos.response;
};

export default getArrayOfPhotos;
