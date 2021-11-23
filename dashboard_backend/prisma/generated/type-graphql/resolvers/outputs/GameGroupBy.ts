import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameAvgAggregate } from "../outputs/GameAvgAggregate";
import { GameCountAggregate } from "../outputs/GameCountAggregate";
import { GameMaxAggregate } from "../outputs/GameMaxAggregate";
import { GameMinAggregate } from "../outputs/GameMinAggregate";
import { GameSumAggregate } from "../outputs/GameSumAggregate";

@TypeGraphQL.ObjectType("GameGroupBy", {
  isAbstract: true
})
export class GameGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  developer!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  category!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Float, {
    nullable: false
  })
  price!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  releaseDate!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  image!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  OPId!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => GameCountAggregate, {
    nullable: true
  })
  _count!: GameCountAggregate | null;

  @TypeGraphQL.Field(_type => GameAvgAggregate, {
    nullable: true
  })
  _avg!: GameAvgAggregate | null;

  @TypeGraphQL.Field(_type => GameSumAggregate, {
    nullable: true
  })
  _sum!: GameSumAggregate | null;

  @TypeGraphQL.Field(_type => GameMinAggregate, {
    nullable: true
  })
  _min!: GameMinAggregate | null;

  @TypeGraphQL.Field(_type => GameMaxAggregate, {
    nullable: true
  })
  _max!: GameMaxAggregate | null;
}
