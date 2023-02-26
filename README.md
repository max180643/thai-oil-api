# Thai Oil API

API for checking latest Thai oil prices

## Requirements

- Node LTS

## Installation

```sh
$ npm install
$ npm run start
```

or

```sh
$ yarn
$ yarn start
```

## API

This API is based on HTTPS requests and JSON responses. `https://api.chnwt.dev/thai-oil-api`

### Get latest oil prices

##### API request

`GET /latest`

##### API response

<details>
<summary>JSON</summary>

```json
{
  "status": "success",
  "response": {
    "note": "Retail Prices in Bangkok & Vicinities Unit : Baht/Litre",
    "date": "28 ธันวาคม 2564",
    "stations": {
      "ptt": {
        "gasoline_95": { "name": "เบนซิน 95", "price": "38.56" },
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "31.15" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "30.88" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "29.64" },
        "gasohol_e85": { "name": "แก๊สโซฮอล์ E85", "price": "23.74" },
        "diesel": { "name": "ดีเซล", "price": "28.44" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "28.44" },
        "diesel_b20": { "name": "ดีเซลหมุนเร็ว B20", "price": "28.44" },
        "premium_diesel": { "name": "ดีเซลพรีเมี่ยม", "price": "34.46" },
        "ngv": { "name": "แก๊ส NGV", "price": "15.59" }
      },
      "bcp": {
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "31.15" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "30.88" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "29.64" },
        "gasohol_e85": { "name": "แก๊สโซฮอล์ E85", "price": "23.74" },
        "diesel": { "name": "ดีเซล", "price": "28.44" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "28.44" },
        "diesel_b20": { "name": "ดีเซลหมุนเร็ว B20", "price": "28.44" },
        "premium_diesel": { "name": "ดีเซลพรีเมี่ยม", "price": "34.46" },
        "ngv": { "name": "แก๊ส NGV", "price": "15.59" }
      },
      "shell": {
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "31.65" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "31.38" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "30.14" },
        "diesel": { "name": "ดีเซล", "price": "29.04" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "29.04" },
        "diesel_b20": { "name": "ดีเซลหมุนเร็ว B20", "price": "29.04" },
        "premium_diesel": { "name": "ดีเซลพรีเมี่ยม", "price": "35.49" },
        "vpower_gasohol_95": {
          "name": "เชลล์ วี-เพาเวอร์ แก๊สโซฮอล์ 95",
          "price": "39.14"
        },
        "vpower_diesel": {
          "name": "เชลล์ วี-เพาเวอร์ ดีเซล",
          "price": "35.49"
        },
        "vpower_diesel_b7": {
          "name": "เชลล์ วี-เพาเวอร์ ดีเซล B7",
          "price": "35.49"
        }
      },
      "esso": {
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "31.15" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "30.88" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "29.64" },
        "diesel": { "name": "ดีเซล", "price": "28.64" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "28.64" },
        "premium_diesel": { "name": "ดีเซลพรีเมี่ยม", "price": "35.26" }
      },
      "caltex": {
        "gasoline_95": { "name": "เบนซิน 95", "price": "39.51" },
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "31.65" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "31.38" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "30.14" },
        "diesel": { "name": "ดีเซล", "price": "29.04" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "29.04" },
        "diesel_b20": { "name": "ดีเซลหมุนเร็ว B20", "price": "29.04" },
        "premium_diesel": { "name": "ดีเซลพรีเมี่ยม", "price": "35.49" }
      },
      "irpc": {
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "31.15" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "30.88" },
        "diesel": { "name": "ดีเซล", "price": "28.44" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "28.44" }
      },
      "pt": {
        "gasoline_95": { "name": "เบนซิน 95", "price": "39.36" },
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "31.45" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "31.18" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "29.94" },
        "diesel": { "name": "ดีเซล", "price": "28.74" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "28.74" },
        "diesel_b20": { "name": "ดีเซลหมุนเร็ว B20", "price": "28.74" }
      },
      "susco": {
        "gasoline_95": { "name": "เบนซิน 95", "price": "39.06" },
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "31.15" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "30.88" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "29.64" },
        "diesel": { "name": "ดีเซล", "price": "28.44" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "28.44" },
        "diesel_b20": { "name": "ดีเซลหมุนเร็ว B20", "price": "28.44" },
        "ngv": { "name": "แก๊ส NGV", "price": "15.59" }
      },
      "pure": {
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "31.15" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "30.88" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "29.64" },
        "diesel": { "name": "ดีเซล", "price": "28.64" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "28.64" }
      },
      "susco_dealers": {
        "gasoline_95": { "name": "เบนซิน 95", "price": "39.06" },
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "31.15" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "30.88" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "29.64" },
        "diesel": { "name": "ดีเซล", "price": "28.44" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "28.44" },
        "diesel_b20": { "name": "ดีเซลหมุนเร็ว B20", "price": "28.44" }
      }
    }
  }
}
```

</details>

## Warning

This API crawl data from gasprice.kapook.com and the API cannot handle URL in case of 404 yet

## Environment variables

create .env file

```
# Analytics (optional)
TRACK_API_URL='' #umami-db-api
UMAMI_WEBSITE_NAME=''
UMAMI_WEBSITE_DOMAIN=''
```
