import { Module } from "@nestjs/common";
import { BlogModuleBase } from "./base/blog.module.base";
import { BlogService } from "./blog.service";
import { BlogController } from "./blog.controller";

@Module({
  imports: [BlogModuleBase],
  controllers: [BlogController],
  providers: [BlogService],
  exports: [BlogService],
})
export class BlogModule {}
