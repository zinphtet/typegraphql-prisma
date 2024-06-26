import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";

@TypeGraphQL.InputType("ResetTokenScalarWhereWithAggregatesInput", {})
export class ResetTokenScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [ResetTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: ResetTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: ResetTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetTokenScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: ResetTokenScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  id?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  email?: StringWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => StringWithAggregatesFilter, {
    nullable: true
  })
  resetId?: StringWithAggregatesFilter | undefined;
}
