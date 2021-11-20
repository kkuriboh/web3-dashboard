import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GameUpdateManyMutationInput } from "../../../inputs/GameUpdateManyMutationInput";
import { GameWhereInput } from "../../../inputs/GameWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyGameArgs {
  @TypeGraphQL.Field(_type => GameUpdateManyMutationInput, {
    nullable: false
  })
  data!: GameUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => GameWhereInput, {
    nullable: true
  })
  where?: GameWhereInput | undefined;
}
