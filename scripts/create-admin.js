const { PrismaClient } = require('../lib/generated/prisma')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function createAdmin() {
  try {
    // Get username and password from command line arguments or use defaults
    const username = process.argv[2] || 'admin'
    const password = process.argv[3] || 'admin123'

    // Check if admin already exists
    const existingAdmin = await prisma.admin.findUnique({
      where: { username }
    })

    if (existingAdmin) {
      console.log(`Admin user '${username}' already exists!`)
      return
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 12)

    // Create the admin user
    const admin = await prisma.admin.create({
      data: {
        username,
        password: hashedPassword,
      },
    })

    console.log(`Admin user created successfully!`)
    console.log(`Username: ${admin.username}`)
    console.log(`Password: ${password}`)
    console.log(`Please change the password after first login.`)

  } catch (error) {
    console.error('Error creating admin user:', error)
  } finally {
    await prisma.$disconnect()
  }
}

createAdmin() 