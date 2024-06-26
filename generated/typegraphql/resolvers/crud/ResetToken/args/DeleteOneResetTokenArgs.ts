import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetTokenWhereUniqueInput } from "../../../inputs/ResetTokenWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneResetTokenArgs {
  @TypeGraphQL.Field(_type => ResetTokenWhereUniqueInput, {
    nullable: false
  })
  where!: ResetTokenWhereUniqueInput;
}
