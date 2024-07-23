
export declare global {
    namespace ReactNavigation {
      interface RootParamList {
        home: undefined;
        statistics: {
            percentage: string;
            type: string
        },
        'new-meal': undefined;
        feedback: {
          type: 'GOOD' | 'BAD';
        }
      }
    }
  }