import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GameOrderByWithRelationInput } from "../../../inputs/GameOrderByWithRelationInput";
import { GameWhereInput } from "../../../inputs/GameWhereInput";
import { GameWhereUniqueInput } from "../../../inputs/GameWhereUniqueInput";
import { GameScalarFieldEnum } from "../../../../enums/GameScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class UserPostedGamesArgs {
  @TypeGraphQL.Field(_type => GameWhereInput, {
    nullable: true
  })
  where?: GameWhereInput | undefined;

  @TypeGraphQL.Field(_type => [GameOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: GameOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => GameWhereUniqueInput, {
    nullable: true
  })
  cursor?: GameWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [GameScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "name" | "developer" | "category" | "description" | "price" | "releaseDate" | "OPId" | "createdAt" | "updatedAt"> | undefined;
}
