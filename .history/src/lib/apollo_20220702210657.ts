import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
     uri: 'https://api-sa-east-1.graphcms.com/v2/cl4rs6cju1jy901ywhsdm0t1y/master?query=query%20lessons%7B%0A%20%20lesson%0A%7D%0A&operationName=lessons',
         cache: new InMemoryCache()

})


// Requisição da api com o Cache em memoria