import { Module } from '@nestjs/common';
import { RestEndpointsController } from './rest-endpoints.controller';

@Module({
  controllers: [RestEndpointsController],
})
export class RestEndpointsModule {}
