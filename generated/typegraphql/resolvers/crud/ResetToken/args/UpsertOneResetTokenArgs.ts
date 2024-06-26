import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetTokenCreateInput } from "../../../inputs/ResetTokenCreateInput";
import { ResetTokenUpdateInput } from "../../../inputs/ResetTokenUpdateInput";
import { ResetTokenWhereUniqueInput } from "../../../inputs/ResetTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneResetTokenArgs {
  @TypeGraphQL.Field(_type => ResetTokenWhereUniqueInput, {
    nullable: false
  })
  where!: ResetTokenWhereUniqueInput;

  @TypeGraphQL.Field(_type => ResetTokenCreateInput, {
    nullable: false
  })
  create!: ResetTokenCreateInput;

  @TypeGraphQL.Field(_type => ResetTokenUpdateInput, {
    nullable: false
  })
  update!: ResetTokenUpdateInput;
}
