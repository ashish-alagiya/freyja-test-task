import axios from 'axios';

//  API GlobalFunction
export const makeAPIRequest = ({method, url, data}) =>
  new Promise(async (resolve, reject) => {
    const options = {
      method: method,
      url: url,
      data: data,
    };

    axios(options)
      .then(response => {
        if (response.status === 200) {
          resolve(response?.data);
        } else {
          reject(response);
        }
      })
      .catch(error => {
        reject(error);
      });
  });
