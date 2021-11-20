import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateOrConnectWithoutOPInput } from "../inputs/GameCreateOrConnectWithoutOPInput";
import { GameCreateWithoutOPInput } from "../inputs/GameCreateWithoutOPInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameCreateNestedManyWithoutOPInput", {
  isAbstract: true
})
export class GameCreateNestedManyWithoutOPInput {
  @TypeGraphQL.Field(_type => [GameCreateWithoutOPInput], {
    nullable: true
  })
  create?: GameCreateWithoutOPInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameCreateOrConnectWithoutOPInput], {
    nullable: true
  })
  connectOrCreate?: GameCreateOrConnectWithoutOPInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameWhereUniqueInput], {
    nullable: true
  })
  connect?: GameWhereUniqueInput[] | undefined;
}
