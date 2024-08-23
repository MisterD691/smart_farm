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

const getCategories = async () => {
    try {
        console.log("Step 1");
        let response = await fetch(`${url}/category/getAll`);
        let json = await response.json();
        return json.datas ? json.datas : [];
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

export const categories = getCategories();