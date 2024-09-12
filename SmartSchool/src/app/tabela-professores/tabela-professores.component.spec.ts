import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaProfessoresComponent } from './tabela-professores.component';

describe('TabelaProfessoresComponent', () => {
  let component: TabelaProfessoresComponent;
  let fixture: ComponentFixture<TabelaProfessoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaProfessoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaProfessoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
