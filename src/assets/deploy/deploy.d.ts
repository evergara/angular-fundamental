export interface IDeploy {
  env: {
    name: string;
  };
  baseAPI: string;
  subscriptionKey: string;
  appInsights: {
    instrumentationKey: string;
  };
}
