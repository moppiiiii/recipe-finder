import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecipeDetailResolver, RecipeResolver } from './resolvers/recipe/recipe.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, RecipeResolver, RecipeDetailResolver],
})

// eslint-disable-next-line @typescript-eslint/no-extraneous-class
export class AppModule {}
