import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRestaurantDto { 
  @Field(type=>String) 
  name: string;
  @Field(type=>Boolean) 
  isVegan: Boolean;
  @Field(type=>String) 
  address: string;
  @Field(type => String)
  ownerName: string;
}