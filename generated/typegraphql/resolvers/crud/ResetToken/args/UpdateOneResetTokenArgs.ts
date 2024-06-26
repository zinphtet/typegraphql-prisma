import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetTokenUpdateInput } from "../../../inputs/ResetTokenUpdateInput";
import { ResetTokenWhereUniqueInput } from "../../../inputs/ResetTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneResetTokenArgs {
  @TypeGraphQL.Field(_type => ResetTokenUpdateInput, {
    nullable: false
  })
  data!: ResetTokenUpdateInput;

  @TypeGraphQL.Field(_type => ResetTokenWhereUniqueInput, {
    nullable: false
  })
  where!: ResetTokenWhereUniqueInput;
}
