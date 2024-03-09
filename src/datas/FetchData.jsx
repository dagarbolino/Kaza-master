import { useState, useEffect } from 'react';

function UseFetchData({ apiURL, localData }) {
      const [data, setData] = useState(localData); 

      useEffect(() => {
            async function fetchData() {
                  try {
                        const response = await fetch(apiURL);
                        const json = await response.json();
                        setData(json);
                  } catch (error) {
                        console.error('Erreur lors de la récupération des données:', error);
                        // Pas besoin de setData(localData) ici car c'est déjà l'état initial
                  }
            }

            if (apiURL) {
                  fetchData();
            }
      }, [apiURL]); // localData n'est pas nécessaire si elle ne change jamais

      return data;
}

export default UseFetchData;
