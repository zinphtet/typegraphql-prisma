import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ResetTokenCountAggregate } from "../outputs/ResetTokenCountAggregate";
import { ResetTokenMaxAggregate } from "../outputs/ResetTokenMaxAggregate";
import { ResetTokenMinAggregate } from "../outputs/ResetTokenMinAggregate";

@TypeGraphQL.ObjectType("AggregateResetToken", {})
export class AggregateResetToken {
  @TypeGraphQL.Field(_type => ResetTokenCountAggregate, {
    nullable: true
  })
  _count!: ResetTokenCountAggregate | null;

  @TypeGraphQL.Field(_type => ResetTokenMinAggregate, {
    nullable: true
  })
  _min!: ResetTokenMinAggregate | null;

  @TypeGraphQL.Field(_type => ResetTokenMaxAggregate, {
    nullable: true
  })
  _max!: ResetTokenMaxAggregate | null;
}
