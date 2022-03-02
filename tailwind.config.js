module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        'homebg': "url('./src/background.png')",
        'redline': "url('./src/fixed-width fixed-height.png')",
        'downloadicon': "url('./src/icon cool-icon-22.png')",
        'ticket': "url('./src/icon cool-icon-32.png')",
        'basket': "url('./src/basket.png')",
        'ease': "url('./src/ease.png')",
        'person': "url('./src/persen.png')",
        'like': "url('./src/like.png')",
        'creditcart': "url('./src/creditcart.png')",
      }
    },
  },
  plugins: [require("daisyui")],
}
