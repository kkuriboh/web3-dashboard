import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GameCreateOrConnectWithoutOPInput } from "../inputs/GameCreateOrConnectWithoutOPInput";
import { GameCreateWithoutOPInput } from "../inputs/GameCreateWithoutOPInput";
import { GameScalarWhereInput } from "../inputs/GameScalarWhereInput";
import { GameUpdateManyWithWhereWithoutOPInput } from "../inputs/GameUpdateManyWithWhereWithoutOPInput";
import { GameUpdateWithWhereUniqueWithoutOPInput } from "../inputs/GameUpdateWithWhereUniqueWithoutOPInput";
import { GameUpsertWithWhereUniqueWithoutOPInput } from "../inputs/GameUpsertWithWhereUniqueWithoutOPInput";
import { GameWhereUniqueInput } from "../inputs/GameWhereUniqueInput";

@TypeGraphQL.InputType("GameUpdateManyWithoutOPInput", {
  isAbstract: true
})
export class GameUpdateManyWithoutOPInput {
  @TypeGraphQL.Field(_type => [GameCreateWithoutOPInput], {
    nullable: true
  })
  create?: GameCreateWithoutOPInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameCreateOrConnectWithoutOPInput], {
    nullable: true
  })
  connectOrCreate?: GameCreateOrConnectWithoutOPInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameUpsertWithWhereUniqueWithoutOPInput], {
    nullable: true
  })
  upsert?: GameUpsertWithWhereUniqueWithoutOPInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameWhereUniqueInput], {
    nullable: true
  })
  set?: GameWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameWhereUniqueInput], {
    nullable: true
  })
  disconnect?: GameWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameWhereUniqueInput], {
    nullable: true
  })
  delete?: GameWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameWhereUniqueInput], {
    nullable: true
  })
  connect?: GameWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameUpdateWithWhereUniqueWithoutOPInput], {
    nullable: true
  })
  update?: GameUpdateWithWhereUniqueWithoutOPInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameUpdateManyWithWhereWithoutOPInput], {
    nullable: true
  })
  updateMany?: GameUpdateManyWithWhereWithoutOPInput[] | undefined;

  @TypeGraphQL.Field(_type => [GameScalarWhereInput], {
    nullable: true
  })
  deleteMany?: GameScalarWhereInput[] | undefined;
}
