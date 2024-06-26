import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ResetTokenWhereInput", {})
export class ResetTokenWhereInput {
  @TypeGraphQL.Field(_type => [ResetTokenWhereInput], {
    nullable: true
  })
  AND?: ResetTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetTokenWhereInput], {
    nullable: true
  })
  OR?: ResetTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ResetTokenWhereInput], {
    nullable: true
  })
  NOT?: ResetTokenWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  resetId?: StringFilter | undefined;
}
