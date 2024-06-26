import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateResetTokenArgs } from "./args/AggregateResetTokenArgs";
import { ResetToken } from "../../../models/ResetToken";
import { AggregateResetToken } from "../../outputs/AggregateResetToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ResetToken)
export class AggregateResetTokenResolver {
  @TypeGraphQL.Query(_returns => AggregateResetToken, {
    nullable: false
  })
  async aggregateResetToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateResetTokenArgs): Promise<AggregateResetToken> {
    return getPrismaFromContext(ctx).resetToken.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
