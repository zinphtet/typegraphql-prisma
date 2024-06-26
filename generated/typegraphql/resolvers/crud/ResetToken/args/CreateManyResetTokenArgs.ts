import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetTokenCreateManyInput } from "../../../inputs/ResetTokenCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyResetTokenArgs {
  @TypeGraphQL.Field(_type => [ResetTokenCreateManyInput], {
    nullable: false
  })
  data!: ResetTokenCreateManyInput[];
}
