export type AppRow = {
  appId: string;
  appName: string;
  appSources: string[];
  category: string;
};

export type AppRows = {
  appRows: AppRow[];
  total: number;
};
