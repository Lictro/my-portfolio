export interface Project {
  id: number;
  name: string;
  description: string;
  image: string;
  year: string;
  madeAt: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}
