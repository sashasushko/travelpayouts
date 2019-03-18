function formatPrice(price) {
  const floatPrice = parseFloat(price) || 0;

  const priceWithFractional = floatPrice.toString().replace(/(\D)/g, ",");

  const formattedPrice = priceWithFractional.replace(
    /(\d)(?=(\d{3})+(?!\d))/g,
    "$1 "
  );

  return formattedPrice;
}

export { formatPrice };
