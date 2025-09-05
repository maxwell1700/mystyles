export type UserPreferences = {
  gender: string;
  bodyType: string;
  height: string;
  weight: string;
  stylePreferences: string[];
  goals: string[];
};

export type AuthUser = {
  id: string;
  email: string;
  name?: string;
  preferences?: UserPreferences;
};

export type NavigationProps = {
  navigation: any; // Replace with proper typing when navigation structure is finalized
};

// Add more types as needed
