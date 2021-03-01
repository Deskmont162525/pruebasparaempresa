import { Component, OnInit } from '@angular/core';
import { PostService } from '../../posts/post.service';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {
  private query = 'character';

  public posts: {
    id: string;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    image: string;
    url: string;
  }[] = [];
  constructor(private postservis: PostService) {}

  ngOnInit(): void {
    this.getDataFromService();
  }

  private getDataFromService(): void {
    this.postservis.getListEpisodiosImg(this.query).subscribe((res: any) => {
      console.log('Response _>', res, this.query);
      const { info, results } = res;
      this.posts = [...this.posts, ...results];
    });
  }
}
