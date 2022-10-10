import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
     uri: import.meta.env.VITE_API_URL, //variavel criado para ser ocultada no .env.local 
     headers:{
        'Authorization': `Bearer ${import.meta.env.VITE_API_ACCESS_TOKEN}` //variavel criado para ser ocultada no .env.local 
     },   
     cache: new InMemoryCache()

})


// Requisição da api com o Cache em memoria