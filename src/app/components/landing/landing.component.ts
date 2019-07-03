import { NgModule } from '@angular/core';
import { OnInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
})

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [LandingComponent]
})

export class LandingComponent implements OnInit {

    ngOnInit(): void {

    }

}
