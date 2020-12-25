import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddSchedulePage } from './add-schedule.page';

describe('AddSchedulePage', () => {
  let component: AddSchedulePage;
  let fixture: ComponentFixture<AddSchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSchedulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
