export interface AstroProps {
  title: string;
  description: string;
  author: string;
}

export interface CardProps {
  cardNumber: number;
  text: string;
}

export interface ModuleClass {
  class: string;
  description: string;
}

export interface ModuleCourseProps {
  moduleNumber: string;
  classes: ModuleClass[];
}
