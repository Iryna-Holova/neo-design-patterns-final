/**
 * Блок відображення навичок резюме
 */

import { Skills } from '../models/ResumeModel';
import { IBlock } from './BlockFactory';

export class SkillsBlock implements IBlock {
  constructor(private d: Skills) {}

  /**
   * Рендеринг блоку навичок
   */
  render(): HTMLElement {
    // Створюємо секцію
    const sec = document.createElement('section');
    sec.className = 'section skills';
    sec.innerHTML = '<h2>Skills</h2>';

    const skillsList = document.createElement('ul');
    skillsList.className = 'skills-list';
    for (const [category, skills] of Object.entries(this.d)) {
      const categoryItem = document.createElement('li');
      categoryItem.innerHTML = `<strong>${category}:</strong> ${skills.join(', ')}`;
      skillsList.appendChild(categoryItem);
    }
    sec.appendChild(skillsList);

    return sec;
  }
}
