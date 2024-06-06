/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Appointment } from "../../appointment/base/Appointment";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Blog } from "../../blog/base/Blog";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { JsonValue } from "type-fest";
import { UserSubscription } from "../../userSubscription/base/UserSubscription";

@ObjectType()
class User {
  @ApiProperty({
    required: false,
    type: () => [Appointment],
  })
  @ValidateNested()
  @Type(() => Appointment)
  @IsOptional()
  appointments?: Array<Appointment>;

  @ApiProperty({
    required: false,
    type: () => [Blog],
  })
  @ValidateNested()
  @Type(() => Blog)
  @IsOptional()
  blogs?: Array<Blog>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

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
  id!: string;

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
  role!: JsonValue;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [UserSubscription],
  })
  @ValidateNested()
  @Type(() => UserSubscription)
  @IsOptional()
  userSubscriptions?: Array<UserSubscription>;
}

export { User as User };
