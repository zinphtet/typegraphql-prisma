import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResetTokenWhereInput } from "../inputs/ResetTokenWhereInput";
import { StringFilter } from "../inputs/StringFilter";

@TypeGraphQL.InputType("ResetTokenWhereUniqueInput", {})
export class ResetTokenWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  resetId?: string | undefined;

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
  email?: StringFilter | undefined;
}
