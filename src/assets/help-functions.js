export const formatPrice = (price) => {
    return price.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1 ") + " SEK"
}