import { prisma } from "../config/database.js";

async function getCars() {
  return prisma.car.findMany();
}

async function getCar(id: number) {
  return prisma.car.findFirst({
    where: { id },
  });
}

async function getCarWithLicensePlate(licensePlate: string) {
  return prisma.car.findFirst({
    where: { licensePlate },
  });
}

async function createCar(
  model: string,
  licensePlate: string,
  year: number,
  color: string
) {
  await prisma.car.create({
    data: {
      model,
      licensePlate,
      year,
      color,
    },
  });
}

async function deleteCar(id: number) {
  return prisma.car.delete({ where: { id } });
}

async function updateCar(id: number) {
  return prisma.car.update({
    where: { id },
    data: {
      forSale: {
        set: false,
      },
    },
  });
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar,
  updateCar,
};

export default carRepository;
