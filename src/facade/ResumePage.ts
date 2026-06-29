import { ResumeImporter } from '../importer/ResumeImporter';

/**
 * Фасад: єдина точка входу.
 */
export class ResumePage {
  async init(jsonPath: string): Promise<void> {
    // Завантажити дані через fetchData
    const data = await this.fetchData(jsonPath);

    // Імпортувати дані через ResumeImporter
    const importer = new ResumeImporter(data);
    importer.import();
  }

  private async fetchData(path: string): Promise<unknown> {
    // Завантажити JSON з вказаного шляху
    const response = await fetch(path);
    const data = await response.json();
    return data;
  }
}
