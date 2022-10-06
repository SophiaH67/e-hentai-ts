import IGError from './IGError';
import { IGMetadata } from './IGMetadata';

export default interface IGDataRes {
  gmetadata: (IGMetadata | IGError)[];
}
