/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import express, { Request, Response, Router } from 'express';
import Plants from './plants';

const app = express();
const plantsInstance = new Plants();

app.use(express.json());

const plantsRouter = Router();

plantsRouter.get('/', async (_req: Request, res: Response) => {
  const plants = await (plantsInstance.getPlants());

  res.send(plants);
});

plantsRouter.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const plant = await (plantsInstance.getPlantById(id));

  res.send(plant);
});

plantsRouter.delete('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const plant = await (plantsInstance.removePlantById(id));

  res.send(plant);
});

plantsRouter.put('/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const newPlant = req.body;
  const plant = await (plantsInstance.editPlant(id, newPlant));

  res.send(plant);
});

plantsRouter.post('/', async (req: Request, res: Response) => {
  const newPlant = req.body;
  const plant = await (plantsInstance.savePlant(newPlant));

  res.send(plant);
});

app.use('/plants', plantsRouter);

app.get('/sunny/:id', async (req: Request, res: Response) => {
  const { id } = req.params;
  const plant = await (plantsInstance.getPlantsThatNeedsSunWithId(id));

  res.send(plant);
});

app.listen(3001, () => {
  console.log('Ouvindo a porta 3001!');
});