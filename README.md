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
    "date": "25 มีนาคม 2566",
    "stations": {
      "ptt": {
        "gasoline_95": { "name": "เบนซิน 95", "price": "43.56" },
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "35.75" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "35.48" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "33.44" },
        "gasohol_e85": { "name": "แก๊สโซฮอล์ E85", "price": "33.89" },
        "diesel": { "name": "ดีเซล", "price": "33.44" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "33.44" },
        "diesel_b20": { "name": "ดีเซลหมุนเร็ว B20", "price": "33.44" },
        "premium_diesel": { "name": "ดีเซลพรีเมียม", "price": "42.56" },
        "premium_gasohol_95": {
          "name": "แก๊สโซฮอล์ 95 พรีเมียม",
          "price": "43.04"
        },
        "superpower_gasohol_95": {
          "name": "ซูเปอร์พาวเวอร์ แก๊สโซฮอล์ 95",
          "price": "43.04"
        }
      },
      "bcp": {
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "35.75" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "35.48" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "33.44" },
        "gasohol_e85": { "name": "แก๊สโซฮอล์ E85", "price": "33.89" },
        "diesel": { "name": "ดีเซล", "price": "33.44" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "33.44" },
        "diesel_b20": { "name": "ดีเซลหมุนเร็ว B20", "price": "33.44" },
        "premium_gasohol_95": {
          "name": "แก๊สโซฮอล์ 95 พรีเมียม",
          "price": "45.64"
        },
        "premium_gasohol_97": {
          "name": "แก๊สโซฮอล์ 97 พรีเมียม",
          "price": "45.24"
        },
        "premium_diesel": { "name": "ดีเซลพรีเมียม", "price": "42.66" }
      },
      "shell": {
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "36.94" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "36.64" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "34.34" },
        "diesel": { "name": "ดีเซล", "price": "33.74" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "33.74" },
        "diesel_b20": { "name": "ดีเซลหมุนเร็ว B20", "price": "33.74" },
        "premium_gasohol_95": {
          "name": "แก๊สโซฮอล์ 95 พรีเมียม",
          "price": "45.84"
        },
        "premium_diesel": { "name": "ดีเซลพรีเมียม", "price": "44.64" },
        "vpower_gasohol_95": {
          "name": "เชลล์ วี-เพาเวอร์ แก๊สโซฮอล์ 95",
          "price": "45.84"
        },
        "vpower_diesel": {
          "name": "เชลล์ วี-เพาเวอร์ ดีเซล",
          "price": "33.74"
        },
        "vpower_diesel_b7": {
          "name": "เชลล์ วี-เพาเวอร์ ดีเซล B7",
          "price": "44.64"
        }
      },
      "esso": {
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "35.75" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "35.48" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "33.44" },
        "diesel": { "name": "ดีเซล", "price": "33.44" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "33.44" },
        "premium_gasohol_95": {
          "name": "แก๊สโซฮอล์ 95 พรีเมียม",
          "price": "45.84"
        },
        "premium_diesel": { "name": "ดีเซลพรีเมียม", "price": "43.76" }
      },
      "caltex": {
        "gasoline_95": { "name": "เบนซิน 95", "price": "43.61" },
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "35.75" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "35.48" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "33.44" },
        "diesel": { "name": "ดีเซล", "price": "33.44" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "33.44" },
        "diesel_b20": { "name": "ดีเซลหมุนเร็ว B20", "price": "33.44" },
        "premium_diesel": { "name": "ดีเซลพรีเมียม", "price": "43.76" }
      },
      "irpc": {
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "35.75" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "35.48" },
        "diesel": { "name": "ดีเซล", "price": "33.44" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "33.44" }
      },
      "pt": {
        "gasoline_95": { "name": "เบนซิน 95", "price": "44.06" },
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "35.75" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "35.48" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "33.44" },
        "diesel": { "name": "ดีเซล", "price": "33.44" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "33.44" },
        "diesel_b20": { "name": "ดีเซลหมุนเร็ว B20", "price": "33.44" }
      },
      "susco": {
        "gasoline_95": { "name": "เบนซิน 95", "price": "43.71" },
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "35.75" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "35.48" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "33.44" },
        "diesel": { "name": "ดีเซล", "price": "33.44" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "33.44" },
        "ngv": { "name": "แก๊ส NGV", "price": "17.59" }
      },
      "pure": {
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "35.75" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "35.48" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "33.44" },
        "diesel": { "name": "ดีเซล", "price": "33.44" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "33.44" }
      },
      "susco_dealers": {
        "gasoline_95": { "name": "เบนซิน 95", "price": "43.71" },
        "gasohol_95": { "name": "แก๊สโซฮอล์ 95", "price": "35.75" },
        "gasohol_91": { "name": "แก๊สโซฮอล์ 91", "price": "35.48" },
        "gasohol_e20": { "name": "แก๊สโซฮอล์ E20", "price": "33.44" },
        "diesel": { "name": "ดีเซล", "price": "33.44" },
        "diesel_b7": { "name": "ดีเซล B7", "price": "33.44" }
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
