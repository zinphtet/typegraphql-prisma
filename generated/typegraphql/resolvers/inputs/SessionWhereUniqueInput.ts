import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { SessionWhereInput } from "../inputs/SessionWhereInput";

@TypeGraphQL.InputType("SessionWhereUniqueInput", {})
export class SessionWhereUniqueInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => GraphQLScalars.JSONResolver, {
    nullable: true
  })
  token?: Prisma.InputJsonValue | undefined;

  @TypeGraphQL.Field(_type => [SessionWhereInput], {
    nullable: true
  })
  AND?: SessionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionWhereInput], {
    nullable: true
  })
  OR?: SessionWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [SessionWhereInput], {
    nullable: true
  })
  NOT?: SessionWhereInput[] | undefined;
}
