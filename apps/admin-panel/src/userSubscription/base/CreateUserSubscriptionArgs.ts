/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { UserSubscriptionCreateInput } from "./UserSubscriptionCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateUserSubscriptionArgs {
  @ApiProperty({
    required: true,
    type: () => UserSubscriptionCreateInput,
  })
  @ValidateNested()
  @Type(() => UserSubscriptionCreateInput)
  @Field(() => UserSubscriptionCreateInput, { nullable: false })
  data!: UserSubscriptionCreateInput;
}

export { CreateUserSubscriptionArgs as CreateUserSubscriptionArgs };
