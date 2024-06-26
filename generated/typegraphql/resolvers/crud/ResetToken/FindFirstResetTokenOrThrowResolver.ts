import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstResetTokenOrThrowArgs } from "./args/FindFirstResetTokenOrThrowArgs";
import { ResetToken } from "../../../models/ResetToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ResetToken)
export class FindFirstResetTokenOrThrowResolver {
  @TypeGraphQL.Query(_returns => ResetToken, {
    nullable: true
  })
  async findFirstResetTokenOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstResetTokenOrThrowArgs): Promise<ResetToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resetToken.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
