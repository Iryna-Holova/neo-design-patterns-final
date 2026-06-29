/**
 * Патерн Composite (Компоновщик)
 *
 * Блок досвіду роботи, який містить дочірні блоки проєктів
 */

import { Experience, Project } from '../models/ResumeModel';
import { IBlock } from './BlockFactory';
import { ProjectBlock } from './ProjectBlock';
import { HighlightDecorator } from '../decorators/HighlightDecorator';

export class ExperienceBlock implements IBlock {
  constructor(private d: Experience[]) {}

  /**
   * Рендеринг блоку досвіду роботи
   */
  render(): HTMLElement {
    // Створюємо контейнер для досвіду роботи
    const container = document.createElement('section');
    container.className = 'section experience';
    container.innerHTML = '<h2>Experience</h2>';

    for (const exp of this.d) {
      const expItem = document.createElement('div');
      expItem.className = 'experience-item';
      expItem.innerHTML = `
        <p><strong>${exp.position}</strong> at <span class="italic">${exp.company}</span> (${exp.start} - ${exp.end})</p>
      `;

      for (const project of exp.projects) {
        const projectBlock = new ProjectBlock(project);
        const projectElement = project.isRecent
          ? new HighlightDecorator(projectBlock).render()
          : projectBlock.render();

        expItem.appendChild(projectElement);
      }

      container.appendChild(expItem);
    }

    return container;
  }
}
