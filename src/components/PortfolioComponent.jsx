// src/components/Portfolio.jsx
import { useState } from 'preact/hooks';

export default function PortfolioComponent({ projects, categories }) {
  const [currentCategory, setCurrentCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;

  // Filter projects
  const filteredProjects =
    currentCategory === 'All'
      ? projects
      : projects.filter(
          (project) => project.category === currentCategory
        );

  // Pagination
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );
  const totalPages = Math.ceil(
    filteredProjects.length / projectsPerPage
  );

  return (
    <>
      {/* Category Filters */}
      <div class="bg-gradient-to-r from-slate-900 to bg-slate-700 px-6 py-4 text-white">
        <div class="container mx-auto text-center">
          <div class="inline-flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                onClick={() => {
                  setCurrentCategory(category);
                  setCurrentPage(1);
                }}
                class={`px-4 py-2 mx-4 rounded-full transition-colors ${
                  currentCategory === category
                    ? 'bg-slate-900'
                    : 'hover:bg-slate-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <section class="py-10 px-6 bg-gray-50 min-h-screen">
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project) => (
            <div
              key={project.id}
              class="rounded-lg shadow-md overflow-hidden bg-white border"
            >
              <img
                src={project.image}
                alt={project.name}
                class="h-48 w-full object-cover"
              />
              <div class="p-4">
                <h3 class="text-lg font-semibold">{project.name}</h3>
                <p class="text-gray-600">{project.description}</p>
                <p class="mt-2 text-blue-500 font-medium">
                  Category: {project.category}
                </p>
              </div>
            </div>
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <p class="text-center text-gray-500 mt-8">
            No projects available for this category.
          </p>
        )}
      </section>

      {/* Pagination */}
      <div class="py-6 px-6 bg-gray-50">
        <div class="container mx-auto flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              class={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
