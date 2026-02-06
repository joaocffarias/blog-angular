export interface Post {
  id: number;
  title: string;
  slug: string;
  author: string;
  date: Date;
  category: string;
  tags: string[];
  excerpt: string;
  content: string;
  imageUrl: string;
  readTime: number; // tempo de leitura em minutos
}
