import { Resolver,Query, Args, Mutation } from "@nestjs/graphql";
import { CreateRestaurantDto } from "./dto/create-restaurant.dto";
import { Restaurant } from "./entities/restaurant.entity";
import { RestaurantService } from "./restaurants.service";

@Resolver(of=>Restaurant)
export class RestaurantResolver{
  constructor(private readonly restaurantService:RestaurantService){
    
  }
@Query(returns => [Restaurant]) 
  restaurant():Promise<Restaurant[]> { 
    return this.restaurantService.getAll()
  }

  @Mutation(returns => Boolean)
  createRestaurant(
    @Args() CreateRestaurantDto:CreateRestaurantDto
  ): boolean  { 
    return true
  }
}