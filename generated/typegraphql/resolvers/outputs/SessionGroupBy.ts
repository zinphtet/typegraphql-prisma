import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionCountAggregate } from "../outputs/SessionCountAggregate";
import { SessionMaxAggregate } from "../outputs/SessionMaxAggregate";
import { SessionMinAggregate } from "../outputs/SessionMinAggregate";

@TypeGraphQL.ObjectType("SessionGroupBy", {})
export class SessionGroupBy {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  token!: Prisma.JsonValue | null;

  @TypeGraphQL.Field(_type => SessionCountAggregate, {
    nullable: true
  })
  _count!: SessionCountAggregate | null;

  @TypeGraphQL.Field(_type => SessionMinAggregate, {
    nullable: true
  })
  _min!: SessionMinAggregate | null;

  @TypeGraphQL.Field(_type => SessionMaxAggregate, {
    nullable: true
  })
  _max!: SessionMaxAggregate | null;
}
