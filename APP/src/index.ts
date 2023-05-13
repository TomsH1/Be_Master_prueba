const express = require('express');
const axios = require('axios');


const server = express();

server.set('port', 4200)

server.listen(server.get('port'), () => {
    console.log('listening on port ', server.get('port'))
})

// Hacer la solicitud a la API de GitHub
axios.get('https://api.github.com/users/google/repos')
  .then((response: { data: any[]; }) => {
    // Ordenar los repositorios por el número de estrellas (popularidad)
    const sortedRepos = response.data.sort((a, b) => b.stargazers_count - a.stargazers_count);

    // Mostrar los 10 repositorios más populares
    const topRepos = sortedRepos.slice(0, 10);
    console.log('\nLos 10 repositorios más populares de Google en GitHub:');
    topRepos.forEach(repo => {
      console.log(`\t${repo.name} -> ${repo.stargazers_count} estrellas`);
    });
  })
  .catch((error: any) => {
    console.error('Hubo un error al hacer la solicitud:', error);
  });





