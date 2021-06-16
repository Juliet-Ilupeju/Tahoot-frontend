import { Component, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { HostDataService } from 'src/app/services/host-data/host-data.service';

@Component({
  selector: 'app-new-question',
  templateUrl: './new-question.component.html',
  styleUrls: ['./new-question.component.css']
})
export class NewQuestionComponent {
  @ViewChild('questionInput') questionInput?: ElementRef;
  @Input() public questionId = '';
  @Input() public questionType = '';
  @Input() public questionText: string = '';
  @Input() public imageUrl = "https://cdn.blocktoro.com/wp-content/uploads/2020/06/Money-Heist-Season-5-Plot-Spoilers-and-Storyline-.jpg";
  @Output() public imageUrlChange = new EventEmitter<string>();

  constructor(private hostDataService: HostDataService) { }

  public onQuestionTypeChange(itemType: string): void {
    this.hostDataService.updateQuestionType(this.questionId, itemType);
    this.hostDataService.updateIsModified(this.questionId, true);
  }

  public onQuestionTextValueChange(questionText: string): void {
    this.hostDataService.updateQuestionText(this.questionId, questionText);
    this.hostDataService.updateIsModified(this.questionId, true);
  }

  image: any;
  

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.image = event.target.files[0];

      var reader = new FileReader();
      reader.readAsDataURL(this.image)
      reader.onload = (readerEvent: any) => {
        this.imageUrl = readerEvent.target.result;
        this.imageUrlChange.emit(this.imageUrl)
      }
    }
  }

}
