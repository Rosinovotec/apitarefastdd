export function createTask({ title = '', description = '' }) {
  const trimmedTitle = title.trim();
  if (!trimmedTitle) {
    throw new Error('Título é obrigatório');
  }

  return {
    id: Date.now(),
    title: trimmedTitle,
    description
  };
}