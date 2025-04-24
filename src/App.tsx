import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Loader from "./pages/Loader";
import ContextLayout from "./context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Box } from "@mui/material";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContextLayout />,
    children: [
      {
        path: "/",
        element: <Login />,
        loader: Loader,
      },
      {
        path: "/dashboard",
        element: <Home />,
        loader: Loader,
      },
    ],
  },
]);

function App() {
  return (
    <Box sx={{ maxWidth: "100%" }}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </Box>
  );
  // return <RouterProvider router={router} />;
}

export default App;
