import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPersonasFisicasComponent } from './lista-personas-fisicas.component';

describe('ListaPersonasFisicasComponent', () => {
  let component: ListaPersonasFisicasComponent;
  let fixture: ComponentFixture<ListaPersonasFisicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPersonasFisicasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaPersonasFisicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
