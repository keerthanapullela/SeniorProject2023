/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRatings = /* GraphQL */ `
  query GetRatings($id: ID!) {
    getRatings(id: $id) {
      id
      Rating
      Review
      businessesID
      BusinessReviews {
        id
        Name
        Address {
          Street
          City
          State
          PostalCode
        }
        Category
        BusinessImage
        Hours
        Owner {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          createdAt
          updatedAt
        }
        Reviews {
          nextToken
        }
        usersID
        createdAt
        updatedAt
      }
      UserReviews {
        items {
          id
          ratingsId
          usersId
          createdAt
          updatedAt
        }
        nextToken
      }
      usersID
      createdAt
      updatedAt
    }
  }
`;
export const listRatings = /* GraphQL */ `
  query ListRatings(
    $filter: ModelRatingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Rating
        Review
        businessesID
        BusinessReviews {
          id
          Name
          Category
          BusinessImage
          Hours
          usersID
          createdAt
          updatedAt
        }
        UserReviews {
          nextToken
        }
        usersID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBusinesses = /* GraphQL */ `
  query GetBusinesses($id: ID!) {
    getBusinesses(id: $id) {
      id
      Name
      Address {
        Street
        City
        State
        PostalCode
      }
      Category
      BusinessImage
      Hours
      Owner {
        id
        UserName
        FirstName
        LastName
        Email
        Phone
        Birthday
        ProfileImage
        OwnedBusinesses {
          nextToken
        }
        ratingss {
          nextToken
        }
        UserRatings {
          nextToken
        }
        createdAt
        updatedAt
      }
      Reviews {
        items {
          id
          Rating
          Review
          businessesID
          usersID
          createdAt
          updatedAt
        }
        nextToken
      }
      usersID
      createdAt
      updatedAt
    }
  }
`;
export const listBusinesses = /* GraphQL */ `
  query ListBusinesses(
    $filter: ModelBusinessesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        Address {
          Street
          City
          State
          PostalCode
        }
        Category
        BusinessImage
        Hours
        Owner {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          createdAt
          updatedAt
        }
        Reviews {
          nextToken
        }
        usersID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      UserName
      FirstName
      LastName
      Email
      Phone
      Birthday
      ProfileImage
      OwnedBusinesses {
        items {
          id
          Name
          Category
          BusinessImage
          Hours
          usersID
          createdAt
          updatedAt
        }
        nextToken
      }
      ratingss {
        items {
          id
          ratingsId
          usersId
          createdAt
          updatedAt
        }
        nextToken
      }
      UserRatings {
        items {
          id
          Rating
          Review
          businessesID
          usersID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        UserName
        FirstName
        LastName
        Email
        Phone
        Birthday
        ProfileImage
        OwnedBusinesses {
          nextToken
        }
        ratingss {
          nextToken
        }
        UserRatings {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLogos = /* GraphQL */ `
  query GetLogos($id: ID!) {
    getLogos(id: $id) {
      id
      BigLogo
      SmallLogo
      createdAt
      updatedAt
    }
  }
`;
export const listLogos = /* GraphQL */ `
  query ListLogos(
    $filter: ModelLogosFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        BigLogo
        SmallLogo
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRatingsUsers = /* GraphQL */ `
  query GetRatingsUsers($id: ID!) {
    getRatingsUsers(id: $id) {
      id
      ratingsId
      usersId
      ratings {
        id
        Rating
        Review
        businessesID
        BusinessReviews {
          id
          Name
          Category
          BusinessImage
          Hours
          usersID
          createdAt
          updatedAt
        }
        UserReviews {
          nextToken
        }
        usersID
        createdAt
        updatedAt
      }
      users {
        id
        UserName
        FirstName
        LastName
        Email
        Phone
        Birthday
        ProfileImage
        OwnedBusinesses {
          nextToken
        }
        ratingss {
          nextToken
        }
        UserRatings {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listRatingsUsers = /* GraphQL */ `
  query ListRatingsUsers(
    $filter: ModelRatingsUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRatingsUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ratingsId
        usersId
        ratings {
          id
          Rating
          Review
          businessesID
          usersID
          createdAt
          updatedAt
        }
        users {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ratingsByBusinessesID = /* GraphQL */ `
  query RatingsByBusinessesID(
    $businessesID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRatingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingsByBusinessesID(
      businessesID: $businessesID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Rating
        Review
        businessesID
        BusinessReviews {
          id
          Name
          Category
          BusinessImage
          Hours
          usersID
          createdAt
          updatedAt
        }
        UserReviews {
          nextToken
        }
        usersID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ratingsByUsersID = /* GraphQL */ `
  query RatingsByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRatingsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingsByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Rating
        Review
        businessesID
        BusinessReviews {
          id
          Name
          Category
          BusinessImage
          Hours
          usersID
          createdAt
          updatedAt
        }
        UserReviews {
          nextToken
        }
        usersID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const businessesByUsersID = /* GraphQL */ `
  query BusinessesByUsersID(
    $usersID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelBusinessesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    businessesByUsersID(
      usersID: $usersID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Name
        Address {
          Street
          City
          State
          PostalCode
        }
        Category
        BusinessImage
        Hours
        Owner {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          createdAt
          updatedAt
        }
        Reviews {
          nextToken
        }
        usersID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ratingsUsersByRatingsId = /* GraphQL */ `
  query RatingsUsersByRatingsId(
    $ratingsId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRatingsUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingsUsersByRatingsId(
      ratingsId: $ratingsId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ratingsId
        usersId
        ratings {
          id
          Rating
          Review
          businessesID
          usersID
          createdAt
          updatedAt
        }
        users {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const ratingsUsersByUsersId = /* GraphQL */ `
  query RatingsUsersByUsersId(
    $usersId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRatingsUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    ratingsUsersByUsersId(
      usersId: $usersId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ratingsId
        usersId
        ratings {
          id
          Rating
          Review
          businessesID
          usersID
          createdAt
          updatedAt
        }
        users {
          id
          UserName
          FirstName
          LastName
          Email
          Phone
          Birthday
          ProfileImage
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
