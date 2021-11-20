import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateWithoutOPInput } from "../inputs/GameCreateWithoutOPInput";
import { GameUpdateWithoutOPInput } from "../inputs/GameUpdateWithoutOPInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameUpsertWithWhereUniqueWithoutOPInput", {
  isAbstract: true
})
export class GameUpsertWithWhereUniqueWithoutOPInput {
  @TypeGraphQL.Field(_type => GameWhereUniqueInput, {
    nullable: false
  })
  where!: GameWhereUniqueInput;

  @TypeGraphQL.Field(_type => GameUpdateWithoutOPInput, {
    nullable: false
  })
  update!: GameUpdateWithoutOPInput;

  @TypeGraphQL.Field(_type => GameCreateWithoutOPInput, {
    nullable: false
  })
  create!: GameCreateWithoutOPInput;
}
