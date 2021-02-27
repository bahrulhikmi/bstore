import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'lorganic',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:44336',
    redirectUri: baseUrl,
    clientId: 'lorganic_App',
    responseType: 'code',
    scope: 'offline_access openid profile role email phone lorganic',
  },
  apis: {
    default: {
      url: 'https://localhost:44336',
      rootNamespace: 'lorganic',
    },
  },
} as Environment;
