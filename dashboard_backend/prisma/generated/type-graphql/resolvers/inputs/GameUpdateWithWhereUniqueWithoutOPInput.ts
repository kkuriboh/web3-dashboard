import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameUpdateWithoutOPInput } from "../inputs/GameUpdateWithoutOPInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameUpdateWithWhereUniqueWithoutOPInput", {
  isAbstract: true
})
export class GameUpdateWithWhereUniqueWithoutOPInput {
  @TypeGraphQL.Field(_type => GameWhereUniqueInput, {
    nullable: false
  })
  where!: GameWhereUniqueInput;

  @TypeGraphQL.Field(_type => GameUpdateWithoutOPInput, {
    nullable: false
  })
  data!: GameUpdateWithoutOPInput;
}
