import { getSession } from 'next-auth/react';
import { NextApiRequest, NextApiResponse } from 'next';

import { prisma } from '../../../config/db';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      await createTodo(req, res);
      break;
    case 'GET':
      await getTodos(req, res);
      break;
  }
}

const createTodo = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getSession({ req });
    if (!session) {
      return res.status(400).json({ msg: 'Invalid authentication' });
    }

    const userId: string = session.userId as string;
    const todo: string = req.body.todo;

    if (!todo) {
      return res.status(400).json({ msg: 'Missing todo content' });
    }

    await prisma.todo.create({
      data: {
        name: todo.toLowerCase(),
        userId
      }
    });

    res.json({ msg: 'Todo created successfully' });
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};

const getTodos = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const session = await getSession({ req });
    if (!session) {
      return res.status(400).json({ msg: 'Invalid authentication' });
    }

    const userId: string = session.userId as string;

    const todos = await prisma.todo.findMany({ where: { userId: userId } });

    res.json(todos);
  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
