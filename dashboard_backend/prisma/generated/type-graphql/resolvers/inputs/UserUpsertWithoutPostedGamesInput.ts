import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPostedGamesInput } from "../inputs/UserCreateWithoutPostedGamesInput";
import { UserUpdateWithoutPostedGamesInput } from "../inputs/UserUpdateWithoutPostedGamesInput";

@TypeGraphQL.InputType("UserUpsertWithoutPostedGamesInput", {
  isAbstract: true
})
export class UserUpsertWithoutPostedGamesInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPostedGamesInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPostedGamesInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPostedGamesInput, {
    nullable: false
  })
  create!: UserCreateWithoutPostedGamesInput;
}
