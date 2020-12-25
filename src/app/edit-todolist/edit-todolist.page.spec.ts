import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditTodolistPage } from './edit-todolist.page';

describe('EditTodolistPage', () => {
  let component: EditTodolistPage;
  let fixture: ComponentFixture<EditTodolistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTodolistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditTodolistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
