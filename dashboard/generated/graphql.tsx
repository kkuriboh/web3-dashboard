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
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateGame = {
  __typename?: 'AggregateGame';
  _avg?: Maybe<GameAvgAggregate>;
  _count?: Maybe<GameCountAggregate>;
  _max?: Maybe<GameMaxAggregate>;
  _min?: Maybe<GameMinAggregate>;
  _sum?: Maybe<GameSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type FloatFieldUpdateOperationsInput = {
  decrement?: Maybe<Scalars['Float']>;
  divide?: Maybe<Scalars['Float']>;
  increment?: Maybe<Scalars['Float']>;
  multiply?: Maybe<Scalars['Float']>;
  set?: Maybe<Scalars['Float']>;
};

export type FloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type FloatWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedFloatFilter>;
  _min?: Maybe<NestedFloatFilter>;
  _sum?: Maybe<NestedFloatFilter>;
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type Game = {
  __typename?: 'Game';
  OP: User;
  category: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  developer: Scalars['String'];
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  releaseDate: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type GameAvgAggregate = {
  __typename?: 'GameAvgAggregate';
  OPId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
};

export type GameAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
};

export type GameCountAggregate = {
  __typename?: 'GameCountAggregate';
  OPId: Scalars['Int'];
  _all: Scalars['Int'];
  category: Scalars['Int'];
  createdAt: Scalars['Int'];
  description: Scalars['Int'];
  developer: Scalars['Int'];
  id: Scalars['Int'];
  image: Scalars['Int'];
  name: Scalars['Int'];
  price: Scalars['Int'];
  releaseDate: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type GameCountOrderByAggregateInput = {
  category?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  developer?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  releaseDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type GameCreateInput = {
  OP: UserCreateNestedOneWithoutPostedGamesInput;
  category: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  developer: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  releaseDate: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GameCreateNestedManyWithoutOpInput = {
  connect?: Maybe<Array<GameWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GameCreateOrConnectWithoutOpInput>>;
  create?: Maybe<Array<GameCreateWithoutOpInput>>;
};

export type GameCreateOrConnectWithoutOpInput = {
  create: GameCreateWithoutOpInput;
  where: GameWhereUniqueInput;
};

export type GameCreateWithoutOpInput = {
  category: Scalars['String'];
  createdAt?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  developer: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  releaseDate: Scalars['String'];
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GameGroupBy = {
  __typename?: 'GameGroupBy';
  OPId: Scalars['Int'];
  _avg?: Maybe<GameAvgAggregate>;
  _count?: Maybe<GameCountAggregate>;
  _max?: Maybe<GameMaxAggregate>;
  _min?: Maybe<GameMinAggregate>;
  _sum?: Maybe<GameSumAggregate>;
  category: Scalars['String'];
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  developer: Scalars['String'];
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  price: Scalars['Float'];
  releaseDate: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type GameListRelationFilter = {
  every?: Maybe<GameWhereInput>;
  none?: Maybe<GameWhereInput>;
  some?: Maybe<GameWhereInput>;
};

export type GameMaxAggregate = {
  __typename?: 'GameMaxAggregate';
  OPId?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  developer?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  releaseDate?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GameMaxOrderByAggregateInput = {
  category?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  developer?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  releaseDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type GameMinAggregate = {
  __typename?: 'GameMinAggregate';
  OPId?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  developer?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  image?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Float']>;
  releaseDate?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type GameMinOrderByAggregateInput = {
  category?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  developer?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  releaseDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type GameOrderByRelationAggregateInput = {
  _count?: Maybe<SortOrder>;
};

export type GameOrderByWithAggregationInput = {
  _avg?: Maybe<GameAvgOrderByAggregateInput>;
  _count?: Maybe<GameCountOrderByAggregateInput>;
  _max?: Maybe<GameMaxOrderByAggregateInput>;
  _min?: Maybe<GameMinOrderByAggregateInput>;
  _sum?: Maybe<GameSumOrderByAggregateInput>;
  category?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  developer?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  releaseDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type GameOrderByWithRelationInput = {
  OP?: Maybe<UserOrderByWithRelationInput>;
  category?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  developer?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  image?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
  releaseDate?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum GameScalarFieldEnum {
  OpId = 'OPId',
  Category = 'category',
  CreatedAt = 'createdAt',
  Description = 'description',
  Developer = 'developer',
  Id = 'id',
  Image = 'image',
  Name = 'name',
  Price = 'price',
  ReleaseDate = 'releaseDate',
  UpdatedAt = 'updatedAt'
}

export type GameScalarWhereInput = {
  AND?: Maybe<Array<GameScalarWhereInput>>;
  NOT?: Maybe<Array<GameScalarWhereInput>>;
  OR?: Maybe<Array<GameScalarWhereInput>>;
  category?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  developer?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  price?: Maybe<FloatFilter>;
  releaseDate?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type GameScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<GameScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<GameScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<GameScalarWhereWithAggregatesInput>>;
  category?: Maybe<StringWithAggregatesFilter>;
  createdAt?: Maybe<DateTimeWithAggregatesFilter>;
  description?: Maybe<StringWithAggregatesFilter>;
  developer?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  image?: Maybe<StringNullableWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  price?: Maybe<FloatWithAggregatesFilter>;
  releaseDate?: Maybe<StringWithAggregatesFilter>;
  updatedAt?: Maybe<DateTimeWithAggregatesFilter>;
};

export type GameSumAggregate = {
  __typename?: 'GameSumAggregate';
  OPId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Float']>;
};

export type GameSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
  price?: Maybe<SortOrder>;
};

export type GameUpdateInput = {
  OP?: Maybe<UserUpdateOneRequiredWithoutPostedGamesInput>;
  category?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  developer?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  releaseDate?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GameUpdateManyMutationInput = {
  category?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  developer?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  releaseDate?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GameUpdateManyWithWhereWithoutOpInput = {
  data: GameUpdateManyMutationInput;
  where: GameScalarWhereInput;
};

export type GameUpdateManyWithoutOpInput = {
  connect?: Maybe<Array<GameWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<GameCreateOrConnectWithoutOpInput>>;
  create?: Maybe<Array<GameCreateWithoutOpInput>>;
  delete?: Maybe<Array<GameWhereUniqueInput>>;
  deleteMany?: Maybe<Array<GameScalarWhereInput>>;
  disconnect?: Maybe<Array<GameWhereUniqueInput>>;
  set?: Maybe<Array<GameWhereUniqueInput>>;
  update?: Maybe<Array<GameUpdateWithWhereUniqueWithoutOpInput>>;
  updateMany?: Maybe<Array<GameUpdateManyWithWhereWithoutOpInput>>;
  upsert?: Maybe<Array<GameUpsertWithWhereUniqueWithoutOpInput>>;
};

export type GameUpdateWithWhereUniqueWithoutOpInput = {
  data: GameUpdateWithoutOpInput;
  where: GameWhereUniqueInput;
};

export type GameUpdateWithoutOpInput = {
  category?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  description?: Maybe<StringFieldUpdateOperationsInput>;
  developer?: Maybe<StringFieldUpdateOperationsInput>;
  image?: Maybe<NullableStringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  price?: Maybe<FloatFieldUpdateOperationsInput>;
  releaseDate?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type GameUpsertWithWhereUniqueWithoutOpInput = {
  create: GameCreateWithoutOpInput;
  update: GameUpdateWithoutOpInput;
  where: GameWhereUniqueInput;
};

export type GameWhereInput = {
  AND?: Maybe<Array<GameWhereInput>>;
  NOT?: Maybe<Array<GameWhereInput>>;
  OP?: Maybe<UserRelationFilter>;
  OR?: Maybe<Array<GameWhereInput>>;
  category?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  description?: Maybe<StringFilter>;
  developer?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  image?: Maybe<StringNullableFilter>;
  name?: Maybe<StringFilter>;
  price?: Maybe<FloatFilter>;
  releaseDate?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type GameWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createGame: Game;
  createUser: User;
  deleteGame?: Maybe<Game>;
  deleteManyGame: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteUser?: Maybe<User>;
  login: UserResponse;
  register: UserResponse;
  updateGame?: Maybe<Game>;
  updateManyGame: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateUser?: Maybe<User>;
  upsertGame: Game;
  upsertUser: User;
};


export type MutationCreateGameArgs = {
  data: GameCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteGameArgs = {
  where: GameWhereUniqueInput;
};


export type MutationDeleteManyGameArgs = {
  where?: Maybe<GameWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: UserInputType;
};


export type MutationUpdateGameArgs = {
  data: GameUpdateInput;
  where: GameWhereUniqueInput;
};


export type MutationUpdateManyGameArgs = {
  data: GameUpdateManyMutationInput;
  where?: Maybe<GameWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertGameArgs = {
  create: GameCreateInput;
  update: GameUpdateInput;
  where: GameWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedDateTimeFilter>;
  _min?: Maybe<NestedDateTimeFilter>;
  equals?: Maybe<Scalars['DateTime']>;
  gt?: Maybe<Scalars['DateTime']>;
  gte?: Maybe<Scalars['DateTime']>;
  in?: Maybe<Array<Scalars['DateTime']>>;
  lt?: Maybe<Scalars['DateTime']>;
  lte?: Maybe<Scalars['DateTime']>;
  not?: Maybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['DateTime']>>;
};

export type NestedFloatFilter = {
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedFloatWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedFloatFilter>;
  _min?: Maybe<NestedFloatFilter>;
  _sum?: Maybe<NestedFloatFilter>;
  equals?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Scalars['Float']>>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  not?: Maybe<NestedFloatWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: Maybe<NestedFloatFilter>;
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedIntFilter>;
  _min?: Maybe<NestedIntFilter>;
  _sum?: Maybe<NestedIntFilter>;
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateGame: AggregateGame;
  aggregateUser: AggregateUser;
  findFirstGame?: Maybe<Game>;
  findFirstUser?: Maybe<User>;
  game?: Maybe<Game>;
  games: Array<Game>;
  groupByGame: Array<GameGroupBy>;
  groupByUser: Array<UserGroupBy>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateGameArgs = {
  cursor?: Maybe<GameWhereUniqueInput>;
  orderBy?: Maybe<Array<GameOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GameWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindFirstGameArgs = {
  cursor?: Maybe<GameWhereUniqueInput>;
  distinct?: Maybe<Array<GameScalarFieldEnum>>;
  orderBy?: Maybe<Array<GameOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GameWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryGameArgs = {
  where: GameWhereUniqueInput;
};


export type QueryGamesArgs = {
  cursor?: Maybe<GameWhereUniqueInput>;
  distinct?: Maybe<Array<GameScalarFieldEnum>>;
  orderBy?: Maybe<Array<GameOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GameWhereInput>;
};


export type QueryGroupByGameArgs = {
  by: Array<GameScalarFieldEnum>;
  having?: Maybe<GameScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<GameOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GameWhereInput>;
};


export type QueryGroupByUserArgs = {
  by: Array<UserScalarFieldEnum>;
  having?: Maybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: Maybe<Array<UserOrderByWithAggregationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: Maybe<NestedIntNullableFilter>;
  _max?: Maybe<NestedStringNullableFilter>;
  _min?: Maybe<NestedStringNullableFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: Maybe<NestedIntFilter>;
  _max?: Maybe<NestedStringFilter>;
  _min?: Maybe<NestedStringFilter>;
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringWithAggregatesFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  country: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  postedGames: Array<Game>;
};


export type UserPostedGamesArgs = {
  cursor?: Maybe<GameWhereUniqueInput>;
  distinct?: Maybe<Array<GameScalarFieldEnum>>;
  orderBy?: Maybe<Array<GameOrderByWithRelationInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<GameWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  postedGames: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  country: Scalars['Int'];
  createdAt: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
  password: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  country?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
};

export type UserCreateInput = {
  country: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
  postedGames?: Maybe<GameCreateNestedManyWithoutOpInput>;
};

export type UserCreateNestedOneWithoutPostedGamesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostedGamesInput>;
  create?: Maybe<UserCreateWithoutPostedGamesInput>;
};

export type UserCreateOrConnectWithoutPostedGamesInput = {
  create: UserCreateWithoutPostedGamesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutPostedGamesInput = {
  country: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  country: Scalars['String'];
  createdAt: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  password: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type UserInputType = {
  confirmPassword: Scalars['String'];
  country: Scalars['String'];
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMaxOrderByAggregateInput = {
  country?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type UserMinOrderByAggregateInput = {
  country?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: Maybe<UserAvgOrderByAggregateInput>;
  _count?: Maybe<UserCountOrderByAggregateInput>;
  _max?: Maybe<UserMaxOrderByAggregateInput>;
  _min?: Maybe<UserMinOrderByAggregateInput>;
  _sum?: Maybe<UserSumOrderByAggregateInput>;
  country?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  country?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  name?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  postedGames?: Maybe<GameOrderByRelationAggregateInput>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export enum UserScalarFieldEnum {
  Country = 'country',
  CreatedAt = 'createdAt',
  Email = 'email',
  Id = 'id',
  Name = 'name',
  Password = 'password',
  UpdatedAt = 'updatedAt'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: Maybe<Array<UserScalarWhereWithAggregatesInput>>;
  country?: Maybe<StringWithAggregatesFilter>;
  email?: Maybe<StringWithAggregatesFilter>;
  id?: Maybe<IntWithAggregatesFilter>;
  name?: Maybe<StringWithAggregatesFilter>;
  password?: Maybe<StringWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: Maybe<SortOrder>;
};

export type UserUpdateInput = {
  country?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  postedGames?: Maybe<GameUpdateManyWithoutOpInput>;
};

export type UserUpdateManyMutationInput = {
  country?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutPostedGamesInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutPostedGamesInput>;
  create?: Maybe<UserCreateWithoutPostedGamesInput>;
  update?: Maybe<UserUpdateWithoutPostedGamesInput>;
  upsert?: Maybe<UserUpsertWithoutPostedGamesInput>;
};

export type UserUpdateWithoutPostedGamesInput = {
  country?: Maybe<StringFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  name?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutPostedGamesInput = {
  create: UserCreateWithoutPostedGamesInput;
  update: UserUpdateWithoutPostedGamesInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  country?: Maybe<StringFilter>;
  email?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  name?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  postedGames?: Maybe<GameListRelationFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
};

export type CreateGameMutationVariables = Exact<{
  data: GameCreateInput;
}>;


export type CreateGameMutation = { __typename?: 'Mutation', createGame: { __typename?: 'Game', id: number } };

export type DeleteGameMutationVariables = Exact<{
  where: GameWhereUniqueInput;
}>;


export type DeleteGameMutation = { __typename?: 'Mutation', deleteGame?: { __typename?: 'Game', id: number } | null | undefined };

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  email: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', id: number, name: string, email: string, country: string, postedGames: Array<{ __typename?: 'Game', id: number, name: string }> } | null | undefined } };

export type RegisterMutationVariables = Exact<{
  options: UserInputType;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'UserResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, user?: { __typename?: 'User', email: string } | null | undefined } };

export type UpdateGameMutationVariables = Exact<{
  data: GameUpdateInput;
  where: GameWhereUniqueInput;
}>;


export type UpdateGameMutation = { __typename?: 'Mutation', updateGame?: { __typename?: 'Game', id: number } | null | undefined };

export type GameQueryVariables = Exact<{
  where: GameWhereUniqueInput;
}>;


export type GameQuery = { __typename?: 'Query', game?: { __typename?: 'Game', id: number, name: string, developer: string, category: string, description: string, price: number, releaseDate: string, OP: { __typename?: 'User', id: number, name: string } } | null | undefined };

export type GameWithImageQueryVariables = Exact<{
  where: GameWhereUniqueInput;
}>;


export type GameWithImageQuery = { __typename?: 'Query', game?: { __typename?: 'Game', id: number, name: string, developer: string, category: string, description: string, price: number, releaseDate: string, image?: string | null | undefined, OP: { __typename?: 'User', id: number, name: string } } | null | undefined };

export type GetUserQueryVariables = Exact<{
  where: UserWhereUniqueInput;
}>;


export type GetUserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: number, name: string, email: string, country: string } | null | undefined };

export type SelectGamesQueryVariables = Exact<{
  orderBy?: Maybe<Array<GameOrderByWithRelationInput> | GameOrderByWithRelationInput>;
}>;


export type SelectGamesQuery = { __typename?: 'Query', games: Array<{ __typename?: 'Game', id: number, name: string, developer: string, category: string, description: string, price: number, releaseDate: string, OP: { __typename?: 'User', id: number, name: string } }> };


export const CreateGameDocument = gql`
    mutation CreateGame($data: GameCreateInput!) {
  createGame(data: $data) {
    id
  }
}
    `;
export type CreateGameMutationFn = Apollo.MutationFunction<CreateGameMutation, CreateGameMutationVariables>;

/**
 * __useCreateGameMutation__
 *
 * To run a mutation, you first call `useCreateGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGameMutation, { data, loading, error }] = useCreateGameMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateGameMutation(baseOptions?: Apollo.MutationHookOptions<CreateGameMutation, CreateGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGameMutation, CreateGameMutationVariables>(CreateGameDocument, options);
      }
export type CreateGameMutationHookResult = ReturnType<typeof useCreateGameMutation>;
export type CreateGameMutationResult = Apollo.MutationResult<CreateGameMutation>;
export type CreateGameMutationOptions = Apollo.BaseMutationOptions<CreateGameMutation, CreateGameMutationVariables>;
export const DeleteGameDocument = gql`
    mutation DeleteGame($where: GameWhereUniqueInput!) {
  deleteGame(where: $where) {
    id
  }
}
    `;
export type DeleteGameMutationFn = Apollo.MutationFunction<DeleteGameMutation, DeleteGameMutationVariables>;

/**
 * __useDeleteGameMutation__
 *
 * To run a mutation, you first call `useDeleteGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteGameMutation, { data, loading, error }] = useDeleteGameMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteGameMutation(baseOptions?: Apollo.MutationHookOptions<DeleteGameMutation, DeleteGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteGameMutation, DeleteGameMutationVariables>(DeleteGameDocument, options);
      }
export type DeleteGameMutationHookResult = ReturnType<typeof useDeleteGameMutation>;
export type DeleteGameMutationResult = Apollo.MutationResult<DeleteGameMutation>;
export type DeleteGameMutationOptions = Apollo.BaseMutationOptions<DeleteGameMutation, DeleteGameMutationVariables>;
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
      country
      postedGames {
        id
        name
      }
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
    mutation Register($options: UserInputType!) {
  register(options: $options) {
    errors {
      field
      message
    }
    user {
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
export const UpdateGameDocument = gql`
    mutation UpdateGame($data: GameUpdateInput!, $where: GameWhereUniqueInput!) {
  updateGame(data: $data, where: $where) {
    id
  }
}
    `;
export type UpdateGameMutationFn = Apollo.MutationFunction<UpdateGameMutation, UpdateGameMutationVariables>;

/**
 * __useUpdateGameMutation__
 *
 * To run a mutation, you first call `useUpdateGameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGameMutation, { data, loading, error }] = useUpdateGameMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateGameMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGameMutation, UpdateGameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateGameMutation, UpdateGameMutationVariables>(UpdateGameDocument, options);
      }
export type UpdateGameMutationHookResult = ReturnType<typeof useUpdateGameMutation>;
export type UpdateGameMutationResult = Apollo.MutationResult<UpdateGameMutation>;
export type UpdateGameMutationOptions = Apollo.BaseMutationOptions<UpdateGameMutation, UpdateGameMutationVariables>;
export const GameDocument = gql`
    query Game($where: GameWhereUniqueInput!) {
  game(where: $where) {
    id
    name
    developer
    category
    description
    price
    releaseDate
    OP {
      id
      name
    }
  }
}
    `;

/**
 * __useGameQuery__
 *
 * To run a query within a React component, call `useGameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGameQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGameQuery(baseOptions: Apollo.QueryHookOptions<GameQuery, GameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GameQuery, GameQueryVariables>(GameDocument, options);
      }
export function useGameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GameQuery, GameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GameQuery, GameQueryVariables>(GameDocument, options);
        }
export type GameQueryHookResult = ReturnType<typeof useGameQuery>;
export type GameLazyQueryHookResult = ReturnType<typeof useGameLazyQuery>;
export type GameQueryResult = Apollo.QueryResult<GameQuery, GameQueryVariables>;
export const GameWithImageDocument = gql`
    query GameWithImage($where: GameWhereUniqueInput!) {
  game(where: $where) {
    id
    name
    developer
    category
    description
    price
    releaseDate
    image
    OP {
      id
      name
    }
  }
}
    `;

/**
 * __useGameWithImageQuery__
 *
 * To run a query within a React component, call `useGameWithImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGameWithImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGameWithImageQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGameWithImageQuery(baseOptions: Apollo.QueryHookOptions<GameWithImageQuery, GameWithImageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GameWithImageQuery, GameWithImageQueryVariables>(GameWithImageDocument, options);
      }
export function useGameWithImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GameWithImageQuery, GameWithImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GameWithImageQuery, GameWithImageQueryVariables>(GameWithImageDocument, options);
        }
export type GameWithImageQueryHookResult = ReturnType<typeof useGameWithImageQuery>;
export type GameWithImageLazyQueryHookResult = ReturnType<typeof useGameWithImageLazyQuery>;
export type GameWithImageQueryResult = Apollo.QueryResult<GameWithImageQuery, GameWithImageQueryVariables>;
export const GetUserDocument = gql`
    query getUser($where: UserWhereUniqueInput!) {
  user(where: $where) {
    id
    name
    email
    country
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const SelectGamesDocument = gql`
    query SelectGames($orderBy: [GameOrderByWithRelationInput!]) {
  games(orderBy: $orderBy) {
    id
    name
    developer
    category
    description
    price
    releaseDate
    OP {
      id
      name
    }
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
 *      orderBy: // value for 'orderBy'
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