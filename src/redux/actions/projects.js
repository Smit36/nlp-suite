export const pushProject = (projects) => ({
  type: 'PUSH',
  projects,
});

export const addNewProject = (project) => ({
  type: 'ADD',
  project,
});

export const updateProject = (name) => ({
  type: 'UPDATE',
  name,
});

export const deleteProject = (name) => ({
  type: 'DELETE',
  name,
});
