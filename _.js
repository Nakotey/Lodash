const _ = {
    clamp(number, lower, upper){
      let lowerClampedValue = Math.max(number, lower);
  
      let clampedValue = Math.min(lowerClampedValue, upper);
  
    return clampedValue;
    },
  
    inRange(number, start, end){
      if(end === undefined){
        end = start;
        start = 0;
      }
      if(start > end){
        let initEnd = end;
        end = start;
        start = initEnd;
      }
      let isInRange = (start <= number && number < end)
      return isInRange;
    },
  
      words(string){
        const newWords = string.split(' ');
        return newWords;
      },
  
      pad(string, length){
        if(length <= string.length){
          return string;
        }
  
        let startPaddingLength = Math.floor((length - string.length)/2);
  
        let endPaddingLength = (length - string.length - startPaddingLength);
  
       let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
    
      return paddedString;
      },
  
      has(object, key){
        const hasValue = object[key]
        if(hasValue !== undefined){
          return true;
        }
          return false; 
      },
  
      invert(object){
        let invertedObject = {};
        for(let key in object){
          const originalValue = object[key];
          invertedObject = {originalValue : key}
        }
        return invertedObject;
      },
  
      findKey(object, predicate){
        for (let key in object){
          let value = object[key];
          let predicateReturnValue = predicate(value);
          if(predicateReturnValue){
            return key;
          }
            return undefined;
          }
        },
  
        drop(array, n){
          if(n === null || n === undefined){
             n = 1;
          }
  
          let droppedArray = array.slice(n);
          return droppedArray;
        },
  
        dropWhile(array, predicate){
  
          let callback = (element, index) => {
            return !predicate(element, index, array);
          }
          let dropNumber = array.findIndex(callback);
  
          let droppedArray = this.drop(array, dropNumber);
  
          return droppedArray;
        },
  
        chunk(array, s){
          if(s === null || s === undefined){
             s = 1;
          }
  
          let arrayChunks = [];
          for(let i = 0; i < array.length; i+= s){
            let arrayChunk = array.slice(i , i + s);
            arrayChunks.push(arrayChunk);
          }
            return arrayChunks;
        }
  
  };
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;