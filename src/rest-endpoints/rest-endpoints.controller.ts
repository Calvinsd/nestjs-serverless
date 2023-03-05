import { Body, Controller, Get, Logger, Post, Query } from '@nestjs/common';
import { TestDto } from './dto';

@Controller('rest-endpoints')
export class RestEndpointsController {
  @Get('/test')
  async testEndpoint(@Query() query: Record<string, any>): Promise<string> {
    Logger.log(`test endpoint queryParam: ${JSON.stringify(query)}`);
    return 'successful';
  }

  @Post('/testPost')
  async postEndpoint(@Body() body: TestDto): Promise<string> {
    Logger.log(`Post data: ${JSON.stringify(body)}`);
    return 'successful';
  }
}
