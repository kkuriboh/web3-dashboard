import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostedGamesInput } from "../inputs/UserCreateOrConnectWithoutPostedGamesInput";
import { UserCreateWithoutPostedGamesInput } from "../inputs/UserCreateWithoutPostedGamesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutPostedGamesInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutPostedGamesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPostedGamesInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostedGamesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostedGamesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostedGamesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
