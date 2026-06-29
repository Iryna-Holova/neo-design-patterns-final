/**
 * Конкретна реалізація імпортера резюме
 * Наслідується від AbstractImporter і реалізує абстрактні методи
 */

import { AbstractImporter } from './AbstractImporter';
import { ResumeModel } from '../models/ResumeModel';
import { BlockFactory, BlockType } from '../blocks/BlockFactory';

export class ResumeImporter extends AbstractImporter<ResumeModel> {
  /**
   * Перевіряє, чи відповідає JSON-об'єкт очікуваній структурі
   */
  protected validate(): void {
    if (typeof this.raw !== 'object' || this.raw === null) {
      throw new Error('Invalid JSON format');
    }

    for (const field of [
      'header',
      'summary',
      'experience',
      'education',
      'skills',
    ]) {
      if (!(field in this.raw)) {
        throw new Error(`Missing required field: ${field}`);
      }
    }
  }

  /**
   * Перетворює JSON-дані у внутрішню модель резюме
   */
  protected map(): ResumeModel {
    return this.raw as ResumeModel;
  }

  /**
   * Рендерить модель резюме у DOM
   */
  protected render(model: ResumeModel): void {
    const root = document.getElementById('resume-content')!;
    const factory = new BlockFactory();

    const blocks: BlockType[] = [
      'header',
      'summary',
      'experience',
      'education',
      'skills',
    ];

    for (const type of blocks) {
      const block = factory.createBlock(type, model);
      root.appendChild(block.render());
    }
  }
}
