

export default function UseFetchData() {

const apiURl = process.env.PUBLIC_URL + '/data.json';
  
  return (
    fetch(apiURl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Erreur HTTP ! statut : ' + response.status);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // Utilisez vos données ici
    })
    .catch((error) => console.log(error))
  ); 

}
