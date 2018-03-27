import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {TicketsModule} from './modules/tickets';
import {ComponentsModule} from './modules/components';

@Module({
  imports: [ComponentsModule, TicketsModule],
  controllers: [AppController],
  components: [],
})
export class ApplicationModule {
}
