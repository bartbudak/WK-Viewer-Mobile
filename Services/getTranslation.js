'use strict';

export function getTranslation(query){
    return fetch('https://jisho.org/api/v1/search/words?keyword=' + query.toString().toLowerCase())
      .then((response) => response.json())
      .then((responseJson) => {
        let jishoRes = []
        responseJson.data.forEach(function(item){
          jishoRes.push(item)
        })
        return jishoRes;
      })
      .catch((error) => {
        return error;
    })
}
