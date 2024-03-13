function UseFetchData({ apiURL, localData }) {


const data = localData;

      if (apiURL) {
            fetch(apiURL)
                  .then((response) => response.json())
                  .then((json) => {
                        let data = json;
                  })
                  .catch((error) => {
                        console.error('Erreur lors de la récupération des données:', error);
                  });
      }

      return data;
}

export default UseFetchData;
