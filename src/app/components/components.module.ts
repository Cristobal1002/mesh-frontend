import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts/posts.component';
import { StoriesComponent } from './stories/stories.component';




@NgModule({
  declarations: [PostsComponent, StoriesComponent],
  imports: [
    CommonModule
  ],
  exports:[
    PostsComponent,
    StoriesComponent
  ]
})
export class ComponentsModule { }
