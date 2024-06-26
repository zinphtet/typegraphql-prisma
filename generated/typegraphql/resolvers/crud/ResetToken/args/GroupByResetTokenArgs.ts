import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetTokenOrderByWithAggregationInput } from "../../../inputs/ResetTokenOrderByWithAggregationInput";
import { ResetTokenScalarWhereWithAggregatesInput } from "../../../inputs/ResetTokenScalarWhereWithAggregatesInput";
import { ResetTokenWhereInput } from "../../../inputs/ResetTokenWhereInput";
import { ResetTokenScalarFieldEnum } from "../../../../enums/ResetTokenScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByResetTokenArgs {
  @TypeGraphQL.Field(_type => ResetTokenWhereInput, {
    nullable: true
  })
  where?: ResetTokenWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ResetTokenOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: ResetTokenOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetTokenScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "email" | "resetId">;

  @TypeGraphQL.Field(_type => ResetTokenScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: ResetTokenScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
