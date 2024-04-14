import { Clapperboard } from "lucide-react";
import Link from "next/link";

import { currentUser } from "@/lib/auth";

import { Button } from "@/components/ui/button";
import { UserButton } from "@/components/auth/user-button";
import { SignInButton } from "@/components/auth/signin-button";

export default async function Actions() {
  const user = await currentUser();

  return (
    <div className="flex items-center justify-end gap-x-2 ml-4 lg:ml-0">
      {!user && (
        <SignInButton />
      )}
      {!!user && (
        <div className="flex items-center gap-x-4">
          <Button
            size="sm"
            variant="ghost"
            className="text-muted-foreground hover:text-primary"
            asChild
          >
            <Link href={`/u/${user.username}`}>
              <Clapperboard className="h-5 w-5 lg:mr-2" />
              <span className="hidden lg:block">Dashboard</span>
            </Link>
          </Button>
          <UserButton />
        </div>
      )}
    </div>
  );
}
