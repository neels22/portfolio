import { prisma } from './db'
import bcrypt from 'bcryptjs'

export async function getAdminByUsername(username: string) {
  return prisma.admin.findUnique({
    where: { username },
  })
}

export async function createAdmin(username: string, password: string) {
  const hashedPassword = await bcrypt.hash(password, 12)
  
  return prisma.admin.create({
    data: {
      username,
      password: hashedPassword,
    },
  })
}

export async function verifyAdminCredentials(username: string, password: string) {
  const admin = await getAdminByUsername(username)
  
  if (!admin) {
    return false
  }
  
  return bcrypt.compare(password, admin.password)
}

export async function updateAdminPassword(username: string, newPassword: string) {
  const hashedPassword = await bcrypt.hash(newPassword, 12)
  
  return prisma.admin.update({
    where: { username },
    data: { password: hashedPassword },
  })
} 