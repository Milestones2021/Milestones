import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddTodolistPage } from './add-todolist.page';

describe('AddTodolistPage', () => {
  let component: AddTodolistPage;
  let fixture: ComponentFixture<AddTodolistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTodolistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddTodolistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
