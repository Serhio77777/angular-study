import { Component, Output, EventEmitter, OnInit } from '@angular/core';

// function MyDecorator(info?: string) {
//    return (target, propertyKey, descriptor) => {
//      console.log('Hello from My Devorator!', info, target, propertyKey, descriptor)
//    };
// }

@Component({
  selector: 'ekreative-child',
  templateUrl: './child.template.html',
  styleUrls: ['./child.styles.scss']
})
export class ChildComponent implements OnInit {

  public someString: string = 'New Ring. Our Ring. It is not marked with His shadow. It is perfect!'

  constructor() { }

  public ngOnInit() {
  }

  @Output() onChanged = new EventEmitter<boolean>();
	public change(increased: any): void {
		this.onChanged.emit(increased);
	}

  // @MyDecorator('THIS IS INFO!')
  public testFunction(): void {

  }

}
