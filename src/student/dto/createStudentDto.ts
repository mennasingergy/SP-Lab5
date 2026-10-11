import { course } from '../../course/models/courseschema';

export class createStudentDto {
  email: string;
  name: string;
  age: number;
  role: string;
  courses: course[];
  password: string;
}
