// @ts-ignore this is just for type checks
import type { Prisma as PrismaNamespace, PrismaClient } from '@prisma/client'

import { NewPrismaClient } from '../_utils/types'
import testMatrix from './_matrix'

declare const newPrismaClient: NewPrismaClient<typeof PrismaClient>
declare let Prisma: typeof PrismaNamespace

testMatrix.setupTestSuite(
  () => {
    test('PrismaClientInitializationError for missing env', async () => {
      const prisma = newPrismaClient()
      await expect(prisma.$connect()).rejects.toBeInstanceOf(Prisma.PrismaClientInitializationError)
    })
  },
  { skipDb: true, skipDefaultClientInstance: true }, // So we can manually call connect for this test
)
