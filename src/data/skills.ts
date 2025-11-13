// Skills data categorized from Nikhila's resume

export interface Skill {
  name: string;
  level: number; // 1-100
  icon?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    icon: "💻",
    skills: [
      { name: "Bash", level: 90 },
      { name: "Python", level: 85 },
      { name: "Java", level: 85 },
      { name: "C", level: 90 },
      { name: "SQL", level: 90 }
    ]
  },
  {
    title: "Frontend & Backend Development",
    icon: "🎨",
    skills: [     
      { name: "React.js", level: 90 },
      { name: "Next.js", level: 85 },
      { name: "Node.js", level: 88 }
    ]
  },
  {
    title: "Cloud & DevOps",
    icon: "☁️",
    skills: [
      { name: "AWS", level: 90 },
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 95 },
      { name: "Jenkins", level: 97 },
      { name: "Terraform", level: 90 },
    ]
  },
  {
    title: "DevSecOps Tools",
    icon: "🤖",
    skills: [
      { name: "Trivy", level: 95 },
      { name: "SonarQube", level: 98 },
      { name: "Nexus", level: 98 },
      { name: "S3", level: 90 },
      { name: "Maven", level: 95 }
    ]
  }
];
