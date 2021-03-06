import {NgModule}      from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {HttpModule}    from "@angular/http";
import {APP_BASE_HREF} from '@angular/common';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from "angular2-in-memory-web-api";
import {InMemoryDataService}  from "./data-access/in-memory-data.service";

import {AppComponent} from "./app.component";
import {MainComponent}  from "./main/main.component";
import {ConfiguredRoutingModule} from "./app.routing";
import {LayoutComponent} from "./layout/layout.component";
import {SvgDrawingComponent} from "./drawing/svg/svg-drawing.component";
import {CanvasDrawingComponent} from "./drawing/canvas/canvas-drawing.component";
import {PanelComponent} from "./panel/panel.component";
import {PaletteComponent} from "./panel/palette/palette.component";
import {PropertiesComponent} from "./panel/properties/properties.component";
import {ShapesComponent} from "./panel/shapes/shapes.component";
import {ToolbarComponent} from "./panel/toolbar/toolbar.component";
import {GenericEventService} from "./drawing/common/event/generic-event.service";

/**
 * We set APP_BASE_HREF programmatically and not via <base href="/"> in HTML file due to an issue with SVG's fill="url(#...)"
 * If you have <base href="/">, the url in the "fill" attribute is not anymore relative to the current page,
 * but to the URL indicated in the <base> tag. This lead to the issue with gradients - they can not be referenced from SVG's defs.
 */
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        ConfiguredRoutingModule
    ],
    declarations: [
        AppComponent,
        MainComponent,
        PanelComponent,
        ToolbarComponent,
        PaletteComponent,
        PropertiesComponent,
        ShapesComponent,
        LayoutComponent,
        SvgDrawingComponent,
        CanvasDrawingComponent
    ],
    providers: [
        {provide: APP_BASE_HREF, useValue: "/"},
        GenericEventService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
