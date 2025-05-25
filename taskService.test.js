import { createTask } from '../taskService.js';

describe('createTask', () => {
  it('deve lançar um erro ao tentar criar uma tarefa sem título', () => {
    expect(() => {
      createTask({ title: '', description: 'Estudar TDD' });
    }).toThrow('Título é obrigatório');
  });

  it('deve criar uma tarefa válida com título e descrição', () => {
    const task = createTask({ title: 'Estudar', description: 'Estudar TDD' });
    expect(task).toEqual(expect.objectContaining({
      title: 'Estudar',
      description: 'Estudar TDD'
    }));
  });
});