import { AfterContentInit, afterNextRender, afterRender, Component, ContentChild, ElementRef, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control'
  }
})
export class ControlComponent implements AfterContentInit{
  @ContentChild('input') private control?: ElementRef<HTMLInputElement | HTMLTextAreaElement>;
  label = input.required<string>();
  constructor(){
    afterRender(() => console.log('AFTER RENDER'));
    afterNextRender(() => console.log('AFTER NEXT RENDER'));
  }
  ngAfterContentInit(){
    
  }
}
