import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GameWhereInput } from "../../../inputs/GameWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyGameArgs {
  @TypeGraphQL.Field(_type => GameWhereInput, {
    nullable: true
  })
  where?: GameWhereInput | undefined;
}
