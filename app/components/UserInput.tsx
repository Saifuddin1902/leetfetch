"use client";

import { Dispatch, SetStateAction } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  CardHeader,
  Card,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Info, User } from "lucide-react";
import { Endpoint } from "@/lib/api";
import { EndpointListDialog } from "./EndpointListDialog";

interface UserInputProps {
  username: string;
  setUsername: Dispatch<SetStateAction<string>>;
  displayedEndpoints: Endpoint[];
  setShowLimitedEndpoints: Dispatch<SetStateAction<boolean>>;
  showLimitedEndpoints: boolean;
}

export default function UserInput({
  username,
  setUsername,
  displayedEndpoints,
  setShowLimitedEndpoints,
  showLimitedEndpoints,
}: UserInputProps) {
  return (
    <Card className="mb-8 border-2 border-orange-200 dark:border-orange-800">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Test Configuration
        </CardTitle>
        <CardDescription>
          Enter a LeetCode username to test the API endpoints.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <Input
            placeholder="fyzxnshxik"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="flex-1"
          />
          <div className="flex gap-2 flex-wrap items-center">
            {" "}
            <Badge variant="secondary" className="px-3 py-2">
              {displayedEndpoints.length} Endpoints Available
            </Badge>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setShowLimitedEndpoints(!showLimitedEndpoints)}
              className="flex items-center gap-1"
            >
              <Info className="h-4 w-4" />
              {showLimitedEndpoints
                ? "Hide Limited Endpoints"
                : "Show All Endpoints"}
            </Button>
            <EndpointListDialog endpoints={displayedEndpoints} />{" "}
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          Find your username at{" "}
          <code className="font-mono text-xs">
            leetcode.com/u/
            <span className="text-orange-500">your-username</span>/
          </code>
          .
        </p>
      </CardContent>
    </Card>
  );
}
