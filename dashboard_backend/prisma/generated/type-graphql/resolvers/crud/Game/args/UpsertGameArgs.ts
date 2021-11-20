import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GameCreateInput } from "../../../inputs/GameCreateInput";
import { GameUpdateInput } from "../../../inputs/GameUpdateInput";
import { GameWhereUniqueInput } from "../../../inputs/GameWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertGameArgs {
  @TypeGraphQL.Field(_type => GameWhereUniqueInput, {
    nullable: false
  })
  where!: GameWhereUniqueInput;

  @TypeGraphQL.Field(_type => GameCreateInput, {
    nullable: false
  })
  create!: GameCreateInput;

  @TypeGraphQL.Field(_type => GameUpdateInput, {
    nullable: false
  })
  update!: GameUpdateInput;
}
