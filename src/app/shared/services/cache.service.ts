import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CacheService {
  private static readonly EXPIRATION_HOUR = 6;
  private static readonly EXPIRATION_MINUTE = 30;

  constructor() {}

  // Return the cache if it is still valid
  get<T>(key: string): T | null {
    const rawCache = localStorage.getItem(key);
    if (!rawCache) return null;

    try {
      const parsedCache = JSON.parse(rawCache);
      const now = Date.now();

      // If the cache is still valid, return the data
      if (now < parsedCache.expiration) {
        return parsedCache.data;
      }

      this.removeCache(key); // Remove invalid cache
      return null;
    } catch (error) {
      console.error('Erro ao ler o cache:', error);
      return null;
    }
  }

  // Set the cache
  set(key: string, data: any): void {
    const expiration = this.getNextExpirationTimestamp();
    const cacheItem = { data, expiration };
    localStorage.setItem(key, JSON.stringify(cacheItem));
  }

  removeCache(key: string): void {
    localStorage.removeItem(key);
  }

  // Calculate the next expiration timestamp
  private getNextExpirationTimestamp(): number {
    const now = new Date();
    const expirationDate = new Date(now);

    // Define 6h30 da manhã (horário de Brasília)
    expirationDate.setHours(
      CacheService.EXPIRATION_HOUR,
      CacheService.EXPIRATION_MINUTE,
      0,
      0
    );

    // If the current time is greater than the expiration time, set the expiration time for the next day
    if (now > expirationDate) {
      expirationDate.setDate(expirationDate.getDate() + 1);
    }

    return expirationDate.getTime();
  }
}
