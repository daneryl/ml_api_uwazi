import classificationRoutes from '../routes.js';
import instrumentRoutes from '../../utils/instrumentRoutes';
import {catchErrors} from '../../utils/jasmineHelpers';

describe('classification', () => {
  let routes;

  beforeEach(() => {
    routes = instrumentRoutes(classificationRoutes);
  });

  describe('POST', () => {
    let req;
    beforeEach(() => {
      req = {
        body: {test: 'document'}
      };
    });

    it('should be false', () => {
      //expect(routes.post('/api/entities', req)).toNeedAuthorization();
      expect(true).toBe(false);
    });
  });
});
