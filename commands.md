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

## Update a series

```
mutation{
  updateASeries(series:{
    id:"609a98d76cbbfb15797b89aa",
  rating:TWO
  }){
    id
    rating
    year
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

## Aliases

```
query{
  serie:findASeries(id:"609a98e66cbbfb15797b89ab"){
    id
    rating
    seriesName
  }
  friends:getAllFriend{
    firstName
    lastName
    gender
  }
}
```

## Fragment

```
query{
  oneSeries:findASeries(id:"609a98d76cbbfb15797b89aa"){
    ...seriesFragment
  }
  otherSeries:findASeries(id:"609a98f06cbbfb15797b89ac"){
    ...seriesFragment
  }
}

fragment seriesFragment on Series{
   seriesName
   year
}
```
