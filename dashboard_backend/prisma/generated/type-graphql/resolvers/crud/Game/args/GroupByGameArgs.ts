import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GameOrderByWithAggregationInput } from "../../../inputs/GameOrderByWithAggregationInput";
import { GameScalarWhereWithAggregatesInput } from "../../../inputs/GameScalarWhereWithAggregatesInput";
import { GameWhereInput } from "../../../inputs/GameWhereInput";
import { GameScalarFieldEnum } from "../../../../enums/GameScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByGameArgs {
  @TypeGraphQL.Field(_type => GameWhereInput, {
    nullable: true
  })
  where?: GameWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GameOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: GameOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "name" | "developer" | "category" | "description" | "price" | "releaseDate" | "OPId" | "createdAt" | "updatedAt">;

  @TypeGraphQL.Field(_type => GameScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: GameScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
