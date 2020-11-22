import { Field, ObjectType } from "@nestjs/graphql";
import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@ObjectType()
@Entity()
export class Restaurant { 

  @Field(type=>Number)
  @PrimaryGeneratedColumn()
  id:number

  @Field(type => String)
  @Column()
  name: string;

  @Field(type => Boolean)
  @Column()
  isVegan: Boolean;

  @Field(type => String)
  @Column()
  address: string;
  
  @Field(type => String)
  @Column()
  ownerName: string;

}