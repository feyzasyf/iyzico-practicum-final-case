export const getUrlId=(url)=> {
    const splitUrl = url.split('/');
    const itemId = splitUrl[splitUrl.length - 2];
  
    return itemId;
  }

  export const getNextPage=(url)=> {
    const splitUrl = url.split('=');
    const itemId = splitUrl[splitUrl.length - 1];
  
    return itemId;
  }

