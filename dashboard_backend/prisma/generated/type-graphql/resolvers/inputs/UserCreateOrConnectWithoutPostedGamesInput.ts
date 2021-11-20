import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPostedGamesInput } from "../inputs/UserCreateWithoutPostedGamesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutPostedGamesInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutPostedGamesInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPostedGamesInput, {
    nullable: false
  })
  create!: UserCreateWithoutPostedGamesInput;
}
