import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateWithoutOPInput } from "../inputs/GameCreateWithoutOPInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameCreateOrConnectWithoutOPInput", {
  isAbstract: true
})
export class GameCreateOrConnectWithoutOPInput {
  @TypeGraphQL.Field(_type => GameWhereUniqueInput, {
    nullable: false
  })
  where!: GameWhereUniqueInput;

  @TypeGraphQL.Field(_type => GameCreateWithoutOPInput, {
    nullable: false
  })
  create!: GameCreateWithoutOPInput;
}
