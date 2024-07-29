
export declare global {
    namespace ReactNavigation {
      interface RootParamList {
        home: undefined;
        statistics: {
            percentage: string;
            type: string
        },
        'new-meal': {
          mealId?: string;
        },
        feedback: {
          type: 'GOOD' | 'BAD';
        },
        details: {
          mealId: string;
        }
      }
    }
  }