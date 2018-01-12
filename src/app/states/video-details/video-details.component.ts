import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../core/model/video/video';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {Comment} from '../../core/model/comment/comment';
import {VideoService} from '../../core/service/video/video.service';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {

  @Input() public video: Video;
  @Input() public videoComments: Comment[];
  public totalComments: number;
  public currentPage: number;
  public videoUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private videoService: VideoService) { }

  ngOnInit() {
    this.currentPage = 1;
    this.totalComments = 40;
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    this.videoService.totalComments.subscribe(totalComments => this.totalComments = totalComments);
  }

  public changePage(page: number): void {
    this.currentPage = page;
    this.videoService.getVideoComments(this.video.id, this.currentPage).subscribe(comments => this.videoComments = comments);
  }

}
