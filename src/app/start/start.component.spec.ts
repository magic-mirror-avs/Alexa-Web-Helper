import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { StartComponent } from './start.component';
import { AmazonService } from '../amazon.service';

describe('StartComponent', () => {
    let component: StartComponent;
    let fixture: ComponentFixture<StartComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                StartComponent
            ],
            imports: [
                HttpModule
            ],
            providers: [
                AmazonService
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(StartComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
