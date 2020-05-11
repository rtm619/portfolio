export const getImageUrl = (url = '', transformation = 'f_auto,dpr_auto') => {
  const spaceId = process.env.GATSBY_CONTENTFUL_SPACE_ID;
  const cloudinaryUrl = process.env.GATSBY_CLOUDINARY_URL;
  const folderName = process.env.GATSBY_CLOUDINARY_FOLDER;
  const prefix = url.startsWith('https:') ? 'https:' : '';
  let revisedUrl = url.replace(`${prefix}//images.ctfassets.net/${spaceId}`, '');
  revisedUrl = `${cloudinaryUrl}${transformation}/${folderName}${revisedUrl}`;
  return revisedUrl;
};

export const getSrcSet = (url, transformation = 'f_auto,dpr_auto') => {
  const sizes = [992, 1200, 1400, 1600];
  const urls = [];
  sizes.forEach((size) => {
    urls.push(`${getImageUrl(url, `w_${size},${transformation}`)} ${size}w`);
  });
  const srcSet = urls.join();
  return srcSet;
};
