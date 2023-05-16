import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";
import { AppLogo } from "../AppLogo/AppLogo";

export const AppLayout = ({ children }) => {
  const { user } = useUser();
  return (
    <div className="grid grid-cols-[300px_1fr] h-screen">
      <div className="flex flex-col text-white overflow-hidden">
        <div className="bg-slate-800">
          <div className="flex justify-center">
            <AppLogo />
          </div>
          <div className="flex flex-col gap-2 items-center pt-10 text-2xl px-1">
            <div className="flex">
              <div className="hover:text-yellow-500">
                <Link href="/post/recipientList"> Recipient</Link>
              </div>
              /
              <div className="hover:text-yellow-500">
                <Link href="/post/new">Add Recipient</Link>
              </div>
            </div>
            <div className="flex">
              <div className="hover:text-yellow-500">
                <Link href="/donorList"> Donor</Link>
              </div>
              /
              <div className="hover:text-yellow-500">
                <Link href="/donor">Add Donor</Link>
              </div>
            </div>
            <div className="flex">
              <div className="hover:text-yellow-500">
                <Link href="/itemList"> Item</Link>
              </div>
              /
              <div className="hover:text-yellow-500">
                <Link href="/item">Add Item</Link>
              </div>
            </div>
            <div className="flex">
              <div className="hover:text-yellow-500">
                <Link href="/kitList">Kit</Link>
              </div>
              /
              <div className="hover:text-yellow-500">
                <Link href="/kit">Add Kit</Link>
              </div>
            </div>
            <div className="flex">
              <div className="hover:text-yellow-500">
                <Link href="/receivingItemList">Received</Link>
              </div>
              /
              <div className="text-xl pt-1 hover:text-yellow-500">
                <Link href="/receivingItem">Add Receiving Item</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-gradient-to-b from-slate-800 to-cyan-800"></div>
        <div className="flex items-center bg-cyan-800 border-t border-t-black/50 h-20 px-2">
          <div>
            {!!user ? (
              <div className="flex gap-2 ">
                <div className="min-w-[50px]">
                  <Image
                    src={user.picture}
                    alt={user.name}
                    height={50}
                    width={50}
                    className="rounded-full"
                  />
                </div>
                <div className="flex-1">
                  <div className="font-bold">{user.email}</div>
                  <Link href="/api/auth/logout" className="text-sm">
                    Logout
                  </Link>
                </div>
              </div>
            ) : (
              <Link href="/api/auth/login">Login</Link>
            )}
          </div>
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};
