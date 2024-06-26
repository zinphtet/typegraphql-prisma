import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResetTokenCountOrderByAggregateInput } from "../inputs/ResetTokenCountOrderByAggregateInput";
import { ResetTokenMaxOrderByAggregateInput } from "../inputs/ResetTokenMaxOrderByAggregateInput";
import { ResetTokenMinOrderByAggregateInput } from "../inputs/ResetTokenMinOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ResetTokenOrderByWithAggregationInput", {})
export class ResetTokenOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  email?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  resetId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ResetTokenCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ResetTokenCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ResetTokenMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ResetTokenMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ResetTokenMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ResetTokenMinOrderByAggregateInput | undefined;
}
