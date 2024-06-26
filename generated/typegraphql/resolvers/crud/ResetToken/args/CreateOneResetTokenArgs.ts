import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetTokenCreateInput } from "../../../inputs/ResetTokenCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneResetTokenArgs {
  @TypeGraphQL.Field(_type => ResetTokenCreateInput, {
    nullable: false
  })
  data!: ResetTokenCreateInput;
}
