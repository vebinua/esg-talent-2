export interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio?: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface JobOpportunity {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  description: string;
}