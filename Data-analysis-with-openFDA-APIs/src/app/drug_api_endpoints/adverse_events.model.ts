export interface AdverseEvents {
  date: string;
  count_nb: number;
}

export interface Results_1 {
  receivedate: string;
}

export interface ApiResponses_1 {
  count: number;
  next: string;
  results: Results_1[];
}