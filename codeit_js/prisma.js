// prisma client
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const id = 'b8f11e76-0a9e-4b3f-bccf-8d9b4fbf331e';

const userData = {
  email: 'yjkim@example.com',
  firstName: '유진',
  lastName: '김',
  address: '충청북도 청주시 북문로 210번길 5',
};;

// 여러 유저 조회
const users = await prisma.user.findMany();

// 유저 1명 조회
const user = await prisma.user.findUnique({
  where: {
    id,
  },
});

// 유저 생성
const user = await prisma.user.create({
  data: userData
});

// 유저 수정
const user = await prisma.user.update({
  where: {
    id,
  },
  data: {
    email: 'yjkim2@example.com',
  },
});

// 유저 삭제
const user = await prisma.user.delete({
  where: {
    id,
  },
});


// 쿼리 파라미터
app.get('/users', async (req, res) => {
    const { offset = 0, limit = 10, order = 'newest' } = req.query;
    let orderBy;
    switch (order) {
      case 'oldest':
        orderBy = { createdAt: 'asc' };
        break;
      case 'newest':
      default:
        orderBy = { createdAt: 'desc' };
    }
    const users = await prisma.user.findMany({
      orderBy,
      skip: parseInt(offset),
      take: parseInt(limit),
    });
    res.send(users);
  });



// 데이터 시딩
import { PrismaClient } from '@prisma/client';
import { USERS, PRODUCTS } from './mock.js';

const prisma = new PrismaClient();

async function main() {
  // 기존 데이터 삭제
  await prisma.user.deleteMany();
  await prisma.product.deleteMany();

  // 목 데이터 삽입
  await prisma.user.createMany({
    data: USERS,
    skipDuplicates: true,
  });

  await prisma.product.createMany({
    data: PRODUCTS,
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });




  
// 유효성 검사
  import * as s from 'superstruct';

const CATEGORIES = [
  'FASHION',
  'BEAUTY',
  'SPORTS',
  'ELECTRONICS',
  'HOME_INTERIOR',
  'HOUSEHOLD_SUPPLIES',
  'KITCHENWARE',
];

export const CreateUser = s.object({
  email: s.define('Email', isEmail),
  firstName: s.size(s.string(), 1, 30),
  lastName: s.size(s.string(), 1, 30),
  address: s.string(),
});

export const PatchUser = s.partial(CreateUser);

export const CreateProduct = s.object({
  name: s.size(s.string(), 1, 60),
  description: s.string(),
  category: s.enums(CATEGORIES),
  price: s.min(s.number(), 0),
  stock: s.min(s.integer(), 0),
});

export const PatchProduct = s.partial(CreateProduct);






// 오류처리
import { PrismaClient, Prisma } from '@prisma/client';

// ...

function asyncHandler(handler) {
  return async function (req, res) {
    try {
      await handler(req, res);
    } catch (e) {
      if (
        e instanceof Prisma.PrismaClientValidationError ||
        e.name === 'StructError'
      ) {
        res.status(400).send({ message: e.message });
      } else if (
        e instanceof Prisma.PrismaClientKnownRequestError &&
        e.code === 'P2025'
      ) {
        res.sendStatus(404);
      } else {
        res.status(500).send({ message: e.message });
      }
    }
  };
}

// ...

app.post('/users', asyncHandler(async (req, res) => {
  assert(req.body, CreateUser); 
  // ...
}));
