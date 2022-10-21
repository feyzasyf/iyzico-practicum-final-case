export const getUrlId=(url)=> {
    const splitUrl = url.split('/');
    const itemId = splitUrl[splitUrl.length - 2];
  
    return itemId;
  }

  export const getNextPage=(url)=> {
    const splitUrl = url.split('=');
    const pageNo = splitUrl[splitUrl.length - 1];
  
    return pageNo;
  }

  export const debounce=(callback, delay)=>{
    let timeout;
    return (...args)=>{
    clearTimeout(timeout);
    timeout= setTimeout(()=>{
      callback(...args)
    }, delay)
    }
  
  }

 export const throttle =(callback, delay)=>{
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = ()=>{
    if(waitingArgs === null){
      shouldWait= false
      }else{
        callback(...waitingArgs);
        waitingArgs= null
        setInterval(timeoutFunc, delay)
      }

  }
  return (...args) =>{    
    if(shouldWait) {
      waitingArgs = args;
      return
    }
    callback(...args)
    shouldWait= true;

     setTimeout(timeoutFunc, delay);
  }

 }