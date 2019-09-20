import {AfterContentInit, Component, ContentChild, ElementRef, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit, AfterContentInit {
  @Input('srvElement') element: {type: string, name: string, content: string};
  @ContentChild('paragraphContent', {static: true}) paragraphContent: ElementRef;
  constructor() { }

  ngOnInit() {
    console.log('Text content of paragraph: ' + this.paragraphContent.nativeElement.textContent);
  }
  ngAfterContentInit(): void {
    console.log('Text content of paragraph: ' + this.paragraphContent.nativeElement.textContent);
  }

}
