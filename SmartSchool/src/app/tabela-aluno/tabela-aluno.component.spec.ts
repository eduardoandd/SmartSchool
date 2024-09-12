import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaAlunoComponent } from './tabela-aluno.component';

describe('TabelaAlunoComponent', () => {
  let component: TabelaAlunoComponent;
  let fixture: ComponentFixture<TabelaAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaAlunoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
