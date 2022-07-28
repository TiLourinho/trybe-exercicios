import { z } from 'zod';
import { lensZodSchema } from '../schemas';

type ILens = z.infer<typeof lensZodSchema>;

export default ILens;
export { lensZodSchema };