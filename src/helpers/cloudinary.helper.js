export const getImageUrl = (url, transformation = 'f_auto,dpr_auto') => {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const cloudinaryUrl = process.env.CLOUDINARY_URL;
  const folderName = process.env.CLOUDINARY_FOLDER;
  let revisedUrl = url.replace(`https://images.ctfassets.net/${spaceId}`, '');
  revisedUrl = `${cloudinaryUrl}${transformation}/${folderName}${revisedUrl}`;
  return revisedUrl;
};

export const getSrcSet = (url, transformation = 'f_auto,dpr_auto') => {
  const sizes = [992, 1200, 1400, 1600];
  const urls = [];
  sizes.forEach((size) => {
    urls.push(`${getImageUrl(url, `${size},${transformation}`)} ${size}w`);
  });
  const srcSet = urls.join();
  return srcSet;
};
