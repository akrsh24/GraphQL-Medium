# GraphQL Queries

## Create a new friend

```
mutation{
  createFriend(input:{
    firstName:"Polly",
    lastName:"Shelby",
    gender:FEMALE,
    age:55,
    language:"English",
    email:"polly@abc.com"
  }){
    id
    firstName
    lastName
  }
}

```

## Get All Friends

```
query{
 getAllFriend{
  id
  firstName
    }
}
```

## Add a new series

```
mutation{
  addASeries(series:{
    seriesName:"Peaky Blinders",
    year:2014,
    rating:THREE
  }){
     id
    seriesName
  }
}
```

## Find a series

```
query{
  findASeries(id:"609a98e66cbbfb15797b89ab"){
    id
    seriesName
    year
    rating
  }
}
```
