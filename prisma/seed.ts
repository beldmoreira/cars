import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  let car = await prisma.car.findFirst();
  if (!car) {
    car = await prisma.car.create({
      data: {
        model: "HB20",
        licensePlate: "ABC9090",
        year: 2001,
        color: "AZUL",
      },
    });
  }

  console.log({ car });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
