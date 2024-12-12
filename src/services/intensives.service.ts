import { axiosClassic } from '@/api/axios';
import type { IIntensive } from '@/types/intensive.types';

class IntensivesService {
  private _INTENSIVES = '/intensives';

  getAll() {
    return axiosClassic.get<IIntensive[]>(`${this._INTENSIVES}`);
  }
}
export const intensivesService = new IntensivesService();
