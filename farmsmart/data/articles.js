import url from '../config';

// fetch(`${url}/article/getAll`)
//   .then(response => response.json())
//   .then(json => {
//     console.log(json);
//     if (json["datas"]) {
//       navigation.navigate('ProductScreen');
//     } else {
//       Alert.alert("Email ou mot de passe incorrect !");
//     }
//   })
//   .catch(error => {
//     console.error(error);
//   });

const getArticles = async () => {
    try {
        let response = await fetch(`${url}/article/getAll`);
        let json = await response.json();
        console.log(JSON.stringify(json.datas));
        return JSON.stringify(json.datas);
    } catch (error) {
        console.error(error);
    }
};

// const getAllArticles = () => {
// return fetch(`${url}/article/getAll`)
//     .then(response => response.json())
//     .then(json => {
//     return json.datas;
//     })
//     .catch(error => {
//     console.error(error);
//     });
// };

export const articles = getArticles();