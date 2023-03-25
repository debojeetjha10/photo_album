import { createApi } from "unsplash-js";

const getArrayOfPhotos = async () => {
  /*
  This function returns a array of photos information like thumbnail, full urls and author details.
  as Unplash limits the number of requests to 50 a dummy data will be sent from selected 5 dummy data's in case
  the Unplash API fails.
  */
  const unsplash = createApi({
    accessKey: "",
  });

  var photos = null;

  try {
    photos = await unsplash.photos.getRandom({
      count: 30,
    });
    if (photos.status !== 200) throw Error("Unsplash send wrong Data");
  } catch (err) {
    console.log(err.message);
    //Sending dummy data is Unsplash API fails
    photos = require(`./dummyData/data${Math.floor(Math.random() * 5)}.json`);
  }
  return photos.response;
};

export default getArrayOfPhotos;
