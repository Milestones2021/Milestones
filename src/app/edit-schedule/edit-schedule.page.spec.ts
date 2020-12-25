import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditSchedulePage } from './edit-schedule.page';

describe('EditSchedulePage', () => {
  let component: EditSchedulePage;
  let fixture: ComponentFixture<EditSchedulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSchedulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditSchedulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
