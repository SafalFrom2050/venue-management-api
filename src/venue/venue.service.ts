import { Injectable } from '@nestjs/common';
import { Venue } from '@prisma/client';

@Injectable()
export class VenueService {
  getVenues() {
    return [
      {
        name: 'Test',
        description: 'this is a very very very very very very long description',
        imageUrl: 'https://picsum.photos/800/600',
      },
    ];
  }

  createVenue() {
    return 'Still developing...';
  }

  editVenue(id: number) {
    return 'Still developing...';
  }

  deleteVenue(id: number) {
    return 'Still developing...';
  }
}
