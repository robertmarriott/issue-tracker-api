import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const newUser = await prisma.user.create({
    data: {
      username: 'marriott',
      avatarUrl: 'https://robohash.org/marriott?set=set2',
    },
  });

  console.log('Created new user: ', newUser);

  const allUsers = await prisma.user.findMany({
    include: { assignedIssues: true },
  });

  console.log('All users:');
  console.dir(allUsers, { depth: null });
}

(async () => {
  try {
    await main();
  } catch (err) {
    console.error(err);
  } finally {
    await prisma.$disconnect();
  }
})();
