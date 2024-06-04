import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/tabs";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
export default function AuthTabs() {
  return (
    <div>
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <LoginForm/>
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm/>
        </TabsContent>
      </Tabs>
    </div>
  );
}
