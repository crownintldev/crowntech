This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.



model Servicecategory{
  id            Int @id @default(autoincrement())
  catName       String
  createdAt     DateTime @default(now())

}

model Serviceinfo{
  id            Int @id @default(autoincrement())
  serviceImage  String
  serviceName   String
  serviceText   String
  createdAt     DateTime @default(now())
}

model Servicetab {
  id             Int @id @default(autoincrement())
  titlehead      String
  title          String
  heading        String
  description    String
  subdata        ServiceSubItem[] 
  createdAt      DateTime @default(now())
}

model ServiceSubItem {
  id               Int      @id @default(autoincrement())
  link             String?
  description      String
  mainItemId       Int
  mainItem         Servicetab @relation(fields: [mainItemId], references: [id], onDelete: Cascade)
}

model Serviceplan {
  id              Int      @id @default(autoincrement())
  title           String
  text            String?
  price           String
  chooseplan      String
  description     String?
  feature         Servicefeature[]
  createdAt       DateTime @default(now())
}

model Servicefeature {
  id              Int         @id @default(autoincrement())
  option          String
  mainItemId      Int
  mainItem        Serviceplan @relation(fields: [mainItemId], references: [id], onDelete: Cascade)
}

model Servicefaq {
  id              Int @id @default(autoincrement())
  Image           String
  heading         String
  description     String
  createdAt       DateTime @default(now())
}#   C r o w n t e c h 
 
 










 servicetabs   Servicetab[]
model Servicetab {
  id             Int      @id @default(autoincrement())
  titlehead      String
  title          String
  heading        String
  description    String
  subdata        ServiceSubItem[]
  createdAt      DateTime @default(now())
  serviceInfoId  Int
  serviceInfo    Serviceinfo @relation(fields: [serviceInfoId], references: [id])
  serviceplans   Serviceplan[]
}

model ServiceSubItem {
  id               Int      @id @default(autoincrement())
  link             String?
  description      String
  mainItemId       Int
  mainItem         Servicetab @relation(fields: [mainItemId], references: [id], onDelete: Cascade)
}

model Serviceplan {
  id              Int      @id @default(autoincrement())
  title           String
  text            String?
  price           String
  chooseplan      String
  description     String?
  feature         Servicefeature[]
  createdAt       DateTime @default(now())
  tabId           Int
  tab             Servicetab @relation(fields: [tabId], references: [id])
  servicefaqs     Servicefaq[] // Add this relation
}

model Servicefeature {
  id              Int         @id @default(autoincrement())
  option          String
  mainItemId      Int
  mainItem        Serviceplan @relation(fields: [mainItemId], references: [id], onDelete: Cascade)
}

model Servicefaq {
  id              Int      @id @default(autoincrement())
  Image           String
  heading         String
  description     String
  createdAt       DateTime @default(now())
  planId          Int?     // Add this field to reference Serviceplan
  plan            Serviceplan? @relation(fields: [planId], references: [id])
}
#   c r o w n t e c h n o l o g y  
 