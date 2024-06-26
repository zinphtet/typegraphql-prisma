import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetTokenOrderByWithRelationInput } from "../../../inputs/ResetTokenOrderByWithRelationInput";
import { ResetTokenWhereInput } from "../../../inputs/ResetTokenWhereInput";
import { ResetTokenWhereUniqueInput } from "../../../inputs/ResetTokenWhereUniqueInput";
import { ResetTokenScalarFieldEnum } from "../../../../enums/ResetTokenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstResetTokenArgs {
  @TypeGraphQL.Field(_type => ResetTokenWhereInput, {
    nullable: true
  })
  where?: ResetTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ResetTokenOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ResetTokenOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ResetTokenWhereUniqueInput, {
    nullable: true
  })
  cursor?: ResetTokenWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [ResetTokenScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "email" | "resetId"> | undefined;
}
