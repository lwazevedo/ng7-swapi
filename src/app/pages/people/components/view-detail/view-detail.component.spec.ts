import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { SharedModule } from '../../../../shared/shared.module';
import { CoreModule } from '../../../../core/core.module';
import { RouterTestingModule } from '@angular/router/testing';
import { PeopleService } from '../../shared/people.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ViewDetailComponent } from './view-detail.component';

describe('ViewDetailComponent', () => {
    let component: ViewDetailComponent;
    let fixture: ComponentFixture<ViewDetailComponent>;
    let injector: TestBed;
    let pService: PeopleService;
    let httpMock: HttpTestingController;
    const URLBASE = 'https://swapi.co/api/people';


    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ViewDetailComponent],
            imports: [CoreModule, SharedModule, RouterTestingModule, HttpClientTestingModule],
            providers: [PeopleService]
        })
            .compileComponents();
        injector = getTestBed();
        pService = injector.get(PeopleService);
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

    it('should getAll people', () => {
        pService.getOne(1).subscribe((r) => {
            expect(r.length).toBeGreaterThan(1);
        });
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
