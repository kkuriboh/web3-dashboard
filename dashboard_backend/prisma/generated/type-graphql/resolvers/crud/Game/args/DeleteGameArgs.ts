import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GameWhereUniqueInput } from "../../../inputs/GameWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteGameArgs {
  @TypeGraphQL.Field(_type => GameWhereUniqueInput, {
    nullable: false
  })
  where!: GameWhereUniqueInput;
}
