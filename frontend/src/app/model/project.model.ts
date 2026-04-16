import { Skill } from "./skill.model";
import { Image } from "./image.model";
import { Link } from "./link.model";

export interface Project {
  id: string | null;
  name: string;
  description: string;
  image: Image;
  skills: Skill[];
  links: Link[];
  // links: any;
}
