import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueResetTokenOrThrowArgs } from "./args/FindUniqueResetTokenOrThrowArgs";
import { ResetToken } from "../../../models/ResetToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ResetToken)
export class FindUniqueResetTokenOrThrowResolver {
  @TypeGraphQL.Query(_returns => ResetToken, {
    nullable: true
  })
  async getResetToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueResetTokenOrThrowArgs): Promise<ResetToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resetToken.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
