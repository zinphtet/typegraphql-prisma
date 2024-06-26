import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByResetTokenArgs } from "./args/GroupByResetTokenArgs";
import { ResetToken } from "../../../models/ResetToken";
import { ResetTokenGroupBy } from "../../outputs/ResetTokenGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ResetToken)
export class GroupByResetTokenResolver {
  @TypeGraphQL.Query(_returns => [ResetTokenGroupBy], {
    nullable: false
  })
  async groupByResetToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByResetTokenArgs): Promise<ResetTokenGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resetToken.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
