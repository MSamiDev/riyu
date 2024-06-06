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
import { UserSubscriptionWhereInput } from "./UserSubscriptionWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class UserSubscriptionListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => UserSubscriptionWhereInput,
  })
  @ValidateNested()
  @Type(() => UserSubscriptionWhereInput)
  @IsOptional()
  @Field(() => UserSubscriptionWhereInput, {
    nullable: true,
  })
  every?: UserSubscriptionWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserSubscriptionWhereInput,
  })
  @ValidateNested()
  @Type(() => UserSubscriptionWhereInput)
  @IsOptional()
  @Field(() => UserSubscriptionWhereInput, {
    nullable: true,
  })
  some?: UserSubscriptionWhereInput;

  @ApiProperty({
    required: false,
    type: () => UserSubscriptionWhereInput,
  })
  @ValidateNested()
  @Type(() => UserSubscriptionWhereInput)
  @IsOptional()
  @Field(() => UserSubscriptionWhereInput, {
    nullable: true,
  })
  none?: UserSubscriptionWhereInput;
}
export { UserSubscriptionListRelationFilter as UserSubscriptionListRelationFilter };
