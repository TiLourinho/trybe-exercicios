import ILens from '../../interfaces/Lens';

const lensMock: ILens = {
  degree: 2,
  antiGlare: true,
  blueLightFilter: false,
};

const lensMockWithId: ILens & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  degree: 2,
  antiGlare: true,
  blueLightFilter: false,
};

const lensMockForChange:ILens = {
	degree: 9,
  antiGlare: true,
  blueLightFilter: true,
};

const lensMockForChangeWithId:ILens & { _id:string } = {
	_id: '62cf1fc6498565d94eba52cd',
	degree: 9,
  antiGlare: true,
  blueLightFilter: true,
};

export { lensMock, lensMockWithId, lensMockForChange, lensMockForChangeWithId };