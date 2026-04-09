export type Guest = {
  id: string;
  name: string;
  country: string;
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
  nose: string;
  beard: string;
  body: string;
  brows: string;
  glasses: string;
};

export const initialConfig: AvatarConfig = {
  seed: 'guest',
  background: 'b6e3f4',
  eyes: 'variant01',
  gesture: 'none',
  mouth: 'variant01',
  hair: 'variant01',
  nose: 'variant01',
  beard: 'none',
  body: 'variant07',
  brows: 'variant01',
  glasses: 'none',
};
