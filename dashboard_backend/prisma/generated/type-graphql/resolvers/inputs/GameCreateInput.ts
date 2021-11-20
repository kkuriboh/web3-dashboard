import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutPostedGamesInput } from "../inputs/UserCreateNestedOneWithoutPostedGamesInput";

@TypeGraphQL.InputType("GameCreateInput", {
  isAbstract: true
})
export class GameCreateInput {
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

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutPostedGamesInput, {
    nullable: false
  })
  OP!: UserCreateNestedOneWithoutPostedGamesInput;
}
