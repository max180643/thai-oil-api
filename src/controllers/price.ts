import fetch from "node-fetch";
import * as cheerio from "cheerio";
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

  const formatDate = $("h2")
    .first()
    .text()
    .replace(/^อัปเดตราคาน้ำมันล่าสุด\s*/, "")
    .trim();

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
        name: "",
        price: "",
      };

      const brandId = station.replace(/_/g, "");

      $(`#brand-${brandId} li`).each((_, fuel) => {
        const values = $(fuel)
          .find("p")
          .map((__, value) => $(value).text().trim())
          .get();

        if (values[0] === stationConfig[gasType]) {
          stationPrice[gasType] = {
            name: values[0],
            price: values[1] || "",
          };
        }
      });
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
