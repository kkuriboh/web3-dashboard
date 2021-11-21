import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("GameScalarWhereInput", {
  isAbstract: true
})
export class GameScalarWhereInput {
  @TypeGraphQL.Field(_type => [GameScalarWhereInput], {
    nullable: true
  })
  AND?: GameScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameScalarWhereInput], {
    nullable: true
  })
  OR?: GameScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameScalarWhereInput], {
    nullable: true
  })
  NOT?: GameScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  developer?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  category?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  description?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => FloatFilter, {
    nullable: true
  })
  price?: FloatFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  releaseDate?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;
}
