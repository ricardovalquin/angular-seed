import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../core/model/video/video';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  @Input() public video: Video;

  constructor() { }

  ngOnInit() {
  }

}
