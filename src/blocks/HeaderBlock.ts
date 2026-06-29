/**
 * Блок відображення заголовка резюме
 */

import { ResumeModel } from '../models/ResumeModel';
import { IBlock } from './BlockFactory';

export class HeaderBlock implements IBlock {
  constructor(private d: ResumeModel['header']) {}

  /**
   * Рендеринг блоку заголовка
   */
  render(): HTMLElement {
    // Створюємо контейнер для заголовка
    const header = document.createElement('header');
    header.className = 'section header';

    header.innerHTML = `
      <h1>${this.d.fullName}</h1>
      <p class="italic">${this.d.title}</p>
      <p>${this.d.contacts.email} ${this.d.contacts.phone} ${this.d.contacts.location}</p>
    `;

    return header;
  }
}
