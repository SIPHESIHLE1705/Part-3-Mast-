// types.tsx
export type MenuItem = {
    id: string;
    dishName: string;
    description: string;
    cost: number;
    course: string;
  };
  
  export type RootStackParamList = {
    Home: undefined;
    MenuManagement: undefined;
    Filter: undefined;
  };
  