"use client"; // This is needed for using client-side hooks like useState

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [githubUrl, setGithubUrl] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("GitHub URL submitted:", githubUrl);
    // Here you would typically process the URL, e.g., send it to an API
  };

  return (
    <main className="flex flex-1 items-center justify-center bg-gradient-to-br from-zinc-50 to-zinc-100 font-sans dark:from-black dark:to-zinc-900">
      <div className="w-full max-w-md p-8 space-y-4 bg-white rounded-lg shadow-xl dark:bg-zinc-800/50 dark:border dark:border-zinc-700 backdrop-blur-sm">
        <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-white">
          Profile Evaluator and Analyzer
        </h1>
        <p className="text-center text-lg text-gray-600 dark:text-gray-300">
          Enter a GitHub profile URL to get an AI-powered evaluation.
        </p>
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            type="url"
            placeholder="https://github.com/username"
            value={githubUrl}
            onChange={(e) => setGithubUrl(e.target.value)}
            className="flex-grow"
            required
          />
          <Button type="submit">Analyze</Button>
        </form>
      </div>
    </main>
  );
}