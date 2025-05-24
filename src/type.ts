

export type MemeProps = {
  id: string;
  name: string;
  url: string;
  width: number;
  height: number;
  box_count: number;
  caption: number;
};
 

export type ImgflipResponse = {
  success: boolean;
  data: {
    memes: MemeProps[];
  };
};


