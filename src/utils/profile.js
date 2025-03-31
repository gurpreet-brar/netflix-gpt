const avatar = [
  "croodles-neutral",
  "bottts-neutral",
  "bottts-neutral",
  "dylan",
  "fun-emoji",
  "lorelei",
  "personas",
  "big-ears",
];
const getImage = () => {
  const random = Math.floor(Math.random() * 8);
  const url = `https://api.dicebear.com/9.x/${avatar[random]}/png`;
  return url;
};

export default getImage;
