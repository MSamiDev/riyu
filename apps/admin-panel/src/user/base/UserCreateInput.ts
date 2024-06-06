/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AppointmentCreateNestedManyWithoutUsersInput } from "./AppointmentCreateNestedManyWithoutUsersInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { BlogCreateNestedManyWithoutUsersInput } from "./BlogCreateNestedManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { UserSubscriptionCreateNestedManyWithoutUsersInput } from "./UserSubscriptionCreateNestedManyWithoutUsersInput";

@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
    type: () => AppointmentCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => AppointmentCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => AppointmentCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  appointments?: AppointmentCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => BlogCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => BlogCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => BlogCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  blogs?: BlogCreateNestedManyWithoutUsersInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  email!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: true,
  })
  @IsJSONValue()
  @Field(() => GraphQLJSON)
  role!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => UserSubscriptionCreateNestedManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserSubscriptionCreateNestedManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserSubscriptionCreateNestedManyWithoutUsersInput, {
    nullable: true,
  })
  userSubscriptions?: UserSubscriptionCreateNestedManyWithoutUsersInput;
}

export { UserCreateInput as UserCreateInput };
