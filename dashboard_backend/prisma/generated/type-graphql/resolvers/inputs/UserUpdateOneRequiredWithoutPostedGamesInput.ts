import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPostedGamesInput } from "../inputs/UserCreateOrConnectWithoutPostedGamesInput";
import { UserCreateWithoutPostedGamesInput } from "../inputs/UserCreateWithoutPostedGamesInput";
import { UserUpdateWithoutPostedGamesInput } from "../inputs/UserUpdateWithoutPostedGamesInput";
import { UserUpsertWithoutPostedGamesInput } from "../inputs/UserUpsertWithoutPostedGamesInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutPostedGamesInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutPostedGamesInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPostedGamesInput, {
    nullable: true
  })
  create?: UserCreateWithoutPostedGamesInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPostedGamesInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPostedGamesInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutPostedGamesInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutPostedGamesInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutPostedGamesInput, {
    nullable: true
  })
  update?: UserUpdateWithoutPostedGamesInput | undefined;
}
