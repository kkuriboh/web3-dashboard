import * as TypeGraphQL from "type-graphql";
import { Game } from "../../../models/Game";
import { User } from "../../../models/User";
import { UserPostedGamesArgs } from "./args/UserPostedGamesArgs";
import { transformFields, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Game], {
    nullable: false
  })
  async postedGames(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UserPostedGamesArgs): Promise<Game[]> {
    return getPrismaFromContext(ctx).user.findUnique({
      where: {
        id: user.id,
      },
    }).postedGames(args);
  }
}
