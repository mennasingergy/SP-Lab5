import { course } from '../../course/models/courseschema';

export class RegisterRequestDto {
  email: string;
  name: string;
  age: number;
  courses: course[] = [];
  password: string;
  role: string = 'student';
}
