# GraphQL Commands

## Insert a new catalog

```
mutation{
  createCatalog(
                input:{
			            type: "module",
                        title: "Azure Fundamentals",
                        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). ",
                        imageURL: "https://docs.microsoft.com/en-us/learn/achievements/fundamental-azure-concepts.svg",
                        linkURL: "https://www.google.com/",
                        tags: ["Azure", "Administrator", "Beginner", "Azure"]
                    })
                {
                    id
                    type
                }
        }
```

## Get All catalogs

```
query{
  getCatalogs{
    id
    type
    title
  }
}
```
