import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";

@TypeGraphQL.ObjectType("Session", {})
export class Session {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  /**
   * Field referred in an index, but found no data to define the type.
   */
  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true,
    description: "Field referred in an index, but found no data to define the type."
  })
  token?: Prisma.JsonValue | null;
}
