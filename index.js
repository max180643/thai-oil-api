const express = require('express')
const request = require('request');
const cheerio = require('cheerio');
const cors = require('cors')
const server = express()
const port = process.env.PORT || 5555
const url = 'http://gasprice.kapook.com/gasprice.php'

server.use(cors())

server.get('/', (req, res) => {
  res.send({
      status: 'success',
      response: 'Please go to https://github.com/max180643/thai-oil-api for API usage.',
    },
    200,
  )
})

server.get('/latest', (req, res) => {
  request(url, (error, response, html) => {
    if (!error && response.statusCode === 200) {
      const $ = cheerio.load(html)

      date = $('body > section > h1 > span').text().split(" ")
      
			// ptt
			ptt_gasoline_95 = $('body > section > article.gasprice.ptt > ul > li:nth-child(5) > em').text()
			ptt_gasohol_95 = $('body > section > article.gasprice.ptt > ul > li:nth-child(1) > em').text()
			ptt_gasohol_91 = $('body > section > article.gasprice.ptt > ul > li:nth-child(4) > em').text()
			ptt_gasohol_E20 = $('body > section > article.gasprice.ptt > ul > li:nth-child(2) > em').text()
			ptt_gasohol_E85 = $('body > section > article.gasprice.ptt > ul > li:nth-child(3) > em').text() // price not sure
			ptt_diesel = $('body > section > article.gasprice.ptt > ul > li:nth-child(6) > em').text()
			ptt_diesel_B10 = $('body > section > article.gasprice.ptt > ul > li:nth-child(10) > em').text()
			ptt_diesel_B20 = $('body > section > article.gasprice.ptt > ul > li:nth-child(9) > em').text()
      ptt_premium_diesel = $('body > section > article.gasprice.ptt > ul > li:nth-child(8) > em').text()
      
      // bcp
      bcp_gasoline_95 = $('').text()
      bcp_gasohol_95 = $('body > section > article.gasprice.bcp > ul > li:nth-child(1) > em').text()
      bcp_gasohol_91 = $('body > section > article.gasprice.bcp > ul > li:nth-child(4) > em').text()
      bcp_gasohol_E20 = $('body > section > article.gasprice.bcp > ul > li:nth-child(2) > em').text()
      bcp_gasohol_E85 = $('body > section > article.gasprice.bcp > ul > li:nth-child(3) > em').text()
      bcp_diesel = $('body > section > article.gasprice.bcp > ul > li:nth-child(6) > em').text()
      bcp_diesel_B10 = $('body > section > article.gasprice.bcp > ul > li:nth-child(10) > em').text()
      bcp_diesel_B20 = $('body > section > article.gasprice.bcp > ul > li:nth-child(9) > em').text().replace("\t", "") // remove \t
      bcp_premium_diesel = $('body > section > article.gasprice.bcp > ul > li:nth-child(8) > em').text()

      // shell
      shell_gasoline_95 = $('').text()
      shell_gasohol_95 = $('body > section > article.gasprice.shell > ul > li:nth-child(1) > em').text()
      shell_gasohol_91 = $('body > section > article.gasprice.shell > ul > li:nth-child(4) > em').text()
      shell_gasohol_E20 = $('body > section > article.gasprice.shell > ul > li:nth-child(2) > em').text()
      shell_gasohol_E85 = $('').text()
      shell_diesel = $('body > section > article.gasprice.shell > ul > li:nth-child(6) > em').text()
      shell_diesel_B10 = $('body > section > article.gasprice.shell > ul > li:nth-child(10) > em').text()
      shell_diesel_B20 = $('body > section > article.gasprice.shell > ul > li:nth-child(9) > em').text()
      shell_premium_diesel = $('body > section > article.gasprice.shell > ul > li:nth-child(7) > em').text()
      shell_vpower_gasohol_95 = $('body > section > article.gasprice.shell > ul > li:nth-child(8) > em').text()

      // esso
      esso_gasoline_95 = $('').text()
      esso_gasohol_95 = $('body > section > article.gasprice.esso > ul > li:nth-child(1) > em').text()
      esso_gasohol_91 = $('body > section > article.gasprice.esso > ul > li:nth-child(4) > em').text()
      esso_gasohol_E20 = $('body > section > article.gasprice.esso > ul > li:nth-child(2) > em').text()
      esso_gasohol_E85 = $('').text()
      esso_diesel = $('body > section > article.gasprice.esso > ul > li:nth-child(6) > em').text()
      esso_diesel_B10 = $('body > section > article.gasprice.esso > ul > li:nth-child(9) > em').text()
      esso_diesel_B20 = $('body > section > article.gasprice.esso > ul > li:nth-child(8) > em').text()
      esso_premium_diesel = $('body > section > article.gasprice.esso > ul > li:nth-child(7) > em').text()

      // caltex
      caltex_gasoline_95 = $('body > section > article.gasprice.caltex > ul > li:nth-child(5) > em').text()
      caltex_gasohol_95 = $('body > section > article.gasprice.caltex > ul > li:nth-child(1) > em').text()
      caltex_gasohol_91 = $('body > section > article.gasprice.caltex > ul > li:nth-child(4) > em').text()
      caltex_gasohol_E20 = $('body > section > article.gasprice.caltex > ul > li:nth-child(2) > em').text()
      caltex_gasohol_E85 = $('').text()
      caltex_diesel = $('body > section > article.gasprice.caltex > ul > li:nth-child(6) > em').text()
      caltex_diesel_B10 = $('').text()
      caltex_diesel_B20 = $('body > section > article.gasprice.caltex > ul > li:nth-child(9) > em').text()
      caltex_premium_diesel = $('body > section > article.gasprice.caltex > ul > li:nth-child(7) > em').text()

      // irpc
      irpc_gasoline_95 = $('').text()
      irpc_gasohol_95 = $('body > section > article.gasprice.irpc > ul > li:nth-child(1) > em').text()
      irpc_gasohol_91 = $('body > section > article.gasprice.irpc > ul > li:nth-child(4) > em').text()
      irpc_gasohol_E20 = $('').text()
      irpc_gasohol_E85 = $('').text()
      irpc_diesel = $('body > section > article.gasprice.irpc > ul > li:nth-child(6) > em').text()
      irpc_diesel_B10 = $('').text()
      irpc_diesel_B20 = $('').text()
      irpc_premium_diesel = $('').text()

      // pt
      pt_gasoline_95 = $('body > section > article.gasprice.pt > ul > li:nth-child(5) > em').text()
      pt_gasohol_95 = $('body > section > article.gasprice.pt > ul > li:nth-child(1) > em').text()
      pt_gasohol_91 = $('body > section > article.gasprice.pt > ul > li:nth-child(4) > em').text()
      pt_gasohol_E20 = $('body > section > article.gasprice.pt > ul > li:nth-child(2) > em').text()
      pt_gasohol_E85 = $('').text()
      pt_diesel = $('body > section > article.gasprice.pt > ul > li:nth-child(6) > em').text()
      pt_diesel_B10 = $('').text()
      pt_diesel_B20 = $('').text()
      pt_premium_diesel = $('').text()

      // susco
      susco_gasoline_95 = $('body > section > article.gasprice.susco > ul > li:nth-child(5) > em').text()
      susco_gasohol_95 = $('body > section > article.gasprice.susco > ul > li:nth-child(1) > em').text()
      susco_gasohol_91 = $('body > section > article.gasprice.susco > ul > li:nth-child(4) > em').text()
      susco_gasohol_E20 = $('body > section > article.gasprice.susco > ul > li:nth-child(2) > em').text()
      susco_gasohol_E85 = $('body > section > article.gasprice.susco > ul > li:nth-child(3) > em').text()
      susco_diesel = $('body > section > article.gasprice.susco > ul > li:nth-child(6) > em').text()
      susco_diesel_B10 = $('body > section > article.gasprice.susco > ul > li:nth-child(9) > em').text()
      susco_diesel_B20 = $('body > section > article.gasprice.susco > ul > li:nth-child(8) > em').text()
      susco_premium_diesel = $('').text()

      // pure
      pure_gasoline_95 = $('').text()
      pure_gasohol_95 = $('body > section > article.gasprice.pure > ul > li:nth-child(1) > em').text()
      pure_gasohol_91 = $('body > section > article.gasprice.pure > ul > li:nth-child(4) > em').text()
      pure_gasohol_E20 = $('body > section > article.gasprice.pure > ul > li:nth-child(2) > em').text()
      pure_gasohol_E85 = $('body > section > article.gasprice.pure > ul > li:nth-child(3) > em').text()
      pure_diesel = $('body > section > article.gasprice.pure > ul > li:nth-child(6) > em').text()
      pure_diesel_B10 = $('').text()
      pure_diesel_B20 = $('').text()
      pure_premium_diesel = $('').text()

      // susco dealers
      susco_dealers_gasoline_95 = $('body > section > article.gasprice.suscodealers > ul > li:nth-child(5) > em').text()
      susco_dealers_gasohol_95 = $('body > section > article.gasprice.suscodealers > ul > li:nth-child(1) > em').text()
      susco_dealers_gasohol_91 = $('body > section > article.gasprice.suscodealers > ul > li:nth-child(4) > em').text()
      susco_dealers_gasohol_E20 = $('body > section > article.gasprice.suscodealers > ul > li:nth-child(2) > em').text()
      susco_dealers_gasohol_E85 = $('').text()
      susco_dealers_diesel = $('body > section > article.gasprice.suscodealers > ul > li:nth-child(6) > em').text()
      susco_dealers_diesel_B10 = $('body > section > article.gasprice.suscodealers > ul > li:nth-child(9) > em').text()
      susco_dealers_diesel_B20 = $('body > section > article.gasprice.suscodealers > ul > li:nth-child(8) > em').text()
      susco_dealers_premium_diesel = $('').text()

      res.send({
          status: 'success',
          response: {
						date: `${date[1]} ${date[2]} ${date[3]}`,
						note: `Retail Prices in Bangkok & Vicinities Unit : Baht/Litre`,
						price: {
							ptt: {
								gasoline_95: ptt_gasoline_95,
								gasohol_95: ptt_gasohol_95,
								gasohol_91: ptt_gasohol_91,
								gasohol_E20: ptt_gasohol_E20,
								gasohol_E85: ptt_gasohol_E85,
								diesel: ptt_diesel,
								diesel_B10: ptt_diesel_B10,
								diesel_B20: ptt_diesel_B20,
								premium_diesel: ptt_premium_diesel
              },
              bcp: {
								gasoline_95: bcp_gasoline_95,
								gasohol_95: bcp_gasohol_95,
								gasohol_91: bcp_gasohol_91,
								gasohol_E20: bcp_gasohol_E20,
								gasohol_E85: bcp_gasohol_E85,
								diesel: bcp_diesel,
								diesel_B10: bcp_diesel_B10,
								diesel_B20: bcp_diesel_B20,
								premium_diesel: bcp_premium_diesel
              },
              shell: {
								gasoline_95: shell_gasoline_95,
								gasohol_95: shell_gasohol_95,
								gasohol_91: shell_gasohol_91,
								gasohol_E20: shell_gasohol_E20,
								gasohol_E85: shell_gasohol_E85,
								diesel: shell_diesel,
								diesel_B10: shell_diesel_B10,
								diesel_B20: shell_diesel_B20,
                premium_diesel: shell_premium_diesel,
                vpower_gasohol_95: shell_vpower_gasohol_95
              },
              esso: {
								gasoline_95: esso_gasoline_95,
								gasohol_95: esso_gasohol_95,
								gasohol_91: esso_gasohol_91,
								gasohol_E20: esso_gasohol_E20,
								gasohol_E85: esso_gasohol_E85,
								diesel: esso_diesel,
								diesel_B10: esso_diesel_B10,
								diesel_B20: esso_diesel_B20,
								premium_diesel: esso_premium_diesel
              },
              caltex: {
								gasoline_95: caltex_gasoline_95,
								gasohol_95: caltex_gasohol_95,
								gasohol_91: caltex_gasohol_91,
								gasohol_E20: caltex_gasohol_E20,
								gasohol_E85: caltex_gasohol_E85,
								diesel: caltex_diesel,
								diesel_B10: caltex_diesel_B10,
								diesel_B20: caltex_diesel_B20,
								premium_diesel: caltex_premium_diesel
              },
              irpc: {
								gasoline_95: irpc_gasoline_95,
								gasohol_95: irpc_gasohol_95,
								gasohol_91: irpc_gasohol_91,
								gasohol_E20: irpc_gasohol_E20,
								gasohol_E85: irpc_gasohol_E85,
								diesel: irpc_diesel,
								diesel_B10: irpc_diesel_B10,
								diesel_B20: irpc_diesel_B20,
								premium_diesel: irpc_premium_diesel
              },
              pt: {
								gasoline_95: pt_gasoline_95,
								gasohol_95: pt_gasohol_95,
								gasohol_91: pt_gasohol_91,
								gasohol_E20: pt_gasohol_E20,
								gasohol_E85: pt_gasohol_E85,
								diesel: pt_diesel,
								diesel_B10: pt_diesel_B10,
								diesel_B20: pt_diesel_B20,
								premium_diesel: pt_premium_diesel
              },
              susco: {
								gasoline_95: susco_gasoline_95,
								gasohol_95: susco_gasohol_95,
								gasohol_91: susco_gasohol_91,
								gasohol_E20: susco_gasohol_E20,
								gasohol_E85: susco_gasohol_E85,
								diesel: susco_diesel,
								diesel_B10: susco_diesel_B10,
								diesel_B20: susco_diesel_B20,
								premium_diesel: susco_premium_diesel
              },
              pure: {
								gasoline_95: pure_gasoline_95,
								gasohol_95: pure_gasohol_95,
								gasohol_91: pure_gasohol_91,
								gasohol_E20: pure_gasohol_E20,
								gasohol_E85: pure_gasohol_E85,
								diesel: pure_diesel,
								diesel_B10: pure_diesel_B10,
								diesel_B20: pure_diesel_B20,
								premium_diesel: pure_premium_diesel
              },
              susco_dealers: {
								gasoline_95: susco_dealers_gasoline_95,
								gasohol_95: susco_dealers_gasohol_95,
								gasohol_91: susco_dealers_gasohol_91,
								gasohol_E20: susco_dealers_gasohol_E20,
								gasohol_E85: susco_dealers_gasohol_E85,
								diesel: susco_dealers_diesel,
								diesel_B10: susco_dealers_diesel_B10,
								diesel_B20: susco_dealers_diesel_B20,
								premium_diesel: susco_dealers_premium_diesel
              }
						}  
          }
        },
        200,
      )
    } else {
      res.send({
          status: 'failure',
          response: 'Service is unavailable, Please try again later.',
        },
        404,
      )
    }
  })
})

server.get('*', (req, res) => {
  res.send({
    	status: 'failure',
    	response: 'route not found.',
    },
    404,
  )
})

server.listen(port, () => console.log('Server running at port %d.', port))