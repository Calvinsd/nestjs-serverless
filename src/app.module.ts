import { Module } from '@nestjs/common';
import { RestEndpointsModule } from './rest-endpoints/rest-endpoints.module';

@Module({
  imports: [RestEndpointsModule],
})
export class AppModule {}
