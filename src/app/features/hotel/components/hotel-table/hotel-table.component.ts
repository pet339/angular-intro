import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'app-hotel-table',
  templateUrl: './hotel-table.component.html',
  styleUrls: ['./hotel-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HotelTableComponent {
  displayedColumns: string[] = ['name', 'city', 'category'];
  @Input() data$: Observable<Hotel[]> = new Subject<Hotel[]>().asObservable()

  constructor(){ }
  
}
