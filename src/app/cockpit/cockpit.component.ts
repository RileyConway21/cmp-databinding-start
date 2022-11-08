import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreate = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = ''
  // newServerContent = ''
  @ViewChild('serverContentInput', {static: true}) serverContentInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLElement) {
    this.serverCreated.emit({sererName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value})
  }

  onAddBlueprint(nameInput: HTMLElement) {
    this.blueprintCreate.emit({serverName: nameInput.value, this.serverContentInput.nativeElement.value})
  }

}
