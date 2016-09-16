import {NodeElement} from "./model/NodeElement";
import {Path} from "./model/geometry/Path";
import {Resource} from "./model/resource/Resource";
import {Color} from "./model/resource/Color";
import {
	Pattern,
	PatternType
} from "./model/resource/Pattern";
import {ShapeElementType} from "./model/ShapeElement";
import {Point} from "./model/geometry/Point";
import {SegmentType} from "./model/geometry/Segment";
import {Bounds} from "./model/geometry/Bounds";
import {DrawingEngine} from "./DrawingEngine";
import {
	Stroke,
	LineJoin
} from "./model/resource/Stroke";

export class Canvas extends DrawingEngine
{


	get rootNodeElement(): NodeElement
	{
		return this._rootNodeElement;
	}

	set rootNodeElement(value: NodeElement)
	{
		this._rootNodeElement = value;
	}

	get viewPort(): Bounds
	{
		return this._viewPort;
	}

	set viewPort(value: Bounds)
	{
		this._viewPort = value;
	}

	get zoomFactor(): number
	{
		return this._zoomFactor;
	}

	set zoomFactor(value: number)
	{
		this._zoomFactor = value;
	}

	get context2D(): CanvasRenderingContext2D
	{
		return this._context2D;
	}

	set context2D(value: CanvasRenderingContext2D)
	{
		this._context2D = value;
	}

	constructor(canvas: HTMLCanvasElement)
	{
		super(<Element> canvas);
		console.log(`Canvas: Id=${canvas.id} Size: ${canvas.width} x ${canvas.height} Client: ${canvas.clientWidth} x ${canvas.clientHeight}`);

		// Setup Default Size
		canvas.width = canvas.clientWidth;
		canvas.height = canvas.clientHeight;

		this._context2D = canvas.getContext("2d");
	}


	handleResize(width: number, height: number): void
	{
		// TODO
		console.log("Handle Resize here !");
	}

	showInfo(): void
	{
		console.log("Canvas: W: " + this._context2D.canvas.width + " H:  " + this._context2D.canvas.height);
	}


	private drawGrid(): void
	{
		let stepx = 10;
		let stepy = 10;

		this._context2D.save();

		this._context2D.strokeStyle = "#000000";
		this._context2D.lineWidth = 0.5;
		this._context2D.globalAlpha = 0.1;

		this._context2D.beginPath();
		for (let i = stepx + 0.5; i < this._context2D.canvas.width; i += stepx)
		{
			this._context2D.moveTo(i, 0);
			this._context2D.lineTo(i, this._context2D.canvas.height);
		}
		this._context2D.stroke();

		this._context2D.beginPath();
		for (let i = stepy + 0.5; i < this._context2D.canvas.height; i += stepy)
		{
			this._context2D.moveTo(0, i);
			this._context2D.lineTo(this._context2D.canvas.width, i);
		}
		this._context2D.stroke();
		this._context2D.globalAlpha = 0.0;
		this._context2D.restore();
	}

	private appyResource(resource: Resource): void
	{
		if (resource instanceof Color)
		{
			let color: Color = <Color> resource;
			this._context2D.strokeStyle = color.toRGBString();
			this._context2D.strokeStyle = "#000000";
		}
		else if (resource instanceof Pattern)
		{
			let pattern: Pattern = <Pattern> resource;
			switch (pattern.getType())
			{
				case PatternType.LINEAR:
				{
					let linearGradient = this._context2D.createLinearGradient(pattern.getPoints()[0].getX(), pattern.getPoints()[0].getY(), pattern.getPoints()[1].getX(), pattern.getPoints()[1].getY())
					for (let stopColor of pattern.getStopColors())
					{

						linearGradient.addColorStop(stopColor.getStop(), stopColor.getColor().toHex());
					}
					this._context2D.fillStyle = linearGradient;
					break;
				}
			}
		}
		else if( resource instanceof  Stroke)
		{
			let stroke:Stroke = <Stroke> resource;

			if( stroke.getWidth() != null )
			{
				this._context2D.lineWidth = stroke.getWidth();
			}

			if( stroke.lineJoin != null )
			{
				switch (stroke.lineJoin )
				{
					case LineJoin.BEVEL:
					{
						this._context2D.lineJoin = "bevel";
						break;
					}

					case LineJoin.ROUND:
					{
						this._context2D.lineJoin = "round";
						break;
					}

					case LineJoin.MITER:
					{
						this._context2D.lineJoin = "miter";
						break;
					}


				}
			}
		}
	}

	public draw(nodeElement: NodeElement): void
	{

		console.log("Draw: " + (nodeElement == null ? " NONE " : nodeElement.getName()));
		this._context2D.save();


		if (nodeElement == null)
		{
			// Clear Background
			this._context2D.fillStyle = "#DDDDDD";
			this._context2D.fillRect(0, 0, this._context2D.canvas.width, this._context2D.canvas.height);

			// this._context2D.rect(0, 0, this._context2D.canvas.width, this._context2D.canvas.height);
			// var grd = this._context2D.createLinearGradient(0, 0, this._context2D.canvas.width, this._context2D.canvas.height);


			// this._context2D.fillStyle = grd;
			// this._context2D.fill();

		}


		let xOffset: number = this.viewPort.x;
		let yOffset: number = this.viewPort.y;

		let width: number = this.viewPort.width;
		let height: number = this.viewPort.height;


		this._context2D.translate(-xOffset, -yOffset);
		this._context2D.scale(this.zoomFactor, this.zoomFactor);


		if (nodeElement == null)
		{
			this.drawGrid();
		}

		else
		{
			this.internalDraw(nodeElement);
		}


		this.drawInfo();

		this._context2D.restore();
	}

	private drawPath(path: Path, type: ShapeElementType): void
	{
		this._context2D.beginPath();

		for (let segment of path.getSegments())
		{
			let points: Array<Point> = segment.getPoints();


			switch (segment.getType())
			{
				case SegmentType.CLOSE:
				{
					this._context2D.closePath();
					break;
				}

				case SegmentType.LINE_TO:
				{
					this._context2D.lineTo(points[0].getX(), points[0].getY());
					break;
				}

				case SegmentType.MOVE_TO:
				{
					this._context2D.moveTo(points[0].getX(), points[0].getY());
					break;
				}

				case SegmentType.CUBIC_TO:
				{
					this._context2D.bezierCurveTo(points[0].getX(), points[0].getY(), points[1].getX(), points[1].getY(), points[2].getX(), points[2].getY());
					break;
				}

				case SegmentType.QUAD_TO:
				{
					this._context2D.quadraticCurveTo(points[0].getX(), points[0].getY(), points[1].getX(), points[1].getY());
					break;
				}
			}
		}



		switch (type)
		{
			case ShapeElementType.STROKE:
			{
				this._context2D.stroke();
				break;
			}

			case ShapeElementType.FILL:
			{
				this._context2D.fill();
				break;
			}
		}

	}


	private internalDraw(nodeElement: NodeElement): void
	{
		this._context2D.save();
		for (let shapeElement  of nodeElement.getShapeElements())
		{

			this._context2D.fillStyle = null;
			this._context2D.strokeStyle = null;
			for (let resource of  shapeElement.getResources())
			{
				this.appyResource(resource);
			}

			for (let iGeometry of shapeElement.getShapes())
			{
				let path: Path = iGeometry.getPath();
				this.drawPath(path, shapeElement.getType());
			}
		}
		this._context2D.restore();
	}

	private drawInfo(): void
	{
		this._context2D.save();
		let xOffset: number = this.viewPort.x;
		let yOffset: number = this.viewPort.y;

		let xSize = this.viewPort.width;
		let ySize = this.viewPort.height;


		this._context2D.font = "12px Arial";
		this._context2D.strokeStyle = "#000000";
		this._context2D.fillStyle = "#000000";
		this._context2D.lineWidth = 1;
		//this._context2D.strokeText(`ViewPort: (${xOffset},${yOffset}) -> (${xSize},${ySize})`, 100, 100 );
		this._context2D.fillText(`ViewPort: (${xOffset},${yOffset}) -> (${xSize},${ySize})`, 100, 100);
		this._context2D.fillText(`ZoomFactor: (${this.zoomFactor})`, 100, 120);
		this._context2D.restore();
	}


	public getInternalzoomFactor(): number
	{
		return this._zoomFactor * Canvas.graphicsScaleFactor;
	}


	private _rootNodeElement: NodeElement;
	private _viewPort: Bounds = new Bounds(0, 0, 100, 100);
	private _zoomFactor: number = 1.0;
	private _context2D: CanvasRenderingContext2D;

	static graphicsScaleFactor: number = 2.0;


}



