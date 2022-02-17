import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { PluginLoaderService } from './core/plugin-loader.service';
import { microFrontends } from './core/plugin-config';

// const { compliance, infra } = microFrontends;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('targetRef', { read: ViewContainerRef }) vcRef: ViewContainerRef;
  microFrontends = Object.keys(microFrontends);

  constructor(
    private pluginLoader: PluginLoaderService,
    private factoryResolver: ComponentFactoryResolver
  ) {}

  async ngOnInit(): Promise<any> {
    // this.loadPlugin('plugin1');
  }

  loadPlugin(pluginName: string): void {
    this.pluginLoader.load(pluginName).then((component: Type<any>) => {
      const compFactory = this.factoryResolver.resolveComponentFactory(
        component
      );
      this.vcRef.createComponent(compFactory);
    });
  }
}
