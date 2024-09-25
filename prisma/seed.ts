import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const saltRounds = 10

  const users = [
    {
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
    },
    {
      name: 'Jane Smith',
      email: 'jane@example.com',
      password: 'password456',
    },
  ]

  for (const user of users) {
    const hashedPassword = await bcrypt.hash(user.password, saltRounds)
    await prisma.user.upsert({
      where: { email: user.email },
      update: {},
      create: {
        name: user.name,
        email: user.email,
        password: hashedPassword,
      },
    })
  }

  console.log('Seed data inserted successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
