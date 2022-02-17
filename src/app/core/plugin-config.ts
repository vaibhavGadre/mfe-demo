export const microFrontends = 
  {
  compliance: {
    mfEntry: 'http://localhost:4201/remoteEntry.js',
    name: 'compliance',
    exposedModule: 'ComplianceModule',
    ngModuleName: 'ComplianceModule'
  },
  infra: {
    mfEntry: 'http://localhost:4202/remoteEntry.js',
    name: 'infra',
    exposedModule: 'InfraModule',
    ngModuleName: 'InfraModule'
  }
};
