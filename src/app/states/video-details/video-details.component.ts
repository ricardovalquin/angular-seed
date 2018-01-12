import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../core/model/video/video';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Comment} from '../../core/model/comment/comment';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  @Input() public video: Video;
  @Input() public videoComments: Comment[];
  public videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url);
  }

}
