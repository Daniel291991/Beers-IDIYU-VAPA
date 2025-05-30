import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BeersComponent } from './beers.component';

describe('CervezasComponent', () => {
  let component: BeersComponent;
  let fixture: ComponentFixture<BeersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BeersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
