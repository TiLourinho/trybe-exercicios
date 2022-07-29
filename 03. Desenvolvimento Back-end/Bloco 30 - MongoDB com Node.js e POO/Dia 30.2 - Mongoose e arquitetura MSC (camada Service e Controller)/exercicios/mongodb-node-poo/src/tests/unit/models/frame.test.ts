import { expect } from 'chai';
import sinon from 'sinon';
import FrameModel from '../../../models/Frame';
import { Model } from 'mongoose';
import { frameMock, frameMockWithId, frameMockForChange, frameMockForChangeWithId } from '../../mocks/frameMock';

describe('Frame Model', () => {
  const frameModel = new FrameModel();

	before(() => {
		sinon.stub(Model, 'create').resolves(frameMockWithId);
		sinon.stub(Model, 'findOne').resolves(frameMockWithId);
		sinon.stub(Model, 'find').resolves([frameMockWithId]);
		sinon.stub(Model, 'findByIdAndUpdate').resolves(frameMockForChangeWithId);
		sinon.stub(Model, 'findByIdAndDelete').resolves(frameMockWithId);
	});

	after(() => {
		sinon.restore();
	});

  describe('creating a frame', () => {
		it('successfully created', async () => {
			const newFrame = await frameModel.create(frameMock);
			expect(newFrame).to.be.deep.equal(frameMockWithId);
		});
	});

	describe('searching a frame', () => {
		it('successfully found', async () => {
			const framesFound = await frameModel.readOne('62cf1fc6498565d94eba52cd');
			expect(framesFound).to.be.deep.equal(frameMockWithId);
		});

		it('_id not found', async () => {
			try {
				await frameModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

	describe('searching all frames', () => {
		it('successfully found', async () => {
			const allFrames = await frameModel.readOne('62cf1fc6498565d94eba52cd');
			expect(allFrames).to.be.deep.equal(frameMockWithId);
		});

		it('_id not found', async () => {
			try {
				await frameModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

	describe('changing a frame', () => {
		it('successfully changed', async () => {
			const framesChanged = await frameModel.update('62cf1fc6498565d94eba52cd', frameMockForChange);
			expect(framesChanged).to.be.deep.equal(frameMockForChangeWithId);
		});

		it('_id not found to change', async () => {
			try {
				await frameModel.update('123ERRADO', frameMockForChange);
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});

	describe('removing a frame', () => {
		it('successfully removed', async () => {
			const framesRemoved = await frameModel.destroy('62cf1fc6498565d94eba52cd');
			expect(framesRemoved).to.be.deep.equal(frameMockWithId);
		});

		it('_id not found to change', async () => {
			try {
				await frameModel.destroy('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq('InvalidMongoId');
			}
		});
	});
});