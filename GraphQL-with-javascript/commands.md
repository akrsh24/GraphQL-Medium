# GraphQL Queries

## Add a new friend

```
mutation {
  addFriend(
    friend: {
      firstName: "Tom"
      lastName: "Shelby"
      gender: MALE,
      language: "English"
      age: 25
      email: "abc@example.com",
      contacts:[{firstName:"Brain", lastName:"Shelby"}]
    }
  ){
    id
    firstName
    lastName
  }
}
```

## Add a new series

```
mutation{
  addSeries(series:{
    seriesName:"Billie Elish"
    year:2020
    rating:TWO
  }){
    id
    seriesName
    year
  }
}
```

## Get All Friends

```
query{
  getFriends{
    id
    firstName
    lastName
  }
}
```

## Get All Series

```
query{
  getSeries{
    id
    seriesName
  }
}
```

## Find a series

```
query{
  findASeries(id:"62260cc3e3db7f07f913b0eb"){
    id
    seriesName
    year
    rating
  }
}
```

## Find a friend

```
query{
  findAFriend(id:"62262a14918e381c23b4338f"){
   id
    firstName
  }
}
```
