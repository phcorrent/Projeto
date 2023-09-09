import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { CadPage } from './cad.page';

describe('CadPage', () => {
  let component: CadPage;
  let fixture: ComponentFixture<CadPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
