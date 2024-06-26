import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ResetTokenUpdateManyMutationInput } from "../../../inputs/ResetTokenUpdateManyMutationInput";
import { ResetTokenWhereInput } from "../../../inputs/ResetTokenWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyResetTokenArgs {
  @TypeGraphQL.Field(_type => ResetTokenUpdateManyMutationInput, {
    nullable: false
  })
  data!: ResetTokenUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => ResetTokenWhereInput, {
    nullable: true
  })
  where?: ResetTokenWhereInput | undefined;
}
