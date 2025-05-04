import { request, response } from "express";
import { MockingService } from "./mocks.service.js";
import { petDao } from "../pets/pet.dao.js";
import { userDao } from "../users/user.dao.js";


class MocksController {
  async getMockingPets(req = request, res = response) {
    try {
      const pets = await MockingService.generateMockingPets(100); 
      res.status(200).json({ status: "success", payload: pets });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }

  async getMockingUsers(req = request, res = response) {
    try {
      const users = await MockingService.generateMockingUsers(50);
      res.status(200).json({ status: "success", payload: users });
    } catch (error) {
      res.status(500).json({ status: "error", message: error.message });
    }
  }

async generateData(req = request, res = response) {
  try {
    const { pets: pNum, users: uNum } = req.body;
    

    const pets = await MockingService.generateMockingPets(pNum);
    await petDao.removeAll();
    const createdPets = await petDao.createMany(pets);
    

    const users = await MockingService.generateMockingUsers(uNum);
    await userDao.removeAll();
    const createdUsers = await userDao.createMany(users);
    
    res.status(201).json({ 
      status: "success", 
      payload: { 
        pets: createdPets, 
        users: createdUsers 
      } 
    });
  } catch (error) {
    res.status(500).json({ status: "error", message: error.message });
  }
}

}

export const mocksController = new MocksController();



