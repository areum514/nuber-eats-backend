import { Resolver,Query, Args, Mutation } from "@nestjs/graphql";
import { CreateRestaurantDto } from "./dto/create-restaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";

@Resolver(of=>Restaurant)
export class RestaurantResolver{
@Query(returns => [Restaurant]) 
  restaurant(@Args('veganOnly') veganOnly:boolean):Restaurant[] { 
    return [];
  }

  @Mutation(returns => Boolean)
  createRestaurant(
    @Args() CreateRestaurantDto:CreateRestaurantDto
  ): boolean  { 
    return true
  }
}