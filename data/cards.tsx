import { Folder, MessageCircle, Newspaper, User } from "lucide-react";

export const cardData = [
    {
      title: "Post",
      icon: <Newspaper className="text-slate-500" size={30} />,
      count: 12,
    },
    {
      title: "Users",
      icon: <User className="text-slate-500" size={30} />,
      count: 52,
    },
    {
      title: "Comments",
      icon: <MessageCircle className="text-slate-500" size={30} />,
      count: 612,
    },
    {
      title: "Categories",
      icon: <Folder className="text-slate-500" size={30} />,
      count: 5,
    },
  ];