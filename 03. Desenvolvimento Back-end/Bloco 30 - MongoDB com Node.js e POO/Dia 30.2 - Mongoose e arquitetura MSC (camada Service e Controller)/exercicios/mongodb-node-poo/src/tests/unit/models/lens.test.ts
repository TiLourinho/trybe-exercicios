import { expect } from 'chai';
import sinon from 'sinon';
import LensModel from '../../../models/Lens';
import { Model } from 'mongoose';
import { lensMock, lensMockWithId, lensMockForChange, lensMockForChangeWithId } from '../../mocks/lensMock';

describe('Lens Model', () => {
  const lensModel = new LensModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(lensMockWithId);
		sinon.stub(Model, 'findOne').resolves(lensMockWithId);
		sinon.stub(Model, 'find').resolves([lensMockWithId]);
		sinon.stub(Model, 'findByIdAndUpdate').resolves(lensMockForChangeWithId);
		sinon.stub(Model, 'findByIdAndDelete').resolves(lensMockWithId);
	});

	after(() => {
		sinon.restore();
	});

  describe('creating a lens', () => {
		it('successfully created', async () => {
			const newLens = await lensModel.create(lensMock);
			expect(newLens).to.be.deep.equal(lensMockWithId);
		});
	});

	describe('searching a lens', () => {
		it('successfully found', async () => {
			const lensFound = await lensModel.readOne('62cf1fc6498565d94eba52cd');
			expect(lensFound).to.be.deep.equal(lensMockWithId);
		});

		it('_id not found', async () => {
			try {
				await lensModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

	describe('searching all frames', () => {
		it('successfully found', async () => {
			const allFrames = await lensModel.readOne('62cf1fc6498565d94eba52cd');
			expect(allFrames).to.be.deep.equal(lensMockWithId);
		});

		it('_id not found', async () => {
			try {
				await lensModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

	describe('changing a lens', () => {
		it('successfully changed', async () => {
			const lensChanged = await lensModel.update('62cf1fc6498565d94eba52cd', lensMockForChange);
			expect(lensChanged).to.be.deep.equal(lensMockForChangeWithId);
		});

		it('_id not found to change', async () => {
			try {
				await lensModel.update('123ERRADO', lensMockForChange);
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

	describe('removing a frame', () => {
		it('successfully removed', async () => {
			const framesRemoved = await lensModel.destroy('62cf1fc6498565d94eba52cd');
			expect(framesRemoved).to.be.deep.equal(lensMockWithId);
		});

		it('_id not found to change', async () => {
			try {
				await lensModel.destroy('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});
});