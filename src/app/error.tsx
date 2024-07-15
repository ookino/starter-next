"use client";

import { Button } from "~/components/ui/button";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col justify-center gap-4">
        <p className="mt-4 text-gray-500">
          {error.message || "Something went wrong"}
        </p>
        <Button>Try Again</Button>
      </div>
    </div>
  );
}
