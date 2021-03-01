import { Component, OnInit } from '@angular/core';
import { PostService } from '../../posts/post.service';

@Component({
  selector: 'app-ome',
  templateUrl: './ome.component.html',
  styleUrls: ['./ome.component.scss'],
})
export class OmeComponent implements OnInit {
  private query = 'episode';

  getImg: string[] = [];

  public posts: {
    id: string;
    name: string;
    image: string;
    episode: string;
    characters: string;
    url: string;
    created: string;
  }[] = [];

  constructor(private postservis: PostService) {}

  ngOnInit(): void {
    this.getDataFromService();
    this.getDataFromService2();
  }

  private getDataFromService(): void {
    this.postservis.getListEpisodiosImg(this.query).subscribe((res: any) => {
      console.log('Response _>', res, this.query);
      const { info, results } = res;
      this.posts = [...this.posts, ...results];
    });
  }

  private getDataFromService2(): void {
    this.postservis.getListEpisodiosImg(this.query).subscribe((res: any) => {
      console.log('prueba Response ->', res, this.query);
      const { info, results } = res;
      this.getImg = [...this.getImg, ...results];
    });
  }
}