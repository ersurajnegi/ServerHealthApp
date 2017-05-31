import { Directive, ElementRef , Input} from '@angular/core';
declare let Highcharts: any, $: any;
@Directive({
  selector: '[appChart]'
})
export class ChartDirective {
  @Input() data : any;
  constructor(private _elementRef: ElementRef) { }

  drawChart() {
    Highcharts.chart({
      chart: {
        renderTo: this._elementRef.nativeElement,
        type: 'gauge',
      },
      pane: {
        startAngle: -90,
        endAngle: 90,
        background: {
          shape: 'arc'
        }
      },
      title: {
        text: ''
      },
      // the value axis
      yAxis: {
        min: 0,
        max: 100,

        plotBands: [{
          from: 70,
          to: 100,
          color: '#DF5353' // red

        }, {
          from: 0,
          to: 70,
          color: '#55BF3B' // green
        }]
      },

      series: [{
        name: 'Space Filled',
        data: [this.data],
        tooltip: {
          valueSuffix: ' km/h'
        }
      }]

    });
  }

  ngAfterViewInit() {
    this.drawChart();
  }

}
