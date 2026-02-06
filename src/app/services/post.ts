import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [
    {
      id: 1,
      title: 'Introdução ao Angular 17',
      slug: 'introducao-angular-17',
      author: 'Tech Blog',
      date: new Date('2024-01-15'),
      category: 'Frontend',
      tags: ['Angular', 'TypeScript', 'Web Development'],
      excerpt: 'Descubra as novidades do Angular 17 e como começar a desenvolver aplicações modernas.',
      content: 'Conteúdo completo do post sobre Angular 17...',
      imageUrl: 'assets/images/angular-17.jpg',
      readTime: 5
    },
    {
      id: 2,
      title: 'TypeScript: Guia Essencial',
      slug: 'typescript-guia-essencial',
      author: 'Tech Blog',
      date: new Date('2024-01-10'),
      category: 'Linguagens',
      tags: ['TypeScript', 'JavaScript', 'Programming'],
      excerpt: 'Aprenda TypeScript do zero e melhore a qualidade do seu código JavaScript.',
      content: 'Conteúdo completo do post sobre TypeScript...',
      imageUrl: 'assets/images/typescript.jpg',
      readTime: 8
    },
    {
      id: 3,
      title: 'RxJS e Programação Reativa',
      slug: 'rxjs-programacao-reativa',
      author: 'Tech Blog',
      date: new Date('2024-01-05'),
      category: 'Frontend',
      tags: ['RxJS', 'Angular', 'Reactive Programming'],
      excerpt: 'Entenda os conceitos de programação reativa e como usar RxJS em seus projetos.',
      content: 'Conteúdo completo do post sobre RxJS...',
      imageUrl: 'assets/images/rxjs.jpg',
      readTime: 10
    }
  ];

  constructor() { }

  getAllPosts(): Observable<Post[]> {
    return of(this.posts);
  }

  getPostBySlug(slug: string): Observable<Post | undefined> {
    const post = this.posts.find(p => p.slug === slug);
    return of(post);
  }

  getPostsByCategory(category: string): Observable<Post[]> {
    const filtered = this.posts.filter(p => p.category === category);
    return of(filtered);
  }
}
