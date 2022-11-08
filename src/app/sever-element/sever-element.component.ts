import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sever-element',
  templateUrl: './sever-element.component.html',
  styleUrls: ['./sever-element.component.css'],
  encapsulation: ViewEncapsulation.emulated
})
export class SeverElementComponent implements OnInit {
  @Input() element: {type: string, name: string, content: string}
  @Output() name: string;

  @ViewChild('heading', {static: true}) header: ElementRef;

  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log('ngonit called')
    console.log('Text content:' + this.header.nativeElement.textContent)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngonchanges called")
    console.log(changes)
  }

  ngDoCheck() {
    console.log("ngdocheck called")
  }

  ngAfterContentInit() {
    console.log("ngaftercontentinit called")
  }

  ngAfterContentChecked() {
    console.log("ngaftercontentchecked called")
  }

  ngAfterViewInit() {
    console.log("ngafterviewinit called")
    console.log("text content:" + this.header.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log("ngafterviewchecked called")
  }

  ngOnDestroy() {
    console.log("ngondestroy called!")
  }

}
