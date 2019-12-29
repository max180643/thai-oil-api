Thai Oil API
=============
API for checking latest Thai Oil prices

Requirements
------------
- Node LTS

Installation
------------

```sh
$ npm install
$ npm run start
```

or

```sh
$ yarn
$ yarn start
```

API
---
This API is based on HTTPS requests and JSON responses. `https://thai-oil-api.herokuapp.com/`

### Get latest gold prices

##### API request
`GET /latest`

##### API response
<details>
<summary>JSON</summary>

```json
{
    "status": "success",
    "response": {
        "date": "29 ธันวาคม 2562",
        "note": "Retail Prices in Bangkok & Vicinities Unit : Baht/Litre",
        "price": {
            "ptt": {
                "gasoline_95": "33.66",
                "gasohol_95": "26.25",
                "gasohol_91": "25.98",
                "gasohol_E20": "23.24",
                "gasohol_E85": "19.89",
                "diesel": "26.49",
                "diesel_B10": "24.49",
                "diesel_B20": "23.49",
                "premium_diesel": "30.34"
            },
            "bcp": {
                "gasoline_95": "",
                "gasohol_95": "26.25",
                "gasohol_91": "25.98",
                "gasohol_E20": "23.24",
                "gasohol_E85": "18.89",
                "diesel": "26.49",
                "diesel_B10": "24.49",
                "diesel_B20": "23.49",
                "premium_diesel": "30.36"
            },
            "shell": {
                "gasoline_95": "",
                "gasohol_95": "26.25",
                "gasohol_91": "25.98",
                "gasohol_E20": "23.24",
                "gasohol_E85": "",
                "diesel": "26.49",
                "diesel_B10": "24.49",
                "diesel_B20": "23.49",
                "premium_diesel": "30.94",
                "vpower_gasohol_95": "31.74"
            },
            "esso": {
                "gasoline_95": "",
                "gasohol_95": "26.25",
                "gasohol_91": "25.98",
                "gasohol_E20": "23.24",
                "gasohol_E85": "",
                "diesel": "26.49",
                "diesel_B10": "24.49",
                "diesel_B20": "23.49",
                "premium_diesel": "30.94"
            },
            "caltex": {
                "gasoline_95": "34.11",
                "gasohol_95": "26.25",
                "gasohol_91": "25.98",
                "gasohol_E20": "23.24",
                "gasohol_E85": "",
                "diesel": "26.49",
                "diesel_B10": "",
                "diesel_B20": "23.49",
                "premium_diesel": "30.74"
            },
            "irpc": {
                "gasoline_95": "",
                "gasohol_95": "26.25",
                "gasohol_91": "25.98",
                "gasohol_E20": "",
                "gasohol_E85": "",
                "diesel": "26.49",
                "diesel_B10": "",
                "diesel_B20": "",
                "premium_diesel": ""
            },
            "pt": {
                "gasoline_95": "34.16",
                "gasohol_95": "26.25",
                "gasohol_91": "25.98",
                "gasohol_E20": "23.24",
                "gasohol_E85": "",
                "diesel": "26.49",
                "diesel_B10": "",
                "diesel_B20": "",
                "premium_diesel": ""
            },
            "susco": {
                "gasoline_95": "33.66",
                "gasohol_95": "26.25",
                "gasohol_91": "25.98",
                "gasohol_E20": "23.24",
                "gasohol_E85": "18.89",
                "diesel": "26.49",
                "diesel_B10": "24.49",
                "diesel_B20": "23.49",
                "premium_diesel": ""
            },
            "pure": {
                "gasoline_95": "",
                "gasohol_95": "30.30",
                "gasohol_91": "30.03",
                "gasohol_E20": "27.79",
                "gasohol_E85": "21.79",
                "diesel": "29.84",
                "diesel_B10": "",
                "diesel_B20": "",
                "premium_diesel": ""
            },
            "susco_dealers": {
                "gasoline_95": "33.66",
                "gasohol_95": "26.25",
                "gasohol_91": "25.98",
                "gasohol_E20": "23.24",
                "gasohol_E85": "",
                "diesel": "26.49",
                "diesel_B10": "24.49",
                "diesel_B20": "23.49",
                "premium_diesel": ""
            }
        }
    }
}
```
</details>

Warning
-------
This API crawl data from gasprice.kapook.com and the API cannot handle URL in case of 404 yet