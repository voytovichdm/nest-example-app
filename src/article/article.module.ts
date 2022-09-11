import { FollowEntity } from '@app/profile/follow.entity';
import { UserEntity } from '@app/user/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleController } from './article.controller';
import { ArticleEntity } from './article.entity';
import { ArticleService } from './article.service';
import { DataSource } from "typeorm";

@Module({
    imports: [
        TypeOrmModule.forFeature([ArticleEntity, UserEntity, FollowEntity, DataSource]),
    ],
    controllers: [ArticleController],
    providers: [ArticleService],
})
export class ArticleModule {}
