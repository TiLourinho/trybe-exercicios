import { z } from 'zod';
import { frameZodSchema } from '../schemas';

type IFrame = z.infer<typeof frameZodSchema>;

export default IFrame;
export { frameZodSchema };