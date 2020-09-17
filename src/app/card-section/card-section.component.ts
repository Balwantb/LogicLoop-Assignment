import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-card-section",
  templateUrl: "./card-section.component.html",
  styleUrls: ["./card-section.component.css"],
})
export class CardSectionComponent implements OnInit {
  blogs = [
    {
      title: `How Did Van Gogh's Turbulent Mind Depict One of the Most
    Complex Concepts in Physics?`,
      img: "assets/1.jpeg",
      like: 57,
      comment: 6,
      views: 138,
      alt: "Portrait",
    },
    {
      title: `How Did Van Gogh's Turbulent Mind Depict One of the Most
    Complex Concepts in Physics?`,
      img: "assets/2.jpeg",
      like: 57,
      comment: 6,
      views: 138,
      alt: "Notebook",
    },
    {
      title: `How Did Van Gogh's Turbulent Mind Depict One of the Most
    Complex Concepts in Physics?`,
      img: "assets/3.jpeg",
      like: 57,
      comment: 6,
      views: 138,
      alt: "Bricks",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
