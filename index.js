const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
    type Query {
        welcome: String,
        numOfCourses: Int,
        price: Float,
        isTrainer: Boolean,
        nullValue: String!
        courses: [String!]!,
        coursesObjects: [Course!]!
    }
    type Course {
        id: ID!,
        title: String!,
        description: String!,
        views: Int!
    }
`;

const allCourses = [
    { id: 1, title: 'NodeJS', description: 'Learn NodeJS from scratch', views: 1000 },
    { id: 2, title: 'GraphQL', description: 'Master GraphQL', views: 2000 },
    { id: 3, title: 'React', description: 'Become a React expert', views: 3000 },
    { id: 4, title: 'Angular', description: 'Angular for beginners', views: 4000 }
]

const resolvers = {
    Query: {
        welcome: () => 'Weclome to the World of GraphQL!',
        numOfCourses: () => 12,
        price: () => 99.99,
        isTrainer: () => true,
        nullValue: () => 'it cannot be null',
        courses: () => ['NodeJS', 'GraphQL', 'React', 'Angular'],
        coursesObjects: () => allCourses
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => console.log(`Server is running at ${url}`));
