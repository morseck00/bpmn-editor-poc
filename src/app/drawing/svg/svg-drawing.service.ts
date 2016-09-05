import {Injectable} from "@angular/core";

import {DrawingService} from "../common/api/drawing.service";

@Injectable()
export class SvgDrawingService extends DrawingService {

    private snap: Snap.Paper;

    initSurface(element: Element): void {
        this.snap = Snap(<SVGElement> element);
    }

    getSurface(): Snap.Paper {
        return this.snap;
    }
}
