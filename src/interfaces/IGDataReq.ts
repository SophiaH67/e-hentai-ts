export default interface IGDataReq {
  method: 'gdata';
  gidlist: [id: number, token: string][];
  namespace: 1;
}
