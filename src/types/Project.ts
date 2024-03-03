interface Category {
  id: string;
  name: string;
  color: string;
}

export interface Project {
  id: string;
  title: string;
  colorCard: string;
  description: string;
  categories: Category[];
  coverUrl: string | null;
  githubUrl: string;
}
