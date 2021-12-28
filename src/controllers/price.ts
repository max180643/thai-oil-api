import fetch from "node-fetch";
import cheerio from "cheerio";
import PRICE_CONFIG from "../config/price";

const priceHandler = async () => {
  const response = await fetch(PRICE_CONFIG.URL, { method: "GET" });
  const statusCode = response.status;
  const body = await response.text();

  if (statusCode !== 200) {
    return {
      status: "failure",
      response: "Service is unavailable, Please try again later.",
    };
  }

  const $ = cheerio.load(body);

  const date = $("body > section > h2").text().split(" ");
  const formatDate = `${date[1]} ${date[2]} ${date[3]}`;

  const stationData: {
    [key: string]: { [key: string]: { [key: string]: string } };
  } = {};
  const SELECTOR_CONFIG: { [key: string]: { [key: string]: string } } =
    PRICE_CONFIG.SELECTOR;
  const stations = Object.keys(SELECTOR_CONFIG);

  stations.forEach((station) => {
    const stationPrice: { [key: string]: { [key: string]: string } } = {};
    const stationConfig = SELECTOR_CONFIG[station];
    const gasTypes = Object.keys(stationConfig);

    gasTypes.forEach((gasType) => {
      stationPrice[gasType] = {
        name: stationConfig[gasType]
          ? $(`${stationConfig[gasType]} > span`).text().trim()
          : "",
        price: stationConfig[gasType]
          ? $(`${stationConfig[gasType]} > em`).text().trim()
          : "",
      };
    });

    stationData[station] = stationPrice;
  });

  return {
    status: "success",
    response: {
      note: "Retail Prices in Bangkok & Vicinities Unit : Baht/Litre",
      date: formatDate,
      stations: stationData,
    },
  };
};

export default priceHandler;
