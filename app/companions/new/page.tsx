import CompanionForm from "@/components/CompanionForm"
import { newCompanionPermissions } from "@/lib/actions/companion.action";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

const NewCompanion = async () => { 
  const { userId } = await auth();
  if(!userId) redirect('/sign-in');

  const canCreateCompanion = await newCompanionPermissions();

  return (
    <main className="min-lg:w-1/3 min-md:w-2/3 items-center justify-center">
      {canCreateCompanion ? (
        <article className="w-full gap-4 flex flex-col">
        <h1>Companion Builder</h1>

        <CompanionForm />
      </article>
      ) : (
        <article className="companion-limit">
             <Image src="/images/limit.svg" alt="Companion limit reached" width={360} height={230} />
            <div className="cta-badge">
              Upgrade your plan
            </div>
            <h1>You have reached your limit</h1>
            <h1> you have reached your companion Limit. Upgrade to create more companions and premium features </h1>
            <Link href="/subscription" className="btn-primary w-fu;; justify-center" >
              Upgrade My Plan
            </Link>

        </article>
      )}
    </main>
  )
}

export default NewCompanion
