//import { Class, Teacher } from '../models';
// import * as models from '../models'

import Teacher from '../models/teacher';
import Class from '../models/class';

async function list(): Promise<Teacher[]> {
  // models.Teacher
  return await Teacher.findAll({
    order: [['id', 'ASC']],
  });
}

async function create(first: string, last: string): Promise<number> {
  console.log(`create teacher ${first}, ${last}`);
  const teacher = await Teacher.create({
    first,
    last,
  });
  return teacher.id;
}
async function get(id: number): Promise<Teacher | null> {
  const teacher = await Teacher.findByPk(id);
  if (!teacher) throw new Error(`404 not found for teacher: ${id}`);
  return teacher;
}

async function update(id: number, first: string, last: string): Promise<void> {
  const teacher = await Teacher.findByPk(id);
  if (!teacher) throw Error('404');

  await teacher.update({
    first,
    last,
  });
}

async function deleteTeacher(id: number): Promise<void> {
  const teacher = await Teacher.findByPk(id);
  if (!teacher) throw Error('404');

  await teacher.destroy();
}

// get classes
async function getClasses(id: number): Promise<Class[]> {
  return await Class.findAll({
    include: [
      {
        model: Teacher,
        where: { id },
        required: true,
      },
    ],
    order: [['id', 'ASC']],
  });
}

export default {
  list,
  create,
  get,
  update,
  deleteTeacher,
  getClasses,
};
