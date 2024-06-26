import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetTokenWhereInput } from "../../../inputs/ResetTokenWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyResetTokenArgs {
  @TypeGraphQL.Field(_type => ResetTokenWhereInput, {
    nullable: true
  })
  where?: ResetTokenWhereInput | undefined;
}
