import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameScalarWhereInput } from "../inputs/GameScalarWhereInput";
import { GameUpdateManyMutationInput } from "../inputs/GameUpdateManyMutationInput";

@TypeGraphQL.InputType("GameUpdateManyWithWhereWithoutOPInput", {
  isAbstract: true
})
export class GameUpdateManyWithWhereWithoutOPInput {
  @TypeGraphQL.Field(_type => GameScalarWhereInput, {
    nullable: false
  })
  where!: GameScalarWhereInput;

  @TypeGraphQL.Field(_type => GameUpdateManyMutationInput, {
    nullable: false
  })
  data!: GameUpdateManyMutationInput;
}
