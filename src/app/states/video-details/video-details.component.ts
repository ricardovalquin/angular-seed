import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../core/model/video/video';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  @Input() public video: Video;
  public videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url);
  }

}
