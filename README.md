# ecomm-app-graphql

```graphql
query Query($genreId: ID!) {
  genre(id: $genreId) {
    id,
    name,
    courses {
      name,
      title,
      price
    }
  }
}

{
  "genreId": "cat-01" 
}
```

```graphql
query($courseId: ID!) {
  course(id: $courseId) {
    id,
    name,
    title,
    price,
    genre {
      id,
      name
    },
    reviews {
      id,
      date,
      comment,
      rating
    }
  }
}

{
  "courseId": "book-01"
}
```

```graphql
query { 
  courses(filter: {discount: true}) {
    id,
    name,
    title
  }
}
```

```graphql
query Query($genreId: ID!) {
  genre(id: $genreId) {
    id,
    name,
    courses(filter: {discount: true}) {
      name,
      title,
      price
    }
  }
}
```

```graphql
query { 
  courses(filter: {avgRating: 2}) {
    id,
    name,
    title,
    reviews {
      rating
    }
  }
}
```