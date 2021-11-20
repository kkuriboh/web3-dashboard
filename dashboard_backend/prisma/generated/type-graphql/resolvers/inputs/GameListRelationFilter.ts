import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameWhereInput } from "../inputs/GameWhereInput";

@TypeGraphQL.InputType("GameListRelationFilter", {
  isAbstract: true
})
export class GameListRelationFilter {
  @TypeGraphQL.Field(_type => GameWhereInput, {
    nullable: true
  })
  every?: GameWhereInput | undefined;

  @TypeGraphQL.Field(_type => GameWhereInput, {
    nullable: true
  })
  some?: GameWhereInput | undefined;

  @TypeGraphQL.Field(_type => GameWhereInput, {
    nullable: true
  })
  none?: GameWhereInput | undefined;
}
