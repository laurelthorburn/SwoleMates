const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID!
    email: String!
  }
  type Exercise {
    _id: ID!
    type: String!
    durationInMinutes: String!
    cardioDistanceInMiles: String!
    repetitions: Int!
    sets: Int!
    weight: Int!
    caloriesBurnt: Int!
    date: String!
  }

  type Workout {
    id: Int!
    date: String!
    routine: [ID!]
  }
  type Auth {
    token: ID!
    user: User
  }
  type Query {
    getUser: User
    allExercises: [Exercise]!
  }

  type Mutation {
    createUser(email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth

    startProfile(
      firstName: String!
      lastName: String!
      weight: Float!
      age: Int!
      height: Int!
      sex: String!
      activity: Float
      goal: String!
    ): User

    addCardio(
      id: Int!
      type: String!
      durationInMinutes: String!
      cardioDistanceInMiles: String!
      date: String!
    ): Exercise

    addStrength(
      id: Int!
      type: String!
      repetitions: String!
      sets: String!
      weight: String!
      date: String!
    ): Exercise

    addStretching(
      id: Int!
      type: String!
      durationInMinutes: String!
      date: String!
    ): Exercise

    addWorkout(id: Int!, date: String!, routine: [ID!]): Workout

    updateWeight(weight: Float!): User
  }
`;

module.exports = typeDefs;
