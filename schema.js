const { gql } = require('apollo-server');

exports.typeDefs = gql`
    type Query {
        welcome: String,
        numOfCourses: Int,
        price: Float,
        isTrainer: Boolean,
        nullValue: String!
        courses(filter: CourseFilter): [Course!]!
        course(id: ID!): Course
        genres: [Genre!]!
        genre(id: ID!): Genre,
    }
    type Course {
        id: ID!,
        name: String!,
        title: String!,
        price: Float!,
        discount: Boolean!,
        genre: Genre,
        reviews: [Review!]!,
    }
    type Genre {
        id: ID!,
        name: String!,
        courses(filter: CourseFilter): [Course!]!,
    },
    type Review {
        id: ID!,
        date: String!,
        title: String!,
        comment: String!,
        rating: Int!,
    },
    input CourseFilter {
        discount: Boolean,
        avgRating: Int,
    }
`;
