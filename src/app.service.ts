import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPerson(person: string, age: number): Person {
    return { person, age };
  }
}
