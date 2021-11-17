import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Game = {
  __typename?: 'Game';
  OP: User;
  category: Scalars['String'];
  createdAt: Scalars['String'];
  description: Scalars['String'];
  developer: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
  price: Scalars['String'];
  releaseDate: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type GameResponse = {
  __typename?: 'GameResponse';
  errors?: Maybe<Array<FieldError>>;
  game?: Maybe<Game>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  errors?: Maybe<Array<FieldError>>;
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addGame: GameResponse;
  deleteGame: Scalars['Boolean'];
  deleteUser: Scalars['Boolean'];
  login: LoginResponse;
  register: UserResponse;
  updateGame: GameResponse;
  updateUser: UserResponse;
};


export type MutationAddGameArgs = {
  options: GameInput;
};


export type MutationDeleteGameArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UserInput;
};


export type MutationUpdateGameArgs = {
  id: Scalars['Float'];
  options: GameInput;
};


export type MutationUpdateUserArgs = {
  id: Scalars['Float'];
  options: UserInput;
};

export type Query = {
  __typename?: 'Query';
  getGameById?: Maybe<Game>;
  getUserById?: Maybe<User>;
  getUsers?: Maybe<Array<User>>;
  selectGames?: Maybe<Array<Game>>;
};


export type QueryGetGameByIdArgs = {
  id: Scalars['Float'];
};


export type QueryGetUserByIdArgs = {
  id: Scalars['Float'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type GameInput = {
  OPId: Scalars['Float'];
  category: Scalars['String'];
  description: Scalars['String'];
  developer: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['String'];
  releaseDate: Scalars['String'];
};

export type UserInput = {
  country: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type AddGameMutationVariables = Exact<{
  options: GameInput;
}>;


export type AddGameMutation = { __typename?: 'Mutation', addGame: { __typename?: 'GameResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined } };

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user: { __typename?: 'User', id: number, name: string, email: string } } };

export type RegisterMutationVariables = Exact<{
  options: UserInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: number, name: string, email: string } | null | undefined } };

export type GetUserByIdQueryVariables = Exact<{
  getUserByIdId: Scalars['Float'];
}>;


export type GetUserByIdQuery = { __typename?: 'Query', getUserById?: { __typename?: 'User', id: number, name: string, email: string } | null | undefined };

export type SelectGamesQueryVariables = Exact<{ [key: string]: never; }>;


export type SelectGamesQuery = { __typename?: 'Query', selectGames?: Array<{ __typename?: 'Game', id: number, name: string, developer: string, category: string, description: string, price: string, releaseDate: string }> | null | undefined };


export const AddGameDocument = gql`
    mutation AddGame($options: gameInput!) {
  addGame(options: $options) {
    errors {
      field
      message
    }
  }
}
    `;
export type AddGameMutationFn = Apollo.MutationFunction<AddGameMutation, AddGameMutationVariables>;

/**
 * __useAddGameMutation__
 *
 * To run a mutation, you first call `useAddGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addGameMutation, { data, loading, error }] = useAddGameMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useAddGameMutation(baseOptions?: Apollo.MutationHookOptions<AddGameMutation, AddGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddGameMutation, AddGameMutationVariables>(AddGameDocument, options);
      }
export type AddGameMutationHookResult = ReturnType<typeof useAddGameMutation>;
export type AddGameMutationResult = Apollo.MutationResult<AddGameMutation>;
export type AddGameMutationOptions = Apollo.BaseMutationOptions<AddGameMutation, AddGameMutationVariables>;
export const LoginDocument = gql`
    mutation Login($password: String!, $email: String!) {
  login(password: $password, email: $email) {
    errors {
      field
      message
    }
    user {
      id
      name
      email
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      password: // value for 'password'
 *      email: // value for 'email'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: userInput!) {
  register(options: $options) {
    errors {
      field
      message
    }
    user {
      id
      name
      email
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($getUserByIdId: Float!) {
  getUserById(id: $getUserByIdId) {
    id
    name
    email
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      getUserByIdId: // value for 'getUserByIdId'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const SelectGamesDocument = gql`
    query SelectGames {
  selectGames {
    id
    name
    developer
    category
    description
    price
    releaseDate
  }
}
    `;

/**
 * __useSelectGamesQuery__
 *
 * To run a query within a React component, call `useSelectGamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectGamesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSelectGamesQuery({
 *   variables: {
 *   },
 * });
 */
export function useSelectGamesQuery(baseOptions?: Apollo.QueryHookOptions<SelectGamesQuery, SelectGamesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SelectGamesQuery, SelectGamesQueryVariables>(SelectGamesDocument, options);
      }
export function useSelectGamesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SelectGamesQuery, SelectGamesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SelectGamesQuery, SelectGamesQueryVariables>(SelectGamesDocument, options);
        }
export type SelectGamesQueryHookResult = ReturnType<typeof useSelectGamesQuery>;
export type SelectGamesLazyQueryHookResult = ReturnType<typeof useSelectGamesLazyQuery>;
export type SelectGamesQueryResult = Apollo.QueryResult<SelectGamesQuery, SelectGamesQueryVariables>;