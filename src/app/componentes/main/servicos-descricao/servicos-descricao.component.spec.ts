import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicosDescricaoComponent } from './servicos-descricao.component';

describe('ServicosDescricaoComponent', () => {
  let component: ServicosDescricaoComponent;
  let fixture: ComponentFixture<ServicosDescricaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicosDescricaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicosDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
