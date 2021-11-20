import * as TypeGraphQL from "type-graphql";
import { Game } from "../../../models/Game";
import { User } from "../../../models/User";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Game)
export class GameRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async OP(@TypeGraphQL.Root() game: Game, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).game.findUnique({
      where: {
        id: game.id,
      },
    }).OP({});
  }
}
