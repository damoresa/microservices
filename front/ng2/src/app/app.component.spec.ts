import { TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('MainComponent', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
          });
    });

    it('should be defined', () => {
        expect(AppComponent).toBeDefined();
    });

});
