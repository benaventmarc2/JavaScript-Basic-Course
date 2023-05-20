// Instalar axios para hacer llamadas a servicions externos
import axios from "axios";
// Make a request for a user with a given ID
axios
  .get("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(function (response) {
    // handle success
    // console.log(response);
    console.log(response.data);
    console.log("Succes");
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    console.log("Error");
  });
