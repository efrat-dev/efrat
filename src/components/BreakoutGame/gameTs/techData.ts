export interface TechDefinition {
    name: string
  }
  
  export const techCategories: Record<string, TechDefinition[]> = {
    Frontend: [
      { name: 'React' },
      { name: 'Angular' },
      { name: 'Vue.js' },
      { name: 'HTML5' },
      { name: 'CSS3' },
      { name: 'Bootstrap' },
      { name: 'TailwindCSS' },
    ],
    Backend: [
      { name: 'Node.js' },
      { name: 'NestJS' },
      { name: 'ASP.NET Core' },
      { name: 'Entity Framework' },
      { name: 'RESTful API' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'C#' },
      { name: 'Java' },
      { name: 'Python' },
      { name: 'SQL' },
      { name: 'C' },
      { name: 'C++' },
    ],
    Database: [
      { name: 'MongoDB' },
      { name: 'SQL Server' },
      { name: 'PostgreSQL' },
    ],
    'Data Science': [
      { name: 'NumPy' },
      { name: 'Pandas' },
      { name: 'Matplotlib' },
      { name: 'Scikit-learn' },
      { name: 'PyTorch' },
    ],
    'Tools & Tech': [
      { name: 'Docker' },
      { name: 'Cloud Deployment' },
      { name: 'Unit Testing' },
      { name: 'GitHub Actions' },
      { name: 'Microservices' },
      { name: 'Database Migration' },
    ],
  }
  