import { NgModule } from '@angular/core';
import { OnInit, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-painel',
    templateUrl: './painel.component.html',
})

@NgModule({
    imports: [FormsModule, CommonModule],
    declarations: [PainelComponent]
})

export class PainelComponent implements OnInit {

    ngOnInit(): void {

    }

}
