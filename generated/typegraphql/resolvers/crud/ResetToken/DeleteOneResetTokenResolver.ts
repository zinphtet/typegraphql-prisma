import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneResetTokenArgs } from "./args/DeleteOneResetTokenArgs";
import { ResetToken } from "../../../models/ResetToken";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ResetToken)
export class DeleteOneResetTokenResolver {
  @TypeGraphQL.Mutation(_returns => ResetToken, {
    nullable: true
  })
  async deleteOneResetToken(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneResetTokenArgs): Promise<ResetToken | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).resetToken.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
