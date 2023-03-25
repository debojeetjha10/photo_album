const { default: getArrayOfPhotos } = require("../getArrayOfPhotos");

describe("getArrayOfPhotos", () => {
  beforeAll(() => {
    console.log = () => {};
  });
  test("when Unplash troughs errors send dummy data", async () => {
    const unplash = require("unsplash-js");
    unplash.createApi = jest.fn((access_key) => {
      return {
        photos: {
          getRandom: () => {
            throw new Error();
          },
        },
      };
    });
    const photos = await getArrayOfPhotos();
    const data0 = require("../dummyData/data0.json");
    const data1 = require("../dummyData/data1.json");
    const data2 = require("../dummyData/data2.json");
    const data3 = require("../dummyData/data3.json");
    const data4 = require("../dummyData/data4.json");
    const possibleValues = [
      data0.response,
      data1.response,
      data2.response,
      data3.response,
      data4.response,
    ];
    expect(possibleValues).toContain(photos);
  });

  test("when Unplash send 200 send unplash  data", async () => {
    const unplash = require("unsplash-js");
    const dummyData = {
      status: 200,
      response: [
        {
          url: "dwcwcvwvwv",
          thumb: "iwgcwivctbnwiuvhtwiuvyhgt",
        },
        {
          url: "dwcwecvwvwv",
          thumb: "iwgcwivctbn2ete2ewiuvhtwiuvyhgt",
        },
        {
          url: "dwcwcvwewwevwv",
          thumb: "iwgcwivctbnwewfwefefiuvhtwiuvyhgt",
        },
        {
          url: "dfwefwwefecwcvwfwefwefvwv",
          thumb: "iwgcwivwefwectbnwiuefewfvhtwiuvyhgt",
        },
      ],
    };
    unplash.createApi = jest.fn((access_key) => {
      return {
        photos: {
          getRandom: () => dummyData,
        },
      };
    });
    const photos = await getArrayOfPhotos();

    expect(photos).toBe(dummyData.response);
  });

  test("when Unplash does not send 200 send dummy data", async () => {
    const unplash = require("unsplash-js");
    const dummyData = {
      status: 434,
      response: [
        {
          url: "dwcwcvwvwv",
          thumb: "iwgcwivctbnwiuvhtwiuvyhgt",
        },
        {
          url: "dwcwecvwvwv",
          thumb: "iwgcwivctbn2ete2ewiuvhtwiuvyhgt",
        },
        {
          url: "dwcwcvwewwevwv",
          thumb: "iwgcwivctbnwewfwefefiuvhtwiuvyhgt",
        },
        {
          url: "dfwefwwefecwcvwfwefwefvwv",
          thumb: "iwgcwivwefwectbnwiuefewfvhtwiuvyhgt",
        },
      ],
    };
    unplash.createApi = jest.fn((access_key) => {
      return {
        photos: {
          getRandom: () => dummyData,
        },
      };
    });
    const photos = await getArrayOfPhotos();

    expect(photos === dummyData.response).toBeFalsy();
    const data0 = require("../dummyData/data0.json");
    const data1 = require("../dummyData/data1.json");
    const data2 = require("../dummyData/data2.json");
    const data3 = require("../dummyData/data3.json");
    const data4 = require("../dummyData/data4.json");
    const possibleValues = [
      data0.response,
      data1.response,
      data2.response,
      data3.response,
      data4.response,
    ];
    expect(possibleValues).toContain(photos);
  });
});
