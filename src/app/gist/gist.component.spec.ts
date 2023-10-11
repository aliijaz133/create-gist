import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GistComponent } from './gist.component';

describe('GistComponent', () => {
  let component: GistComponent;
  let fixture: ComponentFixture<GistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GistComponent]
    });
    fixture = TestBed.createComponent(GistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
