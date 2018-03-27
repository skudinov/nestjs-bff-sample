import {Module} from '@nestjs/common';
import {ComponentsService} from './components.service';

@Module({
  controllers: [],
  components: [
    ComponentsService,
  ],
  exports: [ComponentsService]
})
export class ComponentsModule {
}
