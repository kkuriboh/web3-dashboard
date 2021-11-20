import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GameUpdateInput } from "../../../inputs/GameUpdateInput";
import { GameWhereUniqueInput } from "../../../inputs/GameWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateGameArgs {
  @TypeGraphQL.Field(_type => GameUpdateInput, {
    nullable: false
  })
  data!: GameUpdateInput;

  @TypeGraphQL.Field(_type => GameWhereUniqueInput, {
    nullable: false
  })
  where!: GameWhereUniqueInput;
}
