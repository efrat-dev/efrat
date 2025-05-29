// export interface TechDefinition {
//     name: string
//   }
  
//   export const techCategories: Record<string, TechDefinition[]> = {
//     Frontend: [
//       { name: 'React' },
//       { name: 'Angular' },
//       { name: 'Vue.js' },
//       { name: 'HTML5' },
//       { name: 'CSS3' },
//       { name: 'Bootstrap' },
//       { name: 'TailwindCSS' },
//     ],
//     Backend: [
//       { name: 'Node.js' },
//       { name: 'NestJS' },
//       { name: 'ASP.NET Core' },
//       { name: 'Entity Framework' },
//       { name: 'RESTful API' },
//       { name: 'TypeScript' },
//       { name: 'JavaScript' },
//       { name: 'C#' },
//       { name: 'Java' },
//       { name: 'Python' },
//       { name: 'SQL' },
//       { name: 'C' },
//       { name: 'C++' },
//     ],
//     Database: [
//       { name: 'MongoDB' },
//       { name: 'SQL Server' },
//       { name: 'PostgreSQL' },
//     ],
//     'Data Science': [
//       { name: 'NumPy' },
//       { name: 'Pandas' },
//       { name: 'Matplotlib' },
//       { name: 'Scikit-learn' },
//       { name: 'PyTorch' },
//     ],
//     'Tools & Tech': [
//       { name: 'Docker' },
//       { name: 'Cloud Deployment' },
//       { name: 'Unit Testing' },
//       { name: 'GitHub Actions' },
//       { name: 'Microservices' },
//       { name: 'Database Migration' },
//     ],
//   }
  
export interface TechDefinition {
  name: string
  iconUrl: string
}

export const techCategories: Record<string, TechDefinition[]> = {
  Frontend: [
    { name: 'React', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/react.svg' },
    { name: 'Angular', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/angular.svg' },
    { name: 'Vue.js', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vuedotjs.svg' },
    { name: 'HTML5', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/html5.svg' },
    { name: 'CSS3', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/css3.svg' },
    { name: 'Bootstrap', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/bootstrap.svg' },
    { name: 'TailwindCSS', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg' },
  ],
  Backend: [
    { name: 'Node.js', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nodedotjs.svg' },
    { name: 'NestJS', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nestjs.svg' },
    { name: 'ASP.NET Core', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dotnet.svg' },
    { name: 'Entity Framework', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/dotnet.svg' },
    { name: 'RESTful API', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postman.svg' },
    { name: 'TypeScript', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/typescript.svg' },
    { name: 'JavaScript', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/javascript.svg' },
    { name: 'C#', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/csharp.svg' },
    { name: 'Java', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/java.svg' },
    { name: 'Python', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/python.svg' },
    { name: 'SQL', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mysql.svg' },
    { name: 'C', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/c.svg' },
    { name: 'C++', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/cplusplus.svg' },
  ],
  Database: [
    { name: 'MongoDB', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/mongodb.svg' },
    { name: 'SQL Server', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/microsoftsqlserver.svg' },
    { name: 'PostgreSQL', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/postgresql.svg' },
  ],
  'Data Science': [
    { name: 'NumPy', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/numpy.svg' },
    { name: 'Pandas', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pandas.svg' },
    { name: 'Matplotlib', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/matplotlib.svg' },
    { name: 'Scikit-learn', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/scikitlearn.svg' },
    { name: 'PyTorch', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pytorch.svg' },
  ],
  'Tools & Tech': [
    { name: 'Docker', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/docker.svg' },
    { name: 'Cloud Deployment', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/vercel.svg' },
    { name: 'Unit Testing', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/jest.svg' },
    { name: 'GitHub Actions', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/githubactions.svg' },
    { name: 'Microservices', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/grpc.svg' },
    { name: 'Database Migration', iconUrl: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/prisma.svg' },
  ],
}
