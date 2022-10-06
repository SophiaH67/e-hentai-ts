import IGDataReq from './interfaces/IGDataReq';
import IGDataRes from './interfaces/IGDataRes';
import fetch from 'node-fetch';

export default class API {
  constructor(public url = 'https://api.e-hentai.org/api.php') {}

  private async fetch<Req, Res>(payload: Req): Promise<Res> {
    const response = await fetch(this.url, {
      method: 'POST',
      body: JSON.stringify(payload),
    });
    return (await response.json()) as Res;
  }

  async gData(gids: [id: number, token: string][]): Promise<IGDataRes> {
    return this.fetch<IGDataReq, IGDataRes>({
      method: 'gdata',
      gidlist: gids,
      namespace: 1,
    });
  }
}
