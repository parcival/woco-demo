import {
  NgModule,
  Component,
  Directive,
  Input,
  ComponentMetadata,
  ReflectiveInjector,
  ViewContainerRef,
  Compiler,
  ModuleWithComponentFactories
} from "@angular/core";

import { BrowserModule } from '@angular/platform-browser'

@Directive({
    selector: 'my-ng-include',
})
export class MyNgInclude {

    @Input('src')
    private templateUrl: string;

    constructor(private vcRef: ViewContainerRef, private compiler: Compiler) {}

    ngAfterViewInit() {
        const url = this.templateUrl;
        @Component({
          selector: 'dynamic-comp',
          templateUrl: url
        })
        class DynamicComponent  {
            @Input() public url: string;
        };

        @NgModule({
          imports: [BrowserModule],
          declarations: [DynamicComponent]
        })
        class DynamicModule {}
        this.compiler.compileModuleAndAllComponentsAsync(DynamicModule)
          .then(({moduleFactory, componentFactories}) => {
            const compFactory = componentFactories.find(x => x.componentType === DynamicComponent);
            const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
            const cmpRef = this.vcRef.createComponent(compFactory, 0, injector, []);
            cmpRef.instance.url = url;
        });
    }

/*
    createContentComponent(templateUrl) {
        @Component({
            selector: 'my-ng-include-content',
            templateUrl: templateUrl,
            directives: FORM_DIRECTIVES,
        })
        class MyNgIncludeContent {}
        return MyNgIncludeContent ;
    }
    */
}
