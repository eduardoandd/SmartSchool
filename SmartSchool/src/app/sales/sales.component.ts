import { Component, OnInit } from '@angular/core';
import { SalesService } from '../services/sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  sales: any[] = [];  // Array para armazenar os dados

  constructor(private salesService: SalesService) { }

  ngOnInit(): void {
    // Chama o método do serviço para buscar os dados
    this.salesService.getSales().subscribe(
      (data: any[]) => {
        this.sales = data;  // Atribui os dados retornados à variável 'sales'
      },
      (error: any) => {
        console.error('Erro ao carregar as vendas', error);
      }
    );
  }

}
