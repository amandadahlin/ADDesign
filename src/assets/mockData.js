
export default function getStock() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(initialStockState), 3000)
    })
}

const initialStockState = [
  {
    id: 1,
    price: 13000,
    height: 600,
    width: 750,
    image: "http://drawasamaniac.com/wp-content/uploads/2012/12/Pavel_Guzenko_1.jpg",
    name: "Virvelvindarnas storm",
    description: "Lorem ipsum dolor et simet"
  },
  {
    id: 2,
    price: 27000,
    height: 700,
    width: 500,
    image: "https://i.pinimg.com/736x/68/ae/16/68ae161cbe8bd6fa300531547aa9bdf9--bright-art-lonely-heart.jpg",
    name: "Mystikernas gömda vrår",
    description: "Lorem ipsum dolor et simet"
  },
  {
    id: 3,
    price: 11500,
    height: 250*2,
    width: 361*2,
    image: "http://24.media.tumblr.com/8a45a5bdc234bcdba8a6c8cfc46cf8ae/tumblr_n4805ab5fR1s5u2cno1_250.jpg",
    name: "Tystnad",
    description: "Lorem ipsum dolor et simet"
  },
  {
    id: 4,
    price: 11500,
    height: 840,
    width: 600,
    image: "https://i.pinimg.com/736x/2c/83/1f/2c831ffb547a5f02c2d65ce1cba55d21--longer-hair-art-portrait-painting.jpg",
    name: "Mystikernas gömda vråer",
    description: "Lorem ipsum dolor et simet"
  }, 
  {
    id: 5,
    price: 11500,
    height: 500,
    width: 500,
    image: "https://i.pinimg.com/564x/36/aa/af/36aaaf747a773ad7fd91707f8b750f3a--rainbow-lips-rainbow-colors.jpg",
    name: "Dagdrömmarnas vakna stad",
    description: "Lorem ipsum dolor et simet"
  },
  {
    id: 6,
    price: 15900,
    height: 1316/2,
    width: 932/2,
    image: "https://images.curiator.com/images/t_x/art/f9fe982afb3626028386488a3c699d8b/danny-oconnor-twisted-kind-of-bliss.jpg",
    name: "Blisstrande kylvärme",
    description: "Lorem ipsum dolor et simet"
  }
]