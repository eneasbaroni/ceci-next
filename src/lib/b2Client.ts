import { S3Client } from '@aws-sdk/client-s3'

export const b2Client = new S3Client({
  endpoint: process.env.B2_ENDPOINT!,
  region: 'auto',
  credentials: {
    accessKeyId: process.env.B2_ACCESS_KEY_ID!,
    secretAccessKey: process.env.B2_SECRET_ACCESS_KEY!,
  },
})
