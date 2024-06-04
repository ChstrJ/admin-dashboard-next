import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableHeader,
  TableCaption,
  TableCell,
} from "../ui/table";
import Link from "next/link";
import posts from "../../../data/posts";
import { Post } from "../../../types/posts";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

type PostTableProps = {
  limit?: number;
  title?: string;
};

export default function PostTable({ limit, title }: PostTableProps) {
  const sortedPost: Post[] = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const filteredPost = limit ? sortedPost.slice(0, limit) : sortedPost;

  return (
    <div className="mt-10">
      <Card>
        <CardHeader>
          <CardTitle>{title ?? "Post"}</CardTitle>
          <CardDescription>A list of recent posts!</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="hidden md:table-cell">ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="hidden md:table-cell">Author</TableHead>
                <TableHead className="hidden md:table-cell"> Date</TableHead>
                <TableHead className="hidden md:table-cell">View</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredPost.map((post) => (
                <TableRow key={post.id}>
                  <TableCell className="hidden md:table-cell">{post.id}</TableCell>
                  <TableCell className="">
                    {post.title}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {post.author}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {post.date}
                  </TableCell>
                  <TableCell>
                    <Link href={`/posts/edit/${post.id}`}>
                      <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 font-bold rounded-md text-xs transition-all ">
                        Edit
                      </button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
