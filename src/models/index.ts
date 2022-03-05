export interface Country {
  id: number;
  position: number;
  name: string;
  province: string | undefined;
  flag: string | undefined;
  selected: boolean;
  color: string;
  total: Timeline;
  daily: Timeline;
}

export interface Timeline {
  [key: string]: any;
  cases: { [key: string]: number };
  deaths: { [key: string]: number };
}
