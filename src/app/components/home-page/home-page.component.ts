import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.sass'
})
export class HomePageComponent implements OnInit {
  ngOnInit(): void {
    this.createBarChart();
  }

  private createBarChart = () => {
    const data = [30, 200, 100, 400, 150, 250];

    const svg = d3
      .select('p')
      .append('svg')
      .attr('width', 700)
      .attr('height', 300);

    svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (_, i) => i * 70)
      .attr('y', d => 300 - d)
      .attr('width', 65)
      .attr('height', d => d)
      .attr('fill', 'red');
  };


}
