import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presentation-roulette';
  imageUrls: string[] = [];
  shuffledImageUrls: string[] = [];
  activeImageUrl = '';
  running = false;
  counter = 0;

  nextSlide() {
    this.counter++;
    if (this.counter >= this.shuffledImageUrls.length)
      this.running = false;
    else
      this.activeImageUrl = this.shuffledImageUrls[this.counter];
  }

  removeImage(url: string) {
    this.imageUrls.forEach((item, index) => {
      if (item === url) this.imageUrls.splice(index, 1);
    });
  }

  selectFiles(event: any) {
    let selectedFiles = event.target.files;

    if (selectedFiles && selectedFiles[0]) {
      const numberOfFiles = selectedFiles.length;
      for (let i = 0; i < numberOfFiles; i++) {
        const reader = new FileReader();

        reader.onload = (e: any) => {
          console.log(e.target.result);
          this.imageUrls.push(e.target.result);
        };

        reader.readAsDataURL(selectedFiles[i]);
      }
    }
  }

  startPresentation() {
    if (this.imageUrls.length === 0) {
      alert('No images have been selected yet!');
      return;
    }

    this.shuffledImageUrls = this.imageUrls
      .map((value) => ({value, sort: Math.random()}))
      .sort((a, b) => a.sort - b.sort)
      .map(({value}) => value)

    this.counter = 0;
    this.activeImageUrl = this.shuffledImageUrls[this.counter];
    this.running = true;
  }
}
