import { Component } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})

export class VirtualScrollComponent {

  users = Array.from({ length: 100000 }).map(
    (_, i) => ({
      id: i,
      name: `Usuario ${i}`,
      email: `usuario${i}@gmail.com`
    })
  );

  trackById(index: number, item: any) {
    return item.id;
  }

}
