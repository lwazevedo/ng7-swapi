import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { SharedModule } from '../../../../shared/shared.module';
import { CoreModule } from '../../../../core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { SiteService } from '../../shared/site.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ViewDetailComponent } from './view-detail.component';

describe('ViewDetailComponent', () => {
    let component: ViewDetailComponent;
    let fixture: ComponentFixture<ViewDetailComponent>;
    let injector: TestBed;
    let pService: SiteService;
    let httpMock: HttpTestingController;
    const URLBASE = 'https://swapi.co/api/films';

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ViewDetailComponent],
            imports: [CoreModule, SharedModule, RouterTestingModule, HttpClientTestingModule],
            providers: [SiteService]
        })
            .compileComponents();
        injector = getTestBed();
        pService = injector.get(SiteService);
        httpMock = injector.get(HttpTestingController);
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should have as text fields', () => {
        expect(component.otherInformation.length).toEqual(0);
        expect(component.viewList).toBeFalsy();
    });

    it('should getAll films', () => {
        pService.getOne(1).subscribe((r) => {
            expect(r.length).toBeGreaterThan(1);
        });
    });
    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
