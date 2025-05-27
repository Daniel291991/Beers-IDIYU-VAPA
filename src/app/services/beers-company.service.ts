import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

export interface Beer {
  id: number;
  name: string;
  description: string;
  stock: string;
  quality: string;
  color: string;
  image: string;
  price: number;
  packImages: { [key: string]: string };
  packOptions: string[];
}

export interface OrderDetails {
        items: CartItem[];
        contact: {
            name: string;
            email: string;
            address: string;
            phone: string;
        };
}

export interface CartItem {
    Guid: string;
    id: number;
    name: string;
    quantity: number;
    color: string;
    pack: string; // Nuevo campo para el tipo de pack
    image: string;
    price: number; // Precio por botella
    cant: number;
}

@Injectable({
  providedIn: 'root'
})
export class BeersCompanyService {

  constructor() { }

  fetchBeers(): Observable<Beer[]> {
    const beers: Beer[] = [
      {
        id: 1,
        name: 'Idiyü Golden Strong',
        description: 'Una cerveza dorada oscura y refrescante.',
        stock: 'Con Stock',
        quality: 'Alta',
        color: '#28a745',
        image: 'image/label/golden-strong.png',
        price: 2200,
        packImages: {
          '1 Botella': 'image/pack/golden-strong-1.png',
          '4 Botellas': 'image/pack/golden-strong-4.png',
          '6 Botellas': 'image/pack/golden-strong-6.png',
          '8 Botellas': 'image/pack/golden-strong-8.png',
        },
        packOptions: ['1 Botella', '4 Botellas', '6 Botellas', '8 Botellas'],
      },
      {
        id: 2,
        name: 'Idiyü Ambar',
        description: 'Una cerveza con un sabor maltoso y un toque de caramelo.',
        stock: 'Con Stock',
        quality: 'Media',
        color: '#28a745',
        image: 'image/label/ambar.png',
        price: 2000,
        packImages: {
          '1 Botella': 'image/pack/ambar-1.png',
          '4 Botellas': 'image/pack/ambar-4.png',
          '6 Botellas': 'image/pack/ambar-6.png',
          '8 Botellas': 'image/pack/ambar-8.png',
        },
        packOptions: ['1 Botella', '4 Botellas', '6 Botellas', '8 Botellas'],
      },
      {
        id: 3,
        name: 'Idiyü Stout',
        description: 'Una cerveza oscura con notas de café y chocolate.',
        stock: 'Con Stock',
        quality: 'Alta',
        color: '#28a745',
        image: 'image/label/stout.png',
        price: 2000,
        packImages: {
          '1 Botella': 'image/pack/stout-1.png',
          '4 Botellas': 'image/pack/stout-4.png',
          '6 Botellas': 'image/pack/stout-6.png',
          '8 Botellas': 'image/pack/stout-8.png',
        },
        packOptions: ['1 Botella', '4 Botellas', '6 Botellas', '8 Botellas'],
      },
      {
        id: 4,
        name: 'Idiyü Hazy IPA',
        description: 'Una cerveza amarga y aromática, con un fuerte sabor a lúpulo.',
        stock: 'Con Stock',
        quality: 'Premium',
        color: '#28a745',
        image: 'image/label/hazy-ipa.png',
        price: 2400,
        packImages: {
          '1 Botella': 'image/pack/hazy-ipa-1.png',
          '4 Botellas': 'image/pack/hazy-ipa-4.png',
          '6 Botellas': 'image/pack/hazy-ipa-6.png',
          '8 Botellas': 'image/pack/hazy-ipa-8.png',
        },
        packOptions: ['1 Botella', '4 Botellas', '6 Botellas', '8 Botellas'],
      },
      {
        id: 5,
        name: 'IDIYÜ VAPA EN BARRIL',
        description: 'Puedes escoger cualquier de nuestras 4 variedades, especial para fiestas o eventos.',
        stock: 'Con Stock',
        quality: 'Premium',
        color: '#28a745',
        image: 'image/pack/idiyu_vapa_barril_2.png',
        price: 120000,
        packImages: {
          '1 botella': 'image/label/hazy-ipa.png',
          'stout': 'image/label/stout.png',
          'ambar': 'image/label/ambar.png',
          'golde strong': 'image/label/golden-strong.png',
        },
        packOptions: ['1 Barril', '1 Barril', '1 Barril', '1 Barril'],
      }
    ];
    return of(beers).pipe(delay(2000));
  }

  sendOrder(order: OrderDetails): Observable<{ success: boolean; message: string }> {
    console.log('Pedido recibido:', order);
    return of({ success: true, message: 'Pedido recibido correctamente.' }).pipe(delay(1000));
  }
}