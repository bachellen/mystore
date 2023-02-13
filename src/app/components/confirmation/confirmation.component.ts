import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
fullName: string | null | undefined;
price: number =0;
constructor(private route: ActivatedRoute){}

ngOnInit(): void {
  this.route.paramMap.subscribe((params) => {
    this.fullName = params.get('fullName');
    this.price = Number(params.get('price'));
  });
}

}
