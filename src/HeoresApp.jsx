import { AuthProvider } from "./auth";
import { MainRouter } from "./main-router";

export const HeoresApp = () => {
  return (
    <AuthProvider>
      <MainRouter />
    </AuthProvider>
  );
};
