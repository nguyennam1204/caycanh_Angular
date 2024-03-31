import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent {
  @Input() rating: number
  @Input() nameRating: string
  @Output() outputRating: EventEmitter<string> = new EventEmitter<string>()
  starWidth: number
  constructor() {
    this.rating = 0
    this.nameRating = ''
    this.starWidth = this.rating * 90 / 5
  }
  ngOnChanges(): void {
    this.starWidth = this.rating * 90 / 5
    console.log(this.starWidth)
  }
  viewRating() {
    this.outputRating.emit(`Đánh giá của sản phẩm là ${this.rating}`)
  }
}
