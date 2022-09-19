export const getUrlId=(url)=> {
    const splitedUrl = url.split('/');
    const itemId = splitedUrl[splitedUrl.length - 2];
  
    return itemId;
  }