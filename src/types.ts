
export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  description: string[];
  logoColor: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
