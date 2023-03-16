import { Component } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-chartjs';
  ngAfterViewInit() {
    const canvas = document.getElementById('marimekkoChart') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
  
    const data = {
      labels: ['Category 1', 'Category 2'],
      datasets: [
        {
          label: 'Subcategory 1',
          data: [10, 40],
          backgroundColor: 'rgba(255, 99, 132, 0.7)',
          borderWidth: 1
        },
        {
          label: 'Subcategory 2',
          data: [20, 50],
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
          borderWidth: 1
        },
        {
          label: 'Subcategory 3',
          data: [30, 60],
          backgroundColor: 'rgba(255, 206, 86, 0.7)',
          borderWidth: 1
        }
      ]
    };
  
    const options = {
      indexAxis: 'y',
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    };
  
    const marimekkoChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      //options: options
    });
  }
}
