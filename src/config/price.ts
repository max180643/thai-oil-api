const PRICE_CONFIG = {
  URL: "http://gasprice.kapook.com/gasprice.php",
  SELECTOR: {
    ptt: {
      gasoline_95:
        "body > section > article.gasprice.ptt > ul > li:nth-child(5)",
      gasohol_95:
        "body > section > article.gasprice.ptt > ul > li:nth-child(1)",
      gasohol_91:
        "body > section > article.gasprice.ptt > ul > li:nth-child(4)",
      gasohol_e20:
        "body > section > article.gasprice.ptt > ul > li:nth-child(2)",
      gasohol_e85:
        "body > section > article.gasprice.ptt > ul > li:nth-child(3)",
      diesel_b7: "body > section > article.gasprice.ptt > ul > li:nth-child(7)",
      premium_diesel:
        "body > section > article.gasprice.ptt > ul > li:nth-child(8)",
      premium_gasohol_95:
        "body > section > article.gasprice.ptt > ul > li:nth-child(10)",
      superpower_gasohol_95:
        "body > section > article.gasprice.ptt > ul > li:nth-child(9)",
      ngv: "body > section > article.gasprice.ptt > ul > li:nth-child(6)",
    },
    bcp: {
      gasohol_95:
        "body > section > article.gasprice.bcp > ul > li:nth-child(1)",
      gasohol_91:
        "body > section > article.gasprice.bcp > ul > li:nth-child(4)",
      gasohol_e20:
        "body > section > article.gasprice.bcp > ul > li:nth-child(2)",
      gasohol_e85:
        "body > section > article.gasprice.bcp > ul > li:nth-child(3)",
      diesel_b7: "body > section > article.gasprice.bcp > ul > li:nth-child(5)",
      premium_gasohol_95:
        "body > section > article.gasprice.bcp > ul > li:nth-child(7)",
      premium_gasohol_97:
        "body > section > article.gasprice.bcp > ul > li:nth-child(8)",
      premium_diesel:
        "body > section > article.gasprice.bcp > ul > li:nth-child(6)",
    },
    shell: {
      gasohol_95:
        "body > section > article.gasprice.shell > ul > li:nth-child(1)",
      gasohol_91:
        "body > section > article.gasprice.shell > ul > li:nth-child(3)",
      gasohol_e20:
        "body > section > article.gasprice.shell > ul > li:nth-child(2)",
      diesel_b7:
        "body > section > article.gasprice.shell > ul > li:nth-child(4)",
      premium_gasohol_95:
        "body > section > article.gasprice.shell > ul > li:nth-child(9)",
      premium_diesel:
        "body > section > article.gasprice.shell > ul > li:nth-child(5)",
      vpower_gasohol_95:
        "body > section > article.gasprice.shell > ul > li:nth-child(6)",
      vpower_diesel:
        "body > section > article.gasprice.shell > ul > li:nth-child(8)",
      fuelsafe_diesel:
        "body > section > article.gasprice.shell > ul > li:nth-child(7)",
    },
    esso: {
      gasohol_95:
        "body > section > article.gasprice.esso > ul > li:nth-child(1)",
      gasohol_91:
        "body > section > article.gasprice.esso > ul > li:nth-child(3)",
      gasohol_e20:
        "body > section > article.gasprice.esso > ul > li:nth-child(2)",
      diesel_b7:
        "body > section > article.gasprice.esso > ul > li:nth-child(4)",
      premium_gasohol_95:
        "body > section > article.gasprice.esso > ul > li:nth-child(6)",
      premium_diesel:
        "body > section > article.gasprice.esso > ul > li:nth-child(5)",
    },
    caltex: {
      gasoline_95:
        "body > section > article.gasprice.caltex > ul > li:nth-child(4)",
      gasohol_95:
        "body > section > article.gasprice.caltex > ul > li:nth-child(1)",
      gasohol_91:
        "body > section > article.gasprice.caltex > ul > li:nth-child(3)",
      gasohol_e20:
        "body > section > article.gasprice.caltex > ul > li:nth-child(2)",
      diesel_b7:
        "body > section > article.gasprice.caltex > ul > li:nth-child(5)",
      premium_diesel:
        "body > section > article.gasprice.caltex > ul > li:nth-child(6)",
    },
    irpc: {
      gasohol_95:
        "body > section > article.gasprice.irpc > ul > li:nth-child(1)",
      gasohol_e20:
        "body > section > article.gasprice.irpc > ul > li:nth-child(2)",
      gasohol_91:
        "body > section > article.gasprice.irpc > ul > li:nth-child(3)",
      diesel_b7:
        "body > section > article.gasprice.irpc > ul > li:nth-child(4)",
    },
    pt: {
      gasoline_95:
        "body > section > article.gasprice.pt > ul > li:nth-child(4)",
      gasohol_95: "body > section > article.gasprice.pt > ul > li:nth-child(1)",
      gasohol_91: "body > section > article.gasprice.pt > ul > li:nth-child(3)",
      gasohol_e20:
        "body > section > article.gasprice.pt > ul > li:nth-child(2)",
      diesel_b7: "body > section > article.gasprice.pt > ul > li:nth-child(5)",
    },
    susco: {
      gasoline_95:
        "body > section > article.gasprice.susco > ul > li:nth-child(4)",
      gasohol_95:
        "body > section > article.gasprice.susco > ul > li:nth-child(1)",
      gasohol_91:
        "body > section > article.gasprice.susco > ul > li:nth-child(3)",
      gasohol_e20:
        "body > section > article.gasprice.susco > ul > li:nth-child(2)",
      diesel_b7:
        "body > section > article.gasprice.susco > ul > li:nth-child(6)",
      ngv: "body > section > article.gasprice.susco > ul > li:nth-child(5)",
    },
    pure: {
      gasohol_95:
        "body > section > article.gasprice.pure > ul > li:nth-child(1)",
      gasohol_91:
        "body > section > article.gasprice.pure > ul > li:nth-child(3)",
      gasohol_e20:
        "body > section > article.gasprice.pure > ul > li:nth-child(2)",
      diesel_b7:
        "body > section > article.gasprice.pure > ul > li:nth-child(4)",
    },
    susco_dealers: {
      gasoline_95:
        "body > section > article.gasprice.suscodealers > ul > li:nth-child(4)",
      gasohol_95:
        "body > section > article.gasprice.suscodealers > ul > li:nth-child(1)",
      gasohol_91:
        "body > section > article.gasprice.suscodealers > ul > li:nth-child(3)",
      gasohol_e20:
        "body > section > article.gasprice.suscodealers > ul > li:nth-child(2)",
      diesel_b7:
        "body > section > article.gasprice.suscodealers > ul > li:nth-child(5)",
    },
  },
};

export default PRICE_CONFIG;
