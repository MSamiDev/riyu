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
import {
  IsInt,
  IsString,
  IsOptional,
  IsNumber,
  ValidateNested,
} from "class-validator";
import { UserSubscriptionCreateNestedManyWithoutSubscriptionsInput } from "./UserSubscriptionCreateNestedManyWithoutSubscriptionsInput";
import { Type } from "class-transformer";

@InputType()
class SubscriptionCreateInput {
  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsInt()
  @Field(() => Number)
  appointmentsAllowed!: number;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  details?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  duration!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;

  @ApiProperty({
    required: true,
    type: Number,
  })
  @IsNumber()
  @Field(() => Number)
  price!: number;

  @ApiProperty({
    required: false,
    type: () => UserSubscriptionCreateNestedManyWithoutSubscriptionsInput,
  })
  @ValidateNested()
  @Type(() => UserSubscriptionCreateNestedManyWithoutSubscriptionsInput)
  @IsOptional()
  @Field(() => UserSubscriptionCreateNestedManyWithoutSubscriptionsInput, {
    nullable: true,
  })
  userSubscriptions?: UserSubscriptionCreateNestedManyWithoutSubscriptionsInput;
}

export { SubscriptionCreateInput as SubscriptionCreateInput };
