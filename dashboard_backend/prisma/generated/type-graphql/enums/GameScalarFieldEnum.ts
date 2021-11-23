import * as TypeGraphQL from "type-graphql";

export enum GameScalarFieldEnum {
  id = "id",
  name = "name",
  developer = "developer",
  category = "category",
  description = "description",
  price = "price",
  releaseDate = "releaseDate",
  image = "image",
  OPId = "OPId",
  createdAt = "createdAt",
  updatedAt = "updatedAt"
}
TypeGraphQL.registerEnumType(GameScalarFieldEnum, {
  name: "GameScalarFieldEnum",
  description: undefined,
});
