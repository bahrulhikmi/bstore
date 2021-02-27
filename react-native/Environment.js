const ENV = {
  dev: {
    apiUrl: 'http://localhost:44336',
    oAuthConfig: {
      issuer: 'http://localhost:44336',
      clientId: 'lorganic_App',
      clientSecret: '1q2w3e*',
      scope: 'offline_access lorganic',
    },
    localization: {
      defaultResourceName: 'lorganic',
    },
  },
  prod: {
    apiUrl: 'http://localhost:44336',
    oAuthConfig: {
      issuer: 'http://localhost:44336',
      clientId: 'lorganic_App',
      clientSecret: '1q2w3e*',
      scope: 'offline_access lorganic',
    },
    localization: {
      defaultResourceName: 'lorganic',
    },
  },
};

export const getEnvVars = () => {
  // eslint-disable-next-line no-undef
  return __DEV__ ? ENV.dev : ENV.prod;
};
