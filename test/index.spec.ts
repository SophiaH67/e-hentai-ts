import API from '../src';

const realGallery = 2123028;
const realGalleryToken = 'b98b0be894';

describe('api', () => {
  const api = new API();

  describe('gData', () => {
    it('should return gData', async () => {
      const gData = await api.gData([[realGallery, realGalleryToken]]);
      expect(gData.gmetadata[0]).toBeTruthy();
      expect(gData.gmetadata[0].gid).toBe(realGallery);
      //@ts-expect-error - We are testing if it is defined
      expect(gData.gmetadata[0].token).toBe(realGalleryToken);
    });

    it('should return an error', async () => {
      const api = new API();
      const res = await api.gData([[realGallery, '']]);
      //@ts-expect-error - We are testing if it is defined
      expect(res.gmetadata[0].error).toBeTruthy();
    });

    it('should return both gData and an error', async () => {
      const res = await api.gData([
        [realGallery, realGalleryToken],
        [realGallery, ''],
      ]);
      expect(res.gmetadata[0].gid).toBe(realGallery);
      //@ts-expect-error - We are testing if it is defined
      expect(res.gmetadata[0].token).toBe(realGalleryToken);
      //@ts-expect-error - We are testing if it is defined
      expect(res.gmetadata[1].error).toBeTruthy();
    });
  });
});
