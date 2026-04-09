export type Guest = {
  id: string;
  name: string;
  country: string;
  flag: string;
  message: string;
  createdAt: string;
  config: any;
};

export type AvatarConfig = {
  seed: string;
  background: string;
  eyes: string;
  gesture: string;
  mouth: string;
  hair: string;
};

export const initialConfig: AvatarConfig = {
  seed: 'guest',
  background: 'b6e3f4',
  eyes: 'variant01',
  gesture: 'hand',
  mouth: 'variant01',
  hair: 'variant01',
};
