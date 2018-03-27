import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	root(): string {
    return 'Welcome to BFF pattern sample application!';
  }
}
