require('isomorphic-fetch');

fetch('/my-special-little-api/things').then((response) => {
    console.log(response);
});
