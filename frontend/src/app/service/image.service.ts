import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Image } from '../model/image.model';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<Image> {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<Image>(environment.baseUrl.concat(environment.imageUrl).concat("/upload"), formData);
  }

  download(id: string, style: any): Observable<void> {
    return this.img_download(id).pipe(map(
      img => this.viewImage(id, img, style)));
  }

  img_download(id: string): Observable<string> {
    return this.http.get(environment.baseUrl.concat(environment.imageUrl).concat('/download/').concat(id), { responseType: 'arraybuffer' })
      .pipe(map(data => {
        const contentType = 'image/jpeg';
        const byteArray = new Uint8Array(data);
        const blob = new Blob([byteArray], { type: contentType });
        return URL.createObjectURL(blob);
      })
    );
  }

  list(): Observable<Image[]> {
    return this.http.get<Image[]>(environment.baseUrl.concat(environment.imageUrl));
  }

  delete(id: string): Observable<void> {
    return this.http.delete<void>(environment.baseUrl.concat(environment.imageUrl).concat('/').concat(id));
  }

  private viewImage(id: string, src: string, style: any): void {
    const el = document.getElementById(id);
    if (!el?.querySelector('img')) {
      const img = document.createElement('img');
      img.classList.add('detail-image');
      img.src = src;
      // styling image
      img.style.objectFit = 'cover';
      img.style.transition = 'all .4s ease-in-out';
      img.style.zIndex = style.zIndex || '';
      img.style.width = style.width || '100%';
      img.style.height = style.height || 'auto';
      img.style.borderRadius = style.radius || '.5rem';
      img.style.filter = style.filter || '';

      el ? el.appendChild(img) : '';
    }
  }
}
